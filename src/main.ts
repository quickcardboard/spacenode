import './ui/style.css';
import type { Game } from './sim/types';
import { PLAYER } from './sim/types';
import { CFG } from './sim/config';
import { newGame } from './sim/mapgen';
import { step, exec, type Cmd } from './sim/sim';
import { canTarget, shipById, shipSeen, isDocked, updateVision } from './sim/core';
import { abilitiesOf, abilityCheck } from './sim/abilities';
import { draw, nodeR, known, bodyY, TILT, type Cam } from './ui/render';
import { hud, panel, menu, modal, title, help, launchPreview, launchPool, minToWin, type App } from './ui/ui';

const SAVE = 'spacenodes.save.v1', META = 'spacenodes.meta.v1';
const $ = (id: string) => document.getElementById(id)!;
const canvas = $('map') as HTMLCanvasElement, ctx = canvas.getContext('2d')!;
const elHud = $('hud'), elPanel = $('panel'), elOverlay = $('overlay'), elToasts = $('toasts');

const store = { get: (k: string) => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k: string, v: string) => { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } }, del: (k: string) => { try { localStorage.removeItem(k); } catch { /* storage unavailable */ } } };

const app: App = {
  g: null, speed: 1, paused: false, sel: null, tab: 'info', menu: null, mode: null, launch: null,
  screen: 'title', newThreat: 0, meta: { runs: 0, wins: 0, unlocked: 0, best: 0, ...JSON.parse(store.get(META) || '{}') },
  hasSave: !!store.get(SAVE), note: '', noteT: 0,
};
const cam: Cam = { x: 100, y: 180, z: 3 };
let camTo: { x: number; y: number } | null = null;
let W = 0, H = 0, hover = -1, dirty = true, lastLog = 0, sliding = false, helpFrom: App['screen'] = 'title';
const toasts: { msg: string; kind: string; node: number; until: number }[] = [];
(window as any).__app = app; // handy for debugging and automated checks

// ------------------------------------------------------------------ run lifecycle
function startRun(g: Game) {
  app.g = g; app.screen = 'game'; app.sel = null; app.menu = null; app.mode = null; app.launch = null; app.paused = false; app.speed = 1;
  const h = g.nodes[g.home];
  cam.x = h.x + 30; cam.y = h.y; cam.z = Math.max(2.6, Math.min(3.8, Math.min(W, H) / 130));
  lastLog = g.log.length; toasts.length = 0; dirty = true;
}
function save() { if (app.g && !app.g.result && app.screen === 'game') { store.set(SAVE, JSON.stringify(app.g)); app.hasSave = true; } }
function endRun() {
  const g = app.g!;
  store.del(SAVE); app.hasSave = false;
  app.meta.runs++;
  if (g.result === 'win') { app.meta.wins++; app.meta.unlocked = Math.min(5, Math.max(app.meta.unlocked, g.threat + 1)); }
  store.set(META, JSON.stringify(app.meta));
}
let ended = false;

function note(msg: string | null) { if (msg) { toasts.push({ msg, kind: 'warn', node: -1, until: performance.now() + 3500 }); dirty = true; } }
function run(c: Cmd): boolean { const err = exec(app.g!, c); note(err); dirty = true; return !err; }

function focus(id: number) {
  const n = app.g!.nodes[id];
  const mobile = W < 820, open = !!app.sel || !!app.launch;
  camTo = { x: n.x + (!mobile && open ? 190 / cam.z : 0), y: n.y + (mobile && open ? (H * 0.22) / (cam.z * TILT) : 0) };
}
function select(type: 'node' | 'ship', id: number) { app.sel = { type, id }; app.tab = 'info'; app.launch = null; dirty = true; if (type === 'node') focus(id); }

function openLaunch(shipId: number, to: number) {
  const g = app.g!, s = shipById(g, shipId);
  if (!s || s.at < 0) return note('That ship has left');
  if (s.at === to) return note('The ship is already there');
  const t = g.nodes[to];
  if (t.owner !== PLAYER && !canTarget(g, t)) return note('Target is not in detection range');
  const L = { ship: shipId, to, drones: 0, specs: isDocked(g, s) ? [] : s.specs.slice() };
  const pool = launchPool(g, s);
  if (!isDocked(g, s)) L.drones = s.drones;
  else if (t.owner === PLAYER) L.drones = Math.max(0, pool - (g.nodes[s.at].specs.includes(g.cmdSpec) ? 6 : 0));
  else { const m = minToWin(g, L); L.drones = m ? Math.min(pool, m + 2) : pool; }
  app.launch = L; app.mode = null; app.sel = { type: 'node', id: to }; dirty = true;
  focus(to);
}

