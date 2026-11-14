import './ui/style.css';
import { applyTuning, initConsole } from './ui/console';
applyTuning(); // saved console edits apply before anything reads the balance tables
import type { Game, GNode } from './sim/types';
import { PLAYER } from './sim/types';
import { CFG } from './sim/config';
import { newGame } from './sim/mapgen';
import { step, exec, type Cmd } from './sim/sim';
import { canTarget, fleetSeen, updateVision, corridorReach, canCorridor, canMissile, slotsFree, floorOf, crewMax, moveEta, activeSpecs, corridorPath } from './sim/core';
import { draw, nodeR, known, toScreen, nodeScreen, spots, TILT, type Cam } from './ui/render';
import { hud, roster, panel, menu, modal, title, help, launchPreview, minToWin, specTip, token, fmtT, type App } from './ui/ui';

const SAVE = 'spacenodes.save.v3', META = 'spacenodes.meta.v1';
const $ = (id: string) => document.getElementById(id)!;
const canvas = $('map') as HTMLCanvasElement, ctx = canvas.getContext('2d')!;
const elHud = $('hud'), elRoster = $('roster'), elPanel = $('panel'), elOverlay = $('overlay'), elToasts = $('toasts'), elTip = $('tip'), elGhost = $('ghost');
const store = { get: (k: string) => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k: string, v: string) => { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } }, del: (k: string) => { try { localStorage.removeItem(k); } catch { /* storage unavailable */ } } };

const app: App = {
  g: null, speed: 1, paused: false, sel: null, menu: null, mode: null, launch: null, drag: null,
  screen: 'title', newThreat: 0, meta: { runs: 0, wins: 0, unlocked: 0, best: 0, ...JSON.parse(store.get(META) || '{}') },
  hasSave: !!store.get(SAVE),
};
const cam: Cam = { x: 100, y: 150, z: 7 };
let camTo: { x: number; y: number } | null = null;
let W = 0, H = 0, hover = -1, dirty = true, lastLog = 0, sliding = false, helpFrom: App['screen'] = 'title', ended = false;
const toasts: { msg: string; kind: string; node: number; until: number }[] = [];
(window as any).__app = app; (window as any).__nodeScreen = (id: number) => nodeScreen(app.g!.nodes[id]); // handy for debugging and automated checks
const tuning = initConsole({ game: () => app.g, selected: () => (app.sel?.type === 'node' ? app.sel.id : -1), setSpeed: n => { app.speed = n; dirty = true; }, refresh: () => { dirty = true; } });

// ------------------------------------------------------------------ run lifecycle
function startRun(g: Game) {
  app.g = g; app.screen = 'game'; app.sel = null; app.menu = null; app.mode = null; app.launch = null; app.drag = null; app.paused = false; app.speed = 1;
  const h = g.nodes[g.home];
  cam.x = h.x + 8; cam.y = h.y; cam.z = Math.max(6.5, Math.min(9, W / 52));
  lastLog = g.log.length; toasts.length = 0; dirty = true; ended = false;
}
function save() { if (app.g && !app.g.result && app.screen === 'game') { store.set(SAVE, JSON.stringify(app.g)); app.hasSave = true; } }
function endRun() {
  const g = app.g!;
  store.del(SAVE); app.hasSave = false; app.meta.runs++;
  if (g.result === 'win') { app.meta.wins++; app.meta.unlocked = Math.min(5, Math.max(app.meta.unlocked, g.threat + 1)); }
  store.set(META, JSON.stringify(app.meta));
}
function note(msg: string | null) { if (msg) { toasts.push({ msg, kind: 'warn', node: -1, until: performance.now() + 3500 }); dirty = true; } }
function run(c: Cmd): boolean { const err = exec(app.g!, c); note(err); dirty = true; return !err; }
function focus(id: number) {
  const n = app.g!.nodes[id], mobile = W < 820, open = !!app.sel || !!app.launch;
  camTo = { x: n.x + (!mobile && open ? 190 / cam.z : 0), y: n.y + (mobile && open ? (H * 0.22) / (cam.z * TILT) : 0) };
}
function select(type: 'node' | 'fleet', id: number) { app.sel = { type, id }; app.launch = null; dirty = true; if (type === 'node') focus(id); }

