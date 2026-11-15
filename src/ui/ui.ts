import type { Game, GNode, Fleet, Spec, Mods } from '../sim/types';
import { PLAYER } from '../sim/types';
import { CFG, SPECIALTY } from '../sim/config';
import { SPECS, ARCHS, RELICS, TECHS, FACTIONS, ARCHONS, EVENTS, LORE, LORE_BY_ID, PREMISE } from '../sim/content';
import { sideMods, perkDef, specLoc, power, specUpkeep, chargeCd, locMods, level, command, commandOf } from '../sim/mods';
import {
  calcBattle, viewOf, nodeIncome, workers, floorOf, shieldMax, aegis, totalDrones, slotsOf, slotsFree, crewMax, canUp, upCost, prodSecs, canProduce,
  corridorsAt, corridorMax, corridorCost, rallyPlan, incoming, canMissile, launchSpeed, route, dist, sideName, sideColor, fleetSeen, eta, canCorridor,
  specName, rescueWindow, eventChoiceOk, rpCost, fleetById, nodeMods, labRunning, lvAfter, hasFlagship, type UpKind,
} from '../sim/core';
import { known } from './render';
import { isMuted } from './sound';

export interface App {
  g: Game | null; speed: number; paused: boolean;
  sel: { type: 'node' | 'fleet'; id: number } | null; menu: string | null;
  mode: null | { k: 'missile'; from: number };
  pickSpec: number; // node whose specialty choices are expanded, or -1
  launch: null | { from: number; to: number; drones: number; specs: number[]; lane: boolean };
  drag: null | { spec: number; x: number; y: number; over: number; label: string; ok: boolean };
  screen: 'title' | 'game' | 'help'; newThreat: number; meta: { runs: number; wins: number; unlocked: number; best: number; codex: string[] };
  hasSave: boolean;
}

export const fmtT = (s: number) => { s = Math.max(0, Math.floor(s)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
const esc = (s: string) => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));
const bar = (p: number, cls = '') => `<div class="bar ${cls}"><i style="width:${Math.max(0, Math.min(100, p * 100)).toFixed(1)}%"></i></div>`;
const btn = (a: string, label: string, opts: { off?: string | null; cls?: string; sub?: string } = {}) =>
  `<button data-a="${a}" class="btn ${opts.cls || ''}" ${opts.off ? 'disabled' : ''}>${label}${opts.sub ? `<small>${opts.sub}</small>` : ''}${opts.off ? `<small class="why">${esc(opts.off)}</small>` : ''}</button>`;
const num = (v: number) => (Math.abs(v) >= 10 ? v.toFixed(0) : v.toFixed(1));

/** A specialist token. Every token carries data-tip so hold or hover shows the tooltip anywhere. */
export function token(g: Game, sp: Spec, big = false, pow = false) {
  const d = SPECS[sp.def], cmd = sp.id === g.cmdSpec, L = level(g, sp);
  return `<span class="tok ${big ? 'big' : ''} ${cmd ? 'cmd' : ''} ${L >= 3 ? 'up' : ''}" data-tip="${sp.id}" style="--c:${cmd ? '#e8bd55' : d.color}">${cmd ? '★' : d.tag}${pow ? `<i>${power(g, sp)}</i>` : ''}${L > 1 && !d.hidden ? `<em>${L}</em>` : ''}</span>`;
}
const defTok = (id: string) => `<span class="tok big" style="--c:${SPECS[id].color}">${SPECS[id].tag}<i>${SPECS[id].pow}</i></span>`;
/** Experience toward the next level, 0..1. */
const xpFrac = (sp: Spec) => (sp.lvl >= 5 ? 1 : (sp.xp - CFG.specXp[sp.lvl]) / (CFG.specXp[sp.lvl + 1] - CFG.specXp[sp.lvl]));
const short = (sp: Spec) => (sp.cmd ? 'Commander' : SPECS[sp.def].name);

export function specText(g: Game, sp: Spec): string {
  const d = SPECS[sp.def];
  let t = d.text;
  if (sp.cmd) t += ' ' + ARCHS[sp.cmd.arch].text;
  const L = level(g, sp);
  if (!sp.cmd && L >= 3 && d.up.text) t += ` <b class="upt">Level 3: ${d.up.text}</b>`;
  if (!sp.cmd && L >= 5) t += ` <b class="upt">Mastery: their passive counts twice.</b>`;
  return t;
}
export function specTip(g: Game, sp: Spec): string {
  const d = SPECS[sp.def];
  const L = level(g, sp), aura = L > (sp.cmd ? sp.cmd.lvl : sp.lvl);
  const title = sp.cmd ? `Commander · ${d.name} ${ARCHS[sp.cmd.arch].name} · level ${L}` : `${specName(sp)}${d.hidden ? '' : ` · level ${L}`}`;
  const where = sp.held ? `Prisoner at ${g.nodes[sp.node]?.name}` : sp.node >= 0 ? `At ${g.nodes[sp.node].name}` : sp.fleet >= 0 ? `In flight to ${g.nodes[fleetById(g, sp.fleet)?.to ?? 0].name}` : '';
  const owner = sp.owner === PLAYER ? '' : ` · ${esc(sideName(g, sp.owner))}`;
  let extra = '';
  if (d.charge) extra += `<p><b>${d.charge.text.split(' (')[0]}:</b> ${sp.owner === PLAYER && sp.cd > g.t ? `recharging, ${fmtT(sp.cd - g.t)}` : 'ready'} <small>(recharges in ${fmtT(chargeCd(g, sp))})</small></p>`;
  if (!sp.cmd && !d.hidden && sp.owner === PLAYER) {
    const next = L < 2 ? '+1 Power' : L < 3 ? `upgraded: ${d.up.text}` : L < 4 ? '+1 Power' : L < 5 ? 'mastery, the passive counts twice' : '';
    if (next) extra += `<p class="dim">Level ${L + 1}: ${next}, +${CFG.cmdPerLvl} Command. Earned in battle.</p>${bar(xpFrac(sp), 'gold')}`;
  }
  if (aura) extra += `<p class="goodp small">+1 level from the Flagship nearby.</p>`;
  if (sp.cmd && sp.cmd.perks.length) extra += `<p class="dim">${sp.cmd.perks.map(p => perkDef(p).name).join(' · ')}</p>`;
  const up = sp.owner === PLAYER && !sp.cmd ? ` · upkeep ◆ ${num(specUpkeep(g, sp))}/min` : '';
  return `<div class="tiphead">${token(g, sp, true)}<div><b>${esc(title)}</b><small>${d.role} · Power ${power(g, sp)} · Command ${command(g, sp, g.mob.stage)}${up}${owner}</small><small>${esc(where)}</small></div></div><p>${specText(g, sp)}</p>${extra}`;
}

