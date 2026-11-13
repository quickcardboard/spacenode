import * as THREE from 'three';
import type { Game, GNode, Ship } from '../sim/types';
import { PLAYER } from '../sim/types';
import { radii, shipRadii, sideColor, shipSeen, canTarget, natMax, docks } from '../sim/core';
import { SPECS, TECHS, TECH_TIME } from '../sim/content';

// 3D diorama renderer. Low-poly, flat-shaded models stand above a misty plane and are lit by one
// sun; a perspective camera looks down at an angle. A transparent 2D canvas on top carries only
// what must stay crisp at any zoom: flags with garrison counts, names, structure icons, tags and
// flight trails. World (x, y) maps to scene (x, 0, z); scene y is up.

export interface Cam { x: number; y: number; z: number }
export interface RenderUi {
  cam: Cam; w: number; h: number;
  sel: { type: 'node' | 'ship'; id: number } | null;
  targeting: boolean; from: number; hover: number;
}
/** Screen positions of every visible specialist statue, refreshed each frame (for tooltips). */
export const spots: { x: number; y: number; r: number; spec: number }[] = [];

const PITCH = (52 * Math.PI) / 180, FOV = 30;
export const TILT = Math.sin(PITCH); // ground foreshortening, used by input for panning
export const NEUTRAL = '#8f95a6', UNKNOWN = '#56617c';
const PAPER = '#f1ead9', INK = '#1d2335', HULL = '#e6dcc6', GOLD = '#e8bd55';
export const nodeR = (n: GNode) => (n.citadel ? 5 : n.kind === 'station' ? 3.3 : [2.7, 3.5, 4.5][n.size]);
const bodyTop = (n: GNode) => { const r = nodeR(n); return n.kind === 'planet' ? r * 2.5 : r * 0.5 + r * (n.citadel ? 3.4 : 1.5); };
const bodyMid = (n: GNode) => { const r = nodeR(n); return n.kind === 'planet' ? r * 1.5 : r * 0.5 + r * 0.55; };
const STATUE_H = 4.2; // statue height in world units, plinth included

