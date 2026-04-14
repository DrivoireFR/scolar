---
title: "Partie 6 — Positionnement et empilement"
description: "position, float (héritage), z-index et contextes d’empilement"
slug: "p06-positionnement-empilement"
parent: "ch02-css"
role: "fondamentaux-web"
order: 6
type: "part-theory"
estimatedTheoryMinutes: 20
---

# Partie 6 — Positionnement et empilement

## `position`

- **`static`** : défaut — pas de décalage `top/right/bottom/left`.
- **`relative`** : décalage par rapport à la **position normale** ; conserve l’espace d’origine.
- **`absolute`** : sort du flux ; positionné par rapport à l’**ancêtre positionné** le plus proche (sinon viewport).
- **`fixed`** : ancré au **viewport** (modales, barres — attention mobile / clavier virtuel).
- **`sticky`** : hybride : suit le flux jusqu’à un seuil de scroll puis « colle ».

## `float` (mention)

Historiquement utilisé pour les mises en page ; aujourd’hui **flex/grid** couvrent la plupart des cas. `float` reste pertinent pour **envelopper une image** dans du texte (`float: left` + clearfix si besoin).

## `z-index` et contextes d’empilement

`z-index` n’agit que dans un **contexte d’empilement** (`position` non static, flex/grid items, `opacity` < 1, `transform`, etc.). Des valeurs élevées sans comprendre le **stacking context** mènent à des bugs de superposition.

---

## En résumé

Tu positionnes des éléments **sans casser** le flux quand ce n’est pas nécessaire, et tu comprends les **couches** pour les overlays.
