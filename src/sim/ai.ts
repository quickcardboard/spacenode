import type { Game, GNode } from './types';
import { PLAYER } from './types';
import { CFG } from './config';
import { FACTIONS, SPECS, POOL, type FactionDef } from './content';
import { sideMods, command } from './mods';
import { rnd, rr, ri } from './rng';
import { dist, log, sideName, canUp, startUp, launch, calcBattle, eta, grantTech, slotsFree, addSpec, fleetMods, fireMissile, canMissile, nodeMods, totalDrones, collapse, corridorsAt, crewMax } from './core';

const ARCHON_AI: FactionDef['ai'] = { aggr: 1, expand: 1e9, react: 0.9, target: 'weak', shield: 3, planet: 'refinery', station: 'fortress' };
const aiOf = (g: Game, o: number) => (g.sides[o].kind === 'faction' ? FACTIONS[g.sides[o].fac].ai : ARCHON_AI);
/** What the Coalition believes it would take to beat a node. An Illusionist makes it guess high. */
const strength = (g: Game, n: GNode) => calcBattle(g, 0, 0, [], n, {}).def + (n.owner === PLAYER && nodeMods(g, n).mask ? 12 : 0);
/** How much a player node is worth taking: officers, the Commander, buildings, corridors, home. */
function worth(g: Game, n: GNode): number {
  return 2 + 3 * n.specs.length + (n.specs.includes(g.cmdSpec) ? 6 : 0) + (n.spec ? 2 : 0) + n.lv + 0.5 * n.sh + 1.5 * corridorsAt(g, n.id).length + (n.home ? 4 : 0) + (n.flagship ? 6 : 0) + (n.kind === 'station' ? 1 : 0);
}
const capCmd = (g: Game) => command(g, { def: 'captain' } as never, g.mob.stage);

/** Coalition attacks are led by Captains, minor officers with Power 1 who can be captured and ransomed.
 *  Each Captain commands a share of the fleet, so a big attack needs several. */
function attack(g: Game, from: GNode, to: GNode, drones: number): boolean {
  const n = Math.max(1, Math.min(crewMax(g, from), Math.ceil(drones / capCmd(g))));
  drones = Math.min(drones, n * capCmd(g));
  const caps = Array.from({ length: n }, () => addSpec(g, 'captain', from.owner, from.id));
  const err = launch(g, from, to, drones, caps.map(c => c.id));
  if (err) { for (const cap of caps) { from.specs = from.specs.filter(i => i !== cap.id); cap.owner = -1; cap.node = -1; } return false; }
  return true;
}

