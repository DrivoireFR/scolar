# Règles de création de modules (formations)

Ce document résume la **hiérarchie de contenu** et les **règles rédactionnelles** pour les parcours sous `content/formations/`. Le détail procédural (brief, cycles E0–E5) est dans [conception/mode-operatoire-creation-trame.md](conception/mode-operatoire-creation-trame.md).

## Hiérarchie

1. **Rôle** (slug stable, ex. `fondamentaux-web`) — métadonnées de parcours sur le premier chapitre `index.md` (`formationTitle`, `formationDescription`, etc.).
2. **Chapitre** — dossier `content/formations/<role>/<chapitre>/` avec un `index.md` en `type: theory` (hub : objectifs, liens vers les parties). Ce fichier est le seul `theory` **hors** `parties/` pour apparaître dans la liste des chapitres du parcours.
3. **Partie** — sous-dossiers `parties/<part-slug>/` dans un chapitre. Chaque partie contient typiquement :
   - `index.md` avec `type: part-theory`, `order`, `estimatedTheoryMinutes` ;
   - `quiz-validation.json` (même schéma que les quiz existants) ;
   - `modalites.md` (cartes `modalityCards` vers la suite ou vers des **modalités** TP/projet).
4. **Modalité** — page feuille de pratique (ex. `modalite-tp.md`, `modalite-projet.md`) **sous la partie** concernée, ou exceptionnellement à la racine du chapitre (ex. `evaluation.md` pour la clôture).

Chemins d’URL alignés sur Nuxt Content :  
`/formations/<role>/<chapitre>/parties/<part-slug>` pour la page Partie ;  
`/formations/<role>/<chapitre>/parties/<part-slug>/<fichier-sans-md>` pour une modalité sous partie ;  
`/formations/<role>/<chapitre>/evaluation` pour l’évaluation de fin de chapitre.

## Enchaînement pédagogique

Pour chaque **Partie** : **théorie** (courte) → **quiz** → **modalités** (cartes + texte) → Partie suivante ou **évaluation** du chapitre.

## Règle de durée (théorie)

Viser **au plus ~20 minutes** de lecture ou d’équivalent pour la théorie d’**une** Partie (`estimatedTheoryMinutes` dans le frontmatter). Cela favorise l’alternance théorie / pratique et évite les blocs trop longs.

## Vocabulaire

- **Partie** : unité avec hub sur une page dédiée (théorie + quiz + bloc modalités sur la même page).
- **Modalité** : parcours pratique concret (TP, projet, etc.), matérialisé par un fichier dédié ; ne pas confondre avec l’ancienne terminologie « section » pour ces feuilles.
