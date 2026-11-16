import type { Game, GNode, Fleet, Spec, Mods } from '../sim/types';
import { PLAYER } from '../sim/types';
import { CFG, SPECIALTY } from '../sim/config';
import { SPECS, ARCHS, RELICS, TECHS, FACTIONS, ARCHONS, EVENTS, LORE, PREMISE, GROUPS, RARITY } from '../sim/content';
import { sideMods, perkDef, power, specUpkeep, chargeCd, locMods, command, commandOf, isUp } from '../sim/mods';
import {
  calcBattle, viewOf, nodeIncome, workers, floorOf, shieldMax, aegis, totalDrones, slotsOf, slotsFree, crewMax, canUp, upCost, prodSecs, canProduce,
  corridorsAt, corridorMax, corridorCost, rallyPlan, incoming, canMissile, launchSpeed, route, dist, sideName, sideColor, fleetSeen, eta, canCorridor,
  specName, rescueWindow, eventChoiceOk, rpCost, fleetById, nodeMods, labRunning, lvAfter, canSail, cannotLaunch, momentumAt, buffOf, radii,
  recruitCost, skipPay, warlordCost, goal,
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
  decide: number; // the decision open from the log, or -1
  logOpen: boolean;
}

export const fmtT = (s: number) => { s = Math.max(0, Math.floor(s)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
const esc = (s: string) => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));
const bar = (p: number, cls = '') => `<div class="bar ${cls}"><i style="width:${Math.max(0, Math.min(100, p * 100)).toFixed(1)}%"></i></div>`;
const btn = (a: string, label: string, opts: { off?: string | null; cls?: string; sub?: string } = {}) =>
  `<button data-a="${a}" class="btn ${opts.cls || ''}" ${opts.off ? 'disabled' : ''}>${label}${opts.sub ? `<small>${opts.sub}</small>` : ''}${opts.off ? `<small class="why">${esc(opts.off)}</small>` : ''}</button>`;
const num = (v: number) => (Math.abs(v) >= 10 ? v.toFixed(0) : v.toFixed(1));

/** An officer token, ringed by rarity. Every token carries data-tip so hold or hover shows the tooltip anywhere. */
export function token(g: Game, sp: Spec, big = false, pow = false) {
  const d = SPECS[sp.def], cmd = sp.id === g.cmdSpec;
  return `<span class="tok r${d.rarity} ${big ? 'big' : ''} ${cmd ? 'cmd' : ''} ${isUp(sp) ? 'up' : ''}" data-tip="${sp.id}" style="--c:${cmd ? '#e8bd55' : d.color}">${cmd ? '★' : d.tag}${pow ? `<i>${power(g, sp)}</i>` : ''}${isUp(sp) && !d.hidden ? '<em>+</em>' : ''}</span>`;
}
const defTok = (id: string) => `<span class="tok big r${SPECS[id].rarity}" style="--c:${SPECS[id].color}">${SPECS[id].tag}<i>${SPECS[id].pow}</i></span>`;
const short = (sp: Spec) => (sp.cmd ? 'Commander' : SPECS[sp.def].name);
/** The card line: what they do now, in a few words. */
export const cardText = (sp: Spec) => { const d = SPECS[sp.def]; return isUp(sp) && d.up.text ? d.up.text : d.text; };
const tagLine = (id: string) => { const d = SPECS[id]; return `<span class="grp" style="--c:${GROUPS[d.group].color}">${GROUPS[d.group].name}</span> · ${RARITY[d.rarity]}`; };

export function specText(g: Game, sp: Spec): string {
  const d = SPECS[sp.def];
  let t = d.long;
  if (sp.cmd) t += ' ' + ARCHS[sp.cmd.arch].text;
  if (isUp(sp) && d.up.text) t += ` <b class="upt">Upgraded: ${d.up.text}.</b>`;
  return t;
}
export function specTip(g: Game, sp: Spec): string {
  const d = SPECS[sp.def];
  const title = sp.cmd ? `Commander · ${d.name} ${ARCHS[sp.cmd.arch].name} · level ${sp.cmd.lvl}` : `${specName(sp)}${isUp(sp) ? ' +' : ''}`;
  const where = sp.held ? (sp.node >= 0 ? `Prisoner at ${g.nodes[sp.node].name}` : 'Prisoner aboard an enemy fleet') : sp.node >= 0 ? `At ${g.nodes[sp.node].name}` : sp.fleet >= 0 ? `In flight to ${g.nodes[fleetById(g, sp.fleet)?.to ?? 0].name}` : '';
  const owner = sp.owner === PLAYER ? '' : ` · ${esc(sideName(g, sp.owner))}`;
  let extra = '';
  if (d.charge) extra += `<p><b>Charge:</b> ${sp.cd > g.t ? `recharging, ${fmtT(sp.cd - g.t)}` : 'ready'} <small>(recharges in ${fmtT(chargeCd(g, sp))})</small></p>`;
  if (!sp.cmd && !d.hidden && sp.owner === PLAYER && !isUp(sp)) extra += `<p class="dim">Upgrade: ${esc(d.up.text)}. Earned in battle: ${Math.floor(sp.xp)}/${CFG.upXp} experience.</p>${bar(sp.xp / CFG.upXp, 'gold')}`;
  if (sp.cmd && sp.cmd.perks.length) extra += `<p class="dim">${sp.cmd.perks.map(p => perkDef(p).name).join(' · ')}</p>`;
  const up = sp.owner === PLAYER && !sp.cmd ? ` · upkeep ◆ ${num(specUpkeep(g, sp))}/min` : '';
  return `<div class="tiphead">${token(g, sp, true)}<div><b>${esc(title)}</b><small>${d.hidden ? d.role : tagLine(sp.def)} · Power ${power(g, sp)} · Command ${command(g, sp, g.mob.stage)}${up}${owner}</small><small>${esc(where)}</small></div></div><p>${specText(g, sp)}</p>${extra}`;
}