const TERRAIN = [
  ['#d9c7a0', '#b09a74', '#efe2c2'], ['#93a5b3', '#6c7e8e', '#b9c7d0'], ['#93b08c', '#6d8b69', '#b7ceac'],
  ['#cc9379', '#a56e58', '#e3b7a2'], ['#cfdcdf', '#a2b5ba', '#eef5f5'],
];
const BCOL: Record<string, string> = {
  gen: '#e3c565', mine: '#a8835a', lab: '#7fb2dc', slab: '#7fb2dc', shield: '#bfe3ff', relay: '#cbb2e6', bastion: '#8d93a6',
  turret: '#6d7385', screen: '#bfe3ff', sensor: '#f1ead9', barracks: '#dd7a63', shipyard: '#e3c565', dock: '#b8ad96',
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
const shipViews = new Map<number, { sig: string; grp: THREE.Group; statues: number[] }>();
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
  for (const v of shipViews.values()) dispose(v.grp);
  nodeViews.clear(); shipViews.clear();
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
  for (const s of g.ships) if (s.owner === PLAYER && !s.lane) eyes.push({ x: s.x, y: s.y, r: shipRadii(g, s) });
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

/** One recognisable building per structure type, about 2 world units tall. */
function building(id: string, fade: number, researching: boolean): THREE.Group {
  const b = new THREE.Group(), col = BCOL[id] || '#999';
  if (id === 'gen') { b.add(mesh(new THREE.CylinderGeometry(0.6, 0.7, 1.2, 6), lam(col, fade), 0, 0.6), mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.6, 6), lam('#4b5063', fade), 0, 1.5), mesh(new THREE.TorusGeometry(0.62, 0.1, 4, 12), lam('#4b5063', fade), 0, 0.9)); (b.children[2] as THREE.Mesh).rotation.x = Math.PI / 2; }
  else if (id === 'mine') { b.add(mesh(new THREE.BoxGeometry(1, 0.4, 1), lam('#6f6355', fade), 0, 0.2), mesh(new THREE.ConeGeometry(0.55, 2.1, 4), lam(col, fade), 0, 1.4), mesh(new THREE.BoxGeometry(0.2, 0.2, 1.4), lam('#4b5063', fade), 0, 2.2)); }
  else if (id === 'lab' || id === 'slab') {
    b.add(mesh(new THREE.CylinderGeometry(0.5, 0.6, 2.0, 6), lam(col, fade), 0, 1.0), mesh(new THREE.SphereGeometry(0.58, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2), lam(PAPER, fade), 0, 2.0));
    if (researching) { const o = mesh(new THREE.OctahedronGeometry(0.42), flat('#9fe0ff'), 0, 3.0); o.name = 'orb'; b.add(o); }
  }
  else if (id === 'shield') { b.add(mesh(new THREE.SphereGeometry(1.0, 10, 5, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshLambertMaterial({ color: col, transparent: true, opacity: 0.75, flatShading: true }))); }
  else if (id === 'relay') { b.add(mesh(new THREE.CylinderGeometry(0.1, 0.16, 2.8, 4), lam(PAPER, fade), 0, 1.4), mesh(new THREE.TorusGeometry(0.5, 0.08, 4, 12), lam(col, fade), 0, 2.4), mesh(new THREE.TorusGeometry(0.32, 0.08, 4, 12), lam(col, fade), 0, 1.8)); }
  else if (id === 'bastion') { b.add(mesh(new THREE.BoxGeometry(1.8, 1.2, 0.9), lam(col, fade), 0, 0.6)); for (let i = -1; i <= 1; i++) b.add(mesh(new THREE.BoxGeometry(0.4, 0.4, 0.9), lam(col, fade), i * 0.7, 1.4)); }
  else if (id === 'barracks') { b.add(mesh(new THREE.BoxGeometry(1.6, 0.9, 1.0), lam(col, fade), 0, 0.45), mesh(new THREE.ConeGeometry(0.75, 0.6, 4), lam(shadeCss(col, 0.75), fade), 0, 1.2)); (b.children[1] as THREE.Mesh).rotation.y = Math.PI / 4; }
  else if (id === 'shipyard') { for (const x of [-0.8, 0.8]) b.add(mesh(new THREE.BoxGeometry(0.2, 2.0, 0.2), lam(col, fade), x, 1.0)); b.add(mesh(new THREE.BoxGeometry(1.9, 0.22, 0.3), lam(col, fade), 0, 2.0)); }
  else if (id === 'sensor') { const d = mesh(new THREE.ConeGeometry(0.7, 0.45, 10, 1, true), lam(col, fade), 0, 1.4); d.rotation.x = Math.PI * 0.8; b.add(mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.2, 4), lam('#4b5063', fade), 0, 0.6), d); }
  return b;
}
const PLANET_ORDER = ['lab', 'gen', 'mine', 'shield', 'relay', 'bastion'];

const DOCK_ANGLES = [150, 30, 210, -30].map(d => (d * Math.PI) / 180);
function dockPos(n: GNode, i: number): { x: number; y: number; z: number; a: number } {
  const r = nodeR(n);
  if (n.kind === 'planet') { const a = Math.PI * (0.92 + 0.13 * Math.ceil(i / 2) * (i % 2 ? 1 : -1)); return { x: Math.cos(a) * (r * 2.1 + 2.2), y: 0.7, z: Math.sin(a) * (r * 2.1 + 2.2), a }; }
  const a = DOCK_ANGLES[i % 4];
  return { x: Math.cos(a) * r * 2.25, y: r * 0.5 + r * 0.55 + 0.55, z: Math.sin(a) * r * 2.25, a };
}

/** A specialist statue on a hex plinth. Commanders wear a crown. */
function statue(color: string, cmd: boolean, scale = 1): THREE.Group {
  const p = new THREE.Group();
  p.add(mesh(new THREE.CylinderGeometry(1.0, 1.1, 0.35, 6), lam('#e6dcc6'), 0, 0.17));
  p.add(mesh(new THREE.ConeGeometry(0.95, 2.3, 7), lam(color), 0, 0.35 + 1.15));
  p.add(mesh(new THREE.CylinderGeometry(0.98, 0.98, 0.18, 7), lam(shadeCss(color, 0.7)), 0, 0.55)); // hem
  p.add(mesh(new THREE.IcosahedronGeometry(0.72, 0), lam(color), 0, 0.35 + 2.3 + 0.35));
  if (cmd) { const crown = mesh(new THREE.CylinderGeometry(0.55, 0.42, 0.45, 5, 1, true), lam(GOLD), 0, 0.35 + 2.3 + 1.05); (crown.material as THREE.Material).side = THREE.DoubleSide; p.add(crown); }
  p.scale.setScalar(scale);
  return p;
}

