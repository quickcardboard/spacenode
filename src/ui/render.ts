import * as THREE from 'three';
import type { Game, GNode, Fleet } from '../sim/types';
import { PLAYER } from '../sim/types';
import { radii, fleetRadii, sideColor, fleetSeen, canTarget, shieldMax, aegis, slotsOf, slotsBusy, activeSpecs, labRunning, goal, nodeMods } from '../sim/core';
import { SPECS } from '../sim/content';
import { isUp } from '../sim/mods';
import { play } from './sound';

// 3D diorama renderer. Low-poly, flat-shaded models stand above a misty plane and are lit by one
// sun; a perspective camera looks down at an angle. A transparent 2D canvas on top carries only
// what must stay crisp at any zoom: flags with garrison counts, names, structure icons, tags and
// flight trails. World (x, y) maps to scene (x, 0, z); scene y is up.

export interface Cam { x: number; y: number; z: number }
export interface RenderUi {
  cam: Cam; w: number; h: number;
  sel: { type: 'node' | 'fleet'; id: number } | null;
  targeting: boolean; from: number; hover: number;
  glow?: Set<number> | null; // nodes to highlight as valid picks
  edgeInfo?: ((id: number) => string) | null; // while aiming: chips at the screen edge for off-screen targets, with this second line
}
/** Screen positions of every visible officer statue, refreshed each frame (for tooltips). */
export const spots: { x: number; y: number; r: number; spec: number }[] = [];
/** Chips at the screen edge pointing at off-screen targets while you aim; drop on one to target that node. */
export const edgeChips: { x: number; y: number; w: number; h: number; node: number }[] = [];
/** The chips under nodes (buildings, effects, shield recharge, intent, sailing), refreshed each frame: tap one for details. */
export const nodeChips: { x: number; y: number; w: number; h: number; node: number; key: string }[] = [];
/** How each lasting effect is drawn under its node. */
const FXD: Record<string, { icon: string; col: string }> = {
  fx_breach: { icon: '⊘', col: '#e2604e' }, fx_shaken: { icon: '≋', col: '#d9a35a' }, fx_cutoff: { icon: '⊣', col: '#b39ad6' },
  fx_grounded: { icon: '⇣', col: '#9aa3ad' }, fx_momentum: { icon: '»', col: '#7fb2dc' }, fx_fort: { icon: '▲', col: '#8fc79a' }, mask: { icon: '◌', col: '#b39ad6' },
};

const PITCH = (52 * Math.PI) / 180, FOV = 30;
export const TILT = Math.sin(PITCH); // ground foreshortening, used by input for panning
export const NEUTRAL = '#8f95a6', UNKNOWN = '#56617c';
const PAPER = '#f1ead9', INK = '#1d2335', HULL = '#e6dcc6', GOLD = '#e8bd55';
export const nodeR = (n: GNode) => (n.citadel ? 5 : n.kind === 'station' ? 3.3 : [2.7, 3.5, 4.5][n.size]);
const bodyTop = (n: GNode, spec = n.spec) => { const r = nodeR(n); return n.kind === 'planet' ? r * 2.5 + (spec ? 3.6 : 0) : n.flagship ? r * 2.2 : r * 0.5 + r * (n.citadel ? 3.4 : 1.5); };
const bodyMid = (n: GNode) => { const r = nodeR(n); return n.kind === 'planet' ? r * 1.5 : r * 0.5 + r * 0.55; };
const STATUE_H = 4.2; // statue height in world units, plinth included

const TERRAIN = [
  ['#d9c7a0', '#b09a74', '#efe2c2'], ['#93a5b3', '#6c7e8e', '#b9c7d0'], ['#93b08c', '#6d8b69', '#b7ceac'],
  ['#cc9379', '#a56e58', '#e3b7a2'], ['#cfdcdf', '#a2b5ba', '#eef5f5'],
];
const BCOL: Record<string, string> = {
  mine: '#a8835a', barracks: '#dd7a63', shield: '#bfe3ff', refinery: '#e3c565', lab: '#7fb2dc', habitat: '#93c98a', silo: '#d98a8a', fortress: '#b9a3d9', bay: '#e3c565', flagship: '#9fe0ff',
};

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
let corridorGrp: THREE.Group | null = null, corridorSig = '';
type NodeView = { sig: string; grp: THREE.Group; spin: THREE.Object3D | null; orb: THREE.Object3D | null; statues: { spec: number; x: number; z: number }[] };
const nodeViews = new Map<number, NodeView>();
const fleetViews = new Map<number, { sig: string; grp: THREE.Group; statues: number[] }>();
const MARGIN = 320, FOG_SCALE = 0.5;
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
const mesh = (geo: THREE.BufferGeometry, mat: THREE.Material, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); return m; };

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
  for (const v of fleetViews.values()) dispose(v.grp);
  nodeViews.clear(); fleetViews.clear();
  if (corridorGrp) { dispose(corridorGrp); corridorGrp = null; corridorSig = ''; }
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
  const softC = document.createElement('canvas'); softC.width = softC.height = 128;
  const sc = softC.getContext('2d')!, sgr = sc.createRadialGradient(64, 64, 0, 64, 64, 64);
  sgr.addColorStop(0, 'rgba(255,255,255,1)'); sgr.addColorStop(0.5, 'rgba(255,255,255,0.45)'); sgr.addColorStop(1, 'rgba(255,255,255,0)');
  sc.fillStyle = sgr; sc.fillRect(0, 0, 128, 128);
  const soft = new THREE.CanvasTexture(softC);
  for (let i = 0; i < 18; i++) { // soft, edgeless colour drifts far below the plane
    const rad = 140 + r() * 260;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(rad * 2, rad * 2), new THREE.MeshBasicMaterial({ map: soft, color: hues[Math.floor(r() * hues.length)], transparent: true, opacity: 0.3, depthWrite: false }));
    m.rotation.x = -Math.PI / 2; m.position.set(r() * (g.w + 600) - 300, -220 - r() * 200, r() * (g.h + 600) - 300);
    m.userData.world = true; scene.add(m);
  }
  fogCanvas = document.createElement('canvas');
  fogCanvas.width = Math.round((g.w + MARGIN * 2) * FOG_SCALE); fogCanvas.height = Math.round((g.h + MARGIN * 2) * FOG_SCALE);
  fogTex = new THREE.CanvasTexture(fogCanvas);
  fogTex.colorSpace = THREE.SRGBColorSpace;
  ground = new THREE.Mesh(new THREE.PlaneGeometry(g.w + MARGIN * 2, g.h + MARGIN * 2), new THREE.MeshBasicMaterial({ map: fogTex, transparent: true, depthWrite: false }));
  ground.rotation.x = -Math.PI / 2; ground.position.set(g.w / 2, -0.2, g.h / 2);
  ground.userData.world = true; ground.renderOrder = -1; scene.add(ground);
  fogT = 0;
}

