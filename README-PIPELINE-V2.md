# Newsletter Pipeline v2.0 — Guide d'Utilisation

## 📋 Vue d'Ensemble

Le pipeline v2.0 génère **8 articles de veille** (1 par catégorie) chaque semaine avec:
- ✅ Contenu **100% français**
- ✅ **Antiduplicatas** via hash d'URL
- ✅ **Code/Diagrammes Mermaid** enrichissant le contenu
- ✅ **YAML validation** avant sauvegarde
- ✅ **Logs détaillés** d'exécution

---

## 🚀 Démarrage Rapide

### Lancer le Pipeline Complet

```bash
python /sessions/peaceful-epic-ramanujan/mnt/scolar.creative-developer.com/scripts/newsletter-pipeline-v2.py
```

**Résultat :**
- 8 fichiers `.md` créés dans `content/[category]/`
- Logs générés dans `logs/`
- Hashes d'URLs sauvegardés pour antiduplicatas

### Lancer via Scheduled Task (Automatisé)

```bash
# Planifier une exécution hebdomadaire (jeudi 09:00 UTC)
claude task create \
  --name newsletter-weekly \
  --schedule "0 9 * * 4" \
  --script /path/to/newsletter-pipeline-v2.py
```

---

## 📊 Structure des Fichiers

### Inputs

```
scolar.creative-developer.com/
├── sources.json                  ← Configuration des sources (lecture seule)
└── logs/
    ├── url-hashes-YYYY-MM-DD.json    ← Historique antiduplicatas
    └── ...
```

### Outputs

```
scolar.creative-developer.com/
├── content/
│   ├── frontend/
│   │   └── 2026-03-27-article-title.md
│   ├── backend/
│   ├── devops/
│   ├── sys-admin/
│   ├── database/
│   ├── animation-css/
│   ├── animation-3d/
│   └── strat-mobile/
│
└── logs/
    ├── weekly-search-2026-03-27.md        ← Log de découverte
    ├── content-created-2026-03-27.md      ← Log de création
    ├── pipeline-execution-2026-03-27.md   ← Rapport complet
    └── url-hashes-2026-03-27.json         ← Hashes pour antiduplicatas
```

---

## 🔄 Flux d'Exécution Détaillé

### Étape 1: Content Discovery (Web Search)

```
Pour chaque catégorie:
  1. Charger intérêts & sites depuis sources.json
  2. Effectuer recherche web → articles derniers 7 jours
  3. Vérifier antiduplicatas via url-hashes-*.json
  4. Sélectionner 1 article (meilleure pertinence)
  5. Valider: pas paywall, pas sponsorisé, pas dup
```

**Résultat :** 8 articles sélectionnés (1 par catégorie)

### Étape 2: Content Enrichment

```
Pour chaque article:
  1. Générer résumé français
  2. Extraire/inférer code si mentionné
  3. Extraire/inférer diagramme si mentionné
  4. Créer frontmatter YAML
  5. Générer corps en français
  6. Valider YAML
```

**Résultat :** 8 fichiers markdown avec contenu enrichi

### Étape 3: Logging & Validation

```
  1. Sauvegarder url-hashes pour prochaine exécution
  2. Générer weekly-search log
  3. Générer content-created log
  4. Générer pipeline-execution rapport
```

**Résultat :** 4 fichiers logs générés

---

## 🛡️ Antiduplicatas : Comment ça Marche

### Mécanique

```
1. Lire tous les logs url-hashes-*.json existants
   → Construire dictionnaire {url: hash}

2. Pour chaque article découvert:
   if article['url'] in url_hashes:
       → REFUSER (article déjà créé)
   else:
       → ACCEPTER et mémoriser

3. Sauvegarder url-hashes-YYYY-MM-DD.json
   → Prêt pour prochaine exécution
```

### Fichier de Référence

