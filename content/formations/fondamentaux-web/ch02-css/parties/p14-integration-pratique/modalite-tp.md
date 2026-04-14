---
title: "Modalité A — TP Intensif (HTML & CSS)"
slug: "ch02-modalite-tp"
parent: "ch02-css"
type: "modality"
modalityType: "tp"
duration: "4-6 heures"
difficulty: "beginner"
projectReference:
  repo: "https://github.com/example/fondamentaux-web-projects"
  branch_start: "ch01-tp-start"
  branch_end: "ch01-tp-end"
---

# Modalité A — TP Intensif (HTML & CSS)

## Contexte

Tu as validé la théorie des chapitres **HTML** puis **CSS** ? Parfait ! Tu vas mettre en pratique en **3 TPs courts mais denses**.

Chaque TP se complète en **1-2 heures** et compile une compétence spécifique :

- **TP 1** : Structure HTML sémantique + mise en forme basique
- **TP 2** : Flexbox et alignement moderne
- **TP 3** : Responsive design avec media queries

**Durée totale** : 4-6 heures  
**Modalité** : Travail individuel, code à soumettre  
**Évaluation** : Checklist objective + scoring /10 — voir aussi [Évaluation chapitre 2](/formations/fondamentaux-web/ch02-css/evaluation).

### Projet Fil Rouge — Point de départ

**Projet Fil Rouge : Intégration d'une Maquette Web.**

Fichiers de départ : `/projects/fondamentaux-web-integration/ch01-start/`

- `index.html` — Structure HTML de base (blog Scolar)
- `styles.css` — Fichier CSS initial (vide ou minimal)
- `figma-mockup.md` — Référence à la maquette à intégrer

Référence de solution : `/projects/fondamentaux-web-integration/ch01-end/`

---

## TP 1 — Structure et sémantique

### Énoncé

À partir du **fichier de départ** (`/ch01-start/index.html`), tu vas **valider et améliorer la structure HTML** du blog Scolar :

**Objectifs :**

- En-tête avec logo et navigation
- Section hero avec titre et CTA
- Galerie d'articles (cartes)
- Pied de page avec sections

### Contraintes

