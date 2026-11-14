// In-game tuning console (desktop). Opens with ` (backtick), F2 or the gear button.
// Every balance number in CFG can be edited live. Edits are kept in this browser and re-applied on
// every load; "Copy changes" puts them on the clipboard as JSON so they can become the defaults.
import { CFG } from '../sim/config';
import { TECHS, SPECS, RELICS } from '../sim/content';
import type { Game } from '../sim/types';
import { PLAYER } from '../sim/types';
import { addSpec, grantTech, updateVision, economy } from '../sim/core';

const KEY = 'spacenodes.tune.v2';
const DEFAULTS: Record<string, unknown> = JSON.parse(JSON.stringify(CFG));
const TBL = CFG as unknown as Record<string, unknown>;

const HELP: Record<string, string> = {
  fleetSpeed: 'Map units per second', startUlt: 'Starting Ultanium', startDrones: 'Starting Drones', baseIncome: 'Free Ultanium per minute', freeBase: 'Drones that cost no upkeep',
  mineOut: 'Ultanium/min by mine level (0,1,2,3)', sizeMult: 'Planet size multiplier (small, medium, large)', refineryMult: 'Refinery output multiplier', labRp: 'Research per minute per Lab',
  labWorkers: 'Extra Drones a Lab needs', supplyFree: 'Drones a Supply world feeds', upkeepDrone: 'Ultanium/min per Drone', upkeepPower: 'Ultanium/min per point of specialist Power',
  depotMult: 'Upkeep multiplier for Drones in a Depot', armyShare: 'Stations stop building when upkeep reaches this share of income', desertSecs: 'Seconds per deserting Drone when broke',
  lvCost: 'Cost to reach level (-, -, 2, 3)', lvTime: 'Seconds per level upgrade', shCost: 'Cost to reach shield level (-, 1, 2, 3)', shTime: 'Seconds per shield upgrade',
  specCost: 'Specialty cost', specTime: 'Specialty build seconds', missileCost: 'Missile cost', missileTime: 'Missile build seconds', missileRange: 'Missile reach', missileKill: 'Drones a missile destroys', missileSpeed: 'Missile speed multiplier',
  prodSecs: 'Seconds per Drone by Barracks level (-, 1, 2, 3)', shieldPerLv: 'Shield per shield level', shieldRegenSecs: 'Seconds per shield point recharged',
  slotsStation: 'Launch slots per station', slotsPlanet: 'Launch slots per planet', specSlots: 'Active specialists per node', crew: 'Specialists per fleet', baySpeed: 'Launch Bay speed bonus', bayCrew: 'Launch Bay extra crew',
  rallyBatch: 'Spare Drones before a rally convoy leaves', fleetFov: 'Fleet vision: full intelligence, detection', fovInner: 'Node full-intelligence radius', fovOuter: 'Node detection radius',
  corridorCost: 'Corridor cost', corridorTime: 'Corridor build seconds', corridorRange: 'Corridor reach', corridorMax: 'Corridors per node', corridorSpeed: 'Convoy speed multiplier',
  rescueSecs: 'Commander rescue window', ransom: 'Ultanium per ransom', recruitCost: 'Cost to recruit a prisoner', rpBase: 'Research needed for the first choice', rpStep: 'Extra research per technology known',
  xpLevels: 'Commander experience per level', nodes: 'Nodes on the map (next run)', neutralShield: 'Shield level on neutral planets by size (next run)',
  stageSecs: 'Seconds per mobilization stage', graceSecs: 'Seconds before the first offensive', offInterval: 'Seconds between offensives, by stage', offCommit: 'Share of Drones sent on offensives, by stage',
  gatherSecs: 'Seconds an offensive gathers', stageFree: 'Reserve Drones each faction gains per stage', surgeFree: 'Reserve Drones per total-war surge', captureSetback: 'Mobilization lost per enemy node captured', aegisPerLayer: 'Citadel Aegis per unbroken faction',
};

