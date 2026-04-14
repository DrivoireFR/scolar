---
title: "Partie 2 — Sélecteurs et spécificité"
description: "Sélecteurs simples, combinateurs, pseudo-classes, pseudo-éléments, attributs, calcul de spécificité"
slug: "p02-selecteurs-specificite"
parent: "ch02-css"
role: "fondamentaux-web"
order: 2
type: "part-theory"
estimatedTheoryMinutes: 20
---

# Partie 2 — Sélecteurs et spécificité

## Sélecteurs simples

- **Élément** : `p { }`
- **Classe** : `.btn { }`
- **ID** : `#app { }` — **une seule occurrence** attendue par page pour un même id ; spécificité très élevée → à utiliser avec parcimonie.

## Groupement

`h1, h2, h3 { font-weight: 600; }` applique la même règle à plusieurs sélecteurs.

## Combinateurs

- **Descendant** : `.card a` (n’importe quel niveau imbriqué).
- **Enfant direct** : `.nav > li`.
- **Voisin direct** : `h2 + p` (premier `p` juste après un `h2`).
- **Voisins suivants** : `h2 ~ p`.

## Pseudo-classes

États ou critères dynamiques : `:hover`, `:focus`, `:focus-visible`, `:disabled`, `:checked`, `:nth-child()`, etc. Essentiels pour l’**accessibilité** (`:focus-visible`).

## Pseudo-éléments

`::before`, `::after`, `::first-line`… créent des **boîtes générées** (souvent avec `content` pour `before/after`).

## Sélecteurs d’attributs

```css
[data-theme="dark"] { }
input[type="email"] { }
```

## Spécificité (rappel)

Ordre usuel : styles inline > id > classes/attributs/pseudo-classes > éléments/pseudo-éléments. À **égalité**, la cascade (ordre + importance) tranche.

Évite les sélecteurs trop longs « pour gagner » : mieux vaut **refactorer** le HTML ou les composants.

---

## En résumé

Tu peux **cibler finement** sans sur-spécifier : pense composants, classes réutilisables et états accessibles.
