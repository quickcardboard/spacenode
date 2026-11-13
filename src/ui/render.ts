import type { Game, GNode, Ship } from '../sim/types';
import { PLAYER } from '../sim/types';
import { radii, sideColor, shipSeen, isDocked, canTarget, natMax } from '../sim/core';
import { SPECS } from '../sim/content';

// 2.5D diorama renderer. The world is a flat plane seen from above and behind (y is squashed by
// TILT); every object stands on that plane and casts a shadow onto it. Shapes are flat-shaded with
// hard edges and a small muted palette: bodies are neutral, ownership is carried by flags and roofs.

export interface Cam { x: number; y: number; z: number }
export interface RenderUi {
  cam: Cam; w: number; h: number;
  sel: { type: 'node' | 'ship'; id: number } | null;
  targeting: boolean; from: number; hover: number;
}

export const TILT = 0.58;
export const NEUTRAL = '#8f95a6', UNKNOWN = '#56617c';
const PAPER = '#f1ead9', INK = '#1d2335';
export const nodeR = (n: GNode) => (n.citadel ? 12 : n.kind === 'station' ? 8 : [6.5, 8.5, 11][n.size]);
/** Screen point of a node's body centre (used for hit-testing). */
export function bodyY(n: GNode, z: number) { return (n.kind === 'planet' ? 1.25 : 0.9) * nodeR(n) * z; }

const TERRAIN = [
  ['#d9c7a0', '#b09a74', '#efe2c2'], // sand
  ['#93a5b3', '#6c7e8e', '#b9c7d0'], // slate
  ['#93b08c', '#6d8b69', '#b7ceac'], // moss
  ['#cc9379', '#a56e58', '#e3b7a2'], // rust
  ['#cfdcdf', '#a2b5ba', '#eef5f5'], // ice
];

let backdrop: HTMLCanvasElement | null = null, backdropSeed = -1;
const stars: { x: number; y: number; r: number; d: number; a: number }[] = [];
let fog: HTMLCanvasElement | null = null;

function mkBackdrop(seed: number) {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 700;
  const x = c.getContext('2d')!;
  let s = seed | 0;
  const r = () => { s = (s + 0x6d2b79f5) | 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const hues = ['#5f7fa8', '#8a6fa0', '#b9786a', '#5f9c94', '#a88f6a'];
  for (let i = 0; i < 16; i++) {
    const cx = r() * 1024, cy = r() * 700, rad = 140 + r() * 260;
    const g = x.createRadialGradient(cx, cy, 0, cx, cy, rad);
    const col = hues[Math.floor(r() * hues.length)];
    g.addColorStop(0, col + '3c'); g.addColorStop(0.6, col + '14'); g.addColorStop(1, col + '00');
    x.fillStyle = g; x.fillRect(cx - rad, cy - rad, rad * 2, rad * 2);
  }
  return c;
}
function hexA(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}
function shade(hex: string, k: number) {
  const n = parseInt(hex.slice(1), 16), f = (v: number) => Math.max(0, Math.min(255, Math.round(v * k)));
  return `rgb(${f((n >> 16) & 255)},${f((n >> 8) & 255)},${f(n & 255)})`;
}

/** What the player is allowed to see of a node. */
export function known(g: Game, n: GNode): { tier: 'live' | 'stale' | 'detected' | 'hidden'; owner: number; drones: number } {
  if (n.owner === PLAYER || g.vis[n.id] === 2) return { tier: 'live', owner: n.owner, drones: n.drones };
  const it = g.intel[n.id];
  if (it.snap) return { tier: 'stale', owner: it.snap.owner, drones: it.snap.drones };
  if (it.seen >= 1) return { tier: 'detected', owner: -1, drones: 0 };
  return { tier: 'hidden', owner: -1, drones: 0 };
}

function ell(ctx: CanvasRenderingContext2D, x: number, y: number, rx: number, a0 = 0, a1 = Math.PI * 2) {
  ctx.beginPath(); ctx.ellipse(x, y, rx, rx * TILT, 0, a0, a1);
}

function flag(ctx: CanvasRenderingContext2D, x: number, y: number, col: string, text: string, big: boolean, faded: boolean, now: number, seed: number) {
  ctx.font = `800 ${big ? 13 : 12}px system-ui`;
  const fw = Math.max(big ? 30 : 24, ctx.measureText(text).width + 12), fh = big ? 18 : 16, ph = fh + 12;
  ctx.strokeStyle = PAPER; ctx.lineWidth = 2; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - ph); ctx.stroke();
  const wv = Math.sin(now / 420 + seed) * 1.6, top = y - ph;
  ctx.globalAlpha = faded ? 0.6 : 1;
  ctx.fillStyle = col;
  ctx.beginPath(); ctx.moveTo(x + 1, top); ctx.lineTo(x + fw, top + wv); ctx.lineTo(x + fw - 5, top + fh / 2 + wv); ctx.lineTo(x + fw, top + fh + wv); ctx.lineTo(x + 1, top + fh); ctx.closePath(); ctx.fill();
  ctx.fillStyle = shade(col, 0.78);
  ctx.fillRect(x + 1, top + fh - 3, fw - 4, 3);
  ctx.fillStyle = INK; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(text, x + fw / 2 - 1, top + fh / 2 - 0.5 + wv / 2);
  ctx.globalAlpha = 1;
}