// ------------------------------------------------------------------ HUD and roster
export function hud(app: App): string {
  const g = app.g!, side = g.sides[PLAYER], m = g.mob, cmd = g.specs[g.cmdSpec];
  let banner = '';
  if (cmd && cmd.held && g.cmdLostT >= 0) banner = `<div class="banner bad" data-a="focus:${cmd.node}">★ COMMANDER CAPTURED at ${esc(g.nodes[cmd.node].name)}. Retake it in <b>${fmtT(rescueWindow(g) - (g.t - g.cmdLostT))}</b></div>`;
  else if (app.mode) {
    banner = `<div class="banner">Tap a glowing node to strike <button class="btn sm" data-a="cancelmode">Cancel</button></div>`;
  } else if (g.offs.length) {
    const o = g.offs[0], more = g.offs.length > 1 ? ` <b>+${g.offs.length - 1} more</b>` : '';
    banner = `<div class="banner warn" ${o.warned ? `data-a="focus:${o.target}"` : ''}>⚠ ${esc(sideName(g, o.owner))} offensive ${o.warned ? `on ${esc(g.nodes[o.target].name)} ` : ''}launches in ${fmtT(o.launchT - g.t)}${more}</div>`;
  }
  const pips = [1, 2, 3, 4, 5].map(i => `<i class="${i <= m.stage ? 'on' : ''}"></i>`).join('');
  const building = side.produce && canProduce(side);
  const prodTitle = !side.produce ? 'Drone production paused' : building ? 'Building Drones' : 'Army at the limit your income supports';
  const rc = rpCost(g, PLAYER);
  return `<div class="hudrow">
    <div class="stat" data-a="menu:run" title="Ultanium: income and upkeep per minute"><b class="ult">◆ ${Math.floor(side.ult)}</b><small class="${side.net < 0 ? 'bad' : ''}">${side.net >= 0 ? '+' : ''}${num(side.net)}/min</small></div>
    <button class="stat prod ${side.produce ? (building ? 'on' : 'full') : 'off'}" data-a="produce" title="${prodTitle}. Tap to ${side.produce ? 'pause' : 'resume'}."><b>⬢ ${totalDrones(g, PLAYER)}</b><small>${!side.produce ? '⏸ paused' : building ? '▶ building' : '■ at limit'}</small></button>
    <div class="stat rsch" data-a="menu:research" title="Research: progress to the next choice">${side.rpm > 0 ? `<b>⚗ ${fmtT(Math.max(0, (rc - side.rp) / side.rpm) * 60)}</b>` : '<b>⚗ —</b>'}${bar(side.rp / rc, 'blue')}</div>
    <div class="stat mob" data-a="menu:intel" title="Coalition mobilization"><span class="pips">${pips}</span>${bar(m.prog, 'red')}${m.surge ? `<small>TOTAL WAR +${m.surge}</small>` : ''}</div>
    <div class="grow"></div>
    <div class="stat time"><b>${fmtT(g.t)}</b></div>
    <button class="btn ico ${app.paused ? 'hot' : ''}" data-a="pause" title="Pause (space)">${app.paused ? '▶' : '❚❚'}</button>
    <button class="btn ico" data-a="speed" title="Speed">${app.speed}×</button>
    <button class="btn ico desk" data-a="sound" title="Sound">${isMuted() ? '🔇' : '🔊'}</button>
    <button class="btn ico desk" data-a="console" title="Tuning console">⚙</button>
    <button class="btn ico" data-a="menu:research" title="Menu (M)">☰</button>
  </div>${banner}`;
}

/** Always-visible portraits: where each specialist is. Tap to jump, hold for details, drag onto a friendly node to send. */
export function roster(app: App): string {
  const g = app.g!;
  const mine = g.specs.filter(s => s.owner === PLAYER).sort((a, b) => (a.cmd ? -1 : 0) - (b.cmd ? -1 : 0));
  return mine.map(sp => {
    const f = sp.fleet >= 0 ? fleetById(g, sp.fleet) : null;
    const where = sp.held ? 'captured' : f ? `→ ${g.nodes[f.to].name}` : sp.node >= 0 ? g.nodes[sp.node].name : '';
    const cls = sp.held ? 'held' : f ? 'fly' : '';
    return `<div class="rost ${cls} ${app.drag?.spec === sp.id ? 'dragging' : ''}" data-spec="${sp.id}" data-tip="${sp.id}">${token(g, sp, true, true)}<small>${esc(where)}</small></div>`;
  }).join('');
}

// ------------------------------------------------------------------ node panel
const pct = (v: number) => `${v > 0 ? '+' : ''}${Math.round(v * 100)}%`;
const MOD_LABEL: Record<string, (v: number) => string> = {
  atk: v => `Attack +${v}`, per4: v => `+1 per 4 Drones (max ${v})`, pierce: v => (v >= 20 ? 'Ignores shields' : `Ignores ${v} shield`), strike: v => `First strike ${v}`,
  surv: v => (v > 0 ? `Saves ${v} Drones` : `Loses ${-v} more`), vsNeutral: v => `+${v} vs neutral`, salvage: () => 'Salvage', speed: v => `Speed ${pct(v)}`, stealth: () => 'Unseen',
  slotFree: () => 'Uses no slot', def: v => `Defence +${v}`, shield: v => `Shield +${v}`, regen: () => 'Fast recharge', inc: v => `◆ +${v}/min`, research: v => `Research +${v}`,
  prodSecs: v => `Drones ${v}s faster`, free: v => `Feeds ${v}`, lance: v => `Lances ${v}`, martyr: v => `Martyr ${v}`, build: () => 'Fast upgrades', upgCost: v => `Upgrades −${v}`,
  launchSpeed: v => `Launch ${pct(v)}`, fov: v => `Vision ${pct(v)}`, income: v => `◆ +${v}/min`, freeDrones: v => `Feeds ${v}`, warn: () => 'Warns of attacks', sigint: () => 'Reads fleets',
  rp: v => `Research +${v}`, recruitFree: () => 'Free recruits', corridorMax: () => 'More corridors',
  train: v => `Trains ${v}/min`, mask: () => 'Unreadable', retreat: () => 'Retreats',
};
function modText(m: Mods): string[] { return Object.keys(m).filter(k => m[k] && MOD_LABEL[k]).map(k => MOD_LABEL[k](m[k])); }
function chip(g: Game, sp: Spec, extra = ''): string {
  const d = SPECS[sp.def];
  const glob: Mods = { ...(d.glob || {}), ...(sp.cmd ? ARCHS[sp.cmd.arch].glob || {} : {}) };
  const txt = modText(specLoc(g, sp)).concat(modText(glob), d.charge ? [sp.cd > g.t ? `${d.charge.text.split(' (')[0]} ${fmtT(sp.cd - g.t)}` : `${d.charge.text.split(' (')[0]} ready`] : []);
  return `<span class="pchip ${extra}" data-tip="${sp.id}">${token(g, sp, false, true)}<span>${esc((txt.length ? txt : [d.role]).slice(0, 2).join(' · '))}</span></span>`;
}
/** One compact row: the specialists here and what each is doing. Hold one for details. */
function passiveRow(g: Game, n: GNode): string {
  if (!n.specs.length) return '';
  return `<div class="prow">${n.specs.map(id => (g.specs[id] ? chip(g, g.specs[id]) : '')).join('')}</div>`;
}
function defParts(g: Game, v: GNode) {
  const r = calcBattle(g, 0, 0, [], v, {});
  return { def: r.def, p: r.parts, max: shieldMax(g, v) };
}
function kvDef(g: Game, v: GNode, third: string, own: boolean) {
  const d = defParts(g, v);
  const extra = d.p.dpow + d.p.ddef + d.p.aegis;
  return `<div class="kv"><div><small>GARRISON</small><b>⬢ ${v.drones}</b>${own && floorOf(g, v) ? `<small>keeps ${floorOf(g, v)}</small>` : ''}</div><div><small>SHIELD</small><b>◈ ${Math.floor(v.shields)}<i class="of">/${d.max}</i></b>${extra ? `<small>+${extra} ${d.p.aegis ? 'Aegis and ' : ''}Power</small>` : ''}</div>${third}</div>`;
}
const pips3 = (lv: number, max = 3) => `<span class="lvp">${Array.from({ length: max }, (_, i) => `<i class="${i < lv ? 'on' : ''}"></i>`).join('')}</span>`;
/** One compact upgrade button: name, level pips, price. */
function upBtn(g: Game, n: GNode, what: 'lv' | 'sh', label: string, lv: number): string {
  const after = lvAfter(n, what);
  if (after >= 3) return `<div class="upb done"><b>${label}</b>${pips3(lv)}<small>${after > lv ? 'queued' : 'max'}</small></div>`;
  const why = canUp(g, n, what);
  return `<button class="upb" data-a="up:${what}" ${why ? 'disabled' : ''} title="${why || ''}"><b>${label}</b>${pips3(lv)}<small>${after > lv ? `+${after - lv} queued · ` : ''}◆ ${upCost(g, n, what)}</small></button>`;
}
const taskName = (g: Game, n: GNode, t: GNode['queue'][number], k: number) =>
  t.kind === 'lv' ? `${n.kind === 'planet' ? 'Mine' : 'Barracks'} ${k}` : t.kind === 'sh' ? `Shield ${k}` : t.kind === 'spec' ? SPECIALTY[t.id].name : t.kind === 'missile' ? 'Missile' : t.kind === 'flagship' ? 'Flagship' : `Corridor to ${g.nodes[+t.id].name}`;

