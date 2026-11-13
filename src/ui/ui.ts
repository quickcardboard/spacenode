import type { Game, GNode, Ship, Spec, Mods } from '../sim/types';
import { PLAYER } from '../sim/types';
import { CFG, BUILD, STRUCT_DEF } from '../sim/config';
import { SPECS, ARCHS, RELICS, TECHS, TECH_TIME, TECH_OPS, FACTIONS, ARCHONS, EVENTS, type AbilityDef } from '../sim/content';
import { locMods, nodeMods, shipMods, sideMods, perkDef } from '../sim/mods';
import {
  calcBattle, viewOf, nodeOps, natMax, sideIncome, totalDrones, droneCap, canBuild, buildCount, buildMax, shipCost, isDocked, docks,
  techAvailable, techCost, dist, sideName, sideColor, shipSeen, eta, slots, specName, rescueWindow, eventChoiceOk, aegis, shipById, corridorsAt, canCorridor, type Battle,
} from '../sim/core';
import { abilitiesOf, cdLeft, abilityCheck } from '../sim/abilities';
import { known } from './render';

export interface App {
  g: Game | null; speed: number; paused: boolean;
  sel: { type: 'node' | 'ship'; id: number } | null; tab: string; menu: string | null;
  mode: null | { k: 'launch'; ship: number } | { k: 'ability'; spec: number; id: string } | { k: 'redirect'; ship: number } | { k: 'corridor'; from: number };
  launch: null | { ship: number; to: number; drones: number; specs: number[]; from?: number; lane?: boolean };
  screen: 'title' | 'game' | 'help'; newThreat: number; meta: { runs: number; wins: number; unlocked: number; best: number };
  hasSave: boolean; note: string; noteT: number;
}

export const fmtT = (s: number) => { s = Math.max(0, Math.floor(s)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
const esc = (s: string) => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));
const bar = (p: number, cls = '') => `<div class="bar ${cls}"><i style="width:${Math.max(0, Math.min(100, p * 100)).toFixed(1)}%"></i></div>`;
const btn = (a: string, label: string, opts: { off?: string | null; cls?: string; sub?: string } = {}) =>
  `<button data-a="${a}" class="btn ${opts.cls || ''}" ${opts.off ? 'disabled' : ''}>${label}${opts.sub ? `<small>${opts.sub}</small>` : ''}${opts.off ? `<small class="why">${esc(opts.off)}</small>` : ''}</button>`;

export function token(g: Game, sp: Spec, big = false) {
  const d = SPECS[sp.def], cmd = sp.id === g.cmdSpec;
  return `<span class="tok ${big ? 'big' : ''} ${cmd ? 'cmd' : ''}" style="--c:${cmd ? '#e8bd55' : d.color}">${cmd ? '★' : d.tag}</span>`;
}
const defTok = (id: string) => `<span class="tok big" style="--c:${SPECS[id].color}">${SPECS[id].tag}</span>`;

// ------------------------------------------------------------------ HUD
export function hud(app: App): string {
  const g = app.g!;
  const side = g.sides[PLAYER], inc = sideIncome(g, PLAYER);
  const m = g.mob, cmd = g.specs[g.cmdSpec];
  let banner = '';
  if (cmd && cmd.held && g.cmdLostT >= 0) {
    const left = rescueWindow(g) - (g.t - g.cmdLostT);
    banner = `<div class="banner bad" data-a="focus:${cmd.node}">★ COMMANDER CAPTURED at ${esc(g.nodes[cmd.node].name)}. Retake it in <b>${fmtT(left)}</b></div>`;
  } else if (app.mode) {
    const t = app.mode.k === 'launch' ? 'Tap a destination' : app.mode.k === 'redirect' ? 'Tap a new destination' : 'Tap a target';
    banner = `<div class="banner">${t} <button class="btn sm" data-a="cancelmode">Cancel</button></div>`;
  } else if (g.offs.length) {
    const o = g.offs[0];
    banner = `<div class="banner warn" ${o.warned ? `data-a="focus:${o.target}"` : ''}>⚠ ${esc(sideName(g, o.owner))} offensive ${o.warned ? `on ${esc(g.nodes[o.target].name)} ` : ''}launches in ${fmtT(o.launchT - g.t)}</div>`;
  }
  const pips = [1, 2, 3, 4, 5].map(i => `<i class="${i <= m.stage ? 'on' : ''}"></i>`).join('');
  return `<div class="hudrow">
    <div class="stat" title="Ultanium"><b class="ult">◆ ${Math.floor(side.ult)}</b><small>+${inc.toFixed(1)}/min</small></div>
    <div class="stat" title="Drones / global cap"><b>⬢ ${totalDrones(g, PLAYER)}</b><small>/ ${droneCap(g, PLAYER)}</small></div>
    <div class="stat mob" data-a="menu:intel" title="Coalition mobilization"><span class="pips">${pips}</span>${bar(m.prog, 'red')}<small>${m.surge ? `TOTAL WAR +${m.surge}` : `MOBILIZATION ${m.stage}/5`}</small></div>
    <div class="grow"></div>
    <div class="stat time"><b>${fmtT(g.t)}</b></div>
    <button class="btn ico ${app.paused ? 'hot' : ''}" data-a="pause" title="Pause (space)">${app.paused ? '▶' : '❚❚'}</button>
    <button class="btn ico" data-a="speed" title="Speed">${app.speed}×</button>
    <button class="btn ico" data-a="menu:specs" title="Menu (M)">☰</button>
  </div>${banner}`;
}