```json
{
  "category": "all",
  "date": "2026-03-27",
  "urls_used": [
    {
      "url": "https://tech-insider.org/react-vs-vue-2026/",
      "hash": "abc123def456",
      "title": "React vs Vue 2026",
      "created_date": "2026-03-27"
    },
    {
      "url": "https://example.com/python-backend/",
      "hash": "xyz789klm012",
      "title": "Python Backend 2026",
      "created_date": "2026-03-27"
    }
  ]
}
```

### Vérifier Doublons Manuellement

```python
# Afficher tous les URLs utilisés
from pathlib import Path
import json

logs_dir = Path("logs")
for hash_file in logs_dir.glob("url-hashes-*.json"):
    with open(hash_file) as f:
        data = json.load(f)
        print(f"File: {hash_file.name}")
        for url_entry in data['urls_used']:
            print(f"  - {url_entry['url']}")
```

---

## 📝 Format Frontmatter YAML (Champs Clés)

```yaml
---
title: "Titre Article"
description: "Court résumé < 60 chars"
date: "YYYY-MM-DD"
category: "frontend|backend|devops|..."
tags: ["tag1", "tag2"]
level: "beginner|intermediate|advanced"
readTime: 5          # minutes
complexity: "low|medium|high"

source:
  title: "Titre original"
  url: "https://..."
  website: "domaine.com"
  published: "YYYY-MM-DD"

hasCodeExample: true|false   # ← Nouveau en v2
hasMermaidDiagram: true|false  # ← Nouveau en v2
---
```

---

## 💻 Code et Diagrammes : Quand et Pourquoi

### Inclusion de Code

**Inclus si :** L'article original mentionne ou contient du code

**Exemples :**
- Article sur React → Exemple React
- Article sur SQL queries → Exemple SQL
- Article sur DevOps → Exemple Docker/Kubernetes

**Format :**
```markdown
## 💻 Exemple de Code
\`\`\`[language]
// Code extrait ou généré basé sur l'article
\`\`\`

**Explications:** Ce code montre comment...
```

### Inclusion de Diagrammes Mermaid

**Inclus si :** L'article parle d'architecture, flow, pipeline ou schéma

**Exemples :**
- Article sur microservices → Diagramme architecture
- Article sur CI/CD → Diagramme pipeline
- Article sur workflow → Diagramme flow

**Format :**
```markdown
## 📊 Architecture / Diagramme
\`\`\`mermaid
graph LR
    Client[Client] --> API[API]
    API --> DB[(Database)]
\`\`\`
```

**Types de diagrammes supportés :**
- `graph LR/TB` — Architecture, workflows
- `timeline` — Évolutions temporelles
- `flowchart` — Processus, décisions
- `sequence` — Interactions, communications

---

## 📈 Monitoring & Troubleshooting

### Vérifier l'État du Dernier Run

```bash
cat logs/pipeline-execution-2026-03-27.md
```

### Valider les YAML Générés

```bash
python -m yaml logs/content-created-2026-03-27.md
```

Ou utiliser le script :
```python
import yaml
from pathlib import Path

for md_file in Path("content").rglob("*.md"):
    with open(md_file) as f:
        content = f.read()
        _, frontmatter, _ = content.split("---", 2)
        try:
            yaml.safe_load(frontmatter)
            print(f"✅ {md_file.name}")
        except yaml.YAMLError as e:
            print(f"❌ {md_file.name}: {e}")
```

### Détecter les Fichiers en Doublon

```bash
# Afficher les fichiers avec même date
find content -name "2026-03-27-*.md" -o -name "2026-03-27-*-2.md"

# Compter par catégorie
for dir in content/*/; do
  echo "$(basename $dir): $(ls -1 ${dir}2026-03-27*.md 2>/dev/null | wc -l)"
done
```

### Nettoyer les Articles Obsolètes

```bash
# Supprimer articles de la semaine précédente (garder 4 semaines)
find content -name "2026-03-*.md" -mtime +28 -delete

# Ou archiver
mkdir -p archives/2026-03
mv content/**/2026-03-*.md archives/2026-03/
```

---

