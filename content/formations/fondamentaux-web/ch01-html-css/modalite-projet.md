---
title: "Modalité B — Projet Progressif (HTML & CSS)"
slug: "ch01-modalite-projet"
parent: "ch01-html-css"
type: "modality"
modalityType: "projet"
duration: "8-12 heures"
difficulty: "beginner"
projectReference:
  repo: "https://github.com/example/fondamentaux-web-projects"
  branch_start: "ch01-projet-start"
  branch_end: "ch01-projet-end"
---

# Modalité B — Projet Progressif (HTML & CSS)

## Contexte

Tu as validé la théorie ? Excellent ! Ici, tu vas suivre une **voie plus progressive** : au lieu de 3 TPs isolés, tu construis **un vrai projet du début à la fin**, étape par étape.

**Durée totale** : 8-12 heures  
**Modalité** : Projet fil rouge individuel, livré progressivement  
**Sujet** : Intégration d'une maquette web (blog Scolar)  
**Évaluation** : Checklist objective + scoring /10

### 📂 Projet Fil Rouge — Point de Départ

Tu vas travailler sur le **Projet Fil Rouge : Intégration d'une Maquette Web**.

- **Départ** : [`/projects/fondamentaux-web-integration/ch01-start/`](../../../../projects/fondamentaux-web-integration/)
- **Référence** : [`/projects/fondamentaux-web-integration/ch01-end/`](../../../../projects/fondamentaux-web-integration/)

Le fil rouge évolue avec toi : chaque chapitre ajoute des couches (HTML → CSS → JavaScript).

---

## Projet : Blog Scolar — Intégration Web

### Étape 1 — Structure HTML (jour 1, ~3h)

#### Énoncé

À partir du **fichier de départ** (`/ch01-start/index.html`), tu vas **valider et peaufiner la structure HTML** du blog Scolar.

**Objectifs :**
- Vérifier que le HTML est sémantique et valide
- Ajouter/ajuster le contenu (articles, sections)
- S'assurer que les balises `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` sont correctement utilisées
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

Ajoute du **style CSS** pour rendre le blog Scolar élégant et lisible :

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

### Étape 3 — Responsive Design (jour 3-4, ~3-4h)

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

## Jalon 1 : Validation HTML

**Date** : Fin jour 1  
**Check** : Tous les HTML valides sur W3C  
**Feedback** : Auto-checklist ou review rapide

---

## Jalon 2 : Styling complet

**Date** : Fin jour 3  
**Check** : CSS appliqué, layout Flexbox/Grid fonctionnel  
**Feedback** : Cohérence visuelle, lisibilité

---

## Jalon 3 : Responsive validé

**Date** : Fin jour 4  
**Check** : 3 breakpoints testés sur DevTools  
**Feedback** : Fluidité, adaptabilité

---

## Soumission

### Fichiers à soumettre

1. **Repo GitHub** (ou ZIP avec tous les fichiers)
   ```
   blog-personnel/
     ├── index.html
     ├── article.html
     ├── about.html
     ├── contact.html
     ├── assets/
     │   ├── css/
     │   │   ├── reset.css
     │   │   ├── variables.css
     │   │   └── main.css
     │   └── images/
     └── README.md
   ```

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
- [ ] 3 colonnes visible sur desktop
- [ ] Cartes d'article avec `box-shadow` ou `border`
- [ ] Hover effects sur les cartes (transform, shadow)
- [ ] Navigation stylisée (flexbox, hover)
- [ ] Contraste de couleurs suffisant
- [ ] Espacements réguliers et cohérents

### Étape 3 — Responsive Design

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
- [ ] Scrollable horizontalement : NON ✓

---

## Notation

- Étape 1 (HTML) : /3
- Étape 2 (CSS) : /3.5
- Étape 3 (Responsive) : /3.5
- **Total : /10**

**Seuil réussite : 7/10** ✅

---

## Prochaine étape

Une fois cette modalité complétée, tu accéderas à :

👉 **Chapitre 2 — JavaScript Essentiel**

Bonus : Ton blog devient la base pour ajouter JavaScript au Ch. 2 (formulaire interactif, dark mode, etc.) !