// ------------------------------------------------------------------ HUD and roster
export function hud(app: App): string {
  const g = app.g!, side = g.sides[PLAYER], m = g.mob, cmd = g.specs[g.cmdSpec];
  let banner = '';
  if (cmd && cmd.held && g.cmdLostT >= 0) banner = `<div class="banner bad" ${cmd.node >= 0 ? `data-a="focus:${cmd.node}"` : ''}>★ COMMANDER CAPTURED${cmd.node >= 0 ? ` at ${esc(g.nodes[cmd.node].name)}` : ''}. Retake it in <b>${fmtT(rescueWindow(g) - (g.t - g.cmdLostT))}</b></div>`;
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
    <button class="btn ico logb ${app.logOpen ? 'on' : ''}" data-a="log" title="Notifications and decisions">☰<span class="lbl">Log</span>${g.pending.filter(p => p.kind !== 'draft').length ? `<b class="badge">${g.pending.filter(p => p.kind !== 'draft').length}</b>` : ''}</button>
    <button class="btn ico desk" data-a="sound" title="Sound">${isMuted() ? '🔇' : '🔊'}</button>
    <button class="btn ico desk" data-a="console" title="Tuning console">⚙</button>
    <button class="btn ico" data-a="menu:research" title="Menu (M)">⚑</button>
  </div>${banner}`;
}

/** Always-visible portraits: where each officer is. Tap to jump, hold for details, drag onto a friendly node to send. */
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
  const d = SPECS[sp.def], cd = d.charge && sp.cd > g.t ? ` · ${fmtT(sp.cd - g.t)}` : '';
  return `<span class="pchip ${extra}" data-tip="${sp.id}">${token(g, sp, false, true)}<span>${esc(cardText(sp))}${cd}</span></span>`;
}
void modText;
/** One compact row: the officers here and what each is doing. Hold one for details. */
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
  t.kind === 'lv' ? `${n.kind === 'planet' ? 'Mine' : 'Barracks'} ${k}` : t.kind === 'sh' ? `Shield ${k}` : t.kind === 'spec' ? SPECIALTY[t.id].name : t.kind === 'missile' ? 'Missile' : `Corridor to ${g.nodes[+t.id].name}`;

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
  if (!n.citadel) body += n.spec ? `<div class="upb done" title="${esc(SPECIALTY[n.spec].desc)}"><b>${SPECIALTY[n.spec].name}</b><small>${n.spec === 'lab' && !labRunning(g, n) ? '<span class="warnp">unstaffed</span>' : 'specialty'}</small></div>`
    : specQ ? `<div class="upb done"><b>${SPECIALTY[specQ.id].name}</b><small>queued</small></div>`
    : `<button class="upb ${app.pickSpec === n.id ? 'sel' : ''}" data-a="pickspec"><b>Specialty</b><small>◆ ${upCost(g, n, 'spec')} · choose</small></button>`;
  if (n.spec === 'silo') body += n.missile ? `<button class="upb hotb" data-a="missile"><b>➹ Fire</b><small>pick a target</small></button>` : `<button class="upb" data-a="up:missile" ${canUp(g, n, 'missile') ? 'disabled' : ''}><b>➹ Missile</b><small>◆ ${CFG.missileCost}</small></button>`;
  body += `</div>`;
  if (n.flagship) { // sailing state, with the reason it cannot sail yet
    const why = canSail(g, n);
    body += `<div class="task slim"><div><b>⛴ Flagship ${n.dest ? 'under way' : (n.anchorT || 0) > g.t ? `anchoring · ${fmtT(n.anchorT! - g.t)}` : why ? 'anchored' : 'ready to sail'}</b><small>${n.dest ? 'cannot be targeted, cannot launch; builds Drones' : why ? esc(why) : 'drag from it onto open space'}</small></div></div>`;
  }
  if (!n.spec && !specQ && app.pickSpec === n.id) {
    body += `<div class="specpick"><small>Choose one, for good</small><div>`;
    for (const id in SPECIALTY) if (SPECIALTY[id].on === n.kind) { const why = canUp(g, n, 'spec', id); body += `<button class="upb" data-a="up:spec:${id}" ${why ? 'disabled' : ''} title="${esc(why || '')}"><b>${SPECIALTY[id].name} <small>◆ ${upCost(g, n, 'spec', id)}</small></b><small>${SPECIALTY[id].desc}</small></button>`; }
    body += `</div></div>`;
  }

  // one row: Supply or Bastion, and Rally or Reinforce
  const inc = incoming(g, n), plan = rallyPlan(g, n), sum = plan.reduce((s2, l) => s2 + l.k, 0);
  body += `<div class="ralrow">
    <div class="seg"><button data-a="front:0" class="${n.front ? '' : 'on'}" title="Supply: sends its spare Drones when a node rallies">Supply</button><button data-a="front:1" class="${n.front ? 'on' : ''}" title="Bastion: never sends its Drones away">Bastion</button></div>
    <button class="btn ral ${inc >= 0 ? 'alarm' : 'hot'}" data-a="rally" ${plan.length ? '' : 'disabled'}><b>${inc >= 0 ? `Reinforce · hit in ${fmtT(inc)}` : 'Rally here'}</b><small>${plan.length ? `⬢ ${sum} from ${plan.length} node${plan.length > 1 ? 's' : ''}` : inc >= 0 ? 'none can arrive in time' : 'no spare Drones'}</small></button>
  </div>`;
  const no = cannotLaunch(g, n);
  if (no) body += `<p class="warnp small">${esc(no)}</p>`;
  if (momentumAt(g, n)) body += `<p class="goodp small">Momentum: the next attack from here gets +${momentumAt(g, n)} (${fmtT(buffOf(g, n, 'fx_momentum')!.until - g.t)}).</p>`;
  body += `<p class="hint">Drag onto another node to send a fleet or build a corridor${n.flagship ? ', or onto open space to sail' : ''}. Double-tap to switch Supply and Bastion.</p>`;

  if (n.prisoners.length) {
    const sm = sideMods(g, PLAYER);
    for (const i of n.prisoners) {
      const sp = g.specs[i], wl = SPECS[sp.def].group === 'warlord', dup = g.specs.some(o => o.owner === PLAYER && o.def === sp.def);
      if (sp.def === 'archon') { body += `<div class="task slim"><div class="rowc">${token(g, sp, false, true)} <b>${esc(specName(sp))}</b><small>prisoner</small></div></div>`; continue; }
      body += `<div class="task slim pris"><div class="rowc">${token(g, sp, false, true)} <b>${esc(specName(sp))}</b><small>${wl ? 'Warlord prisoner' : 'prisoner'}</small></div>${btn(`ransom:${i}`, `Ransom ◆+${wl ? CFG.warlordRansom : Math.round(CFG.ransom * (1 + (sm.ransom || 0)))}`, { cls: 'sm' }) + (sp.def === 'captain' || dup ? '' : btn(`recruit:${i}`, `${wl ? 'Turn' : 'Recruit'} ◆ ${recruitCost(g, sp)}`, { cls: 'sm hot' }))}</div>${wl ? `<p class="small dim">${esc(cardText(sp))} · P${SPECS[sp.def].pow} C${SPECS[sp.def].cmd} · upkeep ◆${CFG.upkeepRarity[3]}/min</p>` : ''}`;
    }
  }
  return `${passiveRow(g, n)}<div class="pbody">${body}</div>`;
}

function foreignNode(app: App, n: GNode): string {
  const g = app.g!, k = known(g, n), view = viewOf(g, n);
  let body = '', head = '';
  if (k.tier === 'detected' || !view.v) body += `<p class="warnp">Detected only. Its forces are unknown. Fly a fleet close, or send a probe (0 Drones, no officer) to identify it.</p>`;
  else {
    const v = view.v, d = defParts(g, v);
    if (!view.live) body += `<p class="warnp">Last seen ${fmtT(view.age)} ago. This may be out of date.</p>`;
    body += kvDef(g, v, `<div><small>DEFENCE</small><b>${d.def}</b><small>beat it to win</small></div>`, false);
    head = passiveRow(g, v);
    const role = `${v.kind === 'planet' ? 'Mine' : 'Barracks'} level ${v.lv}${v.spec ? ` · ${SPECIALTY[v.spec].name}` : ''}${v.missile ? ' · missile ready' : ''}`;
    body += `<p class="dim">${role}</p>`;
    if (v.prisoners.some(i => g.specs[i].owner === PLAYER)) body += `<p class="warnp">Holding your people: ${v.prisoners.filter(i => g.specs[i].owner === PLAYER).map(i => esc(specName(g.specs[i]))).join(', ')}</p>`;
    if (n.offer) body += `<p class="goodp">☺ Capture this to recruit 1 of 3 officers.</p>`;
    if (n.event) body += `<p class="goodp">! Signal: ${EVENTS[n.event].name}.</p>`;
    if (n.capital && g.sides[v.owner]?.kind === 'faction') body += `<p class="goodp">♛ Capital of ${esc(sideName(g, v.owner))}. Capture it: the faction collapses, its relic is yours, and its Warlord can be turned for ◆${warlordCost(g)}.</p>`;
    const fs = g.sides[v.owner];
    if (fs?.kind === 'faction' && fs.found) { const f = FACTIONS[fs.fac]; body += `<p class="dim small">${esc(f.plays)} Hurts ${esc(f.hurts)} · weak to ${esc(f.weak)}.</p>`; }
    if (n.dest) body += `<p class="warnp">Under way: it cannot be targeted until it anchors.</p>`;
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
/** Does this officer make an attack stronger? Used to highlight them in the load-out. */
export function offensive(_g: Game, sp: Spec): boolean {
  return ['siege', 'swarm', 'blitz'].includes(SPECS[sp.def].group) || !!sp.cmd;
}
export function launchPreview(g: Game, L: NonNullable<App['launch']>): string {
  const from = g.nodes[L.from], to = g.nodes[L.to];
  const secs = L.lane ? route(g, from, to, L.specs).secs : dist(from, to) / launchSpeed(g, from, L.specs);
  const cmd = commandOf(g, L.specs);
  let out = `<div class="lstat"><span>⬢ <b>${L.drones}</b> go</span><span>⬢ <b>${from.drones - L.drones}</b> stay</span>${to.owner === PLAYER ? '' : `<span>command <b>${cmd}</b></span>`}<span>arrives <b>${fmtT(secs)}</b></span></div>`;
  if (to.owner === PLAYER) return out;
  if (!L.specs.length) return out + (L.drones ? `<p class="badp"><b>An attack needs a officer to lead it.</b> Add one, or send 0 Drones as a probe.</p>` : `<p class="warnp">Probe: identifies the target and is lost.</p>`);
  const view = viewOf(g, to);
  if (!view.v) return out + `<p class="badp"><b>Unknown forces. Battle outcome unavailable.</b></p>`;
  const mo = momentumAt(g, from);
  const r = calcBattle(g, PLAYER, L.drones, L.specs, view.v, { ...locMods(g, PLAYER, L.specs, [], 'attack'), boost: mo }), p = r.parts;
  const atk = [`${p.drones}⬢`, `${p.pow} Power`].concat(p.bonus ? [`+${p.bonus}${mo ? ' (Momentum)' : ''}`] : []).join(' + ');
  const def = [`${p.garr}⬢`].concat(p.shield ? [`${p.shield} shield`] : [], p.dpow ? [`${p.dpow} Power`] : [], p.ddef ? [`+${p.ddef}`] : [], p.aegis ? [`${p.aegis} Aegis`] : []).join(' + ');
  const notes = [p.lance ? `${p.lance} lost before landing` : '', p.strike ? `first strike kills ${p.strike}` : '', !view.live ? `intel ${fmtT(view.age)} old` : '', L.specs.includes(g.cmdSpec) ? '★ Commander at risk' : ''].filter(Boolean).join(' · ');
  out += `<div class="vs ${r.win ? 'win' : 'lose'}"><div><b>${r.atk}</b><small>${atk}</small></div><i>${r.win ? '>' : '≤'}</i><div><b>${r.def}</b><small>${def}</small></div></div>`;
  const capped = from.drones > cmd && minToWin(g, L) === 0 && !r.win;
  out += r.win ? `<p class="goodp"><b>Victory:</b> ${r.surv} Drones survive.</p>`
    : `<p class="badp"><b>Defeat:</b> short by ${r.def - r.atk + 1}. ${to.owner === 0 ? 'The crew returns.' : 'The crew is captured.'}${capped ? ' This crew cannot command enough Drones: add a officer.' : ''}</p>`;
  if (notes) out += `<p class="warnp small">${notes}</p>`;
  return out;
}
function launchBar(app: App): string {
  const g = app.g!, L = app.launch!, from = g.nodes[L.from], to = g.nodes[L.to];
  if (from.owner !== PLAYER) { app.launch = null; return ''; }
  const attack = to.owner !== PLAYER;
  // what each officer adds to this attack, so the choice is a number and not a guess
  const v = attack ? viewOf(g, to).v : null;
  const atkOf = (ids: number[]) => (v ? calcBattle(g, PLAYER, L.drones, ids, v).atk - (calcBattle(g, PLAYER, L.drones, ids, v).parts.strike ? 0 : 0) : ids.reduce((t, i) => t + power(g, g.specs[i]), 0));
  const gain = (id: number) => (L.specs.includes(id) ? atkOf(L.specs) - atkOf(L.specs.filter(i => i !== id)) : atkOf(L.specs.concat(id)) - atkOf(L.specs));
  const chipFor = (id: number, on: boolean, lead: boolean) => { const sp = g.specs[id]; return `<button class="chip ${on ? 'on' : ''} ${attack && offensive(g, sp) ? 'offs' : ''}" data-a="lspec:${id}">${token(g, sp, false, true)} ${esc(short(sp))} <small class="ct">${esc(cardText(sp))}</small>${attack && gain(id) ? ` <i class="gain">+${gain(id)}</i>` : ''}${lead ? ' <i class="lead">LEADS</i>' : ''}</button>`; };
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
    <div class="crewline" data-drop="crew"><small>GOING${cap}</small><div>${chosen || `<span class="ph">${attack ? 'Tap or drag a officer here to lead' : 'No officers travelling'}</span>`}</div></div>
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
  const tabs: [string, string][] = [['research', 'Research'], ['roster', 'Officers'], ['relics', 'Relics'], ['intel', 'Coalition'], ['codex', 'Codex'], ['log', 'Log'], ['run', 'Run']];
  let body = '';
  if (app.menu === 'research') {
    const rc = rpCost(g, PLAYER), labs = g.nodes.filter(n => n.owner === PLAYER && n.spec === 'lab');
    body = `<div class="task"><div><b>Next choice</b><small>${side.rpm > 0 ? `${num(side.rpm)} research per minute · ${fmtT(Math.max(0, (rc - side.rp) / side.rpm) * 60)} to go` : 'No research yet: give a planet the Lab specialty'}</small>${bar(side.rp / rc, 'blue')}</div></div>
      <p class="dim">Each time the bar fills you choose 1 of 3 technologies. What you choose decides what can be offered next. Labs: ${labs.length ? labs.map(n => `<span class="link" data-a="focus:${n.id}">${esc(n.name)}${labRunning(g, n) ? '' : ' (not staffed)'}</span>`).join(', ') : 'none'}.</p>`;
    body += side.techs.length ? `<h3>Researched</h3>` + side.techs.map(id => `<div class="tech done"><b>${TECHS[id].name} <small>${TECHS[id].branch}</small></b><small>${TECHS[id].desc}</small></div>`).join('') : '';
  } else if (app.menu === 'roster') {
    const mine = g.specs.filter(s => s.owner === PLAYER);
    body = mine.map(sp => `<div class="spec" data-a="${sp.node >= 0 ? `focus:${sp.node}` : 'noop'}">${token(g, sp, true, true)}<div><h4>${esc(sp.cmd ? `Commander · ${SPECS[sp.def].name} ${ARCHS[sp.cmd.arch].name} · L${sp.cmd.lvl}` : `${specName(sp)}${isUp(sp) ? ' +' : ''}`)} <small>${tagLine(sp.def)} · Power ${power(g, sp)} · Command ${command(g, sp)}</small></h4><small>${sp.held ? 'Prisoner' : sp.node >= 0 ? 'At ' + esc(g.nodes[sp.node].name) : 'In flight'}${sp.cmd ? '' : ` · upkeep ◆ ${num(specUpkeep(g, sp))}/min`}</small><p><b>${esc(cardText(sp))}</b></p>${sp.cmd ? (sp.cmd.lvl < 5 ? bar((sp.cmd.xp - CFG.xpLevels[sp.cmd.lvl - 1]) / (CFG.xpLevels[sp.cmd.lvl] - CFG.xpLevels[sp.cmd.lvl - 1]), 'gold') : '') : !isUp(sp) ? `<small class="dim">Upgrade: ${esc(SPECS[sp.def].up.text)} · ${Math.floor(sp.xp)}/${CFG.upXp}</small>${bar(sp.xp / CFG.upXp, 'gold')}` : ''}</div></div>`).join('');
  } else if (app.menu === 'relics') {
    body = side.relics.map(r => `<div class="relic ${RELICS[r].rarity}"><b>${RELICS[r].name}</b><small>${RELICS[r].rarity}</small><p>${RELICS[r].desc}</p></div>`).join('') || '<p class="dim">No relics yet. Events and Warlords yield them.</p>';
  } else if (app.menu === 'intel') {
    const a = ARCHONS[g.sides[g.archon].fac], m = g.mob;
    body = `<div class="fac" style="--c:#e07aa0"><b>✦ ${a.name} ${a.title}</b><p>${a.desc}</p><p>Mobilization stage ${m.stage}/5${m.surge ? ` · total war +${m.surge}` : ''} (${Math.round(m.prog * 100)}% to the next). Each stage gives every faction more Drones, larger offensives and new technology. Capturing enemy nodes sets it back; a captured Warlord removes a whole stage.</p><p>Citadel Aegis: ${aegis(g, g.nodes[g.citadel])} (${g.factions.filter(o => !g.sides[o].broken).length} layers).</p></div>`;
    for (const o of g.factions) {
      const s = g.sides[o], f = FACTIONS[s.fac];
      const kn = g.nodes.filter(n => g.intel[n.id].snap?.owner === o || (g.vis[n.id] === 2 && n.owner === o));
      body += s.found ? `<div class="fac" style="--c:${f.color}"><b>${f.name}${s.broken ? ' · COLLAPSED' : ''}</b><p>${f.plays}</p><p>Hurts <b>${f.hurts}</b> · weak to <b>${f.weak}</b></p><p class="dim">Known nodes: ${kn.length} · Officers: ${f.specs.map(d => SPECS[d].name).join(', ')} · Warlord: ${SPECS[f.warlord].name} (relic: ${RELICS[f.relic].name})</p>${kn.filter(n => n.capital).map(n => `<p class="link" data-a="focus:${n.id}">♛ Capital located: ${esc(n.name)}</p>`).join('')}</div>`
        : `<div class="fac" style="--c:#56617c"><b>Unknown faction</b><p class="dim">Its identity is revealed when you first see one of its nodes.</p></div>`;
    }
  } else if (app.menu === 'codex') {
    const have = new Set([...(app.meta.codex || []), ...g.lore]);
    body = `<p class="flavour">${PREMISE}</p><p class="dim">Archive fragments are recovered from events on neutral stations. Found ${have.size} of ${LORE.length}; they stay found from run to run.</p>`;
    body += LORE.map((l, i) => have.has(l.id) ? `<div class="lore"><small>FRAGMENT ${i + 1}</small><b>${esc(l.title)}</b><p>${esc(l.text)}</p></div>` : `<div class="lore locked"><small>FRAGMENT ${i + 1}</small><b>Not yet recovered</b></div>`).join('');
  } else if (app.menu === 'log') {
    body = g.log.slice().reverse().map(l => `<div class="logl ${l.kind}" ${l.node >= 0 ? `data-a="focus:${l.node}"` : ''}><small>${fmtT(l.t)}</small>${esc(l.msg)}</div>`).join('');
  } else {
    const st = g.stats;
    body = `<div class="kv"><div><small>INCOME</small><b>◆ ${num(side.inc)}</b><small>per minute</small></div><div><small>UPKEEP</small><b>◆ ${num(side.upk)}</b><small>Drones and officers</small></div><div><small>NET</small><b class="${side.net < 0 ? 'bad' : ''}">◆ ${num(side.net)}</b><small>per minute</small></div></div>
      <p class="dim">Each Drone costs ◆ ${CFG.upkeepDrone}/min; your first ${CFG.freeBase} are free, and each Habitat feeds ${CFG.habitatFree} more. Officers cost ◆ ${CFG.upkeepRarity.slice(0, 3).join(' / ')}/min by rarity (Common / Uncommon / Rare), ◆${CFG.upkeepUp} more once upgraded; Warlords ◆${CFG.upkeepRarity[3]}. Stations stop building once upkeep reaches ${Math.round(CFG.armyShare * 100)}% of income. If you run out of Ultanium with negative income, Drones desert.</p>
      <div class="kv"><div><small>SEED</small><b>${g.seed}</b></div><div><small>THREAT</small><b>${g.threat}</b></div><div><small>NODES</small><b>${g.nodes.filter(n => n.owner === PLAYER).length}/${g.nodes.length}</b></div></div>
      <p class="dim">Captures ${st.captures} · Nodes lost ${st.nodesLost} · Drones lost ${st.dronesLost}. The run saves automatically to this device.</p>
      ${btn('sound', isMuted() ? '🔇 Sound is off: turn on' : '🔊 Sound is on: turn off', { cls: 'wide' })}${btn('help', 'How to play', { cls: 'wide' })}${btn('abandon', 'Abandon run', { cls: 'wide' })}`;
  }
  return `<div class="sheet"><div class="phead"><div class="tabs">${tabs.map(([k, v]) => `<button data-a="menu:${k}" class="${app.menu === k ? 'on' : ''}">${v}</button>`).join('')}</div><button class="btn ico" data-a="menu:">✕</button></div><div class="pbody">${body}</div></div>`;
}

// ------------------------------------------------------------------ choices and end screen
function specCard(g: Game, id: string, i: number): string {
  const d = SPECS[id], have = g.specs.some(x => x.owner === PLAYER && x.def === id);
  return `<button class="card offer r${d.rarity}" data-a="choose:${i}" ${have ? 'disabled' : ''}>${defTok(id)}<h3>${d.name}</h3><small>${tagLine(id)} · P${d.pow} C${d.cmd} · ◆${CFG.upkeepRarity[d.rarity]}/min</small><p class="big">${esc(d.text)}</p><p class="dim">Upgrade: ${esc(d.up.text)}</p>${have ? '<small class="why">Already with you</small>' : ''}</button>`;
}
/** Short label for a waiting decision in the log. */
export function decisionLabel(g: Game, p: Game['pending'][number]): string {
  if (p.kind === 'spec') return `☺ ${p.title}`;
  if (p.kind === 'event') return `${EVENTS[p.event!].lore ? '❖ Archive' : '! Event'}: ${EVENTS[p.event!].name}`;
  if (p.kind === 'relic') return '◆ Choose a relic';
  if (p.kind === 'tech') return '⚗ Research: choose one';
  if (p.kind === 'perk') return `★ ${p.title}`;
  if (p.kind === 'terms') return `✦ ${p.title}`;
  return p.title;
}
export function modal(app: App): string {
  const g = app.g!;
  if (g.result) {
    const st = g.stats, win = g.result === 'win';
    return `<div class="modal end ${win ? 'win' : 'lose'}"><h1>${win ? 'Victory' : 'Defeat'}</h1><p>${esc(g.resultWhy)}</p>
      <div class="kv"><div><small>TIME</small><b>${fmtT(g.t)}</b></div><div><small>CAPTURES</small><b>${st.captures}</b></div><div><small>WARLORDS</small><b>${st.warlords}</b></div></div>
      <p class="dim">Nodes lost ${st.nodesLost} · Drones built ${st.dronesMade} · Drones lost ${st.dronesLost}<br>Officers ${st.specs} · Relics ${st.relics} · Technologies ${st.techs} · Events ${st.events}</p>
      ${win && g.threat < 5 ? `<p class="goodp">Threat level ${g.threat + 1} unlocked.</p>` : ''}
      <div class="row">${btn('title', 'Main menu')}${btn('again', 'New run', { cls: 'hot grow' })}</div></div>`;
  }
  const draft = g.pending.findIndex(x => x.kind === 'draft');
  const which = draft >= 0 ? draft : app.decide;
  const p = which >= 0 ? g.pending[which] : null;
  if (!p) return '';
  const close = draft >= 0 ? '' : `<button class="btn ico mclose" data-a="undecide" title="Close: decide later">✕</button>`;
  let cards = '';
  if (p.kind === 'draft') {
    cards = p.opts.map((o: { base: string; arch: string }, i: number) => { const b = SPECS[o.base], a = ARCHS[o.arch]; return `<button class="card" data-a="choose:${i}">${defTok(o.base)}<h3>${b.name} ${a.name}</h3><small>${tagLine(o.base)} · ${a.blurb}</small><p class="big">${esc(b.text)}</p><p>${a.text}</p></button>`; }).join('');
    return `<div class="modal"><h2>Choose your Commander</h2><p class="flavour">${PREMISE}</p><p class="dim">Your strongest officer, free of upkeep, commanding ${CFG.cmdCommander} Drones and gaining levels as you capture nodes. Their archetype works everywhere. If they are captured you have ${fmtT(CFG.rescueSecs)} to retake them, or the run ends.</p><div class="cards">${cards}</div></div>`;
  }
  if (p.kind === 'spec') {
    cards = p.opts.map((id: string, i: number) => specCard(g, id, i)).join('');
    return `<div class="modal">${close}<h2>${esc(p.title)}</h2><p class="dim">Take one, or none. Officers cost upkeep by rarity, lead attacks (each commands some Drones), and upgrade once through battle. The offer waits here until the node is lost.</p><div class="cards">${cards}</div>${btn('choose:-1', `Skip: ◆+${skipPay(g)}`, { cls: 'wide' })}</div>`;
  }
  if (p.kind === 'relic') {
    cards = p.opts.map((id: string, i: number) => { const r = RELICS[id]; return `<button class="card relic ${r.rarity}" data-a="choose:${i}"><h3>${r.name}</h3><small>${r.rarity}</small><p>${r.desc}</p></button>`; }).join('');
    return `<div class="modal">${close}<h2>Choose a relic</h2><p class="dim">Relics last for the whole run.</p><div class="cards">${cards}</div></div>`;
  }
  if (p.kind === 'perk') {
    cards = p.opts.map((id: string, i: number) => { const r = perkDef(id); return `<button class="card" data-a="choose:${i}"><h3>${r.name}</h3><p>${r.desc}</p></button>`; }).join('');
    const lvl = g.specs[g.cmdSpec].cmd!.lvl;
    return `<div class="modal">${close}<h2>${esc(p.title)}</h2>${lvl === 3 || lvl === 5 ? '<p class="goodp">Commander Power +1.</p>' : ''}<div class="cards">${cards}</div></div>`;
  }
  if (p.kind === 'terms') {
    const mine = totalDrones(g, PLAYER), theirs = [...g.factions, g.archon].reduce((t, o) => t + totalDrones(g, o), 0);
    return `<div class="modal">${close}<h2>${esc(p.title)}</h2><p class="flavour">"Commander. You have made your point. The Coalition will withdraw its fleets from the Reach and recognise Haven. Name your terms."</p><p class="dim">Your Drones ⬢ ${mine} against the Coalition's ⬢ ${theirs}.</p><div class="cards"><button class="card" data-a="choose:0"><h3>Accept: decisive victory</h3><p>The run ends as a win.</p></button><button class="card" data-a="choose:1"><h3>Refuse: fight on</h3><p>Take the Citadel by force. The offer is not repeated.</p></button></div></div>`;
  }
  if (p.kind === 'tech') {
    cards = p.opts.map((id: string, i: number) => { const t = TECHS[id]; return `<button class="card tech${t.excl ? ' doc' : ''}" data-a="choose:${i}"><small>${t.branch} · tier ${t.tier}</small><h3>${t.name}</h3><p>${t.desc}</p>${t.excl ? `<small class="why">Either this or ${TECHS[t.excl].name}, never both</small>` : ''}</button>`; }).join('');
    return `<div class="modal">${close}<h2>Research: choose one</h2><p class="dim">Your choice shapes what is offered next.</p><div class="cards">${cards}</div></div>`;
  }
  const ev = EVENTS[p.event!], n = g.nodes[p.node];
  cards = ev.choices.map((c, i) => {
    const err = eventChoiceOk(g, n, c);
    if (c.req && err && err.startsWith('Needs your')) return `<button class="card locked" disabled><h3>${c.label}</h3><small>${esc(err)}</small></button>`;
    const cost = [c.ult ? `◆ ${c.ult}` : '', c.drones ? `⬢ ${c.drones}` : ''].filter(Boolean).join(' · ');
    return `<button class="card" data-a="choose:${i}" ${err ? 'disabled' : ''}><h3>${c.label}</h3>${cost ? `<small>Cost ${cost}</small>` : ''}<p>${c.desc}</p>${err ? `<small class="why">${esc(err)}</small>` : ''}</button>`;
  }).join('');
  const arc = ev.lore ? `<small class="arch">ARCHIVE FRAGMENT ${LORE.findIndex(l => l.id === ev.lore) + 1} OF ${LORE.length}</small>` : '';
  return `<div class="modal ${ev.lore ? 'lorem' : ''}">${close}${arc}<h2>${ev.name}</h2><small>${esc(n.name)} · ⬢ ${n.drones} here</small><p class="flavour">${ev.text}</p><div class="cards">${cards}</div>${btn('undecide', 'Decide later', { cls: 'wide' })}</div>`;
}