function think(g: Game, o: number) {
  const side = g.sides[o], ai = aiOf(g, o);
  const own = g.nodes.filter(n => n.owner === o);
  if (!own.length || side.broken) return;

  // Upgrades: shields up to the faction's taste, then levels, then a specialty
  for (const n of own) {
    if (n.queue.length) continue;
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

  // Kestrel and anyone else with a loaded silo: fire at the nearest player node in range
  for (const n of own) {
    if (n.spec !== 'silo' || !n.missile || g.mob.stage < 2 || g.t < (side.missileT || 0)) continue;
    const tgt = g.nodes.filter(p => p.owner === PLAYER && !canMissile(g, n, p)).sort((a, b) => b.drones - a.drones)[0];
    if (tgt && !fireMissile(g, n, tgt)) side.missileT = g.t + CFG.aiMissileSecs; // one missile per faction this often
  }

  // Counterattack: a node the player has just taken is thin and unshielded. Strike it if it can be won,
  // at most once every few minutes per faction so it stays a threat and not a punishment.
  if (side.kind === 'faction' && g.mob.stage >= 2 && g.t >= (side.counterT || 0)) {
    let best: { src: GNode; tgt: GNode; need: number } | null = null;
    for (const tgt of g.nodes) {
      if (tgt.owner !== PLAYER || tgt.dest || g.t - tgt.capT > CFG.counterWindow) continue;
      const need = strength(g, tgt) + 2;
      for (const src of own) {
        if (slotsFree(g, src) < 1 || dist(src, tgt) > 160 || src.drones - 3 < need) continue;
        if (!best || dist(src, tgt) < dist(best.src, best.tgt)) best = { src, tgt, need };
      }
    }
    if (best && attack(g, best.src, best.tgt, Math.min(best.src.drones - 3, best.need + 2))) {
      side.counterT = g.t + CFG.counterSecs;
      log(g, `${sideName(g, o)} counterattacks ${best.tgt.name}`, 'warn', best.tgt.id);
    }
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
  // the best target is the one with the most worth per point of defence, not simply the weakest
  let best: GNode | null = null, bs = 1e9;
  for (const p of mine) {
    if (g.offs.some(x => x.target === p.id) || p.dest) continue; // another faction is already on it, or it is under way
    const dmin = Math.min(...own.map(n => dist(n, p))), st = strength(g, p), w = Math.pow(worth(g, p) * (ai.target === 'spec' ? 1 + p.specs.length : 1), Math.min(1, g.mob.stage / 3)); // worth counts fully from stage 3
    const sc = (st + 4) / w * (ai.target === 'near' ? 4 : 10) + dmin * (ai.target === 'near' ? 0.6 : 0.3);
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
        if (side.fac === 'tithe') { // the Tithe Compact hires a mercenary officer every stage
          const cap = g.nodes.find(n => n.owner === o && n.capital) || g.nodes.find(n => n.owner === o);
          if (cap) addSpec(g, POOL.filter(d => SPECS[d].rarity >= 1)[Math.floor(rnd(g) * POOL.filter(d => SPECS[d].rarity >= 1).length)], o, cap.id);
        }
        const list = FACTIONS[side.fac].techs.filter(t => !side.techs.includes(t));
        for (const t of list.slice(0, side.fac === 'lumen' ? 2 : 1)) grantTech(g, o, t);
      }
    }
  }
  if (g.t >= m.nextOff) {
    const cands = g.factions.filter(o => !g.sides[o].broken && g.nodes.some(n => n.owner === o));
    if (m.stage >= 4 || !cands.length) cands.push(g.archon);
    // from stage 3 two sides strike at once, from stage 4 three: the player cannot answer them all with one army
    const waves = Math.min(cands.length, m.stage >= 4 ? 3 : m.stage >= 3 ? 2 : 1);
    for (let i = 0; i < waves; i++) plan(g, cands[(m.turn + i) % cands.length]);
    m.turn++;
    m.nextOff = g.t + (CFG.offInterval[m.stage] * rr(g, 0.85, 1.15)) / (1 + 0.04 * g.threat) / (1 + 0.15 * m.surge);
  }
  if (g.offs.length) {
    const due = g.offs.filter(o => g.t >= o.launchT);
    if (due.length) { g.offs = g.offs.filter(o => g.t < o.launchT); for (const o of due) fire(g, o); }
  }
}

/** A faction that has been beaten down gives up; once the whole Coalition is beaten, the Archon offers terms. */
function morale(g: Game) {
  const me = totalDrones(g, PLAYER);
  if (g.t < 600 || me < 30) return;
  for (const o of g.factions) {
    const s = g.sides[o];
    if (s.broken || !g.nodes.some(n => n.owner === o)) continue;
    if (totalDrones(g, o) < CFG.surrender * me) collapse(g, o, `The ${sideName(g, o)} lays down its arms.`);
  }
  const coalition = [...g.factions, g.archon].reduce((t, o) => t + totalDrones(g, o), 0);
  if (!g.terms && (g.factions.every(o => g.sides[o].broken) || coalition < CFG.terms * me)) {
    g.terms = true;
    g.pending.push({ kind: 'terms', node: g.citadel, opts: [0, 1], title: `${sideName(g, g.archon)} sues for peace` });
  }
}

export function aiTick(g: Game) {
  mobilize(g);
  if (g.tick % 50 === 0) morale(g);
  for (const o of [...g.factions, g.archon]) {
    const side = g.sides[o];
    if (g.t >= side.aiT) { side.aiT = g.t + 8 + rnd(g) * 4; think(g, o); }
  }
}
