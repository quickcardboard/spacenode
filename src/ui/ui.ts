import type { Game, GNode, Fleet, Spec, Mods } from '../sim/types';
import { PLAYER } from '../sim/types';
import { CFG, SPECIALTY } from '../sim/config';
import { SPECS, ARCHS, RELICS, TECHS, BRANCHES, FACTIONS, ARCHONS, EVENTS } from '../sim/content';
import { sideMods, perkDef, specLoc, power, specUpkeep, chargeCd, locMods } from '../sim/mods';
import {
  calcBattle, viewOf, nodeIncome, workers, floorOf, shieldMax, aegis, totalDrones, slotsOf, slotsFree, crewMax, canUp, upCost, upTime, prodSecs, canProduce,
  corridorsAt, corridorMax, corridorCost, corridorReach, rallyTarget, canMissile, launchSpeed, dist, sideName, sideColor, fleetSeen, eta, slots, activeSpecs,
  specName, rescueWindow, eventChoiceOk, rpCost, fleetById, nodeMods, labRunning, type UpKind,
} from '../sim/core';
import { known } from './render';

export interface App {
  g: Game | null; speed: number; paused: boolean;
  sel: { type: 'node' | 'fleet'; id: number } | null; menu: string | null;
  mode: null | { k: 'launch' | 'corridor' | 'convoy' | 'missile' | 'rallyTo'; from: number };
  launch: null | { from: number; to: number; drones: number; specs: number[]; lane: boolean };
  drag: null | { spec: number; x: number; y: number; over: number; label: string; ok: boolean };
  screen: 'title' | 'game' | 'help'; newThreat: number; meta: { runs: number; wins: number; unlocked: number; best: number };
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
  const d = SPECS[sp.def], cmd = sp.id === g.cmdSpec;
  return `<span class="tok ${big ? 'big' : ''} ${cmd ? 'cmd' : ''} ${sp.up ? 'up' : ''}" data-tip="${sp.id}" style="--c:${cmd ? '#e8bd55' : d.color}">${cmd ? '★' : d.tag}${pow ? `<i>${power(g, sp)}</i>` : ''}</span>`;
}
const defTok = (id: string) => `<span class="tok big" style="--c:${SPECS[id].color}">${SPECS[id].tag}<i>${SPECS[id].pow}</i></span>`;
const short = (sp: Spec) => (sp.cmd ? 'Commander' : SPECS[sp.def].name);

export function specText(g: Game, sp: Spec): string {
  const d = SPECS[sp.def];
  let t = d.text;
  if (sp.cmd) t += ' ' + ARCHS[sp.cmd.arch].text;
  if (sp.up && d.up.text) t += ` <b class="upt">Upgraded: ${d.up.text}</b>`;
  return t;
}
export function specTip(g: Game, sp: Spec): string {
  const d = SPECS[sp.def];
  const title = sp.cmd ? `Commander · ${d.name} ${ARCHS[sp.cmd.arch].name} · level ${sp.cmd.lvl}` : specName(sp) + (sp.up ? ' +' : '');
  const where = sp.held ? `Prisoner at ${g.nodes[sp.node]?.name}` : sp.node >= 0 ? `At ${g.nodes[sp.node].name}` : sp.fleet >= 0 ? `In flight to ${g.nodes[fleetById(g, sp.fleet)?.to ?? 0].name}` : '';
  const owner = sp.owner === PLAYER ? '' : ` · ${esc(sideName(g, sp.owner))}`;
  let extra = '';
  if (d.charge) extra += `<p><b>${d.charge.text.split(' (')[0]}:</b> ${sp.owner === PLAYER && sp.cd > g.t ? `recharging, ${fmtT(sp.cd - g.t)}` : 'ready'} <small>(recharges in ${fmtT(chargeCd(g, sp))})</small></p>`;
  if (!sp.cmd && !sp.up && d.up.text && sp.owner === PLAYER) extra += `<p class="dim">Upgrade (lead a winning attack): ${d.up.text}</p>`;
  if (sp.cmd && sp.cmd.perks.length) extra += `<p class="dim">${sp.cmd.perks.map(p => perkDef(p).name).join(' · ')}</p>`;
  const up = sp.owner === PLAYER && !sp.cmd ? ` · upkeep ◆ ${num(specUpkeep(g, sp))}/min` : '';
  return `<div class="tiphead">${token(g, sp, true)}<div><b>${esc(title)}</b><small>${d.role} · Power ${power(g, sp)}${up}${owner}</small><small>${esc(where)}</small></div></div><p>${specText(g, sp)}</p>${extra}`;
}

