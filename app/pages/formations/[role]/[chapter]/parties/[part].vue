<script setup lang="ts">
interface QuizQuestion {
  id: string
  type: 'single' | 'multiple' | 'boolean'
  prompt: string
  choices: Array<{ id: string; label: string }>
  correctChoiceIds: string[]
  points: number
  feedback: { correct: string; incorrect: string }
}

interface QuizData {
  version: number
  title: string
  description: string
  shuffleQuestions: boolean
  passingScorePercent: number
  questions: QuizQuestion[]
}

const quizModules = import.meta.glob<QuizData>(
  '../../../../../../content/formations/**/quiz-validation.json',
  {
    eager: true,
    import: 'default',
  },
)

const route = useRoute()
const role = route.params.role as string
const chapter = route.params.chapter as string
const part = route.params.part as string

const partBasePath = `/formations/${role}/${chapter}/parties/${part}`
const modalitiesPath = `${partBasePath}/modalites`

function findQuizData(): QuizData | null {
  const needle = `formations/${role}/${chapter}/parties/${part}/quiz-validation.json`
  const entry = Object.entries(quizModules).find(([path]) => {
    const normalized = path.replace(/\\/g, '/')
    return normalized.includes(needle) && normalized.includes('/parties/')
  })
  return entry ? entry[1] : null
}

const { data: partData } = await useAsyncData(`part-${role}-${chapter}-${part}`, () =>
  queryCollection('formations').path(partBasePath).first(),
)

const { data: modalitiesData } = await useAsyncData(`modalities-${role}-${chapter}-${part}`, () =>
  queryCollection('formations').path(modalitiesPath).first(),
)

const { data: partIndexes } = await useAsyncData(
  `part-nav-${role}-${chapter}`,
  async () => {
    const all = await queryCollection('formations')
      .where('path', 'LIKE', `/formations/${role}/${chapter}/parties/%`)
      .all()
    const theory = (all as { path?: string; type?: string; order?: number; title?: string }[]).filter(
      (d) => {
        if (d.type !== 'part-theory' || !d.path) return false
        const segs = d.path.split('/').filter(Boolean)
        return segs.length === 5 && segs[3] === 'parties'
      },
    )
    return theory.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  },
)