// ------------------------------------------------------------------ specialists
function abilityBtn(g: Game, sp: Spec, a: AbilityDef) {
  const cd = cdLeft(g, sp, a.id);
  const where = a.at === 'ship' ? 'in flight' : a.at === 'planet' ? 'on a planet' : a.at === 'node' ? 'at a node' : '';
  return `<button class="abil" data-a="ability:${sp.id}:${a.id}" ${cd > 0 ? 'disabled' : ''}><b>${a.name}</b>${cd > 0 ? `<em>${fmtT(cd)}</em>` : `<em>ready</em>`}<span>${a.desc}${where ? ` <i>Use ${where}.</i>` : ''}</span></button>`;
}
/** Big ability buttons for every specialist present: the first thing shown when a node or ship is selected. */
export function abilityDeck(g: Game, ids: number[]): string {
  const cards: string[] = [], later: string[] = [];
  for (const id of ids) {
    const sp = g.specs[id];
    if (!sp || sp.owner !== PLAYER || sp.held) continue;
    for (const a of abilitiesOf(sp)) {
      const cd = cdLeft(g, sp, a.id), why = cd > 0 ? null : abilityCheck(g, sp, { ...a, target: 'self' }, null);
      const total = a.cd || 1, frac = cd > 0 ? 1 - cd / total : 1;
      const state = cd > 0 ? fmtT(cd) : a.target === 'self' ? 'Ready' : 'Ready · tap, then pick a target';
      // abilities that cannot be used where the specialist stands drop to a small line below
      if (why && cd <= 0) { later.push(`<span class="later" data-tip="${sp.id}">${token(g, sp)} ${a.name} <small>${esc(why)}</small></span>`); continue; }
      cards.push(`<button class="deck ${cd > 0 || why ? 'off' : 'on'}" data-a="ability:${sp.id}:${a.id}" ${cd > 0 || why ? 'disabled' : ''} style="--p:${(frac * 100).toFixed(0)}%">
        ${token(g, sp)}<span><b>${a.name}</b><small>${esc(sp.cmd ? 'Commander' : SPECS[sp.def].name)} · ${esc(state)}</small><i>${a.desc}</i></span></button>`);
    }
  }
  return (cards.length ? `<div class="deckrow">${cards.join('')}</div>` : '') + (later.length ? `<div class="laterrow">${later.join('')}</div>` : '');
}
/** Slots at a node and on each ship parked there, with one-tap moves between them. */
function teamStrip(g: Game, n: GNode, ships: Ship[]): string {
  const cap = slots(g, PLAYER);
  const tile = (id: number, move: string) => { const sp = g.specs[id]; return `<div class="slot full" data-tip="${id}">${token(g, sp, true)}<small>${esc(sp.cmd ? 'Commander' : SPECS[sp.def].name)}</small>${move}</div>`; };
  const empty = '<div class="slot"><small>empty</small></div>';
  const usable = ships.filter(s => s.loadUntil === 0);
  const nodeTiles = n.specs.map(id => tile(id, usable.length ? `<button class="mv" data-a="swap:${id}:${usable.find(s => s.specs.length < cap)?.id ?? usable[0].id}" title="Move aboard">▲</button>` : '')).concat(Array(Math.max(0, cap - n.specs.length)).fill(empty));
  let out = `<div class="team"><h3>At ${esc(n.name)} <small>${n.specs.length}/${cap}</small></h3><div class="slots">${nodeTiles.join('')}</div>`;
  usable.forEach((s, i) => {
    const tiles = s.specs.map(id => tile(id, `<button class="mv" data-a="swap:${id}:${s.id}" title="Move to the node">▼</button>`)).concat(Array(Math.max(0, cap - s.specs.length)).fill(empty));
    out += `<h3>Ship ${usable.length > 1 ? i + 1 : ''} <small>${isDocked(g, s) ? 'docked' : 'orbiting'} · ${s.specs.length}/${cap}</small></h3><div class="slots">${tiles.join('')}</div>`;
  });
  return out + (usable.length ? '<p class="dim">Tap ▲ or ▼ to move a specialist between this node and a ship here. Hold a statue on the map for details.</p>' : '') + '</div>';
}
/** Compact tooltip for a specialist (long-press or hover on the map). */
export function specTip(g: Game, sp: Spec): string {
  const d = SPECS[sp.def];
  let title = specName(sp), passive = d.passive;
  if (sp.cmd) { const ar = ARCHS[sp.cmd.arch]; title = `Commander · ${d.name} ${ar.name} · L${sp.cmd.lvl}`; passive = `${d.passive} ${ar.passive}`; }
  const owner = sp.owner === PLAYER ? '' : `<small class="bad">${esc(sideName(g, sp.owner))}</small>`;
  const ab = abilitiesOf(sp).map(a => { const cd = sp.owner === PLAYER ? cdLeft(g, sp, a.id) : 0; return `<p><b>${a.name}</b> <small>${cd > 0 ? fmtT(cd) : `${a.cd}s cooldown`}</small><br>${a.desc}</p>`; }).join('');
  return `<div class="tiphead">${token(g, sp, true)}<div><b>${esc(title)}</b><small>${d.role}</small>${owner}</div></div><p>${passive}</p>${ab}`;
}
export function specRow(g: Game, sp: Spec, withLoc = false, withAbilities = true) {
  const d = SPECS[sp.def];
  let title = specName(sp), passive = d.passive;
  if (sp.cmd) { const ar = ARCHS[sp.cmd.arch]; title = `Commander · ${d.name} ${ar.name} · L${sp.cmd.lvl}`; passive = `${d.passive} ${ar.passive}`; }
  let loc = '';
  if (withLoc) {
    if (sp.held) loc = `<small class="bad">Prisoner at ${esc(g.nodes[sp.node].name)}</small>`;
    else if (sp.node >= 0) loc = `<small data-a="focus:${sp.node}" class="link">at ${esc(g.nodes[sp.node].name)}</small>`;
    else { const s = shipById(g, sp.ship); loc = `<small>aboard a ship${s && s.to >= 0 ? ` to ${esc(g.nodes[s.to].name)}` : ''}</small>`; }
  }
  const perks = sp.cmd?.perks.length ? `<p class="perks">${sp.cmd.perks.map(p => `<span title="${esc(perkDef(p).desc)}">${perkDef(p).name}</span>`).join('')}</p>` : '';
  const xp = sp.cmd && sp.cmd.lvl < 5 ? bar((sp.cmd.xp - CFG.xpLevels[sp.cmd.lvl - 1]) / (CFG.xpLevels[sp.cmd.lvl] - CFG.xpLevels[sp.cmd.lvl - 1]), 'gold') : '';
  const abil = withAbilities && sp.owner === PLAYER && !sp.held ? abilitiesOf(sp).map(a => abilityBtn(g, sp, a)).join('') : '';
  return `<div class="spec">${token(g, sp, true)}<div><h4>${esc(title)} <small>${d.role}</small></h4>${loc}<p>${passive}</p>${perks}${xp}<div class="abils">${abil}</div></div></div>`;
}

