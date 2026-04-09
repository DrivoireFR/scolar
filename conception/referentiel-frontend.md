# Référentiel — Rôle Front-end

**Parcours complet** pour maîtriser les fondamentaux du développement front-end moderne.

## Informations générales

- **Rôle** : Front-end Developer
- **Slug** : `frontend`
- **Dépôt fil rouge** : `https://github.com/example/frontend-projects` (à adapter)
- **Branche par défaut** : `main`
- **Durée estimée** : 8-10 semaines (4 chapitres × ~2-3 semaines)
- **Niveau** : Débutant → Intermédiaire

---

## Chapitres du parcours

| Slug | Titre | Parent | Objectifs clés | État | Notes |
|------|-------|--------|----------------|------|-------|
| `ch01` | **HTML & CSS Fondamentaux** | — | Structurer un document HTML, styler avec CSS (flexbox, grid), responsive design | À faire | Théorie commune, racine |
| `ch01-tp` | HTML & CSS — Voie TP intensif | `ch01` | TP court et dense, 3 exercices guidés | À faire | Enfant de Ch. 1 |
| `ch01-projet` | HTML & CSS — Voie projet progressif | `ch01` | Projet fil rouge, déploiement progressif | À faire | Enfant de Ch. 1 |
| `ch02` | **JavaScript Essentiel** | `ch01-tp`, `ch01-projet` | Variables, fonctions, DOM, événements, async/await | À faire | Prérequis : Ch. 1-TP OU Ch. 1-Projet |
| `ch03` | **Frameworks & Nuxt.js** | `ch02` | Composants, réactivité, routing, SSR | À faire | Prérequis : Ch. 2 |
| `ch04` | **Performance & Déploiement** | `ch03` | Optimisation, lighthouse, déploiement en production | À faire | Prérequis : Ch. 3 |

---

## Conventions pour ce rôle

### Modalités pédagogiques retenues
- **TP** : travaux pratiques sur le projet fil rouge (base fournie à l'entrée du chapitre)
- **Quizz** : validation post-théorie (10-15 questions par chapitre)
- **Évaluation** : critères objectifs (tests auto, code review checklist)

### Format des données
- **TP** : Markdown + frontmatter YAML (références au dépôt, branches)
- **Quizz** : JSON structuré (voir annexe A du mode opératoire)
- **Évaluation** : checklist en Markdown + barème

### Structure Nuxt Content
```
content/formations/frontend/
  ├── ch01-html-css/
  │   ├── index.md (théorie, parent)
  │   ├── quiz.json (validation)
  │   └── evaluation.md (optionnel)
  │
  ├── ch01-tp/
  │   ├── index.md (TP intensif, enfant de ch01)
  │   ├── quiz.json (questions)
  │   └── evaluation.md
  │
  ├── ch01-projet/
  │   ├── index.md (Projet progressif, enfant de ch01)
  │   ├── quiz.json (questions)
  │   └── evaluation.md
  │
  ├── ch02-javascript/
  │   ├── index.md (parent, prérequis: ch01-tp OR ch01-projet)
  │   ├── tp.md
  │   ├── quiz.json
  │   └── evaluation.md
  ├── ch03-nuxt/
  │   ├── index.md
  │   ├── tp.md
  │   ├── quiz.json
  │   └── evaluation.md
  └── ch04-perf/
      ├── index.md
      ├── tp.md
      ├── quiz.json
      └── evaluation.md
```

---

## État du projet fil rouge

### Chapitre 1 (HTML & CSS)
- **Entrée** : Repository vierge avec `README.md`, `index.html` et `style.css` minimal
- **Sortie attendue** : Layout responsive avec header, main, footer (flexbox + grid)
- **Branche/Tag** : `ch01-start` → `ch01-end`

### Chapitre 2 (JavaScript)
- **Entrée** : Layout du Ch. 1 + fichier `script.js` vide
- **Sortie attendue** : Formulaire interactif avec validation, fetch vers API publique
- **Branche/Tag** : `ch02-start` → `ch02-end`

### Chapitre 3 (Nuxt)
- **Entrée** : Projet Nuxt initialisé, pages existantes du Ch. 2 adaptées en composants
- **Sortie attendue** : App Nuxt fonctionnelle avec routing, middleware, stores
- **Branche/Tag** : `ch03-start` → `ch03-end`

### Chapitre 4 (Perf & Déploiement)
- **Entrée** : App Nuxt du Ch. 3, prête pour optimisation
- **Sortie attendue** : Production build, lighthouse score > 90, déploiement actif
- **Branche/Tag** : `ch04-start` → `ch04-end`

---

## Historique de livraison

| Chapitre | Livré | Date | Session | Notes |
|----------|-------|------|---------|-------|
| 1 | ❌ | — | — | En attente |
| 2 | ❌ | — | — | En attente |
| 3 | ❌ | — | — | En attente |
| 4 | ❌ | — | — | En attente |

---

## À adapter

- Remplacer l'URL du dépôt par ton URL réelle
- Ajuster les objectifs si besoin
- Préciser les branches/tags du projet fil rouge
- Ajouter les conventions d'URI pour le contenu Nuxt (slugs, chemin de base, etc.)
