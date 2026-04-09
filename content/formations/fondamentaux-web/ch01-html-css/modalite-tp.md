---
title: "Modalité A — TP Intensif (HTML & CSS)"
slug: "ch01-modalite-tp"
parent: "ch01-html-css"
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

Tu as validé la théorie ? Parfait ! Maintenant, tu vas mettre en pratique en **3 TPs courts mais denses**.

Chaque TP se complète en **1-2 heures** et compile une compétence spécifique :
- **TP 1** : Structure HTML sémantique + mise en forme basique
- **TP 2** : Flexbox et alignement moderne
- **TP 3** : Responsive design avec media queries

**Durée totale** : 4-6 heures  
**Modalité** : Travail individuel, code à soumettre  
**Évaluation** : Checklist objective + scoring /10

---

## TP 1 — Structure et sémantique

### Énoncé

Crée une **page portfolio personnel** avec :
- En-tête avec titre et navigation
- Section "À propos" avec image et texte
- Galerie de projets (4 cartes minimum)
- Pied de page avec liens

### Contraintes

- ✅ Utiliser les éléments sémantiques (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- ✅ Structurer avec `<section>` et `<article>` selon le contenu
- ✅ Respecter le meta viewport pour la compatibilité mobile
- ❌ Pas de `<div>` sans sémantique (si possible)

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

À partir de ta portfolio du TP 1, **refactorise les layouts avec Flexbox** :

- Navigation : layout horizontal avec flexbox, espacements réguliers
- Galerie de projets : afficher les cartes en 2 colonnes (desktop), 1 colonne (mobile)
- Section "À propos" : photo + texte côte à côte (flexbox)

### Contraintes

- ✅ Utiliser `display: flex` au minimum 3 fois
- ✅ Expérimenter `justify-content`, `align-items`, `gap`
- ✅ Utiliser `flex: 1` ou `flex: 0 0 auto` consciemment
- ❌ Ne pas utiliser `float` ou `position: absolute` pour les layouts

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

## TP 3 — Responsive & media queries

### Énoncé

Finis le job en rendant ta portfolio **véritablement responsive** :

- Sur mobile (< 600px) : 1 colonne partout, fonts réduites
- Sur tablette (600px - 1200px) : 2 colonnes pour la galerie
- Sur desktop (>= 1200px) : layout optimisé, fonts plus grandes

### Contraintes

- ✅ Mobile-first : CSS de base pour mobile, puis media queries pour les plus grandes tailles
- ✅ Tester sur au moins 3 tailles d'écran (avec DevTools)
- ✅ Utiliser au minimum 3 media queries
- ❌ Pas de breakpoints arbitraires : utiliser 600px, 1200px (ou justifier)

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

**Seuil réussite : 7/10** ✅

---

## Prochaine étape

Une fois cette modalité complétée, tu accéderas à :

👉 **Chapitre 2 — JavaScript Essentiel**