function pawn(ctx: CanvasRenderingContext2D, x: number, y: number, col: string, star: boolean) {
  ctx.fillStyle = 'rgba(12,16,30,0.35)'; ell(ctx, x, y, 5); ctx.fill();
  ctx.fillStyle = shade(col, 0.8);
  ctx.beginPath(); ctx.moveTo(x - 4.5, y); ctx.lineTo(x + 4.5, y); ctx.lineTo(x + 2, y - 9); ctx.lineTo(x - 2, y - 9); ctx.closePath(); ctx.fill();
  ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y - 11.5, 3.6, 0, 7); ctx.fill();
  if (star) { ctx.fillStyle = INK; ctx.font = '800 7px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('★', x, y - 11); }
}

function hull(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, a: number, col: string, ghost: boolean) {
  // chunky arrowhead with a darker keel, like a folded-paper boat
  ctx.save(); ctx.translate(x, y); ctx.rotate(a);
  if (ghost) ctx.globalAlpha = 0.55;
  ctx.fillStyle = shade(col, 0.7);
  ctx.beginPath(); ctx.moveTo(r, 0); ctx.lineTo(-r * 0.8, r * 0.75); ctx.lineTo(-r * 0.4, 0); ctx.closePath(); ctx.fill();
  ctx.fillStyle = col;
  ctx.beginPath(); ctx.moveTo(r, 0); ctx.lineTo(-r * 0.8, -r * 0.75); ctx.lineTo(-r * 0.4, 0); ctx.closePath(); ctx.fill();
  ctx.restore();
}

function drawPlanet(ctx: CanvasRenderingContext2D, n: GNode, x: number, gy: number, r: number, silhouette: boolean, stale: boolean) {
  const cy = gy - r * 1.25;
  if (silhouette) { ctx.fillStyle = UNKNOWN; ctx.beginPath(); ctx.arc(x, cy, r, 0, 7); ctx.fill(); return; }
  const [base, dark, light] = TERRAIN[n.id % TERRAIN.length];
  ctx.save();
  if (stale) ctx.globalAlpha = 0.8;
  ctx.beginPath(); ctx.arc(x, cy, r, 0, 7); ctx.clip();
  ctx.fillStyle = dark; ctx.fillRect(x - r, cy - r, r * 2, r * 2);
  ctx.fillStyle = base; ctx.beginPath(); ctx.arc(x - r * 0.28, cy - r * 0.3, r * 1.02, 0, 7); ctx.fill();
  // two hard-edged bands and a cap give each world a readable face
  ctx.fillStyle = hexA(dark, 0.55);
  ctx.beginPath(); ctx.ellipse(x, cy + r * 0.18 + (n.id % 3) * r * 0.12, r * 1.2, r * 0.13, -0.18, 0, 7); ctx.fill();
  if (n.size > 0) { ctx.beginPath(); ctx.ellipse(x, cy - r * 0.32, r * 1.2, r * 0.08, -0.18, 0, 7); ctx.fill(); }
  ctx.fillStyle = light; ctx.beginPath(); ctx.arc(x - r * 0.42, cy - r * 0.46, r * 0.3, 0, 7); ctx.fill();
  ctx.restore();
  if (n.size === 2) { // large worlds wear a ring
    ctx.strokeStyle = hexA(light, stale ? 0.5 : 0.85); ctx.lineWidth = Math.max(1.5, r * 0.11);
    ctx.beginPath(); ctx.ellipse(x, cy, r * 1.55, r * 0.42, -0.18, 0.12, Math.PI - 0.12); ctx.stroke();
  }
}

