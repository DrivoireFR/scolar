---
title: "Partie 7 — Flexbox"
description: "Conteneur flex, axes, alignements, gap et flex items"
slug: "p07-flexbox"
parent: "ch02-css"
role: "fondamentaux-web"
order: 7
type: "part-theory"
estimatedTheoryMinutes: 20
---

# Partie 7 — Flexbox

**Flexbox** organise des éléments sur **un axe principal** (ligne ou colonne). Idéal pour barres d’outils, centrage, distributions d’espace.

## Conteneur

```css
.container {
  display: flex;
  flex-direction: row; /* ou column */
  flex-wrap: wrap;
  justify-content: space-between; /* axe principal */
  align-items: center; /* axe secondaire */
  gap: 1rem;
}
```

- **`justify-content`** : répartition le long de l’**axe principal**.
- **`align-items`** : alignement sur l’**axe secondaire** (une ligne).
- **`align-content`** : utile quand **plusieurs lignes** (`flex-wrap`).

## Items

```css
.item {
  flex: 1 1 200px; /* grow shrink basis */
  min-width: 0; /* évite débordement texte dans flex */
}
```

- **`flex-grow`** : part de l’espace libre.
- **`flex-shrink`** : capacité à rétrécir.
- **`flex-basis`** : taille de départ.

---

## En résumé

Flexbox résout la majorité des **layouts à une dimension** sans hacks ; pour des grilles 2D explicites, enchaîne avec **Grid** (partie 8).