function openLaunch(fromId: number, toId: number, lane: boolean) {
  const g = app.g!, from = g.nodes[fromId], to = g.nodes[toId];
  if (from.owner !== PLAYER) return note('Not your node');
  if (fromId === toId) return note('Pick a different node');
  if (lane) { if (!corridorPath(g, fromId, toId)) return note('No corridor route to that node'); }
  else { if (to.owner !== PLAYER && !canTarget(g, to)) return note('Target is not in detection range'); if (slotsFree(g, from) < 1) return note('No free launch slot there'); }
  const L = { from: fromId, to: toId, drones: 0, specs: [] as number[], lane };
  const spare = Math.max(0, from.drones - floorOf(g, from));
  if (to.owner === PLAYER) L.drones = spare;
  else {
    // crew defaults to the active specialists here; the Commander stays home unless you add them
    L.specs = activeSpecs(g, from).filter(i => i !== g.cmdSpec).slice(0, crewMax(g, from));
    const m = minToWin(g, L);
    L.drones = m ? Math.min(from.drones, m + 1) : spare;
  }
  app.launch = L; app.mode = null; app.sel = { type: 'node', id: toId }; dirty = true;
  focus(toId);
}

// ------------------------------------------------------------------ actions
function act(a: string) {
  const [name, ...args] = a.split(':');
  const g = app.g, sel = app.sel?.type === 'node' ? app.sel.id : -1;
  const mode = (k: NonNullable<App['mode']>['k']) => { app.mode = { k, from: sel }; app.sel = null; app.launch = null; };
  switch (name) {
    case 'newrun': case 'again': startRun(newGame((Date.now() % 2147483647) | 0, app.newThreat)); break;
    case 'continue': { const raw = store.get(SAVE); if (raw) { try { const s = JSON.parse(raw) as Game; updateVision(s); startRun(s); } catch { store.del(SAVE); app.hasSave = false; } } break; }
    case 'title': app.screen = 'title'; app.g = null; break;
    case 'threat': app.newThreat = +args[0]; break;
    case 'help': helpFrom = app.screen; app.screen = 'help'; app.menu = null; break;
    case 'helpclose': app.screen = helpFrom; break;
    case 'abandon': if (confirm('Abandon this run?')) { store.del(SAVE); app.hasSave = false; app.meta.runs++; store.set(META, JSON.stringify(app.meta)); app.screen = 'title'; app.g = null; } break;
    case 'pause': app.paused = !app.paused; if (app.paused) save(); break;
    case 'speed': app.speed = app.speed === 1 ? 2 : app.speed === 2 ? 4 : 1; break;
    case 'console': tuning.toggle(); break;
    case 'menu': app.menu = args[0] || null; break;
    case 'close': app.sel = null; app.launch = null; break;
    case 'focus': app.menu = null; select('node', +args[0]); break;
    case 'cancelmode': app.mode = null; break;
    case 'up': run({ c: 'up', node: sel, what: args[0] as 'lv', id: args[1] }); break;
    case 'cancel': run({ c: 'cancel', node: sel }); break;
    case 'event': run({ c: 'event', node: sel }); break;
    case 'ransom': run({ c: 'ransom', spec: +args[0], recruit: false }); break;
    case 'recruit': run({ c: 'ransom', spec: +args[0], recruit: true }); break;
    case 'choose': run({ c: 'choose', idx: +args[0] }); break;
    case 'produce': run({ c: 'produce' }); break;
    case 'promote': run({ c: 'promote', spec: +args[0] }); break;
    case 'rally': run({ c: 'rally', node: sel }); break;
    case 'floor': run({ c: 'floor', node: sel, v: floorOf(g!, g!.nodes[sel]) + +args[0] }); break;
    case 'send': mode('launch'); break; // the panel gets out of the way so the whole map is visible for targeting
    case 'convoy': mode('convoy'); break;
    case 'corridorpick': mode('corridor'); break;
    case 'missile': mode('missile'); break;
    case 'rallyto': mode('rallyTo'); break;
    case 'from': openLaunch(+args[0], sel, false); break;
    case 'missilefrom': run({ c: 'missile', from: +args[0], to: sel }); break;
    case 'lspec': {
      const L = app.launch!, id = +args[0];
      if (L.specs.includes(id)) L.specs = L.specs.filter(i => i !== id);
      else if (L.lane || L.specs.length < crewMax(g!, g!.nodes[L.from])) L.specs = L.specs.concat(id);
      else note('The crew is full');
      break;
    }
    case 'lq': {
      const L = app.launch!, pool = g!.nodes[L.from].drones;
      L.drones = args[0] === 'all' ? pool : args[0] === 'half' ? Math.ceil(pool / 2) : args[0] === 'none' ? 0 : minToWin(g!, L) || pool;
      break;
    }
    case 'lcancel': app.launch = null; break;
    case 'lconfirm': {
      const L = app.launch!;
      if (run(L.lane ? { c: 'convoy', from: L.from, to: L.to, drones: L.drones, specs: L.specs } : { c: 'launch', from: L.from, to: L.to, drones: L.drones, specs: L.specs })) { app.launch = null; app.sel = null; }
      break;
    }
  }
  dirty = true;
}

