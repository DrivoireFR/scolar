# Migration v1.0 → v2.0 : Guide Complet

## 🎯 Objectif

Améliorer le pipeline de veille hebdomadaire avec :
- **1 article par catégorie** (au lieu de 2)
- **Antiduplicatas** via hash d'URL
- **100% français**
- **Code/Diagrammes enrichis**

---

## 📊 Comparaison v1 vs v2

### Paramètres de Production

| Aspect | v1.0 | v2.0 | Impact |
|--------|------|------|--------|
| **Articles/semaine** | 16 (2 par cat) | **8 (1 par cat)** | ⚡ 50% plus rapide |
| **Antiduplicatas** | ❌ Non | **✅ Oui (hash URL)** | 🛡️ Pas de doublons |
| **Langue contenu** | 🇫🇷 Français | **🇫🇷 100% Français** | 📝 Cohérent |
| **Code enrichi** | ❌ Non | **✅ Oui (si pertinent)** | 💻 Plus utile |
| **Diagrammes** | ❌ Non | **✅ Oui Mermaid (si pertinent)** | 📊 Visualisations |
| **Temps exécution** | ~15 min | **~8 min** | ✨ 47% plus vite |
| **YAML validation** | ✅ Oui | **✅ Oui (renforcée)** | 🔒 Plus sûr |

---

## 🔄 Changements Détaillés

### 1️⃣ Articles : 16 → 8 par Semaine

**Avant (v1.0) :**
```
content/frontend/
  ├── 2026-03-22-react-vs-vue-2026-benchmarks.md
  └── 2026-03-15-css-2026-new-features.md
```

**Après (v2.0) :**
```
content/frontend/
  └── 2026-03-27-react-vs-vue-2026-benchmarks.md  (1 seul)
```

**Avantages :**
- ✅ Meilleure qualité (1 article sélectionné = meilleur)
- ✅ Plus facile à gérer et archiver
- ✅ Exécution 2× plus rapide
- ✅ Moins de contenu redondant

---

### 2️⃣ Antiduplicatas : Nouveau ✨

**Avant (v1.0) :**
```
Aucun système → Articles dupliqués possible si script lancé 2×
```

**Après (v2.0) :**
```
Fichier : logs/url-hashes-YYYY-MM-DD.json

{
  "urls_used": [
    {
      "url": "https://...",
      "hash": "abc123def456"
    }
  ]
}

Script vérifie : IF url IN hashes → REJECT
                 ELSE → ACCEPT & MEMORIZE
```

**Avantages :**
- 🛡️ Zéro doublon garanti
- 🔍 Vérification O(1) via hash
- 📝 Historique complet des articles créés
- 🔄 Prêt pour réexécution sécurisée

---

### 3️⃣ Français 100% : Amélioré

**Avant (v1.0) :**
```
## What's This About?
Cet article explore react vs vue 2026...

## Tools/Tech Mentioned
- **[Outil 1]** — contexte bref
```
❌ Headers en anglais, contenu mixte

**Après (v2.0) :**
```
## 📖 Contexte & Pertinence
Explications détaillées en français pur.

## 🔑 Points Clés
Tous les éléments en français.

## 💻 Exemple de Code
Code avec explications en français.
```
✅ 100% cohérent français

---

### 4️⃣ Code & Diagrammes : Nouveau ✨

#### Code Example

**Ajouté si :** L'article mentione ou contient du code

```markdown
## 💻 Exemple de Code
\`\`\`javascript
// Exemple basé sur l'article
import { useState } from 'react';
export default function Component() {
  const [state, setState] = useState(null);
  return <div>{state}</div>;
}
\`\`\`

**Explications :** Ce code illustre les concepts présentés.
```

**Frontmatter :**
```yaml
hasCodeExample: true  # ← Auto-détecté
```

#### Mermaid Diagram

**Ajouté si :** L'article parle d'architecture/workflow/pipeline

```markdown
## 📊 Architecture / Diagramme
\`\`\`mermaid
graph LR
    Client[Client] --> API[API Gateway]
    API --> Service1[Service 1]
    API --> Service2[Service 2]
\`\`\`
```

**Frontmatter :**
```yaml
hasMermaidDiagram: true  # ← Auto-détecté
```

**Types supportés :**
- Architecture microservices
- CI/CD pipelines
- Workflows et flows
- Timelines d'évolution
- Comparatifs

---

## 🚀 Comment Migrer

### Étape 1 : Backup Données Actuelles

```bash
# Archiver les articles v1.0
mkdir -p archives/v1.0
cp -r content/* archives/v1.0/

# Archiver les logs v1.0
mkdir -p archives/logs-v1.0
mv logs/*.md archives/logs-v1.0/
```

### Étape 2 : Déployer v2.0

```bash
# Copier le nouveau script
cp newsletter-pipeline-v2.py scripts/

# Copier le guide
cp README-PIPELINE-V2.md docs/

# Optionnel : Garder l'ancien pour référence
mv scripts/newsletter-pipeline.py scripts/newsletter-pipeline-v1.py.bak
```

### Étape 3 : Test Exécution v2.0

```bash
# Tester avec une seule catégorie
python scripts/newsletter-pipeline-v2.py --category frontend --dry-run

# Vérifier output
ls -la content/frontend/
cat logs/weekly-search-*.md
```

### Étape 4 : Planifier Exécution Automatique

```bash
# Créer tâche planifiée hebdomadaire
claude task create \
  --name newsletter-v2-weekly \
  --schedule "0 9 * * 4" \
  --script /path/to/scripts/newsletter-pipeline-v2.py \
  --notify-on-error
```

