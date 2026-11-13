import type { Game, GNode, Ship, Spec, Mods, Fx, Task, Side } from './types';
import { PLAYER } from './types';
import { CFG, BUILD, STRUCT_DEF } from './config';
import { SPECS, PLANET_POOL, RELICS, TECHS, TECH_COST, TECH_TIME, TECH_OPS, PERKS, EVENTS, FACTIONS, ARCHONS } from './content';
import { sideMods, nodeMods, shipMods } from './mods';
import { rnd, ri, pick, sample } from './rng';

export const dist = (a: { x: number; y: number }, b: { x: number; y: number }) => Math.hypot(a.x - b.x, a.y - b.y);
export const shipById = (g: Game, id: number) => g.ships.find(s => s.id === id);
export const BIG = 1e9;

export function log(g: Game, msg: string, kind: 'info' | 'good' | 'bad' | 'warn' = 'info', node = -1) {
  g.log.push({ t: g.t, msg, kind, node });
  if (g.log.length > 150) g.log.shift();
}

export function sideName(g: Game, o: number): string {
  const s = g.sides[o];
  if (!s) return o === 0 ? 'Neutral' : 'Automata';
  if (s.kind === 'player') return 'You';
  return s.kind === 'faction' ? FACTIONS[s.fac].name : ARCHONS[s.fac].name;
}
export function sideColor(g: Game, o: number): string {
  const s = g.sides[o];
  if (!s) return '#9aa3ad';
  if (s.kind === 'player') return '#3ddc97';
  return s.kind === 'faction' ? FACTIONS[s.fac].color : '#ff5fa2';
}

// ---------------------------------------------------------------- specialists
export function addSpec(g: Game, def: string, owner: number, nodeId: number): Spec {
  const sp: Spec = { id: g.specs.length, def, owner, node: nodeId, ship: -1, held: 0, cd: {}, cmd: null, shield: 0 };
  g.specs.push(sp);
  g.nodes[nodeId].specs.push(sp.id);
  g.modV++;
  return sp;
}
export function detach(g: Game, sp: Spec) {
  if (sp.node >= 0) {
    const n = g.nodes[sp.node];
    n.specs = n.specs.filter(i => i !== sp.id);
    n.prisoners = n.prisoners.filter(i => i !== sp.id);
  }
  if (sp.ship >= 0) { const s = shipById(g, sp.ship); if (s) s.specs = s.specs.filter(i => i !== sp.id); }
  sp.node = -1; sp.ship = -1;
}
export function toNode(g: Game, sp: Spec, n: GNode, prisonerOf = 0) {
  detach(g, sp);
  sp.node = n.id; sp.held = prisonerOf;
  (prisonerOf ? n.prisoners : n.specs).push(sp.id);
  g.modV++;
}
export function toShip(g: Game, sp: Spec, s: Ship) {
  detach(g, sp);
  sp.ship = s.id; s.specs.push(sp.id);
}
export const slots = (g: Game, owner: number) => CFG.specSlots + (sideMods(g, owner).slots || 0);
export const specName = (sp: Spec) => sp.name || SPECS[sp.def].name;

export function homeOf(g: Game, owner: number): GNode | null {
  const own = g.nodes.filter(n => n.owner === owner);
  if (!own.length) return null;
  return own.find(n => n.home || n.capital || n.citadel) || own.find(n => n.kind === 'station') || own[0];
}

// ---------------------------------------------------------------- drones and caps
export function totalDrones(g: Game, owner: number): number {
  let t = 0;
  for (const n of g.nodes) if (n.owner === owner) t += n.drones;
  for (const s of g.ships) if (s.owner === owner) t += s.drones;
  return t;
}
export function droneCap(g: Game, owner: number): number {
  const side = g.sides[owner];
  if (!side) return BIG;
  const m = sideMods(g, owner).droneCap || 0;
  return side.kind === 'player' ? CFG.droneCap + m : side.capBase + 14 * (g.mob.stage + g.mob.surge) + m;
}