// ------------------------------------------------------------------ node panel
function defenceLine(g: Game, n: GNode, v: GNode) {
  const r = calcBattle(g, 0, {}, v, nodeMods(g, v));
  const p = r.parts, bits = [`${p.garr} Drones`];
  if (v.kind === 'planet') bits.push(`${p.nat} natural`);
  if (p.struct) bits.push(`${p.struct} structures`);
  if (p.bonus) bits.push(`${p.bonus > 0 ? '+' : ''}${p.bonus} bonuses`);
  if (p.aegis) bits.push(`${p.aegis} Aegis`);
  void n;
  return { total: r.def, text: bits.join(' + ') };
}
function structs(v: GNode) {
  const list = Object.keys(v.b).filter(k => v.b[k] > 0).map(k => `${BUILD[k].name}${v.b[k] > 1 ? ` ×${v.b[k]}` : ''}`);
  return list.length ? list.join(', ') : 'None';
}

function ownNode(app: App, n: GNode): string {
  const g = app.g!, tm = nodeMods(g, n), ops = nodeOps(g, n, tm), side = g.sides[PLAYER];
  const hasLab = (n.b.lab || 0) + (n.b.slab || 0) > 0;
  const tabs = ['info', 'build'].concat(hasLab ? ['research'] : []);
  if (!tabs.includes(app.tab)) app.tab = 'info';
  let body = '';
  if (app.tab === 'info') {
    const parkedShips = g.ships.filter(s => s.at === n.id && s.owner === PLAYER);
    body += abilityDeck(g, n.specs.concat(parkedShips.flatMap(s => s.specs)));
    const d = defenceLine(g, n, n);
    body += `<div class="kv"><div><small>GARRISON</small><b>⬢ ${n.drones}</b></div><div><small>DEFENCE</small><b>${d.total}</b></div>${n.kind === 'planet' ? `<div><small>OUTPUT</small><b>◆ ${ops.out.toFixed(1)}</b><small>of ${ops.cap.toFixed(0)}/min</small></div>` : `<div><small>DOCKS</small><b>${docks(n)}</b></div>`}</div>`;
    body += `<p class="dim">${d.text}${n.kind === 'planet' ? ` · natural defence ${Math.floor(n.nat)}/${natMax(g, n, tm)}` : ''}</p>`;
    if (n.kind === 'planet') body += `<p class="dim">Mines ${ops.on}/${n.b.mine || 0} running · ${n.b.gen || 0} generator${(n.b.gen || 0) === 1 ? '' : 's'} power ${(n.b.gen || 0) * CFG.minesPerGen}</p>`;
    if (ops.short > 0) body += `<p class="warnp">${ops.short} Drone${ops.short > 1 ? 's' : ''} short: ${ops.resNeed && !ops.resOn ? 'research paused' : 'some mines idle'}.</p>`;
    if (n.lane) {
      const tn = (t: { kind: string; id: string }) => (t.kind === 'ship' ? 'Ship' : t.kind === 'corridor' ? `Corridor to ${g.nodes[+t.id].name}` : BUILD[t.id].name);
      const t = n.lane, nm = tn(t);
      body += `<div class="task"><div><b>${nm}</b><small>${fmtT(t.left)} left${n.kind === 'station' ? ' · Drone production paused' : ''}</small>${bar(1 - t.left / t.total, 'gold')}</div><button class="btn sm" data-a="cancel:-1">✕</button></div>`;
      n.queue.forEach((q, i) => (body += `<div class="task q"><div><b>${esc(tn(q))}</b><small>queued</small></div><button class="btn sm" data-a="cancel:${i}">✕</button></div>`));
    } else if (n.kind === 'station') {
      const capped = totalDrones(g, PLAYER) >= droneCap(g, PLAYER);
      body += `<div class="task"><div><b>Producing Drones</b><small>${capped ? 'Global Drone cap reached' : `+${CFG.batch + (tm.batch || 0)} per batch`}</small>${bar(n.prod / CFG.batchTime)}</div></div>`;
    }
    if (n.research) body += `<div class="task"><div><b>Research: ${TECHS[n.research].name}</b><small>${ops.resOn ? `${fmtT(TECH_TIME[TECHS[n.research].tier] - (side.techProg[n.research] || 0))} of lab time left` : 'paused: not enough Drones'}</small>${bar((side.techProg[n.research] || 0) / TECH_TIME[TECHS[n.research].tier], 'blue')}</div></div>`;
    if (n.hold) body += `<div class="task"><div><b>${esc(n.hold.name)}</b><small>Hold with ${n.hold.need}+ Drones · ${fmtT(n.hold.until - g.t)} left</small>${bar(1 - (n.hold.until - g.t) / n.hold.total, 'blue')}</div></div>`;
    if (n.event) body += btn('event', `! ${EVENTS[n.event].name}`, { cls: 'wide gold', sub: 'Investigate' });

    const ships = g.ships.filter(s => s.at === n.id && s.owner === PLAYER);
    body += `<h3>Ships</h3>`;
    if (!ships.length) body += `<p class="dim">No ship here. Drones and specialists only move by ship.</p>`;
    for (const s of ships) {
      const st = s.loadUntil > 0 ? `Loading for ${esc(g.nodes[s.to].name)}` : isDocked(g, s) ? 'Docked' : `Orbiting, no free dock${s.drones ? ` · ${s.drones} Drones aboard` : ''}`;
      body += `<div class="task"><div><b>▲ Ship</b><small>${st}</small></div>${s.loadUntil > 0 ? '' : btn(`send:${s.id}`, 'Send', { cls: 'sm hot' })}</div>`;
    }
    body += teamStrip(g, n, ships);
    const cors = corridorsAt(g, n.id);
    if (cors.length) {
      body += `<h3>Corridors</h3>`;
      for (const c of cors) { const o = g.nodes[c.a === n.id ? c.b : c.a]; body += `<div class="task"><div><b>⇄ ${esc(o.name)}</b><small>${c.until ? `temporary · ${fmtT(c.until - g.t)} left` : 'Drones and specialists cross at double speed, no ship needed'}</small></div>${btn(`lane:${o.id}`, 'Send', { cls: 'sm hot' })}</div>`; }
    }
    const here = n.specs.concat(ships.flatMap(s => s.specs));
    if (here.length) body += `<h3>Specialist details</h3>` + here.map(i => specRow(g, g.specs[i], false, false)).join('');
    if (n.prisoners.length) {
      const sm = sideMods(g, PLAYER);
      body += `<h3>Prisoners</h3>`;
      for (const i of n.prisoners) {
        const sp = g.specs[i], leader = sp.def === 'warlord' || sp.def === 'archon';
        const conv = n.conv && n.conv.spec === i ? `<small>Converting: ${fmtT(n.conv.until - g.t)}</small>` : '';
        body += `<div class="task"><div>${token(g, sp)} <b>${esc(specName(sp))}</b><small>${esc(sideName(g, sp.owner))}</small>${conv}</div>${leader ? '' : btn(`ransom:${i}`, `Ransom +${Math.round(CFG.ransom * (1 + (sm.ransom || 0)))}`, { cls: 'sm' }) + (sm.recruit ? btn(`recruit:${i}`, `Recruit ${CFG.recruitCost}`, { cls: 'sm' }) : '')}</div>`;
      }
    }
  } else if (app.tab === 'build') {
    const corrN = corridorsAt(g, n.id).filter(c => !c.until).length;
    body += btn('corridorpick', `⇄ Corridor <i class="cnt">${corrN}/${CFG.corridorMax}</i>`, { cls: 'wide', sub: `◆ ${CFG.corridorCost} · ${CFG.corridorTime}s · link to one of your nodes within ${CFG.corridorRange}; Drones and specialists cross at double speed without a ship`, off: corrN >= CFG.corridorMax ? 'Maximum built' : side.ult < CFG.corridorCost ? 'Not enough Ultanium' : null });
    if (n.kind === 'station') body += btn('ship', '▲ Ship', { cls: 'wide', sub: `◆ ${shipCost(g, PLAYER)} · ${CFG.shipTime}s · pauses Drone production`, off: side.ult < shipCost(g, PLAYER) ? 'Not enough Ultanium' : n.queue.length >= 4 ? 'Queue full' : null });
    for (const id in BUILD) {
      const d = BUILD[id];
      if (d.on !== n.kind) continue;
      body += btn(`build:${id}`, `${d.name} <i class="cnt">${buildCount(n, id)}/${buildMax(g, n, id)}</i>`, { cls: 'wide', sub: `◆ ${d.cost} · ${d.time}s · ${d.desc}`, off: canBuild(g, n, id) });
    }
    body += `<p class="dim">Building and production share one lane per node. Research runs separately.</p>`;
  } else {
    body += `<label class="chk"><input type="checkbox" data-a="resfirst" ${n.resFirst ? 'checked' : ''}> If Drones run short, keep research running before mines</label>`;
    if (n.research) body += btn('research:', `Stop ${TECHS[n.research].name}`, { cls: 'wide', sub: 'Progress is kept' });
    const av = techAvailable(g, PLAYER);
    let last = '';
    for (const id in TECHS) {
      const t = TECHS[id];
      if (t.branch !== last) { body += `<h3>${t.branch}</h3>`; last = t.branch; }
      const have = side.techs.includes(id), prog = side.techProg[id];
      if (have) { body += `<div class="tech done"><b>✓ ${t.name}</b><small>${t.desc}</small></div>`; continue; }
      const elsewhere = g.nodes.some(o => o.owner === PLAYER && o.id !== n.id && o.research === id);
      const off = !av.includes(id) ? `Needs ${TECHS[t.pre!].name}` : elsewhere ? 'In progress elsewhere' : n.research === id ? 'Running here' : prog === undefined && side.ult < techCost(g, PLAYER, id) ? 'Not enough Ultanium' : null;
      body += btn(`research:${id}`, t.name, { cls: 'wide', sub: `${prog === undefined ? `◆ ${techCost(g, PLAYER, id)}` : `${Math.round((prog / TECH_TIME[t.tier]) * 100)}% done`} · ${TECH_TIME[t.tier]}s · ${TECH_OPS[t.tier]} Drones · ${t.desc}`, off });
    }
  }
  return `<div class="tabs">${tabs.map(t => `<button data-a="tab:${t}" class="${app.tab === t ? 'on' : ''}">${t === 'info' ? 'Overview' : t === 'build' ? 'Build' : 'Research'}</button>`).join('')}</div><div class="pbody">${body}</div>`;
}

