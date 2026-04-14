---
title: "Partie 12 — Images, filtres et listes"
description: "object-fit, filtres CSS et style des listes"
slug: "p12-images-filtres-listes"
parent: "ch02-css"
role: "fondamentaux-web"
order: 12
type: "part-theory"
estimatedTheoryMinutes: 16
---

# Partie 12 — Images, filtres et listes

## Images remplissant un cadre : `object-fit`

Pour `<img>` ou `<video>` dans une boîte dimensionnée :

```css
.thumb {
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
}
```

`contain`, `cover`, `fill`, `none` — choisis selon que tu acceptes du **recadrage** ou des **bandes**.

## Filtres : `filter`

```css
.soft {
  filter: brightness(1.05) contrast(0.95) blur(0);
}
```

Effets puissants mais coûteux ; à modérer sur mobile.

## Listes : `list-style`

Contrôle puces, numéros, position (`inside` / `outside`). Pour des designs custom, on combine souvent `list-style: none` + **flex/grid** sur les items.

---

## En résumé

Tu maîtrises le **cadrage média** et des **effets** sans dépendre d’outils externes pour les cas simples.
