// Synthesized sound effects: no audio files, everything is built from oscillators and noise with
// the Web Audio API. The context starts on the first touch or click (browsers require a gesture).

export type Sfx = 'launch' | 'laser' | 'boom' | 'capture' | 'lost' | 'alert' | 'level' | 'tap' | 'lore' | 'win' | 'lose';

let ctx: AudioContext | null = null, master: GainNode | null = null, noise: AudioBuffer | null = null;
let muted = false;
const last: Partial<Record<Sfx, number>> = {};
const GAP: Partial<Record<Sfx, number>> = { laser: 0.07, boom: 0.12, tap: 0.05, alert: 1.5 };

try { muted = localStorage.getItem('spacenodes.mute') === '1'; } catch { /* storage unavailable */ }
export const isMuted = () => muted;
export function setMuted(m: boolean) {
  muted = m;
  try { localStorage.setItem('spacenodes.mute', m ? '1' : '0'); } catch { /* storage unavailable */ }
  if (master) master.gain.value = m ? 0 : 0.5;
}

/** Call from a user gesture: creates or resumes the audio context. */
export function unlock() {
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = muted ? 0 : 0.5;
    const comp = ctx.createDynamicsCompressor();
    master.connect(comp); comp.connect(ctx.destination);
    noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = noise.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  if (ctx.state === 'suspended') void ctx.resume();
}

function tone(type: OscillatorType, f0: number, f1: number, t0: number, dur: number, vol: number) {
  const o = ctx!.createOscillator(), gn = ctx!.createGain();
  o.type = type; o.frequency.setValueAtTime(f0, t0); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t0 + dur);
  gn.gain.setValueAtTime(0.0001, t0); gn.gain.exponentialRampToValueAtTime(vol, t0 + 0.01); gn.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(gn); gn.connect(master!); o.start(t0); o.stop(t0 + dur + 0.02);
}
function hiss(t0: number, dur: number, vol: number, freq: number, q = 0.8) {
  const s = ctx!.createBufferSource(), f = ctx!.createBiquadFilter(), gn = ctx!.createGain();
  s.buffer = noise; f.type = 'lowpass'; f.frequency.setValueAtTime(freq, t0); f.frequency.exponentialRampToValueAtTime(80, t0 + dur); f.Q.value = q;
  gn.gain.setValueAtTime(vol, t0); gn.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  s.connect(f); f.connect(gn); gn.connect(master!); s.start(t0); s.stop(t0 + dur + 0.02);
}
const notes = (list: number[], step: number, type: OscillatorType, vol: number, dur = 0.22) => { const t = ctx!.currentTime; list.forEach((f, i) => tone(type, f, f, t + i * step, dur, vol)); };

export function play(name: Sfx, vol = 1) {
  if (!ctx || !master || muted || ctx.state !== 'running') return;
  const t = ctx.currentTime;
  if ((last[name] ?? -9) + (GAP[name] ?? 0.03) > t) return;
  last[name] = t;
  switch (name) {
    case 'tap': tone('triangle', 660, 520, t, 0.05, 0.05 * vol); break;
    case 'launch': tone('sawtooth', 140, 520, t, 0.35, 0.07 * vol); hiss(t, 0.4, 0.08 * vol, 2400); break;
    case 'laser': tone('square', 1500 + Math.random() * 500, 260, t, 0.09, 0.035 * vol); break;
    case 'boom': hiss(t, 0.55, 0.3 * vol, 900, 0.5); tone('sine', 90, 35, t, 0.45, 0.22 * vol); break;
    case 'capture': notes([523, 659, 784], 0.08, 'triangle', 0.12 * vol); break;
    case 'lost': notes([392, 311, 233], 0.12, 'sawtooth', 0.06 * vol, 0.3); break;
    case 'alert': notes([880, 660, 880, 660], 0.14, 'square', 0.045 * vol, 0.12); break;
    case 'level': notes([523, 784, 1047, 1319], 0.07, 'triangle', 0.1 * vol, 0.3); break;
    case 'lore': tone('sine', 220, 220, t, 1.4, 0.07 * vol); tone('sine', 330, 330, t + 0.25, 1.4, 0.05 * vol); tone('sine', 415, 415, t + 0.5, 1.4, 0.04 * vol); break;
    case 'win': notes([523, 659, 784, 1047, 784, 1047], 0.12, 'triangle', 0.12 * vol, 0.4); break;
    case 'lose': notes([392, 349, 311, 262], 0.25, 'sine', 0.12 * vol, 0.6); break;
  }
}