document.addEventListener('click', e => {
  const t = e.target as HTMLElement;
  if (!t.closest('#tip') && !tipHeld) hideTip();
  tipHeld = false;
  const el = t.closest('[data-a]') as HTMLElement | null;
  if (!el || (el as HTMLButtonElement).disabled) return;
  if (el instanceof HTMLInputElement && el.type !== 'checkbox') return;
  act(el.dataset.a!);
});
document.addEventListener('input', e => {
  const el = e.target as HTMLInputElement;
  if (el.id === 'lslider' && app.launch && app.g) { app.launch.drones = +el.value; const p = document.getElementById('preview'); if (p) p.innerHTML = launchPreview(app.g, app.launch); }
});
document.addEventListener('pointerdown', e => { if ((e.target as HTMLElement).id === 'lslider') sliding = true; });
document.addEventListener('pointerup', () => { if (sliding) { sliding = false; dirty = true; } });
const keys = new Set<string>();
document.addEventListener('keyup', e => keys.delete(e.key.toLowerCase()));
document.addEventListener('keydown', e => {
  if (app.screen !== 'game' || !app.g) return;
  keys.add(e.key.toLowerCase());
  if (e.key === ' ') { e.preventDefault(); act('pause'); }
  else if (e.key === '1') { app.speed = 1; dirty = true; } else if (e.key === '2') { app.speed = 2; dirty = true; } else if (e.key === '3') { app.speed = 4; dirty = true; }
  else if (e.key === 'm' || e.key === 'M') act(app.menu ? 'menu:' : 'menu:research');
  else if (e.key === 'h' || e.key === 'H') select('node', (app.g.nodes.find(n => n.owner === PLAYER && n.home) || app.g.nodes.find(n => n.owner === PLAYER) || app.g.nodes[0]).id);
  else if (e.key === 'Escape') { if (app.mode) app.mode = null; else if (app.launch) app.launch = null; else if (app.menu) app.menu = null; else app.sel = null; dirty = true; }
});
document.addEventListener('visibilitychange', () => { if (document.hidden) save(); });

