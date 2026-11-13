// Headless balance harness: plays whole runs with simple scripted players.
//   npx tsx scripts/bot.ts [runs] [mode: greedy|idle] [threat]
import { newGame } from '../src/sim/mapgen';
import { step, exec } from '../src/sim/sim';
import { PLAYER, type Game } from '../src/sim/types';
import { calcBattle, canBuild, dist, isDocked, techAvailable, viewOf, canTarget, sideIncome, totalDrones } from '../src/sim/core';
import { nodeMods, shipMods } from '../src/sim/mods';
import { abilitiesOf, abilityCheck } from '../src/sim/abilities';

function act(g: Game) {
  const own = g.nodes.filter(n => n.owner === PLAYER);
  for (const n of own) {
    if (n.event && !g.pending.length) exec(g, { c: 'event', node: n.id });
    if (n.kind === 'planet') {
      for (const id of ['gen', 'mine', 'mine', 'lab', 'shield']) if (!n.lane && !canBuild(g, n, id) && (id !== 'lab' || own.every(o => !o.b.lab))) exec(g, { c: 'build', node: n.id, id });
      if (n.b.lab && !n.research) { const av = techAvailable(g, PLAYER); if (av.length) exec(g, { c: 'research', node: n.id, id: av[0] }); }
    } else if (!n.lane) {
      const ships = g.ships.filter(s => s.owner === PLAYER).length;
      if (ships < 3 + Math.floor(own.length / 4) && g.sides[PLAYER].ult >= 30) exec(g, { c: 'ship', node: n.id });
      else if (g.sides[PLAYER].ult > 90 && g.tick % 900 === 0) for (const id of ['barracks', 'dock', 'turret']) if (!canBuild(g, n, id)) { exec(g, { c: 'build', node: n.id, id }); break; }
    }
  }
  // free abilities with no target
  for (const sp of g.specs) if (sp.owner === PLAYER && !sp.held) for (const a of abilitiesOf(sp)) if (a.target === 'self' && !['extraction', 'recall', 'laststand', 'strip', 'smoke'].includes(a.id) && !abilityCheck(g, sp, a, null)) exec(g, { c: 'ability', spec: sp.id, id: a.id, target: -1 });
  // attack: best affordable target per idle docked ship
  for (const s of g.ships) {
    if (s.owner !== PLAYER || s.at < 0 || s.loadUntil > 0 || !isDocked(g, s)) continue;
    const n = g.nodes[s.at];
    const cmdN = g.specs[g.cmdSpec]; const rescue = cmdN.held ? g.nodes[cmdN.node] : null;
    const keep = rescue ? 0 : n.specs.includes(g.cmdSpec) ? 10 + 5 * g.mob.stage : n.kind === 'station' ? 6 : 3;
    const avail = n.drones - keep;
    if (avail < 4) { // ferry: empty ship goes to the richest garrison without a ship
      const rich = own.filter(o => o.drones > 14 && !g.ships.some(x => x.owner === PLAYER && (x.at === o.id || x.to === o.id))).sort((a, b) => b.drones - a.drones)[0];
      if (rich && n.drones < 8) exec(g, { c: 'launch', ship: s.id, to: rich.id, drones: 0, specs: [] });
      continue;
    }
    let best: any = null;
    const specs = n.specs.filter(i => !n.home || i !== g.cmdSpec).slice(0, 3);
    for (const t of g.nodes) {
      if (t.owner === PLAYER || !canTarget(g, t)) continue;
      const v = viewOf(g, t);
      // unidentified: a human would guess from distance; so does the bot, with a safety margin
      const need = v.v ? calcBattle(g, 1, shipMods(g, s), v.v, nodeMods(g, v.v)).def + 3 + (t.owner ? 4 : 0) : 16 + Math.round(dist(t, g.nodes[0]) / 8);
      const d = dist(n, t);
      const sc = need * 3 + d - (t.capital ? 40 : 0) - (t.citadel ? 80 : 0) - (t.kind === 'station' ? 30 : 0) - (rescue && t.id === rescue.id ? 1000 : 0);
      if (need <= avail && (!best || sc < best.sc)) best = { t, need, sc };
    }
    if (best) exec(g, { c: 'launch', ship: s.id, to: best.t.id, drones: Math.min(avail, best.need + 4), specs });
    else if (g.sides[PLAYER].ult >= 45 && g.ships.filter(x => x.owner === PLAYER).length > 1 && !g.ships.some(x => x.owner === PLAYER && x.at < 0 && x.drones === 0)) {
      // nothing identified in reach: spend a ship on a sacrificial scout
      const unk = g.nodes.filter(t => t.owner !== PLAYER && g.vis[t.id] === 1 && g.t - g.intel[t.id].t > 120).sort((a, b) => dist(a, n) - dist(b, n))[0];
      if (unk) exec(g, { c: 'launch', ship: s.id, to: unk.id, drones: 0, specs: [] });
    }
    else if (avail > 12) { // mass up: pool every spare stack on the forward-most station
      const goal = g.nodes.filter(t => t.capital && g.sides[t.owner] && !g.sides[t.owner].broken && g.intel[t.id].seen)[0] || g.nodes[g.citadel];
      const fwd = own.filter(o => o.kind === 'station').sort((a, b) => dist(a, goal) - dist(b, goal))[0] || own[0];
      if (fwd.id !== n.id) exec(g, { c: 'launch', ship: s.id, to: fwd.id, drones: avail, specs: [] });
    }
  }
}

