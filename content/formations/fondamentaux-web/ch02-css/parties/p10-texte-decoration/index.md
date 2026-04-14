---
title: "Partie 10 — Texte détaillé et décoration"
description: "line-height, alignement, espacements de texte, décorations et transformations de casse"
slug: "p10-texte-decoration"
parent: "ch02-css"
role: "fondamentaux-web"
order: 10
type: "part-theory"
estimatedTheoryMinutes: 18
---

# Partie 10 — Texte détaillé et décoration

## `line-height`

Contrôle l’**interligne**. Souvent entre `1.4` et `1.6` pour le corps de texte. Peut être **sans unité** (facteur de la `font-size`).

## Alignement : `text-align`, `direction`

- `text-align: start | end | center | justify` — `start/end` respectent le sens d’écriture (LTR/RTL).
- `direction: rtl` pour contenus arabes/hébreu avec le bon **marquage HTML** (`dir`).

## Décorations : `text-decoration`, `text-underline-offset`

Soulignements, lignes barrées ; `text-decoration-thickness` et **offset** pour un rendu plus propre.

## Espacement : `letter-spacing`, `word-spacing`

Utilise avec parcimonie ; un `letter-spacing` trop large nuit à la **lisibilité**.

## Casse : `text-transform`

`uppercase`, `capitalize`, etc. — attention à l’**accessibilité** : certains lecteurs d’écran lisent les mots lettre par lettre si mal employé.

---

## En résumé

Tu peux affiner la **lecture** sans sacrifier l’accessibilité ni le sens du contenu.
