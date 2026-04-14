---
title: "Partie 13 — Bonnes pratiques, perf et accessibilité visuelle"
description: "Organisation du CSS, performance, contrastes, focus et reduced-motion"
slug: "p13-bonnes-pratiques"
parent: "ch02-css"
role: "fondamentaux-web"
order: 13
type: "part-theory"
estimatedTheoryMinutes: 18
---

# Partie 13 — Bonnes pratiques, perf et accessibilité visuelle

## Organisation

- **Composants** ou couches (tokens, layout, utilities) plutôt qu’un fichier géant.
- **Nommage** cohérent (BEM, utility-first, etc.) — l’important est l’**équipe** et la **lisibilité**.

## Performance

- Évite les sélecteurs **trop coûteux** en profondeur sur de gros DOM.
- **Limite** les ombres et filtres sur de grandes surfaces animées.
- **Fonts** : sous-ensembles (subset), formats modernes (WOFF2), `font-display: swap` ou `optional` selon stratégie.

## Accessibilité visuelle

- **Contrastes** : vise AA minimum pour le texte courant.
- **Focus visible** : ne supprime pas `outline` sans alternative (`:focus-visible` + style clair).
- **`prefers-reduced-motion`** : raccourcis ou désactivation des animations non essentielles.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

(adapte pour ne pas casser les transitions indispensables — pattern à affiner par composant)

---

## En résumé

Un CSS **professionnel** est maintenable, **performant** et **respectueux** des utilisateurs ; la Partie 14 te fait appliquer tout cela sur le fil rouge.
