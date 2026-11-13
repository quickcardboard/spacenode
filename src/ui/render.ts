import type { Game, GNode, Ship } from '../sim/types';
import { PLAYER } from '../sim/types';
import { radii, sideColor, shipSeen, isDocked, canTarget, natMax } from '../sim/core';
import { SPECS } from '../sim/content';

export interface Cam { x: number; y: number; z: number }
export interface RenderUi {
  cam: Cam; w: number; h: number;
  sel: { type: 'node' | 'ship'; id: number } | null;
  targeting: boolean; from: number; hover: number;
}

export const NEUTRAL = '#b9b1a2', UNKNOWN = '#5d6875';
export const nodeR = (n: GNode) => (n.citadel ? 13 : n.kind === 'station' ? 8.5 : [7, 9, 11.5][n.size]);

let nebula: HTMLCanvasElement | null = null, nebulaSeed = -1;
const stars: { x: number; y: number; r: number; d: number; a: number }[] = [];
let fog: HTMLCanvasElement | null = null;

function mkNebula(seed: number) {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 700;
  const x = c.getContext('2d')!;
  let s = seed | 0;
  const r = () => { s = (s + 0x6d2b79f5) | 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const base = x.createLinearGradient(0, 0, 1024, 700);
  base.addColorStop(0, '#141a33'); base.addColorStop(0.5, '#1b1f3d'); base.addColorStop(1, '#2a1838');
  x.fillStyle = base; x.fillRect(0, 0, 1024, 700);
  const hues = ['#2d6f8f', '#7a3f8c', '#b0563f', '#2f8a78', '#4a4fa3', '#96406a'];
  x.globalCompositeOperation = 'lighter';
  for (let i = 0; i < 26; i++) {
    const cx = r() * 1024, cy = r() * 700, rad = 90 + r() * 260;
    const g = x.createRadialGradient(cx, cy, 0, cx, cy, rad);
    const col = hues[Math.floor(r() * hues.length)];
    g.addColorStop(0, col + '55'); g.addColorStop(0.5, col + '22'); g.addColorStop(1, col + '00');
    x.fillStyle = g; x.fillRect(cx - rad, cy - rad, rad * 2, rad * 2);
  }
  x.globalCompositeOperation = 'source-over';
  return c;
}

function hexA(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

/** What the player is allowed to see of a node. */
export function known(g: Game, n: GNode): { tier: 'live' | 'stale' | 'detected' | 'hidden'; owner: number; drones: number } {
  if (n.owner === PLAYER || g.vis[n.id] === 2) return { tier: 'live', owner: n.owner, drones: n.drones };
  const it = g.intel[n.id];
  if (it.snap) return { tier: 'stale', owner: it.snap.owner, drones: it.snap.drones };
  if (it.seen >= 1) return { tier: 'detected', owner: -1, drones: 0 };
  return { tier: 'hidden', owner: -1, drones: 0 };
}

export function draw(ctx: CanvasRenderingContext2D, g: Game, ui: RenderUi, now: number) {
  const { cam, w, h } = ui, z = cam.z;
  const sx = (x: number) => (x - cam.x) * z + w / 2, sy = (y: number) => (y - cam.y) * z + h / 2;

  // --- background: nebula with parallax, then three star layers
  if (!nebula || nebulaSeed !== g.seed) { nebula = mkNebula(g.seed); nebulaSeed = g.seed; }
  if (!stars.length) for (let i = 0; i < 260; i++) stars.push({ x: Math.random(), y: Math.random(), r: Math.random() * 1.3 + 0.3, d: [0.08, 0.18, 0.32][i % 3], a: 0.35 + Math.random() * 0.6 });
  ctx.fillStyle = '#12162b'; ctx.fillRect(0, 0, w, h);
  const nz = Math.max(z * 0.55, 1.2), nw = 1024 * nz * 0.9, nh = 700 * nz * 0.9;
  ctx.drawImage(nebula, w / 2 - nw / 2 - (cam.x - g.w / 2) * z * 0.45, h / 2 - nh / 2 - (cam.y - g.h / 2) * z * 0.45, nw, nh);
  for (const s of stars) {
    const px = (((s.x * 1600 - cam.x * z * s.d) % 1600) + 1600) % 1600, py = (((s.y * 1200 - cam.y * z * s.d) % 1200) + 1200) % 1200;
    if (px > w || py > h) continue;
    ctx.globalAlpha = s.a * (0.75 + 0.25 * Math.sin(now / 900 + s.x * 40));
    ctx.fillStyle = '#e9ecff'; ctx.beginPath(); ctx.arc(px, py, s.r, 0, 7); ctx.fill();
  }
  ctx.globalAlpha = 1;

  // --- territory fog: soft colour under every node whose owner is known
  ctx.globalCompositeOperation = 'lighter';
  for (const n of g.nodes) {
    const k = known(g, n);
    if (k.tier === 'hidden' || k.tier === 'detected' || k.owner === 0) continue;
    const x = sx(n.x), y = sy(n.y), r = 46 * z;
    if (x < -r || y < -r || x > w + r || y > h + r) continue;
    const col = sideColor(g, k.owner);
    const gr = ctx.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, hexA(col, 0.2)); gr.addColorStop(0.6, hexA(col, 0.08)); gr.addColorStop(1, hexA(col, 0));
    ctx.fillStyle = gr; ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  ctx.globalCompositeOperation = 'source-over';

  // --- vision: dark veil with detection (dim) and full-intelligence (clear) holes
  if (!fog) fog = document.createElement('canvas');
  const fs = 0.5;
  if (fog.width !== Math.ceil(w * fs) || fog.height !== Math.ceil(h * fs)) { fog.width = Math.ceil(w * fs); fog.height = Math.ceil(h * fs); }
  const f = fog.getContext('2d')!;
  f.globalCompositeOperation = 'source-over';
  f.clearRect(0, 0, fog.width, fog.height);
  f.fillStyle = 'rgba(8,10,22,0.62)'; f.fillRect(0, 0, fog.width, fog.height);
  f.globalCompositeOperation = 'destination-out';
  for (const n of g.nodes) {
    if (n.owner !== PLAYER) continue;
    const [ri, ro] = radii(g, n), x = sx(n.x) * fs, y = sy(n.y) * fs;
    let gr = f.createRadialGradient(x, y, ro * z * fs * 0.85, x, y, ro * z * fs);
    gr.addColorStop(0, 'rgba(0,0,0,0.55)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    f.fillStyle = gr; f.beginPath(); f.arc(x, y, ro * z * fs, 0, 7); f.fill();
    gr = f.createRadialGradient(x, y, ri * z * fs * 0.9, x, y, ri * z * fs);
    gr.addColorStop(0, 'rgba(0,0,0,1)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    f.fillStyle = gr; f.beginPath(); f.arc(x, y, ri * z * fs, 0, 7); f.fill();
  }
  ctx.drawImage(fog, 0, 0, w, h);

  // --- selection range rings
  const selNode = ui.sel?.type === 'node' ? g.nodes[ui.sel.id] : null;
  if (selNode && selNode.owner === PLAYER) {
    const [ri, ro] = radii(g, selNode);
    ctx.lineWidth = 1; ctx.setLineDash([4, 6]);
    ctx.strokeStyle = 'rgba(255,255,255,0.28)'; ctx.beginPath(); ctx.arc(sx(selNode.x), sy(selNode.y), ri * z, 0, 7); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.13)'; ctx.beginPath(); ctx.arc(sx(selNode.x), sy(selNode.y), ro * z, 0, 7); ctx.stroke();
    ctx.setLineDash([]);
  }

  // --- flight paths
  const flying: { s: Ship; seen: number }[] = [];
  for (const s of g.ships) {
    if (s.at >= 0) continue;
    const seen = shipSeen(g, s);
    if (!seen) continue;
    flying.push({ s, seen });
    const to = g.nodes[s.to], col = sideColor(g, s.owner);
    ctx.strokeStyle = hexA(col, s.owner === PLAYER ? 0.45 : 0.7); ctx.lineWidth = s.owner === PLAYER ? 1.2 : 1.6;
    ctx.setLineDash([3, 5]); ctx.lineDashOffset = -now / 60;
    ctx.beginPath(); ctx.moveTo(sx(s.x), sy(s.y)); ctx.lineTo(sx(to.x), sy(to.y)); ctx.stroke();
    ctx.setLineDash([]);
  }
  if (ui.targeting && ui.from >= 0 && ui.hover >= 0 && ui.hover !== ui.from) {
    const a = g.nodes[ui.from], b = g.nodes[ui.hover];
    ctx.strokeStyle = 'rgba(255,255,255,0.7)'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(sx(a.x), sy(a.y)); ctx.lineTo(sx(b.x), sy(b.y)); ctx.stroke();
  }

  // --- nodes
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  const cmd = g.specs[g.cmdSpec];
  for (const n of g.nodes) {
    const k = known(g, n);
    if (k.tier === 'hidden') continue;
    const x = sx(n.x), y = sy(n.y), r = nodeR(n) * z;
    if (x < -60 || y < -60 || x > w + 60 || y > h + 60) continue;
    const col = k.tier === 'detected' ? UNKNOWN : k.owner === 0 ? NEUTRAL : sideColor(g, k.owner);
    const dim = k.tier === 'live' ? 1 : 0.72;

    if (ui.targeting && n.id !== ui.from && (canTarget(g, n) || n.owner === PLAYER)) {
      ctx.strokeStyle = `rgba(255,255,255,${0.25 + 0.2 * Math.sin(now / 250)})`; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(x, y, r + 7, 0, 7); ctx.stroke();
    }
    if (ui.sel?.type === 'node' && ui.sel.id === n.id) {
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, r + 5, 0, 7); ctx.stroke();
    }
    // natural defence / shield halo
    if (k.tier === 'live' && n.kind === 'planet' && n.nat >= 1) {
      const mx = Math.max(1, n.owner === 0 ? [4, 7, 11][n.size] : natMax(g, n));
      ctx.strokeStyle = hexA('#bfe3ff', 0.55); ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(x, y, r + 2.5, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * Math.min(1, n.nat / mx)); ctx.stroke();
    }
    ctx.globalAlpha = dim;
    ctx.fillStyle = col;
    if (n.kind === 'planet') {
      ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
      ctx.save(); ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.clip();
      ctx.fillStyle = 'rgba(0,0,0,0.22)'; ctx.beginPath(); ctx.arc(x + r * 0.45, y + r * 0.35, r, 0, 7); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.14)'; ctx.fillRect(x - r, y - r * 0.25, r * 2, r * 0.22);
      ctx.restore();
    } else {
      const sides = n.citadel ? 8 : 6, rot = n.citadel ? now / 6000 : Math.PI / 6;
      ctx.beginPath();
      for (let i = 0; i < sides; i++) { const a = rot + (i * Math.PI * 2) / sides, rr = n.citadel && i % 2 ? r * 0.72 : r; ctx[i ? 'lineTo' : 'moveTo'](x + Math.cos(a) * rr, y + Math.sin(a) * rr); }
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.beginPath(); ctx.arc(x, y, r * 0.42, 0, 7); ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (n.home || (k.tier !== 'detected' && (n.capital || n.citadel))) {
      ctx.fillStyle = '#fff'; ctx.font = `700 ${Math.max(9, r * 0.8)}px system-ui`;
      ctx.fillText(n.home ? '⌂' : n.citadel ? '✦' : '♛', x, y + 0.5);
    }
    // build progress ring
    if (n.owner === PLAYER && n.lane) {
      ctx.strokeStyle = '#ffe08a'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(x, y, r + 5.5, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (1 - n.lane.left / n.lane.total)); ctx.stroke();
    }
    // garrison label
    const label = k.tier === 'detected' ? '?' : (k.tier === 'stale' ? '~' : '') + k.drones;
    ctx.font = '700 12px system-ui';
    const tw = ctx.measureText(label).width + 10;
    ctx.fillStyle = 'rgba(10,12,24,0.78)';
    ctx.beginPath(); ctx.roundRect(x - tw / 2, y + r + 4, tw, 16, 8); ctx.fill();
    ctx.fillStyle = k.tier === 'live' ? '#fff' : '#aab2c0';
    ctx.fillText(label, x, y + r + 12.5);
    if (z > 2.1) { ctx.font = '600 10px system-ui'; ctx.fillStyle = 'rgba(230,234,255,0.6)'; ctx.fillText(n.name.toUpperCase(), x, y + r + 28); }

    // markers: specialists, events, residents, prisoners
    if (k.tier !== 'detected') {
      const specs = k.tier === 'live' ? n.specs : g.intel[n.id].snap?.specs || [];
      specs.slice(0, 4).forEach((id, i) => {
        const sp = g.specs[id], px = x - (Math.min(specs.length, 4) - 1) * 6 + i * 12, py = y - r - 10;
        ctx.fillStyle = id === g.cmdSpec ? '#ffd166' : SPECS[sp.def].color;
        ctx.beginPath(); ctx.arc(px, py, 5, 0, 7); ctx.fill();
        ctx.strokeStyle = 'rgba(10,12,24,0.9)'; ctx.lineWidth = 1.5; ctx.stroke();
        if (id === g.cmdSpec) { ctx.fillStyle = '#1a1830'; ctx.font = '700 8px system-ui'; ctx.fillText('★', px, py + 0.5); }
      });
      let mx = x + r + 8;
      const mark = (t: string, c: string) => { ctx.fillStyle = c; ctx.font = '700 12px system-ui'; ctx.fillText(t, mx, y - r * 0.5); mx += 11; };
      if (n.event) mark('!', '#ffd166');
      if (n.offer && n.owner !== PLAYER) mark('☺', '#f29ad0');
      if (n.hold) mark('◷', '#8ee3ff');
      if (n.owner === PLAYER && n.prisoners.length) mark('⛓', '#ff9e7a');
      if (cmd && cmd.held && cmd.node === n.id) mark('★', '#ff5d5d');
    }
    // ships parked here
    if (k.tier === 'live') {
      const here = g.ships.filter(s => s.at === n.id);
      here.slice(0, 5).forEach((s, i) => {
        const docked = isDocked(g, s);
        const a = docked ? -0.5 + i * 0.5 : now / 900 + i * 1.3, rr = r + (docked ? 9 : 13);
        const px = x - Math.cos(a) * rr, py = y + Math.sin(a) * rr - (docked ? 0 : 2);
        tri(ctx, px, py, 4.2, docked ? -Math.PI / 2 : a + Math.PI / 2, sideColor(g, s.owner), s.loadUntil > 0);
      });
    }
  }

  // --- ships in flight
  for (const { s, seen } of flying) {
    const to = g.nodes[s.to], x = sx(s.x), y = sy(s.y), a = Math.atan2(to.y - s.y, to.x - s.x);
    const col = sideColor(g, s.owner);
    if (ui.sel?.type === 'ship' && ui.sel.id === s.id) { ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(x, y, 12, 0, 7); ctx.stroke(); }
    tri(ctx, x, y, 7, a, s.owner === 0 ? '#d9d9d9' : col, false);
    if (s.specs.includes(g.cmdSpec)) { ctx.fillStyle = '#ffd166'; ctx.font = '700 10px system-ui'; ctx.fillText('★', x, y - 13); }
    const label = seen === 2 ? String(s.drones) : '?';
    ctx.font = '700 11px system-ui';
    const tw = ctx.measureText(label).width + 8;
    ctx.fillStyle = 'rgba(10,12,24,0.78)'; ctx.beginPath(); ctx.roundRect(x - tw / 2, y + 9, tw, 14, 7); ctx.fill();
    ctx.fillStyle = s.owner === PLAYER ? '#fff' : col; ctx.fillText(label, x, y + 16.5);
  }
}

function tri(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, a: number, col: string, hollow: boolean) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(a);
  ctx.beginPath(); ctx.moveTo(r, 0); ctx.lineTo(-r * 0.75, r * 0.7); ctx.lineTo(-r * 0.35, 0); ctx.lineTo(-r * 0.75, -r * 0.7); ctx.closePath();
  ctx.fillStyle = col; ctx.strokeStyle = 'rgba(10,12,24,0.9)'; ctx.lineWidth = 1.2;
  if (hollow) { ctx.globalAlpha = 0.5; }
  ctx.fill(); ctx.stroke();
  ctx.restore();
}
