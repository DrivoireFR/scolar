---
title: "Partie 5 — Display et flux"
description: "block, inline, inline-block, none, visibility, box-sizing et flux normal"
slug: "p05-display-flux"
parent: "ch02-css"
role: "fondamentaux-web"
order: 5
type: "part-theory"
estimatedTheoryMinutes: 18
---

# Partie 5 — Display et flux

## Valeurs usuelles de `display`

- **`block`** : occupe toute la largeur disponible, commence sur une nouvelle ligne (`div`, `p` par défaut).
- **`inline`** : dans le flux du texte, sans sauter de ligne ; `width`/`height` ignorés (`span`, `a` par défaut).
- **`inline-block`** : en ligne mais boîte dimensionnable (boutons custom, badges).
- **`none`** : l’élément n’est pas rendu **et** n’occupe pas de place (différent de `visibility`).

## `visibility: hidden`

L’élément est **invisible** mais **occupe encore l’espace** (contrairement à `display: none`).

## `box-sizing`

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

Avec **`border-box`**, `width` inclut **padding + border** — comportement souvent plus prévisible pour les layouts.

## Flux normal

Le **normal flow** empile les blocs et enroule le texte inline. Les layouts **flex** et **grid** créent des **contextes de formatage** qui modifient ce flux à l’intérieur du conteneur (parties 7–8).

---

## En résumé

Tu comprends **comment les boîtes se comportent** avant positionnement absolu et mises en page modernes.
