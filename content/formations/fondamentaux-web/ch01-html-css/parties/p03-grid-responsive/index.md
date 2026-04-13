---
title: "Partie 3 — Grid et responsive"
description: "CSS Grid, media queries et adaptation aux écrans"
slug: "p03-grid-responsive"
parent: "ch01-html-css"
role: "fondamentaux-web"
order: 3
type: "part-theory"
estimatedTheoryMinutes: 18
---

# Partie 3 — Grid et responsive

## 4. CSS Grid : layouts bidimensionnels

**Grid** est un système de mise en page en deux dimensions (lignes ET colonnes).

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;  /* 3 colonnes */
  grid-template-rows: auto 1fr auto;   /* En-tête, contenu, pied */
  gap: 20px;                           /* Espacement */
}

.grid-item {
  grid-column: 1 / 3;  /* De colonne 1 à 3 */
  grid-row: 1 / 2;     /* Ligne 1 */
}
```

---

## 5. Responsive Design

Un site **responsive** s'adapte à tous les écrans (mobile, tablet, desktop).

### Viewport meta tag (obligatoire)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Media queries

```css
/* Mobile d'abord (< 600px) */
body { font-size: 14px; }

/* Tablette (>= 600px) */
@media (min-width: 600px) {
  body { font-size: 16px; }
}

/* Desktop (>= 1200px) */
@media (min-width: 1200px) {
  body { font-size: 18px; }
}
```