function ownNode(app: App, n: GNode): string {
  const g = app.g!, side = g.sides[PLAYER], m = nodeMods(g, n);
  let body = '';
  const ready = slotsFree(g, n), total = slotsOf(g, n);
  const third = n.kind === 'planet'
    ? `<div><small>INCOME</small><b>◆ ${num(nodeIncome(g, n, m))}</b><small>${workers(g, n) > n.drones ? `needs ${workers(g, n)} working` : `fleets ${ready}/${total}`}</small></div>`
    : `<div><small>1 DRONE / ${num(prodSecs(g, n, m))}s</small><b>▲ ${ready}/${total}</b><small>${!side.produce ? 'paused' : canProduce(side) ? 'fleets ready' : 'army at limit'}</small></div>`;
  body += kvDef(g, n, third, true);
  if (n.queue.length) { // the build queue: the first job runs, the rest wait their turn; each was paid when queued
    const lvl = { lv: n.lv, sh: n.sh } as Record<string, number>;
    body += `<div class="queue">${n.queue.map((t, i) => {
      const k = t.kind === 'lv' || t.kind === 'sh' ? ++lvl[t.kind] : 0;
      return `<div class="task slim ${i ? 'q' : ''}"><div><b>${esc(taskName(g, n, t, k))} <small>${i ? 'queued' : fmtT(t.left / (1 + (m.build || 0)))}</small></b>${i ? '' : bar(1 - t.left / t.total, 'gold')}</div><button class="btn sm" data-a="cancel:${i}" title="Cancel and refund">✕</button></div>`;
    }).join('')}</div>`;
  }
  if (n.hold) body += `<div class="task slim"><div><b>${esc(n.hold.name)} <small>hold ${n.hold.need}+ · ${fmtT(n.hold.until - g.t)}</small></b>${bar(1 - (n.hold.until - g.t) / n.hold.total, 'blue')}</div></div>`;
  if (n.event) body += btn('event', `! ${EVENTS[n.event].name}`, { cls: 'wide gold slimb' });

  // one row: level, shield, specialty (and the missile for a silo, the Flagship for a station)
  const specQ = n.queue.find(t => t.kind === 'spec');
  body += `<div class="ups">`;
  body += upBtn(g, n, 'lv', n.kind === 'planet' ? 'Mine' : 'Barracks', n.lv);
  body += upBtn(g, n, 'sh', 'Shield', n.sh);
  if (n.flagship) body += `<div class="upb done" title="Specialists within ${CFG.flagshipAura} of it fight a level higher"><b>Flagship</b><small>drag to open space to sail</small></div>`;
  else if (!n.citadel) body += n.spec ? `<div class="upb done" title="${esc(SPECIALTY[n.spec].desc)}"><b>${SPECIALTY[n.spec].name}</b><small>${n.spec === 'lab' && !labRunning(g, n) ? '<span class="warnp">unstaffed</span>' : 'specialty'}</small></div>`
    : specQ ? `<div class="upb done"><b>${SPECIALTY[specQ.id].name}</b><small>queued</small></div>`
    : `<button class="upb ${app.pickSpec === n.id ? 'sel' : ''}" data-a="pickspec"><b>Specialty</b><small>◆ ${upCost(g, n, 'spec')} · choose</small></button>`;
  if (n.spec === 'silo') body += n.missile ? `<button class="upb hotb" data-a="missile"><b>➹ Fire</b><small>pick a target</small></button>` : `<button class="upb" data-a="up:missile" ${canUp(g, n, 'missile') ? 'disabled' : ''}><b>➹ Missile</b><small>◆ ${CFG.missileCost}</small></button>`;
  if (n.kind === 'station' && !n.flagship && !hasFlagship(g, PLAYER)) { const why = canUp(g, n, 'flagship'); body += `<button class="upb" data-a="up:flagship" ${why ? 'disabled' : ''} title="${esc(why || 'A station that moves. Specialists near it fight a level higher.')}"><b>⛴ Flagship</b><small>◆ ${CFG.flagshipCost}</small></button>`; }
  body += `</div>`;
  if (!n.spec && !specQ && app.pickSpec === n.id) {
    body += `<div class="specpick"><small>Choose one, for good</small><div>`;
    for (const id in SPECIALTY) if (SPECIALTY[id].on === n.kind) body += `<button class="upb" data-a="up:spec:${id}" ${canUp(g, n, 'spec', id) ? 'disabled' : ''}><b>${SPECIALTY[id].name}</b><small>${SPECIALTY[id].desc}</small></button>`;
    body += `</div></div>`;
  }

  // one row: Supply or Bastion, and Rally or Reinforce
  const inc = incoming(g, n), plan = rallyPlan(g, n), sum = plan.reduce((s2, l) => s2 + l.k, 0);
  body += `<div class="ralrow">
    <div class="seg"><button data-a="front:0" class="${n.front ? '' : 'on'}" title="Supply: sends its spare Drones when a node rallies">Supply</button><button data-a="front:1" class="${n.front ? 'on' : ''}" title="Bastion: never sends its Drones away">Bastion</button></div>
    <button class="btn ral ${inc >= 0 ? 'alarm' : 'hot'}" data-a="rally" ${plan.length ? '' : 'disabled'}><b>${inc >= 0 ? `Reinforce · hit in ${fmtT(inc)}` : 'Rally here'}</b><small>${plan.length ? `⬢ ${sum} from ${plan.length} node${plan.length > 1 ? 's' : ''}` : inc >= 0 ? 'none can arrive in time' : 'no spare Drones'}</small></button>
  </div>`;
  body += `<p class="hint">Drag onto another node to send a fleet or build a corridor${n.flagship ? ', or onto open space to sail' : ''}. Double-tap to switch Supply and Bastion.</p>`;

  if (n.prisoners.length) {
    const sm = sideMods(g, PLAYER);
    for (const i of n.prisoners) {
      const sp = g.specs[i], leader = sp.def === 'warlord' || sp.def === 'archon', dup = g.specs.some(o => o.owner === PLAYER && o.def === sp.def);
      body += `<div class="task slim"><div class="rowc">${token(g, sp, false, true)} <b>${esc(specName(sp))}</b><small>prisoner</small></div>${leader ? '' : btn(`ransom:${i}`, `+${Math.round(CFG.ransom * (1 + (sm.ransom || 0)))}`, { cls: 'sm' }) + (sp.def === 'captain' || dup ? '' : btn(`recruit:${i}`, `Recruit ◆ ${sm.recruitFree ? 0 : CFG.recruitCost}`, { cls: 'sm hot' }))}</div>`;
    }
  }
  return `${passiveRow(g, n)}<div class="pbody">${body}</div>`;
}