// ---------------------------------------------------------------- vision
export function radii(g: Game, n: GNode): [number, number] {
  const tm = nodeMods(g, n);
  const f = 1 + (tm.fov || 0) + 0.25 * (n.b.relay || 0);
  const i = n.kind === 'planet' ? CFG.fovInner.planet[n.size] : CFG.fovInner.station;
  const o = n.kind === 'planet' ? CFG.fovOuter.planet[n.size] : CFG.fovOuter.station;
  return [i * f, o * f * (1 + 0.3 * (n.b.sensor || 0))];
}
export function updateVision(g: Game) {
  const mine = g.nodes.filter(n => n.owner === PLAYER).map(n => ({ n, r: radii(g, n) }));
  for (const n of g.nodes) {
    let v = 0;
    if (n.owner === PLAYER) v = 2;
    else {
      for (const p of mine) {
        const d = dist(n, p.n);
        if (d <= p.r[0]) { v = 2; break; }
        if (d <= p.r[1]) v = 1;
      }
      if (v < 2 && n.buffs.some(b => b.k === 'scan' && b.until > g.t)) v = 2;
    }
    g.vis[n.id] = v;
    const it = g.intel[n.id];
    if (v > it.seen) it.seen = v;
    if (v === 2) {
      it.t = g.t;
      it.snap = { owner: n.owner, drones: n.drones, nat: n.nat, b: { ...n.b }, specs: n.specs.slice(), prisoners: n.prisoners.slice(), buffs: n.buffs.slice() };
    }
  }
}
/** 0 = unseen, 1 = seen, 2 = strength known. */
export function shipSeen(g: Game, s: Ship): number {
  if (s.owner === PLAYER) return 2;
  const stealth = (shipMods(g, s).stealth || 0) > 0 || (s.owner > 1 && (sideMods(g, g.archon).stealth || 0) > 0);
  let best = 0;
  for (const n of g.nodes) {
    if (n.owner !== PLAYER) continue;
    const [ri2, ro] = radii(g, n), d = dist(s, n);
    if (d <= ri2) return 2;
    if (d <= ro && !stealth) best = 1;
  }
  if (best && ((sideMods(g, PLAYER).sigint || 0) > 0 || (s.to >= 0 && g.nodes[s.to].owner === PLAYER && g.nodes[s.to].b.sensor))) return 2;
  return best;
}
/** What the player may know about a node: live if identified, else the last snapshot. */
export function viewOf(g: Game, n: GNode): { live: boolean; age: number; v: null | GNode } {
  if (g.vis[n.id] === 2) return { live: true, age: 0, v: n };
  const it = g.intel[n.id];
  if (!it.snap) return { live: false, age: 0, v: null };
  return { live: false, age: g.t - it.t, v: { ...n, ...it.snap } as GNode };
}

// ---------------------------------------------------------------- economy
export function mineSlots(g: Game, n: GNode, tm?: Mods) {
  return CFG.mineSlots[n.size] + ((tm || nodeMods(g, n)).mineSlots || 0);
}
export function natMax(g: Game, n: GNode, tm?: Mods) {
  const m = tm || nodeMods(g, n);
  return (n.kind === 'planet' ? CFG.natBySize[n.size] + 4 * (n.b.shield || 0) : 0) + (n.kind === 'planet' ? m.natMax || 0 : 0);
}
export interface Ops { mines: number; powered: number; on: number; out: number; cap: number; resNeed: number; resOn: boolean; short: number }
export function nodeOps(g: Game, n: GNode, tm?: Mods): Ops {
  const m = tm || nodeMods(g, n);
  const side = g.sides[n.owner];
  const r: Ops = { mines: 0, powered: 0, on: 0, out: 0, cap: 0, resNeed: 0, resOn: false, short: 0 };
  let avail = n.drones;
  const lab = (n.b.lab || 0) + (n.b.slab || 0) > 0;
  if (n.research && lab && side) r.resNeed = TECH_OPS[TECHS[n.research].tier];
  if (r.resNeed && n.resFirst) { r.resOn = avail >= r.resNeed; if (r.resOn) avail -= r.resNeed; }
  if (n.kind === 'planet') {
    r.mines = Math.min(n.b.mine || 0, mineSlots(g, n, m));
    r.powered = Math.min(r.mines, (n.b.gen || 0) * CFG.minesPerGen);
    r.on = m.noOps ? r.powered : Math.min(r.powered, avail);
    if (!m.noOps) avail -= r.on;
    if (m.offline) r.on = 0;
    let out = 0;
    for (let i = 0; i < r.on; i++) out += CFG.mineBase * CFG.sizeMult[n.size] * CFG.mineDim[Math.min(i, 4)];
    r.cap = (CFG.capBySize[n.size] + (m.cap || 0)) * (1 + (m.capPct || 0));
    r.out = Math.min(out * (1 + (m.mine || 0)), r.cap);
  }
  if (r.resNeed && !n.resFirst) r.resOn = avail >= r.resNeed;
  const need = (m.noOps ? 0 : r.powered) + r.resNeed;
  r.short = Math.max(0, need - n.drones);
  return r;
}
export function sideIncome(g: Game, owner: number): number {
  const side = g.sides[owner];
  if (!side) return 0;
  const sm = sideMods(g, owner);
  let inc = (side.kind === 'player' ? CFG.baseIncome : 3) + (sm.incomeFlat || 0);
  for (const n of g.nodes) if (n.owner === owner && n.kind === 'planet') inc += nodeOps(g, n).out;
  if (sm.prisonInc) inc += sm.prisonInc * g.specs.filter(s => s.held === owner).length;
  return inc;
}

