---
title: "Évaluation — CH01-TP"
slug: "ch01-tp-evaluation"
parent: "ch01-tp"
evaluationType: "auto"
---

# Évaluation — Chapitre 1-TP

## Checklist d'auto-évaluation

Avant de soumettre, vérifie tous ces points :

### TP 1 — Structure HTML

- [ ] Document valide sur https://validator.w3.org/ (0 erreur)
- [ ] `<header>` avec titre et navigation
- [ ] `<main>` contenant le contenu principal
- [ ] `<section>` pour regrouper les contenus thématiques
- [ ] `<article>` pour chaque projet dans la galerie
- [ ] `<footer>` avec liens ou info de contact
- [ ] Meta viewport présent : `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- [ ] Contenu réel (pas de Lorem Ipsum générique)

**Score TP 1** : ___ / 3

---

### TP 2 — Flexbox

- [ ] Navigation avec `display: flex` + `justify-content: space-between` ou similaire
- [ ] Galerie de projets avec flexbox (2 colonnes visibles)
- [ ] Section "À propos" : photo + texte alignés horizontalement avec flexbox
- [ ] Utilisation de `gap` pour espacer les éléments
- [ ] Pas de débordement (`overflow` géré ou pas nécessaire)
- [ ] Au moins 3 conteneurs avec `display: flex`
- [ ] CSS bien formaté, indentation cohérente

**Score TP 2** : ___ / 3

---

### TP 3 — Responsive

- [ ] CSS mobile-first (de base, pas de breakpoint)
- [ ] Media query `@media (min-width: 600px)` appliquée
- [ ] Media query `@media (min-width: 1200px)` appliquée
- [ ] Testé en mode responsive sur Chrome DevTools
- [ ] Mobile (< 600px) : 1 colonne, lisible
- [ ] Tablette (600-1200px) : 2 colonnes galerie
- [ ] Desktop (>= 1200px) : layout optimisé
- [ ] Fonts et espacements ajustés par breakpoint

**Score TP 3** : ___ / 4

---

## Soumission

### Format

Soumet :

1. **Fichiers source** :
   ```
   tp1-portfolio/
     ├── index.html
     ├── style.css
     └── README.md
   ```

2. **Lien de démo** (si possible) ou instructions pour lancer localement

3. **Cette checklist complétée** (PDF ou texte)

### Mode de soumission

- [ ] Push sur repo (si disponible)
- [ ] Upload fichiers + checklist
- [ ] Lien public vers démo (GitHub Pages, Vercel, etc.)

---

## Feedback automatisé (si applicable)

Si un **validateur automatique** est disponible :
- W3C HTML Validator (https://validator.w3.org/)
- CSS Lint (vérifier syntaxe)
- Lighthouse (accessibilité, perf)

Capture les rapports et joins-les à la soumission.

---

## Score final

**Somme** : TP 1 + TP 2 + TP 3 = ____ / 10

**Réussi** ✅ si >= 7/10  
**À retravailler** ⚠️ si < 7/10
