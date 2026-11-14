// In-game tuning console (desktop). Opens with ` (backtick) or F2.
// Every balance number in CFG, BUILD and the research tables can be edited live. Edits are kept in this
// browser and re-applied on every load; Export copies them as JSON so they can be shared and committed.
import { CFG, BUILD } from '../sim/config';
import { TECH_COST, TECH_TIME, TECH_OPS, REP, TECHS, SPECS, RELICS } from '../sim/content';
import type { Game } from '../sim/types';
import { PLAYER } from '../sim/types';
import { addSpec, grantTech, updateVision, droneCap, totalDrones } from '../sim/core';

const KEY = 'spacenodes.tune.v1';
type Over = { cfg: Record<string, unknown>; build: Record<string, Record<string, number>>; research: Record<string, unknown> };
const DEFAULTS = JSON.parse(JSON.stringify({ cfg: CFG, build: BUILD, research: { TECH_COST, TECH_TIME, TECH_OPS, REP } }));
const RESEARCH: Record<string, unknown> = { TECH_COST, TECH_TIME, TECH_OPS, REP };

const HELP: Record<string, string> = {
  shipSpeed: 'Map units per second', loadTime: 'Seconds to load a ship', startUlt: 'Starting Ultanium', baseIncome: 'Free Ultanium per minute',
  capBase: 'Drone cap before territory', capPlanet: 'Drone cap per planet held', capStation: 'Drone cap per station held', habitatCap: 'Drone cap per Habitat',
  batch: 'Drones per batch', batchTime: 'Seconds per Drone batch', shipCost: 'Ultanium per ship', shipTime: 'Seconds to build a ship',
  shieldPerGen: 'Shield per generator', shieldCap: 'Most shield a node can hold', shieldRegenSecs: 'Seconds per shield point recharged',
  neutralShieldGens: 'Shield generators on neutral planets (small, medium, large)', turretKill: 'Drones each turret shoots down per arriving fleet',
  musterCost: 'Ultanium per mustered Drone', musterSize: 'Drones per Muster', capBySize: 'Mining ceiling per planet size (/min)', mineBase: 'Ultanium per mine per minute',
  stageSecs: 'Seconds per mobilization stage', graceSecs: 'Seconds before the first offensive', offInterval: 'Seconds between offensives, by stage',
  offCommit: 'Share of Drones committed to offensives, by stage', aegisPerLayer: 'Citadel Aegis per unbroken faction', rescueSecs: 'Commander rescue window',
  corridorCost: 'Corridor cost', corridorTime: 'Corridor build seconds', corridorRange: 'Corridor reach', corridorMax: 'Corridors per node', corridorSpeed: 'Convoy speed multiplier',
  shipFov: 'Ship vision: full intelligence, detection', fovInner: 'Node full-intelligence radius', fovOuter: 'Node detection radius',
};

