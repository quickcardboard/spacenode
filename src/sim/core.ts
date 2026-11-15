import type { Game, GNode, Fleet, Spec, Mods, Fx, Task } from './types';
import { PLAYER } from './types';
import { CFG, SPECIALTY } from './config';
import { SPECS, POOL, RELICS, TECHS, PERKS, EVENTS, FACTIONS, ARCHONS } from './content';
import { sideMods, locMods, power, specUpkeep, readyCharges, chargeCd, commandOf } from './mods';
import { rnd, pick, sample } from './rng';

export const dist = (a: { x: number; y: number }, b: { x: number; y: number }) => Math.hypot(a.x - b.x, a.y - b.y);
export const fleetById = (g: Game, id: number) => g.fleets.find(f => f.id === id);
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
  if (s.kind === 'player') return '#6cc5a0';
  return s.kind === 'faction' ? FACTIONS[s.fac].color : '#e07aa0';
}

// ---------------------------------------------------------------- specialists
export function addSpec(g: Game, def: string, owner: number, nodeId: number): Spec {
  const sp: Spec = { id: g.specs.length, def, owner, node: nodeId, fleet: -1, held: 0, cd: 0, lvl: 1, xp: 0, cmd: null };
  g.specs.push(sp);
  g.nodes[nodeId].specs.push(sp.id);
  g.modV++;
  return sp;
}
export function detach(g: Game, sp: Spec) {
  if (sp.node >= 0) { const n = g.nodes[sp.node]; n.specs = n.specs.filter(i => i !== sp.id); n.prisoners = n.prisoners.filter(i => i !== sp.id); }
  if (sp.fleet >= 0) { const f = fleetById(g, sp.fleet); if (f) f.specs = f.specs.filter(i => i !== sp.id); }
  sp.node = -1; sp.fleet = -1;
}
export function toNode(g: Game, sp: Spec, n: GNode, prisonerOf = 0) {
  detach(g, sp);
  sp.node = n.id; sp.held = prisonerOf;
  (prisonerOf ? n.prisoners : n.specs).push(sp.id);
  g.modV++;
}
export function toFleet(g: Game, sp: Spec, f: Fleet) { detach(g, sp); sp.fleet = f.id; f.specs.push(sp.id); g.modV++; }
export function removeSpec(g: Game, sp: Spec) { detach(g, sp); sp.owner = -1; sp.held = 0; g.modV++; }
/** Every specialist stationed at a node works there: there is no limit. */
export const activeSpecs = (_g: Game, n: { specs: number[] }) => n.specs;
export const specName = (sp: Spec) => sp.name || SPECS[sp.def].name;
/** Node modifiers: side-wide ones, the specialists there, its buffs and its specialty. */
export function nodeMods(g: Game, n: { owner: number; specs: number[]; buffs: { k: string; v: number; until: number }[]; spec?: string }, on?: 'defend'): Mods {
  const m = locMods(g, n.owner, n.specs, n.buffs, on);
  if (n.spec === 'fortress') { m.def = (m.def || 0) + CFG.fortressDef; m.regen = (m.regen || 0) + 1; }
  return m;
}
/** Specialists earn experience in battle: five levels, announced as they come. */
export function gainXp(g: Game, ids: number[], amount: number) {
  for (const id of ids) {
    const sp = g.specs[id];
    if (!sp || sp.cmd || SPECS[sp.def].hidden || sp.owner < 0) continue;
    sp.xp += amount * (1 + (sideMods(g, sp.owner).xp || 0));
    while (sp.lvl < 5 && sp.xp >= CFG.specXp[sp.lvl + 1]) {
      sp.lvl++; g.modV++;
      if (sp.owner === PLAYER) {
        const d = SPECS[sp.def], what = sp.lvl === 3 ? `upgraded, ${d.up.text}` : sp.lvl === 5 ? 'mastery, their passive counts twice' : 'Power +1';
        log(g, `${specName(sp)} reached level ${sp.lvl}: ${what}; Command +${CFG.cmdPerLvl}`, 'good', sp.node);
      }
    }
  }
}
export function homeOf(g: Game, owner: number): GNode | null {
  const own = g.nodes.filter(n => n.owner === owner);
  if (!own.length) return null;
  return own.find(n => n.home || n.capital || n.citadel) || own.find(n => n.kind === 'station') || own[0];
}

// ---------------------------------------------------------------- economy
export function totalDrones(g: Game, owner: number): number {
  let t = 0;
  for (const n of g.nodes) if (n.owner === owner) t += n.drones;
  for (const f of g.fleets) if (f.owner === owner) t += f.drones;
  return t;
}
/** Drones a node needs on site to keep its mines and lab running. */
export function workers(g: Game, n: GNode): number {
  if (n.kind !== 'planet' || sideMods(g, n.owner).noOps) return 0;
  return n.lv + (n.spec === 'lab' ? CFG.labWorkers : 0);
}
export function nodeIncome(g: Game, n: GNode, m?: Mods): number {
  if (n.kind !== 'planet' || !g.sides[n.owner]) return 0;
  const mm = m || nodeMods(g, n);
  const w = mm.noOps ? n.lv : Math.min(n.lv, n.drones);
  return CFG.mineOut[w] * CFG.sizeMult[n.size] * (n.spec === 'refinery' ? CFG.refineryMult : 1) + (mm.inc || 0);
}
export const labRunning = (g: Game, n: GNode) => n.spec === 'lab' && (!!sideMods(g, n.owner).noOps || n.drones >= n.lv + CFG.labWorkers);
export interface Econ { inc: number; upk: number; net: number; drones: number; free: number; rpm: number; specUp: number }
export function economy(g: Game, owner: number): Econ {
  const side = g.sides[owner], sm = sideMods(g, owner);
  let inc = (side.kind === 'player' ? CFG.baseIncome : 4) + (sm.income || 0), drones = 0, free = (sm.freeDrones || 0) + side.free + (side.kind === 'player' ? CFG.freeBase : 0), rpm = sm.rp || 0;
  for (const n of g.nodes) {
    if (n.owner !== owner) continue;
    const m = nodeMods(g, n);
    inc += nodeIncome(g, n, m);
    drones += n.drones;
    free += m.free || 0;
    if (labRunning(g, n)) rpm += CFG.labRp;
    rpm += m.research || 0;
  }
  for (const f of g.fleets) if (f.owner === owner) drones += f.drones;
  let specUp = 0;
  for (const n of g.nodes) if (n.owner === owner && n.spec === 'habitat') free += CFG.habitatFree;
  for (const sp of g.specs) { if (sp.owner === owner && !sp.held) specUp += specUpkeep(g, sp); else if (sp.held === owner && sm.prisonInc) inc += sm.prisonInc; }
  const paid = Math.max(0, drones - free);
  const upk = paid * CFG.upkeepDrone + specUp;
  return { inc, upk, net: inc - upk, drones, free, rpm, specUp };
}

