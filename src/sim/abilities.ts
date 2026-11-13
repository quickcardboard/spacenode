import type { Game, Spec, GNode, Ship } from './types';
import { PLAYER } from './types';
import { SPECS, ARCHS, TECHS, type AbilityDef } from './content';
import { BUILD, CFG } from './config';
import { sideMods } from './mods';
import { dist, shipById, homeOf, toNode, log, updateVision, startBuild, natMax, totalDrones, droneCap, capture, calcBattle, convert, BIG, slots, corridorBetween } from './core';

export function abilitiesOf(sp: Spec): AbilityDef[] {
  const out: AbilityDef[] = [];
  const a = SPECS[sp.def].active;
  if (a) out.push(a);
  if (sp.cmd) { out.push(ARCHS[sp.cmd.arch].a); if (sp.cmd.lvl >= 3) out.push(ARCHS[sp.cmd.arch].b); }
  return out;
}
export const cdLeft = (g: Game, sp: Spec, id: string) => Math.max(0, (sp.cd[id] || 0) - g.t);

interface Ctx { g: Game; sp: Spec; n: GNode | null; s: Ship | null; here: GNode | Ship; t: GNode | null }
type Impl = (c: Ctx) => string | null;

const addDrones = (c: Ctx, k: number) => {
  const room = droneCap(c.g, c.sp.owner) - totalDrones(c.g, c.sp.owner);
  const add = Math.max(0, Math.min(k, room));
  if (add <= 0) return 'Drone cap reached';
  c.here.drones += add; return null;
};
const shipBuff = (k: string, v: number, secs = BIG): Impl => c => { c.s!.buffs.push({ k, v, until: secs >= BIG ? BIG : c.g.t + secs }); return null; };
const nodeBuff = (k: string, v: number, secs: number): Impl => c => { c.n!.buffs.push({ k, v, until: c.g.t + secs }); return null; };
const tgtBuff = (k: string, v: number, secs: number): Impl => c => { c.t!.buffs.push({ k, v, until: c.g.t + secs }); updateVision(c.g); return null; };
const scanAround = (r: number, secs: number): Impl => c => { for (const o of c.g.nodes) if (dist(o, c.here) <= r) o.buffs.push({ k: 'scan', v: 1, until: c.g.t + secs }); updateVision(c.g); return null; };
const others = (c: Ctx) => (c.n ? c.n.specs : c.s!.specs).map(i => c.g.specs[i]).filter(o => o.id !== c.sp.id && o.owner === c.sp.owner);
const resetCds: Impl = c => { const o = others(c); if (!o.length) return 'No other specialist here'; for (const sp of o) sp.cd = {}; return null; };
const research = (secs: number): Impl => c => {
  const n = c.n!, side = c.g.sides[n.owner];
  if (!n.research) return 'No research running here';
  side.techProg[n.research] = (side.techProg[n.research] || 0) + secs; return null;
};
const goHome: Impl = c => {
  const h = homeOf(c.g, c.sp.owner);
  if (!h || (c.n && h.id === c.n.id)) return 'Already home';
  const all = (c.n ? c.n.specs : c.s!.specs).slice();
  for (const i of all) toNode(c.g, c.g.specs[i], h);
  return null;
};
const cull = (pct: number): Impl => c => { c.t!.drones -= Math.floor(c.t!.drones * pct); updateVision(c.g); return null; };