// ------------------------------------------------------------------ HUD and roster
export function hud(app: App): string {
  const g = app.g!, side = g.sides[PLAYER], m = g.mob, cmd = g.specs[g.cmdSpec];
  let banner = '';
  if (cmd && cmd.held && g.cmdLostT >= 0) banner = `<div class="banner bad" data-a="focus:${cmd.node}">★ COMMANDER CAPTURED at ${esc(g.nodes[cmd.node].name)}. Retake it in <b>${fmtT(rescueWindow(g) - (g.t - g.cmdLostT))}</b></div>`;
  else if (app.mode) {
    const t = { launch: 'Tap a target for this fleet', corridor: 'Tap a glowing node to link a corridor', convoy: 'Tap a glowing node to send through corridors', missile: 'Tap a glowing node to strike', rallyTo: 'Tap the rally point this node should feed' }[app.mode.k];
    banner = `<div class="banner">${t} <button class="btn sm" data-a="cancelmode">Cancel</button></div>`;
  } else if (g.offs.length) {
    const o = g.offs[0];
    banner = `<div class="banner warn" ${o.warned ? `data-a="focus:${o.target}"` : ''}>⚠ ${esc(sideName(g, o.owner))} offensive ${o.warned ? `on ${esc(g.nodes[o.target].name)} ` : ''}launches in ${fmtT(o.launchT - g.t)}</div>`;
  }
  const pips = [1, 2, 3, 4, 5].map(i => `<i class="${i <= m.stage ? 'on' : ''}"></i>`).join('');
  const building = side.produce && canProduce(side);
  const prodTitle = !side.produce ? 'Drone production paused' : building ? 'Building Drones' : 'Army at the limit your income supports';
  const rc = rpCost(g, PLAYER);
  return `<div class="hudrow">
    <div class="stat" data-a="menu:run" title="Ultanium: income and upkeep per minute"><b class="ult">◆ ${Math.floor(side.ult)}</b><small class="${side.net < 0 ? 'bad' : ''}">${side.net >= 0 ? '+' : ''}${num(side.net)}/min</small></div>
    <button class="stat prod ${side.produce ? (building ? 'on' : 'full') : 'off'}" data-a="produce" title="${prodTitle}. Tap to ${side.produce ? 'pause' : 'resume'}."><b>⬢ ${totalDrones(g, PLAYER)}</b><small>${!side.produce ? '⏸ paused' : building ? '▶ building' : '■ at limit'}</small></button>
    <div class="stat rsch" data-a="menu:research" title="Research: progress to the next choice">${side.rpm > 0 ? `<b>⚗ ${fmtT(Math.max(0, (rc - side.rp) / side.rpm) * 60)}</b>` : '<b>⚗ —</b>'}${bar(side.rp / rc, 'blue')}</div>
    <div class="stat mob" data-a="menu:intel" title="Coalition mobilization"><span class="pips">${pips}</span>${bar(m.prog, 'red')}<small>${m.surge ? `TOTAL WAR +${m.surge}` : `MOBILIZATION ${m.stage}/5`}</small></div>
    <div class="grow"></div>
    <div class="stat time"><b>${fmtT(g.t)}</b></div>
    <button class="btn ico ${app.paused ? 'hot' : ''}" data-a="pause" title="Pause (space)">${app.paused ? '▶' : '❚❚'}</button>
    <button class="btn ico" data-a="speed" title="Speed">${app.speed}×</button>
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
    const reserve = sp.node >= 0 && !sp.held && !activeSpecs(g, g.nodes[sp.node]).includes(sp.id);
    const cls = sp.held ? 'held' : f ? 'fly' : reserve ? 'res' : '';
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
};
function modText(m: Mods): string[] { return Object.keys(m).filter(k => m[k] && MOD_LABEL[k]).map(k => MOD_LABEL[k](m[k])); }
function chip(g: Game, sp: Spec, extra = ''): string {
  const d = SPECS[sp.def];
  const glob: Mods = { ...(d.glob || {}), ...(sp.cmd ? ARCHS[sp.cmd.arch].glob || {} : {}) };
  const txt = modText(specLoc(g, sp)).concat(modText(glob), d.charge ? [sp.cd > g.t ? `${d.charge.text.split(' (')[0]} ${fmtT(sp.cd - g.t)}` : `${d.charge.text.split(' (')[0]} ready`] : []);
  return `<span class="pchip ${extra}" data-tip="${sp.id}">${token(g, sp, false, true)}<span>${esc((txt.length ? txt : [d.role]).slice(0, 2).join(' · '))}</span></span>`;
}
/** One compact row: the active specialists here and what each is doing; reserves are dimmed (tap to make active). */
function passiveRow(g: Game, n: GNode, live: boolean): string {
  if (!n.specs.length) return '';
  const act = activeSpecs(g, n);
  return `<div class="prow">${n.specs.map(id => { const sp = g.specs[id]; if (!sp) return ''; const on = act.includes(id); return on || !live ? chip(g, sp) : `<span class="pchip res" data-a="promote:${id}" data-tip="${id}">${token(g, sp, false, true)}<span>reserve · tap to activate</span></span>`; }).join('')}</div>`;
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
function upBtn(g: Game, n: GNode, what: UpKind, label: string, lv: number, desc: string): string {
  if (lv >= 3) return `<div class="upb done"><b>${label}</b>${pips3(lv)}<small>${desc}</small></div>`;
  return `<button class="upb" data-a="up:${what}" ${canUp(g, n, what) ? 'disabled' : ''}><b>${label}</b>${pips3(lv)}<small>◆ ${upCost(g, n, what)} · ${upTime(what)}s</small><small>${desc}</small></button>`;
}

function ownNode(app: App, n: GNode): string {
  const g = app.g!, side = g.sides[PLAYER], m = nodeMods(g, n);
  let body = '';
  const third = n.kind === 'planet'
    ? `<div><small>INCOME</small><b>◆ ${num(nodeIncome(g, n, m))}</b><small>${workers(g, n) > n.drones ? `needs ${workers(g, n)} Drones working` : 'per minute'}</small></div>`
    : `<div><small>DRONES</small><b>1 / ${num(prodSecs(g, n, m))}s</b><small>${!side.produce ? 'production paused' : canProduce(side) ? 'building' : 'army at income limit'}</small></div>`;
  body += kvDef(g, n, third, true);
  if (n.task) {
    const t = n.task, nm = t.kind === 'lv' ? (n.kind === 'planet' ? 'Mine' : 'Barracks') + ` level ${n.lv + 1}` : t.kind === 'sh' ? `Shield level ${n.sh + 1}` : t.kind === 'spec' ? SPECIALTY[t.id].name : t.kind === 'missile' ? 'Missile' : `Corridor to ${g.nodes[+t.id].name}`;
    body += `<div class="task"><div><b>${esc(nm)}</b><small>${fmtT(t.left)} left</small>${bar(1 - t.left / t.total, 'gold')}</div><button class="btn sm" data-a="cancel">✕</button></div>`;
  }
  if (n.hold) body += `<div class="task"><div><b>${esc(n.hold.name)}</b><small>Hold with ${n.hold.need}+ Drones · ${fmtT(n.hold.until - g.t)} left</small>${bar(1 - (n.hold.until - g.t) / n.hold.total, 'blue')}</div></div>`;
  if (n.event) body += btn('event', `! ${EVENTS[n.event].name}`, { cls: 'wide gold', sub: 'Investigate' });

  // launch slots: tap a ready fleet, the panel gets out of the way, tap the target
  const total = slotsOf(g, n), away = g.fleets.filter(f => f.slot && f.home === n.id && f.owner === PLAYER);
  body += `<h3>Fleets <small>${total - away.length} of ${total} ready</small></h3><div class="srow">`;
  for (let i = 0; i < total; i++) {
    const f = away[i];
    body += f ? `<div class="shipic away"><span class="hull">▲</span><small>→ ${esc(g.nodes[f.to].name)}</small><small>${fmtT(eta(g, f, g.nodes[f.to]))}</small></div>`
      : `<button class="shipic" data-a="send"><span class="hull">▲</span><small>Launch</small></button>`;
  }
  if (corridorReach(g, n.id).length) body += `<button class="shipic lane" data-a="convoy"><span class="hull">⇄</span><small>Corridor</small></button>`;
  if (n.spec === 'silo') body += n.missile ? `<button class="shipic missile" data-a="missile"><span class="hull">➹</span><small>Fire missile</small></button>` : `<button class="shipic" data-a="up:missile" ${canUp(g, n, 'missile') ? 'disabled' : ''}><span class="hull">➹</span><small>Build ◆ ${CFG.missileCost}</small></button>`;
  body += `</div>`;

  // upgrades: two levels and one specialty
  body += `<h3>Upgrades</h3><div class="ups">`;
  body += upBtn(g, n, 'lv', n.kind === 'planet' ? 'Mine' : 'Barracks', n.lv, n.kind === 'planet' ? `${num(CFG.mineOut[Math.min(3, n.lv + 1)] * CFG.sizeMult[n.size])}/min next` : `1 Drone / ${CFG.prodSecs[Math.min(3, n.lv + 1)]}s next`);
  body += upBtn(g, n, 'sh', 'Shield', n.sh, `holds ${Math.min(3, n.sh + 1) * CFG.shieldPerLv}`);
  body += `</div>`;
  if (n.spec) body += `<div class="task"><div><b>${SPECIALTY[n.spec].name}</b><small>${SPECIALTY[n.spec].desc}${n.spec === 'lab' && !labRunning(g, n) ? ' <span class="warnp">Not running: needs more Drones here.</span>' : ''}</small></div></div>`;
  else {
    body += `<div class="specpick"><small>SPECIALTY · choose one, for good · ◆ ${upCost(g, n, 'spec')}</small><div>`;
    for (const id in SPECIALTY) if (SPECIALTY[id].on === n.kind) body += `<button class="upb" data-a="up:spec:${id}" ${canUp(g, n, 'spec', id) ? 'disabled' : ''}><b>${SPECIALTY[id].name}</b><small>${SPECIALTY[id].desc}</small></button>`;
    body += `</div></div>`;
  }

  // rally and logistics
  const rt = n.rally ? null : rallyTarget(g, n);
  const anyRally = g.nodes.some(o => o.owner === PLAYER && o.rally);
  body += `<h3>Rally</h3><div class="row wrap">`;
  body += btn('rally', n.rally ? '⚑ Rally point' : '⚐ Make rally point', { cls: n.rally ? 'hot' : '', sub: n.rally ? 'Spare Drones gather here' : 'Spare Drones from other nodes will flow here' });
  if (!n.rally && anyRally) body += btn('rallyto', rt ? `Feeds ${esc(rt.name)}` : 'Feeds nothing', { sub: 'Tap to change' });
  body += `<div class="stepper"><small>KEEP HERE</small><div><button class="btn sm" data-a="floor:-1">−</button><b>${floorOf(g, n)}</b><button class="btn sm" data-a="floor:1">+</button></div></div>`;
  const cn = corridorsAt(g, n.id).length, cmx = corridorMax(g);
  body += btn('corridorpick', `⇄ Corridor <i class="cnt">${cn}/${cmx}</i>`, { sub: `◆ ${corridorCost(g)} · ${CFG.corridorTime}s`, off: cn >= cmx ? 'Maximum built' : n.task ? 'Busy upgrading' : side.ult < corridorCost(g) ? 'Not enough Ultanium' : null });
  body += `</div>`;

  if (n.prisoners.length) {
    const sm = sideMods(g, PLAYER);
    body += `<h3>Prisoners</h3>`;
    for (const i of n.prisoners) {
      const sp = g.specs[i], leader = sp.def === 'warlord' || sp.def === 'archon', dup = g.specs.some(o => o.owner === PLAYER && o.def === sp.def);
      body += `<div class="task"><div class="rowc">${token(g, sp, false, true)} <b>${esc(specName(sp))}</b><small>${esc(sideName(g, sp.owner))}</small></div>${leader ? '' : btn(`ransom:${i}`, `Ransom +${Math.round(CFG.ransom * (1 + (sm.ransom || 0)))}`, { cls: 'sm' }) + (sp.def === 'captain' || dup ? '' : btn(`recruit:${i}`, `Recruit ◆ ${sm.recruitFree ? 0 : CFG.recruitCost}`, { cls: 'sm hot' }))}</div>`;
    }
  }
  return `${passiveRow(g, n, true)}<div class="pbody">${body}</div>`;
}

function foreignNode(app: App, n: GNode): string {
  const g = app.g!, k = known(g, n), view = viewOf(g, n);
  let body = '', head = '';
  if (k.tier === 'detected' || !view.v) body += `<p class="warnp">Detected only. Its forces are unknown. Fly a fleet close, or send a probe (0 Drones, no specialist) to identify it.</p>`;
  else {
    const v = view.v, d = defParts(g, v);
    if (!view.live) body += `<p class="warnp">Last seen ${fmtT(view.age)} ago. This may be out of date.</p>`;
    body += kvDef(g, v, `<div><small>DEFENCE</small><b>${d.def}</b><small>beat it to win</small></div>`, false);
    head = passiveRow(g, v, false);
    const role = `${v.kind === 'planet' ? 'Mine' : 'Barracks'} level ${v.lv}${v.spec ? ` · ${SPECIALTY[v.spec].name}` : ''}${v.missile ? ' · missile ready' : ''}`;
    body += `<p class="dim">${role}</p>`;
    if (v.prisoners.some(i => g.specs[i].owner === PLAYER)) body += `<p class="warnp">Holding your people: ${v.prisoners.filter(i => g.specs[i].owner === PLAYER).map(i => esc(specName(g.specs[i]))).join(', ')}</p>`;
    if (n.offer) body += `<p class="goodp">☺ Capture this to recruit 1 of 3 specialists.</p>`;
    if (n.event) body += `<p class="goodp">! Signal: ${EVENTS[n.event].name}.</p>`;
    if (n.capital && g.sides[v.owner]?.kind === 'faction') body += `<p class="goodp">♛ Capital of the ${FACTIONS[g.sides[v.owner].fac].name}. Capture it and the whole faction surrenders.</p>`;
    if (n.citadel) body += `<p class="goodp">✦ The Citadel. Capture it to win.</p>`;
  }
  const src = g.nodes.filter(o => o.owner === PLAYER && slotsFree(g, o) > 0 && (o.specs.length || o.drones)).sort((a, b) => dist(a, n) - dist(b, n)).slice(0, 5);
  body += `<h3>Send a fleet from</h3>`;
  if (!src.length) body += `<p class="dim">No node has a free launch slot.</p>`;
  for (const o of src) body += `<button class="btn wide fromrow" data-a="from:${o.id}"><span><b>${esc(o.name)}</b><small>⬢ ${o.drones} · ${fmtT(dist(o, n) / launchSpeed(g, o, []))} flight</small></span><span class="crewmini">${o.specs.slice(0, 4).map(i => token(g, g.specs[i], false, true)).join('') || '<small>no leader</small>'}</span></button>`;
  const silo = g.nodes.find(o => o.owner === PLAYER && !canMissile(g, o, n));
  if (silo) body += btn(`missilefrom:${silo.id}`, '➹ Missile strike', { cls: 'wide gold', sub: `From ${esc(silo.name)}: wipes the shield and kills ${CFG.missileKill} Drones` });
  return `${head}<div class="pbody">${body}</div>`;
}

// ------------------------------------------------------------------ launch bar
export function minToWin(g: Game, L: NonNullable<App['launch']>): number {
  const from = g.nodes[L.from], v = viewOf(g, g.nodes[L.to]).v;
  if (!v) return 0;
  for (let d = 1; d <= from.drones; d++) if (calcBattle(g, PLAYER, d, L.specs, v).win) return d;
  return 0;
}
export function launchPreview(g: Game, L: NonNullable<App['launch']>): string {
  const from = g.nodes[L.from], to = g.nodes[L.to];
  const secs = L.lane ? 0 : dist(from, to) / launchSpeed(g, from, L.specs);
  let out = `<div class="lstat"><span>⬢ <b>${L.drones}</b> go</span><span>⬢ <b>${from.drones - L.drones}</b> stay</span>${L.lane ? '<span>via corridor</span>' : `<span>arrives <b>${fmtT(secs)}</b></span>`}</div>`;
  if (L.specs.includes(g.cmdSpec) && to.owner !== PLAYER) out += `<p class="warnp">★ Commander aboard. If this attack fails at an enemy node they are captured.</p>`;
  if (to.owner === PLAYER) return out;
  if (!L.specs.length) return out + (L.drones ? `<p class="badp"><b>An attack needs a specialist to lead it.</b> Add one, or set Drones to 0 to send a probe.</p>` : `<p class="warnp">Probe: identifies the target and is lost.</p>`);
  const view = viewOf(g, to);
  if (!view.v) return out + `<p class="badp"><b>Unknown forces. Battle outcome unavailable.</b></p>`;
  const r = calcBattle(g, PLAYER, L.drones, L.specs, view.v), p = r.parts;
  const atk = [`${p.drones} Drones`, `${p.pow} Power`].concat(p.bonus ? [`+${p.bonus} bonus`] : []).join(' + ');
  const def = [`${p.garr} Drones`].concat(p.shield ? [`${p.shield} shield`] : [], p.dpow ? [`${p.dpow} Power`] : [], p.ddef ? [`${p.ddef} bonus`] : [], p.aegis ? [`${p.aegis} Aegis`] : []).join(' + ');
  out += `<div class="versus"><div><small>ATTACK</small><b>${r.atk}</b><span>${atk}</span></div><i>vs</i><div><small>DEFENCE</small><b>${r.def}</b><span>${def}</span></div></div>`;
  if (p.lance) out += `<p class="warnp">${p.lance} of your Drones are destroyed before landing.</p>`;
  if (p.strike) out += `<p class="goodp">Your first strike destroys ${p.strike} defenders.</p>`;
  const lead = g.specs[L.specs[0]];
  out += r.win ? `<p class="goodp"><b>Victory expected.</b> ${r.surv} Drones survive.${lead && !lead.cmd && !lead.up ? ` ${short(lead)} leads and will be upgraded.` : ''}</p>`
    : `<p class="badp"><b>Defeat expected.</b> Short by ${r.def - r.atk + 1}. ${to.owner === 0 ? 'Drones are lost; the crew returns.' : 'Drones are lost and the crew is captured.'}</p>`;
  if (!view.live) out += `<p class="warnp">Based on intelligence ${fmtT(view.age)} old.</p>`;
  return out;
}
function launchBar(app: App): string {
  const g = app.g!, L = app.launch!, from = g.nodes[L.from], to = g.nodes[L.to];
  if (from.owner !== PLAYER) { app.launch = null; return ''; }
  const max = L.lane ? 99 : crewMax(g, from);
  const chosen = L.specs.map((id, i) => `<button class="cslot full" data-a="lspec:${id}">${token(g, g.specs[id], true, true)}<small>${i === 0 && !L.lane ? 'LEADER' : short(g.specs[id])}</small></button>`);
  const empty = Array(Math.max(0, Math.min(max, 3 + (max > 3 ? max - 3 : 0)) - L.specs.length)).fill(0).map((_, i) => `<div class="cslot"><small>${L.specs.length + i === 0 ? 'leader' : 'empty'}</small></div>`);
  const avail = from.specs.filter(i => !L.specs.includes(i));
  return `<div class="phead"><div><h2>${esc(from.name)} → ${esc(to.name)}</h2><small>${L.lane ? 'Through corridors: no launch slot needed' : to.owner === PLAYER ? 'Reinforce' : 'Attack'}</small></div><button class="btn ico" data-a="lcancel">✕</button></div>
  <div class="pbody">
    <div class="crewslots" data-drop="crew">${chosen.join('')}${empty.join('')}</div>
    ${avail.length ? `<div class="availrow"><small>AT ${esc(from.name.toUpperCase())} · tap or drag into a slot</small><div>${avail.map(i => `<button class="chip" data-a="lspec:${i}">${token(g, g.specs[i], false, true)} ${esc(short(g.specs[i]))}</button>`).join('')}</div></div>` : ''}
    <input type="range" id="lslider" min="0" max="${from.drones}" value="${L.drones}">
    <div class="quick">${btn('lq:none', '0', { cls: 'sm' })}${L.lane || to.owner === PLAYER ? '' : btn('lq:min', 'Just enough', { cls: 'sm' })}${btn('lq:half', 'Half', { cls: 'sm' })}${btn('lq:all', 'All', { cls: 'sm' })}</div>
    <div id="preview">${launchPreview(g, L)}</div>
    <div class="row">${btn('lcancel', 'Cancel')}${btn('lconfirm', L.lane ? 'Send' : 'Launch', { cls: 'hot grow' })}</div>
  </div>`;
}

function fleetPanel(app: App, f: Fleet): string {
  const g = app.g!, seen = fleetSeen(g, f), to = g.nodes[f.to];
  const kind = f.missile ? 'missile' : f.lane ? 'convoy' : f.probe ? 'probe' : 'fleet';
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

// ------------------------------------------------------------------ research tree
/** The tree as a small diagram: one row per branch, doctrine pairs stacked. `offered` cards are lit. */
export function techTree(g: Game, offered: string[] = []): string {
  const have = g.sides[PLAYER].techs;
  const cell = (id: string) => {
    const t = TECHS[id], known2 = have.includes(id), locked = !!t.excl && have.includes(t.excl);
    return `<div class="tn ${known2 ? 'have' : ''} ${locked ? 'locked' : ''} ${offered.includes(id) ? 'offer' : ''}" title="${esc(t.desc)}">${known2 ? '✓ ' : ''}${t.name}</div>`;
  };
  return `<div class="tree">${BRANCHES.map(b => {
    const list = Object.values(TECHS).filter(t => t.branch === b);
    const tier = (k: number) => `<div class="tcol">${list.filter(t => t.tier === k).map(t => cell(t.id)).join('')}</div>`;
    return `<div class="trow"><small>${b}</small>${[1, 2, 3, 4].map(tier).join('<i>›</i>')}</div>`;
  }).join('')}</div>`;
}

// ------------------------------------------------------------------ global menu
export function menu(app: App): string {
  const g = app.g!, side = g.sides[PLAYER];
  const tabs: [string, string][] = [['research', 'Research'], ['roster', 'Specialists'], ['relics', 'Relics'], ['intel', 'Coalition'], ['log', 'Log'], ['run', 'Run']];
  let body = '';
  if (app.menu === 'research') {
    const rc = rpCost(g, PLAYER), labs = g.nodes.filter(n => n.owner === PLAYER && n.spec === 'lab');
    body = `<div class="task"><div><b>Next choice</b><small>${side.rpm > 0 ? `${num(side.rpm)} research per minute · ${fmtT(Math.max(0, (rc - side.rp) / side.rpm) * 60)} to go` : 'No research yet: give a planet the Lab specialty'}</small>${bar(side.rp / rc, 'blue')}</div></div>
      <p class="dim">Each time the bar fills you choose 1 of 3 cards from the edge of the tree. More Labs fill it faster. In a doctrine pair (stacked boxes) choosing one locks the other. Labs: ${labs.length ? labs.map(n => `<span class="link" data-a="focus:${n.id}">${esc(n.name)}${labRunning(g, n) ? '' : ' (not staffed)'}</span>`).join(', ') : 'none'}.</p>${techTree(g)}`;
    for (const id of side.techs) body += `<div class="tech done"><b>✓ ${TECHS[id].name}</b><small>${TECHS[id].desc}</small></div>`;
  } else if (app.menu === 'roster') {
    const mine = g.specs.filter(s => s.owner === PLAYER);
    body = mine.map(sp => `<div class="spec" data-a="${sp.node >= 0 ? `focus:${sp.node}` : 'noop'}">${token(g, sp, true, true)}<div><h4>${esc(sp.cmd ? `Commander · ${SPECS[sp.def].name} ${ARCHS[sp.cmd.arch].name} · L${sp.cmd.lvl}` : specName(sp) + (sp.up ? ' +' : ''))} <small>${SPECS[sp.def].role}</small></h4><small>${sp.held ? 'Prisoner at ' : sp.node >= 0 ? 'At ' : 'In flight'}${sp.node >= 0 ? esc(g.nodes[sp.node].name) : ''}${sp.cmd ? '' : ` · upkeep ◆ ${num(specUpkeep(g, sp))}/min`}</small><p>${specText(g, sp)}</p>${sp.cmd && sp.cmd.lvl < 5 ? bar((sp.cmd.xp - CFG.xpLevels[sp.cmd.lvl - 1]) / (CFG.xpLevels[sp.cmd.lvl] - CFG.xpLevels[sp.cmd.lvl - 1]), 'gold') : ''}</div></div>`).join('');
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
  } else if (app.menu === 'log') {
    body = g.log.slice().reverse().map(l => `<div class="logl ${l.kind}" ${l.node >= 0 ? `data-a="focus:${l.node}"` : ''}><small>${fmtT(l.t)}</small>${esc(l.msg)}</div>`).join('');
  } else {
    const st = g.stats;
    body = `<div class="kv"><div><small>INCOME</small><b>◆ ${num(side.inc)}</b><small>per minute</small></div><div><small>UPKEEP</small><b>◆ ${num(side.upk)}</b><small>Drones and specialists</small></div><div><small>NET</small><b class="${side.net < 0 ? 'bad' : ''}">◆ ${num(side.net)}</b><small>per minute</small></div></div>
      <p class="dim">Each Drone costs ◆ ${CFG.upkeepDrone}/min; your first ${CFG.freeBase} are free. Specialists cost ◆ ${CFG.upkeepPower}/min per point of Power. Stations stop building once upkeep reaches ${Math.round(CFG.armyShare * 100)}% of income. If you run out of Ultanium with negative income, Drones desert.</p>
      <div class="kv"><div><small>SEED</small><b>${g.seed}</b></div><div><small>THREAT</small><b>${g.threat}</b></div><div><small>NODES</small><b>${g.nodes.filter(n => n.owner === PLAYER).length}/${g.nodes.length}</b></div></div>
      <p class="dim">Captures ${st.captures} · Nodes lost ${st.nodesLost} · Drones lost ${st.dronesLost}. The run saves automatically to this device.</p>
      ${btn('help', 'How to play', { cls: 'wide' })}${btn('abandon', 'Abandon run', { cls: 'wide' })}`;
  }
  return `<div class="sheet"><div class="phead"><div class="tabs">${tabs.map(([k, v]) => `<button data-a="menu:${k}" class="${app.menu === k ? 'on' : ''}">${v}</button>`).join('')}</div><button class="btn ico" data-a="menu:">✕</button></div><div class="pbody">${body}</div></div>`;
}

// ------------------------------------------------------------------ choices and end screen
function specCard(id: string, i: number): string {
  const d = SPECS[id];
  return `<button class="card" data-a="choose:${i}">${defTok(id)}<h3>${d.name}</h3><small>${d.role} · Power ${d.pow} · upkeep ◆ ${num(d.pow * CFG.upkeepPower)}/min</small><p>${d.text}</p>${d.charge ? `<p class="dim">${d.charge.text}</p>` : ''}<p class="dim">Upgrade: ${d.up.text}</p></button>`;
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
    return `<div class="modal"><h2>Choose your Commander</h2><p class="dim">Your strongest specialist, free of upkeep, who gains levels as you capture nodes. If they are captured you have ${fmtT(CFG.rescueSecs)} to retake the node holding them, or the run ends.</p><div class="cards">${cards}</div></div>`;
  }
  if (p.kind === 'spec') {
    cards = p.opts.map((id: string, i: number) => specCard(id, i)).join('');
    return `<div class="modal"><h2>${esc(p.title)}</h2><p class="dim">Recruit one, or none: every specialist costs upkeep. A fleet needs a specialist to lead an attack, and the leader of a winning attack is upgraded once.</p><div class="cards">${cards}</div>${btn('choose:-1', 'Skip', { cls: 'wide' })}</div>`;
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
  if (p.kind === 'tech') {
    cards = p.opts.map((id: string, i: number) => { const t = TECHS[id]; return `<button class="card tech${t.excl ? ' doc' : ''}" data-a="choose:${i}"><small>${t.branch} · tier ${t.tier}</small><h3>${t.name}</h3><p>${t.desc}</p>${t.excl ? `<small class="why">Doctrine: locks out ${TECHS[t.excl].name}</small>` : ''}</button>`; }).join('');
    return `<div class="modal"><h2>Research: choose one</h2><div class="cards">${cards}</div>${techTree(g, p.opts)}</div>`;
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
  return `<div class="title"><h1>SPACE<span>NODES</span></h1><p class="tag">Recruit your specialists. Send the right three. Take the Citadel before the Coalition takes you.</p>
    ${app.hasSave ? btn('continue', 'Continue run', { cls: 'wide hot' }) : ''}
    ${btn('newrun', 'New run', { cls: `wide ${app.hasSave ? '' : 'hot'}` })}
    <div class="lv"><small>THREAT LEVEL</small><div class="chips">${levels}</div><small class="dim">${app.newThreat === 0 ? 'Standard campaign.' : `Tougher garrisons and faster mobilization.`} Win to unlock the next.</small></div>
    ${btn('help', 'How to play', { cls: 'wide' })}
    <small class="dim">Runs ${m.runs} · Wins ${m.wins}</small></div>`;
}
export function help(): string {
  return `<div class="modal help"><h2>How to play</h2>
  <p><b>Goal.</b> Capture <b>The Citadel</b> ✦. You lose if your <b>Commander</b> ★ is captured and not rescued in time.</p>
  <p><b>Specialists are the game.</b> Each has a <b>Power</b> number and one passive effect. Power adds to attack when they fly with a fleet and to defence where they stand. A fleet <b>needs a specialist to lead</b> an attack, and the leader of a winning attack is upgraded once. Three work together at a node or in a fleet; extras wait in reserve.</p>
  <p><b>Roster.</b> Your specialists are always shown down the side. Tap one to jump to them, hold (or hover) for details, <b>drag one onto a friendly node</b> to send them there.</p>
  <p><b>Attacking.</b> Tap one of your nodes, tap a ready fleet ▲, then tap the target. Put specialists in the crew slots, set the Drones, and read the exact outcome before you launch. Attack must beat Drones + shield + defending Power.</p>
  <p><b>Economy.</b> Planets mine Ultanium ◆; stations build Drones ⬢ on their own. Every Drone and specialist costs upkeep, so your income sets the size of your army. The ⬢ button in the top bar pauses production when you want to save.</p>
  <p><b>Nodes.</b> Each has two levels to raise (Mine or Barracks, and Shield) and one <b>specialty</b> chosen once: Refinery, Lab or Supply world for planets; Missile Silo, Depot or Launch Bay for stations.</p>
  <p><b>Rally points.</b> Mark a node ⚑ and spare Drones flow to it by themselves. Corridors ⇄ make that twice as fast and carry specialists without using a fleet.</p>
  <p><b>Research.</b> Labs fill a bar; when it is full you choose 1 of 3 cards.</p>
  <p><b>The Coalition.</b> Three factions and an Archon. Mobilization grows their armies over time. Capture a faction's capital ♛ and the whole faction surrenders.</p>
  <p><b>Controls.</b> Drag or WASD to scroll, pinch or wheel to zoom, Space pauses, 1/2/3 speed, M menu, H home, Esc cancels.</p>
  ${btn('helpclose', 'Got it', { cls: 'wide hot' })}</div>`;
}
void locMods;