const runs = +(process.argv[2] || 5), mode = process.argv[3] || 'greedy', threat = +(process.argv[4] || 0);
let wins = 0; const t0 = Date.now();
for (let i = 0; i < runs; i++) {
  const g = newGame(1000 + i * 7919, threat);
  let guard = 0;
  while (!g.result && g.t < 3 * 3600 && guard++ < 5e6) {
    while (g.pending.length) { const p = g.pending[0]; let ok = false; const k = p.kind === 'event' ? 4 : p.opts.length; for (let j = 0; j < k && !ok; j++) ok = !exec(g, { c: 'choose', idx: j }); if (!ok) exec(g, { c: 'choose', idx: -1 }); if (!ok && p.kind !== 'event') g.pending.shift(); }
    if (mode === 'greedy' && g.tick % 30 === 0) act(g);
    step(g);
  }
  if (g.result === 'win') wins++;
  const f = g.factions.map(o => `${g.sides[o].fac}${g.sides[o].broken ? '!' : ''}:${g.nodes.filter(n => n.owner === o).length}`).join(' ');
  console.log(`seed ${g.seed} ${g.result || 'timeout'} @${(g.t / 60).toFixed(1)}m stage ${g.mob.stage} nodes ${g.nodes.filter(n => n.owner === PLAYER).length}/${g.nodes.length} drones ${totalDrones(g, PLAYER)} inc ${sideIncome(g, PLAYER).toFixed(1)} caps ${g.stats.captures} lost ${g.stats.nodesLost} specs ${g.stats.specs} relics ${g.stats.relics} techs ${g.stats.techs} | ${f} | ${g.resultWhy}`);
}
console.log(`${wins}/${runs} wins, ${((Date.now() - t0) / 1000).toFixed(1)}s`);
if (process.argv[5]) {
  const g = newGame(+process.argv[5], threat);
  while (!g.result && g.t < +(process.argv[6] || 1200)) {
    while (g.pending.length) { const p = g.pending[0]; let ok = false; const k = p.kind === 'event' ? 4 : p.opts.length; for (let j = 0; j < k && !ok; j++) ok = !exec(g, { c: 'choose', idx: j }); if (!ok) exec(g, { c: 'choose', idx: -1 }); }
    if (g.tick % 30 === 0) act(g);
    step(g);
  }
  console.log('ult', g.sides[1].ult.toFixed(0), 'ships', g.ships.filter(s => s.owner === 1).map(s => `${s.at}${isDocked(g, s) ? '' : 'o'}:${s.drones}`).join(' '));
  for (const n of g.nodes.filter(n => n.owner === 1)) console.log(' own', n.id, n.name, n.kind, n.drones, JSON.stringify(n.b), n.lane?.id || '', n.research || '');
  for (const t of g.nodes) if (t.owner !== 1 && canTarget(g, t)) { const v = viewOf(g, t); console.log(' tgt', t.id, t.kind, 'own', t.owner, 'vis', g.vis[t.id], v.v ? calcBattle(g, 1, {}, v.v, nodeMods(g, v.v)).def : '?', 'd', Math.round(dist(t, g.nodes[0]))); }
  console.log(g.log.slice(-12).map(l => (l.t / 60).toFixed(1) + ' ' + l.msg).join('\n'));
}