const IMPL: Record<string, Impl> = {
  fullburn: shipBuff('speed', 0.5, 30),
  repair: c => { const n = c.n!; if (n.lane) n.lane.left = Math.max(0.1, n.lane.left - 25); n.nat = natMax(c.g, n); return null; },
  surge: nodeBuff('mine', 0.5, 60),
  deepscan: tgtBuff('scan', 1, 60),
  flank: shipBuff('ignNat', 1),
  lockdown: nodeBuff('def', 6, 45),
  sabotage: tgtBuff('frozen', 1, 45),
  parley: tgtBuff('def', -5, 60),
  breakthrough: research(30),
  extraction: goHome,
  ambush: nodeBuff('ambush', 0.3, 90),
  convert: c => {
    const n = c.n!;
    if (n.conv) return 'A conversion is already running here';
    const p = n.prisoners.map(i => c.g.specs[i]).find(sp => sp.held === PLAYER && sp.def !== 'warlord' && sp.def !== 'archon');
    if (!p) return 'No convertible prisoner here';
    n.conv = { spec: p.id, until: c.g.t + 60 }; return null;
  },
  conscript: c => addDrones(c, 6),
  chart: scanAround(160, 40),
  strip: c => { c.g.sides[c.sp.owner].ult += 20; c.n!.buffs.push({ k: 'offline', v: 1, until: c.g.t + 60 }); return null; },
  smoke: c => {
    const inc = c.g.ships.filter(s => s.at < 0 && s.to === c.n!.id && s.owner !== c.sp.owner);
    if (!inc.length) return 'No enemy fleet is heading here';
    for (const s of inc) {
      const o = c.g.nodes[s.from];
      const back = o.owner === s.owner ? o : homeOf(c.g, s.owner);
      if (back) { s.to = back.id; s.off = false; } else s.drones = 0;
    }
    c.g.offs = c.g.offs.filter(o => o.target !== c.n!.id);
    return null;
  },
  breach: c => { c.t!.nat = 0; c.t!.buffs.push({ k: 'noRegen', v: 1, until: c.g.t + 60 }); updateVision(c.g); return null; },
  laststand: nodeBuff('dbl', 1, 30),
  reprise: resetCds,
  bribe: c => {
    const t = c.t!, g = c.g, str = t.drones + Math.floor(t.nat);
    if (str > 14) return 'Too strong to buy (strength above 14)';
    const cost = 2 * str;
    if (g.sides[PLAYER].ult < cost) return `Needs ${cost} Ultanium`;
    const ship = g.ships.find(s => s.owner === PLAYER && s.at >= 0 && s.loadUntil === 0);
    g.sides[PLAYER].ult -= cost;
    // Ownership changes hands through the normal capture path so rewards and events fire.
    const fake: Ship = { id: -99, owner: PLAYER, seq: 0, at: -1, from: t.id, to: t.id, x: t.x, y: t.y, drones: 0, specs: [], buffs: [], loadUntil: 0, redirected: false, back: false, off: false };
    void ship;
    const r = calcBattle(g, 0, {}, t, {}); r.win = true; r.surv = 0; r.sent = 0;
    capture(g, t, fake, r, {});
    return null;
  },
  fence: c => { c.g.sides[c.sp.owner].ult += 2 * c.g.nodes.filter(n => n.owner === c.sp.owner).length; return null; },
  rampart: c => { c.n!.nat = natMax(c.g, c.n!); return null; },
  levy: c => { let any = false; for (const n of c.g.nodes) if (n.owner === c.sp.owner && n.kind === 'station' && totalDrones(c.g, c.sp.owner) + 3 <= droneCap(c.g, c.sp.owner)) { n.drones += 3; any = true; } return any ? null : 'Drone cap reached'; },
  foresight: c => { c.g.mob.prog = Math.max(0, c.g.mob.prog - 0.1); return null; },
  charge: shipBuff('atk', 5),
  slingshot: nodeBuff('sling', 1, 30),
  vein: c => { c.g.sides[c.sp.owner].ult += 25; return null; },
  fortify: c => {
    const n = c.n!, id = n.kind === 'planet' ? 'shield' : (n.b.turret || 0) < BUILD.turret.max ? 'turret' : 'screen';
    if ((n.b[id] || 0) >= BUILD[id].max) return 'No room for another structure';
    n.b[id] = (n.b[id] || 0) + 1; return null;
  },
  bloodrush: c => { c.s!.buffs.push({ k: 'atkPct', v: 0.4, until: BIG }, { k: 'surv', v: -0.3, until: BIG }); return null; },
  focus: nodeBuff('preKill', 0.3, 45),
  raidA: cull(0.25),
  warp: c => { const s = c.s!, to = c.g.nodes[s.to]; s.x += (to.x - s.x) / 2; s.y += (to.y - s.y) / 2; return null; },
  decisive: shipBuff('atkPct', 0.3),
  rally: c => addDrones(c, 8),
  slipstream: shipBuff('speed', 1, 40),
  sweep: scanAround(200, 45),
  aegis: nodeBuff('def', 10, 45),
  recall: goHome,
  crash: c => { if (!c.n!.lane) return 'Nothing is being built here'; c.n!.lane.left = 0.05; return null; },
  windfall: c => { c.g.sides[c.sp.owner].ult += 3 * c.g.nodes.filter(n => n.owner === c.sp.owner && n.kind === 'planet').length; return null; },
  raid: cull(0.3),
  pressgang: c => addDrones(c, Math.min(10, Math.max(1, Math.floor(c.here.drones * 0.2)))),
  insight: resetCds,
  eureka: research(60),
  rapidlink: c => {
    const a = c.n!, b = c.t!;
    if (corridorBetween(c.g, a.id, b.id)) return 'Already linked';
    if (dist(a, b) > CFG.corridorRange * 1.5) return 'Too far for a temporary corridor';
    c.g.corridors.push({ a: a.id, b: b.id, owner: c.sp.owner, until: c.g.t + 60 }); return null;
  },
};
void startBuild; void convert; void slots; void TECHS;

