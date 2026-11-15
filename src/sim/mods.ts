import type { Game, Mods, Spec, Buff } from './types';
import { SPECS, ARCHS, PERKS, RELICS, TECHS, FACTIONS, ARCHONS, CMD_POW } from './content';
import { CFG } from './config';

export function addMods(into: Mods, m: Mods | undefined, k = 1) {
  if (!m) return;
  for (const key in m) into[key] = (into[key] || 0) + m[key] * k;
}
const PERK: Record<string, (typeof PERKS)[number]> = {};
for (const p of PERKS) PERK[p.id] = p;
export const perkDef = (id: string) => PERK[id];

const cache = new WeakMap<Game, { stamp: number; m: Record<number, Mods> }>();

/** Side-wide modifiers: relics, research, specialists' global passives, perks, faction traits. */
export function sideMods(g: Game, owner: number): Mods {
  let c = cache.get(g);
  if (!c || c.stamp !== g.modV) { c = { stamp: g.modV, m: {} }; cache.set(g, c); }
  if (c.m[owner]) return c.m[owner];
  const out: Mods = {};
  const side = g.sides[owner];
  if (side) {
    for (const r of side.relics) addMods(out, RELICS[r]?.mods);
    for (const t of side.techs) addMods(out, TECHS[t]?.mods);
    if (side.kind === 'faction') addMods(out, FACTIONS[side.fac].mods);
    if (side.kind === 'archon') addMods(out, ARCHONS[side.fac].mods);
    if (side.kind === 'player') addMods(out, ARCHONS[g.sides[g.archon].fac].pmods);
    for (const sp of g.specs) {
      if (sp.owner !== owner || sp.held) continue;
      const d = SPECS[sp.def], L = sp.cmd ? sp.cmd.lvl : sp.lvl;
      addMods(out, d.glob, L >= 5 && !sp.cmd ? 2 : 1);
      if (L >= 3 && !sp.cmd) addMods(out, d.up.glob, L >= 5 ? 2 : 1);
      if (sp.cmd) { addMods(out, ARCHS[sp.cmd.arch].glob); for (const p of sp.cmd.perks) addMods(out, PERK[p]?.glob); }
    }
  }
  c.m[owner] = out;
  return out;
}

/** Where a specialist is on the map right now (their node, or their fleet). */
function specPos(g: Game, sp: Spec): { x: number; y: number } | null {
  if (sp.node >= 0) return g.nodes[sp.node];
  if (sp.fleet >= 0) return g.fleets.find(f => f.id === sp.fleet) || null;
  return null;
}
/** The owner's Flagship, if they have one. */
export const flagshipOf = (g: Game, owner: number) => g.nodes.find(n => n.flagship && n.owner === owner) || null;
/** Level as it counts right now: their own, plus one within reach of their side's Flagship (never above 5). */
export function level(g: Game, sp: Spec): number {
  const base = sp.cmd ? sp.cmd.lvl : sp.lvl || 1;
  if (base >= 5 || sp.held) return base;
  const fs = flagshipOf(g, sp.owner), at = fs && specPos(g, sp);
  return fs && at && Math.hypot(fs.x - at.x, fs.y - at.y) <= CFG.flagshipAura ? base + 1 : base;
}
/** A specialist's Power: adds to attack when aboard and to defence where stationed. */
export function power(g: Game, sp: Spec): number {
  const d = SPECS[sp.def], L = level(g, sp);
  let p = sp.cmd ? CMD_POW + (L >= 3 ? 1 : 0) + (L >= 5 ? 1 : 0) : d.pow + (L >= 2 ? 1 : 0) + (L >= 4 ? 1 : 0) + (L >= 3 ? d.up.pow || 0 : 0);
  if (d.hidden) p = d.pow;
  p += sideMods(g, sp.owner).powAll || 0;
  return p;
}
/** Command: how many Drones this specialist can lead into an attack. */
export function command(g: Game, sp: Spec, stage = 1): number {
  const d = SPECS[sp.def];
  if (sp.def === 'captain') return CFG.captainCmd + CFG.captainCmdStage * (stage - 1);
  if (d.hidden) return CFG.cmdBase;
  const L = level(g, sp);
  return (sp.cmd ? CFG.cmdCommander : d.cmd ?? CFG.cmdBase) + CFG.cmdPerLvl * (L - 1) + (sideMods(g, sp.owner).cmdAll || 0);
}
export const commandOf = (g: Game, ids: number[]) => ids.reduce((t, i) => t + (g.specs[i] ? command(g, g.specs[i], g.mob.stage) : 0), 0);
export const specUpkeep = (g: Game, sp: Spec) => (sp.cmd ? 0 : power(g, sp) * CFG.upkeepPower * (1 - Math.min(0.75, sideMods(g, sp.owner).specUpkeep || 0)));

/** What one specialist's passive contributes where it stands (not counting charges). */
export function specLoc(g: Game, sp: Spec): Mods {
  const out: Mods = {}, d = SPECS[sp.def], L = level(g, sp);
  addMods(out, d.loc);
  if (L >= 3 && !sp.cmd) addMods(out, d.up.loc);
  if (L >= 5 && !sp.cmd) addMods(out, out); // mastery: the passive counts twice
  if (sp.cmd) {
    addMods(out, ARCHS[sp.cmd.arch].loc);
    for (const p of sp.cmd.perks) addMods(out, PERK[p]?.loc);
    if (sideMods(g, sp.owner).cmdDouble) addMods(out, out);
  }
  return out;
}
export function chargeCd(g: Game, sp: Spec): number {
  const d = SPECS[sp.def];
  if (!d.charge) return 0;
  return (level(g, sp) >= 3 && d.up.cd ? d.up.cd : d.charge.cd) * (1 + (sideMods(g, sp.owner).cdSlow || 0));
}
/** Specialists among ids whose charged effect is ready for this kind of moment. */
export function readyCharges(g: Game, ids: number[], on: 'attack' | 'defend' | 'fall' | 'fail'): Spec[] {
  return ids.map(i => g.specs[i]).filter(sp => sp && !sp.held && SPECS[sp.def].charge?.on === on && sp.cd <= g.t);
}

/** Modifiers at a place: side-wide ones, the active specialists there, timed buffs, and ready charges for `on`. */
export function locMods(g: Game, owner: number, specIds: number[], buffs: Buff[], on?: 'attack' | 'defend'): Mods {
  const out: Mods = {};
  addMods(out, sideMods(g, owner));
  let echo = false, first: Spec | null = null;
  for (const id of specIds) {
    const sp = g.specs[id];
    if (!sp || sp.owner !== owner || sp.held) continue;
    if (sp.def === 'echo') echo = true; else if (!sp.cmd && (!first || power(g, sp) > power(g, first))) first = sp; // Echo doubles the strongest
    addMods(out, specLoc(g, sp));
  }
  if (echo && first) addMods(out, specLoc(g, first));
  for (const b of buffs) if (b.until > g.t) out[b.k] = (out[b.k] || 0) + b.v;
  if (on) for (const sp of readyCharges(g, specIds, on)) addMods(out, SPECS[sp.def].charge!.mods);
  return out;
}