// ---------------------------------------------------------------- building
export function buildCount(n: GNode, id: string) {
  return (n.b[id] || 0) + (n.lane && n.lane.kind === 'build' && n.lane.id === id ? 1 : 0) + n.queue.filter(q => q.kind === 'build' && q.id === id).length;
}
export function buildMax(g: Game, n: GNode, id: string) {
  if (id === 'mine') return mineSlots(g, n);
  if (id === 'gen') return Math.ceil(mineSlots(g, n) / CFG.minesPerGen);
  return BUILD[id].max;
}
export function canBuild(g: Game, n: GNode, id: string): string | null {
  const d = BUILD[id], side = g.sides[n.owner];
  if (!d || !side) return 'Not available';
  if (d.on !== n.kind) return 'Wrong node type';
  if (d.tech && !side.techs.includes(d.tech)) return `Needs ${TECHS[d.tech].name}`;
  if (buildCount(n, id) >= buildMax(g, n, id)) return 'Maximum built';
  if (id === 'mine' && buildCount(n, 'mine') >= buildCount(n, 'gen') * CFG.minesPerGen) return 'Needs another Generator';
  if (n.queue.length >= 4) return 'Queue full';
  if (side.ult < d.cost) return 'Not enough Ultanium';
  return null;
}
function enqueue(n: GNode, t: Task) { if (!n.lane) n.lane = t; else n.queue.push(t); }
export function startBuild(g: Game, n: GNode, id: string): string | null {
  const err = canBuild(g, n, id);
  if (err) return err;
  const d = BUILD[id];
  g.sides[n.owner].ult -= d.cost;
  enqueue(n, { kind: 'build', id, left: d.time, total: d.time, cost: d.cost });
  return null;
}
export function shipCost(g: Game, owner: number) { return Math.round(CFG.shipCost * (1 - Math.min(0.6, sideMods(g, owner).shipCost || 0))); }
export function startShip(g: Game, n: GNode): string | null {
  const side = g.sides[n.owner];
  if (!side || n.kind !== 'station') return 'Ships are built at stations';
  if (n.queue.length >= 4) return 'Queue full';
  const c = shipCost(g, n.owner);
  if (side.ult < c) return 'Not enough Ultanium';
  side.ult -= c;
  enqueue(n, { kind: 'ship', id: 'ship', left: CFG.shipTime, total: CFG.shipTime, cost: c });
  return null;
}
export function cancelTask(g: Game, n: GNode, idx: number) {
  const t = idx < 0 ? n.lane : n.queue[idx];
  if (!t) return;
  g.sides[n.owner].ult += t.cost;
  if (idx < 0) n.lane = n.queue.shift() || null; else n.queue.splice(idx, 1);
}
export function newShip(g: Game, owner: number, n: GNode): Ship {
  const s: Ship = { id: g.nextId++, owner, seq: g.nextId++, at: n.id, from: n.id, to: -1, x: n.x, y: n.y, drones: 0, specs: [], buffs: [], loadUntil: 0, redirected: false, back: false, off: false };
  g.ships.push(s);
  return s;
}
export function docks(n: GNode) { return n.kind === 'planet' ? 99 : 1 + (n.b.dock || 0); }
export function isDocked(g: Game, s: Ship): boolean {
  if (s.at < 0) return false;
  const n = g.nodes[s.at];
  if (n.kind === 'planet' || s.owner !== PLAYER) return true;
  const here = g.ships.filter(o => o.at === n.id && o.owner === s.owner).sort((a, b) => a.seq - b.seq);
  return here.indexOf(s) < docks(n);
}

// ---------------------------------------------------------------- research
export function techCost(g: Game, owner: number, id: string) {
  return Math.round(TECH_COST[TECHS[id].tier] * (1 - (sideMods(g, owner).techCost || 0)));
}
export function techAvailable(g: Game, owner: number): string[] {
  const side = g.sides[owner];
  return Object.keys(TECHS).filter(id => !side.techs.includes(id) && (!TECHS[id].pre || side.techs.includes(TECHS[id].pre!)));
}
export function startResearch(g: Game, n: GNode, id: string): string | null {
  const side = g.sides[n.owner];
  if (!((n.b.lab || 0) + (n.b.slab || 0))) return 'Needs a Research Lab';
  if (!techAvailable(g, n.owner).includes(id)) return 'Not available';
  if (g.nodes.some(o => o.owner === n.owner && o.id !== n.id && o.research === id)) return 'Already being researched elsewhere';
  if (side.techProg[id] === undefined) {
    const c = techCost(g, n.owner, id);
    if (side.ult < c) return 'Not enough Ultanium';
    side.ult -= c; side.techProg[id] = 0;
  }
  n.research = id;
  return null;
}
export function grantTech(g: Game, owner: number, id: string) {
  const side = g.sides[owner];
  if (side.techs.includes(id)) return;
  side.techs.push(id); delete side.techProg[id]; g.modV++;
  for (const n of g.nodes) if (n.owner === owner && n.research === id) n.research = null;
  if (owner === PLAYER) { g.stats.techs++; log(g, `Research complete: ${TECHS[id].name}`, 'good'); }
  else log(g, `${sideName(g, owner)} fielded ${TECHS[id].name}`, 'warn');
}

