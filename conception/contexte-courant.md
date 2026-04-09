# Contexte courant — État persistent du workflow

**Ce fichier maintient l'état** entre les cycles pour éviter toute perte de contexte.

Dernière mise à jour : 2026-04-05

---

## État actualisé

### Rôle en cours
- **Rôle actif** : Aucun (initialisation complète)
- **Chapitre actif** : Aucun

### Prochain à démarrer
- **Rôle recommandé** : Front-end (ordre suggéré : FE → BE → DevOps)
- **Chapitre recommandé** : Ch. 1 — HTML & CSS Fondamentaux

---

## Conventions appliquées

### Structure Nuxt Content
```
content/formations/<role>/<chapitre>/
  ├── index.md (théorie)
  ├── tp.md (travaux pratiques)
  ├── quiz.json (questions)
  └── evaluation.md (évaluation)
```

### Modalités pédagogiques (v1)
- **TP** : Travaux pratiques sur projet fil rouge (Markdown + frontmatter YAML)
- **Quizz** : JSON structuré (schema : voir annexe A du mode opératoire)
- **Évaluation** : Markdown checklist + barème objectif

### Conventions de nommage
- Référentiels : `referentiel-<role>.md`
- Sessions : `sessions/SESSION-<ROLE>-<CHAPITRE>.md`
- Fichiers de contenu : slugs minuscules, tirets en séparateurs

---

## Points d'amélioration découverts

*À remplir après chaque cycle de retro*

- **v2.0** (2026-04-05) : Adoption du modèle DAG (chapitres parents/enfants) pour permettre plusieurs chemins pédagogiques au sein d'un même chapitre, similaire à Git. Mise à jour des frontmatter pour tracker parent/children.

---

## Fichiers de référence clés

| Fichier | Rôle |
|---------|------|
| `conception/expression-besoin.md` | Cadrage fonctionnel & pédagogique |
| `conception/mode-operatoire-creation-trame.md` | Processus E0-E5 détaillé |
| `conception/referentiel-<role>.md` | Plan par rôle (3 fichiers) |
| `conception/avancement.md` | Vue globale des statuts |
| `conception/contexte-courant.md` | CE FICHIER : état inter-cycles |

---

## Dépôts fils rouges

À initialiser / à adapter :

| Rôle | URL repo | Branche start | Branche end |
|------|----------|---------------|------------|
| Front-end | `https://github.com/example/frontend-projects` | `ch01-start` | (à détailler) |
| Back-end | `https://github.com/example/backend-projects` | `ch01-start` | (à détailler) |
| DevOps | `https://github.com/example/devops-projects` | `ch01-start` | (à détailler) |

---

## Checklist pour la prochaine session

Avant de démarrer le cycle 1, vérifier :

- [ ] Adapter les URLs des dépôts fils rouges
- [ ] Initialiser les structures de projet (branches, code initial)
- [ ] Confirmer le rôle par lequel commencer
- [ ] (Optionnel) Ajuster les titres/objectifs des chapitres selon ton contenu réel

---

## Notes générales

- **Pas de ping-pong brief** : je propose + tu corriges, le mode op s'ajuste progressivement
- **Traçabilité** : chaque session génère un doc unique `SESSION-*.md`
- **Scalabilité** : logique identique pour 3 ou 30 rôles
- **Maintenance** : mettre à jour ce fichier après chaque cycle clôturé
