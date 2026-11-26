# Development status
Current version: 0.1.0 development build. Not 1.0.
## Implemented (code present)
Core map, buildings, connected production, exploration, research, weather, contracts, victory and continued sandbox; FR/EN; menus, profile name and statistics; local saves, backup, manual save, automatic save, import/export, validation; original SVG and synthesized interaction audio.
## Verified
Actual fetched JS parsed; direct execution of engine and storage against in-memory localStorage passed; 50 seeds checked for all three beacon sites being reachable over land; 100 turns remained valid. See TESTING.md.
## Not verified / not complete
Real browser playthrough, refresh/restart behavior in actual browser, fullscreen/audio behavior, UI accessibility, cross-browser/mobile compatibility, balance and campaign duration, long-term content, public deployment. No claim of 20+ hours. No official 1.0 release.
## Next concrete task
Run browser smoke test, inspect actual map/menus and save after reload/import. Fix defects, then expand campaign objectives and meaningful decisions. Preserve save schema v1 or add tested migration before changes. Do not restart repository.
