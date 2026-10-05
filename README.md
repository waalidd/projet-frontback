# L'Attaque des Titans — projet front-end (Vite + React)

## Lancer le projet
```bash
npm install
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # version optimisée dans /dist
```

## Structure
```
src/
  main.jsx                 point d'entrée
  App.jsx                  assemble la page
  index.css                styles globaux
  components/
    Header.jsx             titre
    Hero.jsx               image principale
    CharacterTable.jsx     tableau généré à partir des données
    Footer.jsx             lien Wikipédia
  data/
    personnages.js         données du tableau (ajoute tes personnages ici)
```
