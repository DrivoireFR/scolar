---
title: "Partie 3 — Typographie et couleurs"
description: "Familles de polices, tailles, graisses, raccourci font, couleurs et transparence"
slug: "p03-typographie-couleurs"
parent: "ch02-css"
role: "fondamentaux-web"
order: 3
type: "part-theory"
estimatedTheoryMinutes: 20
---

# Partie 3 — Typographie et couleurs

## Familles : `font-family`

Liste de polices par **ordre de préférence**, se terminant par une **famille générique** (`sans-serif`, `serif`, `monospace`).

```css
body {
  font-family: "Inter", system-ui, sans-serif;
}
```

## Taille : `font-size`

Utilise `rem` pour une échelle **cohérente** avec la racine, ou `clamp()` pour du fluide (partie 9).

## Graisse et style : `font-weight`, `font-style`

- `font-weight` : `400` (normal), `700` (gras), valeurs numériques selon la police.
- `font-style` : `italic`, `normal`.

## Raccourci `font`

```css
.short {
  font: italic 700 1.125rem/1.6 "Inter", sans-serif;
}
```

Ordre usuel : `style weight size/line-height family`. Vérifie la **syntaxe** sur MDN si tu mixes plusieurs propriétés.

## Polices web

- **Hébergement** : fichiers `@font-face` (WOFF2 recommandé).
- **Fournisseurs** (Google Fonts, etc.) : une balise `<link>` ou `@import` dans le CSS — attention au **poids** et à la **vie privée** (self-host souvent préférable en production).

## Couleurs

- **Hex** : `#rrggbb`, `#rgb` court.
- **`rgb` / `rgba`** : canaux 0–255 ; alpha entre 0 et 1 pour `rgba`.
- **`hsl` / `hsla`** : teinte, saturation, lumière — intuitif pour des **palettes**.

```css
:root {
  --text: hsl(220 15% 15%);
  --brand: rgb(59 130 246 / 0.9);
}
```

Pense **contraste** texte/fond (WCAG) : outils de vérification dans les DevTools.

---

## En résumé

Tu maîtrises les bases pour rendre le texte **lisible**, **cohérent** et **accessible** avant d’attaquer fonds et espacements.