// ---------------------------------------------------------------- combat
export interface Battle {
  sent: number; preKilled: number; atk: number; def: number; win: boolean; surv: number;
  parts: { drones: number; pct: number; flat: number; garr: number; nat: number; struct: number; bonus: number; aegis: number };
}
export function aegis(g: Game, n: GNode): number {
  if (!n.citadel) return 0;
  const layers = g.factions.filter(o => !g.sides[o].broken).length;
  return Math.round(layers * CFG.aegisPerLayer * (1 + (sideMods(g, g.archon).aegisPct || 0)));
}
export function calcBattle(g: Game, drones: number, sm: Mods, n: GNode, tm: Mods): Battle {
  const pk = Math.min(0.6, (tm.preKill || 0) + (tm.ambush || 0));
  const preKilled = Math.floor(drones * pk);
  const d = drones - preKilled;
  const pct = Math.floor(d * (sm.atkPct || 0));
  const flat = (sm.atk || 0) + Math.min(sm.atkPer8 || 0, Math.floor(d / 8));
  const atk = d + pct + flat;
  const garr = n.drones * (tm.dbl ? 2 : 1);
  const nat = sm.ignNat ? 0 : Math.floor(n.nat);
  let raw = 0;
  for (const k in STRUCT_DEF) raw += STRUCT_DEF[k] * (n.b[k] || 0);
  const struct = sm.ignStruct ? 0 : Math.round(raw * (1 + (tm.structDef || 0)) * (1 - Math.min(0.75, sm.structHalf || 0)));
  const bonus = Math.round((tm.def || 0) - (n.owner === 0 ? sm.vsNeutral || 0 : 0));
  const ae = aegis(g, n);
  const def = Math.max(0, garr + nat + struct + bonus + ae);
  const win = atk > def || (atk === def && (sm.ties || 0) > 0 && d > 0);
  let surv = 0;
  if (win) {
    surv = Math.max(1, Math.min(d, atk - def));
    surv = Math.max(1, Math.min(d, Math.round(surv * (1 + (sm.surv || 0)))));
    if (tm.martyr) surv = Math.ceil(surv / 2);
  }
  return { sent: drones, preKilled, atk, def, win, surv, parts: { drones: d, pct, flat, garr, nat, struct, bonus, aegis: ae } };
}

function captureSpecs(g: Game, ids: number[], at: GNode, captor: number) {
  const medic = ids.map(i => g.specs[i]).find(sp => sp.def === 'medic' && sp.shield <= g.t && !sp.held);
  for (const id of ids.slice()) {
    const sp = g.specs[id];
    if (medic) {
      const h = homeOf(g, sp.owner);
      if (h && h.id !== at.id) { toNode(g, sp, h); continue; }
    }
    toNode(g, sp, at, captor || -1);
    if (sp.owner === PLAYER) { g.stats.specsLost++; log(g, `${specName(sp)} was captured at ${at.name}`, 'bad', at.id); }
  }
  if (medic) { medic.shield = g.t + 180; if (medic.owner === PLAYER) log(g, `The Medic got your specialists out of ${at.name}`, 'good', at.id); }
}
export function destroyShip(g: Game, s: Ship, at: GNode | null, captor: number) {
  if (s.specs.length) {
    if (at) captureSpecs(g, s.specs, at, captor);
    else for (const id of s.specs.slice()) { const sp = g.specs[id]; const h = homeOf(g, sp.owner); if (h) toNode(g, sp, h); else { detach(g, sp); sp.owner = -1; } }
  }
  g.ships = g.ships.filter(o => o !== s);
  if (s.owner === PLAYER) g.stats.shipsLost++;
}

export function breakFaction(g: Game, owner: number, n: GNode) {
  const side = g.sides[owner], f = FACTIONS[side.fac];
  side.broken = true; g.modV++;
  g.mob.stage = Math.max(1, g.mob.stage - 1); g.mob.prog = 0;
  g.offs = g.offs.filter(o => o.owner !== owner);
  log(g, `${f.warlord} is your prisoner. The ${f.name} is broken and a Citadel Aegis layer falls.`, 'good', n.id);
  const sig = addSpec(g, f.sig, PLAYER, n.id);
  log(g, `${specName(sig)} joins you from the ${f.name}.`, 'good', n.id);
  offerRelic(g, 'rare', n.id);
  addXp(g, 10);
  g.stats.warlords++;
}

export function capture(g: Game, n: GNode, s: Ship, r: Battle, sm: Mods) {
  const old = n.owner, now = s.owner;
  const killed = n.drones;
  if (sm.salvage && g.sides[now]) g.sides[now].ult += Math.round(sm.salvage * killed);
  if (old !== 0) captureSpecs(g, n.specs, n, now);
  for (const o of g.ships.filter(o => o.at === n.id && o.owner === old && o !== s)) destroyShip(g, o, n, now);
  for (const id of n.prisoners.slice()) { const sp = g.specs[id]; if (sp.owner === now) { toNode(g, sp, n); if (now === PLAYER) log(g, `${specName(sp)} was rescued at ${n.name}`, 'good', n.id); } else sp.held = now; }
  if (old !== 0 && n.kind === 'station') {
    const att = Object.keys(n.b).filter(k => k !== 'dock' && n.b[k] > 0);
    if (att.length) { const k = pick(g, att); n.b[k]--; }
  }
  const wasCapital = n.capital && g.sides[old]?.kind === 'faction' && !g.sides[old].broken;
  n.owner = now; n.drones = r.surv; n.nat = 0; n.lane = null; n.queue = []; n.research = null; n.prod = 0; n.hold = null; n.conv = null; n.buffs = [];
  s.at = n.id; s.to = -1; s.drones = 0; s.x = n.x; s.y = n.y; s.buffs = []; s.seq = g.nextId++; s.off = false;
  const side = g.sides[now];
  if (side) {
    const m = sideMods(g, now);
    if (m.refund && g.t >= side.refundT) { n.drones += r.sent - r.surv; side.refundT = g.t + m.refund; if (now === PLAYER) log(g, 'Phoenix Clause refunds your losses', 'good', n.id); }
    if (m.capShield) n.buffs.push({ k: 'def', v: m.capShield, until: g.t + 60 });
    if (m.capUlt) side.ult += m.capUlt;
  }
  g.modV++;
  if (now === PLAYER) {
    g.stats.captures++;
    log(g, `Captured ${n.name} with ${r.surv} Drones left`, 'good', n.id);
    addXp(g, s.specs.includes(g.cmdSpec) ? 4 : 2);
    if (g.sides[old]) g.mob.prog = Math.max(0, g.mob.prog - CFG.captureSetback);
    if (wasCapital) breakFaction(g, old, n);
    if (n.offer) { n.offer = false; offerSpec(g, n.id); }
    if (n.event) g.pending.push({ kind: 'event', node: n.id, opts: [], title: EVENTS[n.event].name, event: n.event });
    if (n.citadel) { g.result = 'win'; g.resultWhy = `${ARCHONS[g.sides[g.archon].fac].name} is your prisoner. The Coalition is finished.`; }
  } else if (old === PLAYER) {
    g.stats.nodesLost++;
    log(g, `${n.name} fell to ${sideName(g, now)}`, 'bad', n.id);
  }
  updateVision(g);
}

