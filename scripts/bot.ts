// Headless balance harness for the redesign: plays whole runs with a simple scripted player.
//   npx tsx scripts/bot.ts [runs] [greedy|idle] [threat] [verbose-seed]
import { newGame } from '../src/sim/mapgen';
import { step, exec } from '../src/sim/sim';
import { PLAYER, type Game, type GNode } from '../src/sim/types';
import { calcBattle, dist, viewOf, canTarget, slotsFree, floorOf, canUp, canCorridor, corridorPath, totalDrones, crewMax } from '../src/sim/core';
import { commandOf } from '../src/sim/mods';

function upgrades(g: Game, own: GNode[]) {
  const labs = own.filter(n => n.spec === 'lab').length, supply = own.filter(n => n.spec === 'habitat').length;
  for (const n of own) {
    if (n.queue.length) continue;
    if (n.event && !g.pending.length) exec(g, { c: 'event', node: n.id });
    const want = n.kind === 'planet' ? (labs < 2 ? 'lab' : supply < 2 ? 'habitat' : 'refinery') : (own.some(o => o.spec === 'bay') ? 'fortress' : 'bay');
    if (!n.spec && !canUp(g, n, 'spec', want)) { exec(g, { c: 'up', node: n.id, what: 'spec', id: want }); continue; }
    if (!canUp(g, n, 'lv')) { exec(g, { c: 'up', node: n.id, what: 'lv' }); continue; }
    if (g.sides[PLAYER].ult > 80 && !canUp(g, n, 'sh')) exec(g, { c: 'up', node: n.id, what: 'sh' });
  }
}

function act(g: Game) {
  const own = g.nodes.filter(n => n.owner === PLAYER);
  if (!own.length) return;
  upgrades(g, own);
  const cmd = g.specs[g.cmdSpec];
  // the army gathers where the Commander is
  const cnt = (n: GNode) => n.specs.filter(i => i !== g.cmdSpec).length;
  const base = own.slice().sort((a, b) => cnt(b) - cnt(a) || b.drones - a.drones)[0];
  for (const n of own) if (n.front !== (n.id === base.id)) exec(g, { c: 'front', node: n.id });
  if (g.tick % 60 === 0) exec(g, { c: 'rally', node: base.id });
  // bring stray specialists to the army
  for (const sp of g.specs) if (sp.owner === PLAYER && !sp.cmd && !sp.held && sp.node >= 0 && sp.node !== base.id && cnt(base) < 3) exec(g, { c: 'move', spec: sp.id, to: base.id });
  // corridors toward the base
  if (g.sides[PLAYER].ult > 70) for (const n of own) {
    if (n.id === base.id || corridorPath(g, n.id, base.id)) continue;
    const t = own.filter(o => o.id !== n.id && (o.id === base.id || corridorPath(g, o.id, base.id)) && !canCorridor(g, n, o)).sort((a, b) => dist(a, n) - dist(b, n))[0];
    if (t) { exec(g, { c: 'corridor', from: n.id, to: t.id }); break; }
  }
  if (cmd && cmd.held) { // rescue: everything at the node holding the Commander
    const t = g.nodes[cmd.node];
    for (const n of own) if (n.specs.length && slotsFree(g, n) && n.drones > 0) exec(g, { c: 'launch', from: n.id, to: t.id, drones: n.drones, specs: n.specs.slice(0, crewMax(g, n)) });
    return;
  }
  if (!base.specs.length || slotsFree(g, base) < 1) return;
  if (cmd && cmd.node >= 0 && cmd.node !== g.home && g.nodes[g.home].owner === PLAYER && cnt(base) > 0) exec(g, { c: 'move', spec: cmd.id, to: g.home });
  const others = base.specs.filter(i => i !== g.cmdSpec).sort((x, y) => g.specs[y].lvl - g.specs[x].lvl); // the most experienced lead
  const crew = (others.length ? others : base.specs).slice(0, crewMax(g, base));
  const avail = Math.min(base.drones - Math.max(1, floorOf(g, base)), commandOf(g, crew));
  let best: { t: GNode; need: number; sc: number } | null = null, unknown: GNode | null = null;
  for (const t of g.nodes) {
    if (t.owner === PLAYER || !canTarget(g, t)) continue;
    const v = viewOf(g, t);
    if (!v.v || (!v.live && v.age > 90)) { if (!unknown || dist(t, base) < dist(unknown, base)) unknown = t; continue; }
    let need = 0;
    for (let d = 1; d <= avail; d++) if (calcBattle(g, PLAYER, d, crew, v.v).win) { need = d; break; }
    if (!need) continue;
    const sc = need * 4 + dist(base, t) - (t.capital ? 60 : 0) - (t.citadel ? 200 : 0) - (t.owner === 0 ? 15 : 0);
    if (!best || sc < best.sc) best = { t, need: need + (t.owner ? 2 : 1), sc };
  }
  if (best) exec(g, { c: 'launch', from: base.id, to: best.t.id, drones: Math.min(avail, best.need), specs: crew });
  else if (unknown && g.tick % 100 === 0) exec(g, { c: 'launch', from: base.id, to: unknown.id, drones: 0, specs: [] });
}