// ------------------------------------------------------------------ notification log (top right)
/** Is an offensive's target known before launch: research, a relic, or an Oracle with the staging node in sight? */
export function targetKnown(g: Game, off: Game['offs'][number]): boolean {
  if (off.warned || sideMods(g, PLAYER).warn) return true;
  const st = g.nodes[off.staging];
  for (const n of g.nodes) if (n.owner === PLAYER) { const m = nodeMods(g, n); if (m.oracle && dist(n, st) <= radii(g, n)[1] * m.oracle) return true; }
  return false;
}
export function logPanel(app: App): string {
  const g = app.g!;
  let out = '';
  const dec = g.pending.map((p, i) => ({ p, i })).filter(x => x.p.kind !== 'draft');
  if (dec.length) out += `<h4>Decide</h4>` + dec.map(({ p, i }) => `<button class="logi dec" data-a="decide:${i}">${esc(decisionLabel(g, p))}${p.node >= 0 && g.nodes[p.node] ? `<small>${esc(g.nodes[p.node].name)}</small>` : ''}</button>`).join('');
  const soon: string[] = [];
  for (const o of g.offs) { const t = targetKnown(g, o); soon.push(`<div class="logi warn" ${t ? `data-a="focus:${o.target}"` : g.vis[o.staging] ? `data-a="focus:${o.staging}"` : ''}>⚔ ${esc(sideName(g, o.owner))} offensive${t ? ` → ${esc(g.nodes[o.target].name)}` : ''}<small>${fmtT(o.launchT - g.t)}</small></div>`); }
  for (const f of g.fleets) if (f.owner !== PLAYER && !f.missile && fleetSeen(g, f) && g.nodes[f.to]?.owner === PLAYER && f.hunt === undefined) soon.push(`<div class="logi bad" data-a="focus:${f.to}">⬢ ${fleetSeen(g, f) === 2 ? f.drones : '?'} → ${esc(g.nodes[f.to].name)}<small>${fmtT(eta(g, f, g.nodes[f.to]))}</small></div>`);
  for (const n of g.nodes) if (n.owner === PLAYER) {
    const t = n.queue[0];
    if (t) soon.push(`<div class="logi" data-a="focus:${n.id}">▲ ${esc(n.name)}: ${t.kind === 'spec' ? SPECIALTY[t.id].name : t.kind === 'lv' ? (n.kind === 'planet' ? 'Mine' : 'Barracks') : t.kind === 'sh' ? 'Shield' : t.kind === 'missile' ? 'Missile' : 'Corridor'}<small>${fmtT(t.left / (1 + (nodeMods(g, n).build || 0)))}</small></div>`);
    for (const b of n.buffs) if (b.until > g.t && FX[b.k]) soon.push(`<div class="logi" data-a="focus:${n.id}">${FX[b.k].icon} ${esc(n.name)} ${FX[b.k].name}<small>${fmtT(b.until - g.t)}</small></div>`);
  }
  if (soon.length) out += `<h4>Now</h4>` + soon.join('');
  out += `<h4>Recent</h4>` + g.log.slice(-8).reverse().map(l => `<div class="logi ${l.kind}" ${l.node >= 0 ? `data-a="focus:${l.node}"` : ''}>${esc(l.msg)}<small>${fmtT(l.t)}</small></div>`).join('');
  return `<div class="logh"><b>Log</b><button class="btn ico sm" data-a="log">✕</button></div><div class="logb2">${out}</div>`;
}