function repel(g: Game, n: GNode, s: Ship, r: Battle, sm: Mods) {
  let dmg = r.atk;
  if (!sm.ignNat) { const nl = Math.min(n.nat, dmg); n.nat -= nl; dmg -= nl; }
  dmg -= r.parts.struct + Math.max(0, r.parts.bonus + r.parts.aegis);
  const loss = Math.max(0, Math.min(n.drones, Math.ceil(dmg / (r.parts.garr > n.drones ? 2 : 1))));
  n.drones -= loss;
  if (s.owner === PLAYER) { log(g, `Attack on ${n.name} failed: ${r.atk} against ${r.def}`, 'bad', n.id); g.stats.dronesLost += s.drones; }
  if (n.owner === PLAYER) log(g, `${n.name} held against ${sideName(g, s.owner)} (${r.atk} against ${r.def})`, 'good', n.id);
  s.drones = 0; s.buffs = [];
  const origin = g.nodes[s.from];
  if (n.owner === 0 && g.sides[s.owner]) {
    const back = origin && origin.owner === s.owner ? origin : homeOf(g, s.owner);
    if (back) { s.to = back.id; s.from = n.id; s.back = true; s.x = n.x; s.y = n.y; return; }
  }
  destroyShip(g, s, g.sides[n.owner] ? n : null, n.owner);
}

export function arrive(g: Game, s: Ship) {
  const n = g.nodes[s.to];
  s.x = n.x; s.y = n.y;
  if (n.owner === s.owner) { s.at = n.id; s.to = -1; s.buffs = []; s.seq = g.nextId++; s.back = false; s.off = false; return; }
  if (s.drones <= 0) {
    if (s.owner === PLAYER && !s.specs.length && !s.back) {
      n.buffs.push({ k: 'scan', v: 1, until: g.t + 20 });
      updateVision(g);
      const origin = g.nodes[s.from];
      if (sideMods(g, PLAYER).scoutReturn && origin.owner === PLAYER) { log(g, `Scout identified ${n.name} and is returning`, 'info', n.id); s.to = origin.id; s.from = n.id; s.back = true; return; }
      log(g, `Scout identified ${n.name} and was lost`, 'info', n.id);
    }
    destroyShip(g, s, g.sides[n.owner] ? n : null, n.owner);
    return;
  }
  const sm = shipMods(g, s), tm = nodeMods(g, n);
  const r = calcBattle(g, s.drones, sm, n, tm);
  n.buffs = n.buffs.filter(b => b.k !== 'ambush');
  if (s.owner === PLAYER) { g.stats.battles++; }
  if (r.win) { if (s.owner === PLAYER) g.stats.dronesLost += r.sent - r.surv; capture(g, n, s, r, sm); }
  else repel(g, n, s, r, sm);
}

// ---------------------------------------------------------------- launching
export function canTarget(g: Game, to: GNode): boolean {
  return to.owner === PLAYER || g.vis[to.id] >= 1 || ((sideMods(g, PLAYER).remember || 0) > 0 && g.intel[to.id].seen >= 1);
}
export function shipSpeed(g: Game, s: Ship) { return CFG.shipSpeed * Math.max(0.3, 1 + (shipMods(g, s).speed || 0)); }
export function eta(g: Game, s: Ship, to: GNode) { return dist(s, to) / shipSpeed(g, s); }