const runs = +(process.argv[2] || 5), mode = process.argv[3] || 'greedy', threat = +(process.argv[4] || 0), verbose = +(process.argv[5] || 0);
function play(seed: number, show: boolean) {
  const g = newGame(seed, threat);
  let guard = 0, lastLog = 0;
  while (!g.result && g.t < 2 * 3600 && guard++ < 5e6) {
    while (g.pending.length) {
      const p = g.pending[0];
      const many = p.kind === 'spec' && g.specs.filter(s => s.owner === PLAYER).length >= 9;
      let ok = false;
      if (many || mode === 'idle' && p.kind === 'spec') ok = !exec(g, { c: 'choose', idx: -1 });
      for (let j = 0; j < 5 && !ok; j++) ok = !exec(g, { c: 'choose', idx: j });
      if (!ok) { exec(g, { c: 'choose', idx: -1 }); if (g.pending[0] === p) g.pending.shift(); }
    }
    if (mode === 'greedy' && g.tick % 30 === 0) act(g);
    step(g);
    if (show) for (; lastLog < g.log.length; lastLog++) console.log((g.log[lastLog].t / 60).toFixed(1), g.log[lastLog].msg);
    if (g.log.length >= 150) lastLog = Math.min(lastLog, 149);
  }
  return g;
}
let wins = 0; const t0 = Date.now();
for (let i = 0; i < runs; i++) {
  const g = play(1000 + i * 7919, false);
  if (g.result === 'win') wins++;
  const s = g.sides[PLAYER];
  const f = g.factions.map(o => `${g.sides[o].fac}${g.sides[o].broken ? '!' : ''}:${g.nodes.filter(n => n.owner === o).length}`).join(' ');
  console.log(`seed ${g.seed} ${g.result || 'timeout'} @${(g.t / 60).toFixed(1)}m stage ${g.mob.stage}+${g.mob.surge} nodes ${g.nodes.filter(n => n.owner === PLAYER).length}/${g.nodes.length} drones ${totalDrones(g, PLAYER)} net ${s.inc.toFixed(0)}-${s.upk.toFixed(0)} ult ${s.ult.toFixed(0)} caps ${g.stats.captures} lost ${g.stats.nodesLost} specs ${g.stats.specs} lv ${g.specs.filter(x => x.owner === PLAYER && !x.cmd).map(x => x.lvl).join('')} techs ${g.stats.techs} relics ${g.stats.relics} | ${f} | ${g.resultWhy}`);
}
if (runs) console.log(`${wins}/${runs} wins, ${((Date.now() - t0) / 1000).toFixed(1)}s`);
if (verbose) play(verbose, true);
