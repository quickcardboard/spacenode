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

/** Side-wide modifiers: relics, research, faction traits, and the Commander's archetype and perks.
 *  Ordinary officers never add side-wide effects: theirs work only where they are. */
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
      if (sp.owner !== owner || sp.held || !sp.cmd) continue;
      addMods(out, ARCHS[sp.cmd.arch].glob);
      for (const p of sp.cmd.perks) addMods(out, PERK[p]?.glob);
    }
  }
  c.m[owner] = out;
  return out;
}

/** Upgraded: an officer once it has earned enough experience; the Commander from level 3. */
export const isUp = (sp: Spec) => (sp.cmd ? sp.cmd.lvl >= 3 : sp.lvl >= 2);
/** A officer's Power: adds to attack when aboard and to defence where stationed. */
export function power(g: Game, sp: Spec): number {
  const d = SPECS[sp.def];
  if (d.hidden) return d.pow;
  const p = sp.cmd ? CMD_POW + (sp.cmd.lvl >= 3 ? 1 : 0) + (sp.cmd.lvl >= 5 ? 1 : 0) : d.pow + (isUp(sp) ? d.up.pow || 0 : 0);
  return p + (sideMods(g, sp.owner).powAll || 0);
}
/** Command: how many Drones this officer can lead into an attack. */
export function command(g: Game, sp: Spec, stage = 1): number {
  const d = SPECS[sp.def];
  if (sp.def === 'captain') return CFG.captainCmd + CFG.captainCmdStage * (stage - 1);
  if (d.hidden) return d.cmd;
  const sm = sideMods(g, sp.owner);
  if (sp.cmd) return CFG.cmdCommander + CFG.cmdPerLvl * (sp.cmd.lvl - 1) + (sm.cmdCmd || 0) + (sm.cmdAll || 0);
  return d.cmd + (isUp(sp) ? d.up.cmd || 0 : 0) + (sm.cmdAll || 0);
}
export const commandOf = (g: Game, ids: number[]) => ids.reduce((t, i) => t + (g.specs[i] ? command(g, g.specs[i], g.mob.stage) : 0), 0);
/** Upkeep per minute: by rarity, more once upgraded. The Commander and Coalition officers are free. */
export const specUpkeep = (g: Game, sp: Spec) => {
  const d = SPECS[sp.def];
  if (sp.cmd || d.hidden) return 0;
  return (CFG.upkeepRarity[d.rarity] + (isUp(sp) ? CFG.upkeepUp : 0)) * (1 - Math.min(0.75, sideMods(g, sp.owner).specUpkeep || 0));
};

/** What one officer's own effect contributes where they are (not counting charges). */
export function specLoc(g: Game, sp: Spec): Mods {
  const out: Mods = {}, d = SPECS[sp.def];
  addMods(out, d.loc);
  if (isUp(sp)) addMods(out, d.up.loc);
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
  return (isUp(sp) && d.up.cd ? d.up.cd : d.charge.cd) * (1 + (sideMods(g, sp.owner).cdSlow || 0));
}
/** Officers among ids whose charge is ready for this kind of moment. */
export function readyCharges(g: Game, ids: number[], on: 'attack' | 'defend' | 'fall' | 'fail'): Spec[] {
  return ids.map(i => g.specs[i]).filter(sp => sp && !sp.held && SPECS[sp.def].charge?.on === on && sp.cd <= g.t);
}
/** How good an officer is, for Echo: rarity first, then upgraded, then Power. */
const worthOf = (g: Game, sp: Spec) => SPECS[sp.def].rarity * 100 + (isUp(sp) ? 10 : 0) + power(g, sp);

/** Modifiers at a place: side-wide ones, the officers there, timed effects, and ready charges for `on`. */
export function locMods(g: Game, owner: number, specIds: number[], buffs: Buff[], on?: 'attack' | 'defend'): Mods {
  const out: Mods = {};
  addMods(out, sideMods(g, owner));
  let echo = false, best: Spec | null = null;
  for (const id of specIds) {
    const sp = g.specs[id];
    if (!sp || sp.owner !== owner || sp.held) continue;
    if (sp.def === 'echo') echo = true; else if (!best || worthOf(g, sp) > worthOf(g, best)) best = sp;
    addMods(out, specLoc(g, sp));
  }
  if (echo && best) addMods(out, specLoc(g, best)); // Echo doubles the best officer beside it
  for (const b of buffs) if (b.until > g.t) out[b.k] = (out[b.k] || 0) + b.v;
  if (on) for (const sp of readyCharges(g, specIds, on)) addMods(out, SPECS[sp.def].charge!.mods);
  return out;
}
