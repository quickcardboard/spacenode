import { newGame } from '../src/sim/mapgen';
import { step, exec } from '../src/sim/sim';
import { PLAYER } from '../src/sim/types';
import { dist, viewOf, calcBattle } from '../src/sim/core';
import { nodeMods } from '../src/sim/mods';
const g = newGame(+(process.argv[2] || 8919), 0);
const until = +(process.argv[3] || 1800);
let lastLog = 0;
while (!g.result && g.t < until) {
  while (g.pending.length) { if (exec(g, { c: 'choose', idx: 0 })) exec(g, { c: 'choose', idx: -1 }); }
  step(g);
  for (; lastLog < g.log.length; lastLog++) { const l = g.log[lastLog]; if (l.kind === 'warn' || l.kind === 'bad' || /held/.test(l.msg)) console.log((l.t / 60).toFixed(1), l.msg); }
  if (g.log.length >= 150) lastLog = Math.min(lastLog, 149);
}
const h = g.nodes[0];
console.log('home drones', h.drones, 'ships by owner', [1,2,3,4,5].map(o => g.ships.filter(s => s.owner === o).length), 'ult', [2,3,4,5].map(o => Math.round(g.sides[o].ult)));
for (const o of [2,3,4,5]) console.log(g.sides[o].fac, g.nodes.filter(n => n.owner === o).map(n => `${n.kind[0]}${n.drones}${g.ships.some(s=>s.at===n.id)?'*':''}`).join(' '), 'near', Math.round(Math.min(...g.nodes.filter(n => n.owner === o).map(n => dist(n, h)))));
void viewOf; void calcBattle; void nodeMods;