/** Lasting effects: how each is drawn and explained. */
export const FX: Record<string, { name: string; icon: string; col: string; desc: string }> = {
  fx_breach: { name: 'Breached', icon: '⊘', col: '#e2604e', desc: 'Shield is 0 and cannot recharge.' },
  fx_shaken: { name: 'Shaken', icon: '≋', col: '#d9a35a', desc: 'Officers here add no Power; their effects stop.' },
  fx_cutoff: { name: 'Cut off', icon: '⊣', col: '#b39ad6', desc: 'No reinforcements can land here.' },
  fx_grounded: { name: 'Grounded', icon: '⇣', col: '#9aa3ad', desc: 'Cannot launch fleets.' },
  fx_momentum: { name: 'Momentum', icon: '»', col: '#7fb2dc', desc: 'The next attack launched from here gets a bonus.' },
  fx_fort: { name: 'Fortified', icon: '▲', col: '#8fc79a', desc: 'Extra defence after holding a battle.' },
  mask: { name: 'Unreadable', icon: '◌', col: '#b39ad6', desc: 'Enemies cannot read this node.' },
};
/** The tooltip for a chip under a node: a building, an effect, shield recharge, intent or sailing state. */
export function chipInfo(g: Game, id: number, key: string): string {
  const n = g.nodes[id], v = viewOf(g, n).v || n, head = (t: string, sub = '') => `<div class="tiphead"><div><b>${esc(t)}</b>${sub ? `<small>${esc(sub)}</small>` : ''}</div></div>`;
  if (key === 'lv') return head(`${n.kind === 'planet' ? 'Mine' : 'Barracks'} level ${v.lv}`, n.kind === 'planet' ? 'Ultanium per minute, with one Drone working per level' : `One Drone every ${num(prodSecs(g, v))} s`);
  if (key === 'sh') return head(`Shield level ${v.sh}`, `Holds ${Math.floor(v.shields)} of ${shieldMax(g, v)}; recharges 1 every ${num(CFG.shieldRegenSecs / (1 + (nodeMods(g, v).regen || 0)))} s`);
  if (key === 'spec') return head(SPECIALTY[v.spec]?.name || 'Specialty', SPECIALTY[v.spec]?.desc || '');
  if (key === 'regen') { const br = buffOf(g, n, 'fx_breach'); return head(br ? 'Shield recharge stopped' : 'Shield recharging', br ? `Breached for ${fmtT(br.until - g.t)}` : `+1 every ${num(CFG.shieldRegenSecs / (1 + (nodeMods(g, n).regen || 0)))} s`); }
  if (key === 'sail') return head(n.dest ? 'Under way' : (n.anchorT || 0) > g.t ? `Anchoring · ${fmtT(n.anchorT! - g.t)}` : 'Flagship', n.dest ? 'Cannot be targeted, cannot launch; builds Drones' : canSail(g, n) || 'Ready to sail: drag from it onto open space');
  if (key === 'intent') {
    const off = g.offs.find(o => o.staging === n.id);
    if (off) return head(`Offensive forming · ${fmtT(off.launchT - g.t)}`, targetKnown(g, off) ? `Target: ${g.nodes[off.target].name}` : 'Target unknown: research, relics or an Oracle reveal it');
    const t = n.queue[0];
    if (t) return head(`Building: ${t.kind === 'spec' ? SPECIALTY[t.id].name : t.kind === 'lv' ? 'level' : t.kind === 'sh' ? 'shield' : t.kind === 'missile' ? 'missile' : 'corridor'}`, `Ready in ${fmtT(t.left)}`);
    if (n.missile) return head('Missile ready', 'Can strike any node in range');
  }
  const b = buffOf(g, n, key), fx = FX[key];
  if (b && fx) return head(`${fx.name}${key === 'fx_momentum' || key === 'fx_fort' ? ` +${b.v}` : ''} · ${fmtT(b.until - g.t)}`, fx.desc);
  return head(n.name);
}

