---
title: "Partie 8 — Grid"
description: "Grilles explicites, pistes, gap et placement d’items"
slug: "p08-grid"
parent: "ch02-css"
role: "fondamentaux-web"
order: 8
type: "part-theory"
estimatedTheoryMinutes: 20
---

# Partie 8 — Grid

**CSS Grid** contrôle **lignes et colonnes** simultanément : dashboards, galeries, layouts page entière.

## Conteneur

```css
.layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  gap: 1.5rem;
}
```

- **`fr`** : fraction de l’espace **libre** restant.
- **`repeat()`**, **`minmax()`** : grilles fluides et robustes.

## Placement

```css
.span-2 {
  grid-column: span 2;
}
.sidebar {
  grid-row: 1 / -1;
}
```

Les lignes nommées, `grid-template-areas` (déclaration de zones) et l’**auto-placement** couvrent des cas avancés.

## Grid vs Flex

- **Flex** : une dimension dominante, wrapping possible.
- **Grid** : deux dimensions, alignements sur **les deux axes** en même temps.

---

## En résumé

Tu structures des **grilles lisibles** sans frameworks ; combine Grid pour la **macro** mise en page et Flex pour des **micro** alignements à l’intérieur des cellules.
