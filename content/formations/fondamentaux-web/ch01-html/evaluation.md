---
title: "Évaluation — Chapitre 1 (HTML)"
slug: "ch01-html-evaluation"
parent: "ch01-html"
type: "evaluation"
evaluationType: "auto"
---

# Évaluation — Chapitre 1 (HTML)

## Objectif

Valider que tu maîtrises **la structure et la sémantique HTML** avant d’attaquer le chapitre CSS.

---

## Checklist d’auto-évaluation

### Document et métadonnées

- [ ] `DOCTYPE html` présent en tête de document
- [ ] Attribut `lang` pertinent sur `<html>`
- [ ] `<meta charset="UTF-8">` dans `<head>`
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">` présent (indispensable pour le responsive traité au chapitre 2)
- [ ] `<title>` descriptif et unique

### Structure et sémantique

- [ ] Un seul `<main>` par page
- [ ] Hiérarchie de titres cohérente (`h1` → `h2` → `h3` sans saut illogique)
- [ ] `<header>`, `<nav>`, `<footer>` utilisés là où ils ont du sens
- [ ] Articles / sections distingués correctement (`<article>`, `<section>`)

### Contenu riche

- [ ] Listes (`ul` / `ol` / `dl`) correctement imbriquées si besoin
- [ ] Tableaux : en-têtes `<th>`, structure `thead` / `tbody` si pertinent
- [ ] Images avec `alt` pertinent (ou `alt=""` si décoratif)
- [ ] Liens avec intitulé explicite (pas seulement « cliquez ici »)

### Formulaires

- [ ] Chaque champ identifiable a un `<label>` associé (`for` / `id`)
- [ ] Types d’`input` adaptés (`email`, `url`, etc. quand c’est pertinent)
- [ ] Messages de validation native compris (attributs `required`, `pattern`, etc.)

### Qualité

- [ ] HTML validé (0 erreur) avec le [validateur W3C](https://validator.w3.org/)
- [ ] Aucune balise présentée comme « divitis » sans justification : préférer la sémantique

---

## Notation indicative

Compte **1 point** par bloc ci-dessus entièrement coché (6 blocs + qualité = ajuste selon ta grille). Vise **au moins 80 %** des critères avant de passer au chapitre 2.

---

## Prochaine étape

👉 [Chapitre 2 — CSS](/formations/fondamentaux-web/ch02-css) : mise en forme, layout et responsive.

Le parcours continuera ensuite vers le **chapitre 3 — JavaScript** (à venir dans le contenu).
