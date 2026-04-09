# Référentiel — Rôle Back-end

**Parcours complet** pour maîtriser les fondamentaux du développement back-end avec Node.js & bases de données.

## Informations générales

- **Rôle** : Back-end Developer
- **Slug** : `backend`
- **Dépôt fil rouge** : `https://github.com/example/backend-projects` (à adapter)
- **Branche par défaut** : `main`
- **Durée estimée** : 8-10 semaines (4 chapitres × ~2-3 semaines)
- **Niveau** : Débutant → Intermédiaire

---

## Chapitres du parcours

| # | Titre | Objectifs clés | État | Notes |
|---|-------|----------------|------|-------|
| 1 | **Node.js & Express Fondamentaux** | Serveur HTTP, routage, middleware, req/res | À faire | Prérequis : aucun |
| 2 | **Bases de données & SQL** | Modèles relationnels, requêtes, migrations, ORM | À faire | Prérequis : Ch. 1 |
| 3 | **APIs REST & Authentification** | Conception d'API, JWT, autorisation, validation | À faire | Prérequis : Ch. 2 |
| 4 | **Testing & Déploiement** | Tests unitaires & intégration, CI/CD, production | À faire | Prérequis : Ch. 3 |

---

## Conventions pour ce rôle

### Modalités pédagogiques retenues
- **TP** : travaux pratiques sur le projet fil rouge (base fournie à l'entrée du chapitre)
- **Quizz** : validation post-théorie (10-15 questions par chapitre)
- **Évaluation** : critères objectifs (tests auto, lint, code review)

### Format des données
- **TP** : Markdown + frontmatter YAML (références au dépôt, branches)
- **Quizz** : JSON structuré (voir annexe A du mode opératoire)
- **Évaluation** : checklist en Markdown + test suite

### Structure Nuxt Content
```
content/formations/backend/
  ├── ch01-nodejs/
  │   ├── index.md (théorie)
  │   ├── tp.md (travaux pratiques)
  │   ├── quiz.json (questions)
  │   └── evaluation.md
  ├── ch02-databases/
  │   ├── index.md
  │   ├── tp.md
  │   ├── quiz.json
  │   └── evaluation.md
  ├── ch03-apis/
  │   ├── index.md
  │   ├── tp.md
  │   ├── quiz.json
  │   └── evaluation.md
  └── ch04-testing/
      ├── index.md
      ├── tp.md
      ├── quiz.json
      └── evaluation.md
```

---

## État du projet fil rouge

### Chapitre 1 (Node.js & Express)
- **Entrée** : Repository vierge avec `package.json`, Express app minimale
- **Sortie attendue** : Serveur avec routes CRUD, middleware personnalisé, logging
- **Branche/Tag** : `ch01-start` → `ch01-end`

### Chapitre 2 (Bases de données)
- **Entrée** : App Express du Ch. 1 + migrations initialisées
- **Sortie attendue** : Modèles SQL, CRUD via ORM, seed script
- **Branche/Tag** : `ch02-start` → `ch02-end`

### Chapitre 3 (APIs REST & Auth)
- **Entrée** : App + DB du Ch. 2, intégration JWT
- **Sortie attendue** : API RESTful, authentification, autorisation par rôles
- **Branche/Tag** : `ch03-start` → `ch03-end`

### Chapitre 4 (Testing & Déploiement)
- **Entrée** : API complète du Ch. 3
- **Sortie attendue** : Suite de tests, pipeline CI/CD, déploiement actif
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
- Choisir l'ORM (Sequelize, Prisma, TypeORM, etc.)
