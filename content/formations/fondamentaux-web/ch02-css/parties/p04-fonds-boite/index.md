---
title: "Partie 4 — Fonds et boîte"
description: "Arrière-plans, dégradés, padding, bordures, marges, ombres et dimensions"
slug: "p04-fonds-boite"
parent: "ch02-css"
role: "fondamentaux-web"
order: 4
type: "part-theory"
estimatedTheoryMinutes: 20
---

# Partie 4 — Fonds et boîte

## Arrière-plan

- `background-color` : couleur unie.
- `background-image` : `url(...)` ou dégradés `linear-gradient()`, `radial-gradient()`.
- `background-size`, `background-position`, `background-repeat` pour contrôler le **cadrage**.

```css
.hero {
  background: linear-gradient(120deg, #1e3a8a, #3b82f6);
}
```

## Boîte : `padding`, `border`, `margin`

- **Padding** : intérieur de la boîte.
- **Border** : `border: 1px solid #ccc` ou côtés séparés.
- **Margin** : extérieur ; les **marges adjacentes** peuvent **fusionner** (collapse) entre blocs — comportement à connaître pour le debug.

## `box-shadow`

Ombre portée : décalages, flou, étalement, couleur. Pour le **focus** accessible, préfère souvent `outline` ou `box-shadow` dédié sur `:focus-visible` (partie 13).

## `outline`

Contour **hors** du flux de boîte, utile pour les **états focus** sans décaler le layout comme `border` peut le faire.

## `width` et `height`

Fixent les dimensions ; avec le **box-sizing** (partie 5), `width: 100%` + `padding` se comporte plus intuitivement si `box-sizing: border-box` sur les éléments concernés.

---

## En résumé

Tu peux habiller les surfaces et maîtriser l’**espace intérieur / extérieur** avant d’étudier `display` et le flux.