// ---------------------------------------------------------------- vision
export function radii(g: Game, n: GNode): [number, number] {
  const f = 1 + (nodeMods(g, n).fov || 0);
  const i = n.kind === 'planet' ? CFG.fovInner.planet[n.size] : CFG.fovInner.station;
  const o = n.kind === 'planet' ? CFG.fovOuter.planet[n.size] : CFG.fovOuter.station;
  return [i * f, o * f];
}
export const fleetMods = (g: Game, f: { owner: number; specs: number[] }, on?: 'attack') => locMods(g, f.owner, f.specs, [], on);
export function fleetRadii(g: Game, f: Fleet): [number, number] {
  const k = 1 + (fleetMods(g, f).fov || 0);
  return [CFG.fleetFov[0] * k, CFG.fleetFov[1] * k];
}
export function updateVision(g: Game) {
  const eyes: { n: { x: number; y: number }; r: [number, number] }[] = g.nodes.filter(n => n.owner === PLAYER).map(n => ({ n, r: radii(g, n) }));
  for (const f of g.fleets) if (f.owner === PLAYER && !f.lane && !f.missile) eyes.push({ n: f, r: fleetRadii(g, f) });
  for (const n of g.nodes) {
    let v = 0;
    if (n.owner === PLAYER) v = 2;
    else {
      for (const p of eyes) { const d = dist(n, p.n); if (d <= p.r[0]) { v = 2; break; } if (d <= p.r[1]) v = 1; }
      const scanned = n.buffs.some(b => b.k === 'scan' && b.until > g.t);
      if (v === 2 && !scanned && g.sides[n.owner] && nodeMods(g, n).mask) v = 1; // an Illusionist: seen, but not read
      if (v < 2 && scanned) v = 2;
    }
    g.vis[n.id] = v;
    const it = g.intel[n.id];
    if (v > it.seen) it.seen = v;
    if (v === 2) { it.t = g.t; it.snap = { owner: n.owner, drones: n.drones, shields: n.shields, lv: n.lv, sh: n.sh, spec: n.spec, missile: n.missile, specs: n.specs.slice(), prisoners: n.prisoners.slice(), buffs: n.buffs.slice() }; }
  }
}
/** 0 = unseen, 1 = seen, 2 = strength known. */
export function fleetSeen(g: Game, f: Fleet): number {
  if (f.owner === PLAYER) return 2;
  const stealth = !f.missile && ((fleetMods(g, f).stealth || 0) > 0 || (f.owner > 1 && (sideMods(g, g.archon).stealth || 0) > 0));
  let best = 0;
  const look = (p: { x: number; y: number }, r: [number, number]) => { const d = dist(f, p); if (d <= r[0]) best = 2; else if (d <= r[1] && !stealth) best = Math.max(best, 1); };
  for (const n of g.nodes) if (n.owner === PLAYER) look(n, radii(g, n));
  for (const o of g.fleets) if (o.owner === PLAYER && !o.lane && !o.missile) look(o, fleetRadii(g, o));
  if (best === 1 && (sideMods(g, PLAYER).sigint || 0) > 0) return 2;
  return best;
}
export function viewOf(g: Game, n: GNode): { live: boolean; age: number; v: null | GNode } {
  if (n.owner === PLAYER || g.vis[n.id] === 2) return { live: true, age: 0, v: n };
  const it = g.intel[n.id];
  if (!it.snap) return { live: false, age: 0, v: null };
  return { live: false, age: g.t - it.t, v: { ...n, ...it.snap } as GNode };
}
export const canTarget = (g: Game, to: GNode) => to.owner === PLAYER || g.vis[to.id] >= 1;

// ---------------------------------------------------------------- shields, slots, upgrades
export function shieldMax(g: Game, n: GNode, m?: Mods) {
  const mm = m || nodeMods(g, n);
  return Math.max(0, n.sh * CFG.shieldPerLv + (mm.shield || 0));
}
export function aegis(g: Game, n: GNode): number {
  if (!n.citadel) return 0;
  const layers = g.factions.filter(o => !g.sides[o].broken).length;
  return Math.round(layers * CFG.aegisPerLayer * (1 + (sideMods(g, g.archon).aegisPct || 0)));
}
export const slotsOf = (g: Game, n: GNode) => (n.kind === 'station' ? CFG.slotsStation : CFG.slotsPlanet) + (n.spec === 'bay' ? CFG.baySlots : 0) + (sideMods(g, n.owner).slotAdd || 0);
export const slotsBusy = (g: Game, n: GNode) => g.fleets.filter(f => f.slot && f.home === n.id && f.owner === n.owner).length;
export const slotsFree = (g: Game, n: GNode) => Math.max(0, slotsOf(g, n) - slotsBusy(g, n));
export const crewMax = (g: Game, n: GNode) => CFG.crew + (sideMods(g, n.owner).slots || 0) + (n.spec === 'bay' ? CFG.bayCrew : 0);