function hexA(hex: string, a: number) { const n = parseInt(hex.slice(1), 16); return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`; }
function shadeCss(hex: string, k: number) { const n = parseInt(hex.slice(1), 16), f = (v: number) => Math.max(0, Math.min(255, Math.round(v * k))); return `rgb(${f((n >> 16) & 255)},${f((n >> 8) & 255)},${f(n & 255)})`; }
const hash = (a: number, b: number) => { let t = (a * 374761393 + b * 668265263) | 0; t = Math.imul(t ^ (t >>> 13), 1274126177); return ((t ^ (t >>> 16)) >>> 0) / 4294967296; };

/** Vision mist over everything (thinned in detection range, cleared in full-intelligence range),
 *  then each side's territory as drifting coloured fog that flows between neighbouring nodes. */
function paintGround(g: Game, now: number) {
  const c = fogCanvas.getContext('2d')!;
  c.setTransform(FOG_SCALE, 0, 0, FOG_SCALE, MARGIN * FOG_SCALE, MARGIN * FOG_SCALE);
  c.globalCompositeOperation = 'source-over';
  c.clearRect(-MARGIN, -MARGIN, g.w + MARGIN * 2, g.h + MARGIN * 2);
  c.fillStyle = 'rgba(86,97,128,0.8)'; c.fillRect(-MARGIN, -MARGIN, g.w + MARGIN * 2, g.h + MARGIN * 2);
  c.globalCompositeOperation = 'destination-out';
  const eyes: { x: number; y: number; r: [number, number] }[] = g.nodes.filter(n => n.owner === PLAYER).map(n => ({ x: n.x, y: n.y, r: radii(g, n) }));
  for (const f of g.fleets) if (f.owner === PLAYER && !f.lane && !f.missile) eyes.push({ x: f.x, y: f.y, r: fleetRadii(g, f) });
  for (const e of eyes) {
    const [ri, ro] = e.r;
    let gr = c.createRadialGradient(e.x, e.y, ro * 0.8, e.x, e.y, ro);
    gr.addColorStop(0, 'rgba(0,0,0,0.5)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = gr; c.beginPath(); c.arc(e.x, e.y, ro, 0, 7); c.fill();
    gr = c.createRadialGradient(e.x, e.y, ri * 0.82, e.x, e.y, ri);
    gr.addColorStop(0, 'rgba(0,0,0,1)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = gr; c.beginPath(); c.arc(e.x, e.y, ri, 0, 7); c.fill();
  }
  c.globalCompositeOperation = 'source-over';
  const owned = g.nodes.map(n => ({ n, k: known(g, n) })).filter(o => o.k.tier !== 'hidden' && o.k.tier !== 'detected' && o.k.owner !== 0);
  const puff = (x: number, y: number, rad: number, col: string, a: number) => {
    const gr = c.createRadialGradient(x, y, 0, x, y, rad);
    gr.addColorStop(0, hexA(col, a)); gr.addColorStop(0.55, hexA(col, a * 0.55)); gr.addColorStop(1, hexA(col, 0));
    c.fillStyle = gr; c.beginPath(); c.arc(x, y, rad, 0, 7); c.fill();
  };
  const t = now / 1000;
  for (const { n, k } of owned) {
    const col = sideColor(g, k.owner);
    for (let i = 0; i < 7; i++) { // a clump of wisps that drift slowly around the node
      const a = hash(n.id, i) * Math.PI * 2 + t * 0.05 * (i % 2 ? 1 : -1), d = 6 + hash(i, n.id) * 20;
      puff(n.x + Math.cos(a) * d, n.y + Math.sin(a) * d * 0.8, 16 + hash(n.id + 7, i) * 16, col, 0.13);
    }
  }
  for (let i = 0; i < owned.length; i++) for (let j = i + 1; j < owned.length; j++) { // mist bridges between neighbours of one side
    const A = owned[i], B = owned[j];
    if (A.k.owner !== B.k.owner) continue;
    const dx = B.n.x - A.n.x, dy = B.n.y - A.n.y, d = Math.hypot(dx, dy);
    if (d > 115) continue;
    const col = sideColor(g, A.k.owner), steps = Math.floor(d / 16);
    for (let s = 1; s < steps; s++) { const f = s / steps, wob = Math.sin(t * 0.3 + s + A.n.id) * 4; puff(A.n.x + dx * f - (dy / d) * wob, A.n.y + dy * f + (dx / d) * wob, 15, col, 0.07); }
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

/** One recognisable model per building, about 2 world units tall. */
function building(id: string, fade: number, lit = false): THREE.Group {
  const b = new THREE.Group(), col = BCOL[id] || '#999', dark = '#4b5063';
  if (id === 'mine') { b.add(mesh(new THREE.BoxGeometry(1, 0.4, 1), lam('#6f6355', fade), 0, 0.2), mesh(new THREE.ConeGeometry(0.55, 2.1, 4), lam(col, fade), 0, 1.4), mesh(new THREE.BoxGeometry(0.2, 0.2, 1.4), lam(dark, fade), 0, 2.2)); }
  else if (id === 'refinery') { b.add(mesh(new THREE.CylinderGeometry(0.8, 0.9, 1.5, 6), lam(col, fade), 0, 0.75), mesh(new THREE.CylinderGeometry(0.28, 0.28, 1.4, 6), lam(dark, fade), 0.3, 2.1), mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.9, 6), lam(dark, fade), -0.35, 1.9)); }
  else if (id === 'lab') {
    b.add(mesh(new THREE.CylinderGeometry(0.6, 0.7, 2.2, 6), lam(col, fade), 0, 1.1), mesh(new THREE.SphereGeometry(0.7, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2), lam(PAPER, fade), 0, 2.2));
    if (lit) { const o = mesh(new THREE.OctahedronGeometry(0.45), flat('#9fe0ff'), 0, 3.3); o.name = 'orb'; b.add(o); }
  }
  else if (id === 'habitat') { // stacked domes and a garden ring
    b.add(mesh(new THREE.CylinderGeometry(1.2, 1.3, 0.35, 8), lam('#6f8f68', fade), 0, 0.17));
    b.add(mesh(new THREE.SphereGeometry(0.9, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), lam(PAPER, fade), 0, 0.35));
    b.add(mesh(new THREE.SphereGeometry(0.5, 8, 5, 0, Math.PI * 2, 0, Math.PI / 2), lam(col, fade), 0.75, 0.35, 0.5), mesh(new THREE.SphereGeometry(0.45, 8, 5, 0, Math.PI * 2, 0, Math.PI / 2), lam(col, fade), -0.7, 0.35, -0.45));
    b.add(mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.4, 4), lam(dark, fade), 0, 1.5));
  }
  else if (id === 'unused1') { b.add(mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.5, 8), lam(col, fade), 0, 0.25), mesh(new THREE.SphereGeometry(0.95, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2), lam(PAPER, fade), 0, 0.5), mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), lam(col, fade), 1.3, 0.25)); }
  else if (id === 'barracks') { b.add(mesh(new THREE.BoxGeometry(1.5, 0.9, 1.0), lam(col, fade), 0, 0.45), mesh(new THREE.ConeGeometry(0.72, 0.6, 4), lam('#b05a47', fade), 0, 1.2)); (b.children[1] as THREE.Mesh).rotation.y = Math.PI / 4; }
  else if (id === 'silo') { b.add(mesh(new THREE.CylinderGeometry(0.75, 0.85, 1.6, 8), lam('#6d7385', fade), 0, 0.8)); if (lit) b.add(mesh(new THREE.CylinderGeometry(0.32, 0.32, 1.6, 6), lam(PAPER, fade), 0, 2.2), mesh(new THREE.ConeGeometry(0.34, 0.8, 6), lam('#d2604a', fade), 0, 3.4)); else b.add(mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.15, 8), lam(dark, fade), 0, 1.65)); }
  else if (id === 'unused2') { for (const [x, y, z] of [[-0.55, 0.4, 0], [0.55, 0.4, 0], [0, 1.2, 0], [0, 0.4, 0.9]]) b.add(mesh(new THREE.BoxGeometry(0.95, 0.8, 0.8), lam(col, fade), x, y, z)); }
  else if (id === 'bay') { for (const x of [-0.9, 0.9]) b.add(mesh(new THREE.BoxGeometry(0.22, 2.2, 0.22), lam(col, fade), x, 1.1)); b.add(mesh(new THREE.BoxGeometry(2.1, 0.24, 0.32), lam(col, fade), 0, 2.2), mesh(new THREE.BoxGeometry(1.4, 0.1, 1.4), lam(dark, fade), 0, 0.05)); }
  return b;
}

/** Where launch slot i sits: on a dock arm for a station, on the ground beside a planet. */
const DOCK_ANGLES = [150, 30, 210, -30].map(d => (d * Math.PI) / 180);
function padPos(n: GNode, i: number): { x: number; y: number; z: number; a: number } {
  const r = nodeR(n);
  if (n.spec === 'bay' && !n.flagship && !n.citadel) return { x: -r * 1.2 + i * r * 0.85, y: r * 1.25, z: r * 0.15, a: 0 }; // on the carrier deck
  if (n.flagship) return { x: -r * 1.2 + (i >> 1) * r * 1.2, y: r * 0.8, z: (i % 2 ? 1 : -1) * r * 1.6, a: 0 }; // escorts flying in formation
  if (n.kind === 'planet') { const a = Math.PI * (0.9 + 0.16 * i); return { x: Math.cos(a) * (r * 2.0 + 2.4), y: 0.75, z: Math.sin(a) * (r * 2.0 + 2.4), a }; }
  const a = DOCK_ANGLES[i % 4];
  return { x: Math.cos(a) * r * 2.3, y: r * 0.5 + r * 0.55 + 0.6, z: Math.sin(a) * r * 2.3, a };
}

/** A officer statue on a hex plinth. Commanders wear a crown; upgraded officers get a gold base. */
function statue(color: string, cmd: boolean, scale = 1, up = false): THREE.Group {
  const p = new THREE.Group();
  p.add(mesh(new THREE.CylinderGeometry(1.0, 1.1, 0.35, 6), lam(up ? GOLD : '#e6dcc6'), 0, 0.17));
  p.add(mesh(new THREE.ConeGeometry(0.95, 2.3, 7), lam(color), 0, 0.35 + 1.15));
  p.add(mesh(new THREE.CylinderGeometry(0.98, 0.98, 0.18, 7), lam(shadeCss(color, 0.7)), 0, 0.55));
  p.add(mesh(new THREE.IcosahedronGeometry(0.72, 0), lam(color), 0, 0.35 + 2.3 + 0.35));
  if (cmd) { const crown = mesh(new THREE.CylinderGeometry(0.55, 0.42, 0.45, 5, 1, true), lam(GOLD), 0, 0.35 + 2.3 + 1.05); (crown.material as THREE.Material).side = THREE.DoubleSide; p.add(crown); }
  p.scale.setScalar(scale);
  return p;
}

function shipModel(color: string, crew: { c: string; cmd: boolean }[], scale = 1.9): THREE.Group {
  // points along +x: tapered hull, swept wing, coloured tail fin, crew standing on deck
  const m = new THREE.Group();
  const hullM = new THREE.Mesh(new THREE.ConeGeometry(0.55, 2.6, 4), lam(HULL)); hullM.rotation.z = -Math.PI / 2; hullM.scale.set(1, 1, 1.5);
  m.add(hullM, mesh(new THREE.BoxGeometry(0.9, 0.12, 2.6), lam(color), -0.6), mesh(new THREE.BoxGeometry(0.7, 0.7, 0.12), lam(color), -0.9, 0.4));
  crew.forEach((c, i) => { const st = statue(c.c, c.cmd, 0.36); st.position.set(0.1 - i * 0.6, 0.1, i === 0 ? 0 : (i % 2 ? -0.6 : 0.6)); m.add(st); });
  m.scale.setScalar(scale);
  return m;
}

function buildNode(g: Game, n: GNode, tier: string, owner: number, ready: number): { grp: THREE.Group; spin: THREE.Object3D | null; orb: THREE.Object3D | null } {
  const grp = new THREE.Group(), r = nodeR(n), sil = tier === 'detected', fade = tier === 'stale' ? 0.35 : 0;
  const col = sil ? UNKNOWN : owner === 0 ? NEUTRAL : sideColor(g, owner);
  let spin: THREE.Object3D | null = null;
  const blob = new THREE.Mesh(new THREE.CircleGeometry(r * 1.05, 24), flat('#0c101e', 0.4));
  blob.rotation.x = -Math.PI / 2; blob.position.y = 0.02; grp.add(blob);
  if (sil) {
    const m = n.kind === 'planet' ? new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), flat(UNKNOWN, 0.9)) : new THREE.Mesh(new THREE.CylinderGeometry(r, r, r * 1.1, 6), flat(UNKNOWN, 0.9));
    m.position.y = bodyMid(n); grp.add(m);
    return { grp, spin, orb: null };
  }
  if (owner !== 0) grp.add(ring(r * 1.45, r * 1.62, col, 0.06, 0, Math.PI * 2, fade ? 0.5 : 1));
  const total = g.sides[owner] ? slotsOf(g, n) : 0;

  if (n.kind === 'planet') {
    const m = planetMesh(n, r, fade); m.position.y = r * 1.5; grp.add(m); spin = m;
    if (n.size === 2) { const t = new THREE.Mesh(new THREE.TorusGeometry(r * 1.55, r * 0.09, 4, 28), lam(TERRAIN[n.id % 5][2], fade)); t.rotation.x = Math.PI / 2 - 0.3; t.rotation.y = 0.2; t.position.y = r * 1.5; grp.add(t); }
    // one mine rig per mine level along the back; the specialty is one large building at the right
    for (let i = 0; i < n.lv; i++) { const a = -Math.PI / 2 + (i - (n.lv - 1) / 2) * 0.55, rad = r * 1.25 + 1.7; const b = building('mine', fade); b.position.set(Math.cos(a) * rad, 0, Math.sin(a) * rad * 0.9); grp.add(b); }
    if (n.spec) { const b = building(n.spec, fade, n.spec === 'lab' && owner === PLAYER && labRunning(g, n)); b.scale.setScalar(1.7); b.position.set(0, r * 2.5 - 0.35, 0); grp.add(b); } // the specialty stands on top of the world
    for (let i = 0; i < total; i++) { const d = padPos(n, i); grp.add(mesh(new THREE.CylinderGeometry(1.5, 1.5, 0.12, 6), lam(col, fade), d.x, 0.06, d.z)); }
  } else { stationBody(grp, n, r, col, fade, total); spin = grp.getObjectByName('halo') || null; }
  // a ship waits on every free launch slot: no ship on the pad means that fleet is away
  for (let i = total - ready; i < total; i++) {
    const d = padPos(n, i), sm = shipModel(col, [], 1.6);
    sm.position.set(d.x, d.y, d.z); sm.rotation.y = -d.a; grp.add(sm);
  }
  const bub = mesh(new THREE.SphereGeometry(r * (n.kind === 'planet' ? 1.75 : 1.7), 16, 10), new THREE.MeshLambertMaterial({ color: '#bfe3ff', transparent: true, opacity: 0, depthWrite: false, flatShading: true }), 0, n.kind === 'planet' ? r * 1.5 : r * 1.05);
  bub.name = 'bubble'; bub.renderOrder = 2; grp.add(bub);
  return { grp, spin, orb: grp.getObjectByName('orb') || null };
}

/** A station's model says what it is for: a carrier deck, a missile silo, a fortress, the Flagship. */
function stationBody(grp: THREE.Group, n: GNode, r: number, col: string, fade: number, total: number) {
  const base = r * 0.5, hh = r * 1.1, roofY = base + hh;
  const arms = (y: number, rad = r * 0.9) => { // a dock arm and pad per launch slot
    for (let i = 0; i < Math.min(4, total); i++) {
      const a = DOCK_ANGLES[i], len = r * 1.3;
      const arm = mesh(new THREE.BoxGeometry(len, r * 0.14, r * 0.3), lam('#b8ad96', fade), Math.cos(a) * (rad + len / 2), y, Math.sin(a) * (rad + len / 2)); arm.rotation.y = -a; grp.add(arm);
      grp.add(mesh(new THREE.CylinderGeometry(r * 0.5, r * 0.5, r * 0.1, 6), lam(col, fade), Math.cos(a) * r * 2.3, y + r * 0.05, Math.sin(a) * r * 2.3));
    }
  };
  const barracks = (y: number, z: number) => { for (let i = 0; i < n.lv; i++) { const b = building('barracks', fade); b.position.set((i - (n.lv - 1) / 2) * 1.8, y, z); grp.add(b); } };
  if (n.flagship) { // a long hull with a bridge tower and glowing engines, hovering
    const hy = r * 1.1, hull = new THREE.Group();
    const nose = mesh(new THREE.ConeGeometry(r * 0.8, r * 2.4, 4), lam(HULL, fade), r * 2.2, 0); nose.rotation.z = -Math.PI / 2; nose.scale.set(1, 1, 0.55);
    hull.add(nose, mesh(new THREE.BoxGeometry(r * 3.0, r * 0.6, r * 1.6), lam(HULL, fade), -0.3 * r, 0));
    hull.add(mesh(new THREE.BoxGeometry(r * 3.2, r * 0.16, r * 1.7), lam(col, fade), -0.3 * r, r * 0.32));
    hull.add(mesh(new THREE.BoxGeometry(r * 0.8, r * 0.9, r * 0.6), lam('#b8ad96', fade), -r * 1.0, r * 0.75), mesh(new THREE.BoxGeometry(r * 0.9, r * 0.22, r * 0.9), lam(col, fade), -r * 1.0, r * 1.25));
    for (const z of [-0.5, 0, 0.5]) hull.add(mesh(new THREE.CylinderGeometry(r * 0.22, r * 0.28, r * 0.5, 8), lam('#4b5063', fade), -r * 1.95, 0, z * r), mesh(new THREE.SphereGeometry(r * 0.2, 8, 6), flat('#9fe0ff', 0.85), -r * 2.25, 0, z * r));
    for (const z of [-1, 1]) { const w = mesh(new THREE.BoxGeometry(r * 1.4, r * 0.1, r * 0.9), lam(col, fade), -r * 0.6, -r * 0.1, z * r * 1.1); w.rotation.y = z * 0.35; hull.add(w); }
    hull.position.y = hy; hull.scale.setScalar(0.72); hull.name = 'hull'; grp.add(hull);
    return;
  }
  if (n.citadel) {
    grp.add(mesh(new THREE.CylinderGeometry(r, r * 0.92, hh, 6), lam('#57526f', fade), 0, base + hh / 2));
    grp.add(mesh(new THREE.CylinderGeometry(r * 0.92, r * 0.35, r * 0.45, 6), lam('#413d57', fade), 0, base - r * 0.22));
    grp.add(mesh(new THREE.CylinderGeometry(r * 0.5, r * 0.68, r * 0.4, 6), lam(col, fade), 0, roofY + r * 0.2));
    grp.add(mesh(new THREE.ConeGeometry(r * 0.3, r * 1.9, 6), lam(col, fade), 0, roofY + r * 1.35));
    const halo = mesh(new THREE.TorusGeometry(r * 1.6, r * 0.07, 4, 32), lam(col, fade), 0, base + hh * 0.6); halo.rotation.x = Math.PI / 2; halo.name = 'halo'; grp.add(halo);
    arms(base + hh / 2);
    return;
  }
  if (n.spec === 'bay') { // a carrier: a long flight deck with an island and a hangar mouth
    const dy = r * 1.05;
    grp.add(mesh(new THREE.BoxGeometry(r * 3.6, r * 0.45, r * 1.5), lam(HULL, fade), 0, dy));
    grp.add(mesh(new THREE.BoxGeometry(r * 3.4, r * 0.5, r * 1.1), lam('#b8ad96', fade), 0, dy - r * 0.45));
    grp.add(mesh(new THREE.BoxGeometry(r * 3.7, r * 0.06, r * 0.18), lam(col, fade), 0, dy + r * 0.25, -r * 0.62), mesh(new THREE.BoxGeometry(r * 3.7, r * 0.06, r * 0.18), lam(col, fade), 0, dy + r * 0.25, r * 0.62));
    for (let i = 0; i < 6; i++) grp.add(mesh(new THREE.BoxGeometry(r * 0.12, r * 0.08, r * 0.12), flat('#ffe9a8'), -r * 1.6 + i * r * 0.64, dy + r * 0.26, 0));
    grp.add(mesh(new THREE.BoxGeometry(r * 0.7, r * 1.0, r * 0.4), lam(col, fade), r * 0.9, dy + r * 0.7, -r * 0.55), mesh(new THREE.BoxGeometry(r * 0.5, r * 0.3, r * 0.5), lam(PAPER, fade), r * 0.9, dy + r * 1.3, -r * 0.55));
    const arch = mesh(new THREE.TorusGeometry(r * 0.55, r * 0.12, 4, 12, Math.PI), lam(col, fade), -r * 1.85, dy - r * 0.2); arch.rotation.y = Math.PI / 2; grp.add(arch);
    barracks(dy - r * 0.6, -r * 1.1);
    return;
  }
  if (n.spec === 'silo') { // an armoured drum with three launch tubes on top
    const sh = r * 0.9;
    grp.add(mesh(new THREE.CylinderGeometry(r * 1.15, r * 1.25, sh, 8), lam('#6d7385', fade), 0, base + sh / 2));
    grp.add(mesh(new THREE.CylinderGeometry(r * 1.27, r * 1.27, r * 0.16, 8), lam(col, fade), 0, base + sh * 0.65));
    grp.add(mesh(new THREE.CylinderGeometry(r * 1.0, r * 0.4, r * 0.45, 8), lam('#4b5063', fade), 0, base - r * 0.22));
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2, x = Math.cos(a) * r * 0.55, z = Math.sin(a) * r * 0.55, top = base + sh;
      grp.add(mesh(new THREE.CylinderGeometry(r * 0.28, r * 0.3, r * 0.7, 8), lam('#4b5063', fade), x, top + r * 0.35, z));
      if (n.missile > 0) grp.add(mesh(new THREE.ConeGeometry(r * 0.22, r * 0.6, 8), lam('#d2604a', fade), x, top + r * 0.95, z));
      else grp.add(mesh(new THREE.CylinderGeometry(r * 0.3, r * 0.3, r * 0.05, 8), lam('#2f3446', fade), x, top + r * 0.72, z));
    }
    arms(base + sh / 2, r * 1.1);
    barracks(base + sh * 0.25, -r * 1.35);
    return;
  }
  if (n.spec === 'fortress') { // a ring wall with turrets around a tall keep
    const wh = r * 0.8;
    grp.add(mesh(new THREE.CylinderGeometry(r * 1.45, r * 1.55, wh, 10), lam('#8e86a3', fade), 0, base + wh / 2));
    grp.add(mesh(new THREE.CylinderGeometry(r * 1.2, r * 0.5, r * 0.5, 10), lam('#5e5873', fade), 0, base - r * 0.25));
    for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2; grp.add(mesh(new THREE.BoxGeometry(r * 0.4, r * 0.3, r * 0.3), lam('#a69fb8', fade), Math.cos(a) * r * 1.4, base + wh + r * 0.15, Math.sin(a) * r * 1.4)); }
    grp.add(mesh(new THREE.CylinderGeometry(r * 0.6, r * 0.7, r * 1.9, 6), lam(HULL, fade), 0, base + r * 0.95), mesh(new THREE.ConeGeometry(r * 0.75, r * 0.7, 6), lam(col, fade), 0, base + r * 2.25));
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + Math.PI / 4, x = Math.cos(a) * r * 1.5, z = Math.sin(a) * r * 1.5;
      grp.add(mesh(new THREE.CylinderGeometry(r * 0.32, r * 0.36, r * 0.4, 8), lam(col, fade), x, base + wh + r * 0.3, z));
      const gun = mesh(new THREE.BoxGeometry(r * 0.6, r * 0.1, r * 0.1), lam('#4b5063', fade), x + Math.cos(a) * r * 0.35, base + wh + r * 0.4, z + Math.sin(a) * r * 0.35); gun.rotation.y = -a; grp.add(gun);
    }
    arms(base + wh / 2, r * 1.4);
    return;
  }
  // a plain station: a hex tower with dock arms, barracks blocks hanging off the back
  grp.add(mesh(new THREE.CylinderGeometry(r, r * 0.92, hh, 6), lam(HULL, fade), 0, base + hh / 2));
  grp.add(mesh(new THREE.CylinderGeometry(r * 0.92, r * 0.35, r * 0.45, 6), lam('#b8ad96', fade), 0, base - r * 0.22));
  grp.add(mesh(new THREE.CylinderGeometry(r * 0.5, r * 0.68, r * 0.4, 6), lam(col, fade), 0, roofY + r * 0.2));
  if (n.home || n.capital) grp.add(mesh(new THREE.CylinderGeometry(r * 0.07, r * 0.07, r * 0.9, 4), lam(PAPER, fade), 0, roofY + r * 0.8));
  arms(base + hh / 2);
  barracks(base + hh * 0.3, -r * 1.2);
}

function fleetMesh(g: Game, f: Fleet, crewIds: number[]): THREE.Group {
  const s = new THREE.Group(), color = f.owner === 0 ? '#d9d9d9' : sideColor(g, f.owner);
  let m: THREE.Group;
  if (f.missile) { m = new THREE.Group(); const body = mesh(new THREE.CylinderGeometry(0.3, 0.3, 2.2, 6), lam(PAPER)); body.rotation.z = Math.PI / 2; const tip = mesh(new THREE.ConeGeometry(0.34, 0.9, 6), lam('#d2604a'), 1.5); tip.rotation.z = -Math.PI / 2; m.add(body, tip, mesh(new THREE.OctahedronGeometry(0.5), flat('#ffb07a', 0.8), -1.3)); m.scale.setScalar(1.4); }
  else if (f.lane) { m = new THREE.Group(); m.add(mesh(new THREE.OctahedronGeometry(0.9), flat(color)), mesh(new THREE.OctahedronGeometry(1.4), flat(color, 0.3))); }
  else m = shipModel(color, crewIds.map(i => ({ c: i === g.cmdSpec ? GOLD : SPECS[g.specs[i].def].color, cmd: i === g.cmdSpec })), f.probe ? 1.1 : 1.9);
  m.name = 'model';
  const blob = new THREE.Mesh(new THREE.CircleGeometry(1.6, 12), flat('#0c101e', 0.35)); blob.rotation.x = -Math.PI / 2; blob.name = 'shadow';
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

/** Small vector icon, centred on (x, y), about 12 px across. */
function icon(c: CanvasRenderingContext2D, id: string, x: number, y: number) {
  c.save(); c.translate(x, y); c.fillStyle = INK; c.strokeStyle = INK; c.lineWidth = 1.6; c.lineJoin = 'round'; c.lineCap = 'round';
  c.beginPath();
  switch (id) {
    case 'mine': c.moveTo(-6, 5); c.lineTo(-1, -5); c.lineTo(2, 0); c.lineTo(4, -2); c.lineTo(7, 5); c.closePath(); c.fill(); break;
    case 'barracks': c.moveTo(-5, 0); c.lineTo(0, -4); c.lineTo(5, 0); c.moveTo(-5, 5); c.lineTo(0, 1); c.lineTo(5, 5); c.stroke(); break;
    case 'shield': c.moveTo(0, -6); c.lineTo(5, -4); c.lineTo(4, 2); c.lineTo(0, 6); c.lineTo(-4, 2); c.lineTo(-5, -4); c.closePath(); c.fill(); break;
    case 'refinery': c.moveTo(1, -6); c.lineTo(-4, 1); c.lineTo(0, 1); c.lineTo(-1, 6); c.lineTo(4, -1); c.lineTo(0, -1); c.closePath(); c.fill(); break;
    case 'lab': c.moveTo(-2, -6); c.lineTo(2, -6); c.moveTo(-1.5, -6); c.lineTo(-1.5, -1); c.lineTo(-5, 5); c.lineTo(5, 5); c.lineTo(1.5, -1); c.lineTo(1.5, -6); c.stroke(); c.beginPath(); c.moveTo(-3.5, 2.5); c.lineTo(3.5, 2.5); c.lineTo(5, 5); c.lineTo(-5, 5); c.fill(); break;
    case 'habitat': c.arc(0, 3, 6, Math.PI, 0); c.closePath(); c.fill(); c.beginPath(); c.moveTo(-1, 3); c.lineTo(-1, -1); c.lineTo(1, -1); c.lineTo(1, 3); c.fillStyle = BCOL.habitat; c.fill(); break;
    case 'silo': c.moveTo(0, -7); c.lineTo(3, -2); c.lineTo(3, 4); c.lineTo(5, 6); c.lineTo(-5, 6); c.lineTo(-3, 4); c.lineTo(-3, -2); c.closePath(); c.fill(); break;
    case 'fortress': c.moveTo(-6, 6); c.lineTo(-6, -5); c.lineTo(-3, -5); c.lineTo(-3, -2); c.lineTo(-1, -2); c.lineTo(-1, -5); c.lineTo(1, -5); c.lineTo(1, -2); c.lineTo(3, -2); c.lineTo(3, -5); c.lineTo(6, -5); c.lineTo(6, 6); c.closePath(); c.fill(); break;
    case 'flagship': c.moveTo(7, 0); c.lineTo(-3, -5); c.lineTo(-6, -5); c.lineTo(-4, 0); c.lineTo(-6, 5); c.lineTo(-3, 5); c.closePath(); c.fill(); break;
    case 'bay': c.moveTo(6, 0); c.lineTo(-4, -5); c.lineTo(-2, 0); c.lineTo(-4, 5); c.closePath(); c.fill(); break;
  }
  c.restore();
}
/** A round chip for a timed effect: an icon, with a ring that drains as it runs out. */
function fxChip(c: CanvasRenderingContext2D, glyph: string, col: string, x: number, y: number, frac: number) {
  const cx = x + 11;
  c.fillStyle = INK; c.beginPath(); c.arc(cx, y, 11, 0, 7); c.fill();
  c.strokeStyle = col; c.lineWidth = 2.5; c.beginPath(); c.arc(cx, y, 9.5, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * Math.max(0, Math.min(1, frac))); c.stroke();
  c.fillStyle = col; c.font = '800 11px system-ui'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(glyph, cx, y + 0.5);
}
/** A chip with an icon and level pips: what this node is, at a glance. */
function chipLv(c: CanvasRenderingContext2D, id: string, lv: number, x: number, y: number, lit = false): number {
  const w = lv > 0 ? 40 : 22;
  c.fillStyle = BCOL[id]; c.beginPath(); c.roundRect(x, y - 10, w, 20, 6); c.fill();
  if (lit) { c.strokeStyle = '#9fe0ff'; c.lineWidth = 2.5; c.beginPath(); c.roundRect(x - 1.5, y - 11.5, w + 3, 23, 7); c.stroke(); }
  icon(c, id, x + 11, y);
  for (let i = 0; i < 3 && lv > 0; i++) { c.fillStyle = i < lv ? INK : 'rgba(29,35,53,0.25)'; c.beginPath(); c.arc(x + 25 + i * 5, y, 2, 0, 7); c.fill(); }
  return w + 4;
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
  if (now - fogT > 350) { fogT = now; paintGround(g, now); }
  spots.length = 0; edgeChips.length = 0; nodeChips.length = 0;

  // --- nodes: rebuild a model only when what the player can see of it changes
  for (const n of g.nodes) {
    const k = known(g, n), v = nodeViews.get(n.id);
    if (k.tier === 'hidden') { if (v) { dispose(v.grp); nodeViews.delete(n.id); } continue; }
    const live = k.tier === 'live', snap = g.intel[n.id].snap;
    const view = (live || !snap ? n : { ...n, ...snap }) as GNode;
    const ready = live && g.sides[n.owner] ? Math.max(0, slotsOf(g, n) - slotsBusy(g, n)) : 0;
    const head = n.queue[0], taskQ = n.owner === PLAYER && head ? Math.round((1 - head.left / head.total) * 24) : -1;
    const specs = k.tier === 'detected' ? [] : g.sides[view.owner] ? activeSpecs(g, view) : [];
    const lit = n.owner === PLAYER && n.spec === 'lab' && labRunning(g, n);
    const sig = [k.tier, k.owner, view.lv, view.sh, view.spec, view.missile, ready, taskQ, specs.map(i => `${i}:${isUp(g.specs[i]) ? 1 : 0}`).join('.'), lit, g.sides[view.owner] ? slotsOf(g, view) : 0].join('|');
    if (v && v.sig === sig) continue;
    if (v) dispose(v.grp);
    const built = buildNode(g, view, k.tier, k.owner, ready), r = nodeR(n);
    if (taskQ >= 0) built.grp.add(ring(r * 1.74, r * 1.9, GOLD, 0.08, Math.PI / 2, Math.max(0.05, (taskQ / 24) * Math.PI * 2)));
    const statues: NodeView['statues'] = [], gap = 2.5, shown = specs.slice(0, 10), row = Math.min(5, shown.length);
    shown.forEach((id, i) => { // up to two rows of five in front of the node
      const sp = g.specs[id], j = i % 5, inRow = i < 5 ? row : shown.length - 5;
      const x = (j - (inRow - 1) / 2) * gap, zz = r * 1.55 + 1.6 + (j % 2) * 0.4 + (i >= 5 ? 2.6 : 0);
      const st = statue(id === g.cmdSpec ? GOLD : SPECS[sp.def].color, id === g.cmdSpec, 1, isUp(sp)); st.position.set(x, 0, zz); built.grp.add(st);
      statues.push({ spec: id, x, z: zz });
    });
    built.grp.position.set(n.x, 0, n.y);
    scene.add(built.grp);
    nodeViews.set(n.id, { sig, ...built, statues });
  }
  const engaged = new Map<number, number>(); // node id -> fleets fighting at it
  for (const f of g.fleets) if (f.fight !== undefined) engaged.set(f.to, (engaged.get(f.to) || 0) + 1);
  for (const [id, v] of nodeViews) {
    const nn = g.nodes[id];
    v.grp.position.set(nn.x, 0, nn.y); // the Flagship moves
    if (nn.flagship) { const hull = v.grp.getObjectByName('hull'); if (hull) { if (nn.dest) hull.rotation.y = -Math.atan2(nn.dest.y - nn.y, nn.dest.x - nn.x); hull.position.y = nodeR(nn) * 1.1 + 0.3 * Math.sin(now / 600); } }
    if (v.spin) v.spin.rotation.y = now / 6000;
    if (v.orb) { v.orb.rotation.y = now / 400; v.orb.position.y = 3.3 + 0.2 * Math.sin(now / 300); }
    const n = g.nodes[id];
    const bub = v.grp.getObjectByName('bubble') as THREE.Mesh | undefined;
    if (bub) {
      const sh = known(g, n).tier === 'live' ? n.shields + aegis(g, n) : 0, mx = Math.max(1, shieldMax(g, n) + aegis(g, n));
      const hit = engaged.has(id) && sh > 0.5 ? 0.18 + 0.14 * Math.abs(Math.sin(now / 70 + id)) : 0; // shields flare under fire
      (bub.material as THREE.MeshLambertMaterial).opacity = sh > 0.5 ? 0.06 + 0.2 * Math.min(1, sh / mx) + hit : 0; bub.visible = sh > 0.5;
    }
    for (const st of v.statues) { const p = toScreen(n.x + st.x, n.y + st.z, STATUE_H * 0.65); spots.push({ x: p.x, y: p.y, r: Math.max(12, z * 1.6), spec: st.spec }); }
  }

  // --- corridors: glowing tubes between linked nodes
  const csig = g.corridors.map(c => `${c.a}-${c.b}-${c.owner}`).join(',');
  if (csig !== corridorSig) {
    if (corridorGrp) dispose(corridorGrp);
    corridorGrp = new THREE.Group(); corridorSig = csig;
    for (const c of g.corridors) {
      const a = g.nodes[c.a], b = g.nodes[c.b], col = sideColor(g, c.owner), len = Math.hypot(b.x - a.x, b.y - a.y);
      const tube = new THREE.Group();
      tube.add(mesh(new THREE.CylinderGeometry(0.35, 0.35, len, 6, 1, true), flat(col, 0.95)), mesh(new THREE.CylinderGeometry(0.9, 0.9, len, 8, 1, true), flat(col, 0.18)));
      tube.position.set((a.x + b.x) / 2, 0.8, (a.y + b.y) / 2);
      tube.rotation.set(0, -Math.atan2(b.y - a.y, b.x - a.x), Math.PI / 2, 'YXZ');
      corridorGrp.add(tube);
    }
    scene.add(corridorGrp);
  }

  // --- everything in flight
  const wanted = new Set<number>(), flying: { f: Fleet; seen: number }[] = [];
  for (const f of g.fleets) {
    const seen = fleetSeen(g, f);
    if (!seen) continue;
    flying.push({ f, seen });
    wanted.add(f.id);
    const crewIds = seen === 2 ? f.specs : [];
    const sig = `${f.owner}|${f.lane ? 1 : 0}|${f.missile ? 1 : 0}|${crewIds.join('.')}`;
    let v = fleetViews.get(f.id);
    if (!v || v.sig !== sig) { if (v) dispose(v.grp); v = { sig, grp: fleetMesh(g, f, crewIds), statues: crewIds.slice() }; scene.add(v.grp); fleetViews.set(f.id, v); }
    const to = goal(g, f), model = v.grp.getObjectByName('model')!, sh = v.grp.getObjectByName('shadow')!;
    v.grp.position.set(f.x, 0, f.y); v.grp.rotation.y = -Math.atan2(to.y - f.y, to.x - f.x);
    model.position.y = f.lane ? 0.8 : f.missile ? 5 : 3.4 + 0.25 * Math.sin(now / 400 + f.id);
    if (f.lane) model.rotation.y = now / 300;
    sh.visible = !f.lane; sh.position.y = 0.04;
  }
  for (const [id, v] of fleetViews) if (!wanted.has(id)) { dispose(v.grp); fleetViews.delete(id); }

  // --- selection and range rings on the plane
  const selNode = ui.sel?.type === 'node' ? g.nodes[ui.sel.id] : null;
  ringIn.visible = ringOut.visible = !!selNode && selNode.owner === PLAYER;
  selRing.visible = !!selNode;
  if (selNode) {
    selRing.position.set(selNode.x, 0.12, selNode.y); selRing.scale.setScalar(nodeR(selNode) * 2.05);
    if (ringIn.visible) { const [ri, ro] = radii(g, selNode); ringIn.position.set(selNode.x, 0.1, selNode.y); ringIn.scale.setScalar(ri); ringOut.position.set(selNode.x, 0.1, selNode.y); ringOut.scale.setScalar(ro); }
  }
  renderer!.render(scene, camera);

  // --- overlay: trails, corridor works, flags, names, role chips, tags
  ctx.clearRect(0, 0, w, h);
  ctx.lineCap = 'round';
  for (const { f } of flying) {
    if (f.lane) continue;
    const to = goal(g, f), a = toScreen(f.x, f.y), b = toScreen(to.x, to.y), col = f.missile ? '#d2604a' : f.owner === 0 ? '#d9d9d9' : sideColor(g, f.owner);
    ctx.strokeStyle = hexA(col, 0.8); ctx.lineWidth = 2.5; ctx.setLineDash([0.1, 9]); ctx.lineDashOffset = -now / 50;
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); ctx.setLineDash([]);
  }
  for (const n of g.nodes) { // rally flow and corridors under construction
    if (n.owner !== PLAYER) continue;
    for (const t of n.queue.filter(x => x.kind === 'corridor')) {
      const o = g.nodes[+t.id], a = toScreen(n.x, n.y, 0.8), b = toScreen(o.x, o.y, 0.8), f = t === n.queue[0] ? 1 - t.left / t.total : 0;
      ctx.strokeStyle = hexA(PAPER, 0.4); ctx.lineWidth = 2; ctx.setLineDash([4, 6]); ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); ctx.setLineDash([]);
      ctx.strokeStyle = GOLD; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(a.x + (b.x - a.x) * f, a.y + (b.y - a.y) * f); ctx.stroke();
    }
  }
  if (ui.targeting && ui.from >= 0 && ui.hover >= 0 && ui.hover !== ui.from) {
    const a = toScreen(g.nodes[ui.from].x, g.nodes[ui.from].y), b = toScreen(g.nodes[ui.hover].x, g.nodes[ui.hover].y);
    ctx.strokeStyle = PAPER; ctx.lineWidth = 3; ctx.setLineDash([0.1, 9]); ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); ctx.setLineDash([]);
  }
  const cmd = g.specs[g.cmdSpec];
  const order = g.nodes.filter(n => known(g, n).tier !== 'hidden').sort((a, b) => a.y - b.y);
  for (const n of order) {
    const k = known(g, n), top = toScreen(n.x, n.y, bodyTop(n));
    if (top.x < -80 || top.y < -40 || top.x > w + 80 || top.y > h + 160) continue;
    const gp = toScreen(n.x, n.y), sil = k.tier === 'detected', stale = k.tier === 'stale';
    const col = sil ? UNKNOWN : k.owner === 0 ? NEUTRAL : sideColor(g, k.owner);
    const pr = nodeR(n) * z;
    if (ui.targeting && n.id !== ui.from && (ui.glow ? ui.glow.has(n.id) : canTarget(g, n) || n.owner === PLAYER)) {
      const hot = ui.hover === n.id;
      ctx.strokeStyle = hexA(GOLD, hot ? 1 : 0.45 + 0.35 * Math.sin(now / 250)); ctx.lineWidth = hot ? 5 : 3.5; ctx.shadowColor = GOLD; ctx.shadowBlur = hot ? 22 : 12;
      ctx.beginPath(); ctx.ellipse(gp.x, gp.y, pr * 2.3, pr * 2.3 * TILT, 0, 0, 7); ctx.stroke(); ctx.shadowBlur = 0;
    }
    let ny = toScreen(n.x, n.y + nodeR(n) * 1.55 + 3.4).y + 8;
    if (sil) {
      const mid = toScreen(n.x, n.y, bodyMid(n));
      ctx.fillStyle = PAPER; ctx.font = '800 14px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.globalAlpha = 0.8; ctx.fillText('?', mid.x, mid.y); ctx.globalAlpha = 1;
      ny = gp.y + pr * 1.4 * TILT + 10;
    } else {
      const glyph = n.home ? '⌂ ' : n.citadel ? '✦ ' : n.capital ? '♛ ' : '';
      const vspec = k.tier === 'live' ? n.spec : g.intel[n.id].snap?.spec || '';
      const ftop = toScreen(n.x, n.y, bodyTop(n, vspec));
      flag(ctx, ftop.x, ftop.y + 2, col, glyph + (stale ? '~' : '') + k.drones, n.home || n.capital || n.citadel || !!n.flagship, stale, now, n.id);
      const badge = n.flagship ? 'flagship' : vspec; // what the node is for, beside its flag
      if (badge) { ctx.globalAlpha = stale ? 0.65 : 1; ctx.fillStyle = INK; ctx.beginPath(); ctx.arc(ftop.x - 13, ftop.y - 14, 12, 0, 7); ctx.fill(); ctx.fillStyle = BCOL[badge]; ctx.beginPath(); ctx.arc(ftop.x - 13, ftop.y - 14, 10.5, 0, 7); ctx.fill(); icon(ctx, badge, ftop.x - 13, ftop.y - 14); ctx.globalAlpha = 1; }
      let tx = gp.x + pr * 1.7 + 8; const ty = toScreen(n.x, n.y, bodyMid(n)).y;
      const tag = (t: string, bg: string) => { ctx.fillStyle = bg; ctx.beginPath(); ctx.roundRect(tx - 8, ty - 8, 16, 16, 4); ctx.fill(); ctx.fillStyle = INK; ctx.font = '800 11px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(t, tx, ty + 0.5); tx += 19; };
      if (n.owner === PLAYER && n.front) tag('▣', '#e8a85a'); // a Bastion keeps its Drones
      if (n.event) tag('!', GOLD);
      if (n.offer && n.owner !== PLAYER) tag('☺', '#e9a9c9');
      if (n.hold) tag('◷', '#a9dcec');
      if (n.owner === PLAYER && n.prisoners.length) tag('⛓', '#e6a183');
      if (cmd && cmd.held && cmd.node === n.id) tag('★', '#e2604e');
    }
    if (z > 4.5) {
      ctx.font = '700 10px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.lineJoin = 'round';
      ctx.strokeStyle = 'rgba(29,35,53,0.7)'; ctx.lineWidth = 3; ctx.strokeText(n.name.toUpperCase(), gp.x, ny);
      ctx.fillStyle = hexA(PAPER, sil ? 0.45 : 0.85); ctx.fillText(n.name.toUpperCase(), gp.x, ny);
      ny += 17;
    }
    // chips: buildings, then effects with draining rings, shield recharge, intent and sailing; every one can be tapped
    if (!sil && z > 3.2) {
      const v = (k.tier === 'live' ? n : { ...n, ...g.intel[n.id].snap }) as GNode, live = k.tier === 'live';
      const row: { w: number; draw: (x: number) => void; key: string }[] = [];
      const hit = (x: number, w: number, key: string) => nodeChips.push({ x, y: ny - 11, w, h: 22, node: n.id, key });
      if (k.owner !== 0) row.push({ w: 40, key: 'lv', draw: x => chipLv(ctx, n.kind === 'planet' ? 'mine' : 'barracks', v.lv, x, ny) });
      if (v.sh) row.push({ w: 40, key: 'sh', draw: x => chipLv(ctx, 'shield', v.sh, x, ny) });
      if (v.spec && k.owner !== 0) row.push({ w: 22, key: 'spec', draw: x => chipLv(ctx, v.spec, 0, x, ny, (v.spec === 'lab' && n.owner === PLAYER && labRunning(g, n)) || (v.spec === 'silo' && v.missile > 0)) });
      if (live) {
        for (const b of n.buffs) {
          const d = FXD[b.k];
          if (!d || b.until <= g.t) continue;
          const left = (b.until - g.t) / Math.max(1, b.until - (b.from ?? b.until - 60));
          row.push({ w: 22, key: b.k, draw: x => fxChip(ctx, d.icon, d.col, x, ny, Math.min(1, left)) });
        }
        const mx = shieldMax(g, n) + aegis(g, n);
        if (g.sides[n.owner] && n.shields < mx - 0.5 && (n.owner === PLAYER || !nodeMods(g, n).fx_breach)) row.push({ w: 22, key: 'regen', draw: x => fxChip(ctx, n.buffs.some(b => b.k === 'fx_breach' && b.until > g.t) ? '✕' : '↻', '#bfe3ff', x, ny, n.shields / Math.max(1, mx)) });
        if (n.owner !== PLAYER && g.sides[n.owner] && (g.offs.some(o => o.staging === n.id) || n.queue.length || n.missile)) row.push({ w: 22, key: 'intent', draw: x => fxChip(ctx, g.offs.some(o => o.staging === n.id) ? '⚔' : n.missile ? '➹' : '▲', '#e8a85a', x, ny, 1) });
        if (n.flagship) row.push({ w: 22, key: 'sail', draw: x => fxChip(ctx, '⛴', n.dest ? '#9fe0ff' : (n.anchorT || 0) > g.t ? '#e8bd55' : '#cfd6e6', x, ny, (n.sailT || 0) > g.t && !n.dest ? 1 - (n.sailT! - g.t) / 260 : 1) });
      }
      const wTot = row.reduce((t, c) => t + c.w + 4, 0) - 4;
      let x0 = gp.x - wTot / 2;
      ctx.globalAlpha = stale ? 0.65 : 1;
      for (const c of row) { c.draw(x0); hit(x0, c.w, c.key); x0 += c.w + 4; }
      ctx.globalAlpha = 1;
    }
  }
  for (const { f, seen } of flying) {
    if (f.missile) continue;
    const p = toScreen(f.x, f.y, f.lane ? 2.2 : 5.2), col = f.owner === 0 ? '#d9d9d9' : sideColor(g, f.owner);
    if (ui.sel?.type === 'fleet' && ui.sel.id === f.id) { const gp = toScreen(f.x, f.y); ctx.strokeStyle = PAPER; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(gp.x, gp.y, 18, 18 * TILT, 0, 0, 7); ctx.stroke(); }
    if (f.drones > 0 || seen < 2) flag(ctx, p.x, p.y, col, seen === 2 ? String(f.drones) : '?', false, false, now, f.id);
    if (seen === 2) f.specs.forEach((id, i) => { // crew tokens beside the flag
      const cx = p.x - 10 - i * 16, cy = p.y - 12, sc = id === g.cmdSpec ? GOLD : SPECS[g.specs[id].def].color;
      ctx.fillStyle = sc; ctx.beginPath(); ctx.arc(cx, cy, 7.5, 0, 7); ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = INK; ctx.font = '800 8px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(id === g.cmdSpec ? '★' : SPECS[g.specs[id].def].tag, cx, cy + 0.5);
      spots.push({ x: cx, y: cy, r: 10, spec: id });
    });
  }
  drawBattles(ctx, g, now, w, h);
  if (ui.targeting && ui.edgeInfo && ui.glow) drawEdges(ctx, g, ui, w, h);
}

// ------------------------------------------------------------------ battles: beams, flashes and wreckage
const fights = new Map<number, { x: number; y: number; node: number; col: string }>();
const booms: { x: number; y: number; t0: number; col: string; big: boolean }[] = [];
const owners = new Map<number, number>();
const frac = (v: number) => v - Math.floor(v);
function drawBattles(ctx: CanvasRenderingContext2D, g: Game, now: number, w: number, h: number) {
  const live = new Set<number>();
  let loud = false;
  for (const f of g.fleets) {
    if (f.fight === undefined || !fleetSeen(g, f)) continue;
    const n = g.nodes[f.to], seenNode = known(g, n).tier !== 'hidden';
    const a = toScreen(f.x, f.y, 3.4), b = toScreen(n.x, n.y, bodyMid(n));
    const fc = f.owner === 0 ? '#d9d9d9' : sideColor(g, f.owner), nc = n.owner === 0 ? NEUTRAL : sideColor(g, n.owner);
    live.add(f.id); fights.set(f.id, { x: f.x, y: f.y, node: n.id, col: fc });
    const on = a.x > -50 && a.x < w + 50 && a.y > -50 && a.y < h + 50;
    if (!on) continue;
    const r = nodeR(n) * (b.y - toScreen(n.x, n.y, bodyMid(n) + 1).y);
    ctx.save(); ctx.lineCap = 'round'; ctx.globalCompositeOperation = 'lighter';
    const shots = Math.min(7, 3 + Math.floor(f.drones / 8));
    for (let i = 0; i < shots; i++) { // the fleet fires: more Drones, more beams
      const ph = frac(now / 240 + i * (1 / shots) + f.id * 0.13);
      if (ph > 0.55) continue;
      const jx = (hash(f.id, i + Math.floor(now / 260)) - 0.5) * r * 1.2, jy = (hash(i, f.id + Math.floor(now / 260)) - 0.5) * r * 0.8;
      const ox = a.x + (hash(i, f.id) - 0.5) * 16, oy = a.y + (hash(f.id, i) - 0.5) * 8;
      ctx.strokeStyle = hexA(fc, 1 - ph * 1.6); ctx.lineWidth = 4 - ph * 4; ctx.shadowColor = fc; ctx.shadowBlur = 14;
      ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(b.x + jx, b.y + jy); ctx.stroke();
      ctx.strokeStyle = hexA('#ffffff', 0.9 - ph * 1.6); ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(b.x + jx, b.y + jy); ctx.stroke();
      ctx.fillStyle = hexA('#fff4d6', 0.95 - ph * 1.6); ctx.beginPath(); ctx.arc(b.x + jx, b.y + jy, 4 + 9 * ph, 0, 7); ctx.fill();
      ctx.fillStyle = hexA(fc, 0.9 - ph * 1.6); ctx.beginPath(); ctx.arc(ox, oy, 3, 0, 7); ctx.fill();
      loud = true;
    }
    if (seenNode && (g.sides[n.owner] || n.owner === 0)) for (let i = 0; i < 4; i++) { // the node fires back from its guns
      const ph = frac(now / 300 + i * 0.25 + f.id * 0.21 + 0.5);
      if (ph > 0.5) continue;
      const ang = i * 2.1 + f.id, gx = b.x + Math.cos(ang) * r * 0.9, gy = b.y + Math.sin(ang) * r * 0.5;
      const tx = a.x + (hash(i, Math.floor(now / 310)) - 0.5) * 14, ty = a.y + (hash(Math.floor(now / 310), i) - 0.5) * 8;
      ctx.strokeStyle = hexA(nc, 1 - ph * 1.8); ctx.lineWidth = 3.2 - ph * 3; ctx.shadowColor = nc; ctx.shadowBlur = 12;
      ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(tx, ty); ctx.stroke();
      ctx.fillStyle = hexA(nc, 0.9 - ph * 1.6); ctx.beginPath(); ctx.arc(gx, gy, 3.5, 0, 7); ctx.fill();
      ctx.fillStyle = hexA('#ffffff', 0.9 - ph * 1.6); ctx.beginPath(); ctx.arc(tx, ty, 3 + 7 * ph, 0, 7); ctx.fill();
    }
    ctx.restore();
  }
  if (loud) play('laser', 0.8);
  for (const [id, f] of fights) if (!live.has(id)) { fights.delete(id); booms.push({ x: f.x, y: f.y, t0: now, col: f.col, big: false }); play('boom', 0.7); }
  for (const n of g.nodes) { // a node changing hands goes up in a ring of light
    const o = owners.get(n.id);
    if (o !== undefined && o !== n.owner && known(g, n).tier === 'live') booms.push({ x: n.x, y: n.y, t0: now, col: n.owner === 0 ? NEUTRAL : sideColor(g, n.owner), big: true });
    owners.set(n.id, n.owner);
  }
  for (let i = booms.length - 1; i >= 0; i--) {
    const bm = booms[i], t = (now - bm.t0) / (bm.big ? 900 : 650);
    if (t >= 1) { booms.splice(i, 1); continue; }
    const p = toScreen(bm.x, bm.y, bm.big ? 1 : 3.4), k = 1 - t, R0 = (bm.big ? 46 : 20) * (0.3 + t);
    ctx.save(); ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = hexA(bm.col, k); ctx.lineWidth = bm.big ? 4 : 3;
    ctx.beginPath(); ctx.ellipse(p.x, p.y, R0, R0 * (bm.big ? TILT : 0.8), 0, 0, 7); ctx.stroke();
    if (!bm.big) { ctx.fillStyle = hexA('#ffd9a0', k * 0.9); ctx.beginPath(); ctx.arc(p.x, p.y, 10 * k + 2, 0, 7); ctx.fill(); }
    for (let j = 0; j < (bm.big ? 0 : 7); j++) { const a = j * 0.9 + bm.t0, d = R0 * 1.3; ctx.fillStyle = hexA(bm.col, k); ctx.fillRect(p.x + Math.cos(a) * d - 1.5, p.y + Math.sin(a) * d * 0.8 - 1.5, 3, 3); }
    ctx.restore();
  }
}

// ------------------------------------------------------------------ off-screen targets while aiming
function drawEdges(ctx: CanvasRenderingContext2D, g: Game, ui: RenderUi, w: number, h: number) {
  const L = w < 820 ? 66 : 74, T = 64, Rm = 8, B = 10, cw = 124, ch = 38;
  const from = ui.from >= 0 ? g.nodes[ui.from] : null;
  const cands: { n: GNode; p: { x: number; y: number }; d: number }[] = [];
  for (const id of ui.glow!) {
    const n = g.nodes[id];
    if (known(g, n).tier === 'hidden') continue;
    const p = toScreen(n.x, n.y, bodyMid(n));
    if (p.x >= L && p.x <= w - Rm && p.y >= T && p.y <= h - B) continue; // on screen already
    cands.push({ n, p, d: from ? Math.hypot(n.x - from.x, n.y - from.y) : 0 });
  }
  cands.sort((a, b) => a.d - b.d);
  const placed: { x: number; y: number }[] = [], cx = w / 2, cy = h / 2;
  for (const c of cands.slice(0, 9)) {
    const dx = c.p.x - cx, dy = c.p.y - cy;
    const tx = dx > 0 ? (w - Rm - cw / 2 - cx) / dx : dx < 0 ? (L + cw / 2 - cx) / dx : 1e9;
    const ty = dy > 0 ? (h - B - ch / 2 - cy) / dy : dy < 0 ? (T + ch / 2 - cy) / dy : 1e9;
    const t = Math.min(Math.abs(tx), Math.abs(ty));
    let x = cx + dx * t, y = cy + dy * t;
    const vertical = Math.abs(tx) < Math.abs(ty); // pinned to the left or right edge: slide up and down to make room
    for (let k = 0; k < 12 && placed.some(q => Math.abs(q.x - x) < cw + 4 && Math.abs(q.y - y) < ch + 4); k++) {
      const step = (Math.floor(k / 2) + 1) * (k % 2 ? -1 : 1);
      if (vertical) y = cy + dy * t + step * (ch + 6); else x = cx + dx * t + step * (cw + 6);
    }
    x = Math.max(L + cw / 2, Math.min(w - Rm - cw / 2, x)); y = Math.max(T + ch / 2, Math.min(h - B - ch / 2, y));
    placed.push({ x, y });
    const k = known(g, c.n), col = k.tier === 'detected' ? UNKNOWN : k.owner === 0 ? NEUTRAL : sideColor(g, k.owner), hot = ui.hover === c.n.id;
    const x0 = x - cw / 2, y0 = y - ch / 2, ang = Math.atan2(dy, dx);
    ctx.save();
    ctx.shadowColor = hot ? GOLD : 'rgba(0,0,0,0.5)'; ctx.shadowBlur = hot ? 18 : 8;
    ctx.fillStyle = 'rgba(29,35,53,0.94)'; ctx.beginPath(); ctx.roundRect(x0, y0, cw, ch, 10); ctx.fill(); ctx.shadowBlur = 0;
    ctx.strokeStyle = hot ? GOLD : col; ctx.lineWidth = hot ? 3 : 2; ctx.stroke();
    ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x0 + 13, y0 + 13, 5, 0, 7); ctx.fill();
    ctx.translate(x0 + cw - 13, y0 + ch / 2); ctx.rotate(ang); ctx.fillStyle = PAPER; // which way it lies
    ctx.beginPath(); ctx.moveTo(7, 0); ctx.lineTo(-4, -5); ctx.lineTo(-2, 0); ctx.lineTo(-4, 5); ctx.closePath(); ctx.fill();
    ctx.restore();
    ctx.fillStyle = PAPER; ctx.font = '800 11px system-ui'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    const name = c.n.name.length > 13 ? c.n.name.slice(0, 12) + '…' : c.n.name;
    ctx.fillText(name, x0 + 23, y0 + 13);
    ctx.fillStyle = hexA(PAPER, 0.75); ctx.font = '700 10px system-ui';
    ctx.fillText(ui.edgeInfo!(c.n.id), x0 + 9, y0 + 28);
    edgeChips.push({ x: x0, y: y0, w: cw, h: ch, node: c.n.id });
  }
}
