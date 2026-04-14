---
title: "Partie 5 — Médias et intégration"
description: "Images, figure, vidéo, audio, iframes et entités de caractères"
slug: "p05-medias-integration"
parent: "ch01-html"
role: "fondamentaux-web"
order: 5
type: "part-theory"
estimatedTheoryMinutes: 20
---

# Partie 5 — Médias et intégration

## Images `img`

```html
<img src="photo.jpg" alt="Description courte et utile" width="800" height="600" loading="lazy" decoding="async">
```

- **`src`** : chemin de l’image.
- **`alt`** : **obligatoire** pour l’accessibilité et le SEO ; texte équivalent, ou `alt=""` si l’image est **purement décorative** et n’apporte aucune information.
- **`width` / `height`** : dimensions intrinsèques pour limiter le **layout shift** (CLS) pendant le chargement.
- **`loading="lazy"`** : chargement différé hors écran (bon pour la perf).

## `figure` et `figcaption`

Pour associer une image (ou média) à une **légende** :

```html
<figure>
  <img src="schema.png" alt="Schéma du flux HTTP">
  <figcaption>Légende visible sous le média.</figcaption>
</figure>
```

## Vidéo `video`

```html
<video controls poster="apercu.jpg" preload="metadata">
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
  Texte de repli si le navigateur ne lit pas la vidéo.
</video>
```

- **`controls`** : barre de lecture accessible.
- Fournir plusieurs **`source`** (formats) quand c’est possible.
- Sous-titres : piste `<track kind="captions">` (accessibilité).

## Audio `audio`

```html
<audio controls>
  <source src="podcast.mp3" type="audio/mpeg">
</audio>
```

## `iframe`

Intègre une autre page (carte, vidéo tierce, widget).

```html
<iframe src="https://example.com/embed" title="Description du contenu intégré" loading="lazy"></iframe>
```

- Toujours un **`title`** descriptif.
- Attention **sécurité** : l’attribut `sandbox` peut restreindre les capacités du contenu embarqué ; les intégrations tierces (YouTube, etc.) ont souvent des URLs et attributs imposés par la plateforme.

## Entités HTML

Pour afficher des caractères réservés ou spéciaux :

- `&lt;` `<` , `&gt;` `>` , `&amp;` `&` , `&quot;` `"` , `&nbsp;` espace insécable (à utiliser avec parcimonie).

En UTF-8, tu peux souvent taper le caractère directement ; les entités restent utiles dans les exemples et certains générateurs.

---

## En résumé

Tu peux intégrer **images et médias** de façon **accessible** et préparer le terrain pour le **style** (chapitre 2) et les **performances**.