function foreignNode(app: App, n: GNode): string {
  const g = app.g!, k = known(g, n), view = viewOf(g, n);
  let body = '', head = '';
  if (k.tier === 'detected' || !view.v) body += `<p class="warnp">Detected only. Its forces are unknown. Fly a fleet close, or send a probe (0 Drones, no specialist) to identify it.</p>`;
  else {
    const v = view.v, d = defParts(g, v);
    if (!view.live) body += `<p class="warnp">Last seen ${fmtT(view.age)} ago. This may be out of date.</p>`;
    body += kvDef(g, v, `<div><small>DEFENCE</small><b>${d.def}</b><small>beat it to win</small></div>`, false);
    head = passiveRow(g, v);
    const role = `${v.kind === 'planet' ? 'Mine' : 'Barracks'} level ${v.lv}${v.spec ? ` · ${SPECIALTY[v.spec].name}` : ''}${v.missile ? ' · missile ready' : ''}`;
    body += `<p class="dim">${role}</p>`;
    if (v.prisoners.some(i => g.specs[i].owner === PLAYER)) body += `<p class="warnp">Holding your people: ${v.prisoners.filter(i => g.specs[i].owner === PLAYER).map(i => esc(specName(g.specs[i]))).join(', ')}</p>`;
    if (n.offer) body += `<p class="goodp">☺ Capture this to recruit 1 of 3 specialists.</p>`;
    if (n.event) body += `<p class="goodp">! Signal: ${EVENTS[n.event].name}.</p>`;
    if (n.capital && g.sides[v.owner]?.kind === 'faction') body += `<p class="goodp">♛ Capital of the ${FACTIONS[g.sides[v.owner].fac].name}. Capture it and the whole faction surrenders.</p>`;
    if (n.citadel) body += `<p class="goodp">✦ The Citadel. Capture it to win.</p>`;
  }
  const src = g.nodes.filter(o => o.owner === PLAYER && slotsFree(g, o) > 0 && (o.specs.length || o.drones)).sort((a, b) => dist(a, n) - dist(b, n)).slice(0, 4);
  if (src.length) body += `<div class="crewline stay"><small>SEND FROM · or drag from your node onto this one</small><div>${src.map(o => `<button class="chip" data-a="from:${o.id}">${esc(o.name)} ⬢${o.drones} · ${fmtT(dist(o, n) / launchSpeed(g, o, []))}</button>`).join('')}</div></div>`;
  else body += `<p class="hint">No node has a fleet ready to send here.</p>`;
  const silo = g.nodes.find(o => o.owner === PLAYER && !canMissile(g, o, n));
  if (silo) body += btn(`missilefrom:${silo.id}`, '➹ Missile strike', { cls: 'wide gold', sub: `From ${esc(silo.name)}: wipes the shield and kills ${CFG.missileKill} Drones` });
  return `${head}<div class="pbody">${body}</div>`;
}

