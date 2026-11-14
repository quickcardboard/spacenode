# SpaceNodes

Single-player roguelike RTS for phone and desktop browsers. One persistent map, deterministic combat, specialists as physical assets, a three-faction Coalition and an Archon to capture.

## Run it

```bash
npm install
npm run dev      # play at the printed URL (works on a phone on the same network)
npm run build    # static site in dist/
npm run bot -- 8 greedy 0   # headless balance runs: [count] [greedy|idle] [threat level]
npm run pages    # rebuild the playable copy in docs/ (served by GitHub Pages)
```

Play in a browser: https://quickcardboard.github.io/spacenode/ (once GitHub Pages is switched on for the `docs/` folder).

## Layout

- `src/sim/` is the game: deterministic, seeded, fixed 10 Hz step, no DOM. `sim.ts` exposes `step()` and `exec(command)`; everything the player does is a command.
- `src/sim/config.ts` and `src/sim/content.ts` hold every balance number and all content (specialists, commander archetypes, perks, relics, technologies, factions, Archons, events).
- `src/ui/render.ts` draws the map in 3D with Three.js (low-poly lit models, dock arms, docked and orbiting ships) under a 2D overlay for flags and labels; `src/ui/ui.ts` builds the panels; `src/main.ts` is input, the loop and autosave.
- `scripts/bot.ts` plays full runs without a browser.

## Tuning console

On desktop, press ` (backtick) or F2, or click ⚙. Every value in `src/sim/config.ts`, every building's cost, time and limit, and the research cost tables can be edited while playing. Edits are saved in the browser and re-applied on load. **Copy changes** puts them on the clipboard as JSON. The Commands tab has cheats for testing (`ult 500`, `reveal`, `stage 4`, `tech all`, `speed 16`, `help`).

## Rules as built

- Defence is Drones plus shields. Shield generators give 5 each, at most 20 per node; shields absorb attacks first and recharge over time. Neutral planets carry 5, 10 or 20 by size.
- Turrets do not add defence: each shoots down 3 Drones of every arriving enemy fleet. Unseen fleets and Siegebreakers slip past.
- Late-game sinks: Muster (buy Drones at a station), Habitats (+15 cap), repeatable research.
- Research: five branches; tier 3 in each is a doctrine pair (choosing one locks the other); each branch ends in a repeatable technology.
- Mines produce Ultanium; each generator powers two mines; mines need one Drone each to run.
- Building and production share one lane per node (a station that is building makes no Drones). Research has its own lane.
- One global Drone cap. Ships carry any number of Drones and up to three specialists.
- Docks limit how many ships can load and unload at a station; the rest orbit with their cargo aboard.
- Unmanned ships identify their target and are lost.
- Commander captured: 150 seconds to retake the node, no pause while a rescue is in flight.
- Every neutral planet offers one of three specialists on capture. Any technology with its prerequisite met can be researched.
- Coalition factions really expand, build and produce. The mobilization meter unlocks larger offensives drawn from those forces.

## Not built yet

New-station construction, sound, a tutorial, offline install (service worker), skirmish and multiplayer.
