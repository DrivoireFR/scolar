---
title: "Partie 6 — Formulaires"
description: "Créer des formulaires accessibles avec validation HTML5"
slug: "p06-formulaires"
parent: "ch01-html"
role: "fondamentaux-web"
order: 6
type: "part-theory"
estimatedTheoryMinutes: 20
---

# Partie 6 — Formulaires

## Structure `form`

```html
<form action="/inscription" method="post" novalidate>
  <!-- champs -->
</form>
```

- **`action`** : URL de traitement (côté serveur — hors scope ici).
- **`method`** : souvent `get` (paramètres dans l’URL) ou `post` (corps de requête).
- **`novalidate`** : désactive la validation **native** du navigateur (rare ; utile si tu gères tout en JS avec tests précis).

## Label et association

Chaque champ doit avoir un **intitulé** associé :

```html
<label for="email">Adresse e-mail</label>
<input id="email" name="email" type="email" autocomplete="email" required>
```

- **`for` / `id`** : association explicite (clic sur le label focus le champ).
- On peut aussi envelopper le champ dans `<label>` sans `for` si un seul contrôle est dedans.

## Champs courants

- `input` avec `type` : `text`, `email`, `url`, `tel`, `number`, `date`, `checkbox`, `radio`, `file`, `hidden`, `password`, etc.
- `textarea` : texte multiligne.
- `select` + `option` (+ `optgroup`) : liste déroulante.
- `button` ou `input type="submit"` : soumission.

## Groupes `fieldset` / `legend`

Pour regrouper des champs liés (adresse, options) avec un titre accessible :

```html
<fieldset>
  <legend>Mode de livraison</legend>
  <!-- radios -->
</fieldset>
```

## Validation native

Attributs utiles :

- `required`, `min`, `max`, `step`, `maxlength`, `pattern` (regex),
- `type="email"` / `url` : formats basiques.

La **validation HTML** est une première ligne de défense ; le **serveur** doit toujours revérifier les données.

## Upload `input type="file"`

```html
<input type="file" name="cv" accept=".pdf,application/pdf">
```

- **`accept`** : filtre d’extension ou MIME (indication pour l’UI, pas une sécurité serveur).
- Limites : taille max, types réels contrôlés **côté serveur** ; ne jamais faire confiance au client seul.

---

## En résumé

Un formulaire propre = **labels**, types adaptés, **groupes** clairs et validation cohérente — base indispensable avant le style (chapitre 2) et l’interactivité avancée (JavaScript).