function foreignNode(app: App, n: GNode): string {
  const g = app.g!, k = known(g, n), view = viewOf(g, n);
  let body = '';
  if (k.tier === 'detected' || !view.v) body += `<p class="warnp">Detected only. Forces, structures and residents are unknown. Scout it with an unmanned ship (the ship is lost) or bring it inside full-intelligence range.</p>`;
  else {
    const v = view.v, d = defenceLine(g, n, v);
    body += `<p class="${view.live ? 'goodp' : 'warnp'}">${view.live ? 'Full intelligence' : `Last seen ${fmtT(view.age)} ago. This may be out of date.`}</p>`;
    body += `<div class="kv"><div><small>GARRISON</small><b>⬢ ${v.drones}</b></div><div><small>DEFENCE</small><b>${d.total}</b></div><div><small>TO WIN</small><b>${d.total + 1}+</b></div></div><p class="dim">${d.text}</p><p class="dim">Structures: ${structs(v)}</p>`;
    if (v.specs.length) body += `<h3>Specialists</h3>` + v.specs.map(i => specRow(g, g.specs[i])).join('');
    if (v.prisoners.some(i => g.specs[i].owner === PLAYER)) body += `<p class="warnp">Holding your people: ${v.prisoners.filter(i => g.specs[i].owner === PLAYER).map(i => esc(specName(g.specs[i]))).join(', ')}</p>`;
    if (n.offer) body += `<p class="goodp">☺ Residents: capture this planet to recruit 1 of 3 specialists.</p>`;
    if (n.event) body += `<p class="goodp">! Signal: ${EVENTS[n.event].name}. Capture the node to investigate.</p>`;
    if (n.capital && g.sides[v.owner]?.kind === 'faction') body += `<p class="goodp">♛ Capital of the ${FACTIONS[g.sides[v.owner].fac].name}. Capture it to take their Warlord and strip a Citadel Aegis layer.</p>`;
    if (n.citadel) body += `<p class="goodp">✦ The Citadel. Capture it to win. Aegis ${aegis(g, n)} (falls as Warlords are captured).</p>`;
  }
  const src = g.ships.filter(s => s.owner === PLAYER && s.at >= 0 && s.loadUntil === 0).map(s => ({ s, n: g.nodes[s.at] })).sort((a, b) => dist(a.n, n) - dist(b.n, n));
  body += `<h3>Send a fleet here</h3>`;
  if (!src.length) body += `<p class="dim">No idle ship available.</p>`;
  const seenNode = new Set<number>();
  for (const { s, n: o } of src) {
    if (seenNode.has(o.id) && isDocked(g, s)) continue;
    seenNode.add(o.id);
    const dk = isDocked(g, s);
    body += btn(`from:${s.id}`, `${esc(o.name)}`, { cls: 'wide', sub: `⬢ ${dk ? o.drones : s.drones} available · ${fmtT(eta(g, s, n))} flight${dk ? '' : ' · orbiting'}` });
  }
  return `<div class="pbody">${body}</div>`;
}

