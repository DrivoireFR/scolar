---
title: "Partie 1 — Introduction et cascade"
description: "Trois façons d’appliquer le CSS, ordre de cascade, syntaxe, unités et fonctions"
slug: "p01-introduction-cascade"
parent: "ch02-css"
role: "fondamentaux-web"
order: 1
type: "part-theory"
estimatedTheoryMinutes: 20
---

# Partie 1 — Introduction et cascade

## Trois origines des styles

1. **Inline** : `style="color:red"` sur l’élément — prioritaire mais peu maintenable.
2. **Interne** : balise `<style>` dans le `head` — utile pour des prototypes.
3. **Externe** : fichier `.css` lié avec `<link rel="stylesheet" href="...">` — **recommandé** pour les projets réels.

## Règle CSS

Une **règle** = **sélecteur** + bloc de **déclarations** `{ propriété: valeur; }`.

```css
.selector {
  color: #222;
  font-size: 1rem;
}
```

## Cascade

Quand plusieurs règles ciblent le même élément, le navigateur combine **origine**, **importance** (`!important` — à utiliser rarement), **spécificité** (partie 2) et **ordre d’apparition** (la dernière gagne à spécificité égale).

## Commentaires

```css
/* Commentaire sur une ou plusieurs lignes */
```

## Unités courantes

- **Absolues** : `px` (pixels CSS).
- **Relatives au parent** : `%`, `em` (taille de police du parent pour les propriétés typographiques).
- **`rem`** : relatif à la **taille racine** (`html`) — pratique pour des échelles cohérentes.
- **Viewport** : `vw`, `vh`, `vmin`, `vmax`.

## Fonctions

Exemples : `calc(100% - 2rem)`, `min()`, `max()`, `clamp()` — très utiles pour le responsive (approfondi en partie 9).

---

## En résumé

Tu relies HTML et CSS proprement, tu comprends la **syntaxe** et les **bases de la cascade** avant d’affiner les sélecteurs.
