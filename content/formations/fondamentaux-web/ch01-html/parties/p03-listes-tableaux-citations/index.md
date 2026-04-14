---
title: "Partie 3 — Listes, tableaux et citations"
description: "Listes ordonnées et non ordonnées, listes de définition, tableaux accessibles, citations"
slug: "p03-listes-tableaux-citations"
parent: "ch01-html"
role: "fondamentaux-web"
order: 3
type: "part-theory"
estimatedTheoryMinutes: 20
---

# Partie 3 — Listes, tableaux et citations

## Listes non ordonnées `ul` / ordonnées `ol`

- `<ul>` : liste à **puces** ; chaque élément est un `<li>`.
- `<ol>` : liste **numérotée** ; l’ordre a du sens (étapes, classement).

### Listes imbriquées

Un `<li>` peut contenir une **nouvelle** `<ul>` ou `<ol>`. Respecte l’**imbrication** pour que les lecteurs d’écran annoncent correctement les niveaux.

## Liste de définitions `dl`

- `<dl>` : liste de **définitions**.
- `<dt>` : terme défini.
- `<dd>` : description associée (plusieurs `<dd>` possibles par `<dt>` selon le contenu).

## Citations

- `<blockquote>` : citation **longue** (bloc), souvent avec source en `cite` ou en paragraphe.
- `<q>` : citation **courte** en ligne ; le navigateur peut ajouter des guillemets.
- `<cite>` : référence au **titre d’une œuvre** ou source (usage sémantique, pas seulement italique).

## Abréviations `abbr`

```html
<abbr title="HyperText Markup Language">HTML</abbr>
```

L’attribut **`title`** donne la forme développée — utile accessibilité et compréhension.

## Adresse `address`

Contient les **coordonnées de contact** liées à la section ou au site (email, adresse postale). À ne pas utiliser pour n’importe quelle adresse géographique sans lien avec le contact.

## Tableaux

Structure type :

```html
<table>
  <caption>Répartition des ventes</caption>
  <thead>
    <tr><th scope="col">Région</th><th scope="col">Montant</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">Nord</th><td>120</td></tr>
  </tbody>
</table>
```

- `<caption>` : titre du tableau (recommandé).
- `<th>` avec `scope="col"` ou `scope="row"` clarifie les en-têtes pour l’accessibilité.
- Pour tableaux complexes, les attributs `headers` / `id` sur cellules peuvent être nécessaires (hors scope de cette partie introductive).

Utilise un tableau **uniquement pour des données tabulaires**, pas pour faire du layout de page (le layout = CSS).

---

## En résumé

Tu peux structurer des listes, citer proprement et poser un tableau **sémantique** et plus lisible pour tous.