// ------------------------------------------------------------------ launch sheet
export function launchPool(g: Game, s: Ship) { const n = g.nodes[s.at]; return isDocked(g, s) ? n.drones + s.drones : s.drones; }
export function launchMods(g: Game, L: NonNullable<App['launch']>): Mods {
  const s = shipById(g, L.ship)!, n = g.nodes[s.at];
  const m = locMods(g, PLAYER, L.specs, []);
  const nm = nodeMods(g, n);
  if (nm.launchSpeed) m.speed = (m.speed || 0) + nm.launchSpeed;
  return m;
}
export function minToWin(g: Game, L: NonNullable<App['launch']>): number {
  const s = shipById(g, L.ship)!, to = g.nodes[L.to], v = viewOf(g, to).v;
  if (!v) return 0;
  const m = launchMods(g, L), tm = nodeMods(g, v), pool = launchPool(g, s);
  for (let d = 1; d <= pool; d++) if (calcBattle(g, d, m, v, tm).win) return d;
  return 0;
}
export function launchPreview(g: Game, L: NonNullable<App['launch']>): string {
  if (L.lane) { const a = g.nodes[L.from!], b = g.nodes[L.to]; return `<div class="kv"><div><small>SENDING</small><b>⬢ ${L.drones}</b></div><div><small>ARRIVES IN</small><b>${fmtT(dist(a, b) / (CFG.shipSpeed * CFG.corridorSpeed))}</b></div><div><small>STAYS</small><b>⬢ ${a.drones - L.drones}</b></div></div>`; }
  const s = shipById(g, L.ship);
  if (!s || s.at < 0) return '';
  const from = g.nodes[s.at], to = g.nodes[L.to], m = launchMods(g, L);
  const t = dist(from, to) / (CFG.shipSpeed * Math.max(0.3, 1 + (m.speed || 0))) + (m.noLoad || (!L.drones && !L.specs.length) ? 0 : CFG.loadTime);
  let out = `<div class="kv"><div><small>SENDING</small><b>⬢ ${L.drones}</b></div><div><small>ARRIVES IN</small><b>${fmtT(t)}</b></div><div><small>STAYS</small><b>⬢ ${launchPool(g, s) - L.drones}</b></div></div>`;
  if (L.specs.includes(g.cmdSpec)) out += `<p class="warnp">★ Commander aboard. If this fleet is destroyed at an enemy node they are captured, and you have ${fmtT(rescueWindow(g))} to retake that node.</p>`;
  if (to.owner === PLAYER) return out + `<p class="goodp">Reinforcement. Cargo unloads on arrival${to.kind === 'station' ? ' if a dock is free' : ''}.</p>`;
  if (!L.drones && !L.specs.length) return out + `<p class="warnp">Unmanned scout. It fully identifies the target on arrival${m.scoutReturn ? ' and flies home' : ' and is lost'}.</p>`;
  const view = viewOf(g, to);
  if (!view.v) return out + `<p class="badp"><b>Unknown forces. Battle outcome unavailable.</b></p>`;
  const r: Battle = calcBattle(g, L.drones, m, view.v, nodeMods(g, view.v)), p = r.parts;
  const atk = [`${p.drones} Drones`].concat(p.pct ? [`+${p.pct} training`] : [], p.flat ? [`+${p.flat} specialists`] : []).join(' ');
  const def = [`${p.garr} Drones`].concat(p.nat ? [`${p.nat} natural`] : [], p.struct ? [`${p.struct} structures`] : [], p.bonus ? [`${p.bonus > 0 ? '+' : ''}${p.bonus} bonuses`] : [], p.aegis ? [`${p.aegis} Aegis`] : []).join(' + ');
  out += `<div class="versus"><div><small>ATTACK</small><b>${r.atk}</b><span>${atk}</span></div><i>vs</i><div><small>DEFENCE</small><b>${r.def}</b><span>${def}</span></div></div>`;
  if (r.preKilled) out += `<p class="warnp">${r.preKilled} Drones are destroyed before landing.</p>`;
  out += r.win ? `<p class="goodp"><b>Victory expected.</b> ${r.surv} Drones survive to hold the node.</p>`
    : `<p class="badp"><b>Defeat expected.</b> Short by ${r.def - r.atk + 1}. ${to.owner === 0 ? 'All Drones are lost; the ship and specialists return.' : 'The ship is destroyed and specialists aboard are captured.'}</p>`;
  if (!view.live) out += `<p class="warnp">Based on intelligence ${fmtT(view.age)} old. The enemy may have changed.</p>`;
  else out += `<p class="dim">Based on what is there now. Reinforcements may arrive before you do.</p>`;
  return out;
}
function laneSheet(app: App): string {
  const g = app.g!, L = app.launch!, from = g.nodes[L.from!], to = g.nodes[L.to];
  if (from.owner !== PLAYER || to.owner !== PLAYER) { app.launch = null; return ''; }
  const chips = from.specs.map(i => { const sp = g.specs[i]; return `<button class="chip ${L.specs.includes(i) ? 'on' : ''}" data-a="lspec:${i}">${token(g, sp)} ${esc(sp.cmd ? 'Commander' : SPECS[sp.def].name)}</button>`; }).join('');
  const t = dist(from, to) / (CFG.shipSpeed * CFG.corridorSpeed);
  return `<div class="phead"><div><h2>${esc(from.name)} ⇄ ${esc(to.name)}</h2><small>Through the corridor · no ship, no loading</small></div><button class="btn ico" data-a="lcancel">✕</button></div>
  <div class="pbody">
    <input type="range" id="lslider" min="0" max="${from.drones}" value="${L.drones}">
    <div class="quick">${btn('lq:none', '0', { cls: 'sm' })}${btn('lq:half', 'Half', { cls: 'sm' })}${btn('lq:all', 'All', { cls: 'sm' })}</div>
    ${from.specs.length ? `<div class="chips">${chips}</div>` : ''}
    <div id="preview"><div class="kv"><div><small>SENDING</small><b>⬢ ${L.drones}</b></div><div><small>ARRIVES IN</small><b>${fmtT(t)}</b></div><div><small>STAYS</small><b>⬢ ${from.drones - L.drones}</b></div></div></div>
    <div class="row">${btn('lcancel', 'Cancel')}${btn('lconfirm', 'Send', { cls: 'hot grow' })}</div>
  </div>`;
}
function launchSheet(app: App): string {
  if (app.launch!.lane) return laneSheet(app);
  const g = app.g!, L = app.launch!, s = shipById(g, L.ship);
  if (!s || s.at < 0) { app.launch = null; return ''; }
  const from = g.nodes[s.at], to = g.nodes[L.to], pool = launchPool(g, s), dk = isDocked(g, s);
  const here = dk ? from.specs.concat(s.specs) : s.specs;
  const chips = here.map(i => { const sp = g.specs[i]; return `<button class="chip ${L.specs.includes(i) ? 'on' : ''}" data-a="lspec:${i}" ${dk ? '' : 'disabled'}>${token(g, sp)} ${esc(sp.cmd ? 'Commander' : SPECS[sp.def].name)}</button>`; }).join('');
  return `<div class="phead"><div><h2>${esc(from.name)} → ${esc(to.name)}</h2><small>${dk ? 'Docked ship' : 'Orbiting ship: it leaves with what is aboard'}</small></div><button class="btn ico" data-a="lcancel">✕</button></div>
  <div class="pbody">
    <input type="range" id="lslider" min="0" max="${pool}" value="${L.drones}" ${dk ? '' : 'disabled'}>
    <div class="quick">${btn('lq:none', '0', { cls: 'sm' })}${btn('lq:min', 'Just enough', { cls: 'sm' })}${btn('lq:half', 'Half', { cls: 'sm' })}${btn('lq:all', 'All', { cls: 'sm' })}</div>
    ${here.length ? `<div class="chips">${chips}</div><p class="dim">Up to ${slots(g, PLAYER)} specialists per ship.</p>` : ''}
    <div id="preview">${launchPreview(g, L)}</div>
    <div class="row">${btn('lcancel', 'Cancel')}${btn('lconfirm', 'Launch', { cls: 'hot grow' })}</div>
  </div>`;
}