export type UpKind = 'lv' | 'sh' | 'spec' | 'missile' | 'flagship';
export const queued = (n: GNode, kind: string) => n.queue.filter(t => t.kind === kind).length;
/** The level a node will have once its queue is done. */
export const lvAfter = (n: GNode, what: 'lv' | 'sh') => (what === 'lv' ? n.lv : n.sh) + queued(n, what);
export function upCost(g: Game, n: GNode, what: UpKind): number {
  if (what === 'missile') return CFG.missileCost;
  if (what === 'flagship') return CFG.flagshipCost;
  const base = what === 'lv' ? CFG.lvCost[lvAfter(n, 'lv') + 1] : what === 'sh' ? CFG.shCost[lvAfter(n, 'sh') + 1] : CFG.specCost;
  return Math.max(5, base - (nodeMods(g, n).upgCost || 0));
}
export const upTime = (what: UpKind) => (what === 'lv' ? CFG.lvTime : what === 'sh' ? CFG.shTime : what === 'spec' ? CFG.specTime : what === 'flagship' ? CFG.flagshipTime : CFG.missileTime);
/** Is a Flagship built or on order anywhere for this owner? */
export const hasFlagship = (g: Game, owner: number) => g.nodes.some(o => o.owner === owner && (o.flagship || o.queue.some(t => t.kind === 'flagship')));
export function canUp(g: Game, n: GNode, what: UpKind, id = ''): string | null {
  const side = g.sides[n.owner];
  if (!side) return 'Not yours';
  if (n.queue.length >= CFG.queueMax) return 'Build queue is full';
  if ((what === 'lv' || what === 'sh') && lvAfter(n, what) >= 3) return 'Maximum level';
  if (what === 'spec') { if (n.spec || queued(n, 'spec')) return 'Specialty already chosen'; if (n.flagship || n.citadel) return 'Not available here'; if (!SPECIALTY[id] || SPECIALTY[id].on !== n.kind) return 'Not available here'; }
  if (what === 'missile') { if (n.spec !== 'silo') return 'Needs a Missile Silo'; if (n.missile >= 1 || queued(n, 'missile')) return 'A missile is ready'; }
  if (what === 'flagship') { if (n.kind !== 'station' || n.flagship) return 'Only a station can build it'; if (hasFlagship(g, n.owner)) return 'You already have a Flagship'; }
  if (side.ult < upCost(g, n, what)) return 'Not enough Ultanium';
  return null;
}
/** Queue a job. It is paid now; jobs run one after another. */
export function startUp(g: Game, n: GNode, what: UpKind, id = ''): string | null {
  const err = canUp(g, n, what, id);
  if (err) return err;
  const cost = upCost(g, n, what), t = upTime(what);
  g.sides[n.owner].ult -= cost;
  n.queue.push({ kind: what, id, left: t, total: t, cost });
  return null;
}
/** Cancel a queued job and get its price back. Later jobs of the same kind are cancelled with it (they built on it). */
export function cancelTask(g: Game, n: GNode, idx = 0) {
  const t = n.queue[idx];
  if (!t) return;
  const drop = n.queue.filter((o, i) => i === idx || (i > idx && (t.kind === 'lv' || t.kind === 'sh' || t.kind === 'spec') && o.kind === t.kind));
  for (const o of drop) if (g.sides[n.owner]) g.sides[n.owner].ult += o.cost;
  n.queue = n.queue.filter(o => !drop.includes(o));
}
const FLAGSHIP_NAMES = ['Unbound', 'Axe of Haven', 'Defiance', 'Open Hand', 'Last Light'];
/** Build the Flagship beside the station that made it. It joins the map as a new node. */
function makeFlagship(g: Game, at: GNode) {
  const a = rnd(g) * Math.PI * 2, x = Math.max(16, Math.min(g.w - 16, at.x + Math.cos(a) * 22)), y = Math.max(16, Math.min(g.h - 16, at.y + Math.sin(a) * 22));
  const n: GNode = {
    id: g.nodes.length, name: pick(g, FLAGSHIP_NAMES), kind: 'station', x, y, size: 1, owner: at.owner, region: at.owner, threat: at.threat,
    drones: 0, shields: CFG.shieldPerLv, lv: 1, sh: 1, spec: '', queue: [], prod: 0, missile: 0, specs: [], prisoners: [], buffs: [],
    event: null, offer: false, hold: null, front: false, trainT: 0, capT: g.t, flagship: true, dest: null, capital: false, citadel: false, home: false,
  };
  g.nodes.push(n); g.intel.push({ seen: 2, t: g.t, snap: null }); g.vis.push(2);
  if (at.owner === PLAYER) log(g, `The Flagship ${n.name} is launched. Drag from it onto open space to move it.`, 'good', n.id);
}
function completeTask(g: Game, n: GNode, t: Task) {
  const mine = n.owner === PLAYER;
  if (t.kind === 'lv') { n.lv++; if (mine) log(g, `${n.name}: ${n.kind === 'planet' ? 'Mine' : 'Barracks'} level ${n.lv}`, 'info', n.id); }
  else if (t.kind === 'sh') { n.sh++; if (mine) log(g, `${n.name}: Shield level ${n.sh}`, 'info', n.id); }
  else if (t.kind === 'spec') { n.spec = t.id; if (mine) log(g, `${n.name} is now a ${SPECIALTY[t.id].name}`, 'info', n.id); }
  else if (t.kind === 'missile') { n.missile = 1; if (mine) log(g, `Missile ready at ${n.name}`, 'good', n.id); }
  else if (t.kind === 'flagship') makeFlagship(g, n);
  else {
    const b = g.nodes[+t.id];
    if (b.owner === n.owner && !corridorBetween(g, n.id, b.id)) { g.corridors.push({ a: n.id, b: b.id, owner: n.owner }); if (mine) log(g, `Corridor open: ${n.name} to ${b.name}`, 'good', n.id); }
    else g.sides[n.owner].ult += t.cost;
  }
  g.modV++;
}

// ---------------------------------------------------------------- corridors
export const corridorsAt = (g: Game, id: number) => g.corridors.filter(c => c.a === id || c.b === id);
export const corridorBetween = (g: Game, a: number, b: number) => g.corridors.find(c => (c.a === a && c.b === b) || (c.a === b && c.b === a));
export const corridorMax = (g: Game) => CFG.corridorMax + (sideMods(g, PLAYER).corridorMax || 0);
export const corridorCost = (g: Game) => Math.round(CFG.corridorCost * (1 - Math.min(0.75, sideMods(g, PLAYER).corridorCost || 0)));
/** Shortest chain of corridors from a to b (node ids after a), or null. */
export function corridorPath(g: Game, a: number, b: number): number[] | null {
  if (a === b) return null;
  const owner = g.nodes[a].owner, prev = new Map<number, number>([[a, -1]]), q = [a];
  while (q.length) {
    const x = q.shift()!;
    if (x === b) break;
    for (const c of corridorsAt(g, x)) { const y = c.a === x ? c.b : c.a; if (!prev.has(y) && g.nodes[y].owner === owner) { prev.set(y, x); q.push(y); } }
  }
  if (!prev.has(b)) return null;
  const path: number[] = [];
  for (let x = b; x !== a; x = prev.get(x)!) path.unshift(x);
  return path;
}
export const corridorReach = (g: Game, a: number) => g.nodes.filter(n => n.id !== a && n.owner === g.nodes[a].owner && corridorPath(g, a, n.id)).map(n => n.id);
const building = (g: Game, id: number) => g.nodes.reduce((k, o) => k + o.queue.filter(t => t.kind === 'corridor' && (o.id === id || +t.id === id)).length, 0);
const corridorQueued = (a: GNode, b: GNode) => a.queue.some(t => t.kind === 'corridor' && +t.id === b.id) || b.queue.some(t => t.kind === 'corridor' && +t.id === a.id);
export function canCorridor(g: Game, a: GNode, b: GNode): string | null {
  if (a.id === b.id) return 'Pick a different node';
  if (a.owner !== PLAYER || b.owner !== PLAYER) return 'Both ends must be your nodes';
  if (a.flagship || b.flagship) return 'The Flagship cannot hold corridors';
  if (dist(a, b) > CFG.corridorRange) return `Too far (corridors reach ${CFG.corridorRange})`;
  if (corridorBetween(g, a.id, b.id) || corridorQueued(a, b)) return 'Already linked or being built';
  const mx = corridorMax(g);
  for (const n of [a, b]) if (corridorsAt(g, n.id).length + building(g, n.id) >= mx) return `${n.name} already has ${mx} corridors`;
  if (a.queue.length >= CFG.queueMax) return `${a.name}'s build queue is full`;
  if (g.sides[PLAYER].ult < corridorCost(g)) return 'Not enough Ultanium';
  return null;
}
export function startCorridor(g: Game, a: GNode, b: GNode): string | null {
  const err = canCorridor(g, a, b);
  if (err) return err;
  const cost = corridorCost(g);
  g.sides[PLAYER].ult -= cost;
  const t = CFG.corridorTime / (1 + (nodeMods(g, a).build || 0));
  a.queue.push({ kind: 'corridor', id: String(b.id), left: t, total: t, cost });
  return null;
}

