# Scolar — site des formations

Application [Nuxt 4](https://nuxt.com/) avec [Nuxt Content](https://content.nuxt.com/) : parcours de formation, chapitres, parties et modalités (TP, projet, quiz) décrits sous `content/formations/`.

## Prérequis

- Node.js 20+ (recommandé)
- npm

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvre l’URL affichée (souvent `http://localhost:3000`). La liste des formations est sur `/formations`.

## Build production

```bash
npm run build
```

## Génération statique (SSG)

```bash
npm run generate
```

Sortie dans `.output/public` (compatible avec Netlify — voir `netlify.toml`).

## Documentation interne

- [FORMATIONS-MODULES.md](./FORMATIONS-MODULES.md) — structure des modules et du contenu formation.

## Ressources TP (chapitre intégration)

Le dossier `projects/fondamentaux-web-integration/` contient les fichiers de départ / corrigés pour certains travaux pratiques.
