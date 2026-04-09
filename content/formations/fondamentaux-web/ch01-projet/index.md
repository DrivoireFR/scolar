---
title: "Chapitre 1-Projet — HTML & CSS (Voie progressive)"
slug: "ch01-projet"
order: 1.2
parent: "ch01-html-css"
children: []
role: "fondamentaux-web"
description: "Un projet progressif et continu : construis un vrai site de A à Z"
modalityType: "projet"
projectReference:
  repo: "https://github.com/example/fondamentaux-web-projects"
  branch_start: "ch01-projet-start"
  branch_end: "ch01-projet-end"
duration: "8-12 heures"
difficulty: "beginner"
---

# Chapitre 1-Projet — Voie progressive (HTML & CSS)

## Contexte

Tu as validé la théorie ? Excellent ! Ici, tu vas suivre une **voie plus progressive** : au lieu de 3 TPs isolés, tu construis **un vrai projet du début à la fin**, étape par étape.

**Durée totale** : 8-12 heures  
**Modalité** : Projet fil rouge individuel, livré progressivement  
**Sujet** : Création d'un blog personnel

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
- [ ] Contenu réel (pas de Lorem générique)
- [ ] Meta viewport et charset déclarés
- [ ] Images avec alt text

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
- [ ] Navigation mobile : menu hamburger (CSS only, pas JS)
- [ ] Images responsive (`max-width: 100%`)
- [ ] Testé sur DevTools (responsive mode)

---

## Projet fil rouge : états du code

### Branche `ch01-projet-start`

```
📁 blog-personnel/
  ├── index.html       (structure brute, pas de CSS)
  ├── article.html     (template vide)
  └── assets/images/   (images placeholder)
```

**État entrée** : structure HTML uniquement, 0 CSS

---

### Branche `ch01-projet-end`

```
📁 blog-personnel/
  ├── index.html       (structure + CSS + responsive)
  ├── article.html     (idem)
  ├── about.html       (idem)
  ├── contact.html     (idem)
  ├── assets/
  │   ├── css/
  │   │   ├── reset.css
  │   │   ├── variables.css
  │   │   └── main.css (avec media queries)
  │   └── images/
  └── README.md        (documentation)
```

**État sortie** : blog complet, responsive, prêt pour JavaScript (Ch. 2)

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

## Évaluation finale du projet

Une fois les 3 étapes complétées :

1. **Push du repo** (ou archive ZIP)
2. **Lien démo** (GitHub Pages, Netlify, etc.)
3. **Checklist d'auto-évaluation** (ci-dessous)

### Notation

- Étape 1 (HTML) : /3
- Étape 2 (CSS & Styling) : /3.5
- Étape 3 (Responsive) : /3.5
- **Total : /10**

**Seuil réussite : 7/10**

---

## Prochaine étape

Une fois cette voie complétée, tu rejoins la suite : **Chapitre 2 — JavaScript Essentiel**.

Attention : le fil rouge du projet se poursuit ! Au Ch. 2, tu ajouteras **JavaScript** pour rendre le blog interactif (formulaire, commentaires, dark mode, etc.).