function drawStation(ctx: CanvasRenderingContext2D, n: GNode, x: number, gy: number, r: number, roof: string, silhouette: boolean, stale: boolean, now: number) {
  const hgt = r * (n.citadel ? 1.5 : 0.85), top = gy - hgt - r * 0.35, ry = r * TILT;
  const sides = 6, rot = Math.PI / 6;
  const pt = (i: number, yy: number, k = 1): [number, number] => [x + Math.cos(rot + (i * Math.PI * 2) / sides) * r * k, yy + Math.sin(rot + (i * Math.PI * 2) / sides) * ry * k];
  const wall = silhouette ? UNKNOWN : n.citadel ? '#4a4763' : '#e6dcc6';
  ctx.save();
  if (stale) ctx.globalAlpha = 0.8;
  // front-facing walls (the three edges whose midpoint is below centre), each a different flat tone
  const tones = [0.62, 0.8, 0.7];
  for (let i = 0, t = 0; i < sides; i++) {
    const a = pt(i, top), b = pt(i + 1, top);
    if ((a[1] + b[1]) / 2 <= top + 0.01) continue;
    ctx.fillStyle = silhouette ? shade(UNKNOWN, 0.85) : shade(wall, tones[t++ % 3]);
    ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.lineTo(b[0], b[1] + hgt); ctx.lineTo(a[0], a[1] + hgt); ctx.closePath(); ctx.fill();
  }
  ctx.fillStyle = wall;
  ctx.beginPath(); for (let i = 0; i < sides; i++) { const p = pt(i, top); ctx[i ? 'lineTo' : 'moveTo'](p[0], p[1]); } ctx.closePath(); ctx.fill();
  if (!silhouette) {
    ctx.fillStyle = roof;
    ctx.beginPath(); for (let i = 0; i < sides; i++) { const p = pt(i, top, 0.62); ctx[i ? 'lineTo' : 'moveTo'](p[0], p[1]); } ctx.closePath(); ctx.fill();
    if (n.citadel) { // spire
      ctx.fillStyle = shade(roof, 0.75); ctx.beginPath(); ctx.moveTo(x, top - r * 1.5); ctx.lineTo(x + r * 0.34, top); ctx.lineTo(x, top + ry * 0.3); ctx.closePath(); ctx.fill();
      ctx.fillStyle = roof; ctx.beginPath(); ctx.moveTo(x, top - r * 1.5); ctx.lineTo(x - r * 0.34, top); ctx.lineTo(x, top + ry * 0.3); ctx.closePath(); ctx.fill();
      ctx.fillStyle = PAPER; ctx.globalAlpha = 0.6 + 0.4 * Math.sin(now / 500); ctx.beginPath(); ctx.arc(x, top - r * 1.5, 2, 0, 7); ctx.fill();
    } else {
      ctx.fillStyle = shade(roof, 0.7);
      ctx.beginPath(); ctx.ellipse(x, top, r * 0.22, ry * 0.22, 0, 0, 7); ctx.fill();
    }
  }
  ctx.restore();
}