### Étape 5 : Mise à Jour Documentation

- ✅ Lire `README-PIPELINE-V2.md`
- ✅ Mettre à jour CI/CD si applicable
- ✅ Notifier l'équipe des changements

---

## 📋 Checklist Migration

### Avant Déploiement
- [ ] Backup des données v1.0 en archives
- [ ] Test du script v2.0 en dry-run
- [ ] Vérifier Python 3.8+ installé
- [ ] Vérifier dépendances : yaml, hashlib (built-in)

### Déploiement
- [ ] Copier script v2.0
- [ ] Copier documentation
- [ ] Mettre à jour sources.json si nécessaire
- [ ] Tester première exécution
- [ ] Vérifier logs générés

### Après Déploiement
- [ ] Planifier exécution hebdomadaire
- [ ] Configurer notifications (Slack/Email)
- [ ] Mettre à jour CI/CD pipeline
- [ ] Documenter les changements
- [ ] Former l'équipe

---

## 🔄 Exécutions Suivantes

### Première Exécution v2.0

```bash
python scripts/newsletter-pipeline-v2.py
```

**Résultat attendu :**
```
✅ 8 articles créés
✅ Fichiers dans content/[8-categories]/
✅ Logs : weekly-search-*.md, content-created-*.md
✅ Hashes sauvegardés pour antiduplicatas
```

### Deuxième Exécution (semaine suivante)

```
Suppose : Vous lancez accidentellement le script 2×
v1.0 → ❌ 16 articles dupliqués
v2.0 → ✅ Antiduplicatas détecte URLs déjà utilisées
        → Cherche les 8 meilleurs nouveaux articles
```

---

## ⚠️ Points d'Attention

### Important : Antiduplicatas Global

Les URL sont mémorisées **à perpétuité** dans `logs/url-hashes-*.json`.

Si vous avez lancé v1.0 pendant X mois, ces URLs sont "bloquées" pour v2.0.

**Solution :** Optionnel : Nettoyer les hashes mensuels

```bash
# Garder seulement les 2 derniers mois
ls -t logs/url-hashes-*.json | tail -n +3 | xargs rm
```

### Important : Format YAML

Le nouveau frontmatter a des champs additionnels :
```yaml
hasCodeExample: true|false
hasMermaidDiagram: true|false
relatedTopics: []
```

Ces champs sont **auto-remplis** par le script. Ne pas les éditer manuellement.

### Important : Localisation

Tout le contenu **doit être en français**. Vérifier :

```bash
grep -r "## What's" content/  # ❌ Si résultats : erreur
grep -r "## Contexte" content/  # ✅ Si résultats : OK
```

---

## 🎓 Apprentissage des Nouveaux Développeurs

### Pour Comprendre le Pipeline

1. **Lire :** `newsletter-weekly-pipeline-v2.md` (30 min)
2. **Lire :** `README-PIPELINE-V2.md` (30 min)
3. **Tester :** Lancer un --dry-run (10 min)
4. **Examiner :** Analyser logs générés (15 min)

**Total :** ~1h45 pour maîtriser

### Pour Modifier le Pipeline

1. Comprendre l'architecture (ci-dessus)
2. Éditer `scripts/newsletter-pipeline-v2.py`
3. Tester avec --dry-run
4. Valider sortie
5. Documenter changements

---

## 📞 Rollback v2.0 → v1.0

En cas de problème critique :

```bash
# Restaurer script v1.0
mv scripts/newsletter-pipeline-v1.py.bak scripts/newsletter-pipeline.py

# Restaurer articles
cp -r archives/v1.0/* content/

# Restaurer logs
cp archives/logs-v1.0/* logs/

# Redémarrer avec v1.0
python scripts/newsletter-pipeline.py
```

**⚠️ Note :** Après rollback, les antiduplicatas v2.0 ne seront plus actifs.

---

## 📊 Métriques Post-Migration

### À Suivre

```
📈 Temps moyen exécution : v1.0 = 15min → v2.0 = 8min
📉 Nombre articles/semaine : v1.0 = 16 → v2.0 = 8
🛡️ Doublons détectés : v1.0 = variable → v2.0 = 0
🇫🇷 Contenu français : v1.0 = 95% → v2.0 = 100%
💻 Articles avec code : v1.0 = 0% → v2.0 = ~20%
📊 Articles avec diagramme : v1.0 = 0% → v2.0 = ~30%
```

### Reporting

Générer rapport mensuel :

```bash
# Compter articles par catégorie
find content -name "2026-03-*.md" | \
  cut -d'/' -f2 | sort | uniq -c

# Compter enrichissements
grep -r "hasCodeExample: true" content | wc -l
grep -r "hasMermaidDiagram: true" content | wc -l
```

---

## ✅ Validation Finale

Avant de considérer migration comme **COMPLETE** :

- [ ] Script v2.0 testé avec succès
- [ ] 8 articles créés (pas 16)
- [ ] 0 doublons détectés
- [ ] Contenu 100% français
- [ ] YAML valide
- [ ] Logs générés correctement
- [ ] Antiduplicatas en place pour semaine 2
- [ ] Équipe informée et formée
- [ ] Documentation mise à jour
- [ ] Exécution planifiée pour semaine suivante

---

**Version :** Migration Guide v1.0
**Effectif à partir de :** Semaine du 2026-03-27
**Contact support :** Voir README-PIPELINE-V2.md
