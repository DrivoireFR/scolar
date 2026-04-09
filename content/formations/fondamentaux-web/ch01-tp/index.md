---
title: "Chapitre 1-TP — HTML & CSS (Voie intensive)"
slug: "ch01-tp"
order: 1.1
parent: "ch01-html-css"
children: []
role: "fondamentaux-web"
description: "3 travaux pratiques courts et denses pour maîtriser rapidement HTML & CSS"
modalityType: "tp"
projectReference:
  repo: "https://github.com/example/fondamentaux-web-projects"
  branch_start: "ch01-tp-start"
  branch_end: "ch01-tp-end"
duration: "4-6 heures"
difficulty: "beginner"
---

# Chapitre 1-TP — Voie intensive (HTML & CSS)

## Contexte

Tu as validé la théorie ? Parfait ! Maintenant, tu vas mettre en pratique en **3 TPs courts mais denses**.

Chaque TP se complète en **1-2 heures** et compile une compétence spécifique :
- **TP 1** : Structure HTML sémantique + mise en forme basique
- **TP 2** : Flexbox et alignement moderne
- **TP 3** : Responsive design avec media queries

**Durée totale** : 4-6 heures  
**Modalité** : Travail individuel, code à soumettre

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
  ├── style.css
  └── README.md (courte description)
```

### Critères d'évaluation

- [ ] Document HTML valide (pas d'erreur avec validator.w3.org)
- [ ] Tous les éléments sémantiques utilisés correctement
- [ ] Meta viewport présent
- [ ] Contenu réel (pas de Lorem Ipsum)
- [ ] CSS appliqué (au minimum : couleurs, typographie)

### Ressources

- [W3C HTML Validator](https://validator.w3.org/)
- [MDN HTML Sémantique](https://developer.mozilla.org/fr/docs/Glossary/Semantics)

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
- [ ] Pas de débordement de contenu (`overflow: hidden`)
- [ ] Code CSS bien formaté et commenté

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

---

## Évaluation finale du TP

Une fois les 3 TPs complétés, tu devras soumettre :

1. **Repo ou archive** avec tous les fichiers
2. **Lien vers la démo en ligne** (ou instructions pour la lancer localement)
3. **Checklist de validation** (critères ci-dessus cochés)

### Notation

- TP 1 : /3 (sémantique + validité)
- TP 2 : /3 (flexbox + alignment)
- TP 3 : /4 (responsive + media queries)
- **Total : /10**

**Seuil de réussite : 7/10**

---

## Prochaine étape

Une fois cette voie complétée, tu rejoins la suite du parcours : **Chapitre 2 — JavaScript Essentiel**.
