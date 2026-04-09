---
title: "Chapitre 1 — HTML & CSS Fondamentaux"
slug: "ch01-html-css"
order: 1
parent: null
children: []
role: "fondamentaux-web"
description: "Maîtriser les fondamentaux du web : structure HTML, mise en forme CSS, et responsive design"
type: "theory"
---

# Chapitre 1 — HTML & CSS Fondamentaux

## Objectifs pédagogiques

À la fin de ce chapitre, tu sauras :

- Structurer un document HTML5 sémantique
- Styler avec CSS3 (propriétés essentielles, flexbox, grid)
- Créer un design responsive (media queries, mobile-first)
- Déboguer avec les outils développeur

---

## 1. Structure HTML5

HTML signifie **HyperText Markup Language**. C'est le langage qui donne du sens et de la structure à un document web.

### Anatomie d'un document HTML

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon premier site</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <h1>Bienvenue</h1>
    </header>
    <main>
      <article>
        <h2>Article 1</h2>
        <p>Contenu de l'article</p>
      </article>
    </main>
    <footer>
      <p>&copy; 2026</p>
    </footer>
  </body>
</html>
```

**Points clés :**
- `<!DOCTYPE html>` : déclare la version HTML
- `<head>` : métadonnées (charset, viewport, titre, ressources)
- `<body>` : contenu visible
- **Sémantique** : utiliser `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` plutôt que des `<div>` génériques

### Éléments sémantiques courants

| Élément | Sens |
|---------|------|
| `<header>` | En-tête de page ou de section |
| `<nav>` | Barre de navigation |
| `<main>` | Contenu principal (une seule par page) |
| `<article>` | Contenu indépendant et complet |
| `<section>` | Regroupement thématique |
| `<footer>` | Pied de page |
| `<aside>` | Contenu latéral, non essentiel |

---

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

---

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