// ------------------------------------------------------------------ launch bar
export function minToWin(g: Game, L: NonNullable<App['launch']>): number {
  const from = g.nodes[L.from], v = viewOf(g, g.nodes[L.to]).v;
  if (!v) return 0;
  const most = Math.min(from.drones, commandOf(g, L.specs));
  for (let d = 1; d <= most; d++) if (calcBattle(g, PLAYER, d, L.specs, v).win) return d;
  return 0;
}
/** The most Drones this launch may carry: all of them to a friend, the crew's Command into an attack. */
export const launchMax = (g: Game, L: NonNullable<App['launch']>) => (g.nodes[L.to].owner === PLAYER ? g.nodes[L.from].drones : Math.min(g.nodes[L.from].drones, commandOf(g, L.specs)));
/** Does this specialist make an attack stronger? Used to highlight them in the load-out. */
export function offensive(g: Game, sp: Spec): boolean {
  const m = specLoc(g, sp), d = SPECS[sp.def];
  return !!(m.atk || m.per4 || m.pierce || m.strike || m.vsNeutral || (m.surv || 0) > 0 || m.salvage || m.stealth || d.charge?.on === 'attack');
}
export function launchPreview(g: Game, L: NonNullable<App['launch']>): string {
  const from = g.nodes[L.from], to = g.nodes[L.to];
  const secs = L.lane ? route(g, from, to, L.specs).secs : dist(from, to) / launchSpeed(g, from, L.specs);
  const cmd = commandOf(g, L.specs);
  let out = `<div class="lstat"><span>⬢ <b>${L.drones}</b> go</span><span>⬢ <b>${from.drones - L.drones}</b> stay</span>${to.owner === PLAYER ? '' : `<span>command <b>${cmd}</b></span>`}<span>arrives <b>${fmtT(secs)}</b></span></div>`;
  if (to.owner === PLAYER) return out;
  if (!L.specs.length) return out + (L.drones ? `<p class="badp"><b>An attack needs a specialist to lead it.</b> Add one, or send 0 Drones as a probe.</p>` : `<p class="warnp">Probe: identifies the target and is lost.</p>`);
  const view = viewOf(g, to);
  if (!view.v) return out + `<p class="badp"><b>Unknown forces. Battle outcome unavailable.</b></p>`;
  const r = calcBattle(g, PLAYER, L.drones, L.specs, view.v), p = r.parts;
  const atk = [`${p.drones}⬢`, `${p.pow} Power`].concat(p.bonus ? [`+${p.bonus}`] : []).join(' + ');
  const def = [`${p.garr}⬢`].concat(p.shield ? [`${p.shield} shield`] : [], p.dpow ? [`${p.dpow} Power`] : [], p.ddef ? [`+${p.ddef}`] : [], p.aegis ? [`${p.aegis} Aegis`] : []).join(' + ');
  const notes = [p.lance ? `${p.lance} lost before landing` : '', p.strike ? `first strike kills ${p.strike}` : '', !view.live ? `intel ${fmtT(view.age)} old` : '', L.specs.includes(g.cmdSpec) ? '★ Commander at risk' : ''].filter(Boolean).join(' · ');
  out += `<div class="vs ${r.win ? 'win' : 'lose'}"><div><b>${r.atk}</b><small>${atk}</small></div><i>${r.win ? '>' : '≤'}</i><div><b>${r.def}</b><small>${def}</small></div></div>`;
  const capped = from.drones > cmd && minToWin(g, L) === 0 && !r.win;
  out += r.win ? `<p class="goodp"><b>Victory:</b> ${r.surv} Drones survive. The crew gains ${CFG.xpWin} experience.</p>`
    : `<p class="badp"><b>Defeat:</b> short by ${r.def - r.atk + 1}. ${to.owner === 0 ? 'The crew returns.' : 'The crew is captured.'}${capped ? ' This crew cannot command enough Drones: add a specialist.' : ''}</p>`;
  if (notes) out += `<p class="warnp small">${notes}</p>`;
  return out;
}
function launchBar(app: App): string {
  const g = app.g!, L = app.launch!, from = g.nodes[L.from], to = g.nodes[L.to];
  if (from.owner !== PLAYER) { app.launch = null; return ''; }
  const attack = to.owner !== PLAYER;
  // what each specialist adds to this attack, so the choice is a number and not a guess
  const v = attack ? viewOf(g, to).v : null;
  const atkOf = (ids: number[]) => (v ? calcBattle(g, PLAYER, L.drones, ids, v).atk - (calcBattle(g, PLAYER, L.drones, ids, v).parts.strike ? 0 : 0) : ids.reduce((t, i) => t + power(g, g.specs[i]), 0));
  const gain = (id: number) => (L.specs.includes(id) ? atkOf(L.specs) - atkOf(L.specs.filter(i => i !== id)) : atkOf(L.specs.concat(id)) - atkOf(L.specs));
  const chipFor = (id: number, on: boolean, lead: boolean) => { const sp = g.specs[id]; return `<button class="chip ${on ? 'on' : ''} ${attack && offensive(g, sp) ? 'offs' : ''}" data-a="lspec:${id}">${token(g, sp, false, true)} ${esc(short(sp))}${attack ? ` <i class="gain">+${gain(id)}</i>` : ''}${lead ? ' <i class="lead">LEADS</i>' : ''}</button>`; };
  const chosen = L.specs.map((id, i) => chipFor(id, true, i === 0 && attack)).join('');
  const avail = from.specs.filter(i => !L.specs.includes(i));
  const availHtml = avail.map(i => chipFor(i, false, false)).join('');
  const cap = L.lane ? '' : ` ${L.specs.length}/${crewMax(g, from)}`, mx = launchMax(g, L);
  if (L.drones > mx) L.drones = mx;
  let corr = '';
  if (!attack) { // between two of your nodes, the same drag can also lay a corridor
    const why = canCorridor(g, from, to), linked = corridorsAt(g, from.id).some(c => c.a === to.id || c.b === to.id);
    if (!linked) corr = `<button class="btn wide corrb" data-a="lcorridor" ${why ? 'disabled' : ''}><b>⇄ Build a corridor here</b><small>${why ? esc(why) : `◆ ${corridorCost(g)} · ${fmtT(CFG.corridorTime / (1 + (nodeMods(g, from).build || 0)))} · ${corridorsAt(g, from.id).length}/${corridorMax(g)} at ${esc(from.name)} · double speed, no launch slot`}</small></button>`;
  }
  return `<div class="phead"><div><h2>${esc(from.name)} → ${esc(to.name)}</h2><small>${L.lane ? 'Through corridors (quickest route)' : attack ? `Attack · this crew commands ${commandOf(g, L.specs)} Drones` : 'Reinforce by fleet'}</small></div><button class="btn ico" data-a="lcancel">✕</button></div>
  <div class="pbody">
    ${corr}
    <div class="drow"><input type="range" id="lslider" min="0" max="${mx}" value="${L.drones}"><div class="quick">${btn('lq:none', '0', { cls: 'sm' })}${attack && !L.lane ? btn('lq:min', 'Enough', { cls: 'sm' }) : btn('lq:half', '½', { cls: 'sm' })}${btn('lq:all', 'All', { cls: 'sm' })}</div></div>
    <div class="crewline" data-drop="crew"><small>GOING${cap}</small><div>${chosen || `<span class="ph">${attack ? 'Tap or drag a specialist here to lead' : 'No specialists travelling'}</span>`}</div></div>
    ${avail.length ? `<div class="crewline stay"><small>STAYING AT ${esc(from.name.toUpperCase())}</small><div>${availHtml}</div></div>` : ''}
    <div id="preview">${launchPreview(g, L)}</div>
    <div class="row">${btn('lcancel', 'Cancel')}${btn('lconfirm', L.lane ? 'Send' : 'Launch', { cls: 'hot grow' })}</div>
  </div>`;
}

function fleetPanel(app: App, f: Fleet): string {
  const g = app.g!, seen = fleetSeen(g, f), to = g.nodes[f.to];
  const kind = f.missile ? 'missile' : f.lane ? 'convoy' : f.probe ? 'probe' : f.fight !== undefined ? 'fleet · in battle' : 'fleet';
  let body = `<div class="kv"><div><small>DRONES</small><b>⬢ ${seen === 2 ? f.drones : '?'}</b></div><div><small>ARRIVES IN</small><b>${fmtT(eta(g, f, to))}</b></div><div><small>HEADING</small><b data-a="focus:${to.id}" class="link">${esc(to.name)}</b></div></div>`;
  if (seen === 2 && f.specs.length) body += `<div class="prow wrap">${f.specs.map(i => chip(g, g.specs[i])).join('')}</div>`;
  else if (seen < 2) body += `<p class="warnp">Strength unknown until it is inside full-intelligence range.</p>`;
  return `<div class="phead"><div><h2><span class="dot" style="background:${sideColor(g, f.owner)}"></span>${esc(sideName(g, f.owner))} ${kind}</h2><small>In flight</small></div><button class="btn ico" data-a="close">✕</button></div><div class="pbody">${body}</div>`;
}

