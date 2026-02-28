# Ma Galette Bretonne huhu

Compose ta galette de sarrasin parfaite en choisissant parmi des dizaines d'ingredients.

## Fonctionnalites

- **8 categories d'ingredients** : bases, fromages, viandes, oeuf, fruits de mer, legumes, sauces, extras
- **70+ ingredients** avec emojis et prix indicatifs
- **Visuel interactif** de la galette qui se remplit au fur et a mesure
- **Partage par URL** : chaque combinaison genere un lien unique
- **Galette aleatoire** : laisse le hasard decider pour toi
- **Responsive** : fonctionne sur mobile, tablette et desktop

## Deploiement sur GitHub Pages

1. Cree un nouveau repository sur GitHub
2. Clone-le et copie les fichiers dedans :
   ```bash
   git clone https://github.com/ton-user/galette-bretonne.git
   cd galette-bretonne
   # copie index.html, style.css, script.js ici
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
3. Va dans **Settings > Pages**
4. Sous "Source", selectionne **Deploy from a branch**
5. Choisis la branche `main` et le dossier `/ (root)`
6. Clique sur **Save**
7. Ton site sera accessible a `https://ton-user.github.io/galette-bretonne/`

## Stack technique

- HTML5, CSS3 (variables, grid, flexbox), JavaScript vanilla
- Aucune dependance, aucun framework
- Hebergement statique (GitHub Pages, Netlify, Vercel, etc.)

## Licence

MIT