function buildNode(g: Game, n: GNode, tier: string, owner: number, researching: boolean): { grp: THREE.Group; spin: THREE.Object3D | null; orb: THREE.Object3D | null } {
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

  if (n.kind === 'planet') {
    const m = planetMesh(n, r, fade); m.position.y = r * 1.5; grp.add(m); spin = m;
    if (n.size === 2) { const t = new THREE.Mesh(new THREE.TorusGeometry(r * 1.55, r * 0.09, 4, 28), lam(TERRAIN[n.id % 5][2], fade)); t.rotation.x = Math.PI / 2 - 0.3; t.rotation.y = 0.2; t.position.y = r * 1.5; grp.add(t); }
    // buildings stand on the ground in an arc behind and beside the planet; the front is kept for statues
    const items: string[] = [];
    for (const id of PLANET_ORDER) for (let i = 0; i < Math.min(4, n.b[id] || 0); i++) items.push(id);
    const span = Math.min(Math.PI * 1.3, items.length * 0.5), rad = r * 1.25 + 1.6;
    items.forEach((id, i) => {
      const a = -Math.PI / 2 + (items.length > 1 ? -span / 2 + (span * i) / (items.length - 1) : 0);
      const bld = building(id, fade, researching && id === 'lab'); bld.position.set(Math.cos(a) * rad, 0, Math.sin(a) * rad * 0.9); grp.add(bld);
    });
  } else {
    const base = r * 0.5, hh = r * 1.1;
    const wall = n.citadel ? '#57526f' : HULL;
    grp.add(mesh(new THREE.CylinderGeometry(r, r * 0.92, hh, 6), lam(wall, fade), 0, base + hh / 2));
    grp.add(mesh(new THREE.CylinderGeometry(r * 0.92, r * 0.35, r * 0.45, 6), lam(n.citadel ? '#413d57' : '#b8ad96', fade), 0, base - r * 0.22));
    grp.add(mesh(new THREE.CylinderGeometry(r * 0.5, r * 0.68, r * 0.4, 6), lam(col, fade), 0, base + hh + r * 0.2));
    const roofY = base + hh;
    if (n.citadel) {
      grp.add(mesh(new THREE.ConeGeometry(r * 0.3, r * 1.9, 6), lam(col, fade), 0, roofY + r * 1.35));
      const halo = mesh(new THREE.TorusGeometry(r * 1.6, r * 0.07, 4, 32), lam(col, fade), 0, base + hh * 0.6); halo.rotation.x = Math.PI / 2; grp.add(halo); spin = halo;
    } else if (n.home || n.capital) grp.add(mesh(new THREE.CylinderGeometry(r * 0.07, r * 0.07, r * 0.9, 4), lam(PAPER, fade), 0, roofY + r * 0.8));
    // one arm and landing pad per dock; pads are the only places ships can load and unload
    const nd = Math.min(4, docks(n));
    for (let i = 0; i < nd; i++) {
      const a = DOCK_ANGLES[i], len = r * 1.25;
      const arm = mesh(new THREE.BoxGeometry(len, r * 0.14, r * 0.3), lam('#b8ad96', fade), Math.cos(a) * (r * 0.9 + len / 2), base + hh / 2, Math.sin(a) * (r * 0.9 + len / 2)); arm.rotation.y = -a; grp.add(arm);
      grp.add(mesh(new THREE.CylinderGeometry(r * 0.42, r * 0.42, r * 0.1, 6), lam(col, fade), Math.cos(a) * r * 2.25, base + hh / 2 + r * 0.05, Math.sin(a) * r * 2.25));
    }
    // rooftop: turrets ring the edge; lab and sensor sit on the roof; barracks and yard hang off the back
    for (let i = 0; i < Math.min(3, n.b.turret || 0); i++) {
      const a = Math.PI / 2 + (i - 1) * 1.05, x = Math.cos(a) * r * 0.8, z = Math.sin(a) * r * 0.8;
      grp.add(mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), lam(BCOL.turret, fade), x, roofY + 0.4, z));
      grp.add(mesh(new THREE.BoxGeometry(0.22, 0.22, 1.3), lam('#4b5063', fade), x, roofY + 0.55, z + 0.7));
    }
    if (n.b.slab) { const l = building('slab', fade, researching); l.position.set(-r * 0.35, roofY + r * 0.3, -r * 0.35); l.scale.setScalar(0.9); grp.add(l); }
    if (n.b.sensor) { const s = building('sensor', fade, false); s.position.set(r * 0.4, roofY, -r * 0.4); grp.add(s); }
    if (n.b.barracks) { const b = building('barracks', fade, false); b.position.set(-r * 0.75, base + hh * 0.35, -r * 1.25); grp.add(b); }
    if (n.b.shipyard) { const y = building('shipyard', fade, false); y.position.set(r * 0.8, base + hh * 0.2, -r * 1.3); grp.add(y); }
    if (n.b.screen) { const s = mesh(new THREE.TorusGeometry(r * 1.2, r * 0.07, 4, 24), lam(BCOL.screen, fade), 0, base + hh * 0.2); s.rotation.x = Math.PI / 2; grp.add(s); }
  }
  const orb = grp.getObjectByName('orb') || null;
  return { grp, spin, orb };
}

