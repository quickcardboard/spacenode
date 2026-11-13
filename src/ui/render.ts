import * as THREE from 'three';
import type { Game, GNode, Ship } from '../sim/types';
import { PLAYER } from '../sim/types';
import { radii, sideColor, shipSeen, canTarget, natMax, docks } from '../sim/core';
import { SPECS } from '../sim/content';

// 3D diorama renderer. Low-poly, flat-shaded models stand above a misty plane and are lit by one
// sun; a perspective camera looks down at an angle. A transparent 2D canvas on top carries only
// what must stay crisp at any zoom: flags with garrison counts, names, tags and flight trails.
// World (x, y) maps to scene (x, 0, z); scene y is up.

export interface Cam { x: number; y: number; z: number }
export interface RenderUi {
  cam: Cam; w: number; h: number;
  sel: { type: 'node' | 'ship'; id: number } | null;
  targeting: boolean; from: number; hover: number;
}

const PITCH = (52 * Math.PI) / 180, FOV = 30;
export const TILT = Math.sin(PITCH); // ground foreshortening, used by input for panning
export const NEUTRAL = '#8f95a6', UNKNOWN = '#56617c';
const PAPER = '#f1ead9', INK = '#1d2335', HULL = '#e6dcc6';
export const nodeR = (n: GNode) => (n.citadel ? 5 : n.kind === 'station' ? 3.3 : [2.7, 3.5, 4.5][n.size]);
const bodyTop = (n: GNode) => { const r = nodeR(n); return n.kind === 'planet' ? r * 2.5 : r * 0.5 + r * (n.citadel ? 3.4 : 1.5); };
const bodyMid = (n: GNode) => { const r = nodeR(n); return n.kind === 'planet' ? r * 1.5 : r * 0.5 + r * 0.55; };

const TERRAIN = [
  ['#d9c7a0', '#b09a74', '#efe2c2'], ['#93a5b3', '#6c7e8e', '#b9c7d0'], ['#93b08c', '#6d8b69', '#b7ceac'],
  ['#cc9379', '#a56e58', '#e3b7a2'], ['#cfdcdf', '#a2b5ba', '#eef5f5'],
];

export function known(g: Game, n: GNode): { tier: 'live' | 'stale' | 'detected' | 'hidden'; owner: number; drones: number } {
  if (n.owner === PLAYER || g.vis[n.id] === 2) return { tier: 'live', owner: n.owner, drones: n.drones };
  const it = g.intel[n.id];
  if (it.snap) return { tier: 'stale', owner: it.snap.owner, drones: it.snap.drones };
  if (it.seen >= 1) return { tier: 'detected', owner: -1, drones: 0 };
  return { tier: 'hidden', owner: -1, drones: 0 };
}

// ------------------------------------------------------------------ scene
let renderer: THREE.WebGLRenderer | null = null, scene: THREE.Scene, camera: THREE.PerspectiveCamera;
let ground: THREE.Mesh | null = null, fogCanvas: HTMLCanvasElement, fogTex: THREE.CanvasTexture, fogT = 0, sceneSeed = -1;
let ringIn: THREE.LineLoop, ringOut: THREE.LineLoop, selRing: THREE.Mesh;
const nodeViews = new Map<number, { sig: string; grp: THREE.Group; spin: THREE.Object3D | null }>();
const shipViews = new Map<number, { owner: number; grp: THREE.Group }>();
const MARGIN = 320;
let vw = 0, vh = 0;
const v3 = new THREE.Vector3();

const lam = (color: string, fade = 0) => {
  const c = new THREE.Color(color);
  if (fade) c.lerp(new THREE.Color(UNKNOWN), fade);
  return new THREE.MeshLambertMaterial({ color: c, flatShading: true });
};
const flat = (color: string, opacity = 1) => new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity, depthWrite: opacity >= 1 });
function dispose(o: THREE.Object3D) {
  o.traverse(c => { const m = c as THREE.Mesh; if (m.geometry) m.geometry.dispose(); const mat = m.material as THREE.Material | THREE.Material[] | undefined; if (Array.isArray(mat)) mat.forEach(x => x.dispose()); else if (mat) mat.dispose(); });
  o.removeFromParent();
}
function ring(inner: number, outer: number, color: string, y: number, start = 0, len = Math.PI * 2, opacity = 1) {
  const m = new THREE.Mesh(new THREE.RingGeometry(inner, outer, 48, 1, start, len), flat(color, opacity));
  m.rotation.x = -Math.PI / 2; m.position.y = y;
  return m;
}