function load(): Record<string, unknown> { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { return {}; } }
function save(o: Record<string, unknown>) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch { /* storage unavailable */ } }
function assign(key: string, val: unknown) {
  const cur = TBL[key];
  if (Array.isArray(cur) && Array.isArray(val)) { cur.length = 0; cur.push(...val); }
  else if (cur && typeof cur === 'object' && val && typeof val === 'object') Object.assign(cur, val);
  else TBL[key] = val;
}
/** Apply saved overrides to the live table. Called once at startup, before a game is created. */
export function applyTuning() { const o = load(); for (const k in o) if (k in TBL) assign(k, o[k]); }

const fmt = (v: unknown): string => (Array.isArray(v) ? v.join(', ') : v && typeof v === 'object' ? JSON.stringify(v) : String(v));
function parse(text: string, like: unknown): unknown {
  if (Array.isArray(like)) return text.split(/[,\s]+/).filter(Boolean).map(Number);
  if (like && typeof like === 'object') return JSON.parse(text);
  return Number(text);
}
const valid = (v: unknown): boolean => (Array.isArray(v) ? v.length > 0 && v.every(x => Number.isFinite(x)) : typeof v === 'number' ? Number.isFinite(v) : v !== null && typeof v === 'object');

export interface ConsoleHost { game: () => Game | null; selected: () => number; setSpeed: (n: number) => void; refresh: () => void }