// ---------------------------------------------------------------- combat
export interface Battle {
  sent: number; atk: number; def: number; win: boolean; surv: number;
  parts: { drones: number; pow: number; bonus: number; lance: number; strike: number; garr: number; shield: number; dpow: number; ddef: number; aegis: number };
}
export function calcBattle(g: Game, owner: number, drones: number, crew: number[], n: GNode, fm?: Mods): Battle {
  const f = fm || locMods(g, owner, crew, [], 'attack');
  const t = g.sides[n.owner] ? nodeMods(g, n, 'defend') : {};
  const lance = Math.min(drones, t.lance || 0), d = drones - lance;
  const strike = Math.min(n.drones, f.strike || 0), garr = n.drones - strike;
  const pow = crew.reduce((s, i) => s + power(g, g.specs[i]), 0);
  const bonus = (f.atk || 0) + Math.min(f.per4 || 0, Math.floor(d / 4)) + (n.owner === 0 ? f.vsNeutral || 0 : 0);
  const atk = d + pow + bonus;
  const shield = Math.max(0, Math.floor(n.shields) - (f.pierce || 0));
  const dpow = g.sides[n.owner] ? activeSpecs(g, n).reduce((s, i) => s + (g.specs[i].held ? 0 : power(g, g.specs[i])), 0) : 0;
  const ddef = t.def || 0, ae = aegis(g, n);
  const def = garr + shield + dpow + ddef + ae;
  const win = d > 0 && (atk > def || (atk === def && (f.ties || 0) > 0));
  const surv = win ? Math.max(0, Math.min(d, atk - def + (f.surv || 0)) - (t.martyr || 0)) : 0;
  return { sent: drones, atk, def, win, surv, parts: { drones: d, pow, bonus, lance, strike, garr, shield, dpow, ddef, aegis: ae } };
}
function spend(g: Game, ids: number[], on: 'attack' | 'defend' | 'fall' | 'fail') { for (const sp of readyCharges(g, ids, on)) sp.cd = g.t + chargeCd(g, sp); }

/** Specialists on a fallen node or lost fleet: a ready Medic gets everyone home, otherwise they are taken prisoner. */
function captureSpecs(g: Game, ids: number[], at: GNode, captor: number) {
  const medic = readyCharges(g, ids, 'fall')[0];
  for (const id of ids.slice()) {
    const sp = g.specs[id];
    if (sp.def === 'captain') { if (captor === PLAYER) toNode(g, sp, at, PLAYER); else removeSpec(g, sp); continue; }
    if (medic) { const h = homeOf(g, sp.owner); if (h && h.id !== at.id) { toNode(g, sp, h); continue; } }
    toNode(g, sp, at, captor || -1);
    if (sp.owner === PLAYER) { g.stats.specsLost++; log(g, `${specName(sp)} was captured at ${at.name}`, 'bad', at.id); }
  }
  if (medic) { medic.cd = g.t + chargeCd(g, medic); if (medic.owner === PLAYER) log(g, `The Medic got your specialists out of ${at.name}`, 'good', at.id); }
}
function dropFleet(g: Game, f: Fleet) { g.fleets = g.fleets.filter(o => o !== f); }
function loseFleet(g: Game, f: Fleet, at: GNode | null, captor: number) {
  if (f.specs.length) {
    if (at) captureSpecs(g, f.specs, at, captor);
    else for (const id of f.specs.slice()) { const sp = g.specs[id], h = homeOf(g, sp.owner); if (h && sp.def !== 'captain') toNode(g, sp, h); else removeSpec(g, sp); }
  }
  dropFleet(g, f);
}
function takeNode(g: Game, n: GNode, now: number, garrison: number) {
  const old = n.owner;
  if (g.corridors.some(c => c.a === n.id || c.b === n.id)) {
    g.corridors = g.corridors.filter(c => c.a !== n.id && c.b !== n.id);
    if (old === PLAYER) log(g, `Corridors to ${n.name} collapsed`, 'bad', n.id);
  }
  for (const o of g.nodes) for (const t of o.queue.filter(x => x.kind === 'corridor' && +x.id === n.id)) { if (g.sides[o.owner]) g.sides[o.owner].ult += t.cost; o.queue = o.queue.filter(x => x !== t); }
  if (old !== 0) captureSpecs(g, n.specs, n, now);
  for (const id of n.prisoners.slice()) { const sp = g.specs[id]; if (sp.owner === now) { toNode(g, sp, n); if (now === PLAYER) log(g, `${specName(sp)} was rescued at ${n.name}`, 'good', n.id); } else sp.held = now || -1; }
  n.owner = now; n.drones = garrison; n.shields = 0; n.queue = []; n.prod = 0; n.hold = null; n.buffs = []; n.front = false; n.trainT = 0; n.missile = 0; n.capT = g.t; n.dest = null;
  if (now !== PLAYER) n.offer = false; // recruits do not wait around under Coalition rule
  g.modV++;
}
function playerGains(g: Game, n: GNode) {
  if (n.offer) { n.offer = false; offerSpec(g, n.id); }
  if (n.event) g.pending.push({ kind: 'event', node: n.id, opts: [], title: EVENTS[n.event].name, event: n.event });
}
/** A faction gives up: its nodes go neutral, its officers go home, and every specialist it held is set free. */
export function collapse(g: Game, owner: number, why: string) {
  const side = g.sides[owner];
  if (!side || side.broken) return;
  side.broken = true;
  g.mob.stage = Math.max(1, g.mob.stage - 1); g.mob.prog = 0;
  g.offs = g.offs.filter(o => o.owner !== owner);
  for (const fl of g.fleets.filter(x => x.owner === owner)) loseFleet(g, fl, null, 0);
  const home = homeOf(g, PLAYER);
  let freed = 0, k = 0;
  for (const sp of g.specs) {
    if (sp.held !== owner) continue;
    if (sp.owner === PLAYER && home) { toNode(g, sp, home); freed++; }
    else removeSpec(g, sp);
  }
  for (const n of g.nodes) {
    if (n.owner !== owner) continue;
    for (const id of n.specs.slice()) removeSpec(g, g.specs[id]);
    takeNode(g, n, 0, Math.ceil(n.drones / 2));
    n.capital = false; k++;
  }
  log(g, `${why} ${k} of its node${k === 1 ? '' : 's'} go${k === 1 ? 'es' : ''} neutral${freed ? `, and ${freed} of your specialists come home` : ''}. A Citadel Aegis layer falls.`, 'good', home ? home.id : -1);
  g.modV++;
}
/** Taking a faction's capital: the Warlord is yours, the faction collapses, and its signature specialist joins you. */
export function breakFaction(g: Game, owner: number, n: GNode) {
  const f = FACTIONS[g.sides[owner].fac];
  collapse(g, owner, `${f.warlord} is your prisoner. The ${f.name} collapses:`);
  const sig = addSpec(g, f.sig, PLAYER, n.id);
  log(g, `${specName(sig)} joins you from the ${f.name}.`, 'good', n.id);
  offerRelic(g, 'rare', n.id);
  addXp(g, 10);
  g.stats.warlords++;
}