export function panel(app: App): string {
  const g = app.g!;
  if (app.launch) return launchBar(app);
  if (!app.sel) return '';
  if (app.sel.type === 'fleet') { const f = fleetById(g, app.sel.id); if (!f || !fleetSeen(g, f)) { app.sel = null; return ''; } return fleetPanel(app, f); }
  const n = g.nodes[app.sel.id], k = known(g, n);
  const sub = `${n.citadel ? 'Citadel' : n.kind === 'planet' ? ['Small', 'Medium', 'Large'][n.size] + ' planet' : n.home ? 'Home station' : 'Station'} · ${k.tier === 'detected' ? 'Unidentified' : k.owner === 0 ? 'Neutral' : esc(sideName(g, k.owner))}`;
  const col = k.tier === 'detected' ? '#56617c' : k.owner === 0 ? '#8f95a6' : sideColor(g, k.owner);
  return `<div class="phead"><div><h2><span class="dot" style="background:${col}"></span>${esc(n.name)}</h2><small>${sub}</small></div><button class="btn ico" data-a="close">✕</button></div>${n.owner === PLAYER ? ownNode(app, n) : foreignNode(app, n)}`;
}

// ------------------------------------------------------------------ global menu
export function menu(app: App): string {
  const g = app.g!, side = g.sides[PLAYER];
  const tabs: [string, string][] = [['research', 'Research'], ['roster', 'Specialists'], ['relics', 'Relics'], ['intel', 'Coalition'], ['codex', 'Codex'], ['log', 'Log'], ['run', 'Run']];
  let body = '';
  if (app.menu === 'research') {
    const rc = rpCost(g, PLAYER), labs = g.nodes.filter(n => n.owner === PLAYER && n.spec === 'lab');
    body = `<div class="task"><div><b>Next choice</b><small>${side.rpm > 0 ? `${num(side.rpm)} research per minute · ${fmtT(Math.max(0, (rc - side.rp) / side.rpm) * 60)} to go` : 'No research yet: give a planet the Lab specialty'}</small>${bar(side.rp / rc, 'blue')}</div></div>
      <p class="dim">Each time the bar fills you choose 1 of 3 technologies. What you choose decides what can be offered next. Labs: ${labs.length ? labs.map(n => `<span class="link" data-a="focus:${n.id}">${esc(n.name)}${labRunning(g, n) ? '' : ' (not staffed)'}</span>`).join(', ') : 'none'}.</p>`;
    body += side.techs.length ? `<h3>Researched</h3>` + side.techs.map(id => `<div class="tech done"><b>${TECHS[id].name} <small>${TECHS[id].branch}</small></b><small>${TECHS[id].desc}</small></div>`).join('') : '';
  } else if (app.menu === 'roster') {
    const mine = g.specs.filter(s => s.owner === PLAYER);
    body = mine.map(sp => `<div class="spec" data-a="${sp.node >= 0 ? `focus:${sp.node}` : 'noop'}">${token(g, sp, true, true)}<div><h4>${esc(sp.cmd ? `Commander · ${SPECS[sp.def].name} ${ARCHS[sp.cmd.arch].name} · L${sp.cmd.lvl}` : `${specName(sp)} · L${sp.lvl}`)} <small>${SPECS[sp.def].role} · Command ${command(g, sp)}</small></h4><small>${sp.held ? 'Prisoner at ' : sp.node >= 0 ? 'At ' : 'In flight'}${sp.node >= 0 ? esc(g.nodes[sp.node].name) : ''}${sp.cmd ? '' : ` · upkeep ◆ ${num(specUpkeep(g, sp))}/min`}</small><p>${specText(g, sp)}</p>${sp.cmd ? (sp.cmd.lvl < 5 ? bar((sp.cmd.xp - CFG.xpLevels[sp.cmd.lvl - 1]) / (CFG.xpLevels[sp.cmd.lvl] - CFG.xpLevels[sp.cmd.lvl - 1]), 'gold') : '') : sp.lvl < 5 ? bar(xpFrac(sp), 'gold') : ''}</div></div>`).join('');
  } else if (app.menu === 'relics') {
    body = side.relics.map(r => `<div class="relic ${RELICS[r].rarity}"><b>${RELICS[r].name}</b><small>${RELICS[r].rarity}</small><p>${RELICS[r].desc}</p></div>`).join('') || '<p class="dim">No relics yet. Events and Warlords yield them.</p>';
  } else if (app.menu === 'intel') {
    const a = ARCHONS[g.sides[g.archon].fac], m = g.mob;
    body = `<div class="fac" style="--c:#e07aa0"><b>✦ ${a.name} ${a.title}</b><p>${a.desc}</p><p>Mobilization stage ${m.stage}/5${m.surge ? ` · total war +${m.surge}` : ''} (${Math.round(m.prog * 100)}% to the next). Each stage gives every faction more Drones, larger offensives and new technology. Capturing enemy nodes sets it back; a captured Warlord removes a whole stage.</p><p>Citadel Aegis: ${aegis(g, g.nodes[g.citadel])} (${g.factions.filter(o => !g.sides[o].broken).length} layers).</p></div>`;
    for (const o of g.factions) {
      const s = g.sides[o], f = FACTIONS[s.fac];
      const kn = g.nodes.filter(n => g.intel[n.id].snap?.owner === o || (g.vis[n.id] === 2 && n.owner === o));
      body += kn.length || s.broken ? `<div class="fac" style="--c:${f.color}"><b>${f.name}${s.broken ? ' · SURRENDERED' : ''}</b><p>${f.desc}</p><p>${f.tell}</p><p class="dim">Known nodes: ${kn.length} · Technology: ${s.techs.map(t => TECHS[t].name).join(', ') || 'none'}</p>${kn.filter(n => n.capital).map(n => `<p class="link" data-a="focus:${n.id}">♛ Capital located: ${esc(n.name)}</p>`).join('')}</div>`
        : `<div class="fac" style="--c:#56617c"><b>Unidentified faction</b><p class="dim">Not yet encountered.</p></div>`;
    }
  } else if (app.menu === 'codex') {
    const have = new Set([...(app.meta.codex || []), ...g.lore]);
    body = `<p class="flavour">${PREMISE}</p><p class="dim">Archive fragments are recovered from events on neutral stations. Found ${have.size} of ${LORE.length}; they stay found from run to run.</p>`;
    body += LORE.map((l, i) => have.has(l.id) ? `<div class="lore"><small>FRAGMENT ${i + 1}</small><b>${esc(l.title)}</b><p>${esc(l.text)}</p></div>` : `<div class="lore locked"><small>FRAGMENT ${i + 1}</small><b>Not yet recovered</b></div>`).join('');
  } else if (app.menu === 'log') {
    body = g.log.slice().reverse().map(l => `<div class="logl ${l.kind}" ${l.node >= 0 ? `data-a="focus:${l.node}"` : ''}><small>${fmtT(l.t)}</small>${esc(l.msg)}</div>`).join('');
  } else {
    const st = g.stats;
    body = `<div class="kv"><div><small>INCOME</small><b>◆ ${num(side.inc)}</b><small>per minute</small></div><div><small>UPKEEP</small><b>◆ ${num(side.upk)}</b><small>Drones and specialists</small></div><div><small>NET</small><b class="${side.net < 0 ? 'bad' : ''}">◆ ${num(side.net)}</b><small>per minute</small></div></div>
      <p class="dim">Each Drone costs ◆ ${CFG.upkeepDrone}/min; your first ${CFG.freeBase} are free, and each Habitat feeds ${CFG.habitatFree} more. Specialists cost ◆ ${CFG.upkeepPower}/min per point of Power. Stations stop building once upkeep reaches ${Math.round(CFG.armyShare * 100)}% of income. If you run out of Ultanium with negative income, Drones desert.</p>
      <div class="kv"><div><small>SEED</small><b>${g.seed}</b></div><div><small>THREAT</small><b>${g.threat}</b></div><div><small>NODES</small><b>${g.nodes.filter(n => n.owner === PLAYER).length}/${g.nodes.length}</b></div></div>
      <p class="dim">Captures ${st.captures} · Nodes lost ${st.nodesLost} · Drones lost ${st.dronesLost}. The run saves automatically to this device.</p>
      ${btn('sound', isMuted() ? '🔇 Sound is off: turn on' : '🔊 Sound is on: turn off', { cls: 'wide' })}${btn('help', 'How to play', { cls: 'wide' })}${btn('abandon', 'Abandon run', { cls: 'wide' })}`;
  }
  return `<div class="sheet"><div class="phead"><div class="tabs">${tabs.map(([k, v]) => `<button data-a="menu:${k}" class="${app.menu === k ? 'on' : ''}">${v}</button>`).join('')}</div><button class="btn ico" data-a="menu:">✕</button></div><div class="pbody">${body}</div></div>`;
}