function shipPanel(app: App, s: Ship): string {
  const g = app.g!, seen = shipSeen(g, s), to = g.nodes[s.to];
  let body = `<div class="kv"><div><small>DRONES</small><b>⬢ ${seen === 2 ? s.drones : '?'}</b></div><div><small>ARRIVES IN</small><b>${fmtT(eta(g, s, to))}</b></div><div><small>HEADING</small><b data-a="focus:${to.id}" class="link">${esc(to.name)}</b></div></div>`;
  if (s.owner === PLAYER) body = abilityDeck(g, s.specs) + body;
  if (s.owner === PLAYER) {
    if (shipMods(g, s).redirect && !s.redirected) body += btn(`redirect:${s.id}`, 'Redirect', { cls: 'wide', sub: 'Once per flight' });
    if (s.specs.length) body += `<h3>Aboard</h3>` + s.specs.map(i => specRow(g, g.specs[i], false, false)).join('');
    else body += `<p class="dim">No specialists aboard.${s.drones === 0 ? ' Unmanned.' : ''}</p>`;
  } else if (seen < 2) body += `<p class="warnp">Strength unknown. It becomes readable inside full-intelligence range, at a Sensor Array, or with Signal Analysis.</p>`;
  return `<div class="phead"><div><h2><span class="dot" style="background:${sideColor(g, s.owner)}"></span>${esc(sideName(g, s.owner))} ${s.lane ? 'convoy' : 'fleet'}</h2><small>${s.lane ? 'In a corridor' : 'In flight'}</small></div><button class="btn ico" data-a="close">✕</button></div><div class="pbody">${body}</div>`;
}

export function panel(app: App): string {
  const g = app.g!;
  if (app.launch) return launchSheet(app);
  if (!app.sel) return '';
  if (app.sel.type === 'ship') { const s = shipById(g, app.sel.id); if (!s || s.at >= 0 || !shipSeen(g, s)) { app.sel = null; return ''; } return shipPanel(app, s); }
  const n = g.nodes[app.sel.id], k = known(g, n);
  const sub = `${n.citadel ? 'Citadel' : n.kind === 'planet' ? ['Small', 'Medium', 'Large'][n.size] + ' planet' : n.home ? 'Home station' : 'Station'} · ${k.tier === 'detected' ? 'Unidentified' : k.owner === 0 ? 'Neutral' : esc(sideName(g, k.owner))}`;
  const col = k.tier === 'detected' ? '#56617c' : k.owner === 0 ? '#8f95a6' : sideColor(g, k.owner);
  return `<div class="phead"><div><h2><span class="dot" style="background:${col}"></span>${esc(n.name)}</h2><small>${sub}</small></div><button class="btn ico" data-a="close">✕</button></div>${n.owner === PLAYER ? ownNode(app, n) : foreignNode(app, n)}`;
}

