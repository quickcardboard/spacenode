// Quick rule checks for corridors, convoys, swaps, the node-based cap and ship vision.
import { newGame } from '../src/sim/mapgen';
import { step, exec } from '../src/sim/sim';
import { PLAYER } from '../src/sim/types';
import { droneCap, corridorBetween, dist } from '../src/sim/core';
const g = newGame(4242, 0);
exec(g, { c: 'choose', idx: 0 });
const h = g.nodes[0];
const near = g.nodes.filter(n => n.id !== 0 && n.owner === 0).sort((a, b) => dist(a, h) - dist(b, h));
const p = near[0];
console.log('cap at start', droneCap(g, PLAYER));
p.owner = PLAYER; p.drones = 2; p.offer = false; g.modV++;
console.log('cap with one planet', droneCap(g, PLAYER));
g.sides[PLAYER].ult = 500;
console.log('corridor', exec(g, { c: 'corridor', from: 0, to: p.id }), 'dist', dist(h, p).toFixed(0));
for (let i = 0; i < 1300 && !corridorBetween(g, 0, p.id); i++) step(g);
console.log('corridor open at', g.t.toFixed(0), !!corridorBetween(g, 0, p.id));
const before = p.drones, cmd = g.cmdSpec;
console.log('transfer', exec(g, { c: 'transfer', from: 0, to: p.id, drones: 6, specs: [cmd] }));
let t0 = g.t; while (g.ships.some(s => s.lane) && g.t - t0 < 200) step(g);
console.log('convoy took', (g.t - t0).toFixed(1), 's; planet drones', before, '->', p.drones, 'commander at node', g.specs[cmd].node === p.id);
const ship = g.ships.find(s => s.owner === PLAYER)!;
console.log('swap to ship (wrong node)', exec(g, { c: 'swap', spec: cmd, ship: ship.id }));
console.log('transfer back', exec(g, { c: 'transfer', from: p.id, to: 0, drones: 0, specs: [cmd] }));
t0 = g.t; while (g.ships.some(s => s.lane) && g.t - t0 < 200) step(g);
console.log('swap onto ship', exec(g, { c: 'swap', spec: cmd, ship: ship.id }), 'aboard', ship.specs.includes(cmd));
for (let i = 0; i < 50; i++) step(g);
console.log('still aboard after 5s (no auto-unload)', ship.specs.includes(cmd));
console.log('swap back', exec(g, { c: 'swap', spec: cmd, ship: ship.id }), 'at node', g.specs[cmd].node === 0);
// ship vision: send an empty-ish ship far and count identified nodes along the way
const far = g.nodes.filter(n => n.owner !== PLAYER && g.vis[n.id] >= 1).sort((a, b) => dist(b, h) - dist(a, h))[0];
const visBefore = g.vis.filter(v => v === 2).length;
exec(g, { c: 'launch', ship: ship.id, to: far.id, drones: 1, specs: [] });
for (let i = 0; i < 300; i++) step(g);
console.log('identified nodes before/after ship flight', visBefore, g.vis.filter(v => v === 2).length);
{
  const s = g.ships.find(x => x.owner === PLAYER && x.at < 0)!;
  const tgt = g.nodes.find(n => n.id === s.to)!;
  const d0 = Math.min(...g.nodes.filter(n => n.owner !== PLAYER).map(n => dist(n, s)));
  console.log('ship nearest foreign node', d0.toFixed(0), 'target vis', g.vis[tgt.id], 'dist to target', dist(s, tgt).toFixed(0));
  while (dist(s, tgt) > 20 && g.ships.includes(s)) step(g);
  console.log('target vis when ship is 20 away', g.vis[tgt.id]);
}
