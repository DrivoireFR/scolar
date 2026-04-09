---
name: newsletter-weekly-pipeline-v2
description: Pipeline hebdomadaire optimisé : recherche + génération articles NuxtContent (1 article/catégorie, antiduplicatas, contenu enrichi FR)
---

# Pipeline Veille Hebdomadaire — v2.0

## Objectif

Générer **8 articles de veille** (1 par catégorie/semaine) pour le blog Nuxt Content `scolar.creative-developer.com`.

**Améliorations v2.0 :**
- ✅ 1 article par catégorie (pas de doublons)
- ✅ Résumés **100% français**
- ✅ Antiduplicatas via **hash d'URL**
- ✅ **Code/diagrammes Mermaid** enrichissant le contenu
- ✅ Contenu structuré et professionnel

---

## Architecture du Pipeline

```
┌─────────────────────────────────────────┐
│ Étape 1: Content Discovery (Web Search) │
│  ├─ Charger sources.json                 │
│  ├─ Rechercher 1 article/catégorie       │
│  └─ Valider antiduplicatas               │
└────────────┬────────────────────────────┘
             │
┌────────────▼────────────────────────────┐
│ Étape 2: Content Enrichment & Creation  │
│  ├─ Traiter le contenu (FR)              │
│  ├─ Extraire/générer code/diagrammes    │
│  └─ Créer files Markdown                │
└────────────┬────────────────────────────┘
             │
┌────────────▼────────────────────────────┐
│ Étape 3: Validation & Logging           │
│  ├─ Valider YAML frontmatter             │
│  ├─ Vérifier fichiers créés              │
│  └─ Générer rapports d'exécution         │
└─────────────────────────────────────────┘
```

---

## Étape 1 : Content Discovery

### 1.1 Sources & Catégories
Lire `sources.json` — 8 catégories avec sites et intérêts associés :
- `frontend`, `backend`, `devops`, `sys-admin`, `database`, `animation-css`, `animation-3d`, `strat-mobile`

### 1.2 Recherche Web Ciblée
**Pour chaque catégorie :**
1. Utiliser les `interests` comme mots-clés
2. Cibler les `sites` définis
3. Chercher **articles publiés dans les 7 derniers jours**
4. Filtrer : sans paywall, sans sponsorisé, sans dup

**Sélection :** 1 article par catégorie = **8 articles au total**

### 1.3 Antiduplicatas

Maintenir un fichier `logs/url-hashes-YYYY-MM-DD.json` :

```json
{
  "category": "frontend",
  "date": "2026-03-27",
  "urls_used": [
    {
      "url": "https://tech-insider.org/react-vs-vue-2026/",
      "hash": "abc123def456",
      "title": "React vs Vue 2026",
      "created_date": "2026-03-27"
    }
  ]
}
```

**Règle :** Si l'URL a déjà été utilisée, **refuser l'article et chercher le suivant.**

### 1.4 Log de Découverte

Créer `logs/weekly-search-YYYY-MM-DD.md` :

```markdown
# Content Discovery - [DATE]

## Summary
- Categories scanned: 8
- Articles discovered: [N]
- Articles selected: 8 (1 per category)
- Duplicates avoided: [N]

## Selected Articles

### [category] Titre Article
- **Source:** Domaine
- **URL:** https://...
- **Published:** YYYY-MM-DD
- **Summary:** Résumé 2-3 phrases en français
- **Why relevant:** Lien avec intérêts de la catégorie
- **Code/Diagram available:** Yes/No

[... 8 articles total ...]

## Anti-Duplicate Check
- Checked against: [N] existing URLs
- Conflicts resolved: [N]
- Status: ✅
```

---

## Étape 2 : Content Generation

### 2.1 Structure du Markdown

Pour chaque article, créer `content/[category]/YYYY-MM-DD-kebab-title.md`

**Frontmatter YAML :**
```yaml
---
title: "Titre Article"
description: "Résumé 1 ligne (< 60 chars)"
date: "YYYY-MM-DD"
published: true
category: "nom-categorie"
tags: ["tag1", "tag2", "tag3"]
level: "beginner|intermediate|advanced"
readTime: N
complexity: "low|medium|high"
source:
  title: "Titre original"
  author: "Auteur"
  url: "https://..."
  website: "domaine.com"
  published: "YYYY-MM-DD"
featured: false
newsletter_section: "trends|tools|how-tos|deep-dives"
relevance: "high|medium|low"
hasCodeExample: false  # true si contient code
hasMermaidDiagram: false  # true si contient diagramme
relatedTopics: ["topic1", "topic2"]
---
```

### 2.2 Corps de l'Article (100% Français)

Structure obligatoire :

