import type { Game, Mods, Spec, Buff, Ship } from './types';
import { SPECS, ARCHS, ARCH_GLOB, PERKS, RELICS, TECHS, FACTIONS, ARCHONS } from './content';

export function addMods(into: Mods, m: Mods | undefined, k = 1) {
  if (!m) return;
  for (const key in m) into[key] = (into[key] || 0) + m[key] * k;
}

const PERK: Record<string, (typeof PERKS)[number]> = {};
for (const p of PERKS) PERK[p.id] = p;
export const perkDef = (id: string) => PERK[id];

const cache = new WeakMap<Game, { stamp: number; m: Record<number, Mods> }>();

/** Side-wide modifiers: relics, technologies, global specialist passives, perks, faction traits. */
export function sideMods(g: Game, owner: number): Mods {
  const stamp = g.modV;
  let c = cache.get(g);
  if (!c || c.stamp !== stamp) { c = { stamp, m: {} }; cache.set(g, c); }
  if (c.m[owner]) return c.m[owner];
  const out: Mods = {};
  const side = g.sides[owner];
  if (side) {
    for (const r of side.relics) addMods(out, RELICS[r]?.mods);
    for (const t of side.techs) addMods(out, TECHS[t]?.mods);
    for (const t in side.techLv || {}) addMods(out, TECHS[t]?.mods, side.techLv[t]);
    if (side.kind === 'faction') { addMods(out, FACTIONS[side.fac].mods); if (side.broken) out.prod = (out.prod || 0) - 0.6; }
    if (side.kind === 'archon') addMods(out, ARCHONS[side.fac].mods);
    if (side.kind === 'player') addMods(out, ARCHONS[g.sides[g.archon].fac].pmods);
    for (const sp of g.specs) {
      if (sp.owner !== owner || sp.held) continue;
      addMods(out, SPECS[sp.def].glob);
      if (sp.cmd) {
        addMods(out, ARCH_GLOB[sp.cmd.arch]);
        for (const p of sp.cmd.perks) addMods(out, PERK[p]?.glob);
      }
    }
  }
  c.m[owner] = out;
  return out;
}

/** What one specialist contributes to the node or ship it is standing on. */
export function specLoc(g: Game, sp: Spec): Mods {
  const out: Mods = {};
  addMods(out, SPECS[sp.def].loc);
  if (sp.cmd) {
    addMods(out, ARCHS[sp.cmd.arch].loc);
    for (const p of sp.cmd.perks) addMods(out, PERK[p]?.loc);
    if (sideMods(g, sp.owner).cmdDouble) addMods(out, out);
  }
  return out;
}

export function locMods(g: Game, owner: number, specIds: number[], buffs: Buff[]): Mods {
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
  return out;
}

export const nodeMods = (g: Game, n: { owner: number; specs: number[]; buffs: Buff[] }) => locMods(g, n.owner, n.specs, n.buffs);
export const shipMods = (g: Game, s: Ship) => locMods(g, s.owner, s.specs, s.buffs);