export function draw(ctx: CanvasRenderingContext2D, g: Game, ui: RenderUi, now: number) {
  const { cam, w, h } = ui, z = cam.z;
  const sx = (x: number) => (x - cam.x) * z + w / 2, sy = (y: number) => (y - cam.y) * z * TILT + h / 2;

  // --- sky: flat dusk gradient, soft colour drifts, parallax stars
  const sky = ctx.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, '#222a45'); sky.addColorStop(0.55, '#2f3a58'); sky.addColorStop(1, '#46506c');
  ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h);
  if (!backdrop || backdropSeed !== g.seed) { backdrop = mkBackdrop(g.seed); backdropSeed = g.seed; }
  const nz = Math.max(z * 0.5, 1.3), nw = 1024 * nz, nh = 700 * nz * 0.8;
  ctx.drawImage(backdrop, w / 2 - nw / 2 - (cam.x - g.w / 2) * z * 0.4, h / 2 - nh / 2 - (cam.y - g.h / 2) * z * TILT * 0.4, nw, nh);
  if (!stars.length) for (let i = 0; i < 240; i++) stars.push({ x: Math.random(), y: Math.random(), r: Math.random() * 1.2 + 0.4, d: [0.06, 0.14, 0.26][i % 3], a: 0.3 + Math.random() * 0.6 });
  ctx.fillStyle = PAPER;
  for (const s of stars) {
    const px = (((s.x * 1600 - cam.x * z * s.d) % 1600) + 1600) % 1600, py = (((s.y * 1200 - cam.y * z * TILT * s.d) % 1200) + 1200) % 1200;
    if (px > w || py > h) continue;
    ctx.globalAlpha = s.a * (0.75 + 0.25 * Math.sin(now / 900 + s.x * 40));
    ctx.fillRect(px, py, s.r * 1.4, s.r * 1.4);
  }
  ctx.globalAlpha = 1;

  // --- territory: soft pools of faction colour lying on the plane
  for (const n of g.nodes) {
    const k = known(g, n);
    if (k.tier === 'hidden' || k.tier === 'detected' || k.owner === 0) continue;
    const x = sx(n.x), y = sy(n.y), r = 44 * z;
    if (x < -r || y < -r || x > w + r || y > h + r) continue;
    const col = sideColor(g, k.owner);
    ctx.save(); ctx.translate(x, y); ctx.scale(1, TILT);
    const gr = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
    gr.addColorStop(0, hexA(col, 0.34)); gr.addColorStop(0.7, hexA(col, 0.16)); gr.addColorStop(1, hexA(col, 0));
    ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(0, 0, r, 0, 7); ctx.fill();
    ctx.restore();
  }

  // --- vision: pale mist, thinned in detection range and cleared in full-intelligence range
  if (!fog) fog = document.createElement('canvas');
  const fs = 0.5;
  if (fog.width !== Math.ceil(w * fs) || fog.height !== Math.ceil(h * fs)) { fog.width = Math.ceil(w * fs); fog.height = Math.ceil(h * fs); }
  const f = fog.getContext('2d')!;
  f.setTransform(1, 0, 0, 1, 0, 0);
  f.globalCompositeOperation = 'source-over';
  f.clearRect(0, 0, fog.width, fog.height);
  f.fillStyle = 'rgba(70,80,108,0.72)'; f.fillRect(0, 0, fog.width, fog.height);
  f.globalCompositeOperation = 'destination-out';
  for (const n of g.nodes) {
    if (n.owner !== PLAYER) continue;
    const [ri, ro] = radii(g, n);
    f.setTransform(fs, 0, 0, fs * TILT, sx(n.x) * fs, sy(n.y) * fs);
    let gr = f.createRadialGradient(0, 0, ro * z * 0.82, 0, 0, ro * z);
    gr.addColorStop(0, 'rgba(0,0,0,0.5)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    f.fillStyle = gr; f.beginPath(); f.arc(0, 0, ro * z, 0, 7); f.fill();
    gr = f.createRadialGradient(0, 0, ri * z * 0.88, 0, 0, ri * z);
    gr.addColorStop(0, 'rgba(0,0,0,1)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    f.fillStyle = gr; f.beginPath(); f.arc(0, 0, ri * z, 0, 7); f.fill();
  }
  ctx.drawImage(fog, 0, 0, w, h);

  // --- range rings for the selected node, drawn on the plane
  const selNode = ui.sel?.type === 'node' ? g.nodes[ui.sel.id] : null;
  if (selNode && selNode.owner === PLAYER) {
    const [ri, ro] = radii(g, selNode);
    ctx.lineWidth = 1.5; ctx.setLineDash([5, 7]);
    ctx.strokeStyle = hexA(PAPER, 0.4); ell(ctx, sx(selNode.x), sy(selNode.y), ri * z); ctx.stroke();
    ctx.strokeStyle = hexA(PAPER, 0.18); ell(ctx, sx(selNode.x), sy(selNode.y), ro * z); ctx.stroke();
    ctx.setLineDash([]);
  }

  // --- flight paths: dotted trails on the plane
  const flying: { s: Ship; seen: number }[] = [];
  ctx.lineCap = 'round';
  for (const s of g.ships) {
    if (s.at >= 0) continue;
    const seen = shipSeen(g, s);
    if (!seen) continue;
    flying.push({ s, seen });
    const to = g.nodes[s.to], col = s.owner === 0 ? '#d9d9d9' : sideColor(g, s.owner);
    ctx.strokeStyle = hexA(col, 0.75); ctx.lineWidth = 2.5;
    ctx.setLineDash([0.1, 9]); ctx.lineDashOffset = -now / 50;
    ctx.beginPath(); ctx.moveTo(sx(s.x), sy(s.y)); ctx.lineTo(sx(to.x), sy(to.y)); ctx.stroke();
    ctx.setLineDash([]);
  }
  if (ui.targeting && ui.from >= 0 && ui.hover >= 0 && ui.hover !== ui.from) {
    const a = g.nodes[ui.from], b = g.nodes[ui.hover];
    ctx.strokeStyle = PAPER; ctx.lineWidth = 3; ctx.setLineDash([0.1, 9]);
    ctx.beginPath(); ctx.moveTo(sx(a.x), sy(a.y)); ctx.lineTo(sx(b.x), sy(b.y)); ctx.stroke();
    ctx.setLineDash([]);
  }

  // --- everything that stands on the plane, painted back to front
  type Item = { y: number; node?: GNode; ship?: Ship; seen?: number };
  const items: Item[] = [];
  for (const n of g.nodes) if (known(g, n).tier !== 'hidden') items.push({ y: n.y, node: n });
  for (const fl of flying) items.push({ y: fl.s.y, ship: fl.s, seen: fl.seen });
  items.sort((a, b) => a.y - b.y);
  const cmd = g.specs[g.cmdSpec];
  const names: { t: string; x: number; y: number; a: number }[] = [];

  for (const it of items) {
    if (it.ship) {
      const s = it.ship, to = g.nodes[s.to], x = sx(s.x), gy = sy(s.y), lift = 9 + 2 * Math.sin(now / 500 + s.id);
      const a = Math.atan2((to.y - s.y) * TILT, to.x - s.x), col = s.owner === 0 ? '#d9d9d9' : sideColor(g, s.owner);
      ctx.fillStyle = 'rgba(12,16,30,0.4)'; ell(ctx, x, gy, 11); ctx.fill();
      if (ui.sel?.type === 'ship' && ui.sel.id === s.id) { ctx.strokeStyle = PAPER; ctx.lineWidth = 2; ell(ctx, x, gy, 14); ctx.stroke(); }
      hull(ctx, x, gy - lift, 13, a, col, false);
      flag(ctx, x, gy - lift - 6, col, (s.specs.includes(g.cmdSpec) ? '★' : '') + (it.seen === 2 ? String(s.drones) : '?'), false, false, now, s.id);
      continue;
    }
    const n = it.node!, k = known(g, n);
    const x = sx(n.x), gy = sy(n.y), r = nodeR(n) * z;
    if (x < -90 || gy < -40 || x > w + 90 || gy > h + 120) continue;
    const sil = k.tier === 'detected', stale = k.tier === 'stale';
    const col = sil ? UNKNOWN : k.owner === 0 ? NEUTRAL : sideColor(g, k.owner);
    const baseR = r * 1.5;

    // ground: shadow, ownership ring, selection, progress
    ctx.fillStyle = 'rgba(12,16,30,0.42)'; ell(ctx, x, gy, r * 1.05); ctx.fill();
    if (!sil && k.owner !== 0) { ctx.strokeStyle = hexA(col, stale ? 0.5 : 0.95); ctx.lineWidth = 3; ell(ctx, x, gy, baseR); ctx.stroke(); }
    if (ui.targeting && n.id !== ui.from && (canTarget(g, n) || n.owner === PLAYER)) {
      ctx.strokeStyle = hexA(PAPER, 0.35 + 0.3 * Math.sin(now / 250)); ctx.lineWidth = 2.5; ell(ctx, x, gy, baseR + 6); ctx.stroke();
    }
    if (ui.sel?.type === 'node' && ui.sel.id === n.id) { ctx.strokeStyle = PAPER; ctx.lineWidth = 2.5; ctx.setLineDash([7, 5]); ctx.lineDashOffset = -now / 80; ell(ctx, x, gy, baseR + 5); ctx.stroke(); ctx.setLineDash([]); }
    if (k.tier === 'live' && n.kind === 'planet' && n.nat >= 1) {
      const mx = Math.max(1, n.owner === 0 ? [4, 7, 11][n.size] : natMax(g, n));
      ctx.strokeStyle = '#bfe3ff'; ctx.lineWidth = 2.5; ell(ctx, x, gy, baseR - 5, Math.PI / 2, Math.PI / 2 + Math.PI * 2 * Math.min(1, n.nat / mx)); ctx.stroke();
    }
    if (n.owner === PLAYER && n.lane) { ctx.strokeStyle = '#e8bd55'; ctx.lineWidth = 3; ell(ctx, x, gy, baseR + 5, Math.PI / 2, Math.PI / 2 + Math.PI * 2 * (1 - n.lane.left / n.lane.total)); ctx.stroke(); }

    // parked ships sit on the plane behind the body; orbiters circle it
    if (k.tier === 'live') {
      g.ships.filter(s => s.at === n.id).slice(0, 5).forEach((s, i) => {
        const c = sideColor(g, s.owner);
        if (isDocked(g, s)) hull(ctx, x - baseR - 4 - i * 9, gy - 5 - i * 2, 6.5, -Math.PI / 2, c, s.loadUntil > 0);
        else { const a = now / 1100 + i * 1.4; hull(ctx, x + Math.cos(a) * (baseR + 12), gy - r * 0.9 + Math.sin(a) * (baseR + 12) * TILT, 6, a + Math.PI / 2, c, false); }
      });
    }

    // body
    if (n.kind === 'planet') drawPlanet(ctx, n, x, gy, r, sil, stale);
    else drawStation(ctx, n, x, gy, r, col, sil, stale, now);
    const topY = n.kind === 'planet' ? gy - r * 2.25 : gy - r * (n.citadel ? 1.5 : 0.85) - r * 0.35 - r * TILT * 0.4;

    // flag with the garrison count, or a paper tag for unknowns
    if (sil) {
      ctx.fillStyle = PAPER; ctx.font = '800 13px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.globalAlpha = 0.75;
      ctx.fillText('?', x, n.kind === 'planet' ? gy - r * 1.25 : gy - r);
      ctx.globalAlpha = 1;
    } else {
      const glyph = n.home ? '⌂ ' : n.citadel ? '✦ ' : n.capital ? '♛ ' : '';
      flag(ctx, x + (n.kind === 'planet' ? 0 : r * 0.1), topY + (n.kind === 'planet' ? 3 : r * TILT * 0.4), col, glyph + (stale ? '~' : '') + k.drones, n.home || n.capital || n.citadel, stale, now, n.id);
    }
    if (z > 1.9) names.push({ t: n.name.toUpperCase(), x, y: gy + baseR * TILT + 12, a: sil ? 0.4 : 0.8 });

    // specialists stand in front as pawns; paper tags mark things worth knowing
    if (!sil) {
      const specs = k.tier === 'live' ? n.specs : g.intel[n.id].snap?.specs || [];
      const cnt = Math.min(specs.length, 4);
      specs.slice(0, 4).forEach((id, i) => pawn(ctx, x - (cnt - 1) * 5.5 + i * 11, gy + baseR * TILT * 0.55, id === g.cmdSpec ? '#e8bd55' : SPECS[g.specs[id].def].color, id === g.cmdSpec));
      let tx = x + baseR + 6;
      const tag = (t: string, bg: string) => {
        ctx.fillStyle = bg; ctx.beginPath(); ctx.roundRect(tx - 7, gy - r * 1.2 - 8, 15, 16, 4); ctx.fill();
        ctx.fillStyle = INK; ctx.font = '800 11px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(t, tx + 0.5, gy - r * 1.2 + 0.5); tx += 18;
      };
      if (n.event) tag('!', '#e8bd55');
      if (n.offer && n.owner !== PLAYER) tag('☺', '#e9a9c9');
      if (n.hold) tag('◷', '#a9dcec');
      if (n.owner === PLAYER && n.prisoners.length) tag('⛓', '#e6a183');
      if (cmd && cmd.held && cmd.node === n.id) tag('★', '#e2604e');
    }
  }
  // names go on last so no body hides them
  ctx.font = '700 10px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.lineJoin = 'round';
  for (const nm of names) { ctx.strokeStyle = 'rgba(29,35,53,0.7)'; ctx.lineWidth = 3; ctx.strokeText(nm.t, nm.x, nm.y); ctx.fillStyle = hexA(PAPER, nm.a); ctx.fillText(nm.t, nm.x, nm.y); }
}
