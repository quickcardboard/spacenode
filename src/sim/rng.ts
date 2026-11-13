import type { Game } from './types';

// mulberry32 with its state stored on the game, so every run is reproducible from the seed.
export function rnd(g: { rng: number }): number {
  g.rng = (g.rng + 0x6d2b79f5) | 0;
  let t = g.rng;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
export const ri = (g: { rng: number }, a: number, b: number) => a + Math.floor(rnd(g) * (b - a + 1));
export const rr = (g: { rng: number }, a: number, b: number) => a + rnd(g) * (b - a);
export const pick = <T>(g: { rng: number }, arr: T[]): T => arr[Math.floor(rnd(g) * arr.length)];
export function shuffle<T>(g: { rng: number }, arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd(g) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
export function sample<T>(g: Game | { rng: number }, arr: T[], n: number): T[] {
  return shuffle(g, arr).slice(0, n);
}