// ------------------------------------------------------------------ actions
function act(a: string, el: HTMLElement) {
  const [name, ...args] = a.split(':');
  const g = app.g, selNode = app.sel?.type === 'node' ? app.sel.id : -1;
  switch (name) {
    case 'newrun': case 'again': startRun(newGame((Date.now() % 2147483647) | 0, app.newThreat)); ended = false; break;
    case 'continue': { const raw = store.get(SAVE); if (raw) { try { const s = JSON.parse(raw) as Game; updateVision(s); startRun(s); ended = false; } catch { store.del(SAVE); app.hasSave = false; } } break; }
    case 'title': app.screen = 'title'; app.g = null; break;
    case 'threat': app.newThreat = +args[0]; break;
    case 'help': helpFrom = app.screen; app.screen = 'help'; app.menu = null; break;
    case 'helpclose': app.screen = helpFrom; break;
    case 'abandon': if (confirm('Abandon this run?')) { store.del(SAVE); app.hasSave = false; app.meta.runs++; store.set(META, JSON.stringify(app.meta)); app.screen = 'title'; app.g = null; } break;
    case 'pause': app.paused = !app.paused; if (app.paused) save(); break;
    case 'speed': app.speed = app.speed === 1 ? 2 : app.speed === 2 ? 4 : 1; break;
    case 'menu': app.menu = args[0] || null; break;
    case 'close': app.sel = null; app.launch = null; break;
    case 'tab': app.tab = args[0]; break;
    case 'focus': app.menu = null; select('node', +args[0]); break;
    case 'cancelmode': app.mode = null; break;
    case 'build': run({ c: 'build', node: selNode, id: args[0] }); break;
    case 'ship': run({ c: 'ship', node: selNode }); break;
    case 'cancel': run({ c: 'cancel', node: selNode, idx: +args[0] }); break;
    case 'research': run({ c: 'research', node: selNode, id: args[0] || null }); break;
    case 'resfirst': run({ c: 'resFirst', node: selNode }); break;
    case 'event': run({ c: 'event', node: selNode }); break;
    case 'ransom': run({ c: 'ransom', spec: +args[0], recruit: false }); break;
    case 'recruit': run({ c: 'ransom', spec: +args[0], recruit: true }); break;
    case 'choose': run({ c: 'choose', idx: +args[0] }); break;
    case 'send': app.mode = { k: 'launch', ship: +args[0] }; app.launch = null; break;
    case 'from': openLaunch(+args[0], selNode); break;
    case 'redirect': app.mode = { k: 'redirect', ship: +args[0] }; break;
    case 'ability': {
      const sp = g!.specs[+args[0]], ab = abilitiesOf(sp).find(x => x.id === args[1])!;
      if (ab.target === 'self') run({ c: 'ability', spec: sp.id, id: ab.id, target: -1 });
      else { const err = abilityCheck(g!, sp, { ...ab, target: 'self' }, null); if (err) note(err); else { app.mode = { k: 'ability', spec: sp.id, id: ab.id }; app.menu = null; } }
      break;
    }
    case 'lspec': {
      const L = app.launch!, id = +args[0];
      L.specs = L.specs.includes(id) ? L.specs.filter(i => i !== id) : L.specs.concat(id);
      break;
    }
    case 'lq': {
      const L = app.launch!, s = shipById(g!, L.ship)!, pool = launchPool(g!, s);
      L.drones = args[0] === 'all' ? pool : args[0] === 'half' ? Math.ceil(pool / 2) : args[0] === 'none' ? 0 : minToWin(g!, L) || pool;
      break;
    }
    case 'lcancel': app.launch = null; break;
    case 'lconfirm': { const L = app.launch!; if (run({ c: 'launch', ship: L.ship, to: L.to, drones: L.drones, specs: L.specs })) { app.launch = null; app.sel = null; } break; }
  }
  void el;
  dirty = true;
}