function load(): Over { try { return { cfg: {}, build: {}, research: {}, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch { return { cfg: {}, build: {}, research: {} }; } }
function save(o: Over) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch { /* storage unavailable */ } }

function assign(target: Record<string, unknown>, key: string, val: unknown) {
  const cur = target[key];
  if (Array.isArray(cur) && Array.isArray(val)) { cur.length = 0; cur.push(...val); }
  else if (cur && typeof cur === 'object' && val && typeof val === 'object') Object.assign(cur, val);
  else target[key] = val;
}
/** Apply saved overrides to the live tables. Call once at startup, before a game is created. */
export function applyTuning() {
  const o = load();
  for (const k in o.cfg) if (k in CFG) assign(CFG as unknown as Record<string, unknown>, k, o.cfg[k]);
  for (const id in o.build) if (BUILD[id]) Object.assign(BUILD[id], o.build[id]);
  for (const k in o.research) if (k in RESEARCH) assign(RESEARCH, k, o.research[k]);
}

const fmt = (v: unknown): string => (Array.isArray(v) ? v.join(', ') : v && typeof v === 'object' ? JSON.stringify(v) : String(v));
function parse(text: string, like: unknown): unknown {
  if (Array.isArray(like)) return text.split(/[,\s]+/).filter(Boolean).map(Number);
  if (like && typeof like === 'object') return JSON.parse(text);
  return Number(text);
}
const valid = (v: unknown): boolean => (Array.isArray(v) ? v.every(x => Number.isFinite(x)) : typeof v === 'number' ? Number.isFinite(v) : v !== null && typeof v === 'object');

export interface ConsoleHost { game: () => Game | null; selected: () => number; setSpeed: (n: number) => void; refresh: () => void }

export function initConsole(host: ConsoleHost) {
  const el = document.createElement('div');
  el.id = 'console';
  document.body.appendChild(el);
  let tab = 'values', filter = '', out: string[] = ['Type help for commands.'];

  const row = (group: 'cfg' | 'research', key: string, val: unknown, def: unknown) =>
    `<label class="crow ${fmt(val) !== fmt(def) ? 'changed' : ''}"><span><b>${key}</b><small>${HELP[key] || ''}</small></span><input data-g="${group}" data-k="${key}" value="${fmt(val)}"></label>`;
  function render() {
    const o = load();
    let body = '';
    const f = filter.toLowerCase(), hit = (s: string) => !f || s.toLowerCase().includes(f);
    if (tab === 'values') {
      for (const k of Object.keys(CFG)) if (k !== 'dt' && hit(k + (HELP[k] || ''))) body += row('cfg', k, (CFG as unknown as Record<string, unknown>)[k], DEFAULTS.cfg[k]);
    } else if (tab === 'buildings') {
      body += '<div class="bgrid"><b>Building</b><b>Cost</b><b>Seconds</b><b>Max</b>';
      for (const id in BUILD) if (hit(id + BUILD[id].name)) {
        const d = BUILD[id], df = DEFAULTS.build[id];
        body += `<span>${d.name} <small>${d.on}</small></span>` + (['cost', 'time', 'max'] as const).map(f2 => `<input class="${d[f2] !== df[f2] ? 'changed' : ''}" data-g="build" data-k="${id}" data-f="${f2}" value="${d[f2]}">`).join('');
      }
      body += '</div>';
    } else if (tab === 'research') {
      for (const k in RESEARCH) body += row('research', k, RESEARCH[k], DEFAULTS.research[k]);
      body += '<p class="dim">TECH_* lists are by tier: [unused, 1, 2, 3, 4]. REP sets repeatable technologies: base cost, growth per level, seconds, Drones.</p>';
    } else {
      body += `<div class="cout">${out.slice(-60).map(l => `<div>${l.replace(/</g, '&lt;')}</div>`).join('')}</div><input id="ccmd" placeholder="command, e.g. ult 500" autocomplete="off">`;
    }
    const changed = Object.keys(o.cfg).length + Object.keys(o.build).length + Object.keys(o.research).length;
    el.innerHTML = `<div class="chead"><b>Tuning console</b><small>${changed} change${changed === 1 ? '' : 's'} saved in this browser</small><button data-c="close">✕</button></div>
      <div class="ctabs">${['values', 'buildings', 'research', 'commands'].map(t => `<button data-c="tab:${t}" class="${tab === t ? 'on' : ''}">${t}</button>`).join('')}</div>
      ${tab === 'commands' ? '' : `<input id="cfilter" placeholder="filter" value="${filter}">`}
      <div class="cbody">${body}</div>
      <div class="cfoot"><button data-c="export">Copy changes</button><button data-c="import">Paste changes</button><button data-c="reset">Reset all</button></div>
      <p class="dim">Most values apply at once. Map values (shields on neutral planets, garrisons) apply to the next new run.</p>`;
    if (tab === 'commands') (el.querySelector('#ccmd') as HTMLInputElement)?.focus();
  }

  function setValue(input: HTMLInputElement) {
    const o = load(), g = input.dataset.g!, k = input.dataset.k!;
    try {
      if (g === 'build') {
        const f2 = input.dataset.f as 'cost' | 'time' | 'max', v = Number(input.value);
        if (!Number.isFinite(v)) throw 0;
        BUILD[k][f2] = v; o.build[k] = { ...(o.build[k] || {}), [f2]: v };
      } else {
        const tbl = (g === 'cfg' ? CFG : RESEARCH) as Record<string, unknown>, v = parse(input.value, tbl[k]);
        if (!valid(v)) throw 0;
        assign(tbl, k, v); (g === 'cfg' ? o.cfg : o.research)[k] = v;
      }
      save(o); input.classList.remove('bad'); host.refresh(); render();
    } catch { input.classList.add('bad'); }
  }

  function command(line: string) {
    const [c, ...a] = line.trim().split(/\s+/), g = host.game(), n = a[0] !== undefined ? Number(a[0]) : NaN;
    out.push(`> ${line}`);
    const say = (s: string) => out.push(s);
    const sel = host.selected();
    if (c === 'help' || !c) { say('ult N · drones N (selected node) · cap · reveal · stage N · mob 0-1 · tech ID|all · relic ID · spec ID · win · speed N · list specs|relics|techs'); return; }
    if (c === 'list') { const t = a[0] === 'relics' ? Object.keys(RELICS) : a[0] === 'techs' ? Object.keys(TECHS) : Object.keys(SPECS); say(t.join(' ')); return; }
    if (c === 'speed') { host.setSpeed(Math.max(1, Math.min(32, n || 1))); say(`speed ${n}x`); return; }
    if (!g) { say('Start a run first.'); return; }
    switch (c) {
      case 'ult': g.sides[PLAYER].ult += n || 0; say(`Ultanium ${Math.floor(g.sides[PLAYER].ult)}`); break;
      case 'drones': if (sel < 0 || g.nodes[sel].owner !== PLAYER) say('Select one of your nodes first'); else { g.nodes[sel].drones += n || 0; say(`${g.nodes[sel].name}: ${g.nodes[sel].drones} Drones`); } break;
      case 'cap': say(`Drones ${totalDrones(g, PLAYER)} / cap ${droneCap(g, PLAYER)}`); break;
      case 'reveal': for (const x of g.nodes) x.buffs.push({ k: 'scan', v: 1, until: g.t + 120 }); updateVision(g); say('Whole map identified for 2 minutes'); break;
      case 'stage': g.mob.stage = Math.max(1, Math.min(5, n || 1)); g.mob.prog = 0; say(`Mobilization stage ${g.mob.stage}`); break;
      case 'mob': g.mob.prog = Math.max(0, Math.min(0.99, n || 0)); say(`Mobilization progress ${g.mob.prog}`); break;
      case 'tech': if (a[0] === 'all') { for (const id in TECHS) if (!TECHS[id].rep && !TECHS[id].excl) grantTech(g, PLAYER, id); say('Granted every non-doctrine technology'); } else if (TECHS[a[0]]) { grantTech(g, PLAYER, a[0]); say(`Granted ${TECHS[a[0]].name}`); } else say('Unknown technology'); break;
      case 'relic': if (RELICS[a[0]]) { g.sides[PLAYER].relics.push(a[0]); g.modV++; say(`Relic ${RELICS[a[0]].name}`); } else say('Unknown relic'); break;
      case 'spec': { const at = sel >= 0 && g.nodes[sel].owner === PLAYER ? sel : g.home; if (SPECS[a[0]]) { addSpec(g, a[0], PLAYER, at); say(`${SPECS[a[0]].name} at ${g.nodes[at].name}`); } else say('Unknown specialist'); break; }
      case 'win': g.result = 'win'; g.resultWhy = 'Console.'; break;
      default: say('Unknown command. Type help.');
    }
    host.refresh();
  }

  el.addEventListener('click', e => {
    const b = (e.target as HTMLElement).closest('[data-c]') as HTMLElement | null;
    if (!b) return;
    const [k, v] = b.dataset.c!.split(':');
    if (k === 'close') toggle(false);
    else if (k === 'tab') { tab = v; render(); }
    else if (k === 'export') { const t = JSON.stringify(load(), null, 1); navigator.clipboard?.writeText(t).catch(() => {}); out.push('Changes copied to the clipboard:', t); tab = 'commands'; render(); }
    else if (k === 'import') { const t = prompt('Paste tuning JSON'); if (t) { try { save({ cfg: {}, build: {}, research: {}, ...JSON.parse(t) }); location.reload(); } catch { alert('That is not valid JSON'); } } }
    else if (k === 'reset') { if (confirm('Reset every tuned value to the default? The page reloads.')) { localStorage.removeItem(KEY); location.reload(); } }
  });
  el.addEventListener('change', e => { const i = e.target as HTMLInputElement; if (i.dataset.g) setValue(i); });
  el.addEventListener('input', e => { const i = e.target as HTMLInputElement; if (i.id === 'cfilter') { filter = i.value; const pos = i.selectionStart; render(); const f = el.querySelector('#cfilter') as HTMLInputElement; f.focus(); f.setSelectionRange(pos, pos); } });
  el.addEventListener('keydown', e => {
    e.stopPropagation();
    const i = e.target as HTMLInputElement;
    if (e.key === 'Enter' && i.id === 'ccmd') { command(i.value); render(); }
    else if (e.key === 'Enter' && i.dataset.g) setValue(i);
    else if (e.key === '`' || e.key === 'Escape') { e.preventDefault(); toggle(false); }
  });
  function toggle(on?: boolean) { const open = on ?? !el.classList.contains('open'); el.classList.toggle('open', open); if (open) render(); }
  document.addEventListener('keydown', e => {
    if ((e.key === '`' || e.key === 'F2') && !(e.target as HTMLElement).closest('input,textarea')) { e.preventDefault(); toggle(); }
  });
  return { toggle };
}