function capture(g: Game, n: GNode, f: Fleet, r: Battle, fm: Mods) {
  const old = n.owner, now = f.owner, side = g.sides[now];
  if (fm.salvage && side) side.ult += Math.round(fm.salvage * n.drones);
  const wasCapital = n.capital && g.sides[old]?.kind === 'faction' && !g.sides[old].broken;
  takeNode(g, n, now, r.surv);
  const crew = f.specs.slice();
  gainXp(g, crew, CFG.xpWin);
  for (const id of crew) { const sp = g.specs[id]; if (sp.def === 'captain') removeSpec(g, sp); else toNode(g, sp, n); }
  dropFleet(g, f);
  if (side) {
    const m = sideMods(g, now);
    if (m.refund && g.t >= side.refundT) { n.drones += r.sent - r.surv; side.refundT = g.t + m.refund; if (now === PLAYER) log(g, 'Phoenix Clause refunds your losses', 'good', n.id); }
    if (m.capShield) n.shields = m.capShield;
    if (m.capUlt) side.ult += m.capUlt;
  }
  if (now === PLAYER) {
    g.stats.captures++; g.stats.dronesLost += r.sent - r.surv;
    log(g, `Captured ${n.name} with ${r.surv} Drones left`, 'good', n.id);
    addXp(g, crew.includes(g.cmdSpec) ? 4 : 2);
    if (g.sides[old]) g.mob.prog = Math.max(0, g.mob.prog - CFG.captureSetback);
    if (wasCapital) breakFaction(g, old, n);
    playerGains(g, n);
    if (n.citadel) { g.result = 'win'; g.resultWhy = `${ARCHONS[g.sides[g.archon].fac].name} is your prisoner. The Coalition is finished.`; }
  } else if (old === PLAYER) { g.stats.nodesLost++; log(g, `${n.name} fell to ${sideName(g, now)}`, 'bad', n.id); }
  updateVision(g);
}
function repel(g: Game, n: GNode, f: Fleet, r: Battle, fm: Mods) {
  const p = r.parts;
  if (g.sides[n.owner]) gainXp(g, activeSpecs(g, n), CFG.xpDefend);
  gainXp(g, f.specs, CFG.xpLose);
  n.drones = p.garr;
  let dmg = r.atk;
  const sl = Math.min(n.shields, Math.max(0, dmg - 0)); n.shields -= Math.min(sl, dmg); dmg -= p.shield;
  dmg -= p.dpow + p.ddef + p.aegis;
  n.drones -= Math.max(0, Math.min(n.drones, dmg));
  const rg = g.sides[f.owner] ? readyCharges(g, f.specs, 'fail')[0] : null;
  const kept = rg ? Math.floor(p.drones / 2) : 0;
  if (f.owner === PLAYER) { log(g, `Attack on ${n.name} failed: ${r.atk} against ${r.def}${rg ? `. ${specName(rg)} pulls ${kept} Drones out` : ''}`, 'bad', n.id); g.stats.dronesLost += f.drones - kept; }
  if (n.owner === PLAYER) log(g, `${n.name} held against ${sideName(g, f.owner)} (${r.atk} against ${r.def})`, 'good', n.id);
  f.drones = kept;
  if (rg) { // the Rearguard covers the retreat: survivors and crew fly home
    rg.cd = g.t + chargeCd(g, rg);
    const origin = g.nodes[f.from], back = origin && origin.owner === f.owner ? origin : homeOf(g, f.owner);
    if (back) { f.to = back.id; f.from = n.id; f.back = true; f.x = n.x; f.y = n.y; return; }
  }
  if (n.owner === 0 && g.sides[f.owner]) { // beaten by a neutral node: the crew limps home
    const origin = g.nodes[f.from], back = origin && origin.owner === f.owner ? origin : homeOf(g, f.owner);
    if (back) { f.to = back.id; f.from = n.id; f.back = true; f.x = n.x; f.y = n.y; return; }
  }
  loseFleet(g, f, g.sides[n.owner] ? n : null, n.owner);
  void fm;
}

function arrive(g: Game, f: Fleet) {
  const n = g.nodes[f.to];
  f.x = n.x; f.y = n.y;
  if (f.missile) {
    if (n.owner !== f.owner) {
      n.shields = 0; n.drones = Math.max(0, n.drones - CFG.missileKill); n.buffs.push({ k: 'noRegen', v: 1, until: g.t + 20 });
      if (f.owner === PLAYER || n.owner === PLAYER) log(g, `Missile strike on ${n.name}: shields down, ${CFG.missileKill} Drones destroyed`, n.owner === PLAYER ? 'bad' : 'good', n.id);
    }
    dropFleet(g, f); return;
  }
  if (f.lane && n.owner === f.owner && f.path && f.path.length) { // corridor convoy: hop on while the chain holds
    const next = f.path[0];
    if (corridorBetween(g, n.id, next) && g.nodes[next].owner === f.owner) { f.path.shift(); f.from = n.id; f.to = next; return; }
  }
  if (n.owner === f.owner) {
    n.drones += f.drones;
    for (const id of f.specs.slice()) { const sp = g.specs[id]; if (sp.def === 'captain') removeSpec(g, sp); else toNode(g, sp, n); }
    dropFleet(g, f); return;
  }
  if (f.probe || f.drones <= 0) {
    if (f.owner === PLAYER && f.probe) { n.buffs.push({ k: 'scan', v: 1, until: g.t + 30 }); updateVision(g); log(g, `Probe identified ${n.name}`, 'info', n.id); }
    loseFleet(g, f, g.sides[n.owner] ? n : null, n.owner); return;
  }
  const fm = fleetMods(g, f, 'attack');
  const r = calcBattle(g, f.owner, f.drones, f.specs, n, fm);
  spend(g, f.specs, 'attack'); spend(g, activeSpecs(g, n), 'defend');
  if (f.owner === PLAYER) g.stats.battles++;
  if (r.win) capture(g, n, f, r, fm); else repel(g, n, f, r, fm);
}

