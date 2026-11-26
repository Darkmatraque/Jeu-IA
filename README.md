# ECHO FRONTIER — The Last Signal

Construisez une colonie dans un monde sous la brume. Explorez une carte générée par graine, reliez des bâtiments, gérez la nourriture, le métal et l'énergie, négociez des contrats et restaurez trois balises.

**Version de développement 0.1.0 — pas une version 1.0.**

## Jouer en local
Servez le dossier avec `python -m http.server 8000` puis ouvrez http://localhost:8000. Le jeu est statique, sans serveur applicatif ni dépendance. Sur GitHub Pages, utiliser la branche main / racine.

## Commandes
Cliquez sur une case, sélectionnez un bâtiment puis construisez. Les flèches déplacent la sélection lorsque la carte est focalisée. Jour suivant applique la simulation. Consultez Comment jouer pour les règles.

## Sauvegardes
Trois emplacements locaux, export/import JSON, sauvegarde après actions et copie de secours. Exportez avant d'effacer vos données navigateur.

## Tests
Node.js 20+ : `npm test`. Voir TESTING.md pour les vérifications réelles et restantes.

Aucune licence générale de distribution n'est accordée par ce dépôt. Voir ASSET_LICENSES.md.
