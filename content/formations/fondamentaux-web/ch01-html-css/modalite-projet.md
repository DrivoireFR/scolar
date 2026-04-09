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
**Sujet** : Création d'un blog personnel  
**Évaluation** : Checklist objective + scoring /10

---

## Projet : Blog Personnel

### Étape 1 — Structure HTML (jour 1, ~3h)

#### Énoncé

Crée la **structure complète** d'un blog personnel en HTML pur :

```
📄 Accueil (index.html)
  ├── En-tête avec titre du blog + nav
  ├── Zone hero (bannière)
  ├── Grille de 6 articles (aperçus)
  └── Pied de page

📄 Article détaillé (article.html)
  ├── En-tête avec titre + date + auteur
  ├── Contenu long (paragraphes, listes, citations)
  ├── Section commentaires (statique pour l'instant)
  └── Pied de page
```

#### Livrables

```
📁 blog-personnel/
  ├── index.html        (page accueil)
  ├── article.html      (template article)
  ├── about.html        (à propos)
  ├── contact.html      (formulaire vide)
  └── assets/
      └── images/       (images placeholder)
```

#### Critères

- [ ] Documents HTML valides (W3C)
- [ ] Tous les éléments sémantiques : `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- [ ] Navigation fonctionnelle entre pages
- [ ] Contenu réel (pas de Lorem Ipsum générique)
- [ ] Meta viewport et charset déclarés
- [ ] Images avec alt text

**Scoring : /3**

---

### Étape 2 — Mise en forme CSS (jour 2-3, ~4h)

#### Énoncé

Ajoute du **style CSS** pour rendre le blog élégant et lisible :

- Palette de couleurs cohérente (primaire, secondaire, neutre)
- Typographie : polices web (Google Fonts)
- Espacements réguliers (margin, padding)
- Articles en **grille 3 colonnes** (Flexbox ou Grid)
- Navigation stylisée (hover effects)

#### Livrables

Mise à jour :
```
blog-personnel/
  ├── assets/
  │   ├── css/
  │   │   ├── reset.css       (normalisation)
  │   │   ├── variables.css   (couleurs, typo)
  │   │   └── main.css        (styles généraux)
  │   └── images/
  └── *.html
```

#### Critères

- [ ] Variables CSS pour les couleurs et espacements
- [ ] Typographie Google Fonts intégrée
- [ ] Grille d'articles : 3 colonnes (Flexbox ou Grid)
- [ ] Cartes d'article avec hover effect
- [ ] Navigation stylisée
- [ ] Consultation lisible (contraste, line-height)

**Scoring : /3.5**

---

### Étape 3 — Responsive Design (jour 3-4, ~3-4h)

#### Énoncé

Adapte le blog à **tous les écrans** :

- Mobile (< 600px) : 1 colonne, menus adaptés
- Tablette (600-1200px) : 2 colonnes articles
- Desktop (>= 1200px) : 3 colonnes + sidebar optionnelle

#### Livrables

Mise à jour CSS :
```
blog-personnel/
  ├── assets/css/
  │   ├── main.css    (+ media queries)
  │   └── responsive.css (optionnel, séparé)
  └── *.html
```

#### Critères

- [ ] Mobile-first CSS
- [ ] 2+ media queries (`600px`, `1200px`)
- [ ] Galerie : 1 col mobile, 2 col tablette, 3 col desktop
- [ ] Navigation mobile : menu adapté (CSS only, pas JS)
- [ ] Images responsive (`max-width: 100%`)
- [ ] Testé sur DevTools (responsive mode)

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
- [ ] `article.html` valide (W3C Validator)
- [ ] `about.html` valide (W3C Validator)
- [ ] `contact.html` valide (W3C Validator)
- [ ] Tous les documents contiennent `<header>`, `<nav>`, `<main>`, `<footer>`
- [ ] Articles structurés avec `<article>` et `<section>`
- [ ] Meta viewport et charset présents
- [ ] Toutes les images ont un `alt` text
- [ ] Navigation fonctionne entre pages
- [ ] Contenu réel (pas de Lorem Ipsum)

### Étape 2 — Mise en forme CSS

- [ ] Fichier `reset.css` ou normalisation CSS
- [ ] Fichier `variables.css` avec palette de couleurs
- [ ] Fichier `main.css`
- [ ] Polices Google Fonts intégrées
- [ ] Articles affichés en grille (Flexbox ou Grid)
- [ ] 3 colonnes visible sur desktop
- [ ] Cartes d'article avec `box-shadow` ou `border`
- [ ] Hover effects sur les cartes
- [ ] Navigation stylisée
- [ ] Contraste de couleurs suffisant
- [ ] Espacements réguliers

### Étape 3 — Responsive Design

- [ ] CSS mobile-first
- [ ] Media query `@media (min-width: 600px)` déclarée et appliquée
- [ ] Media query `@media (min-width: 1200px)` déclarée et appliquée
- [ ] Mobile (< 600px) : 1 colonne articles
- [ ] Tablette (600-1200px) : 2 colonnes articles
- [ ] Desktop (>= 1200px) : 3 colonnes articles
- [ ] Images responsive : `max-width: 100%`
- [ ] Navigation adaptée (menu responsive)
- [ ] Fonts et espacements ajustés par breakpoint
- [ ] Testé sur Chrome DevTools responsive mode
- [ ] Pas de débordement horizontal

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