// ------------------------------------------------------------------ tooltips: any specialist token, anywhere
let tipFor = -1, tipHeld = false, pressT = 0;
function showTip(spec: number, x: number, y: number) {
  if (!app.g || !app.g.specs[spec]) return;
  if (tipFor !== spec) { elTip.innerHTML = specTip(app.g, app.g.specs[spec]); tipFor = spec; }
  elTip.className = 'open';
  const r = elTip.getBoundingClientRect();
  elTip.style.left = `${Math.max(8, Math.min(W - r.width - 8, x - r.width / 2))}px`;
  elTip.style.top = `${y - r.height - 18 < 60 ? Math.min(H - r.height - 8, y + 26) : y - r.height - 18}px`;
}
function hideTip() { if (tipFor >= 0) { elTip.className = ''; tipFor = -1; } }
const tipTarget = (t: EventTarget | null) => (t instanceof HTMLElement ? (t.closest('[data-tip]') as HTMLElement | null) : null);
document.addEventListener('pointerover', e => { // hover (mouse)
  if (e.pointerType !== 'mouse' || e.target === canvas) return;
  const el = tipTarget(e.target);
  if (el) { const r = el.getBoundingClientRect(); showTip(+el.dataset.tip!, r.left + r.width / 2, r.top); } else hideTip();
});
document.addEventListener('pointerdown', e => { // long press (touch)
  clearTimeout(pressT);
  if (e.pointerType === 'mouse' || e.target === canvas) return;
  const el = tipTarget(e.target), x0 = e.clientX, y0 = e.clientY;
  if (!el) return;
  pressT = window.setTimeout(() => { if (!app.drag && Math.hypot(lastPtr.x - x0, lastPtr.y - y0) < 10) { const r = el.getBoundingClientRect(); showTip(+el.dataset.tip!, r.left + r.width / 2, r.top); tipHeld = true; } }, 420);
});
const lastPtr = { x: 0, y: 0 };
document.addEventListener('pointermove', e => { lastPtr.x = e.clientX; lastPtr.y = e.clientY; });
document.addEventListener('pointerup', () => clearTimeout(pressT));
function spotAt(px: number, py: number) {
  let best = null as null | (typeof spots)[number], bd = 1e9;
  for (const s of spots) { const d = Math.hypot(s.x - px, s.y - py); if (d < s.r + 6 && d < bd) { bd = d; best = s; } }
  return best;
}

// ------------------------------------------------------------------ roster: tap to jump, drag onto a friendly node to send
let rosterDown: { spec: number; x: number; y: number; id: number } | null = null;
elRoster.addEventListener('pointerdown', e => {
  const el = (e.target as HTMLElement).closest('.rost') as HTMLElement | null;
  if (!el || !app.g) return;
  rosterDown = { spec: +el.dataset.spec!, x: e.clientX, y: e.clientY, id: e.pointerId };
  elRoster.setPointerCapture(e.pointerId);
});
elRoster.addEventListener('pointermove', e => {
  if (!rosterDown || !app.g) return;
  const g = app.g, sp = g.specs[rosterDown.spec];
  if (!app.drag && Math.hypot(e.clientX - rosterDown.x, e.clientY - rosterDown.y) > 10) { app.drag = { spec: sp.id, x: e.clientX, y: e.clientY, over: -1, label: '', ok: false }; hideTip(); clearTimeout(pressT); dirty = true; }
  if (!app.drag) return;
  const d = app.drag;
  d.x = e.clientX; d.y = e.clientY;
  const under = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
  const hit = under === canvas ? pick(e.clientX, e.clientY) : null;
  d.over = hit && hit.type === 'node' ? hit.id : -1; d.ok = false;
  if (under?.closest('[data-drop="crew"]') && app.launch) { d.ok = g.nodes[app.launch.from].specs.includes(sp.id); d.label = d.ok ? 'Add to the crew' : `Not at ${g.nodes[app.launch.from].name}`; }
  else if (d.over >= 0) { const to = g.nodes[d.over], m = moveEta(g, sp, to); d.ok = !!m.via; d.label = m.via ? `${to.name} · ${fmtT(m.secs)} ${m.via === 'corridor' ? 'via corridor' : 'by fleet'}` : m.why; }
  else d.label = sp.held ? 'They are a prisoner' : sp.node < 0 ? 'Already travelling' : 'Drop on one of your nodes';
  elGhost.className = `open ${d.ok ? 'ok' : ''}`;
  elGhost.style.left = `${d.x}px`; elGhost.style.top = `${d.y}px`;
  elGhost.innerHTML = `${token(g, sp, true, true)}<span>${d.label.replace(/</g, '&lt;')}</span>`;
});
const rosterUp = (e: PointerEvent) => {
  if (!rosterDown || !app.g) return;
  const g = app.g, sp = g.specs[rosterDown.spec], d = app.drag;
  rosterDown = null; app.drag = null; elGhost.className = '';
  if (d) {
    const under = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
    if (under?.closest('[data-drop="crew"]') && app.launch) { if (d.ok && !app.launch.specs.includes(sp.id)) act(`lspec:${sp.id}`); }
    else if (d.over >= 0 && d.ok) run({ c: 'move', spec: sp.id, to: d.over });
    else if (d.over >= 0) note(d.label);
  } else if (!tipHeld) { // a plain tap: jump to them
    const at = sp.node >= 0 ? sp.node : g.fleets.find(f => f.id === sp.fleet)?.to ?? -1;
    if (at >= 0) select('node', at);
  }
  dirty = true;
};
elRoster.addEventListener('pointerup', rosterUp); elRoster.addEventListener('pointercancel', rosterUp);

