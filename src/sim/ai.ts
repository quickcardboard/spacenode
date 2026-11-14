import type { Game, GNode } from './types';
import { PLAYER } from './types';
import { CFG } from './config';
import { FACTIONS, type FactionDef } from './content';
import { sideMods } from './mods';
import { rnd, rr, ri } from './rng';
import { dist, log, sideName, canUp, startUp, launch, calcBattle, eta, grantTech, slotsFree, addSpec, fleetMods, fireMissile, canMissile } from './core';

const ARCHON_AI: FactionDef['ai'] = { aggr: 1, expand: 1e9, react: 0.9, target: 'weak', shield: 3, planet: 'refinery', station: 'depot' };
const aiOf = (g: Game, o: number) => (g.sides[o].kind === 'faction' ? FACTIONS[g.sides[o].fac].ai : ARCHON_AI);
const strength = (g: Game, n: GNode) => calcBattle(g, 0, 0, [], n, {}).def;

/** Coalition attacks are led by a Captain: a minor officer with Power 1 who can be captured and ransomed. */
function attack(g: Game, from: GNode, to: GNode, drones: number): boolean {
  const cap = addSpec(g, 'captain', from.owner, from.id);
  const err = launch(g, from, to, drones, [cap.id]);
  if (err) { from.specs = from.specs.filter(i => i !== cap.id); cap.owner = -1; cap.node = -1; return false; }
  return true;
}

function think(g: Game, o: number) {
  const side = g.sides[o], ai = aiOf(g, o);
  const own = g.nodes.filter(n => n.owner === o);
  if (!own.length || side.broken) return;

  // Upgrades: shields up to the faction's taste, then levels, then a specialty
  for (const n of own) {
    if (n.task) continue;
    if (n.spec === 'silo' && !n.missile && !canUp(g, n, 'missile')) { startUp(g, n, 'missile'); continue; }
    if (rnd(g) > 0.35) continue;
    if (n.sh < Math.min(3, ai.shield) && !canUp(g, n, 'sh')) startUp(g, n, 'sh');
    else if (!n.spec && !canUp(g, n, 'spec', n.kind === 'planet' ? ai.planet : ai.station)) startUp(g, n, 'spec', n.kind === 'planet' ? ai.planet : ai.station);
    else if (n.lv < 3 && !canUp(g, n, 'lv')) startUp(g, n, 'lv');
  }

  // React to visible player fleets heading for this side's nodes
  for (const pf of g.fleets) {
    if (pf.owner !== PLAYER || pf.drones <= 0 || pf.noticed || pf.lane) continue;
    const tgt = g.nodes[pf.to];
    if (tgt.owner !== o) continue;
    pf.noticed = true;
    if (fleetMods(g, pf).stealth || rnd(g) > ai.react) continue;
    const t = eta(g, pf, tgt);
    const src = own.filter(n => n.id !== tgt.id && n.drones > 4 && slotsFree(g, n) > 0 && dist(n, tgt) / CFG.fleetSpeed + 1 < t).sort((a, b) => b.drones - a.drones)[0];
    if (src) launch(g, src, tgt, Math.floor((src.drones - 2) * 0.6), []);
  }

  // Garrison duty: top up thin outposts from the fattest node
  const thin = own.filter(n => !n.capital && n.drones < 2 + Math.round(n.threat * 3)).sort((a, b) => a.drones - b.drones)[0];
  if (thin) {
    const src = own.filter(n => n.id !== thin.id && n.drones > 8 && slotsFree(g, n) > 0).sort((a, b) => dist(a, thin) - dist(b, thin))[0];
    if (src) launch(g, src, thin, Math.min(4, Math.floor((src.drones - 5) / 2) + 1), []);
  }

  // Expand into neutral space
  if (g.t >= side.expT && side.kind === 'faction') {
    let best: { src: GNode; tgt: GNode; need: number; d: number } | null = null;
    for (const src of own) {
      if (slotsFree(g, src) < 1) continue;
      for (const tgt of g.nodes) {
        if (tgt.owner !== 0) continue;
        const d = dist(src, tgt);
        if (d > 115) continue;
        const need = strength(g, tgt) + 1; // the Captain's Power covers the tie
        if (src.drones - 2 >= need && (!best || d < best.d)) best = { src, tgt, need, d };
      }
    }
    if (best && attack(g, best.src, best.tgt, best.need + ri(g, 0, 1))) side.expT = g.t + ai.expand * rr(g, 0.8, 1.2);
  }
}

