# ⏰ Configuration Scheduled Task Hebdomadaire

> Comment automatiser le pipeline chaque semaine sans Python

---

## 🚀 Option 1: Créer Directement dans Claude

### Étape 1: Accéder à la CLI Claude
```bash
# Depuis ton terminal, dans le dossier du projet
cd /sessions/peaceful-epic-ramanujan/mnt/scolar.creative-developer.com
```

### Étape 2: Créer la Tâche Planifiée

```bash
claude task create \
  --name "newsletter-veille-hebdo" \
  --schedule "0 9 * * 4" \
  --description "Pipeline veille hebdomadaire - Rechercher et créer 8 articles"
```

**Ce que cela fait :**
- Crée une tâche appelée `newsletter-veille-hebdo`
- S'exécute **chaque jeudi à 09:00 UTC** (adapte le fuseau horaire si besoin)
- Claude lance automatiquement le workflow

---

## 🕐 Option 2: Utiliser Cron (Linux/Mac)

Si tu préfères une approche système traditionnelle:

### Étape 1: Ouvrir Crontab
```bash
crontab -e
```

### Étape 2: Ajouter la Ligne

```cron
# Exécute le workflow chaque jeudi à 09:00
0 9 * * 4 cd /sessions/peaceful-epic-ramanujan/mnt/scolar.creative-developer.com && /usr/bin/claude session start "Exécuter WORKFLOW-MANUEL.md" > ~/logs/veille.log 2>&1
```

**Explication:**
- `0 9 * * 4` = Jeudi (4) à 09:00
- `cd` = Navigue vers le dossier
- `claude session start` = Lance une nouvelle session Claude
- `> ~/logs/veille.log` = Enregistre les résultats

---

## 🪟 Option 3: Windows (Task Scheduler)

### Étape 1: Ouvrir Task Scheduler
```
Win + R → taskschd.msc → OK
```

### Étape 2: Créer Nouvelle Tâche

1. **Action** → **Create Basic Task**
2. **Name:** `Newsletter Veille Hebdo`
3. **Description:** Pipeline automatique veille technologique

### Étape 3: Trigger

1. **Trigger** → **New**
2. **Begin the task:** Weekly
3. **Recur every:** 1 week
4. **Day:** Thursday
5. **Start time:** 09:00 AM

### Étape 4: Action

1. **Action** → **New**
2. **Program/script:** `C:\path\to\claude.exe`
3. **Arguments:** `session start "Exécuter WORKFLOW-MANUEL.md"`
4. **Start in:** `C:\path\to\project`

---

## 📧 Option 4: Email Reminder (Simple)

Si les options précédentes sont trop complexes, utilise simplement:

### Gmail/Outlook Automation

1. **Créer un événement récurrent :**
   - Titre: "🚀 Veille Tech - Exécuter Pipeline"
   - Heure: Jeudi 09:00
   - Rappel: 09:00 (notification)

2. **Description avec checklist :**
   ```
   Checklist pour exécuter le workflow:
   ☐ Lire logs/URL-REGISTRY.md
   ☐ Chercher 8 articles (1 par catégorie)
   ☐ Créer 8 fichiers markdown en français
   ☐ Mettre à jour registre d'URLs
   ☐ Git commit

   Docs: WORKFLOW-MANUEL.md
   ```

---

## ✅ Configuration Recommandée (pour Dimitri)

### **Option préconisée: Claude Task Create**

```bash
# Exécuter une seule fois
claude task create \
  --name "newsletter-veille-hebdo" \
  --schedule "0 9 * * 4" \
  --prompt-file WORKFLOW-MANUEL.md
```

**Avantages:**
- ✅ Simple et intégré
- ✅ Claude gère tout automatiquement
- ✅ Logs et notifications intégrés
- ✅ Pas besoin de dépendances externes

---

## 🔔 Notification Post-Exécution

### Ajouter une Notification

Après création, configurer les notifications:

```bash
# Recevoir une notification par email
claude task update newsletter-veille-hebdo \
  --notify-email dimitri@creative-developer.com \
  --on-success \
  --on-error
```

---

## 📊 Vérifier l'État de la Tâche

### Lister les Tâches Planifiées
```bash
claude task list
```

### Voir Détails d'une Tâche
```bash
claude task show newsletter-veille-hebdo
```

### Voir Historique des Exécutions
```bash
claude task history newsletter-veille-hebdo --limit 10
```

### Voir Résultats Dernière Exécution
```bash
claude task results newsletter-veille-hebdo --latest
```

---

## 🧪 Tester Avant Automation

### Tester Manuellement d'Abord

```bash
# Exécuter le workflow une fois pour vérifier
claude session start --file WORKFLOW-MANUEL.md

# Vérifier les résultats
ls -la content/*/
cat logs/URL-REGISTRY.md
```

### Si Tout OK → Automatiser

```bash
# Créer la tâche planifiée
claude task create \
  --name "newsletter-veille-hebdo" \
  --schedule "0 9 * * 4"
```

---

## 📝 Timeline Setup

```
Étape 1 : Tester manuellement
  └─ Vendredi/Samedi (après cette semaine)
  └─ Vérifier que les 8 articles sont bien créés
  └─ Vérifier que registre est mis à jour

Étape 2 : Créer la tâche planifiée
  └─ Une fois tests OK
  └─ Programmer pour jeudi prochain 09:00

Étape 3 : Laisser tourner automatiquement
  └─ Chaque jeudi 09:00
  └─ Claude crée les 8 articles
  └─ Registre se met à jour automatiquement
  └─ Git commit après chaque exécution
```

---

## 🆘 Dépannage

### Tâche ne s'exécute pas?

```bash
# Vérifier statut
claude task show newsletter-veille-hebdo

# Logs de debug
claude task logs newsletter-veille-hebdo --tail 50

# Relancer manuellement pour tester
claude task run newsletter-veille-hebdo
```

### Timezone Incorrecte?

Si tu es en France (UTC+1 ou UTC+2):

```bash
# Modifier à 08:00 UTC = 09:00-10:00 France (selon heure d'été/hiver)
# OU directement 09:00 locale:

# Option 1 : Cron avec fuseau local
0 9 * * 4 (l'heure de ta machine locale)

# Option 2 : Claude (utilise locale par défaut)
claude task create ... --tz "Europe/Paris"
```

---

## 📚 Fichiers de Référence Pour la Tâche

Quand la tâche s'exécute, elle aura accès à:

```
content/
├── frontend/
├── backend/
├── devops/
├── sys-admin/
├── database/
├── animation-css/
├── animation-3d/
└── strat-mobile/

logs/
├── URL-REGISTRY.md           ← 🔑 À VÉRIFIER EN PREMIER
├── weekly-search-*.md
└── content-created-*.md

WORKFLOW-MANUEL.md             ← 📖 Instructions détaillées
newsletter-weekly-pipeline-v2.md
README-PIPELINE-V2.md
```

---

## ✨ Résumé Action Items

1. **Immédiatement :**
   ```bash
   # Créer la tâche (une seule fois)
   claude task create \
     --name "newsletter-veille-hebdo" \
     --schedule "0 9 * * 4"
   ```

2. **Jeudi prochain à 09:00:**
   - Claude exécute automatiquement le workflow
   - Crée les 8 articles
   - Met à jour le registre
   - Fait un git commit

3. **Chaque semaine après:**
   - Automation complète, zéro intervention requise
   - Juste vérifier les logs si besoin

---

**Status:** ✅ Prêt à être configuré
**Fréquence:** Hebdomadaire (jeudi 09:00)
**Effort:** Configuration unique (5 minutes)
