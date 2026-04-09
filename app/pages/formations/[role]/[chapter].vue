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

const quizModules = import.meta.glob<QuizData>('~/content/formations/**/quiz-validation.json', {
  eager: true,
  import: 'default',
})

const route = useRoute()
const role = route.params.role as string
const chapter = route.params.chapter as string

const chapterPath = `/formations/${role}/${chapter}`
const modalitiesPath = `/formations/${role}/${chapter}/modalites`

function findQuizData(): QuizData | null {
  const needle = `formations/${role}/${chapter}/quiz-validation.json`
  const entry = Object.entries(quizModules).find(([path]) => path.includes(needle))
  return entry ? entry[1] : null
}

const { data: chapterData } = await useAsyncData(`chapter-${role}-${chapter}`, () =>
  queryCollection('formations').path(chapterPath).first(),
)

const { data: modalitiesData } = await useAsyncData(`modalities-${role}-${chapter}`, () =>
  queryCollection('formations').path(modalitiesPath).first(),
)

if (!chapterData.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Chapitre introuvable : ${chapterPath}`,
  })
}

const quizData = findQuizData()

useSeoMeta({
  title: chapterData.value.title,
})

const roleLabels: Record<string, string> = {
  'fondamentaux-web': 'Fondamentaux et intégration Web',
}
const roleName = roleLabels[role] ?? role

const quizStorageKey = `quiz-${role}-${chapter}`
</script>

<template>
  <div v-if="chapterData" class="chapter-page">
    <nav class="breadcrumb">
      <NuxtLink to="/">Accueil</NuxtLink>
      <span> / </span>
      <NuxtLink to="/formations">Formations</NuxtLink>
      <span> / </span>
      <NuxtLink :to="`/formations/${role}`">{{ roleName }}</NuxtLink>
      <span> / </span>
      <span>{{ chapterData.title }}</span>
    </nav>

    <header class="chapter-header">
      <div class="chapter-header__content">
        <h1>{{ chapterData.title }}</h1>
        <p v-if="chapterData.description" class="chapter-description">{{ chapterData.description }}</p>
      </div>
    </header>

    <main class="chapter-content">
      <ContentRenderer :value="chapterData" class="body" />
    </main>

    <section v-if="quizData" id="theory-quiz" class="chapter-validation">
      <h2 class="chapter-section-title">Validation de la théorie</h2>
      <p class="chapter-validation__lead">
        Réponds aux questions ci-dessous pour obtenir ton score (seuil {{ quizData.passingScorePercent }}&nbsp;% pour valider).
      </p>
      <div class="chapter-quiz-panel">
        <QuizValidator
          variant="compact"
          :quiz-data="quizData"
          :storage-key="quizStorageKey"
        />
      </div>
    </section>

    <section v-if="modalitiesData" id="theory-modalities" class="chapter-modalities">
      <h2 class="chapter-section-title">Modalités pratiques</h2>
      <p class="chapter-modalities__lead">Choisissez une modalité au choix pour mettre en pratique la théorie.</p>
      <ContentRenderer :value="modalitiesData" class="body" />
    </section>

    <footer class="chapter-footer">
      <NuxtLink :to="`/formations/${role}`" class="btn btn--secondary">
        ← Retour à la formation
      </NuxtLink>
    </footer>
  </div>
</template>

<style scoped>
.chapter-page {
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

.chapter-header {
  background: linear-gradient(135deg, #667eea 0%, #4299e1 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.chapter-header__content h1 {
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
}

.chapter-description {
  font-size: 1.1rem;
  opacity: 0.95;
  margin: 0;
}

.chapter-content {
  margin-bottom: 3rem;
  line-height: 1.8;
}

.chapter-section-title {
  margin: 0 0 1.25rem 0;
  font-size: 1.75rem;
  color: #2d3748;
}

.chapter-validation {
  margin-bottom: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #edf2f7;
}

.chapter-validation__lead {
  margin: 0 0 1rem 0;
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.5;
}

.chapter-quiz-panel {
  max-width: 100%;
}

.chapter-modalities {
  margin-bottom: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #edf2f7;
}

.chapter-modalities__lead {
  margin: 0 0 1rem 0;
  color: #4a5568;
  font-size: 1rem;
}

.chapter-modalities :deep(.modality-cards) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-top: 1rem;
}

.chapter-modalities :deep(.modality-card) {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  background: #f7fafc;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

.chapter-modalities :deep(.modality-card h2) {
  margin-top: 0;
  font-size: 1.35rem;
}

.chapter-footer {
  padding-top: 2rem;
  border-top: 1px solid #edf2f7;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
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

:deep(a) {
  color: #4299e1;
  text-decoration: none;
}

:deep(a:hover) {
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
  .chapter-page {
    padding: 1rem;
  }

  .chapter-header {
    padding: 2rem 1rem;
  }

  .chapter-header__content h1 {
    font-size: 1.75rem;
  }
}
</style>