// ---------------------------------------------------------------- launching and moving
export function fleetSpeed(g: Game, f: Fleet) {
  if (f.missile) return CFG.fleetSpeed * CFG.missileSpeed;
  const m = fleetMods(g, f);
  return CFG.fleetSpeed * (f.lane ? CFG.corridorSpeed * (1 + (m.laneSpeed || 0)) : 1) * Math.max(0.3, 1 + (m.speed || 0) + (f.speedUp || 0));
}
export const eta = (g: Game, f: Fleet, to: GNode) => dist(f, to) / fleetSpeed(g, f);
function mkFleet(g: Game, owner: number, from: GNode, to: number): Fleet {
  const f: Fleet = { id: g.nextId++, owner, home: from.id, slot: false, from: from.id, to, x: from.x, y: from.y, drones: 0, specs: [] };
  g.fleets.push(f);
  return f;
}
/** Speed a fleet would have leaving `from` with this crew (for previews). */
export function launchSpeed(g: Game, from: GNode, crew: number[]) {
  const m = locMods(g, from.owner, crew, []), nm = nodeMods(g, from);
  return CFG.fleetSpeed * Math.max(0.3, 1 + (m.speed || 0) + (nm.launchSpeed || 0) + (from.spec === 'bay' ? CFG.baySpeed : 0));
}
export function launch(g: Game, from: GNode, to: GNode, drones: number, specIds: number[]): string | null {
  const owner = from.owner;
  if (!g.sides[owner]) return 'Not your node';
  if (to.id === from.id) return 'Already here';
  if (owner === PLAYER && !canTarget(g, to)) return 'Target is not in detection range';
  specIds = specIds.filter(i => from.specs.includes(i));
  if (specIds.length > crewMax(g, from)) return `A fleet carries at most ${crewMax(g, from)} specialists`;
  drones = Math.max(0, Math.min(from.drones, Math.floor(drones)));
  const hostile = to.owner !== owner, probe = hostile && !specIds.length;
  if (probe && drones > 0) return 'An attack needs a specialist to lead it. Without one, send 0 Drones as a probe.';
  if (hostile && !probe && drones < 1) return 'An attack needs at least 1 Drone';
  if (hostile && !probe && drones > commandOf(g, specIds)) return `This crew commands ${commandOf(g, specIds)} Drones. Add a specialist or send fewer.`;
  if (!hostile && !drones && !specIds.length) return 'Nothing to send';
  const crewMods = locMods(g, owner, specIds, []);
  const needsSlot = !crewMods.slotFree;
  if (needsSlot && slotsFree(g, from) < 1) return 'No free launch slot here';
  const f = mkFleet(g, owner, from, to.id);
  f.slot = needsSlot; f.drones = drones; f.probe = probe; from.drones -= drones;
  f.speedUp = (nodeMods(g, from).launchSpeed || 0) + (from.spec === 'bay' ? CFG.baySpeed : 0);
  for (const i of specIds) toFleet(g, g.specs[i], f);
  return null;
}
/** Send Drones and specialists through corridors: no launch slot, double speed, any number of hops. */
export function convoy(g: Game, a: GNode, b: GNode, drones: number, specIds: number[]): string | null {
  if (a.owner !== b.owner) return 'Both ends must be yours';
  const path = corridorPath(g, a.id, b.id);
  if (!path) return 'No corridor route to that node';
  drones = Math.max(0, Math.min(a.drones, Math.floor(drones)));
  specIds = specIds.filter(i => a.specs.includes(i));
  if (!drones && !specIds.length) return 'Nothing to send';
  const f = mkFleet(g, a.owner, a, path[0]);
  f.lane = true; f.path = path.slice(1); f.drones = drones; a.drones -= drones;
  for (const i of specIds) toFleet(g, g.specs[i], f);
  return null;
}
/** Corridor travel time between two of your nodes, or -1 with no route. */
export function laneSecs(g: Game, from: GNode, to: GNode): number {
  const path = corridorPath(g, from.id, to.id);
  if (!path) return -1;
  let d = 0, prev: GNode = from;
  for (const id of path) { d += dist(prev, g.nodes[id]); prev = g.nodes[id]; }
  return d / (CFG.fleetSpeed * CFG.corridorSpeed * (1 + (sideMods(g, from.owner).laneSpeed || 0)));
}
/** The quicker way between two friendly nodes: corridor or direct flight. A fleet needs a free launch slot. */
export function route(g: Game, from: GNode, to: GNode, crew: number[] = []): { secs: number; via: 'corridor' | 'fleet' | null } {
  const lane = laneSecs(g, from, to);
  const canFly = slotsFree(g, from) > 0 || !!locMods(g, from.owner, crew, []).slotFree;
  const fly = canFly ? dist(from, to) / launchSpeed(g, from, crew) : -1;
  if (lane >= 0 && (fly < 0 || lane <= fly)) return { secs: lane, via: 'corridor' };
  if (fly >= 0) return { secs: fly, via: 'fleet' };
  return { secs: 0, via: null };
}
/** How a lone specialist would travel to a friendly node, and how long it takes. */
export function moveEta(g: Game, sp: Spec, to: GNode): { secs: number; via: 'corridor' | 'fleet' | null; why: string } {
  if (sp.held) return { secs: 0, via: null, why: 'They are a prisoner' };
  if (sp.node < 0) return { secs: 0, via: null, why: 'Already travelling' };
  const from = g.nodes[sp.node];
  if (to.owner !== sp.owner) return { secs: 0, via: null, why: 'Only your own nodes' };
  if (to.id === from.id) return { secs: 0, via: null, why: 'Already there' };
  const r = route(g, from, to, [sp.id]);
  return r.via ? { ...r, why: '' } : { secs: 0, via: null, why: `No free launch slot at ${from.name} and no corridor route` };
}
export function moveSpec(g: Game, sp: Spec, to: GNode): string | null {
  const e = moveEta(g, sp, to);
  if (!e.via) return e.why;
  const from = g.nodes[sp.node];
  return e.via === 'corridor' ? convoy(g, from, to, 0, [sp.id]) : launch(g, from, to, 0, [sp.id]);
}
export function canMissile(g: Game, from: GNode, to: GNode): string | null {
  if (from.spec !== 'silo' || from.missile < 1) return 'No missile ready';
  if (to.owner === from.owner) return 'Pick a node you do not own';
  if (dist(from, to) > CFG.missileRange) return 'Out of range';
  if (from.owner === PLAYER && g.vis[to.id] < 1) return 'Target is not in detection range';
  return null;
}
export function fireMissile(g: Game, from: GNode, to: GNode): string | null {
  const err = canMissile(g, from, to);
  if (err) return err;
  from.missile = 0;
  const f = mkFleet(g, from.owner, from, to.id);
  f.missile = true;
  return null;
}

// ---------------------------------------------------------------- rally and reinforce
/** Drones a node always keeps: enough to work its mines and lab. */
export const floorOf = (g: Game, n: GNode) => workers(g, n);
/** Seconds until the soonest hostile fleet the player can see reaches this node, or -1. */
export function incoming(g: Game, n: GNode): number {
  let best = -1;
  for (const f of g.fleets) if (f.to === n.id && f.owner !== n.owner && !f.missile && f.drones > 0 && fleetSeen(g, f)) { const t = eta(g, f, n); if (best < 0 || t < best) best = t; }
  return best;
}
export interface RallyLeg { src: GNode; k: number; lane: boolean; secs: number }
/** The Front a supply node answers to: the nearest one by travel time. */
function nearestFront(g: Game, src: GNode): number {
  let best = -1, bt = 1e9;
  for (const f of g.nodes) {
    if (f.owner !== src.owner || !f.front) continue;
    const lane = laneSecs(g, src, f), t = lane >= 0 ? Math.min(lane, dist(src, f) / CFG.fleetSpeed) : dist(src, f) / CFG.fleetSpeed;
    if (t < bt) { bt = t; best = f.id; }
  }
  return best;
}
/** Who would answer a rally at `to`. Normally only the supply nodes for which `to` is the nearest Front, so one
 *  front cannot starve another. Under attack it is a call for help: every supply node that can arrive in time. */