// ------------------------------------------------------------------ global menu
export function menu(app: App): string {
  const g = app.g!, side = g.sides[PLAYER];
  const tabs: [string, string][] = [['specs', 'Specialists'], ['relics', 'Relics'], ['research', 'Research'], ['intel', 'Coalition'], ['log', 'Log'], ['sys', 'Run']];
  let body = '';
  if (app.menu === 'specs') {
    const mine = g.specs.filter(s => s.owner === PLAYER).sort((a, b) => (a.cmd ? -1 : 0) - (b.cmd ? -1 : 0));
    body = mine.map(sp => specRow(g, sp, true)).join('') || '<p class="dim">No specialists yet.</p>';
  } else if (app.menu === 'relics') {
    body = side.relics.map(r => `<div class="relic ${RELICS[r].rarity}"><b>${RELICS[r].name}</b><small>${RELICS[r].rarity}</small><p>${RELICS[r].desc}</p></div>`).join('') || '<p class="dim">No relics yet. Events, Warlords and ancient sites yield them.</p>';
  } else if (app.menu === 'research') {
    const labs = g.nodes.filter(n => n.owner === PLAYER && (n.b.lab || n.b.slab));
    body = `<p class="dim">${labs.length ? 'Labs: ' + labs.map(n => `<span class="link" data-a="focus:${n.id}">${esc(n.name)}${n.research ? ` (${TECHS[n.research].name})` : ' (idle)'}</span>`).join(', ') : 'Build a Research Lab on a planet or station to begin.'}</p>`;
    let last = '';
    for (const id in TECHS) { const t = TECHS[id]; if (t.branch !== last) { body += `<h3>${t.branch}</h3>`; last = t.branch; } const have = side.techs.includes(id), p = side.techProg[id]; body += `<div class="tech ${have ? 'done' : ''}"><b>${have ? '✓ ' : ''}${t.name}</b><small>${t.desc}${p !== undefined ? ` · ${Math.round((p / TECH_TIME[t.tier]) * 100)}%` : ''}</small></div>`; }
  } else if (app.menu === 'intel') {
    const a = ARCHONS[g.sides[g.archon].fac], m = g.mob;
    body = `<div class="fac" style="--c:#e07aa0"><b>✦ ${a.name} ${a.title}</b><p>${a.desc}</p><p>Mobilization stage ${m.stage}/5${m.surge ? ` · total war +${m.surge}` : ''} (${Math.round(m.prog * 100)}% to the next). Each stage enlarges Coalition reserves and offensives and gives every faction new technology. Capturing enemy nodes sets it back; a captured Warlord removes a whole stage.</p><p>Citadel Aegis: ${aegis(g, g.nodes[g.citadel])} (${g.factions.filter(o => !g.sides[o].broken).length} layers).</p></div>`;
    for (const o of g.factions) {
      const s = g.sides[o], f = FACTIONS[s.fac];
      const knownNodes = g.nodes.filter(n => g.intel[n.id].snap?.owner === o || (g.vis[n.id] === 2 && n.owner === o));
      const met = knownNodes.length > 0 || s.broken;
      body += met ? `<div class="fac" style="--c:${f.color}"><b>${f.name}${s.broken ? ' · BROKEN' : ''}</b><p>${f.desc}</p><p>${f.tell}</p><p class="dim">Known nodes: ${knownNodes.length} · Technology fielded: ${s.techs.map(t => TECHS[t].name).join(', ') || 'none'}</p>${knownNodes.filter(n => n.capital).map(n => `<p class="link" data-a="focus:${n.id}">♛ Capital located: ${esc(n.name)}</p>`).join('')}</div>`
        : `<div class="fac" style="--c:#5d6875"><b>Unidentified faction</b><p class="dim">Not yet encountered.</p></div>`;
    }
  } else if (app.menu === 'log') {
    body = g.log.slice().reverse().map(l => `<div class="logl ${l.kind}" ${l.node >= 0 ? `data-a="focus:${l.node}"` : ''}><small>${fmtT(l.t)}</small>${esc(l.msg)}</div>`).join('');
  } else {
    const st = g.stats;
    body = `<div class="kv"><div><small>SEED</small><b>${g.seed}</b></div><div><small>THREAT</small><b>${g.threat}</b></div><div><small>NODES</small><b>${g.nodes.filter(n => n.owner === PLAYER).length}</b></div></div>
      <p class="dim">Captures ${st.captures} · Nodes lost ${st.nodesLost} · Drones lost ${st.dronesLost} · Ships lost ${st.shipsLost}</p>
      <p class="dim">The run saves automatically to this device.</p>
      ${btn('help', 'How to play', { cls: 'wide' })}${btn('abandon', 'Abandon run', { cls: 'wide' })}`;
  }
  return `<div class="sheet"><div class="phead"><div class="tabs">${tabs.map(([k, v]) => `<button data-a="menu:${k}" class="${app.menu === k ? 'on' : ''}">${v}</button>`).join('')}</div><button class="btn ico" data-a="menu:">✕</button></div><div class="pbody">${body}</div></div>`;
}