// ------------------------------------------------------------------ title and help
export function title(app: App): string {
  const m = app.meta;
  const levels = Array.from({ length: m.unlocked + 1 }, (_, i) => `<button class="chip ${app.newThreat === i ? 'on' : ''}" data-a="threat:${i}">${i}</button>`).join('');
  return `<div class="title"><h1>SPACE<span>NODES</span></h1><p class="tag">Recruit your officers. Send the right crew. Take the Citadel before the Coalition takes you.</p><p class="flavour small">${PREMISE}</p>
    ${app.hasSave ? btn('continue', 'Continue run', { cls: 'wide hot' }) : ''}
    ${btn('newrun', 'New run', { cls: `wide ${app.hasSave ? '' : 'hot'}` })}
    <div class="lv"><small>THREAT LEVEL</small><div class="chips">${levels}</div><small class="dim">${app.newThreat === 0 ? 'Standard campaign.' : `Tougher garrisons and faster mobilization.`} Win to unlock the next.</small></div>
    ${btn('help', 'How to play', { cls: 'wide' })}
    <small class="dim">Runs ${m.runs} · Wins ${m.wins} · Archive ${(m.codex || []).length}/${LORE.length}</small></div>`;
}
export function help(): string {
  return `<div class="modal help"><h2>How to play</h2>
  <p><b>Goal.</b> Capture <b>The Citadel</b> ✦. You lose if your <b>Commander</b> ★ is captured and not rescued in time.</p>
  <p><b>Officers are the game.</b> Each has <b>Power</b> (adds to attack aboard a fleet, to defence where stationed), <b>Command</b> (the most Drones they can lead into an attack) and one effect that works only on their own node or fleet. A fleet carries three. Each upgrades once, after enough experience in battle: more for winning while outnumbered or against officers, and for holding valuable nodes. Captured officers lose their experience. Officers are unique; recruit offers draw Common, Uncommon and Rare cards, and Rares cost the most upkeep.</p>
  <p><b>Roster.</b> Your officers are shown down the side (it scrolls). Tap one to jump to them, hold for details, <b>pull one sideways onto a friendly node</b> to send them there.</p>
  <p><b>Sending fleets.</b> <b>Drag from one of your nodes onto any other node.</b> Targets off screen show as chips at the screen edge. Onto an enemy or neutral node it is an attack; onto your own it reinforces or <b>builds a corridor</b>. Read the outcome before you launch: attack must beat Drones + shield + defending Power. Nodes you cannot read are a gamble, and defenders can be reinforced before you land.</p>
  <p><b>Lasting effects.</b> Some officers leave a mark: <b>Breached</b> (no shield), <b>Shaken</b> (officers there do nothing), <b>Cut off</b> (no reinforcements), <b>Grounded</b> (cannot launch), <b>Momentum</b> (bonus for the next attack from there), <b>Fortified</b> (extra defence after holding). Every chip under a node can be tapped for details and timers.</p>
  <p><b>Economy.</b> Planets mine Ultanium ◆; stations build Drones ⬢. Drones and officers cost upkeep, so income sets the size of your army. The ⬢ button pauses production.</p>
  <p><b>Nodes.</b> Each has a Mine or Barracks level and a Shield level, and one <b>specialty</b>: Refinery, Lab or Habitat for planets; Fortress, Missile Silo or Flagship for stations. Jobs queue (four at a time) and are paid when queued. The <b>Flagship</b> (one per side) sails where you drag it: while sailing it cannot be targeted or launch; on arrival it anchors for ${CFG.anchorSecs} s, then rests ${fmtT(CFG.sailCooldown)} before it may sail again, and it cannot leave while an enemy fleet is heading for it.</p>
  <p><b>Supply and Bastion.</b> Double-tap a node to make it a <b>Bastion</b>. <b>Rally</b> on a node pulls the spare Drones of every Supply node, once; Bastions keep theirs. Corridors ⇄ double travel speed and need no launch slot.</p>
  <p><b>Log.</b> Everything that needs a decision (recruits, events, archive, relics, research, perks) waits in the Log at the top right with a badge; the game never stops for it. Timers and recent news are there too.</p>
  <p><b>The Coalition.</b> Three factions from eight and an Archon. A faction's identity is revealed when you first see one of its nodes. Take its capital ♛ and it collapses: its relic is yours and its Warlord can be turned for a price. A faction beaten below a third of your strength also collapses. When the Coalition is beaten, the Archon offers terms.</p>
  <p><b>The archive.</b> Events on neutral stations are fragments of the Reach's history, each with a choice. They are kept in the Codex.</p>
  <p><b>Controls.</b> Phone: two fingers pan and zoom (one finger on empty space also pans). Desktop: move the mouse to a screen edge or use WASD to scroll, wheel to zoom, Space pauses, 1/2/3 speed, M menu, H home, Esc cancels.</p>
  ${btn('helpclose', 'Got it', { cls: 'wide hot' })}</div>`;
}
void locMods;