// ------------------------------------------------------------------ map input
const ptrs = new Map<number, { x: number; y: number }>();
let downAt: { x: number; y: number } | null = null, moved = false, pinch = 0, longPressed = false, mapPress = 0;
const toWorld = (px: number, py: number) => ({ x: (px - W / 2) / cam.z + cam.x, y: (py - H / 2) / (cam.z * TILT) + cam.y });
const vel = { x: 0, y: 0 };

function pick(px: number, py: number): { type: 'node' | 'fleet'; id: number } | null {
  const g = app.g!;
  for (const f of g.fleets) {
    if (!fleetSeen(g, f)) continue;
    const sp = toScreen(f.x, f.y, 3);
    if (Math.hypot(sp.x - px, sp.y - py) < 24) return { type: 'fleet', id: f.id };
  }
  let best = -1, bd = 1e9;
  for (const n of g.nodes) {
    if (known(g, n).tier === 'hidden') continue;
    const np = nodeScreen(n), d = Math.hypot(np.x - px, np.y - py);
    if (d < Math.max(30, nodeR(n) * cam.z * 2.3) && d < bd) { bd = d; best = n.id; }
  }
  return best >= 0 ? { type: 'node', id: best } : null;
}
function tap(px: number, py: number) {
  const g = app.g!, hit = pick(px, py);
  if (app.mode) {
    if (!hit || hit.type !== 'node') return;
    const m = app.mode, back = () => { app.mode = null; app.sel = { type: 'node', id: m.from }; };
    if (m.k === 'launch') openLaunch(m.from, hit.id, false);
    else if (m.k === 'convoy') openLaunch(m.from, hit.id, true);
    else if (m.k === 'corridor') { if (run({ c: 'corridor', from: m.from, to: hit.id })) back(); }
    else if (m.k === 'missile') { if (run({ c: 'missile', from: m.from, to: hit.id })) back(); }
    else if (m.k === 'rallyTo') { if (run({ c: 'rallyTo', node: m.from, to: hit.id })) back(); }
    dirty = true;
    return;
  }
  if (!hit) { if (!app.launch) app.sel = null; dirty = true; return; }
  if (app.launch && hit.type === 'node' && hit.id !== app.launch.from) return openLaunch(app.launch.from, hit.id, app.launch.lane);
  select(hit.type, hit.id);
}
canvas.addEventListener('pointerdown', e => {
  canvas.setPointerCapture(e.pointerId);
  hideTip(); longPressed = false; clearTimeout(mapPress);
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (ptrs.size === 1) { downAt = { x: e.clientX, y: e.clientY }; moved = false; }
  if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch = Math.hypot(a.x - b.x, a.y - b.y); moved = true; }
  camTo = null; vel.x = vel.y = 0;
  if (e.pointerType !== 'mouse') mapPress = window.setTimeout(() => { // long press on a statue
    if (ptrs.size !== 1 || moved || !downAt) return;
    const s = spotAt(downAt.x, downAt.y);
    if (s) { longPressed = true; tipHeld = true; showTip(s.spec, s.x, s.y); if (navigator.vibrate) navigator.vibrate(12); }
  }, 420);
});
canvas.addEventListener('pointermove', e => {
  const p = ptrs.get(e.pointerId);
  if (!p) {
    if (app.g && app.screen === 'game') {
      const s = e.pointerType === 'mouse' ? spotAt(e.clientX, e.clientY) : null;
      if (s) showTip(s.spec, s.x, s.y); else hideTip();
      const h = pick(e.clientX, e.clientY); hover = h && h.type === 'node' ? h.id : -1; canvas.style.cursor = h || s ? 'pointer' : 'grab';
    }
    return;
  }
  const dx = e.clientX - p.x, dy = e.clientY - p.y;
  p.x = e.clientX; p.y = e.clientY;
  if (ptrs.size === 1) {
    if (downAt && Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y) > 8) moved = true;
    if (moved) { cam.x -= dx / cam.z; cam.y -= dy / (cam.z * TILT); vel.x = -dx / cam.z; vel.y = -dy / (cam.z * TILT); }
  } else if (ptrs.size === 2) {
    const [a, b] = [...ptrs.values()], d = Math.hypot(a.x - b.x, a.y - b.y);
    if (pinch > 0) zoomAt((a.x + b.x) / 2, (a.y + b.y) / 2, d / pinch);
    pinch = d;
  }
});
const up = (e: PointerEvent) => {
  const had = ptrs.delete(e.pointerId);
  clearTimeout(mapPress);
  if (had && ptrs.size === 0 && !moved && !longPressed && downAt && app.g && app.screen === 'game') tap(e.clientX, e.clientY);
  if (ptrs.size < 2) pinch = 0;
};
canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
canvas.addEventListener('wheel', e => { e.preventDefault(); zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.0015)); }, { passive: false });
function zoomAt(px: number, py: number, k: number) {
  const before = toWorld(px, py);
  cam.z = Math.max(2.4, Math.min(13, cam.z * k));
  const after = toWorld(px, py);
  cam.x += before.x - after.x; cam.y += before.y - after.y;
}
function resize() {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  W = window.innerWidth; H = window.innerHeight;
  canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener('resize', resize); resize();

// ------------------------------------------------------------------ DOM refresh
const last: Record<string, string> = {};
function setHtml(el: HTMLElement, key: string, html: string) {
  if (last[key] === html) return;
  last[key] = html;
  const body = el.querySelector('.pbody'), top = body ? body.scrollTop : 0;
  el.innerHTML = html;
  const nb = el.querySelector('.pbody');
  if (nb && top) nb.scrollTop = top;
}
function refresh() {
  const g = app.g, now = performance.now();
  if (app.screen === 'title' || !g) {
    for (const [el, k] of [[elHud, 'hud'], [elPanel, 'panel'], [elRoster, 'roster'], [elToasts, 'toasts']] as [HTMLElement, string][]) setHtml(el, k, '');
    elPanel.className = '';
    elOverlay.className = 'open clear'; setHtml(elOverlay, 'ov', app.screen === 'help' ? help() : title(app));
    return;
  }
  for (; lastLog < g.log.length; lastLog++) { const l = g.log[lastLog]; if (l.kind !== 'info') toasts.push({ msg: l.msg, kind: l.kind, node: l.node, until: now + (l.kind === 'bad' ? 9000 : 6000) }); }
  if (g.log.length >= 150) lastLog = g.log.length;
  while (toasts.length && (toasts[0].until < now || toasts.length > 4)) toasts.shift();
  setHtml(elToasts, 'toasts', toasts.map(t => `<div class="toast ${t.kind}" ${t.node >= 0 ? `data-a="focus:${t.node}"` : ''}>${t.msg.replace(/</g, '&lt;')}</div>`).join(''));
  setHtml(elHud, 'hud', hud(app));
  if (!rosterDown) setHtml(elRoster, 'roster', roster(app));
  if (!sliding) { const p = panel(app); elPanel.className = p ? (app.launch ? 'open launch' : 'open') : ''; setHtml(elPanel, 'panel', p); }
  const ov = app.screen === 'help' ? help() : g.result || g.pending.length ? modal(app) : app.menu ? menu(app) : '';
  elOverlay.className = ov ? 'open' : '';
  setHtml(elOverlay, 'ov', ov);
}

/** Nodes to highlight while the player is picking a target. */
function glowSet(g: Game): Set<number> | null {
  const m = app.mode;
  if (app.drag) { const sp = g.specs[app.drag.spec]; return new Set(g.nodes.filter(n => n.owner === PLAYER && moveEta(g, sp, n).via).map(n => n.id)); }
  if (!m) return null;
  const from = g.nodes[m.from], ok = (f: (n: GNode) => boolean) => new Set(g.nodes.filter(f).map(n => n.id));
  if (m.k === 'convoy') return new Set(corridorReach(g, m.from));
  if (m.k === 'corridor') return ok(n => { const e = canCorridor(g, from, n); return !e || e === 'Not enough Ultanium'; });
  if (m.k === 'missile') return ok(n => !canMissile(g, from, n));
  if (m.k === 'rallyTo') return ok(n => n.owner === PLAYER && n.rally && n.id !== m.from);
  return ok(n => n.id !== m.from && (n.owner === PLAYER || canTarget(g, n)));
}

// ------------------------------------------------------------------ main loop
let prev = performance.now(), acc = 0, lastUi = 0, lastSave = 0;
function frame(now: number) {
  const dt = Math.min(0.25, (now - prev) / 1000);
  prev = now;
  const g = app.g;
  if (g && app.screen === 'game') {
    if (!app.paused && !app.menu && !g.result && !g.pending.length) {
      acc += dt * app.speed;
      let n = 0;
      while (acc >= CFG.dt && n++ < 40) { acc -= CFG.dt; if (!step(g)) { acc = 0; dirty = true; break; } }
      if (acc > 1) acc = 0;
    }
    if (g.result && !ended) { ended = true; endRun(); dirty = true; }
    if (!ptrs.size && Math.abs(vel.x) + Math.abs(vel.y) > 0.01) { cam.x += vel.x; cam.y += vel.y; vel.x *= 0.9; vel.y *= 0.9; }
    const kx = (keys.has('arrowright') || keys.has('d') ? 1 : 0) - (keys.has('arrowleft') || keys.has('a') ? 1 : 0), ky = (keys.has('arrowdown') || keys.has('s') ? 1 : 0) - (keys.has('arrowup') || keys.has('w') ? 1 : 0);
    if (kx || ky) { camTo = null; cam.x += (kx * 420 * dt) / cam.z; cam.y += (ky * 420 * dt) / (cam.z * TILT); }
    if (camTo) { cam.x += (camTo.x - cam.x) * 0.16; cam.y += (camTo.y - cam.y) * 0.16; if (Math.hypot(camTo.x - cam.x, camTo.y - cam.y) < 0.4) camTo = null; }
    cam.x = Math.max(-40, Math.min(g.w + 40, cam.x)); cam.y = Math.max(-40, Math.min(g.h + 40, cam.y));
    const picking = !!app.mode || !!app.drag;
    draw(ctx, g, { cam, w: W, h: H, sel: app.launch ? { type: 'node', id: app.launch.to } : app.sel, targeting: picking, from: app.mode?.from ?? app.launch?.from ?? -1, hover: app.drag ? app.drag.over : hover, glow: glowSet(g) }, now);
    if (now - lastSave > 15000) { lastSave = now; save(); }
  } else { ctx.fillStyle = '#262e49'; ctx.fillRect(0, 0, W, H); }
  if (dirty || now - lastUi > 250) { dirty = false; lastUi = now; refresh(); }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