// ------------------------------------------------------------------ choices and end screen
export function modal(app: App): string {
  const g = app.g!;
  if (g.result) {
    const st = g.stats, win = g.result === 'win';
    return `<div class="modal end ${win ? 'win' : 'lose'}"><h1>${win ? 'Victory' : 'Defeat'}</h1><p>${esc(g.resultWhy)}</p>
      <div class="kv"><div><small>TIME</small><b>${fmtT(g.t)}</b></div><div><small>CAPTURES</small><b>${st.captures}</b></div><div><small>WARLORDS</small><b>${st.warlords}</b></div></div>
      <p class="dim">Nodes lost ${st.nodesLost} · Drones built ${st.dronesMade} · Drones lost ${st.dronesLost} · Ships lost ${st.shipsLost}<br>Specialists ${st.specs} · Relics ${st.relics} · Technologies ${st.techs} · Events ${st.events} · Ultanium mined ${Math.round(st.ultMade)}</p>
      ${win && g.threat < 5 ? `<p class="goodp">Threat level ${g.threat + 1} unlocked.</p>` : ''}
      <div class="row">${btn('title', 'Main menu')}${btn('again', 'New run', { cls: 'hot grow' })}</div></div>`;
  }
  const p = g.pending[0];
  if (!p) return '';
  let cards = '';
  if (p.kind === 'draft') {
    cards = p.opts.map((o: { base: string; arch: string }, i: number) => { const b = SPECS[o.base], a = ARCHS[o.arch]; return `<button class="card" data-a="choose:${i}">${defTok(o.base)}<h3>${b.name} ${a.name}</h3><small>${a.blurb}</small><p>${b.passive}</p><p>${a.passive}</p><p><b>${b.active!.name}:</b> ${b.active!.desc}</p><p><b>${a.a.name}:</b> ${a.a.desc}</p><p class="dim"><b>Level 3, ${a.b.name}:</b> ${a.b.desc}</p></button>`; }).join('');
    return `<div class="modal"><h2>Choose your Commander</h2><p class="dim">Your Commander is your strongest specialist. If they are captured you have ${fmtT(CFG.rescueSecs)} to retake the node holding them, or the run ends.</p><div class="cards">${cards}</div></div>`;
  }
  if (p.kind === 'spec') {
    cards = p.opts.map((id: string, i: number) => { const d = SPECS[id]; return `<button class="card" data-a="choose:${i}">${defTok(id)}<h3>${d.name}</h3><small>${d.role}</small><p>${d.passive}</p>${d.active ? `<p><b>${d.active.name}</b> (${d.active.cd}s): ${d.active.desc}</p>` : ''}</button>`; }).join('');
    return `<div class="modal"><h2>${esc(p.title)}</h2><p class="dim">One of them will join you. The others stay behind.</p><div class="cards">${cards}</div></div>`;
  }
  if (p.kind === 'relic') {
    cards = p.opts.map((id: string, i: number) => { const r = RELICS[id]; return `<button class="card relic ${r.rarity}" data-a="choose:${i}"><h3>${r.name}</h3><small>${r.rarity}</small><p>${r.desc}</p></button>`; }).join('');
    return `<div class="modal"><h2>Choose a relic</h2><p class="dim">Relics last for the whole run.</p><div class="cards">${cards}</div></div>`;
  }
  if (p.kind === 'perk') {
    cards = p.opts.map((id: string, i: number) => { const r = perkDef(id); return `<button class="card" data-a="choose:${i}"><h3>${r.name}</h3><p>${r.desc}</p></button>`; }).join('');
    return `<div class="modal"><h2>${esc(p.title)}</h2>${g.specs[g.cmdSpec].cmd!.lvl === 3 ? `<p class="goodp">New ability unlocked: ${ARCHS[g.specs[g.cmdSpec].cmd!.arch].b.name}</p>` : ''}<div class="cards">${cards}</div></div>`;
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
  return `<div class="title"><h1>SPACE<span>NODES</span></h1><p class="tag">Build an empire. Assemble your specialists. Take the Citadel before the Coalition takes you.</p>
    ${app.hasSave ? btn('continue', 'Continue run', { cls: 'wide hot' }) : ''}
    ${btn('newrun', 'New run', { cls: `wide ${app.hasSave ? '' : 'hot'}` })}
    <div class="lv"><small>THREAT LEVEL</small><div class="chips">${levels}</div><small class="dim">${app.newThreat === 0 ? 'Standard campaign.' : `Tougher garrisons and faster mobilization (+${app.newThreat * 8}% / +${app.newThreat * 5}%).`} Win to unlock the next.</small></div>
    ${btn('help', 'How to play', { cls: 'wide' })}
    <small class="dim">Runs ${m.runs} · Wins ${m.wins}</small></div>`;
}
export function help(): string {
  return `<div class="modal help"><h2>How to play</h2>
  <p><b>Goal.</b> Capture <b>The Citadel</b> ✦ at the far end of the map. You lose if your <b>Commander</b> ★ is captured and not rescued within 150 seconds.</p>
  <p><b>Nodes.</b> Planets ● mine Ultanium ◆. Stations ⬡ build Drones ⬢ and ships ▲. Everything moves by ship: tap one of your nodes, press <b>Send</b> on a ship, then tap a destination. Or tap a target and pick where to send from.</p>
  <p><b>Combat is arithmetic.</b> Attack minus defence. The launch sheet shows the exact outcome for what you can currently see. Ties go to the defender.</p>
  <p><b>Vision.</b> The clear circle around your nodes is full intelligence; the dimmer ring only detects that something is there. A node marked <b>?</b> has unknown forces. An unmanned ship sent to it reveals everything and is lost.</p>
  <p><b>Economy.</b> Generators power mines (2 each). Mines need a Drone each to run. A node builds one thing at a time, and a station that is building is not making Drones. Research has its own lane.</p>
  <p><b>Specialists.</b> Every neutral planet you capture lets you recruit 1 of 3. They stand as statues where they are posted and only work there, three to a node or ship. Their active abilities are the first thing shown when you tap a node or ship. Move them between a node and a ship parked there with ▲ ▼. Hold (or hover) a statue for details.</p>
  <p><b>Corridors.</b> Link two of your nodes from the Build tab. Drones and specialists then cross at double speed without a ship. A corridor collapses if either end is captured.</p>
  <p><b>Drone cap.</b> Grows with every planet and station you hold.</p>
  <p><b>The Coalition.</b> Three factions and an Archon. The mobilization meter fills with time; each stage brings larger offensives. Capturing enemy nodes sets it back. Capture a faction's capital ♛ to take its Warlord, gain a signature specialist and a rare relic, and strip a layer of the Citadel's Aegis.</p>
  <p><b>Controls.</b> Drag, or use the arrow keys or WASD, to scroll the map. Pinch or scroll to zoom. Space pauses, 1/2/3 set speed, M opens the menu, H returns home, Esc cancels.</p>
  ${btn('helpclose', 'Got it', { cls: 'wide hot' })}</div>`;
}
void STRUCT_DEF;