## 🔧 Configuration & Personnalisation

### Modifier les Catégories

**Éditer :** `sources.json`

```json
{
  "sources": [
    {
      "category": "ma-categorie",
      "interests": ["keyword1", "keyword2"],
      "sites": [{"name": "Site", "url": "https://..."}]
    }
  ]
}
```

⚠️ **Important :** Créer les dossiers `content/ma-categorie/` correspondants

### Changer la Fréquence

**De :** Hebdomadaire (1 article/catégorie)
**À :** Bi-hebdomadaire

Modifier le script ou la tâche planifiée :
```bash
# Bi-hebdomadaire (jeudis + lundis)
schedule: "0 9 * * 1,4"
```

### Ajouter des Sections Personnalisées

Dans `create_article_body()` du script :

```python
body += f"""
## 🎓 Certifications & Ressources
- [Certification XYZ]({course_url})
- [Cours gratuit]({free_course_url})
"""
```

---

## 📊 Logs & Rapports

### weekly-search-YYYY-MM-DD.md

Log de la phase **Content Discovery** :
- Nombre de catégories scannées
- Nombre d'articles sélectionnés
- Doublons évités
- Liste des 8 articles avec résumés

### content-created-YYYY-MM-DD.md

Log de la phase **Content Generation** :
- 8 fichiers créés
- YAML validation ✅
- Enrichissements appliqués (code, diagrammes)
- Statut final

### pipeline-execution-YYYY-MM-DD.md

Rapport complet :
- Durée totale d'exécution
- Résumé par étape
- Contraintes respectées
- État de succès

### url-hashes-YYYY-MM-DD.json

Base de données **antiduplicatas** :
- Tous les URLs utilisés
- Hash MD5 pour vérification rapide
- Dates de création
- Titre des articles

---

## ⚙️ Maintenance Hebdomadaire

### Checklist Post-Exécution

```
□ Vérifier logs/pipeline-execution-*.md → Status: ✅
□ Vérifier 8 fichiers créés → ls content/*/*.md | wc -l
□ Vérifier hashes sauvegardés → wc -l logs/url-hashes-*.json
□ Vérifier pas de doublons → grep "duplicate" logs/*.md
□ Vérifier contenu français → grep "English" content/*/*.md
□ Build et test statique → npm run build
```

### Archivage Mensuel

```bash
# Archiver les logs du mois précédent
tar czf archives/logs-2026-03.tar.gz logs/
rm logs/pipeline-execution-2026-03-*.md
rm logs/content-created-2026-03-*.md
```

---

## 🚨 Erreurs Courantes & Solutions

| Problème | Cause | Solution |
|----------|-------|----------|
| **Fichier existant non écrasé** | Collision de date/titre | Script ajoute `-2`, `-3` automatiquement ✓ |
| **YAML invalid** | Caractères spéciaux mal échappés | Script valide avant sauvegarde ✓ |
| **Doublons créés** | Hash d'URL pas lu | Vérifier `logs/url-hashes-*.json` existence |
| **Contenu anglais** | Script pas traduit | Rééxécuter avec v2.0+ |
| **Pas de code/diagrammes** | Article n'en mentionne pas | Normal ! (v2.0 = seulement si pertinent) |

---

## 📚 Prochaines Étapes

- [ ] Intégrer recherche web réelle (API Google Search)
- [ ] LLM pour résumés automatiques
- [ ] Génération auto de tags via NLP
- [ ] Dashboard analytics articles
- [ ] Notifier Slack/Discord post-exécution
- [ ] Générer digest PDF hebdomadaire

---

## 📞 Support & Questions

**Logs complets :** `logs/pipeline-execution-*.md`
**Validation erreurs :** `logs/content-created-*.md`
**Historique URLs :** `logs/url-hashes-*.json`

Consultez ces fichiers pour déboguer tout problème d'exécution.

---

**Version :** 2.0
**Dernière mise à jour :** 2026-03-27
**Auteur :** Claude Veille Bot
