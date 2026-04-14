---
title: "Partie 2 — Texte, liens et conteneurs"
description: "Titres, paragraphes, emphase, liens et conteneurs génériques"
slug: "p02-texte-liens-conteneurs"
parent: "ch01-html"
role: "fondamentaux-web"
order: 2
type: "part-theory"
estimatedTheoryMinutes: 20
---

# Partie 2 — Texte, liens et conteneurs

## Titres : `h1` à `h6`

Les titres structurent le document en **six niveaux**. Il ne doit y avoir **qu’un seul `h1`** typiquement par page (titre principal). La hiérarchie doit être **logique** (pas de saut `h1` → `h4` sans raison) : important pour l’accessibilité et le SEO.

## Paragraphe `p`

Le paragraphe regroupe du **texte courant**. C’est l’unité de base du corps de texte.

## Saut de ligne `br` et séparation `hr`

- `<br>` : **saut de ligne** à l’intérieur d’un même bloc (à utiliser avec parcimonie ; souvent le CSS gère l’espacement).
- `<hr>` : **séparation thématique** entre blocs de contenu (sémantique de rupture, pas seulement une ligne décorative — la décoration relève du CSS).

## Emphase forte : `strong` et `b`

- `<strong>` : importance **sémantique** forte (accessibilité : mise en avant du sens).
- `<b>` : mise en évidence **sans changer le sens** (style par défaut gras ; préfère `strong` pour le sens).

## Emphase modérée : `em` et `i`

- `<em>` : **emphase** sémantique (stress linguistique).
- `<i>` : texte sur un **ton différent** (termes étrangers, noms sans emphase sémantique forte) — ne remplace pas toujours `em`.

## `mark`

Surligne du texte **pertinent ou référencé** dans un autre contexte (ex. résultat de recherche).

## Exposants et indices : `sup` / `sub`

- `<sup>` : exposant (ex. puissance, note de référence).
- `<sub>` : indice (ex. formule chimique).

## Texte préformaté `pre`

Préserve **espaces et retours à la ligne** ; souvent utilisé avec `<code>` pour des extraits de code.

## Liens `a`

```html
<a href="https://example.com" rel="noopener noreferrer" target="_blank">Site</a>
```

- `href` : URL absolue ou relative, ancres `#section`.
- `target="_blank"` : nouvel onglet ; combine avec `rel="noopener noreferrer"` pour la sécurité et la vie privée.
- Le **texte du lien** doit être explicite (« en savoir plus sur… » plutôt que « cliquez ici » seul).

## Conteneurs `div` et `span`

- `<div>` : conteneur **bloc** générique ; sans sémantique propre — à utiliser quand aucun élément sémantique ne convient.
- `<span>` : conteneur **en ligne** générique pour regrouper du texte ou marquer un fragment sans changer le flux.

Évite la « divitis » : préfère `section`, `article`, `header`, etc. quand c’est pertinent (partie 4).

---

## En résumé

Tu peux structurer le texte, marquer l’emphase, créer des liens accessibles et regrouper avec `div` / `span` en attendant le chapitre CSS pour la mise en page fine.