if (!partData.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Partie introuvable : ${partBasePath}`,
  })
}

const quizData = findQuizData()

useSeoMeta({
  title: partData.value.title,
})

const roleLabels: Record<string, string> = {
  'fondamentaux-web': 'Fondamentaux et intégration Web',
}
const roleName = roleLabels[role] ?? role

const quizStorageKey = `quiz-${role}-${chapter}-${part}`

const modalityCards = computed(() => modalitiesData.value?.modalityCards ?? [])

const partNavList = computed(() => partIndexes.value ?? [])

const partIndex = computed(() => partNavList.value.findIndex((p) => p.path === partBasePath))

const prevPart = computed(() => {
  const i = partIndex.value
  if (i <= 0) return null
  return partNavList.value[i - 1]
})

const nextPart = computed(() => {
  const i = partIndex.value
  if (i < 0 || i >= partNavList.value.length - 1) return null
  return partNavList.value[i + 1]
})

function partSlugFromPath(path: string): string {
  const segs = path.split('/').filter(Boolean)
  return segs.at(-1) ?? ''
}
</script>

<template>
  <div v-if="partData" class="part-page">
    <nav class="breadcrumb">
      <NuxtLink to="/">Accueil</NuxtLink>
      <span> / </span>
      <NuxtLink to="/formations">Formations</NuxtLink>
      <span> / </span>
      <NuxtLink :to="`/formations/${role}`">{{ roleName }}</NuxtLink>
      <span> / </span>
      <NuxtLink :to="`/formations/${role}/${chapter}`">Chapitre</NuxtLink>
      <span> / </span>
      <span>{{ partData.title }}</span>
    </nav>

    <header class="part-header">
      <div class="part-header__content">
        <h1>{{ partData.title }}</h1>
        <p v-if="partData.description" class="part-description">{{ partData.description }}</p>
        <p v-if="partData.estimatedTheoryMinutes" class="part-duration">
          Durée indicative de la théorie : {{ partData.estimatedTheoryMinutes }} min
        </p>
      </div>
    </header>

    <main class="part-content">
      <ContentRenderer :value="partData" class="body" />
    </main>

    <section v-if="quizData" id="theory-quiz" class="part-validation">
      <h2 class="part-section-title">Validation de la théorie</h2>
      <p class="part-validation__lead">
        Réponds aux questions ci-dessous pour obtenir ton score (seuil {{ quizData.passingScorePercent }}&nbsp;% pour
        valider).
      </p>
      <div class="part-quiz-panel">
        <QuizValidator variant="compact" :quiz-data="quizData" :storage-key="quizStorageKey" />
      </div>
    </section>

    <section v-if="modalitiesData" id="theory-modalities" class="part-modalities">
      <h2 class="part-section-title">Modalités pratiques</h2>
      <p class="part-modalities__lead">Choisis une modalité pour mettre en pratique cette partie.</p>
      <ModalityCardDeck v-if="modalityCards.length" :cards="modalityCards" />
      <ContentRenderer :value="modalitiesData" class="body modality-body-after-cards" />
    </section>

    <footer class="part-footer">
      <NuxtLink
        v-if="prevPart"
        :to="`/formations/${role}/${chapter}/parties/${partSlugFromPath(prevPart.path!)}`"
        class="btn btn--secondary"
      >
        ← {{ prevPart.title }}
      </NuxtLink>
      <span v-else />

      <NuxtLink :to="`/formations/${role}/${chapter}`" class="btn btn--secondary"> Sommaire du chapitre </NuxtLink>

      <NuxtLink
        v-if="nextPart"
        :to="`/formations/${role}/${chapter}/parties/${partSlugFromPath(nextPart.path!)}`"
        class="btn btn--primary"
      >
        {{ nextPart.title }} →
      </NuxtLink>
      <NuxtLink
        v-else
        :to="`/formations/${role}/${chapter}/evaluation`"
        class="btn btn--primary"
      >
        Évaluation du chapitre →
      </NuxtLink>
    </footer>
  </div>
</template>

<style scoped>
.part-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.breadcrumb {
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 2rem;
}

.breadcrumb a {
  color: #4299e1;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.breadcrumb span {
  margin: 0 0.5rem;
}

.part-header {
  background: linear-gradient(135deg, #667eea 0%, #4299e1 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.part-header__content h1 {
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
}

.part-description {
  font-size: 1.1rem;
  opacity: 0.95;
  margin: 0 0 0.5rem 0;
}

.part-duration {
  font-size: 0.95rem;
  opacity: 0.9;
  margin: 0;
}

.part-content {
  margin-bottom: 3rem;
  line-height: 1.8;
}

.part-section-title {
  margin: 0 0 1.25rem 0;
  font-size: 1.75rem;
  color: #2d3748;
}

.part-validation {
  margin-bottom: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #edf2f7;
}

.part-validation__lead {
  margin: 0 0 1rem 0;
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.5;
}

.part-quiz-panel {
  max-width: 100%;
}

.part-modalities {
  margin-bottom: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #edf2f7;
}

.part-modalities__lead {
  margin: 0 0 1rem 0;
  color: #4a5568;
  font-size: 1rem;
}

.part-modalities :deep(.modality-body-after-cards h2:first-child) {
  margin-top: 2.5rem;
}

.part-footer {
  padding-top: 2rem;
  border-top: 1px solid #edf2f7;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn--secondary {
  background: #edf2f7;
  color: #4299e1;
}

.btn--secondary:hover {
  background: #e2e8f0;
}

.btn--primary {
  background: #4299e1;
  color: white;
}

.btn--primary:hover {
  background: #3182ce;
}

:deep(h2) {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.75rem;
}

:deep(h3) {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-size: 1.3rem;
}

:deep(p) {
  margin-bottom: 1rem;
  color: #2d3748;
}

:deep(ul),
:deep(ol) {
  margin-bottom: 1rem;
  padding-left: 2rem;
}

:deep(li) {
  margin-bottom: 0.5rem;
}

:deep(a:not(.modality-card__hitbox)) {
  color: #4299e1;
  text-decoration: none;
}

:deep(a:not(.modality-card__hitbox):hover) {
  text-decoration: underline;
}

:deep(code) {
  background: #f7fafc;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.9em;
  color: #e53e3e;
}

:deep(pre) {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  margin: 1rem 0;
}

:deep(pre code) {
  background: none;
  color: inherit;
  padding: 0;
  font-size: 0.9rem;
}

:deep(blockquote) {
  border-left: 4px solid #4299e1;
  padding-left: 1rem;
  margin: 1.5rem 0;
  color: #666;
  font-style: italic;
}

:deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

:deep(th),
:deep(td) {
  border: 1px solid #edf2f7;
  padding: 0.75rem;
  text-align: left;
}

:deep(th) {
  background: #f7fafc;
  font-weight: 600;
}

@media (max-width: 768px) {
  .part-page {
    padding: 1rem;
  }

  .part-header {
    padding: 2rem 1rem;
  }

  .part-header__content h1 {
    font-size: 1.75rem;
  }

  .part-footer {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
