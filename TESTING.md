# Testing
## Executed
After fetching committed source, four JS modules were parsed with the Function constructor (imports/exports removed for parsing). Engine functions and save adapter executed in an isolated JS runtime with a Map-backed localStorage mock. Checks: new game validation, valid building, occupied tile rejection, connectivity, save/load, corrupted current → backup, import round-trip, invalid import rejection, deletion, 100 turns valid. Fifty seeds tested for all target sites reachable via non-water tiles.
## Repeatable tests
Node 20+: npm test. These files are provided, but the Node test runner itself has not yet been executed by this session.
## Browser checklist (pending)
Serve with HTTP, start each difficulty, build/scout/research, reload and close/reopen browser, import valid/corrupt files, check backup, settings, both languages, keyboard, fullscreen, small screens and audio. Play full campaign before claiming duration.
