---
title: "Partie 1 — HTML5 et sémantique"
description: "Structure d’un document, balises essentielles et sémantique HTML5"
slug: "p01-html-semantique"
parent: "ch01-html-css"
role: "fondamentaux-web"
order: 1
type: "part-theory"
estimatedTheoryMinutes: 18
---

# Partie 1 — HTML5 et sémantique

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
