# Référentiel — Rôle DevOps

**Parcours complet** pour maîtriser les fondamentaux de DevOps : infrastructure, containers, CI/CD.

## Informations générales

- **Rôle** : DevOps Engineer
- **Slug** : `devops`
- **Dépôt fil rouge** : `https://github.com/example/devops-projects` (à adapter)
- **Branche par défaut** : `main`
- **Durée estimée** : 8-10 semaines (4 chapitres × ~2-3 semaines)
- **Niveau** : Débutant → Intermédiaire

---

## Chapitres du parcours

| # | Titre | Objectifs clés | État | Notes |
|---|-------|----------------|------|-------|
| 1 | **Linux & Shell Scripting** | Terminal, permissions, bash scripting, systemd | À faire | Prérequis : aucun |
| 2 | **Docker & Containerization** | Images, containers, networking, Docker Compose | À faire | Prérequis : Ch. 1 |
| 3 | **Orchestration & Kubernetes** | Clusters, pods, deployments, services | À faire | Prérequis : Ch. 2 |
| 4 | **CI/CD & Monitoring** | Pipelines, GitLab/GitHub Actions, observabilité | À faire | Prérequis : Ch. 3 |

---

## Conventions pour ce rôle

### Modalités pédagogiques retenues
- **TP** : travaux pratiques sur le projet fil rouge (environnement fourni)
- **Quizz** : validation post-théorie (10-15 questions par chapitre)
- **Évaluation** : critères objectifs (tests infra, logs, health checks)

### Format des données
- **TP** : Markdown + frontmatter YAML (références aux scripts, configs)
- **Quizz** : JSON structuré (voir annexe A du mode opératoire)
- **Évaluation** : checklist en Markdown + validation de configuration

### Structure Nuxt Content
```
content/formations/devops/
  ├── ch01-linux/
  │   ├── index.md (théorie)
  │   ├── tp.md (travaux pratiques)
  │   ├── quiz.json (questions)
  │   └── evaluation.md
  ├── ch02-docker/
  │   ├── index.md
  │   ├── tp.md
  │   ├── quiz.json
  │   └── evaluation.md
  ├── ch03-kubernetes/
  │   ├── index.md
  │   ├── tp.md
  │   ├── quiz.json
  │   └── evaluation.md
  └── ch04-cicd/
      ├── index.md
      ├── tp.md
      ├── quiz.json
      └── evaluation.md
```

---

## État du projet fil rouge

### Chapitre 1 (Linux & Shell)
- **Entrée** : Ubuntu VM vierge ou environment local
- **Sortie attendue** : Scripts d'automation, configuration système, users & permissions
- **Branche/Tag** : `ch01-start` → `ch01-end`

### Chapitre 2 (Docker)
- **Entrée** : VM Linux du Ch. 1 + Docker installé
- **Sortie attendue** : Images construites, containers en réseau, docker-compose.yml
- **Branche/Tag** : `ch02-start` → `ch02-end`

### Chapitre 3 (Kubernetes)
- **Entrée** : Containers du Ch. 2, cluster K8s minimal (minikube ou cloud)
- **Sortie attendue** : Déploiements, services, configmaps, health checks
- **Branche/Tag** : `ch03-start` → `ch03-end`

### Chapitre 4 (CI/CD & Monitoring)
- **Entrée** : Infrastructure K8s du Ch. 3
- **Sortie attendue** : Pipeline fonctionnel, alertes, logs centralisés
- **Branche/Tag** : `ch04-start` → `ch04-end`

---

## Historique de livraison

| Chapitre | Livré | Date | Session | Notes |
|----------|-------|------|---------|-------|
| 1 | ❌ | — | — | En attente |
| 2 | ❌ | — | — | En attente |
| 3 | ❌ | — | — | En attente |
| 4 | ❌ | — | — | En attente |

---

## À adapter

- Remplacer l'URL du dépôt par ton URL réelle
- Choisir les plateformes cloud/services (AWS, GCP, Azure, etc.)
- Préciser les versions de Docker, Kubernetes, etc.
