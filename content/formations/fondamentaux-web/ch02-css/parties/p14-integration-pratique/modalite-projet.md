---
title: "Modalité B — Projet progressif (HTML & CSS)"
slug: "ch02-modalite-projet"
parent: "ch02-css"
type: "modality"
modalityType: "projet"
duration: "8-12 heures"
difficulty: "beginner"
projectReference:
  repo: "https://github.com/example/fondamentaux-web-projects"
  branch_start: "ch01-projet-start"
  branch_end: "ch01-projet-end"
---

# Modalité B — Projet progressif (HTML & CSS)

## Contexte

Tu as validé la théorie ? Tu construis **un vrai projet du début à la fin**, étape par étape.

**Durée totale** : 8-12 heures  
**Modalité** : Projet fil rouge individuel, livré progressivement  
**Sujet** : Intégration d'une maquette web (blog Scolar)  
**Évaluation** : Checklist objective + scoring /10 — voir [Évaluation chapitre 2](/formations/fondamentaux-web/ch02-css/evaluation).

### Projet Fil Rouge — Point de départ

**Projet Fil Rouge : Intégration d'une Maquette Web.**

- **Départ** : `/projects/fondamentaux-web-integration/ch01-start/`
- **Référence** : `/projects/fondamentaux-web-integration/ch01-end/`

Le fil rouge évolue avec toi : après HTML et CSS, le prochain chapitre ajoutera la couche **JavaScript**.

---

## Projet : Blog Scolar — Intégration Web

### Étape 1 — Structure HTML (jour 1, ~3h)

#### Énoncé

À partir du **fichier de départ** (`/ch01-start/index.html`), tu vas **valider et peaufiner la structure HTML** du blog Scolar.

**Objectifs :**

- Vérifier que le HTML est sémantique et valide
- Ajouter ou ajuster le contenu (articles, sections)
- T'assurer que les balises `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` sont correctement utilisées
- Tester la validité W3C

#### Livrables

À partir de `/ch01-start/` :

```
📁 mon-blog-integration/
  ├── index.html        (page d'accueil, basée sur ch01-start)
  ├── styles.css        (vide ou minimal pour l'instant)
  └── assets/
      └── images/       (si tu ajoutes des images)
```

#### Critères

- [ ] Document HTML valide (W3C Validator)
- [ ] Tous les éléments sémantiques : `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [ ] Meta viewport et charset déclarés
- [ ] Images avec `alt` text
- [ ] Contenu réel (titre, descriptions, articles)
- [ ] Structure logique et lisible

**Scoring : /3**

---

### Étape 2 — Mise en forme CSS (jour 2-3, ~4h)

#### Énoncé

Ajoute du **style CSS** pour rendre le blog Scolar élégant et lisible.

**Basé sur la maquette Figma :**

- Palette de couleurs (primaire #4299E1, secondaire #667EEA, accent #22C97F)
- Typographie : polices système ou Google Fonts
- Espacements réguliers (margin, padding)
- Utilise **Flexbox** pour les layouts (navigation, grille articles, sections)
- Navigation stylisée (hover effects)
- Cartes d'article avec ombre et transitions

#### Livrables

Mise à jour du fichier :

```
mon-blog-integration/
  ├── index.html
  ├── styles.css       (développé, avec variables et flexbox)
  └── assets/
      └── images/
```

#### Critères

- [ ] Variables CSS pour les couleurs et espacements
- [ ] Flexbox utilisé au minimum 5 fois
- [ ] Grille d'articles : 3 colonnes (Flexbox)
- [ ] Cartes d'article avec hover effect et transition
- [ ] Navigation stylisée (flexbox horizontal)
- [ ] Cohérence visuelle et lisibilité
- [ ] Pas de débordement de contenu

**Scoring : /3.5**

---

### Étape 3 — Responsive design (jour 3-4, ~3-4h)

#### Énoncé

Adapte le blog Scolar à **tous les écrans** :

- Mobile (< 768px) : 1 colonne articles, navigation adaptée
- Tablette (768px - 1024px) : 2 colonnes articles
- Desktop (>= 1024px) : 3 colonnes articles, layout optimal

#### Livrables

Mise à jour CSS :

```
mon-blog-integration/
  ├── index.html
  ├── styles.css    (+ media queries pour responsive)
  └── assets/
      └── images/