export function launch(g: Game, s: Ship, to: GNode, drones: number, specIds: number[]): string | null {
  if (s.at < 0) return 'Ship is in flight';
  if (s.loadUntil > 0) return 'Ship is loading';
  const n = g.nodes[s.at];
  if (to.id === n.id) return 'Already here';
  if (n.owner !== s.owner) return 'Not your node';
  if (s.owner === PLAYER && !canTarget(g, to)) return 'Target is not in detection range';
  const docked = isDocked(g, s);
  if (!docked) { drones = s.drones; specIds = s.specs.slice(); }
  const pool = n.drones + (docked ? s.drones : 0);
  drones = Math.max(0, Math.min(Math.floor(drones), docked ? pool : s.drones));
  const here = docked ? n.specs.concat(s.specs) : s.specs.slice();
  specIds = specIds.filter(i => here.includes(i));
  const cap = slots(g, s.owner);
  if (specIds.length > cap) return `A ship carries at most ${cap} specialists`;
  if (docked) {
    const stay = here.filter(i => !specIds.includes(i));
    if (stay.length > cap) return `Only ${cap} specialists can stay at this node`;
    n.drones = pool - drones; s.drones = drones;
    for (const i of stay) if (g.specs[i].ship === s.id) toNode(g, g.specs[i], n);
    for (const i of specIds) if (g.specs[i].ship !== s.id) toShip(g, g.specs[i], s);
  }
  const loaded = drones > 0 || specIds.length > 0;
  s.to = to.id; s.from = n.id; s.redirected = false; s.back = false; s.buffs = [];
  const nm = nodeMods(g, n);
  if (nm.launchSpeed) s.buffs.push({ k: 'speed', v: nm.launchSpeed, until: BIG });
  if (nm.sling) { s.buffs.push({ k: 'speed', v: 1.5, until: g.t + 40 }); n.buffs = n.buffs.filter(b => b.k !== 'sling'); }
  const sm = shipMods(g, s);
  s.loadUntil = g.t + (loaded && !sm.noLoad ? CFG.loadTime : 0.1);
  g.modV++;
  return null;
}
export function redirect(g: Game, s: Ship, to: GNode): string | null {
  if (s.at >= 0) return 'Ship is not in flight';
  if (s.redirected) return 'Already redirected this flight';
  if (!shipMods(g, s).redirect) return 'This ship cannot be redirected';
  if (s.owner === PLAYER && !canTarget(g, to)) return 'Target is not in detection range';
  s.to = to.id; s.redirected = true;
  return null;
}

// ---------------------------------------------------------------- rewards and choices
export function addXp(g: Game, n: number) {
  const sp = g.specs[g.cmdSpec];
  if (!sp || !sp.cmd) return;
  sp.cmd.xp += n * (1 + (sideMods(g, PLAYER).xp || 0));
  while (sp.cmd.lvl < 5 && sp.cmd.xp >= CFG.xpLevels[sp.cmd.lvl]) {
    sp.cmd.lvl++; g.modV++;
    const opts = sample(g, PERKS.filter(p => !sp.cmd!.perks.includes(p.id)), 3).map(p => p.id);
    g.pending.push({ kind: 'perk', node: -1, opts, title: `Commander reached level ${sp.cmd.lvl}` });
    log(g, `Your Commander reached level ${sp.cmd.lvl}`, 'good');
  }
}
export function offerSpec(g: Game, nodeId: number) {
  const owned = new Set(g.specs.filter(s => s.owner === PLAYER).map(s => s.def));
  const opts = sample(g, PLANET_POOL.filter(d => !owned.has(d)), 3);
  if (!opts.length) { g.sides[PLAYER].ult += 20; return; }
  g.pending.push({ kind: 'spec', node: nodeId, opts, title: `Residents of ${g.nodes[nodeId].name}` });
}
export function offerRelic(g: Game, rarity: string, nodeId: number) {
  const have = g.sides[PLAYER].relics;
  const of = (r: string) => Object.values(RELICS).filter(x => x.rarity === r && !have.includes(x.id)).map(x => x.id);
  const lower = rarity === 'rare' ? 'uncommon' : 'common';
  let opts = sample(g, of(rarity), rarity === 'common' ? 3 : 2);
  if (opts.length < 3) opts = opts.concat(sample(g, of(lower).filter(x => !opts.includes(x)), 3 - opts.length));
  if (!opts.length) { g.sides[PLAYER].ult += 30; return; }
  g.pending.push({ kind: 'relic', node: nodeId, opts, title: 'Choose a relic' });
}

export function applyFx(g: Game, n: GNode, list: Fx[]) {
  const side = g.sides[PLAYER];
  for (const fx of list) {
    switch (fx[0]) {
      case 'ult': side.ult += fx[1]; break;
      case 'drones': n.drones += fx[1]; break;
      case 'relic': offerRelic(g, fx[1], n.id); break;
      case 'tech': { const av = techAvailable(g, PLAYER); if (av.length) grantTech(g, PLAYER, pick(g, av)); else side.ult += 30; break; }
      case 'ship': newShip(g, PLAYER, n); break;
      case 'spec': offerSpec(g, n.id); break;
      case 'xp': addXp(g, fx[1]); break;
      case 'buff': n.buffs.push({ k: fx[1], v: fx[2], until: g.t + fx[3] }); break;
      case 'mobil': g.mob.prog = Math.max(0, Math.min(0.99, g.mob.prog + fx[1])); break;
      case 'hold': n.hold = { until: g.t + fx[1], total: fx[1], need: fx[2], fx: fx[3], name: n.event ? EVENTS[n.event].name : 'Operation' }; break;
      case 'reveal':
        for (const o of g.nodes) if (dist(o, n) <= fx[1]) { o.buffs.push({ k: 'scan', v: 1, until: g.t + 45 }); }
        updateVision(g); break;
      case 'build': {
        const id = n.kind === 'planet' ? 'shield' : (n.b.turret || 0) < BUILD.turret.max ? 'turret' : 'screen';
        n.b[id] = (n.b[id] || 0) + 1; break;
      }
      case 'ambush': {
        const a = rnd(g) * Math.PI * 2, d = 48;
        const s: Ship = { id: g.nextId++, owner: 0, seq: g.nextId++, at: -1, from: n.id, to: n.id, x: n.x + Math.cos(a) * d, y: n.y + Math.sin(a) * d, drones: fx[1], specs: [], buffs: [], loadUntil: 0, redirected: false, back: false, off: true };
        g.ships.push(s);
        log(g, `Automata are closing on ${n.name} with ${fx[1]} Drones`, 'warn', n.id);
        break;
      }
    }
  }
}

