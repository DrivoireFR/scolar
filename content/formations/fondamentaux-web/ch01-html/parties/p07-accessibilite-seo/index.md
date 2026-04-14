---
title: "Partie 7 — Accessibilité et SEO (bases)"
description: "Hiérarchie, textes alternatifs, repères et introduction au référencement technique"
slug: "p07-accessibilite-seo"
parent: "ch01-html"
role: "fondamentaux-web"
order: 7
type: "part-theory"
estimatedTheoryMinutes: 18
---

# Partie 7 — Accessibilité et SEO (bases)

## Hiérarchie des titres

Une suite logique de `h1` → `h2` → `h3` aide à **naviguer au clavier** et avec un lecteur d’écran. Évite les sauts arbitraires et les multiples `h1` sans besoin réel.

## Textes alternatifs

Les images informatives ont un **`alt` descriptif**. Les décoratives : `alt=""`. Ne répète pas le même texte que le titre adjacent si c’est redondant pour l’utilisateur (ajuste selon le contexte).

## Repères (landmarks)

`header`, `nav`, `main`, `footer`, `aside`, `section` et `article` créent une **carte** de la page. Un `main` unique reste la règle la plus importante à retenir ici.

## Liens et boutons

- Texte de lien **explicite** (« Consulter la fiche produit X » plutôt que « cliquez ici »).
- Ne détourne pas une balise interactive de son rôle (un `a` doit naviguer ; un `button` déclenche une action — le style viendra au chapitre CSS).

## SEO technique (très bref)

- **`title`** unique et fidèle au contenu.
- **Métadonnées** utiles : `meta name="description"` (résumé pour les résultats — pas un facteur de ranking magique, mais influence le snippet).
- **Données structurées** (JSON-LD, etc.) : hors scope de cette partie ; à explorer plus tard.
- Contenu sémantique et **performant** (Core Web Vitals) : HTML propre + CSS/JS maîtrisés au fil du parcours.

## `lang` et encodage

Rappel : `lang` sur `<html>` + `charset UTF-8` — base pour accessibilité, typographie et indexation correcte des caractères.

---

## En résumé

Le HTML **bien structuré** sert à la fois les **personnes** et les **moteurs**. Tu es prêt·e pour l’**évaluation du chapitre 1**, puis le **chapitre CSS**.
