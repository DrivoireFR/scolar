---
title: "Partie 9 — Responsive"
description: "Media queries, container queries, typo fluide et rappel viewport"
slug: "p09-responsive"
parent: "ch02-css"
role: "fondamentaux-web"
order: 9
type: "part-theory"
estimatedTheoryMinutes: 20
---

# Partie 9 — Responsive

## Viewport (rappel HTML)

Sans la meta viewport correcte dans le **chapitre HTML**, les media queries mobiles ne reflètent pas la réalité des appareils. Vérifie :

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Media queries

```css
/* Mobile first : base = petit écran */
.card-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Container queries

Quand un composant doit réagir à **la largeur de son parent** (pas seulement du viewport), utilise `@container` :

```css
.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card__body {
    display: flex;
  }
}
```

Support navigateurs à vérifier selon ta cible ; pattern puissant pour des **composants réutilisables**.

## Typo fluide

`clamp(min, préféré, max)` pour des tailles qui **glissent** entre deux bornes sans multiplier les breakpoints.

---

## En résumé

Tu adaptes l’UI au **viewport** et, quand c’est pertinent, au **conteneur**, en restant **mobile-first** ou en documentant ton approche.
