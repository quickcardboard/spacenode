# SpaceNodes

Single-player roguelike RTS for phone and desktop browsers. One persistent map, deterministic combat, specialists as physical assets, a three-faction Coalition and an Archon to capture.

## Run it

```bash
npm install
npm run dev      # play at the printed URL (works on a phone on the same network)
npm run build    # static site in dist/
npm run bot -- 8 greedy 0   # headless balance runs: [count] [greedy|idle] [threat level]
```

## Layout

- `src/sim/` is the game: deterministic, seeded, fixed 10 Hz step, no DOM. `sim.ts` exposes `step()` and `exec(command)`; everything the player does is a command.
- `src/sim/config.ts` and `src/sim/content.ts` hold every balance number and all content (specialists, commander archetypes, perks, relics, technologies, factions, Archons, events).
- `src/ui/` draws the map on a canvas and builds the panels; `src/main.ts` is input, the loop and autosave.
- `scripts/bot.ts` plays full runs without a browser.

## Rules as built

- Mines produce Ultanium; each generator powers two mines; mines need one Drone each to run.
- Building and production share one lane per node (a station that is building makes no Drones). Research has its own lane.
- One global Drone cap. Ships carry any number of Drones and up to three specialists.
- Docks limit how many ships can load and unload at a station; the rest orbit with their cargo aboard.
- Unmanned ships identify their target and are lost.
- Commander captured: 150 seconds to retake the node, no pause while a rescue is in flight.
- Every neutral planet offers one of three specialists on capture. Any technology with its prerequisite met can be researched.
- Coalition factions really expand, build and produce. The mobilization meter unlocks larger offensives drawn from those forces.

## Not built yet

Corridors, new-station construction, sound, a tutorial, offline install (service worker), skirmish and multiplayer.