// ------------------------------------------------------------------ choices and end screen
function specCard(id: string, i: number): string {
  const d = SPECS[id];
  return `<button class="card" data-a="choose:${i}">${defTok(id)}<h3>${d.name}</h3><small>${d.role} · Power ${d.pow} · Command ${d.cmd ?? CFG.cmdBase} · upkeep ◆ ${num(d.pow * CFG.upkeepPower)}/min</small><p>${d.text}</p>${d.charge ? `<p class="dim">${d.charge.text}</p>` : ''}<p class="dim">Level 3: ${d.up.text}</p></button>`;
}
export function modal(app: App): string {
  const g = app.g!;
  if (g.result) {
    const st = g.stats, win = g.result === 'win';
    return `<div class="modal end ${win ? 'win' : 'lose'}"><h1>${win ? 'Victory' : 'Defeat'}</h1><p>${esc(g.resultWhy)}</p>
      <div class="kv"><div><small>TIME</small><b>${fmtT(g.t)}</b></div><div><small>CAPTURES</small><b>${st.captures}</b></div><div><small>WARLORDS</small><b>${st.warlords}</b></div></div>
      <p class="dim">Nodes lost ${st.nodesLost} · Drones built ${st.dronesMade} · Drones lost ${st.dronesLost}<br>Specialists ${st.specs} · Relics ${st.relics} · Technologies ${st.techs} · Events ${st.events}</p>
      ${win && g.threat < 5 ? `<p class="goodp">Threat level ${g.threat + 1} unlocked.</p>` : ''}
      <div class="row">${btn('title', 'Main menu')}${btn('again', 'New run', { cls: 'hot grow' })}</div></div>`;
  }
  const p = g.pending[0];
  if (!p) return '';
  let cards = '';
  if (p.kind === 'draft') {
    cards = p.opts.map((o: { base: string; arch: string }, i: number) => { const b = SPECS[o.base], a = ARCHS[o.arch]; return `<button class="card" data-a="choose:${i}">${defTok(o.base)}<h3>${b.name} ${a.name}</h3><small>${a.blurb} · Power 3</small><p>${b.text}</p><p>${a.text}</p></button>`; }).join('');
    return `<div class="modal"><h2>Choose your Commander</h2><p class="flavour">${PREMISE}</p><p class="dim">Your strongest specialist, free of upkeep, who commands ${CFG.cmdCommander} Drones and gains levels as you capture nodes. If they are captured you have ${fmtT(CFG.rescueSecs)} to retake the node holding them, or the run ends.</p><div class="cards">${cards}</div></div>`;
  }
  if (p.kind === 'spec') {
    cards = p.opts.map((id: string, i: number) => specCard(id, i)).join('');
    return `<div class="modal"><h2>${esc(p.title)}</h2><p class="dim">Take one, or none: every specialist costs upkeep. An attack needs specialists to lead it, and each one commands a number of Drones. They grow through five levels by fighting.</p><div class="cards">${cards}</div>${btn('choose:-1', 'Skip', { cls: 'wide' })}</div>`;
  }
  if (p.kind === 'relic') {
    cards = p.opts.map((id: string, i: number) => { const r = RELICS[id]; return `<button class="card relic ${r.rarity}" data-a="choose:${i}"><h3>${r.name}</h3><small>${r.rarity}</small><p>${r.desc}</p></button>`; }).join('');
    return `<div class="modal"><h2>Choose a relic</h2><p class="dim">Relics last for the whole run.</p><div class="cards">${cards}</div></div>`;
  }
  if (p.kind === 'perk') {
    cards = p.opts.map((id: string, i: number) => { const r = perkDef(id); return `<button class="card" data-a="choose:${i}"><h3>${r.name}</h3><p>${r.desc}</p></button>`; }).join('');
    const lvl = g.specs[g.cmdSpec].cmd!.lvl;
    return `<div class="modal"><h2>${esc(p.title)}</h2>${lvl === 3 || lvl === 5 ? '<p class="goodp">Commander Power +1.</p>' : ''}<div class="cards">${cards}</div></div>`;
  }
  if (p.kind === 'lore') {
    const l = LORE_BY_ID[p.opts[0]], i = LORE.indexOf(l) + 1;
    return `<div class="modal lorem"><small>ARCHIVE FRAGMENT ${i} OF ${LORE.length} · ${esc(g.nodes[p.node]?.name || '')}</small><h2>${esc(l.title)}</h2><p class="flavour">${esc(l.text)}</p>${btn('choose:0', 'Close the archive', { cls: 'wide hot' })}<small class="dim">Kept in the Codex in the menu.</small></div>`;
  }
  if (p.kind === 'terms') {
    const mine = totalDrones(g, PLAYER), theirs = [...g.factions, g.archon].reduce((t, o) => t + totalDrones(g, o), 0);
    return `<div class="modal"><h2>${esc(p.title)}</h2><p class="flavour">"Commander. You have made your point. The Coalition will withdraw its fleets from the Reach and recognise Haven. Name your terms."</p><p class="dim">Your Drones ⬢ ${mine} against the Coalition's ⬢ ${theirs}.</p><div class="cards"><button class="card" data-a="choose:0"><h3>Accept: decisive victory</h3><p>The run ends as a win.</p></button><button class="card" data-a="choose:1"><h3>Refuse: fight on</h3><p>Take the Citadel by force. The offer is not repeated.</p></button></div></div>`;
  }
  if (p.kind === 'tech') {
    cards = p.opts.map((id: string, i: number) => { const t = TECHS[id]; return `<button class="card tech${t.excl ? ' doc' : ''}" data-a="choose:${i}"><small>${t.branch} · tier ${t.tier}</small><h3>${t.name}</h3><p>${t.desc}</p>${t.excl ? `<small class="why">Either this or ${TECHS[t.excl].name}, never both</small>` : ''}</button>`; }).join('');
    return `<div class="modal"><h2>Research: choose one</h2><p class="dim">Your choice shapes what is offered next.</p><div class="cards">${cards}</div></div>`;
  }
  const ev = EVENTS[p.event!], n = g.nodes[p.node];
  cards = ev.choices.map((c, i) => {
    const err = eventChoiceOk(g, n, c);
    if (c.req && err && err.startsWith('Needs your')) return `<button class="card locked" disabled><h3>${c.label}</h3><small>${esc(err)}</small></button>`;
    const cost = [c.ult ? `◆ ${c.ult}` : '', c.drones ? `⬢ ${c.drones}` : ''].filter(Boolean).join(' · ');
    return `<button class="card" data-a="choose:${i}" ${err ? 'disabled' : ''}><h3>${c.label}</h3>${cost ? `<small>Cost ${cost}</small>` : ''}<p>${c.desc}</p>${err ? `<small class="why">${esc(err)}</small>` : ''}</button>`;
  }).join('');
  return `<div class="modal"><h2>${ev.name}</h2><small>${esc(n.name)} · ⬢ ${n.drones} here</small><p class="flavour">${ev.text}</p><div class="cards">${cards}</div>${btn('choose:-1', 'Decide later', { cls: 'wide' })}</div>`;
}