```

#### Critères

- [ ] Mobile-first CSS (de base pour mobile)
- [ ] Media query `@media (min-width: 768px)` appliquée
- [ ] Media query `@media (min-width: 1024px)` appliquée
- [ ] Mobile (< 768px) : 1 colonne articles
- [ ] Tablette (768-1024px) : 2 colonnes articles
- [ ] Desktop (>= 1024px) : 3 colonnes, layout optimisé
- [ ] Navigation adaptée (mobile-friendly)
- [ ] Images responsive (`max-width: 100%`)
- [ ] Fonts et espacements adaptés par breakpoint
- [ ] Testé sur DevTools (responsive mode)
- [ ] Pas de débordement horizontal

**Scoring : /3.5**

---

## Jalons

**Jalon 1 — Validation HTML** : fin jour 1 ; W3C sans erreurs bloquantes.

**Jalon 2 — Styling complet** : fin jour 3 ; Flexbox / cohérence visuelle.

**Jalon 3 — Responsive validé** : fin jour 4 ; trois largeurs testées.

---

## Soumission

### Fichiers à soumettre

1. **Repo GitHub** (ou ZIP avec tous les fichiers)
2. **Lien démo** (GitHub Pages, Netlify, Vercel, etc.)
3. **Checklist d'auto-évaluation** (voir ci-après)

---

## Auto-évaluation

### Étape 1 — Structure HTML

- [ ] `index.html` valide (W3C Validator)
- [ ] `<header>` avec navigation
- [ ] `<nav>` avec liens
- [ ] `<main>` contenant le contenu principal
- [ ] `<section>` pour hero, articles, newsletter
- [ ] `<article>` pour chaque carte d'article
- [ ] `<footer>` avec sections et liens
- [ ] Meta viewport et charset présents
- [ ] Toutes les images ont un `alt` text
- [ ] Contenu réel (titre, descriptions, articles)

### Étape 2 — Mise en forme CSS

- [ ] Reset CSS ou normalisation (margin, padding, box-sizing)
- [ ] Variables CSS pour les couleurs (#4299E1, #667EEA, #22C97F, etc.)
- [ ] Un fichier `styles.css` bien organisé
- [ ] Typographie définie (polices système ou Google Fonts)
- [ ] Articles affichés en grille avec Flexbox
- [ ] 3 colonnes visibles sur desktop
- [ ] Cartes d'article avec `box-shadow` ou `border`
- [ ] Hover effects sur les cartes (transform, shadow)
- [ ] Navigation stylisée (flexbox, hover)
- [ ] Contraste de couleurs suffisant
- [ ] Espacements réguliers et cohérents

### Étape 3 — Responsive design

- [ ] CSS mobile-first (styles de base pour mobile)
- [ ] Media query `@media (min-width: 768px)` déclarée et appliquée
- [ ] Media query `@media (min-width: 1024px)` déclarée et appliquée
- [ ] Mobile (< 768px) : 1 colonne articles, nav adaptée
- [ ] Tablette (768-1024px) : 2 colonnes articles
- [ ] Desktop (>= 1024px) : 3 colonnes articles
- [ ] Images responsive : `max-width: 100%`
- [ ] Navigation adaptée (flexbox, font-size réduit mobile)
- [ ] Fonts et espacements ajustés par breakpoint
- [ ] Padding/margin réduits sur mobile
- [ ] Testé sur Chrome DevTools responsive mode
- [ ] Pas de débordement horizontal
- [ ] Scrollable horizontalement : NON (objectif : pas de scroll horizontal involontaire)

---

## Notation

- Étape 1 (HTML) : /3
- Étape 2 (CSS) : /3.5
- Étape 3 (Responsive) : /3.5
- **Total : /10**

**Seuil réussite : 7/10**

---

## Prochaine étape

Une fois cette modalité complétée :

**Chapitre 3 — JavaScript essentiel** (contenu à venir sur ce site).

Bonus : ton blog devient la base pour ajouter du JavaScript (formulaire interactif, thème sombre, etc.).
