# SpaceNodes (redesign v2)

Single-player roguelike RTS for phone and desktop browsers, rebuilt around specialists: recruit them, choose which three go where, and take the Citadel before the Coalition's mobilization overwhelms you. Target run length 40–60 minutes.

The earlier design lives on the `claude/hopeful-euler-cf2v3r` branch.

## Run it

```bash
npm install
npm run dev      # play at the printed URL
npm run pages    # rebuild the playable copy in docs/
npm run bot -- 10 greedy 0   # headless balance runs: [count] [greedy|idle] [threat level]
```

## Rules

- **Specialists** are passive. Each has a Power number (added to attack when aboard a fleet, to defence where stationed), one effect, and an upgraded form earned once by leading a winning attack. Three are active per node or fleet; extras wait in reserve. They cost upkeep by Power. Recruit 1 of 3 (or skip) at every neutral node, plus one at the start.
- **Attacks need a leader.** A fleet without a specialist can only reinforce, or go as a probe with no Drones.
- **Combat:** Drones + crew Power + bonuses must beat Drones + shield + defenders' Power. Whole numbers only.
- **Nodes:** planets have a Mine level, stations a Barracks level; both have a Shield level; each takes one specialty for good (Refinery, Lab, Supply world / Missile Silo, Depot, Launch Bay).
- **Economy:** mines pay Ultanium; every Drone and specialist costs upkeep. Stations build Drones one at a time while upkeep stays under a share of income; one button pauses all production. Broke with negative income means Drones desert.
- **Launch slots** replace ships: two per station, one per planet. A slot is busy while its fleet is away.
- **Rally points:** spare Drones flow to the nearest rally point on their own; corridors make that twice as fast. Planets short of workers are staffed automatically.
- **Research:** Labs fill a bar; each time it fills you pick 1 of 3 cards from the edge of one global tree. Doctrine pairs lock each other out.
- **Coalition:** three factions and an Archon, playing by the same rules (their attacks are led by Captains). Capturing a capital makes the whole faction surrender.

## Layout

- `src/sim/` is the game: deterministic, seeded, 10 Hz, no DOM. `config.ts` holds every balance number; `content.ts` holds specialists, relics, research, factions and events.
- `src/ui/render.ts` draws the 3D map (Three.js); `src/ui/ui.ts` builds the panels; `src/ui/console.ts` is the tuning console (press ` on desktop); `src/main.ts` is input and the loop.
- `scripts/bot.ts` plays full runs without a browser.

## Not built

Sound, a tutorial, offline install, skirmish and multiplayer.