```markdown
## 🎯 TL;DR
[1-2 phrases : l'essentiel absolut en français]

## 📖 Contexte & Pertinence
[2-3 paragraphes expliquant le sujet, son importance et son impact actuel]
- Pourquoi ça compte maintenant
- Qui est concerné
- Quels sont les enjeux

## 🔑 Points Clés

### Point 1: [Titre du point]
Explication détaillée du premier insight.

### Point 2: [Titre du point]
Explication détaillée du deuxième insight.

### Point 3: [Titre du point]
Explication détaillée du troisième insight.

## 💻 Exemple de Code (si pertinent)
\`\`\`[language]
// Code extrait de l'article original
\`\`\`

**Explications :** [Ce que montre ce code et son utilité]

## 📊 Architecture / Diagramme (si pertinent)
\`\`\`mermaid
[Diagramme Mermaid si l'article parle d'architecture]
\`\`\`

## 🛠️ Outils & Technologies Mentionnées
- **[Outil 1]** — Contexte d'utilisation
- **[Outil 2]** — Contexte d'utilisation
- **[Outil 3]** — Contexte d'utilisation

## 👥 Pour Qui ?
Profil des développeurs/architectes qui devraient lire cet article.

## 🔗 Ressources & Lectures Complémentaires
- [Titre du lien](https://...)
- [Titre du lien](https://...)
```

### 2.3 Génération Code & Diagrammes

**Règle importante :** Inclure code/diagrammes **seulement si mentionnés dans l'article original.**

**Stratégies :**
- **Code** : Copier depuis l'article ou créer un exemple simple basé sur le contexte
- **Mermaid** : Architecture, pipeline, workflow, comparatifs, timeline
- **Pas d'invetnion** : Si l'article n'en parle pas, ne pas en ajouter

### 2.4 Validation YAML

Avant de sauvegarder :
```python
# Valider chaque frontmatter
- ✅ Syntaxe YAML valide
- ✅ Champs obligatoires : title, date, category, url, source
- ✅ Category matche dossier
- ✅ Date format YYYY-MM-DD
- ✅ Tags bien formatés
- ✅ hasCodeExample & hasMermaidDiagram correctement définis
```

---

## Étape 3 : Validation & Logging

### 3.1 Log de Création

Créer `logs/content-created-YYYY-MM-DD.md` :

```markdown
# Content Created - [DATE]

## Summary
- Files created: 8
- All validated: ✅
- Errors: 0

## By Category

| Category | File | Status | Notes |
|----------|------|--------|-------|
| frontend | 2026-03-27-react-...md | ✅ | Has code example |
| backend | 2026-03-27-python-...md | ✅ | No enrichment |
| ...

## Validation Results
- YAML: ✅ Valid on 8 files
- URLs: ✅ All present & unique
- Categories: ✅ Match folder names
- Naming: ✅ YYYY-MM-DD-kebab-case
- Content: ✅ French 100%

## Enrichment Summary
- Articles with code: [N]
- Articles with Mermaid: [N]
- Average read time: [N] min

## Status
✅ COMPLETED — 8 articles ready for static generation
```

### 3.2 Rapport d'Exécution

Créer `logs/pipeline-execution-YYYY-MM-DD.md` avec :
- Temps d'exécution total
- Nombre d'articles découverts vs sélectionnés
- Doublons évités
- État de succès

---

## Contraintes Importantes

### Règles Strictes
- ✅ **Never** modifier `sources.json`
- ✅ **1 article par catégorie** (pas 2, pas plus)
- ✅ **URLs uniques** (antiduplicatas obligatoire)
- ✅ **100% français** (dans le corps de l'article)
- ✅ **Code/Mermaid** seulement si dans l'article original
- ✅ **YAML valid** avant de sauvegarder
- ✅ **Pas d'overwrite** : suffixe `-2`, `-3` si conflit

### Nommage Fichiers
```
content/[category]/YYYY-MM-DD-kebab-case-title.md
```

Exemple :
- `content/frontend/2026-03-27-react-performance-2026.md`
- `content/database/2026-03-27-postgresql-json-queries.md`

---

## Succès Attendu

À la fin du run complet :

```
✅ logs/weekly-search-2026-03-27.md — 8 articles découverts
✅ logs/url-hashes-2026-03-27.json — Historique anti-dup
✅ content/[8-categories]/*.md — 8 fichiers créés
✅ logs/content-created-2026-03-27.md — Validation OK
✅ logs/pipeline-execution-2026-03-27.md — Rapport complet

TOTAL: 8 articles de veille enrichis, 100% FR, 0 doublons
```

---

## Commandes Exécution

### Lancer le Pipeline Complet
```bash
# Déclencher étapes 1-3
python /scripts/newsletter-pipeline-v2.py --date 2026-03-27
```

### Vérifier Doublons Avant Création
```bash
python /scripts/check-duplicates.py --against logs/url-hashes-*.json
```

### Valider Tous les Frontmatters
```bash
python /scripts/validate-yaml.py --path content/
```

---

## Notes pour Améliorations Futures

- [ ] Intégrer API LLM pour génération de résumés automatiques
- [ ] Ajouter scoring de pertinence (ML)
- [ ] Enrichir avec mentions Twitter/interactions
- [ ] Générer digest PDF hebdomadaire
- [ ] Dashboard analytics des articles
