---
title: "Partie 11 — Transforms, transitions et animations"
description: "transform, transition et @keyframes pour le mouvement"
slug: "p11-transforms-transitions-animations"
parent: "ch02-css"
role: "fondamentaux-web"
order: 11
type: "part-theory"
estimatedTheoryMinutes: 20
---

# Partie 11 — Transforms, transitions et animations

## `transform`

Déplace, fait pivoter, met à l’échelle sans modifier le flux (souvent combiné à `transform-origin`).

```css
.card:hover {
  transform: translateY(-4px) scale(1.02);
}
```

Crée un **stacking context** ; pense aux **surfaces GPU** et à la **lisibilité**.

## `transition`

Interpole des propriétés entre deux états sur une **durée** et une **courbe** (`ease`, `cubic-bezier`).

```css
.button {
  transition: background-color 0.2s ease, transform 0.2s ease;
}
```

## Animations `@keyframes`

Pour des séquences **multi-étapes** et **répétables** :

```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.badge {
  animation: pulse 1.5s ease-in-out infinite;
}
```

## Préférence utilisateur

Respecte `prefers-reduced-motion` (partie 13) : désactive ou réduit le mouvement **superflu** pour les personnes sensibles au déplacement.

---

## En résumé

Tu ajoutes du **feedback visuel** sans abuser des effets ; la performance et le confort utilisateur passent avant le « wow ».