function init() {
  const el = document.getElementById('gl') as HTMLCanvasElement;
  renderer = new THREE.WebGLRenderer({ canvas: el, antialias: true });
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#2a3350');
  camera = new THREE.PerspectiveCamera(FOV, 1, 1, 4000);
  scene.add(new THREE.HemisphereLight('#fff4e0', '#3d4668', 1.5));
  const sun = new THREE.DirectionalLight('#fff0d8', 2.2);
  sun.position.set(-0.7, 1, 0.45);
  scene.add(sun);
  const circle: THREE.Vector3[] = [];
  for (let i = 0; i < 96; i++) circle.push(new THREE.Vector3(Math.cos((i / 96) * Math.PI * 2), 0, Math.sin((i / 96) * Math.PI * 2)));
  const geo = new THREE.BufferGeometry().setFromPoints(circle);
  ringIn = new THREE.LineLoop(geo, new THREE.LineBasicMaterial({ color: PAPER, transparent: true, opacity: 0.55 }));
  ringOut = new THREE.LineLoop(geo, new THREE.LineBasicMaterial({ color: PAPER, transparent: true, opacity: 0.22 }));
  selRing = ring(1, 1.1, PAPER, 0.12);
  scene.add(ringIn, ringOut, selRing);
}

function buildWorld(g: Game) {
  for (const v of nodeViews.values()) dispose(v.grp);
  for (const v of shipViews.values()) dispose(v.grp);
  nodeViews.clear(); shipViews.clear();
  for (const o of scene.children.filter(c => c.userData.world)) dispose(o);
  let s = g.seed | 0;
  const r = () => { s = (s + 0x6d2b79f5) | 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  // deep space lies far below the plane, so stars and colour drifts slide by in parallax as you scroll
  const pos: number[] = [];
  for (let i = 0; i < 1400; i++) pos.push(r() * (g.w + 1600) - 800, -150 - r() * 500, r() * (g.h + 1600) - 800);
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  const stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: PAPER, size: 2.2, sizeAttenuation: false, transparent: true, opacity: 0.8 }));
  stars.userData.world = true; scene.add(stars);
  const hues = ['#5f7fa8', '#8a6fa0', '#b9786a', '#5f9c94', '#a88f6a'];
  for (let i = 0; i < 14; i++) {
    const m = new THREE.Mesh(new THREE.CircleGeometry(120 + r() * 220, 24), flat(hues[Math.floor(r() * hues.length)], 0.16));
    m.rotation.x = -Math.PI / 2; m.position.set(r() * (g.w + 600) - 300, -220 - r() * 200, r() * (g.h + 600) - 300);
    m.userData.world = true; scene.add(m);
  }
  fogCanvas = document.createElement('canvas');
  fogCanvas.width = g.w + MARGIN * 2; fogCanvas.height = g.h + MARGIN * 2;
  fogTex = new THREE.CanvasTexture(fogCanvas);
  fogTex.colorSpace = THREE.SRGBColorSpace;
  ground = new THREE.Mesh(new THREE.PlaneGeometry(fogCanvas.width, fogCanvas.height), new THREE.MeshBasicMaterial({ map: fogTex, transparent: true, depthWrite: false }));
  ground.rotation.x = -Math.PI / 2; ground.position.set(g.w / 2, -0.2, g.h / 2);
  ground.userData.world = true; ground.renderOrder = -1; scene.add(ground);
  fogT = 0;
}