function shipMesh(color: string, crew: string[], lane: boolean): THREE.Group {
  const s = new THREE.Group(), m = new THREE.Group();
  if (lane) { // a convoy pod gliding along a corridor
    m.add(mesh(new THREE.OctahedronGeometry(0.9), flat(color)), mesh(new THREE.OctahedronGeometry(1.4), flat(color, 0.3)));
  } else { // points along +x: tapered hull, swept wing, coloured tail fin
    const hullM = new THREE.Mesh(new THREE.ConeGeometry(0.55, 2.6, 4), lam(HULL)); hullM.rotation.z = -Math.PI / 2; hullM.scale.set(1, 1, 1.5);
    m.add(hullM, mesh(new THREE.BoxGeometry(0.9, 0.12, 2.6), lam(color), -0.6), mesh(new THREE.BoxGeometry(0.7, 0.7, 0.12), lam(color), -0.9, 0.4));
    crew.forEach((c, i) => { const st = statue(c, c === GOLD, 0.34); st.position.set(-0.2 - i * 0.55, 0.1, (i % 2 ? -1 : 1) * 0.55 * (i ? 1 : 0)); m.add(st); });
    m.scale.setScalar(1.35);
  }
  m.name = 'model';
  const blob = new THREE.Mesh(new THREE.CircleGeometry(1.2, 12), flat('#0c101e', 0.35)); blob.rotation.x = -Math.PI / 2; blob.name = 'shadow';
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

/** Small vector icon for a structure, centred on (x, y), about 12 px across. */
function icon(c: CanvasRenderingContext2D, id: string, x: number, y: number) {
  c.save(); c.translate(x, y); c.fillStyle = INK; c.strokeStyle = INK; c.lineWidth = 1.6; c.lineJoin = 'round'; c.lineCap = 'round';
  c.beginPath();
  switch (id) {
    case 'mine': c.moveTo(-6, 5); c.lineTo(-1, -5); c.lineTo(2, 0); c.lineTo(4, -2); c.lineTo(7, 5); c.closePath(); c.fill(); break;
    case 'gen': c.moveTo(1, -6); c.lineTo(-4, 1); c.lineTo(0, 1); c.lineTo(-1, 6); c.lineTo(4, -1); c.lineTo(0, -1); c.closePath(); c.fill(); break;
    case 'lab': case 'slab': c.moveTo(-2, -6); c.lineTo(2, -6); c.moveTo(-1.5, -6); c.lineTo(-1.5, -1); c.lineTo(-5, 5); c.lineTo(5, 5); c.lineTo(1.5, -1); c.lineTo(1.5, -6); c.stroke(); c.beginPath(); c.moveTo(-3.5, 2.5); c.lineTo(3.5, 2.5); c.lineTo(5, 5); c.lineTo(-5, 5); c.fill(); break;
    case 'shield': case 'screen': c.moveTo(0, -6); c.lineTo(5, -4); c.lineTo(4, 2); c.lineTo(0, 6); c.lineTo(-4, 2); c.lineTo(-5, -4); c.closePath(); id === 'shield' ? c.fill() : c.stroke(); break;
    case 'turret': c.arc(-1, 1, 3.5, 0, 7); c.fill(); c.beginPath(); c.moveTo(1, -1); c.lineTo(6, -5); c.stroke(); break;
    case 'bastion': c.moveTo(-6, 5); c.lineTo(-6, -4); c.lineTo(-3, -4); c.lineTo(-3, -1); c.lineTo(-1, -1); c.lineTo(-1, -4); c.lineTo(1, -4); c.lineTo(1, -1); c.lineTo(3, -1); c.lineTo(3, -4); c.lineTo(6, -4); c.lineTo(6, 5); c.closePath(); c.fill(); break;
    case 'sensor': c.arc(0, -1, 5, Math.PI * 0.15, Math.PI * 0.85); c.stroke(); c.beginPath(); c.moveTo(0, -1); c.lineTo(0, 6); c.stroke(); break;
    case 'relay': c.moveTo(0, 6); c.lineTo(0, -3); c.stroke(); c.beginPath(); c.arc(0, -3, 3, Math.PI * 1.15, Math.PI * 1.85); c.stroke(); c.beginPath(); c.arc(0, -3, 6, Math.PI * 1.2, Math.PI * 1.8); c.stroke(); break;
    case 'barracks': c.moveTo(-5, 0); c.lineTo(0, -4); c.lineTo(5, 0); c.moveTo(-5, 5); c.lineTo(0, 1); c.lineTo(5, 5); c.stroke(); break;
    case 'shipyard': c.moveTo(6, 0); c.lineTo(-4, -5); c.lineTo(-2, 0); c.lineTo(-4, 5); c.closePath(); c.fill(); break;
    case 'dock': c.moveTo(-5, -4); c.lineTo(-5, 4); c.lineTo(5, 4); c.lineTo(5, -4); c.stroke(); break;
  }
  c.restore();
}
const ICON_ORDER = ['lab', 'slab', 'gen', 'mine', 'shield', 'relay', 'bastion', 'turret', 'screen', 'sensor', 'barracks', 'shipyard', 'dock'];

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
  spots.length = 0;

  // --- nodes: rebuild a model only when what the player can see of it changes
  for (const n of g.nodes) {
    const k = known(g, n), v = nodeViews.get(n.id);
    if (k.tier === 'hidden') { if (v) { dispose(v.grp); nodeViews.delete(n.id); } continue; }
    const live = k.tier === 'live', b = live ? n.b : g.intel[n.id].snap?.b || {};
    const natQ = live && n.kind === 'planet' ? Math.round(Math.min(1, n.nat / Math.max(1, n.owner === 0 ? [4, 7, 11][n.size] : natMax(g, n))) * 16) : 0;
    const laneQ = n.owner === PLAYER && n.lane ? Math.round((1 - n.lane.left / n.lane.total) * 24) : -1;
    const specs = k.tier === 'detected' ? [] : live ? n.specs : g.intel[n.id].snap?.specs || [];
    const researching = n.owner === PLAYER && !!n.research;
    const sig = [k.tier, k.owner, JSON.stringify(b), natQ, laneQ, specs.join('.'), researching].join('|');
    if (v && v.sig === sig) continue;
    if (v) dispose(v.grp);
    const view = buildNode(g, live ? n : ({ ...n, b } as GNode), k.tier, k.owner, researching), r = nodeR(n);
    if (natQ > 0) view.grp.add(ring(r * 1.2, r * 1.34, '#bfe3ff', 0.08, Math.PI / 2, (natQ / 16) * Math.PI * 2));
    if (laneQ >= 0) view.grp.add(ring(r * 1.74, r * 1.9, GOLD, 0.08, Math.PI / 2, Math.max(0.05, (laneQ / 24) * Math.PI * 2)));
    // specialists stand as statues in a row in front of the node
    const statues: NodeView['statues'] = [], shown = specs.slice(0, 4), gap = 2.5;
    shown.forEach((id, i) => {
      const sp = g.specs[id], x = (i - (shown.length - 1) / 2) * gap, zz = r * 1.55 + 1.6 + (i % 2) * 0.4;
      const st = statue(id === g.cmdSpec ? GOLD : SPECS[sp.def].color, id === g.cmdSpec); st.position.set(x, 0, zz); view.grp.add(st);
      statues.push({ spec: id, x, z: zz });
    });
    view.grp.position.set(n.x, 0, n.y);
    scene.add(view.grp);
    nodeViews.set(n.id, { sig, ...view, statues });
  }
  for (const [id, v] of nodeViews) {
    if (v.spin) v.spin.rotation.y = now / 6000;
    if (v.orb) { v.orb.rotation.y = now / 400; v.orb.position.y = 3.0 + 0.2 * Math.sin(now / 300); }
    const n = g.nodes[id];
    for (const st of v.statues) { const p = toScreen(n.x + st.x, n.y + st.z, STATUE_H * 0.65); spots.push({ x: p.x, y: p.y, r: Math.max(12, z * 1.6), spec: st.spec }); }
  }

  // --- corridors: glowing tubes between linked nodes
  const csig = g.corridors.map(c => `${c.a}-${c.b}-${c.owner}-${c.until ? 1 : 0}`).join(',');
  if (csig !== corridorSig) {
    if (corridorGrp) dispose(corridorGrp);
    corridorGrp = new THREE.Group(); corridorSig = csig;
    for (const c of g.corridors) {
      const a = g.nodes[c.a], b = g.nodes[c.b], col = sideColor(g, c.owner), len = Math.hypot(b.x - a.x, b.y - a.y);
      const tube = new THREE.Group();
      tube.add(mesh(new THREE.CylinderGeometry(0.35, 0.35, len, 6, 1, true), flat(col, c.until ? 0.55 : 0.95)));
      tube.add(mesh(new THREE.CylinderGeometry(0.9, 0.9, len, 8, 1, true), flat(col, 0.18)));
      tube.position.set((a.x + b.x) / 2, 0.8, (a.y + b.y) / 2);
      tube.rotation.set(0, -Math.atan2(b.y - a.y, b.x - a.x), Math.PI / 2, 'YXZ'); // lay the tube along the line from a to b
      corridorGrp.add(tube);
    }
    scene.add(corridorGrp);
  }

  // --- ships: on a dock pad, circling in orbit, or in flight
  const wanted = new Set<number>(), flying: { s: Ship; seen: number }[] = [];
  const parked = new Map<number, Ship[]>();
  for (const s of g.ships) {
    if (s.at >= 0) { if (known(g, g.nodes[s.at]).tier === 'live') { if (!parked.has(s.at)) parked.set(s.at, []); parked.get(s.at)!.push(s); } }
    else { const seen = shipSeen(g, s); if (seen) flying.push({ s, seen }); }
  }
  const place = (s: Ship, seen: number): THREE.Group => {
    wanted.add(s.id);
    const crewIds = seen === 2 ? s.specs : [];
    const crew = crewIds.map(i => (i === g.cmdSpec ? GOLD : SPECS[g.specs[i].def].color));
    const sig = `${s.owner}|${s.lane ? 1 : 0}|${crewIds.join('.')}`;
    let v = shipViews.get(s.id);
    if (!v || v.sig !== sig) { if (v) dispose(v.grp); v = { sig, grp: shipMesh(s.owner === 0 ? '#d9d9d9' : sideColor(g, s.owner), crew, !!s.lane), statues: crewIds.slice() }; scene.add(v.grp); shipViews.set(s.id, v); }
    return v.grp;
  };
  const crewSpots = (s: Ship, hgt: number) => { const v = shipViews.get(s.id); if (!v) return; v.statues.forEach((id, i) => { const p = toScreen(s.x, s.y, hgt + 1.2); spots.push({ x: p.x - i * 10, y: p.y, r: 12, spec: id }); }); };
  for (const [nid, list] of parked) {
    const n = g.nodes[nid], nd = Math.min(n.kind === 'planet' ? 6 : 4, docks(n)), r = nodeR(n);
    list.sort((a, b) => a.seq - b.seq).slice(0, 8).forEach((s, i) => {
      const grp = place(s, 2), model = grp.getObjectByName('model')!, sh = grp.getObjectByName('shadow')!;
      if (i < nd) { // docked: nose out on its pad; a loading ship lifts off the pad
        const d = dockPos(n, i), lift = s.loadUntil > 0 ? 0.5 + 0.3 * Math.sin(now / 150) : 0;
        grp.position.set(n.x + d.x, 0, n.y + d.z); grp.rotation.y = -d.a;
        model.position.y = d.y + lift; model.rotation.x = 0; sh.visible = n.kind === 'planet'; sh.position.y = 0.04;
        const p = toScreen(n.x + d.x, n.y + d.z, d.y + 1.4);
        (shipViews.get(s.id)?.statues || []).forEach((id, j) => spots.push({ x: p.x - j * 10, y: p.y, r: 12, spec: id }));
      } else { // orbiting: no free dock, cargo stays aboard
        const a = now / 1500 + (i - nd) * 1.6, rad = r * 3.1;
        grp.position.set(n.x + Math.cos(a) * rad, 0, n.y + Math.sin(a) * rad); grp.rotation.y = -(a + Math.PI / 2);
        model.position.y = bodyMid(n) + r * 0.9; model.rotation.x = -0.45; sh.visible = false;
      }
    });
  }
  for (const { s, seen } of flying) {
    const grp = place(s, seen), to = g.nodes[s.to], model = grp.getObjectByName('model')!;
    grp.position.set(s.x, 0, s.y); grp.rotation.y = -Math.atan2(to.y - s.y, to.x - s.x);
    const hgt = s.lane ? 0.8 : 3 + 0.25 * Math.sin(now / 400 + s.id);
    model.position.y = hgt; model.rotation.x = 0; if (s.lane) model.rotation.y = now / 300;
    const fs = grp.getObjectByName('shadow')!; fs.visible = !s.lane; fs.position.y = 0.04;
    crewSpots(s, hgt);
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

  // --- overlay: trails, corridor works, flags, names, icons, tags
  ctx.clearRect(0, 0, w, h);
  ctx.lineCap = 'round';
  for (const { s } of flying) {
    if (s.lane) continue;
    const to = g.nodes[s.to], a = toScreen(s.x, s.y), b = toScreen(to.x, to.y), col = s.owner === 0 ? '#d9d9d9' : sideColor(g, s.owner);
    ctx.strokeStyle = hexA(col, 0.8); ctx.lineWidth = 2.5; ctx.setLineDash([0.1, 9]); ctx.lineDashOffset = -now / 50;
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); ctx.setLineDash([]);
  }
  for (const n of g.nodes) { // corridors under construction: dashed line, solid up to the progress made
    if (n.owner !== PLAYER) continue;
    for (const t of [n.lane, ...n.queue]) {
      if (!t || t.kind !== 'corridor') continue;
      const o = g.nodes[+t.id], a = toScreen(n.x, n.y, 0.8), b = toScreen(o.x, o.y, 0.8), f = t === n.lane ? 1 - t.left / t.total : 0;
      ctx.strokeStyle = hexA(PAPER, 0.4); ctx.lineWidth = 2; ctx.setLineDash([4, 6]); ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); ctx.setLineDash([]);
      if (f > 0) { ctx.strokeStyle = GOLD; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(a.x + (b.x - a.x) * f, a.y + (b.y - a.y) * f); ctx.stroke(); }
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
    if (ui.targeting && n.id !== ui.from && (canTarget(g, n) || n.owner === PLAYER)) {
      ctx.strokeStyle = hexA(PAPER, 0.35 + 0.3 * Math.sin(now / 250)); ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.ellipse(gp.x, gp.y, pr * 2.3, pr * 2.3 * TILT, 0, 0, 7); ctx.stroke();
    }
    let ny = toScreen(n.x, n.y + nodeR(n) * 1.55 + 3.4).y + 8;
    if (sil) {
      const mid = toScreen(n.x, n.y, bodyMid(n));
      ctx.fillStyle = PAPER; ctx.font = '800 14px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.globalAlpha = 0.8; ctx.fillText('?', mid.x, mid.y); ctx.globalAlpha = 1;
      ny = gp.y + pr * 1.4 * TILT + 10;
    } else {
      const glyph = n.home ? '⌂ ' : n.citadel ? '✦ ' : n.capital ? '♛ ' : '';
      flag(ctx, top.x, top.y + 2, col, glyph + (stale ? '~' : '') + k.drones, n.home || n.capital || n.citadel, stale, now, n.id);
      let tx = gp.x + pr * 1.7 + 8; const ty = toScreen(n.x, n.y, bodyMid(n)).y;
      const tag = (t: string, bg: string) => { ctx.fillStyle = bg; ctx.beginPath(); ctx.roundRect(tx - 8, ty - 8, 16, 16, 4); ctx.fill(); ctx.fillStyle = INK; ctx.font = '800 11px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(t, tx, ty + 0.5); tx += 19; };
      if (n.event) tag('!', GOLD);
      if (n.offer && n.owner !== PLAYER) tag('☺', '#e9a9c9');
      if (n.hold) tag('◷', '#a9dcec');
      if (n.owner === PLAYER && n.prisoners.length) tag('⛓', '#e6a183');
      if (cmd && cmd.held && cmd.node === n.id) tag('★', '#e2604e');
      // a dashed orbit lane appears whenever ships are circling without a dock
      const all = parked.get(n.id) || [], ndk = Math.min(n.kind === 'planet' ? 6 : 4, docks(n));
      if (all.length > ndk) {
        const rr = nodeR(n) * 3.1, hy = bodyMid(n) + nodeR(n) * 0.9; ctx.strokeStyle = hexA(PAPER, 0.45); ctx.lineWidth = 1.5; ctx.setLineDash([4, 6]); ctx.beginPath();
        for (let i = 0; i <= 40; i++) { const a = (i / 40) * Math.PI * 2, q = toScreen(n.x + Math.cos(a) * rr, n.y + Math.sin(a) * rr, hy); ctx[i ? 'lineTo' : 'moveTo'](q.x, q.y); }
        ctx.stroke(); ctx.setLineDash([]);
      }
    }
    if (z > 4.5) {
      ctx.font = '700 10px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.lineJoin = 'round';
      ctx.strokeStyle = 'rgba(29,35,53,0.7)'; ctx.lineWidth = 3; ctx.strokeText(n.name.toUpperCase(), gp.x, ny);
      ctx.fillStyle = hexA(PAPER, sil ? 0.45 : 0.85); ctx.fillText(n.name.toUpperCase(), gp.x, ny);
      ny += 15;
    }
    // structure icons: what is built here, at a glance
    if (!sil && z > 3.2) {
      const b = k.tier === 'live' ? n.b : g.intel[n.id].snap?.b || {};
      const list = ICON_ORDER.filter(id => (b[id] || 0) > 0);
      const cw = (id: string) => ((b[id] || 0) > 1 ? 30 : 20);
      const total = list.reduce((s, id) => s + cw(id) + 3, -3);
      let x0 = gp.x - total / 2;
      ctx.globalAlpha = stale ? 0.65 : 1;
      for (const id of list) {
        const wch = cw(id), res = (id === 'lab' || id === 'slab') && n.owner === PLAYER && n.research;
        ctx.fillStyle = BCOL[id]; ctx.beginPath(); ctx.roundRect(x0, ny - 9, wch, 18, 5); ctx.fill();
        if (res) { const side = g.sides[PLAYER], p = (side.techProg[n.research!] || 0) / TECH_TIME[TECHS[n.research!].tier]; ctx.strokeStyle = '#9fe0ff'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.roundRect(x0 - 1.5, ny - 10.5, wch + 3, 21, 6); ctx.stroke(); ctx.fillStyle = INK; ctx.fillRect(x0 + 2, ny + 6, (wch - 4) * Math.min(1, p), 2); }
        icon(ctx, id, x0 + 10, ny);
        if ((b[id] || 0) > 1) { ctx.fillStyle = INK; ctx.font = '800 10px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(b[id]), x0 + 23, ny + 0.5); }
        x0 += wch + 3;
      }
      ctx.globalAlpha = 1;
    }
  }
  for (const { s, seen } of flying) {
    const p = toScreen(s.x, s.y, s.lane ? 2.2 : 4.4), col = s.owner === 0 ? '#d9d9d9' : sideColor(g, s.owner);
    if (ui.sel?.type === 'ship' && ui.sel.id === s.id) { const gp = toScreen(s.x, s.y); ctx.strokeStyle = PAPER; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(gp.x, gp.y, 16, 16 * TILT, 0, 0, 7); ctx.stroke(); }
    flag(ctx, p.x, p.y, col, (seen === 2 ? String(s.drones) : '?'), false, false, now, s.id);
    // crew tokens next to the flag
    if (seen === 2) s.specs.forEach((id, i) => {
      const cx = p.x - 9 - i * 15, cy = p.y - 12, sc = id === g.cmdSpec ? GOLD : SPECS[g.specs[id].def].color;
      ctx.fillStyle = sc; ctx.beginPath(); ctx.arc(cx, cy, 7, 0, 7); ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = INK; ctx.font = '800 8px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(id === g.cmdSpec ? '★' : SPECS[g.specs[id].def].tag, cx, cy + 0.5);
      spots.push({ x: cx, y: cy, r: 9, spec: id });
    });
  }
}