// ------------------------------------------------------------------ title and help
export function title(app: App): string {
  const m = app.meta;
  const levels = Array.from({ length: m.unlocked + 1 }, (_, i) => `<button class="chip ${app.newThreat === i ? 'on' : ''}" data-a="threat:${i}">${i}</button>`).join('');
  return `<div class="title"><h1>SPACE<span>NODES</span></h1><p class="tag">Recruit your specialists. Send the right crew. Take the Citadel before the Coalition takes you.</p><p class="flavour small">${PREMISE}</p>
    ${app.hasSave ? btn('continue', 'Continue run', { cls: 'wide hot' }) : ''}
    ${btn('newrun', 'New run', { cls: `wide ${app.hasSave ? '' : 'hot'}` })}
    <div class="lv"><small>THREAT LEVEL</small><div class="chips">${levels}</div><small class="dim">${app.newThreat === 0 ? 'Standard campaign.' : `Tougher garrisons and faster mobilization.`} Win to unlock the next.</small></div>
    ${btn('help', 'How to play', { cls: 'wide' })}
    <small class="dim">Runs ${m.runs} · Wins ${m.wins} · Archive ${(m.codex || []).length}/${LORE.length}</small></div>`;
}
export function help(): string {
  return `<div class="modal help"><h2>How to play</h2>
  <p><b>Goal.</b> Capture <b>The Citadel</b> ✦. You lose if your <b>Commander</b> ★ is captured and not rescued in time.</p>
  <p><b>Specialists are the game.</b> Each has a <b>Power</b> number, a <b>Command</b> number and one passive effect. Power adds to attack when they fly with a fleet and to defence where they stand. An attack can carry only as many Drones as its crew commands, so big attacks need several specialists. Specialists gain <b>five levels</b> in battle: +1 Power at levels 2 and 4, their upgraded form at 3, mastery at 5, and +4 Command every level. Any number can be stationed at a node; a fleet carries three.</p>
  <p><b>Roster.</b> Your specialists are always shown down the side. Tap one to jump to them, hold (or hover) for details, <b>drag one onto a friendly node</b> to send them there.</p>
  <p><b>Sending fleets.</b> <b>Drag from one of your nodes onto any other node.</b> Targets off screen show as chips at the screen edge: drop on a chip. Onto an enemy or neutral node it is an attack; onto your own it reinforces (through a corridor if one connects them) or <b>builds a corridor</b>. A sheet opens: set the Drones, choose who goes, and read the outcome before you launch. Attack must beat Drones + shield + defending Power. Nodes you cannot read stay a gamble, and defenders can be reinforced before you land.</p>
  <p><b>Economy.</b> Planets mine Ultanium ◆; stations build Drones ⬢ on their own. Every Drone and specialist costs upkeep, so your income sets the size of your army. The ⬢ button in the top bar pauses production when you want to save.</p>
  <p><b>Nodes.</b> Each has two levels to raise (Mine or Barracks, and Shield) and one <b>specialty</b> chosen once: Refinery, Lab or Habitat for planets; Missile Silo, Fortress or Launch Bay for stations. Jobs queue up (four at a time) and are paid when queued. One station can build the <b>Flagship</b>: a station that sails where you drag it, and specialists near it fight a level higher.</p>
  <p><b>Supply and Bastion.</b> Nodes are Supply unless you make them a <b>Bastion</b> (double-tap the node). Press <b>Rally</b> on a node and every Supply node sends its spare Drones there, once; Bastions keep theirs. Nodes always keep the Drones their mines and labs need. If the node is about to be hit, Rally becomes <b>Reinforce</b> and only Drones that can arrive in time are sent. Corridors ⇄ carry Drones and specialists at double speed without using a fleet.</p>
  <p><b>Research.</b> Labs fill a bar; when it is full you choose 1 of 3 cards.</p>
  <p><b>The Coalition.</b> Three factions and an Archon. Mobilization grows their armies over time, and later several attack at once. Capture a faction's capital ♛, or beat it down below a third of your strength, and it collapses: its nodes go neutral and your captured specialists come home. When the Coalition is beaten, the Archon offers terms.</p>
  <p><b>The archive.</b> Events on neutral stations recover fragments of what happened to the Reach. They are kept in the Codex.</p>
  <p><b>Controls.</b> Phone: two fingers pan and zoom (one finger on empty space also pans). Desktop: move the mouse to a screen edge or use WASD to scroll, wheel to zoom, Space pauses, 1/2/3 speed, M menu, H home, Esc cancels.</p>
  ${btn('helpclose', 'Got it', { cls: 'wide hot' })}</div>`;
}
void locMods;
