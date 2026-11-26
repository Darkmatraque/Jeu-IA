# Testing
## Executed
After fetching committed source, four JS modules were parsed with the Function constructor (imports/exports removed for parsing). Engine functions and save adapter executed in an isolated JS runtime with a Map-backed localStorage mock. Checks: new game validation, valid building, occupied tile rejection, connectivity, save/load, corrupted current → backup, import round-trip, invalid import rejection, deletion, 100 turns valid. Fifty seeds tested for all target sites reachable via non-water tiles.
## Repeatable tests
Node 20+: npm test. These files are provided, but the Node test runner itself has not yet been executed by this session.
## Browser checklist (pending)
Serve with HTTP, start each difficulty, build/scout/research, reload and close/reopen browser, import valid/corrupt files, check backup, settings, both languages, keyboard, fullscreen, small screens and audio. Play full campaign before claiming duration.

## Campaign simulation
Seed 77: legal build, scout, research, contract and turn actions reached victory and completed all three restoration projects on day 123. Duplicate and premature project purchases rejected. State remained valid. This is a simulation, not human-duration validation.

## Mock DOM integration
Executed fetched UI module against mocked DOM, Canvas and storage APIs: menu, slot dialog, new game, map render code, pointer selection, build, turn/autosave, pause, language switch, continue and nickname change passed. This does not test visual rendering or real browser persistence.
