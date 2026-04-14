---
title: "Partie 1 — Fondamentaux et document HTML"
description: "Rôle du HTML, fonctionnement du Web, squelette d’un document HTML5 et métadonnées essentielles"
slug: "p01-fondamentaux-document"
parent: "ch01-html"
role: "fondamentaux-web"
order: 1
type: "part-theory"
estimatedTheoryMinutes: 20
---

# Partie 1 — Fondamentaux et document HTML

## Langage de balisage

**HTML** (*HyperText Markup Language*) est un **langage à balises** : tu décris la **structure** et le **sens** du contenu avec des **éléments** (`<p>`, `<article>`, etc.), pas son apparence visuelle. La présentation est gérée par **CSS** (chapitre 2).

## Comment le Web fonctionne (aperçu)

- **HTTP** : protocole d’échange entre le **navigateur** et un **serveur** qui héberge les fichiers.
- **DNS** : système qui associe un **nom de domaine** (ex. `example.com`) à l’adresse du serveur.
- **Hébergement** : machine qui sert tes fichiers HTML/CSS/JS au monde.
- **Navigateur** : interprète le HTML, applique le CSS, exécute le JavaScript.

Ce schéma suffit pour situer le HTML : c’est le format standard des **documents** que le navigateur affiche.

## Squelette minimal HTML5

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre de la page</title>
    <!-- Les feuilles de style CSS sont vues au chapitre 2 -->
  </head>
  <body>
    <p>Contenu visible.</p>
  </body>
</html>
```

### `DOCTYPE`

`<!DOCTYPE html>` indique le mode **HTML5**. Il doit apparaître en **première ligne** du fichier.

### Éléments `html`, `head`, `body`

- `<html>` : racine du document ; l’attribut **`lang`** précise la langue du contenu (accessibilité, SEO, hyphenation).
- `<head>` : métadonnées et liens vers ressources **non visibles** directement (titre, encodage, etc.).
- `<body>` : tout le contenu **affiché** à l’écran.

### `meta charset`

`<meta charset="UTF-8">` déclare l’**encodage** des caractères. Place-le **dans les premières lignes** du `<head>` pour éviter des problèmes d’affichage (accents, emojis).

### `meta viewport`

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Indispensable pour que les **media queries** et le rendu mobile soient cohérents ; le détail du responsive est au chapitre CSS, mais la balise se place **dès le HTML**.

### `title`

Le `<title>` apparaît dans l’onglet du navigateur et dans les **résultats de recherche**. Il doit être **clair et unique** par page.

### Commentaires HTML

```html
<!-- Ceci est ignoré par le navigateur mais visible dans le code source -->
```

Utile pour les repères d’équipe ; évite d’y mettre des secrets (le code client est toujours lisible).

### Insensibilité à la casse et balises

Les **noms de balises** sont en pratique **insensibles à la casse** (`<P>` et `<p>`), mais la **convention** est le **minuscules** pour la lisibilité et les outils.

### Espaces et retours à la ligne

Le navigateur **réduit** les espaces multiples et les sauts de ligne en **un seul espace** dans le flux du texte (sauf dans certaines balises comme `<pre>`). La mise en forme fine se fait plutôt en CSS.

---

## En résumé

Tu sais maintenant structurer un **document HTML5 valide** avec les métadonnées indispensables. La suite : texte, titres et liens dans la **partie 2**.