export function abilityCheck(g: Game, sp: Spec, a: AbilityDef, target: GNode | null): string | null {
  if (sp.held) return 'Specialist is a prisoner';
  if (cdLeft(g, sp, a.id) > 0) return 'On cooldown';
  const s = sp.ship >= 0 ? shipById(g, sp.ship) || null : null;
  const inFlight = !!s && s.at < 0;
  if (a.at === 'ship' && !inFlight) return 'Use while the ship is in flight';
  if ((a.at === 'node' || a.at === 'planet') && sp.node < 0) return 'Use while stationed at a node';
  if (a.at === 'planet' && g.nodes[sp.node].kind !== 'planet') return 'Use on a planet';
  if (a.target !== 'self') {
    if (!target) return 'Pick a target';
    const v = g.vis[target.id];
    if (a.target === 'own') { if (target.owner !== sp.owner) return 'Pick one of your nodes'; if (target.id === sp.node) return 'Pick a different node'; }
    else if (a.target === 'node') { if (v < 1) return 'Target must be detected'; if (target.owner === PLAYER) return 'Pick a node you do not own'; }
    else {
      if (v < 2) return 'Target must be fully identified';
      if (target.owner === PLAYER) return 'Pick a node you do not own';
      if (a.target === 'neutral' && target.owner !== 0) return 'Pick a neutral node';
      if (a.target === 'enemy' && target.owner === 0) return 'Pick an enemy node';
    }
  }
  return null;
}

export function useAbility(g: Game, sp: Spec, id: string, target: GNode | null): string | null {
  const a = abilitiesOf(sp).find(x => x.id === id);
  if (!a) return 'Unknown ability';
  const err = abilityCheck(g, sp, a, target);
  if (err) return err;
  const s = sp.ship >= 0 ? shipById(g, sp.ship)! : null;
  const n = sp.node >= 0 ? g.nodes[sp.node] : null;
  const r = IMPL[id]({ g, sp, n, s, here: (n || s)!, t: target });
  if (r) return r;
  const k = Math.max(0.4, Math.min(1.6, 1 - (sideMods(g, sp.owner).cd || 0)));
  sp.cd[id] = g.t + a.cd * k;
  g.modV++;
  if (sp.owner === PLAYER) log(g, `${sp.name || SPECS[sp.def].name}: ${a.name}`, 'info', n ? n.id : -1);
  return null;
}