function plan(g: Game, o: number) {
  const ai = aiOf(g, o);
  const own = g.nodes.filter(n => n.owner === o), mine = g.nodes.filter(n => n.owner === PLAYER);
  if (!own.length || !mine.length) return;
  let best: GNode | null = null, bs = 1e9;
  for (const p of mine) {
    const dmin = Math.min(...own.map(n => dist(n, p))), st = strength(g, p);
    let sc = ai.target === 'weak' ? st * 10 + dmin * 0.5 : dmin + st * 4;
    if (ai.target === 'spec') sc -= 50 * p.specs.length + (p.specs.includes(g.cmdSpec) ? 100 : 0);
    if (sc < bs) { bs = sc; best = p; }
  }
  if (!best) return;
  const target = best;
  const staging = own.slice().sort((a, b) => dist(a, target) - dist(b, target))[0];
  const commit = Math.min(0.95, CFG.offCommit[g.mob.stage] * (1 + (sideMods(g, g.archon).offBig || 0)) * (0.7 + 0.3 * ai.aggr));
  const src = own.filter(n => n.id !== staging.id && n.drones >= 4 && slotsFree(g, n) > 0 && dist(n, staging) < 190)
    .sort((a, b) => dist(a, staging) - dist(b, staging)).slice(0, 1 + g.mob.stage + g.mob.surge);
  let wait = CFG.gatherSecs;
  for (const n of src) {
    const keep = n.capital || n.citadel ? Math.max(5, Math.floor(n.drones * 0.4)) : 2;
    const k = Math.floor((n.drones - keep) * commit);
    if (k > 0 && !launch(g, n, staging, k, [])) wait = Math.max(wait, dist(n, staging) / CFG.fleetSpeed + 5);
  }
  const warn = (sideMods(g, PLAYER).warn || 0) > 0;
  g.offs.push({ owner: o, target: target.id, staging: staging.id, launchT: g.t + wait, warned: warn });
  log(g, warn ? `${sideName(g, o)} is massing at ${staging.name} to strike ${target.name}` : `${sideName(g, o)} is mobilizing for an offensive`, 'warn', warn ? target.id : -1);
}

function fire(g: Game, off: Game['offs'][number]) {
  const st = g.nodes[off.staging];
  if (st.owner !== off.owner || g.sides[off.owner].broken) return;
  let tgt = g.nodes[off.target];
  if (tgt.owner !== PLAYER) {
    const alt = g.nodes.filter(n => n.owner === PLAYER).sort((a, b) => dist(a, st) - dist(b, st))[0];
    if (!alt) return;
    tgt = alt;
  }
  const silo = g.nodes.find(n => n.owner === off.owner && !canMissile(g, n, tgt)); // a missile softens the target first
  if (silo) fireMissile(g, silo, tgt);
  const keep = st.capital || st.citadel ? Math.max(5, Math.floor(st.drones * 0.4)) : 2;
  const send = st.drones - keep;
  if (send < 3) return;
  attack(g, st, tgt, send);
}

function mobilize(g: Game) {
  const m = g.mob;
  const secs = CFG.stageSecs * (1 - 0.05 * g.threat);
  m.prog += (CFG.dt / secs) * Math.max(0.3, 1 - (sideMods(g, PLAYER).mobSlow || 0));
  if (m.prog >= 1) {
    m.prog = 0;
    if (m.stage >= 5) {
      m.surge++;
      for (const o of [...g.factions, g.archon]) if (!g.sides[o].broken) g.sides[o].free += CFG.surgeFree;
      log(g, `Total war: Coalition reserves deepen (surge ${m.surge}). Every faction can field more Drones.`, 'warn');
    } else {
      m.stage++;
      log(g, `Coalition mobilization reached stage ${m.stage}. Offensives grow larger and more frequent.`, 'warn');
      for (const o of [...g.factions, g.archon]) {
        const side = g.sides[o];
        if (side.broken) continue;
        side.free += CFG.stageFree;
        if (side.kind !== 'faction') continue;
        const list = FACTIONS[side.fac].techs.filter(t => !side.techs.includes(t));
        for (const t of list.slice(0, side.fac === 'lumen' ? 2 : 1)) grantTech(g, o, t);
      }
    }
  }
  if (g.t >= m.nextOff) {
    const cands = g.factions.filter(o => !g.sides[o].broken && g.nodes.some(n => n.owner === o));
    if (m.stage >= 4 || !cands.length) cands.push(g.archon);
    plan(g, cands[m.turn % cands.length]);
    m.turn++;
    m.nextOff = g.t + (CFG.offInterval[m.stage] * rr(g, 0.85, 1.15)) / (1 + 0.04 * g.threat) / (1 + 0.15 * m.surge);
  }
  if (g.offs.length) {
    const due = g.offs.filter(o => g.t >= o.launchT);
    if (due.length) { g.offs = g.offs.filter(o => g.t < o.launchT); for (const o of due) fire(g, o); }
  }
}

export function aiTick(g: Game) {
  mobilize(g);
  for (const o of [...g.factions, g.archon]) {
    const side = g.sides[o];
    if (g.t >= side.aiT) { side.aiT = g.t + 8 + rnd(g) * 4; think(g, o); }
  }
}