function hexA(hex: string, a: number) { const n = parseInt(hex.slice(1), 16); return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`; }
function shadeCss(hex: string, k: number) { const n = parseInt(hex.slice(1), 16), f = (v: number) => Math.max(0, Math.min(255, Math.round(v * k))); return `rgb(${f((n >> 16) & 255)},${f((n >> 8) & 255)},${f(n & 255)})`; }

/** Mist over everything, thinned in detection range, cleared in full-intelligence range; territory pools on top. */
function paintGround(g: Game) {
  const c = fogCanvas.getContext('2d')!;
  c.globalCompositeOperation = 'source-over';
  c.clearRect(0, 0, fogCanvas.width, fogCanvas.height);
  c.fillStyle = 'rgba(86,97,128,0.8)'; c.fillRect(0, 0, fogCanvas.width, fogCanvas.height);
  c.globalCompositeOperation = 'destination-out';
  for (const n of g.nodes) {
    if (n.owner !== PLAYER) continue;
    const [ri, ro] = radii(g, n), x = n.x + MARGIN, y = n.y + MARGIN;
    let gr = c.createRadialGradient(x, y, ro * 0.82, x, y, ro);
    gr.addColorStop(0, 'rgba(0,0,0,0.5)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = gr; c.beginPath(); c.arc(x, y, ro, 0, 7); c.fill();
    gr = c.createRadialGradient(x, y, ri * 0.86, x, y, ri);
    gr.addColorStop(0, 'rgba(0,0,0,1)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = gr; c.beginPath(); c.arc(x, y, ri, 0, 7); c.fill();
  }
  c.globalCompositeOperation = 'source-over';
  for (const n of g.nodes) {
    const k = known(g, n);
    if (k.tier === 'hidden' || k.tier === 'detected' || k.owner === 0) continue;
    const x = n.x + MARGIN, y = n.y + MARGIN, col = sideColor(g, k.owner);
    const gr = c.createRadialGradient(x, y, 0, x, y, 30);
    gr.addColorStop(0, hexA(col, 0.4)); gr.addColorStop(0.7, hexA(col, 0.18)); gr.addColorStop(1, hexA(col, 0));
    c.fillStyle = gr; c.beginPath(); c.arc(x, y, 30, 0, 7); c.fill();
  }
  fogTex.needsUpdate = true;
}

// ------------------------------------------------------------------ models
function planetMesh(n: GNode, r: number, fade: number): THREE.Mesh {
  const geo = new THREE.IcosahedronGeometry(r, 1).toNonIndexed();
  const [base, dark, light] = TERRAIN[n.id % TERRAIN.length].map(c => { const k = new THREE.Color(c); if (fade) k.lerp(new THREE.Color(UNKNOWN), fade); return k; });
  const p = geo.getAttribute('position'), cols: number[] = [];
  const band = 0.05 + (n.id % 3) * 0.12;
  for (let i = 0; i < p.count; i += 3) {
    const cy = (p.getY(i) + p.getY(i + 1) + p.getY(i + 2)) / 3 / r;
    const c = cy > 0.62 ? light : Math.abs(cy - band) < 0.14 || (n.size > 0 && Math.abs(cy + 0.42) < 0.1) ? dark : base;
    for (let k = 0; k < 3; k++) cols.push(c.r, c.g, c.b);
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }));
  m.rotation.z = 0.25;
  return m;
}

const DOCK_ANGLES = [150, 30, 210, -30].map(d => (d * Math.PI) / 180);
function dockPos(n: GNode, i: number): { x: number; y: number; z: number; a: number } {
  const r = nodeR(n);
  if (n.kind === 'planet') { const a = Math.PI * (0.8 + 0.14 * Math.ceil(i / 2) * (i % 2 ? 1 : -1)); return { x: Math.cos(a) * r * 2.3, y: 0.7, z: Math.sin(a) * r * 2.3, a }; }
  const a = DOCK_ANGLES[i % 4];
  return { x: Math.cos(a) * r * 2.25, y: r * 0.5 + r * 0.55 + 0.55, z: Math.sin(a) * r * 2.25, a };
}

function buildNode(g: Game, n: GNode, tier: string, owner: number): { grp: THREE.Group; spin: THREE.Object3D | null } {
  const grp = new THREE.Group(), r = nodeR(n), sil = tier === 'detected', fade = tier === 'stale' ? 0.35 : 0;
  const col = sil ? UNKNOWN : owner === 0 ? NEUTRAL : sideColor(g, owner);
  let spin: THREE.Object3D | null = null;
  const blob = new THREE.Mesh(new THREE.CircleGeometry(r * 1.05, 24), flat('#0c101e', 0.4));
  blob.rotation.x = -Math.PI / 2; blob.position.y = 0.02; grp.add(blob);
  if (sil) {
    const m = n.kind === 'planet' ? new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), flat(UNKNOWN, 0.9)) : new THREE.Mesh(new THREE.CylinderGeometry(r, r, r * 1.1, 6), flat(UNKNOWN, 0.9));
    m.position.y = bodyMid(n); grp.add(m);
    return { grp, spin };
  }
  if (owner !== 0) grp.add(ring(r * 1.45, r * 1.62, col, 0.06, 0, Math.PI * 2, fade ? 0.5 : 1));

  if (n.kind === 'planet') {
    const m = planetMesh(n, r, fade); m.position.y = r * 1.5; grp.add(m); spin = m;
    if (n.size === 2) { const t = new THREE.Mesh(new THREE.TorusGeometry(r * 1.55, r * 0.09, 4, 28), lam(TERRAIN[n.id % 5][2], fade)); t.rotation.x = Math.PI / 2 - 0.3; t.rotation.y = 0.2; t.position.y = r * 1.5; grp.add(t); }
    // shield generators: pale domes on the ground; mines: small dark rigs; lab: a crystal
    for (let i = 0; i < (n.b.shield || 0); i++) { const d = new THREE.Mesh(new THREE.SphereGeometry(r * 0.3, 6, 3, 0, Math.PI * 2, 0, Math.PI / 2), lam('#bfe3ff', fade)); d.position.set((i ? 1 : -1) * r * 1.15, 0, r * 0.75); grp.add(d); }
    for (let i = 0; i < Math.min(4, n.b.mine || 0); i++) { const b = new THREE.Mesh(new THREE.ConeGeometry(r * 0.2, r * 0.55, 4), lam('#7b6a55', fade)); b.position.set(r * (-0.9 + i * 0.6), r * 0.27, -r * 1.25); grp.add(b); }
    if (n.b.lab) { const b = new THREE.Mesh(new THREE.OctahedronGeometry(r * 0.28), lam('#9ac7e8', fade)); b.position.set(r * 1.35, r * 0.4, -r * 0.5); grp.add(b); }
  } else {
    const base = r * 0.5, hh = r * 1.1;
    const wall = n.citadel ? '#57526f' : HULL;
    const hullM = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 0.92, hh, 6), lam(wall, fade)); hullM.position.y = base + hh / 2; grp.add(hullM);
    const keel = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.92, r * 0.35, r * 0.45, 6), lam(n.citadel ? '#413d57' : '#b8ad96', fade)); keel.position.y = base - r * 0.22; grp.add(keel);
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.5, r * 0.68, r * 0.4, 6), lam(col, fade)); roof.position.y = base + hh + r * 0.2; grp.add(roof);
    if (n.citadel) {
      const sp = new THREE.Mesh(new THREE.ConeGeometry(r * 0.3, r * 1.9, 6), lam(col, fade)); sp.position.y = base + hh + r * 1.35; grp.add(sp);
      const halo = new THREE.Mesh(new THREE.TorusGeometry(r * 1.6, r * 0.07, 4, 32), lam(col, fade)); halo.rotation.x = Math.PI / 2; halo.position.y = base + hh * 0.6; grp.add(halo); spin = halo;
    } else if (n.home || n.capital) {
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.07, r * 0.07, r * 0.9, 4), lam(PAPER, fade)); mast.position.y = base + hh + r * 0.8; grp.add(mast);
    }
    // one arm and landing pad per dock; pads are the only places ships can load and unload
    const nd = Math.min(4, docks(n));
    for (let i = 0; i < nd; i++) {
      const a = DOCK_ANGLES[i], len = r * 1.25;
      const arm = new THREE.Mesh(new THREE.BoxGeometry(len, r * 0.14, r * 0.3), lam('#b8ad96', fade));
      arm.position.set(Math.cos(a) * (r * 0.9 + len / 2), base + hh / 2, Math.sin(a) * (r * 0.9 + len / 2)); arm.rotation.y = -a; grp.add(arm);
      const pad = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.42, r * 0.42, r * 0.1, 6), lam(col, fade));
      pad.position.set(Math.cos(a) * r * 2.25, base + hh / 2 + r * 0.05, Math.sin(a) * r * 2.25); grp.add(pad);
    }
    for (let i = 0; i < Math.min(3, n.b.turret || 0); i++) {
      const a = Math.PI / 2 + (i - 1) * 1.05;
      const t = new THREE.Mesh(new THREE.BoxGeometry(r * 0.26, r * 0.3, r * 0.26), lam('#6d7385', fade)); t.position.set(Math.cos(a) * r * 0.8, base + hh + r * 0.15, Math.sin(a) * r * 0.8); grp.add(t);
      const bar = new THREE.Mesh(new THREE.BoxGeometry(r * 0.08, r * 0.08, r * 0.5), lam('#4b5063', fade)); bar.position.set(Math.cos(a) * r * 0.8, base + hh + r * 0.22, Math.sin(a) * r * 0.8 + r * 0.3); grp.add(bar);
    }
    if (n.b.screen) { const s = new THREE.Mesh(new THREE.TorusGeometry(r * 1.2, r * 0.06, 4, 24), lam('#bfe3ff', fade)); s.rotation.x = Math.PI / 2; s.position.y = base + hh * 0.2; grp.add(s); }
    if (n.b.sensor) { const d = new THREE.Mesh(new THREE.ConeGeometry(r * 0.3, r * 0.25, 8, 1, true), lam(PAPER, fade)); d.position.set(-r * 0.45, base + hh + r * 0.55, -r * 0.3); d.rotation.x = Math.PI; grp.add(d); }
  }
  return { grp, spin };
}

function pawnMesh(color: string): THREE.Group {
  const p = new THREE.Group();
  const body = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.3, 6), lam(color)); body.position.y = 0.65;
  const head = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 0), lam(color)); head.position.y = 1.5;
  p.add(body, head);
  return p;
}

function shipMesh(color: string): THREE.Group {
  // points along +x: tapered hull, swept wing, coloured tail fin
  const s = new THREE.Group(), m = new THREE.Group();
  const hullM = new THREE.Mesh(new THREE.ConeGeometry(0.55, 2.6, 4), lam(HULL)); hullM.rotation.z = -Math.PI / 2; hullM.scale.set(1, 1, 1.5);
  const wing = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.12, 2.6), lam(color)); wing.position.x = -0.6;
  const fin = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.12), lam(color)); fin.position.set(-0.9, 0.4, 0);
  m.add(hullM, wing, fin); m.name = 'model';
  const blob = new THREE.Mesh(new THREE.CircleGeometry(1.2, 12), flat('#0c101e', 0.35)); blob.rotation.x = -Math.PI / 2; blob.name = 'shadow';
  m.scale.setScalar(1.35);
  s.add(m, blob);
  return s;
}

// ------------------------------------------------------------------ 2D overlay helpers
export function toScreen(x: number, y: number, hgt = 0): { x: number; y: number } {
  v3.set(x, hgt, y).project(camera);
  return { x: (v3.x * 0.5 + 0.5) * vw, y: (-v3.y * 0.5 + 0.5) * vh };
}
/** Where on screen to hit-test a node (the middle of its body). */
export function nodeScreen(n: GNode) { return toScreen(n.x, n.y, bodyMid(n)); }

function flag(ctx: CanvasRenderingContext2D, x: number, y: number, col: string, text: string, big: boolean, faded: boolean, now: number, seed: number) {
  ctx.font = `800 ${big ? 13 : 12}px system-ui`;
  const fw = Math.max(big ? 30 : 24, ctx.measureText(text).width + 12), fh = big ? 18 : 16, ph = fh + 8;
  ctx.strokeStyle = PAPER; ctx.lineWidth = 2; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - ph); ctx.stroke();
  const wv = Math.sin(now / 420 + seed) * 1.6, top = y - ph;
  ctx.globalAlpha = faded ? 0.6 : 1;
  ctx.fillStyle = col;
  ctx.beginPath(); ctx.moveTo(x + 1, top); ctx.lineTo(x + fw, top + wv); ctx.lineTo(x + fw - 5, top + fh / 2 + wv); ctx.lineTo(x + fw, top + fh + wv); ctx.lineTo(x + 1, top + fh); ctx.closePath(); ctx.fill();
  ctx.fillStyle = shadeCss(col, 0.78); ctx.fillRect(x + 1, top + fh - 3, fw - 4, 3);
  ctx.fillStyle = INK; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(text, x + fw / 2 - 1, top + fh / 2 - 0.5 + wv / 2);
  ctx.globalAlpha = 1;
}

// ------------------------------------------------------------------ frame
export function draw(ctx: CanvasRenderingContext2D, g: Game, ui: RenderUi, now: number) {
  if (!renderer) init();
  const { cam, w, h } = ui, z = cam.z;
  if (sceneSeed !== g.seed || !ground) { buildWorld(g); sceneSeed = g.seed; }
  if (vw !== w || vh !== h) { vw = w; vh = h; renderer!.setPixelRatio(Math.min(2, window.devicePixelRatio || 1)); renderer!.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); }
  const D = h / (z * 2 * Math.tan((FOV * Math.PI) / 360));
  camera.position.set(cam.x, D * Math.sin(PITCH), cam.y + D * Math.cos(PITCH));
  camera.lookAt(cam.x, 0, cam.y);
  camera.updateMatrixWorld();
  if (now - fogT > 350) { fogT = now; paintGround(g); }

  // --- nodes: rebuild a model only when what the player can see of it changes
  for (const n of g.nodes) {
    const k = known(g, n), v = nodeViews.get(n.id);
    if (k.tier === 'hidden') { if (v) { dispose(v.grp); nodeViews.delete(n.id); } continue; }
    const live = k.tier === 'live', b = live ? n.b : g.intel[n.id].snap?.b || {};
    const natQ = live && n.kind === 'planet' ? Math.round(Math.min(1, n.nat / Math.max(1, n.owner === 0 ? [4, 7, 11][n.size] : natMax(g, n))) * 16) : 0;
    const laneQ = n.owner === PLAYER && n.lane ? Math.round((1 - n.lane.left / n.lane.total) * 24) : -1;
    const specs = k.tier === 'detected' ? [] : live ? n.specs : g.intel[n.id].snap?.specs || [];
    const sig = [k.tier, k.owner, JSON.stringify(b), natQ, laneQ, specs.join('.')].join('|');
    if (v && v.sig === sig) continue;
    if (v) dispose(v.grp);
    const view = buildNode(g, live ? n : ({ ...n, b } as GNode), k.tier, k.owner), r = nodeR(n);
    if (natQ > 0) view.grp.add(ring(r * 1.2, r * 1.34, '#bfe3ff', 0.08, Math.PI / 2, (natQ / 16) * Math.PI * 2));
    if (laneQ >= 0) view.grp.add(ring(r * 1.74, r * 1.9, '#e8bd55', 0.08, Math.PI / 2, Math.max(0.05, (laneQ / 24) * Math.PI * 2)));
    specs.slice(0, 4).forEach((id, i) => { const p = pawnMesh(id === g.cmdSpec ? '#e8bd55' : SPECS[g.specs[id].def].color); p.position.set((i - (Math.min(specs.length, 4) - 1) / 2) * 1.5, 0, r * 1.25 + 0.8); view.grp.add(p); });
    view.grp.position.set(n.x, 0, n.y);
    scene.add(view.grp);
    nodeViews.set(n.id, { sig, ...view });
  }
  for (const v of nodeViews.values()) if (v.spin) v.spin.rotation.y = now / 6000;

  // --- ships: on a dock pad, circling in orbit, or in flight
  const wanted = new Set<number>(), flying: { s: Ship; seen: number }[] = [];
  const parked = new Map<number, Ship[]>();
  for (const s of g.ships) {
    if (s.at >= 0) { if (known(g, g.nodes[s.at]).tier === 'live') { if (!parked.has(s.at)) parked.set(s.at, []); parked.get(s.at)!.push(s); } }
    else { const seen = shipSeen(g, s); if (seen) flying.push({ s, seen }); }
  }
  const place = (s: Ship): THREE.Group => {
    wanted.add(s.id);
    let v = shipViews.get(s.id);
    if (!v || v.owner !== s.owner) { if (v) dispose(v.grp); v = { owner: s.owner, grp: shipMesh(s.owner === 0 ? '#d9d9d9' : sideColor(g, s.owner)) }; scene.add(v.grp); shipViews.set(s.id, v); }
    return v.grp;
  };
  for (const [nid, list] of parked) {
    const n = g.nodes[nid], nd = Math.min(n.kind === 'planet' ? 6 : 4, docks(n)), r = nodeR(n);
    list.sort((a, b) => a.seq - b.seq).slice(0, 8).forEach((s, i) => {
      const grp = place(s), model = grp.getObjectByName('model')!, sh = grp.getObjectByName('shadow')!;
      if (i < nd) { // docked: nose out on its pad; a loading ship lifts off the pad
        const d = dockPos(n, i), lift = s.loadUntil > 0 ? 0.5 + 0.3 * Math.sin(now / 150) : 0;
        grp.position.set(n.x + d.x, 0, n.y + d.z); grp.rotation.y = -d.a;
        model.position.y = d.y + lift; model.rotation.x = 0; sh.visible = n.kind === 'planet'; sh.position.y = 0.04;
      } else { // orbiting: no free dock, cargo stays aboard
        const a = now / 1500 + (i - nd) * 1.6, rad = r * 3.1;
        grp.position.set(n.x + Math.cos(a) * rad, 0, n.y + Math.sin(a) * rad); grp.rotation.y = -(a + Math.PI / 2);
        model.position.y = bodyMid(n) + r * 0.9; model.rotation.x = -0.45; sh.visible = false;
      }
    });
  }
  for (const { s } of flying) {
    const grp = place(s), to = g.nodes[s.to], model = grp.getObjectByName('model')!;
    grp.position.set(s.x, 0, s.y); grp.rotation.y = -Math.atan2(to.y - s.y, to.x - s.x);
    model.position.y = 3 + 0.25 * Math.sin(now / 400 + s.id); model.rotation.x = 0; const fs = grp.getObjectByName('shadow')!; fs.visible = true; fs.position.y = 0.04;
  }
  for (const [id, v] of shipViews) if (!wanted.has(id)) { dispose(v.grp); shipViews.delete(id); }

  // --- selection and range rings on the plane
  const selNode = ui.sel?.type === 'node' ? g.nodes[ui.sel.id] : null;
  ringIn.visible = ringOut.visible = !!selNode && selNode.owner === PLAYER;
  selRing.visible = !!selNode;
  if (selNode) {
    selRing.position.set(selNode.x, 0.12, selNode.y); selRing.scale.setScalar(nodeR(selNode) * 2.05);
    if (ringIn.visible) { const [ri, ro] = radii(g, selNode); ringIn.position.set(selNode.x, 0.1, selNode.y); ringIn.scale.setScalar(ri); ringOut.position.set(selNode.x, 0.1, selNode.y); ringOut.scale.setScalar(ro); }
  }
  renderer!.render(scene, camera);

  // --- overlay: trails, flags, names, tags
  ctx.clearRect(0, 0, w, h);
  ctx.lineCap = 'round';
  for (const { s } of flying) {
    const to = g.nodes[s.to], a = toScreen(s.x, s.y), b = toScreen(to.x, to.y), col = s.owner === 0 ? '#d9d9d9' : sideColor(g, s.owner);
    ctx.strokeStyle = hexA(col, 0.8); ctx.lineWidth = 2.5; ctx.setLineDash([0.1, 9]); ctx.lineDashOffset = -now / 50;
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); ctx.setLineDash([]);
  }
  if (ui.targeting && ui.from >= 0 && ui.hover >= 0 && ui.hover !== ui.from) {
    const a = toScreen(g.nodes[ui.from].x, g.nodes[ui.from].y), b = toScreen(g.nodes[ui.hover].x, g.nodes[ui.hover].y);
    ctx.strokeStyle = PAPER; ctx.lineWidth = 3; ctx.setLineDash([0.1, 9]); ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); ctx.setLineDash([]);
  }
  const cmd = g.specs[g.cmdSpec];
  const order = g.nodes.filter(n => known(g, n).tier !== 'hidden').sort((a, b) => a.y - b.y);
  for (const n of order) {
    const k = known(g, n), top = toScreen(n.x, n.y, bodyTop(n));
    if (top.x < -80 || top.y < -40 || top.x > w + 80 || top.y > h + 140) continue;
    const gp = toScreen(n.x, n.y), sil = k.tier === 'detected', stale = k.tier === 'stale';
    const col = sil ? UNKNOWN : k.owner === 0 ? NEUTRAL : sideColor(g, k.owner);
    const pr = nodeR(n) * z;
    if (ui.targeting && n.id !== ui.from && (canTarget(g, n) || n.owner === PLAYER)) {
      ctx.strokeStyle = hexA(PAPER, 0.35 + 0.3 * Math.sin(now / 250)); ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.ellipse(gp.x, gp.y, pr * 2.3, pr * 2.3 * TILT, 0, 0, 7); ctx.stroke();
    }
    if (sil) {
      const mid = toScreen(n.x, n.y, bodyMid(n));
      ctx.fillStyle = PAPER; ctx.font = '800 14px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.globalAlpha = 0.8; ctx.fillText('?', mid.x, mid.y); ctx.globalAlpha = 1;
    } else {
      const glyph = n.home ? '⌂ ' : n.citadel ? '✦ ' : n.capital ? '♛ ' : '';
      flag(ctx, top.x, top.y + 2, col, glyph + (stale ? '~' : '') + k.drones, n.home || n.capital || n.citadel, stale, now, n.id);
      let tx = gp.x + pr * 1.7 + 8; const ty = toScreen(n.x, n.y, bodyMid(n)).y;
      const tag = (t: string, bg: string) => { ctx.fillStyle = bg; ctx.beginPath(); ctx.roundRect(tx - 8, ty - 8, 16, 16, 4); ctx.fill(); ctx.fillStyle = INK; ctx.font = '800 11px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(t, tx, ty + 0.5); tx += 19; };
      if (n.event) tag('!', '#e8bd55');
      if (n.offer && n.owner !== PLAYER) tag('☺', '#e9a9c9');
      if (n.hold) tag('◷', '#a9dcec');
      if (n.owner === PLAYER && n.prisoners.length) tag('⛓', '#e6a183');
      if (cmd && cmd.held && cmd.node === n.id) tag('★', '#e2604e');
      // a dashed orbit lane appears whenever ships are circling without a dock
      { const all = parked.get(n.id) || [], ndk = Math.min(n.kind === 'planet' ? 6 : 4, docks(n));
        if (all.length > ndk) { const rr = nodeR(n) * 3.1, hy = bodyMid(n) + nodeR(n) * 0.9; ctx.strokeStyle = hexA(PAPER, 0.45); ctx.lineWidth = 1.5; ctx.setLineDash([4, 6]); ctx.beginPath();
          for (let i = 0; i <= 40; i++) { const a = (i / 40) * Math.PI * 2, q = toScreen(n.x + Math.cos(a) * rr, n.y + Math.sin(a) * rr, hy); ctx[i ? 'lineTo' : 'moveTo'](q.x, q.y); } ctx.stroke(); ctx.setLineDash([]); } }
      // dock occupancy at a glance for your stations
      if (n.owner === PLAYER && n.kind === 'station') {
        const here = (parked.get(n.id) || []).filter(s => s.owner === PLAYER).length, nd = docks(n);
        if (here > nd) { ctx.font = '700 10px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#e8a85a'; ctx.fillText(`${here - nd} IN ORBIT`, gp.x, gp.y + pr * 1.9 * TILT + 26); }
      }
    }
    if (z > 4.5) {
      const ny = gp.y + pr * 1.9 * TILT + 12;
      ctx.font = '700 10px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.lineJoin = 'round';
      ctx.strokeStyle = 'rgba(29,35,53,0.7)'; ctx.lineWidth = 3; ctx.strokeText(n.name.toUpperCase(), gp.x, ny);
      ctx.fillStyle = hexA(PAPER, sil ? 0.45 : 0.85); ctx.fillText(n.name.toUpperCase(), gp.x, ny);
    }
  }
  for (const { s, seen } of flying) {
    const p = toScreen(s.x, s.y, 4.4), col = s.owner === 0 ? '#d9d9d9' : sideColor(g, s.owner);
    if (ui.sel?.type === 'ship' && ui.sel.id === s.id) { const gp = toScreen(s.x, s.y); ctx.strokeStyle = PAPER; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(gp.x, gp.y, 16, 16 * TILT, 0, 0, 7); ctx.stroke(); }
    flag(ctx, p.x, p.y, col, (s.specs.includes(g.cmdSpec) ? '★' : '') + (seen === 2 ? String(s.drones) : '?'), false, false, now, s.id);
  }
}
