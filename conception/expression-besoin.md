# Expression du besoin — Plateforme de formation web modulaire

**Document de cadrage** — Support pour la phase de conception et les travaux ultérieurs (architecture, contenu, outillage).

**Contexte historique :** une première version du projet a servi de terrain d’expérimentation pour la création de contenu automatisée (Claude Cowork, Nuxt Content). Les résultats sont satisfaisants ; la nouvelle version doit répondre à des besoins pédagogiques et opérationnels plus larges que ce prototype.

---

## 1. Porteur du besoin et objectif général

Le porteur du besoin dispense des formations autour du développement web. L’objectif est de concevoir un **système de supports et de parcours** qui :

- centralise l’ensemble des ressources pédagogiques ;
- rend les parcours **modulaires et adaptables** aux publics (classes, niveaux, contraintes de temps) ;
- intègre des **modalités d’évaluation corrigeables de façon automatisée ou semi-automatisée**, pour répondre aux difficultés posées par l’usage généralisé de l’IA dans l’apprentissage et la remise de travaux.

---

## 2. Problématiques à adresser

### 2.1 Centralisation des supports de cours

**Besoin :** un lieu unique (logique et/ou technique) où vivent théorie, exercices, évaluations et ressources associées, pour éviter la dispersion entre fichiers, outils et versions.

**Attendu fonctionnel (haut niveau) :** consultation structurée, versioning ou traçabilité raisonnable, possibilité de réutiliser des blocs entre formations.

### 2.2 Modularité de la partie pratique

**Besoin :** pour chaque module, la partie pratique ne doit pas être figée sur une seule forme. Il faut pouvoir **décliner** le travail pratique selon plusieurs **modalités pédagogiques** (exemples à préciser en conception : atelier guidé, mini-projet, quizz appliqué, défis courts, etc.).

**Objectif :** adapter le même socle de contenu à des classes ou des élèves différents (rythme, niveau, format) sans multiplier les sources de vérité.

### 2.3 Évaluation et correction

**Besoin :** mieux piloter l’évaluation des étudiants dans un contexte où l’IA facilite la production de réponses sans garantir la maîtrise réelle.

**Attendu :** à **chaque module** (ou équivalent pédagogique défini plus bas), des **modalités d’évaluation** conçues pour permettre une **correction automatisée** (tests, grilles vérifiables, exercices à réponses attendues structurées, etc.). Le détail des formats et des limites (ce qui ne peut pas être entièrement automatisé) fera l’objet de la conception détaillée.

---

## 3. Modèle de structuration souhaité (référence roadmap.sh)

La structuration des formations s’inspire de **roadmap.sh** : hiérarchie claire, progression par compétences ou domaines, lisibilité pour l’apprenant et pour l’auteur.

**Modèle retenu pour l’expression du besoin :**

```
Rôle
 └── Chapitre(s)
       ├── Théorie (document de référence)
       ├── Modalités pratiques au choix (une ou plusieurs)
       ├── Évaluation (quand le formateur / le parcours le prévoit)
       └── Correction / feedback (liée aux modalités choisies)
```

### 3.1 Rôle

Unité de plus haut niveau alignée sur une **feuille de route** type roadmap (ex. « Front-end », « DevOps », « Accessibilité » — à définir par formation). Chaque rôle porte une **vision d’ensemble** et, voir section 4, un **projet support commun**.

### 3.2 Chapitre

Découpe à l’intérieur d’un rôle. Pour chaque chapitre, le parcours type est :

1. **Théorie** — un document théorique de base (point d’entrée obligatoire du chapitre).
2. **Validation / passage à la suite** — une fois la théorie « validée » (règle à définir : auto-déclaratif, quiz court, seuil minimal, etc.).
3. **Modalités pratiques** — l’apprenant (ou le formateur pour la classe) choisit **parmi les modalités proposées** pour ce chapitre (TP, idéation, quizz, autre — inventaire à compléter en conception).
4. **Évaluation** — activée **lorsque le dispositif le permet** (timing libre ou imposé selon les règles métier), avec mécanismes de correction adaptés aux types d’exercices.

#### 3.2.1 Arborescence : chapitres parents et enfants

Un chapitre peut avoir un ou plusieurs **chapitres parents** (modèle acyclique, similaire à Git) :

- **Chapitre parent** : chapitre d’où découle la théorie commune et les prérequis
- **Chapitres enfants** : variantes ou chemins parallèles du même chapitre (ex. Ch.1-TP, Ch.1-Projet)
- **Convergence** : tous les enfants d’un parent mènent aux mêmes chapitres suivants (sortie unique du projet fil rouge)