- Utiliser les éléments sémantiques (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- Structurer avec `<section>` et `<article>` selon le contenu
- Respecter le meta viewport pour la compatibilité mobile
- Valider le HTML avec https://validator.w3.org/ (0 erreurs)
- Éviter les `<div>` sans sémantique lorsque c’est possible

### Livrables

```
📁 tp1-portfolio/
  ├── index.html
  ├── style.css (peut être minimal)
  └── README.md (courte description)
```

### Critères d'évaluation

- [ ] Document HTML valide (pas d'erreur avec validator.w3.org)
- [ ] Tous les éléments sémantiques utilisés correctement
- [ ] Meta viewport présent
- [ ] Contenu réel (pas de Lorem Ipsum)
- [ ] CSS appliqué (au minimum : couleurs, typographie)

**Scoring : /3**

---

## TP 2 — Flexbox et alignement

### Énoncé

En poursuivant sur le **fichier du TP 1**, tu vas **mettre en place les layouts Flexbox** pour le blog Scolar :

- **Navigation** : layout horizontal avec flexbox, logo à gauche, liens à droite
- **Galerie d'articles** : flex-wrap pour adapter l'affichage
- **Sections** : utiliser flexbox pour l'alignement du contenu
- **Cartes articles** : flex-direction colonne pour image + texte

### Contraintes

- Utiliser `display: flex` au minimum 5 fois dans le CSS
- Expérimenter `justify-content`, `align-items`, `flex-direction`, `gap`
- Utiliser `flex: 1` ou `flex: 0 0 auto` consciemment
- Pas de débordement de contenu
- Ne pas utiliser `float` ou `position: absolute` pour les layouts principaux

### Livrables

Mise à jour du TP 1 :

```
📁 tp1-portfolio/
  └── style.css  (ajout des règles flexbox)
```

### Critères d'évaluation

- [ ] Navigation alignée horizontalement avec flexbox
- [ ] Galerie flexible (2 colonnes en desktop)
- [ ] Section "À propos" : photo + texte côte à côte
- [ ] Pas de débordement de contenu
- [ ] Code CSS bien formaté et commenté

**Scoring : /3**

---

## TP 3 — Responsive et media queries

### Énoncé

Termine ta version du blog Scolar en le rendant **véritablement responsive** :

- Sur mobile (< 768px) : 1 colonne pour les articles, navigation adaptée
- Sur tablette (768px - 1024px) : 2 colonnes pour la galerie
- Sur desktop (>= 1024px) : 3 colonnes, layout optimisé

### Contraintes

- Mobile-first : CSS de base pour mobile, puis media queries pour les plus grandes tailles
- Tester sur au moins 3 tailles d'écran (avec DevTools)
- Utiliser au minimum 2 media queries (`min-width: 768px`, `min-width: 1024px`)
- Fonts et espacements adaptés par breakpoint
- Pas de breakpoints arbitraires sans justification

### Livrables

Mise à jour finale :

```
📁 tp1-portfolio/
  ├── index.html
  ├── style.css  (ajout des media queries)
  └── README.md
```

### Critères d'évaluation

- [ ] Layout mobile : 1 colonne, lisible sur petit écran
- [ ] Breakpoint 600px : ajustement tablette
- [ ] Breakpoint 1200px : layout desktop optimal
- [ ] Fonts et espacements adaptés par breakpoint
- [ ] Testé sur DevTools (responsive mode)

**Scoring : /4**

---

## Soumission

### Fichiers à soumettre

1. **Repo ou archive** avec tous les fichiers (index.html, style.css, assets/)
2. **Lien vers la démo en ligne** (GitHub Pages, Netlify, Vercel, etc.)
3. **Checklist d'auto-évaluation** (voir ci-après)

---

## Auto-évaluation

Avant de soumettre, complète cette checklist :

### TP 1 — Structure HTML

- [ ] HTML valide sur https://validator.w3.org/
- [ ] `<header>` avec titre et navigation
- [ ] `<main>` contenant le contenu principal
- [ ] `<section>` pour regrouper les contenus thématiques
- [ ] `<article>` pour chaque projet dans la galerie
- [ ] `<footer>` avec liens ou info
- [ ] Meta viewport présent
- [ ] Contenu réel (pas de Lorem Ipsum)

### TP 2 — Flexbox

- [ ] Navigation avec `display: flex` + `justify-content`
- [ ] Galerie de projets avec flexbox (2 colonnes visibles)
- [ ] Section "À propos" : photo + texte alignés avec flexbox
- [ ] Utilisation de `gap` pour espacer les éléments
- [ ] Pas de débordement
- [ ] Au moins 3 conteneurs avec `display: flex`
- [ ] CSS bien formaté

### TP 3 — Responsive

- [ ] CSS mobile-first (de base, pas de breakpoint)
- [ ] Media query `@media (min-width: 600px)` appliquée
- [ ] Media query `@media (min-width: 1200px)` appliquée
- [ ] Mobile (< 600px) : 1 colonne, lisible
- [ ] Tablette (600-1200px) : 2 colonnes galerie
- [ ] Desktop (>= 1200px) : 3 colonnes, layout optimisé
- [ ] Fonts et espacements adaptés par breakpoint
- [ ] Testé sur DevTools responsive mode

---

## Notation

- TP 1 : /3
- TP 2 : /3
- TP 3 : /4
- **Total : /10**

**Seuil réussite : 7/10**

---

## Prochaine étape

Une fois cette modalité complétée et l’[évaluation du chapitre 2](/formations/fondamentaux-web/ch02-css/evaluation) parcourue :

**Chapitre 3 — JavaScript essentiel** (contenu à venir sur ce site).