export function initConsole(host: ConsoleHost) {
  const el = document.createElement('div');
  el.id = 'console';
  document.body.appendChild(el);
  let tab = 'values', filter = '';
  const out: string[] = ['Type help for commands.'];

  function render() {
    const o = load(), f = filter.toLowerCase();
    let body = '';
    if (tab === 'values') {
      for (const k of Object.keys(CFG)) {
        if (k === 'dt' || (f && !(k + (HELP[k] || '')).toLowerCase().includes(f))) continue;
        body += `<label class="crow ${fmt(TBL[k]) !== fmt(DEFAULTS[k]) ? 'changed' : ''}"><span><b>${k}</b><small>${HELP[k] || ''}</small></span><input data-k="${k}" value='${fmt(TBL[k])}'></label>`;
      }
    } else body = `<div class="cout">${out.slice(-60).map(l => `<div>${l.replace(/</g, '&lt;')}</div>`).join('')}</div><input id="ccmd" placeholder="command, e.g. ult 500" autocomplete="off">`;
    const changed = Object.keys(o).length;
    el.innerHTML = `<div class="chead"><b>Tuning console</b><small>${changed} change${changed === 1 ? '' : 's'} saved in this browser</small><button data-c="close">✕</button></div>
      <div class="ctabs">${['values', 'commands'].map(t => `<button data-c="tab:${t}" class="${tab === t ? 'on' : ''}">${t}</button>`).join('')}</div>
      ${tab === 'values' ? `<input id="cfilter" placeholder="filter" value="${filter}">` : ''}
      <div class="cbody">${body}</div>
      <div class="cfoot"><button data-c="export">Copy changes</button><button data-c="import">Paste changes</button><button data-c="reset">Reset all</button></div>
      <p class="dim">Most values apply at once. Map values (node count, neutral shields) apply to the next new run.</p>`;
    if (tab === 'commands') (el.querySelector('#ccmd') as HTMLInputElement)?.focus();
  }
  function setValue(input: HTMLInputElement) {
    const o = load(), k = input.dataset.k!;
    try {
      const v = parse(input.value, TBL[k]);
      if (!valid(v)) throw 0;
      assign(k, v); o[k] = v; save(o);
      host.refresh(); render();
    } catch { input.classList.add('bad'); }
  }
  function command(line: string) {
    const [c, ...a] = line.trim().split(/\s+/), g = host.game(), n = a[0] !== undefined ? Number(a[0]) : NaN, sel = host.selected();
    out.push(`> ${line}`);
    const say = (s: string) => out.push(s);
    if (c === 'help' || !c) { say('ult N · drones N (selected node) · econ · reveal · stage N · mob 0-1 · rp N · tech ID · relic ID · spec ID · upgrade (all specialists) · win · speed N · list specs|relics|techs'); return; }
    if (c === 'list') { say((a[0] === 'relics' ? Object.keys(RELICS) : a[0] === 'techs' ? Object.keys(TECHS) : Object.keys(SPECS)).join(' ')); return; }
    if (c === 'speed') { host.setSpeed(Math.max(1, Math.min(32, n || 1))); say(`speed ${n}x`); return; }
    if (!g) { say('Start a run first.'); return; }
    const side = g.sides[PLAYER];
    switch (c) {
      case 'ult': side.ult += n || 0; say(`Ultanium ${Math.floor(side.ult)}`); break;
      case 'drones': if (sel < 0 || g.nodes[sel].owner !== PLAYER) say('Select one of your nodes first'); else { g.nodes[sel].drones += n || 0; say(`${g.nodes[sel].name}: ${g.nodes[sel].drones} Drones`); } break;
      case 'econ': { const e = economy(g, PLAYER); say(`income ${e.inc.toFixed(1)} · upkeep ${e.upk.toFixed(1)} (specialists ${e.specUp.toFixed(1)}) · Drones ${e.drones}, ${e.free} free · research ${e.rpm.toFixed(1)}/min`); break; }
      case 'reveal': for (const x of g.nodes) x.buffs.push({ k: 'scan', v: 1, until: g.t + 120 }); updateVision(g); say('Whole map identified for 2 minutes'); break;
      case 'stage': g.mob.stage = Math.max(1, Math.min(5, n || 1)); g.mob.prog = 0; say(`Mobilization stage ${g.mob.stage}`); break;
      case 'mob': g.mob.prog = Math.max(0, Math.min(0.99, n || 0)); say(`Mobilization progress ${g.mob.prog}`); break;
      case 'rp': side.rp += n || 0; say(`Research points ${side.rp.toFixed(0)}`); break;
      case 'tech': if (TECHS[a[0]]) { grantTech(g, PLAYER, a[0]); say(`Granted ${TECHS[a[0]].name}`); } else say('Unknown technology'); break;
      case 'relic': if (RELICS[a[0]]) { side.relics.push(a[0]); g.modV++; say(`Relic ${RELICS[a[0]].name}`); } else say('Unknown relic'); break;
      case 'spec': { const at = sel >= 0 && g.nodes[sel].owner === PLAYER ? sel : g.home; if (SPECS[a[0]]) { addSpec(g, a[0], PLAYER, at); say(`${SPECS[a[0]].name} at ${g.nodes[at].name}`); } else say('Unknown specialist'); break; }
      case 'upgrade': for (const sp of g.specs) if (sp.owner === PLAYER && !sp.cmd) sp.up = true; g.modV++; say('Every specialist upgraded'); break;
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
    else if (k === 'import') { const t = prompt('Paste tuning JSON'); if (t) { try { save(JSON.parse(t)); location.reload(); } catch { alert('That is not valid JSON'); } } }
    else if (k === 'reset') { if (confirm('Reset every tuned value to the default? The page reloads.')) { localStorage.removeItem(KEY); location.reload(); } }
  });
  el.addEventListener('change', e => { const i = e.target as HTMLInputElement; if (i.dataset.k) setValue(i); });
  el.addEventListener('input', e => { const i = e.target as HTMLInputElement; if (i.id === 'cfilter') { filter = i.value; const pos = i.selectionStart; render(); const f = el.querySelector('#cfilter') as HTMLInputElement; f.focus(); f.setSelectionRange(pos, pos); } });
  el.addEventListener('keydown', e => {
    e.stopPropagation();
    const i = e.target as HTMLInputElement;
    if (e.key === 'Enter' && i.id === 'ccmd') { command(i.value); render(); }
    else if (e.key === 'Enter' && i.dataset.k) setValue(i);
    else if (e.key === '`' || e.key === 'Escape') { e.preventDefault(); toggle(false); }
  });
  function toggle(on?: boolean) { const open = on ?? !el.classList.contains('open'); el.classList.toggle('open', open); if (open) render(); }
  document.addEventListener('keydown', e => { if ((e.key === '`' || e.key === 'F2') && !(e.target as HTMLElement).closest('input,textarea')) { e.preventDefault(); toggle(); } });
  return { toggle };
}
