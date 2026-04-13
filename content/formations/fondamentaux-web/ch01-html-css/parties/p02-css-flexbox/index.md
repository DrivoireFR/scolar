---
title: "Partie 2 — CSS et Flexbox"
description: "Sélecteurs, propriétés essentielles et mise en page avec Flexbox"
slug: "p02-css-flexbox"
parent: "ch01-html-css"
role: "fondamentaux-web"
order: 2
type: "part-theory"
estimatedTheoryMinutes: 20
---

# Partie 2 — CSS et Flexbox

## 2. CSS : mise en forme

CSS signifie **Cascading Style Sheets**. Il permet de contrôler l'apparence (couleurs, espacements, layouts) sans modifier la structure HTML.

### Sélecteurs de base

```css
/* Sélecteur d'élément */
h1 { color: blue; }

/* Classe (commence par .) */
.btn-primary { background-color: #007bff; }

/* ID (commence par #) — utiliser avec parcimonie */
#main-title { font-size: 2.5rem; }

/* Sélecteur multiple */
h1, h2, h3 { font-family: sans-serif; }

/* Sélecteur descendant */
nav a { text-decoration: none; }
```

### Propriétés essentielles

**Texte et couleurs :**
```css
color: #333;              /* Couleur du texte */
background-color: white;  /* Couleur de fond */
font-size: 16px;
font-weight: bold;
text-align: center;
```

**Espacement :**
```css
margin: 20px;             /* Espacement extérieur */
padding: 10px;            /* Espacement intérieur */
border: 1px solid #ccc;   /* Bordure */
```

---

## 3. Flexbox : layouts modernes

**Flexbox** est un système de mise en page en une dimension (lignes ou colonnes) qui simplifie l'alignement et la distribution d'espace.

```css
.container {
  display: flex;           /* Active flexbox */
  flex-direction: row;     /* row (défaut) ou column */
  justify-content: space-between;  /* Aligne horizontalement */
  align-items: center;     /* Aligne verticalement */
  gap: 20px;              /* Espacement entre éléments */
}

.item {
  flex: 1;                 /* Croît pour remplir l'espace */
  min-width: 0;            /* Évite le débordement */
}
```

**Valeurs courantes pour `justify-content` :**
- `flex-start` : aligné à gauche
- `center` : centré
- `space-between` : espace égal entre les éléments
- `space-around` : espace égal autour des éléments
