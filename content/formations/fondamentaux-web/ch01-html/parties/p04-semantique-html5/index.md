---
title: "Partie 4 — Sémantique HTML5"
description: "Landmarks et regroupements de contenu : header, nav, main, article, section, aside, footer"
slug: "p04-semantique-html5"
parent: "ch01-html"
role: "fondamentaux-web"
order: 4
type: "part-theory"
estimatedTheoryMinutes: 18
---

# Partie 4 — Sémantique HTML5

## Pourquoi la sémantique ?

Les éléments **sémantiques** décrivent le **rôle** d’une zone de contenu. Cela améliore :

- l’**accessibilité** (navigation par landmarks pour les technologies d’assistance) ;
- le **SEO** (moteurs comprennent mieux la page) ;
- la **maintenance** (code plus lisible qu’une mer de `<div>`).

## `header`

En-tête de **page entière** ou d’une **section** : titre, logo, parfois barre de recherche. Il peut y avoir plusieurs `header` (ex. par section).

## `nav`

Regroupe les **liens de navigation principaux** (menus). Tous les liens de la page ne doivent pas forcément être dans un seul `nav` ; vise les **parcours** importants.

## `main`

Contenu **principal unique** de la page : une seule balise `<main>` par document (sauf cas techniques d’iframes). Ne mets pas dedans ce qui est répété partout (barre latérale globale, pied global) si ce n’est pas le cœur de la page.

## `article`

Contenu **autonome** qui pourrait être syndiqué ou réutilisé (article de blog, carte produit, commentaire). Un `article` peut contenir son propre `header` / `footer`.

## `section`

Regroupement **thématique** du contenu avec en général un **titre** (`h1`–`h6`). À différencier d’un `div` générique : une `section` doit avoir une **identité thématique** claire.

## `aside`

Contenu **complémentaire** par rapport au contenu adjacent (encadré, liens connexes, glossaire). Pas « n’importe quelle colonne » : le lien avec le contenu principal doit être clair.

## `footer`

Pied de page de la page ou d’une section : métadonnées, liens légaux, copyright. Plusieurs `footer` possibles.

## `div` vs sémantique

`<div>` reste valide pour regrouper **sans** rôle sémantique précis ou pour faciliter le **styling** (chapitre CSS). La règle : **choisis l’élément le plus précis** (`article`, `section`, etc.) avant de retomber sur `div`.

---

## En résumé

Tu peux structurer une page comme une **hiérarchie de landmarks** compréhensible par les humains, les robots et les outils d’assistance.
