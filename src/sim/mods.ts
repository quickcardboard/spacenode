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
      const d = SPECS[sp.def];
      addMods(out, d.glob);
      if (sp.up) addMods(out, d.up.glob);
      if (sp.cmd) { addMods(out, ARCHS[sp.cmd.arch].glob); for (const p of sp.cmd.perks) addMods(out, PERK[p]?.glob); }
    }
  }
  c.m[owner] = out;
  return out;
}

/** A specialist's Power: adds to attack when aboard and to defence where stationed. */
export function power(g: Game, sp: Spec): number {
  const d = SPECS[sp.def];
  let p = sp.cmd ? CMD_POW + (sp.cmd.lvl >= 3 ? 1 : 0) + (sp.cmd.lvl >= 5 ? 1 : 0) : d.pow + (sp.up ? d.up.pow || 0 : 0);
  p += sideMods(g, sp.owner).powAll || 0;
  return p;
}
export const specUpkeep = (g: Game, sp: Spec) => (sp.cmd ? 0 : power(g, sp) * CFG.upkeepPower * (1 - Math.min(0.75, sideMods(g, sp.owner).specUpkeep || 0)));

/** What one specialist's passive contributes where it stands (not counting charges). */
export function specLoc(g: Game, sp: Spec): Mods {
  const out: Mods = {}, d = SPECS[sp.def];
  addMods(out, d.loc);
  if (sp.up) addMods(out, d.up.loc);
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
  return (sp.up && d.up.cd ? d.up.cd : d.charge.cd) * (1 + (sideMods(g, sp.owner).cdSlow || 0));
}
/** Specialists among ids whose charged effect is ready for this kind of moment. */
export function readyCharges(g: Game, ids: number[], on: 'attack' | 'defend' | 'fall'): Spec[] {
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
    if (sp.def === 'echo') echo = true; else if (!first && !sp.cmd) first = sp;
    addMods(out, specLoc(g, sp));
  }
  if (echo && first) addMods(out, specLoc(g, first));
  for (const b of buffs) if (b.until > g.t) out[b.k] = (out[b.k] || 0) + b.v;
  if (on) for (const sp of readyCharges(g, specIds, on)) addMods(out, SPECS[sp.def].charge!.mods);
  return out;
}