export function eventChoiceOk(g: Game, n: GNode, c: { ult?: number; drones?: number; req?: string }): string | null {
  if (c.ult && g.sides[PLAYER].ult < c.ult) return 'Not enough Ultanium';
  if (c.drones && n.drones < c.drones) return 'Not enough Drones here';
  if (c.req && !n.specs.some(i => g.specs[i].def === c.req && g.specs[i].owner === PLAYER)) return `Needs your ${SPECS[c.req].name} at this node`;
  return null;
}

/** Resolve the choice at the head of the queue. idx -1 defers an event. */
export function choose(g: Game, idx: number): string | null {
  const p = g.pending[0];
  if (!p) return 'Nothing to choose';
  const side = g.sides[PLAYER];
  if (p.kind === 'event') {
    const n = g.nodes[p.node], ev = EVENTS[p.event!];
    if (idx < 0 || n.owner !== PLAYER || n.event !== p.event) { g.pending.shift(); return null; }
    const c = ev.choices[idx];
    const err = eventChoiceOk(g, n, c);
    if (err) return err;
    if (c.ult) side.ult -= c.ult;
    if (c.drones) n.drones -= c.drones;
    g.pending.shift();
    applyFx(g, n, c.fx);
    n.event = null;
    g.stats.events++;
    log(g, `${ev.name}: ${c.label}`, 'info', n.id);
    return null;
  }
  const o = p.opts[idx];
  if (o === undefined) return 'Pick one';
  g.pending.shift();
  if (p.kind === 'draft') {
    const home = g.nodes[g.home];
    const sp = addSpec(g, o.base, PLAYER, home.id);
    sp.cmd = { base: o.base, arch: o.arch, lvl: 1, xp: 0, perks: [] };
    sp.name = 'Commander';
    g.cmdSpec = sp.id;
  } else if (p.kind === 'spec') {
    const n = g.nodes[p.node].owner === PLAYER ? g.nodes[p.node] : homeOf(g, PLAYER);
    if (n) { const sp = addSpec(g, o, PLAYER, n.id); log(g, `${specName(sp)} joined at ${n.name}`, 'good', n.id); g.stats.specs++; }
  } else if (p.kind === 'relic') {
    side.relics.push(o); g.stats.relics++;
    log(g, `Relic claimed: ${RELICS[o].name}`, 'good');
  } else if (p.kind === 'perk') {
    g.specs[g.cmdSpec].cmd!.perks.push(o);
  }
  g.modV++;
  return null;
}

export function ransom(g: Game, sp: Spec, recruit: boolean): string | null {
  if (sp.held !== PLAYER || sp.node < 0) return 'Not your prisoner';
  if (sp.def === 'warlord' || sp.def === 'archon') return 'Leaders cannot be ransomed or turned';
  const side = g.sides[PLAYER], m = sideMods(g, PLAYER);
  if (recruit) {
    if (!m.recruit) return 'Needs an Inquisitor';
    if (side.ult < CFG.recruitCost) return 'Not enough Ultanium';
    side.ult -= CFG.recruitCost;
    convert(g, sp);
    return null;
  }
  side.ult += Math.round(CFG.ransom * (1 + (m.ransom || 0)));
  detach(g, sp); sp.owner = -1; sp.held = 0; g.modV++;
  return null;
}
export function convert(g: Game, sp: Spec) {
  const n = g.nodes[sp.node];
  if (g.specs.some(o => o.owner === PLAYER && o.def === sp.def)) { g.sides[PLAYER].ult += 25; detach(g, sp); sp.owner = -1; sp.held = 0; log(g, `A second ${SPECS[sp.def].name} had nothing to teach; they paid 25 Ultanium for passage`, 'info'); return; }
  sp.owner = PLAYER; sp.cd = {};
  toNode(g, sp, n);
  g.stats.specs++;
  log(g, `${specName(sp)} now works for you`, 'good', n.id);
}

// ---------------------------------------------------------------- the fixed step
function completeTask(g: Game, n: GNode, t: Task) {
  if (t.kind === 'build') {
    n.b[t.id] = (n.b[t.id] || 0) + 1;
    if (n.owner === PLAYER) log(g, `${BUILD[t.id].name} finished at ${n.name}`, 'info', n.id);
  } else {
    newShip(g, n.owner, n);
    if (n.owner === PLAYER) log(g, `Ship launched from the yards at ${n.name}`, 'info', n.id);
  }
}