**Exemple :**
```
Chapitre 1 — HTML & CSS (parent, théorie commune)
  ├── Chapitre 1-TP (TP intensif, parent: 1)
  └── Chapitre 1-Projet (voie progressive, parent: 1)

Chapitre 2 — JavaScript Essentiel
  (prérequis : Chapitre 1-TP OU Chapitre 1-Projet)
```

Cela permet une **modularité accrue** sans dupliquer la théorie.

### 3.3 Enchaînement théorie → pratique → évaluation

Le besoin exprime une **progression logique** : théorie d’abord, puis pratique sous forme choisie, puis évaluation. Les exceptions éventuelles (révision, rattrapage, parcours accéléré) pourront être traitées en conception comme variantes de parcours ou comme **chemins parallèles** (chapitres enfants du même parent), pas comme le cas nominal.

---

## 4. Projet support par rôle

Pour **chaque rôle**, un **projet support** unique accompagne tout le parcours des chapitres :

- Le projet **s’enchaîne** d’un chapitre à l’autre (continuité narrative et technique).
- Pour chaque chapitre, la ou les **modalités de type TP** doivent pouvoir **reposer sur une base de code (ou d’artefacts) fournie** correspondant à l’état attendu **à l’entrée** de ce chapitre, afin que l’on puisse **reprendre le fil en cours de route** sans repartir de zéro si un apprenant rejoint ou revient sur un module intermédiaire.

**Besoin sous-jacent :** réduire la friction pédagogique et technique ; aligner dépôt, consignes et état du dépôt sur la progression officielle du rôle.

---

## 5. Périmètre laissé ouvert (à traiter en conception)

Les éléments suivants sont **volontairement** non figés dans ce document ; ils devront être précisés lors des ateliers de conception :

- Liste exhaustive des **modalités pratiques** et des **modalités d’évaluation** par type de contenu.
- Niveau d’**automatisation** de la correction selon le type d’exercice (binaire, score partiel, revue manuelle complémentaire).
- **Outils** cibles (stack technique, CMS, générateur de contenu, CI pour les tests étudiants, etc.) — compatible ou non avec l’existant Nuxt Content / workflows type Cowork.
- Gestion des **droits** (formateur vs apprenant), **multi-formations**, et **évolution du contenu** dans le temps.

---

## 6. Critères de succès (indicatifs)

Une solution répond au besoin si elle permet notamment de :

- produire et maintenir les supports **depuis une structure claire** (rôle → chapitre → blocs) ;
- proposer **plusieurs chemins pratiques** par chapitre sans dupliquer la théorie ;
- associer à chaque module des **évaluations correctibles** de manière **majoritairement automatisée** pour le formateur ;
- faire vivre un **projet fil rouge** par rôle avec **bases intermédiaires** exploitables à chaque étape.

---

## 7. Conclusions — Façon de mener le projet (recommandations)

Les points suivants peuvent servir de **fil conducteur** pour la suite, sans préjuger des choix techniques définitifs.

1. **Séparer contenu, parcours et outillage**  
   Définir d’abord le **modèle informationnel** (rôle, chapitre, types de blocs, projet support, artefacts par chapitre) avant d’ancrer dans une stack précise. Cela évite de figer trop tôt le contenu dans des contraintes d’outil.

2. **Prototype par une verticale courte**  
   Choisir **un rôle**, **deux chapitres**, une **modalité pratique** et une **évaluation auto-corrigée** pour valider la chaîne complète (théorie → TP avec base → évaluation → correction) avant de généraliser.

3. **Spécifier tôt les formats d’évaluation auto-corrigeables**  
   La contrainte « correction automatisée » conditionne les types de questions et de livrables. Un atelier dédié (même court) limite les écarts entre intention pédagogique et faisabilité technique.

4. **Tracer la relation « base de code au chapitre N »**  
   Documenter pour chaque chapitre : d’où vient la base (chapitre précédent, branche/tag), où doit aboutir le TP (état pour le chapitre suivant). C’est le cœur du dispositif projet support.

5. **Gouvernance du contenu**  
   Prévoir qui valide les mises à jour (roadmap externe qui évolue, dépendances des bases de code, régression des évaluations). Même léger, un **processus** évite l’obsolescence silencieuse des supports.

Ce document constitue la **référence d’intention** pour les livrables de conception ultérieurs (user stories, architecture cible, maquettes de parcours apprenant / formateur).