document.addEventListener('click', e => {
  const el = (e.target as HTMLElement).closest('[data-a]') as HTMLElement | null;
  if (!el || (el as HTMLButtonElement).disabled) return;
  if (el instanceof HTMLInputElement && el.type !== 'checkbox') return;
  act(el.dataset.a!, el);
});
document.addEventListener('input', e => {
  const el = e.target as HTMLInputElement;
  if (el.id === 'lslider' && app.launch && app.g) {
    app.launch.drones = +el.value;
    const p = document.getElementById('preview');
    if (p) p.innerHTML = launchPreview(app.g, app.launch);
  }
});
document.addEventListener('pointerdown', e => { if ((e.target as HTMLElement).id === 'lslider') sliding = true; });
document.addEventListener('pointerup', () => { if (sliding) { sliding = false; dirty = true; } });
document.addEventListener('keyup', e => keys.delete(e.key.toLowerCase()));
document.addEventListener('keydown', e => {
  if (app.screen !== 'game' || !app.g) return;
  keys.add(e.key.toLowerCase());
  if (e.key === ' ') { e.preventDefault(); act('pause', document.body); }
  else if (e.key === '1') { app.speed = 1; dirty = true; } else if (e.key === '2') { app.speed = 2; dirty = true; } else if (e.key === '3') { app.speed = 4; dirty = true; }
  else if (e.key === 'm' || e.key === 'M') act(app.menu ? 'menu:' : 'menu:specs', document.body);
  else if (e.key === 'h' || e.key === 'H') select('node', (app.g.nodes.find(n => n.owner === PLAYER && n.home) || app.g.nodes.find(n => n.owner === PLAYER) || app.g.nodes[0]).id);
  else if (e.key === 'Escape') { if (app.mode) app.mode = null; else if (app.launch) app.launch = null; else if (app.menu) app.menu = null; else app.sel = null; dirty = true; }
});
document.addEventListener('visibilitychange', () => { if (document.hidden) save(); });

// ------------------------------------------------------------------ map input
const ptrs = new Map<number, { x: number; y: number }>();
let downAt: { x: number; y: number; t: number } | null = null, moved = false, pinch = 0;
const toWorld = (px: number, py: number) => ({ x: (px - W / 2) / cam.z + cam.x, y: (py - H / 2) / (cam.z * TILT) + cam.y });
const vel = { x: 0, y: 0 }; const keys = new Set<string>();