export function coreStep(g: Game) {
  const dt = CFG.dt;
  g.t += dt; g.tick++;
  const count: Record<number, number> = {}, inc: Record<number, number> = {};
  for (const o in g.sides) { count[o] = totalDrones(g, +o); inc[o] = 0; }

  for (const n of g.nodes) {
    if (n.buffs.length) {
      const gone = n.buffs.filter(b => b.until <= g.t);
      if (gone.length) {
        if (gone.some(b => b.k === 'dbl')) n.drones = Math.floor(n.drones * 0.75);
        n.buffs = n.buffs.filter(b => b.until > g.t);
      }
    }
    const tm = nodeMods(g, n);
    const nm = n.owner === 0 ? (n.kind === 'planet' ? CFG.natBySize[n.size] : 0) : natMax(g, n, tm);
    if (n.nat < nm && !tm.noRegen) n.nat = Math.min(nm, n.nat + dt * (1 + (tm.natRegen || 0) + 0.5 * (n.b.shield || 0)) / CFG.natRegenSecs);
    else if (n.nat > nm) n.nat = nm;
    const side = g.sides[n.owner];
    if (!side) continue;
    const frozen = (tm.frozen || 0) > 0;
    if (n.lane && !frozen) {
      const t = n.lane;
      t.left -= dt * (t.kind === 'ship' ? 1 + 0.25 * (n.b.shipyard || 0) + (tm.shipSpeed || 0) : 1 + (tm.build || 0));
      if (t.left <= 0) { n.lane = n.queue.shift() || null; completeTask(g, n, t); }
    } else if (n.kind === 'station' && !frozen) {
      n.prod = Math.min(CFG.batchTime, n.prod + dt * Math.max(0.2, 1 + (tm.prod || 0) + 0.25 * (n.b.barracks || 0)));
      if (n.prod >= CFG.batchTime) {
        const add = Math.min(CFG.batch + (tm.batch || 0), droneCap(g, n.owner) - count[n.owner]);
        if (add > 0) { n.drones += add; count[n.owner] += add; n.prod = 0; if (n.owner === PLAYER) g.stats.dronesMade += add; }
      }
    }
    const ops = nodeOps(g, n, tm);
    inc[n.owner] += ops.out;
    if (n.research && ops.resOn) {
      const id = n.research;
      side.techProg[id] = (side.techProg[id] || 0) + dt * (1 + (tm.research || 0));
      if (side.techProg[id] >= TECH_TIME[TECHS[id].tier]) grantTech(g, n.owner, id);
    }
    if (n.hold && g.t >= n.hold.until) {
      const h = n.hold; n.hold = null;
      if (n.drones >= h.need) { log(g, `${h.name} complete at ${n.name}`, 'good', n.id); applyFx(g, n, h.fx); }
      else log(g, `${h.name} failed at ${n.name}: fewer than ${h.need} Drones on site`, 'bad', n.id);
    }
    if (n.conv && g.t >= n.conv.until) {
      const sp = g.specs[n.conv.spec]; n.conv = null;
      if (sp && sp.held === PLAYER && sp.node === n.id) convert(g, sp);
    }
  }

  for (const o in g.sides) {
    const side = g.sides[o], sm = sideMods(g, +o);
    let v = inc[o] + (side.kind === 'player' ? CFG.baseIncome : 3) + (sm.incomeFlat || 0);
    if (sm.prisonInc) v += sm.prisonInc * g.specs.filter(s => s.held === +o).length;
    side.ult += v * dt / 60;
    if (side.kind === 'player') g.stats.ultMade += v * dt / 60;
    if (sm.levy && g.t >= side.levyT) {
      side.levyT = g.t + sm.levy;
      for (const n of g.nodes) if (n.owner === +o && count[o] < droneCap(g, +o)) { n.drones++; count[o]++; }
    }
  }

  for (const s of g.ships.slice()) {
    if (s.buffs.length) s.buffs = s.buffs.filter(b => b.until > g.t);
    if (s.at >= 0) {
      const n = g.nodes[s.at];
      if (s.loadUntil > 0) {
        if (g.t >= s.loadUntil) { s.loadUntil = 0; s.at = -1; s.x = n.x; s.y = n.y; }
      } else if (n.owner === s.owner && (s.drones > 0 || s.specs.length) && isDocked(g, s)) {
        n.drones += s.drones; s.drones = 0;
        const cap = slots(g, s.owner);
        for (const id of s.specs.slice()) if (n.specs.length < cap) toNode(g, g.specs[id], n);
      }
      continue;
    }
    const to = g.nodes[s.to], d = dist(s, to), step = shipSpeed(g, s) * dt;
    if (d <= step) arrive(g, s);
    else { s.x += (to.x - s.x) / d * step; s.y += (to.y - s.y) / d * step; }
  }

  // Commander custody and defeat
  const cmd = g.specs[g.cmdSpec];
  if (cmd) {
    if (cmd.owner !== PLAYER) { g.result = 'lose'; g.resultWhy = 'Your Commander was lost with their ship.'; }
    else if (cmd.held) {
      if (g.cmdLostT < 0) { g.cmdLostT = g.t; log(g, `YOUR COMMANDER IS A PRISONER at ${g.nodes[cmd.node].name}. Retake it before the window closes.`, 'bad', cmd.node); }
      else if (g.t - g.cmdLostT >= rescueWindow(g)) { g.result = 'lose'; g.resultWhy = `Your Commander was not recovered from ${g.nodes[cmd.node].name} in time.`; }
    } else g.cmdLostT = -1;
    if (!g.result && !g.nodes.some(n => n.owner === PLAYER)) { g.result = 'lose'; g.resultWhy = 'You hold no territory.'; }
  }
  if (g.tick % 3 === 0) updateVision(g);
}
export const rescueWindow = (g: Game) => CFG.rescueSecs + (sideMods(g, PLAYER).rescue || 0);
export { ri, pick };
export type { Side };