export function rallyPlan(g: Game, to: GNode): RallyLeg[] {
  const inc = incoming(g, to), out: RallyLeg[] = [];
  for (const src of g.nodes) {
    if (src.owner !== to.owner || src.id === to.id || src.front) continue;
    const k = src.drones - floorOf(g, src);
    if (k < 1) continue;
    const r = route(g, src, to);
    if (!r.via) continue;
    if (inc >= 0) { if (r.secs >= inc) continue; }
    else if (to.front && nearestFront(g, src) !== to.id) continue;
    out.push({ src, k, lane: r.via === 'corridor', secs: r.secs });
  }
  return out;
}
/** One action: mark this node as a Front and call in the spare Drones of its supply nodes, once. */
export function rally(g: Game, to: GNode): string | null {
  to.front = true;
  const plan = rallyPlan(g, to);
  if (!plan.length) return incoming(g, to) >= 0 ? 'No supply node can get Drones here in time' : 'No supply node has Drones to spare';
  for (const l of plan) { if (l.lane) convoy(g, l.src, to, l.k, []); else launch(g, l.src, to, l.k, []); }
  return null;
}
/** Planets short of the Drones their mines or lab need are staffed from the nearest node with spare. */
function staffTick(g: Game) {
  for (const n of g.nodes) {
    if (n.owner !== PLAYER) continue;
    const need = floorOf(g, n) - n.drones - g.fleets.filter(f => f.owner === PLAYER && (f.to === n.id || f.path?.includes(n.id))).reduce((s, f) => s + f.drones, 0);
    if (need <= 0) continue;
    const src = g.nodes.filter(o => o.owner === PLAYER && o.id !== n.id && o.drones - floorOf(g, o) >= need && (corridorPath(g, o.id, n.id) || slotsFree(g, o) > 0)).sort((a, b) => dist(a, n) - dist(b, n))[0];
    if (!src) continue;
    if (corridorPath(g, src.id, n.id)) convoy(g, src, n, need, []); else launch(g, src, n, need, []);
  }
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
  const opts = sample(g, POOL.filter(d => !owned.has(d)), 3 + (sideMods(g, PLAYER).offer || 0));
  if (!opts.length) { g.sides[PLAYER].ult += 20; return; }
  g.pending.push({ kind: 'spec', node: nodeId, opts, title: nodeId === g.home && g.t < 1 ? 'Your first recruit' : `Recruits at ${g.nodes[nodeId].name}` });
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
/** A prerequisite that is half of a doctrine pair is met by either half. */
export function preMet(have: string[], id: string): boolean {
  const pre = TECHS[id].pre;
  if (!pre) return true;
  return have.includes(pre) || (!!TECHS[pre].excl && have.includes(TECHS[pre].excl!));
}
/** Technologies on the frontier of the tree: prerequisite known, not locked out by a doctrine choice. */
export function techFrontier(g: Game, owner: number): string[] {
  const have = g.sides[owner].techs;
  return Object.keys(TECHS).filter(id => !have.includes(id) && preMet(have, id) && !(TECHS[id].excl && have.includes(TECHS[id].excl!)));
}
export const rpCost = (g: Game, owner: number) => CFG.rpBase + CFG.rpStep * g.sides[owner].techs.length;
export function offerTech(g: Game): boolean {
  const opts = sample(g, techFrontier(g, PLAYER), 3);
  if (!opts.length) return false;
  g.pending.push({ kind: 'tech', node: -1, opts, title: 'Research complete: choose one' });
  return true;
}
export function grantTech(g: Game, owner: number, id: string) {
  const side = g.sides[owner];
  if (side.techs.includes(id)) return;
  side.techs.push(id); g.modV++;
  if (owner === PLAYER) { g.stats.techs++; log(g, `Researched ${TECHS[id].name}`, 'good'); }
  else log(g, `${sideName(g, owner)} fielded ${TECHS[id].name}`, 'warn');
}

export function applyFx(g: Game, n: GNode, list: Fx[]) {
  const side = g.sides[PLAYER];
  for (const fx of list) {
    switch (fx[0]) {
      case 'ult': side.ult += fx[1]; break;
      case 'drones': n.drones += fx[1]; break;
      case 'relic': offerRelic(g, fx[1], n.id); break;
      case 'tech': if (!offerTech(g)) side.ult += 30; break;
      case 'spec': offerSpec(g, n.id); break;
      case 'xp': addXp(g, fx[1]); break;
      case 'shield': if (n.sh < 3) n.sh++; else side.ult += 20; break;
      case 'buff': n.buffs.push({ k: fx[1], v: fx[2], until: g.t + fx[3] }); g.modV++; break;
      case 'mobil': g.mob.prog = Math.max(0, Math.min(0.99, g.mob.prog + fx[1])); break;
      case 'hold': n.hold = { until: g.t + fx[1], total: fx[1], need: fx[2], fx: fx[3], name: n.event ? EVENTS[n.event].name : 'Operation' }; break;
      case 'reveal': for (const o of g.nodes) if (dist(o, n) <= fx[1]) o.buffs.push({ k: 'scan', v: 1, until: g.t + 45 }); updateVision(g); break;
      case 'ambush': {
        const a = rnd(g) * Math.PI * 2;
        g.fleets.push({ id: g.nextId++, owner: 0, home: -1, slot: false, from: n.id, to: n.id, x: n.x + Math.cos(a) * 48, y: n.y + Math.sin(a) * 48, drones: fx[1], specs: [], off: true });
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
/** Resolve the choice at the head of the queue. idx -1 skips a recruit or defers an event. */
export function choose(g: Game, idx: number): string | null {
  const p = g.pending[0];
  if (!p) return 'Nothing to choose';
  const side = g.sides[PLAYER];
  if (p.kind === 'event') {
    const n = g.nodes[p.node], ev = EVENTS[p.event!];
    if (idx < 0 || n.owner !== PLAYER || n.event !== p.event) { g.pending.shift(); return null; }
    const c = ev.choices[idx], err = eventChoiceOk(g, n, c);
    if (err) return err;
    if (c.ult) side.ult -= c.ult;
    if (c.drones) n.drones -= c.drones;
    g.pending.shift();
    applyFx(g, n, c.fx);
    n.event = null; g.stats.events++;
    log(g, `${ev.name}: ${c.label}`, 'info', n.id);
    if (n.kind === 'station') revealLore(g, n.id);
    return null;
  }
  if (p.kind === 'lore') { g.pending.shift(); return null; }
  if (p.kind === 'terms') {
    g.pending.shift();
    if (idx === 0) { g.result = 'win'; g.resultWhy = `Decisive victory. ${ARCHONS[g.sides[g.archon].fac].name} accepts your terms, and the Reach is free of the Coalition.`; }
    else log(g, 'You refuse terms. The Citadel must fall.', 'warn', g.citadel);
    return null;
  }
  if (p.kind === 'spec' && idx < 0) { g.pending.shift(); return null; }
  const o = p.opts[idx];
  if (o === undefined) return 'Pick one';
  g.pending.shift();
  if (p.kind === 'draft') {
    const sp = addSpec(g, o.base, PLAYER, g.home);
    sp.cmd = { base: o.base, arch: o.arch, lvl: 1, xp: 0, perks: [] }; sp.name = 'Commander';
    g.cmdSpec = sp.id;
    offerSpec(g, g.home);
  } else if (p.kind === 'spec') {
    const n = g.nodes[p.node].owner === PLAYER ? g.nodes[p.node] : homeOf(g, PLAYER);
    if (n) { const sp = addSpec(g, o, PLAYER, n.id); if (sideMods(g, PLAYER).recruitUp) { sp.lvl = 3; sp.xp = CFG.specXp[3]; } log(g, `${specName(sp)} joined at ${n.name}`, 'good', n.id); g.stats.specs++; }
  } else if (p.kind === 'relic') { side.relics.push(o); g.stats.relics++; log(g, `Relic claimed: ${RELICS[o].name}`, 'good'); }
  else if (p.kind === 'perk') g.specs[g.cmdSpec].cmd!.perks.push(o);
  else if (p.kind === 'tech') grantTech(g, PLAYER, o);
  g.modV++;
  return null;
}
/** Recover the next archive fragment and show it. */
export function revealLore(g: Game, nodeId: number) {
  const id = g.loreQueue.find(l => !g.lore.includes(l));
  if (!id) return;
  g.lore.push(id);
  g.pending.push({ kind: 'lore', node: nodeId, opts: [id], title: 'Archive fragment recovered' });
}
export function ransom(g: Game, sp: Spec, recruit: boolean): string | null {
  if (sp.held !== PLAYER || sp.node < 0) return 'Not your prisoner';
  const side = g.sides[PLAYER], m = sideMods(g, PLAYER), leader = sp.def === 'warlord' || sp.def === 'archon';
  if (leader) return 'Leaders cannot be ransomed or recruited';
  if (recruit) {
    if (sp.def === 'captain') return 'Captains cannot be recruited';
    if (g.specs.some(o => o.owner === PLAYER && o.def === sp.def)) return `You already have a ${SPECS[sp.def].name}`;
    const cost = m.recruitFree ? 0 : CFG.recruitCost;
    if (side.ult < cost) return 'Not enough Ultanium';
    side.ult -= cost;
    sp.owner = PLAYER; sp.cd = 0;
    toNode(g, sp, g.nodes[sp.node]);
    g.stats.specs++;
    log(g, `${specName(sp)} now works for you`, 'good', sp.node);
    return null;
  }
  side.ult += Math.round(CFG.ransom * (1 + (m.ransom || 0)));
  removeSpec(g, sp);
  return null;
}

// ---------------------------------------------------------------- the fixed step
export const rescueWindow = (g: Game) => CFG.rescueSecs + (sideMods(g, PLAYER).rescue || 0);
/** Stations build while upkeep stays within the army's share of income (the Coalition spends all of it). */
export const canProduce = (side: { kind: string; inc: number; upk: number; net: number }) => side.upk + CFG.upkeepDrone <= side.inc * (side.kind === 'player' ? CFG.armyShare : 1);
export const prodSecs = (g: Game, n: GNode, m?: Mods) => Math.max(2, CFG.prodSecs[n.lv] - ((m || nodeMods(g, n)).prodSecs || 0));

export function coreStep(g: Game) {
  const dt = CFG.dt;
  g.t += dt; g.tick++;
  if (g.tick % 10 === 1) for (const o in g.sides) { const e = economy(g, +o), s = g.sides[o]; s.inc = e.inc; s.upk = e.upk; s.net = e.net; s.rpm = e.rpm; }

  for (const n of g.nodes) {
    if (n.buffs.length && n.buffs.some(b => b.until <= g.t)) { n.buffs = n.buffs.filter(b => b.until > g.t); g.modV++; }
    const side = g.sides[n.owner];
    const m = side ? nodeMods(g, n) : {};
    const mx = shieldMax(g, n, m);
    if (n.shields < mx && !m.noRegen) n.shields = Math.min(mx, n.shields + (dt * (1 + (m.regen || 0))) / CFG.shieldRegenSecs);
    else if (n.shields > mx && !(m.capHold)) n.shields = Math.max(mx, n.shields - dt / 10);
    if (!side) continue;
    const t = n.queue[0];
    if (t) { t.left -= dt * (1 + (m.build || 0)); if (t.left <= 0) { n.queue.shift(); completeTask(g, n, t); } }
    const make = () => { n.drones++; side.net -= CFG.upkeepDrone; side.upk += CFG.upkeepDrone; if (n.owner === PLAYER) g.stats.dronesMade++; };
    if (side.produce && canProduce(side)) {
      if (n.kind === 'station') { n.prod += dt; if (n.prod >= prodSecs(g, n, m)) { n.prod = 0; make(); } }
      if (m.train) { n.trainT += (dt * m.train) / 60; if (n.trainT >= 1) { n.trainT -= 1; make(); } } // a Drill Sergeant trains them anywhere
    }
    if (n.dest) { // the Flagship under way
      const d = dist(n, n.dest), st = CFG.flagshipSpeed * dt;
      if (g.corridors.some(c => c.a === n.id || c.b === n.id)) g.corridors = g.corridors.filter(c => c.a !== n.id && c.b !== n.id);
      if (d <= st) { n.x = n.dest.x; n.y = n.dest.y; n.dest = null; if (n.owner === PLAYER) log(g, `${n.name} has dropped anchor`, 'info', n.id); }
      else { n.x += ((n.dest.x - n.x) / d) * st; n.y += ((n.dest.y - n.y) / d) * st; }
    }
    if (n.hold && g.t >= n.hold.until) {
      const h = n.hold; n.hold = null;
      if (n.drones >= h.need) { log(g, `${h.name} complete at ${n.name}`, 'good', n.id); applyFx(g, n, h.fx); }
      else log(g, `${h.name} failed at ${n.name}: fewer than ${h.need} Drones on site`, 'bad', n.id);
    }
  }

  for (const o in g.sides) {
    const side = g.sides[o];
    side.ult += (side.net * dt) / 60;
    if (side.kind === 'player') { g.stats.ultMade += (side.inc * dt) / 60; side.rp += (side.rpm * dt) / 60; }
    if (side.ult < 0) {
      side.ult = 0; side.desertT += dt;
      if (side.desertT >= CFG.desertSecs) {
        side.desertT = 0;
        const big = g.nodes.filter(n => n.owner === +o && n.drones > 0).sort((a, b) => b.drones - a.drones)[0];
        if (big) { big.drones--; side.net += CFG.upkeepDrone; if (side.kind === 'player' && g.tick % 300 < 40) log(g, 'You cannot pay your Drones: they are deserting', 'bad', big.id); }
      }
    }
  }
  const ps = g.sides[PLAYER];
  if (ps.rp >= rpCost(g, PLAYER) && !g.pending.some(p => p.kind === 'tech')) { const c = rpCost(g, PLAYER); if (offerTech(g)) ps.rp -= c; else ps.rp = c; }

  for (const f of g.fleets.slice()) {
    const to = g.nodes[f.to], d = dist(f, to), step = fleetSpeed(g, f) * dt;
    const hostile = !f.missile && !f.lane && !f.probe && f.drones > 0 && to.owner !== f.owner;
    if (f.fight !== undefined) { // engaged: the battle plays out, then the outcome lands
      if (!hostile) { delete f.fight; arrive(g, f); continue; }
      f.fight -= dt;
      if (f.fight <= 0) { delete f.fight; arrive(g, f); }
      continue;
    }
    if (hostile && d <= step + CFG.engageDist) {
      const k = Math.max(0, d - CFG.engageDist) / Math.max(d, 0.001);
      f.x += (to.x - f.x) * k; f.y += (to.y - f.y) * k; f.fight = CFG.fightSecs;
      continue;
    }
    if (d <= step) arrive(g, f);
    else { f.x += ((to.x - f.x) / d) * step; f.y += ((to.y - f.y) / d) * step; }
  }
  if (g.tick % 20 === 0) staffTick(g);

  const cmd = g.specs[g.cmdSpec];
  if (cmd) {
    if (cmd.owner !== PLAYER) { g.result = 'lose'; g.resultWhy = 'Your Commander was lost.'; }
    else if (cmd.held) {
      if (g.cmdLostT < 0) { g.cmdLostT = g.t; log(g, `YOUR COMMANDER IS A PRISONER at ${g.nodes[cmd.node].name}. Retake it before the window closes.`, 'bad', cmd.node); }
      else if (g.t - g.cmdLostT >= rescueWindow(g)) { g.result = 'lose'; g.resultWhy = `Your Commander was not recovered from ${g.nodes[cmd.node].name} in time.`; }
    } else g.cmdLostT = -1;
    if (!g.result && !g.nodes.some(n => n.owner === PLAYER)) { g.result = 'lose'; g.resultWhy = 'You hold no territory.'; }
  }
  if (g.tick % 3 === 0) updateVision(g);
}
export { pick };