function pick(px: number, py: number): { type: 'node' | 'ship'; id: number } | null {
  const g = app.g!;
  for (const s of g.ships) {
    if (s.at >= 0 || !shipSeen(g, s)) continue;
    if (Math.hypot((s.x - cam.x) * cam.z + W / 2 - px, (s.y - cam.y) * cam.z * TILT + H / 2 - 10 - py) < 20) return { type: 'ship', id: s.id };
  }
  let best = -1, bd = 1e9;
  for (const n of g.nodes) {
    if (known(g, n).tier === 'hidden') continue;
    const d = Math.hypot((n.x - cam.x) * cam.z + W / 2 - px, (n.y - cam.y) * cam.z * TILT + H / 2 - bodyY(n, cam.z) * 0.8 - py);
    if (d < Math.max(26, nodeR(n) * cam.z * 1.6 + 10) && d < bd) { bd = d; best = n.id; }
  }
  return best >= 0 ? { type: 'node', id: best } : null;
}
function tap(px: number, py: number) {
  const g = app.g!, hit = pick(px, py);
  if (app.mode) {
    if (!hit || hit.type !== 'node') return;
    const m = app.mode;
    if (m.k === 'launch') openLaunch(m.ship, hit.id);
    else if (m.k === 'redirect') { if (run({ c: 'redirect', ship: m.ship, to: hit.id })) app.mode = null; }
    else if (run({ c: 'ability', spec: m.spec, id: m.id, target: hit.id })) app.mode = null;
    dirty = true;
    return;
  }
  if (!hit) { if (!app.launch) app.sel = null; dirty = true; return; }
  if (app.launch && hit.type === 'node') { const s = shipById(g, app.launch.ship); if (s && s.at !== hit.id) return openLaunch(app.launch.ship, hit.id); }
  select(hit.type, hit.id);
}
canvas.addEventListener('pointerdown', e => {
  canvas.setPointerCapture(e.pointerId);
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (ptrs.size === 1) { downAt = { x: e.clientX, y: e.clientY, t: performance.now() }; moved = false; }
  if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch = Math.hypot(a.x - b.x, a.y - b.y); moved = true; }
  camTo = null; vel.x = vel.y = 0;
});
canvas.addEventListener('pointermove', e => {
  const p = ptrs.get(e.pointerId);
  if (!p) { if (app.g && app.screen === 'game') { const h = pick(e.clientX, e.clientY); hover = h && h.type === 'node' ? h.id : -1; canvas.style.cursor = h ? 'pointer' : 'grab'; } return; }
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
  if (had && ptrs.size === 0 && !moved && downAt && app.g && app.screen === 'game') tap(e.clientX, e.clientY);
  if (ptrs.size < 2) pinch = 0;
};
canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
canvas.addEventListener('wheel', e => { e.preventDefault(); zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.0015)); }, { passive: false });
function zoomAt(px: number, py: number, k: number) {
  const before = toWorld(px, py);
  cam.z = Math.max(1, Math.min(7, cam.z * k));
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
    setHtml(elHud, 'hud', ''); setHtml(elPanel, 'panel', ''); elPanel.className = ''; elToasts.innerHTML = ''; last.toasts = '';
    elOverlay.className = 'open clear'; setHtml(elOverlay, 'ov', app.screen === 'help' ? help() : title(app));
    return;
  }
  for (; lastLog < g.log.length; lastLog++) { const l = g.log[lastLog]; if (l.kind !== 'info') toasts.push({ msg: l.msg, kind: l.kind, node: l.node, until: now + (l.kind === 'bad' ? 9000 : 6000) }); }
  if (g.log.length >= 150) lastLog = g.log.length;
  while (toasts.length && (toasts[0].until < now || toasts.length > 4)) toasts.shift();
  setHtml(elToasts, 'toasts', toasts.map(t => `<div class="toast ${t.kind}" ${t.node >= 0 ? `data-a="focus:${t.node}"` : ''}>${t.msg.replace(/</g, '&lt;')}</div>`).join(''));
  setHtml(elHud, 'hud', hud(app));
  if (!sliding) { const p = panel(app); elPanel.className = p ? 'open' : ''; setHtml(elPanel, 'panel', p); }
  const ov = app.screen === 'help' ? help() : g.result || g.pending.length ? modal(app) : app.menu ? menu(app) : '';
  elOverlay.className = ov ? 'open' : '';
  setHtml(elOverlay, 'ov', ov);
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
      while (acc >= CFG.dt && n++ < 16) { acc -= CFG.dt; if (!step(g)) { acc = 0; dirty = true; break; } }
      if (acc > 1) acc = 0;
    }
    if (g.result && !ended) { ended = true; endRun(); dirty = true; }
    // scrolling: drag inertia, arrow keys / WASD, and glide-to-focus
    if (!ptrs.size && (Math.abs(vel.x) + Math.abs(vel.y) > 0.01)) { cam.x += vel.x; cam.y += vel.y; vel.x *= 0.9; vel.y *= 0.9; }
    const kx = (keys.has('arrowright') || keys.has('d') ? 1 : 0) - (keys.has('arrowleft') || keys.has('a') ? 1 : 0), ky = (keys.has('arrowdown') || keys.has('s') ? 1 : 0) - (keys.has('arrowup') || keys.has('w') ? 1 : 0);
    if (kx || ky) { camTo = null; cam.x += (kx * 420 * dt) / cam.z; cam.y += (ky * 420 * dt) / (cam.z * TILT); }
    if (camTo) { cam.x += (camTo.x - cam.x) * 0.16; cam.y += (camTo.y - cam.y) * 0.16; if (Math.hypot(camTo.x - cam.x, camTo.y - cam.y) < 0.4) camTo = null; }
    cam.x = Math.max(-40, Math.min(g.w + 40, cam.x)); cam.y = Math.max(-40, Math.min(g.h + 40, cam.y));
    const from = app.mode?.k === 'launch' ? shipById(g, app.mode.ship)?.at ?? -1 : -1;
    draw(ctx, g, { cam, w: W, h: H, sel: app.launch ? { type: 'node', id: app.launch.to } : app.sel, targeting: !!app.mode, from, hover }, now);
    if (now - lastSave > 15000) { lastSave = now; save(); }
  } else { ctx.fillStyle = '#262e49'; ctx.fillRect(0, 0, W, H); }
  if (dirty || now - lastUi > 250) { dirty = false; lastUi = now; refresh(); }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
