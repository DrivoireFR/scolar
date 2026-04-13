<script setup lang="ts">
definePageMeta({
  middleware: ['redirect-formation-modalites'],
})

const route = useRoute()
const role = route.params.role as string
const chapter = route.params.chapter as string
const part = route.params.part as string
const modalite = route.params.modalite as string

const modalitePath = `/formations/${role}/${chapter}/parties/${part}/${modalite}`

const { data: modaliteData } = await useAsyncData(
  `modalite-part-${role}-${chapter}-${part}-${modalite}`,
  () => queryCollection('formations').path(modalitePath).first(),
)

if (!modaliteData.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Modalité introuvable : ${modalitePath}`,
  })
}

const { data: partTheory } = await useAsyncData(`part-title-${role}-${chapter}-${part}`, () =>
  queryCollection('formations').path(`/formations/${role}/${chapter}/parties/${part}`).first(),
)

useSeoMeta({
  title: modaliteData.value.title,
})

const roleLabels: Record<string, string> = {
  'fondamentaux-web': 'Fondamentaux et intégration Web',
}

const roleName = roleLabels[role] ?? role
const partTitle = computed(() => partTheory.value?.title ?? 'Partie')
</script>

<template>
  <div v-if="modaliteData" class="modalite-page">
    <nav class="breadcrumb">
      <NuxtLink to="/">Accueil</NuxtLink>
      <span> / </span>
      <NuxtLink to="/formations">Formations</NuxtLink>
      <span> / </span>
      <NuxtLink :to="`/formations/${role}`">{{ roleName }}</NuxtLink>
      <span> / </span>
      <NuxtLink :to="`/formations/${role}/${chapter}`">Chapitre</NuxtLink>
      <span> / </span>
      <NuxtLink :to="`/formations/${role}/${chapter}/parties/${part}`">{{ partTitle }}</NuxtLink>
      <span> / </span>
      <span>{{ modaliteData.title }}</span>
    </nav>

    <header class="modalite-header">
      <div class="modalite-header__content">
        <h1>{{ modaliteData.title }}</h1>
        <p v-if="modaliteData.description" class="modalite-description">{{ modaliteData.description }}</p>
      </div>
    </header>

    <main class="modalite-content">
      <ContentRenderer :value="modaliteData" class="body" />
    </main>

    <footer class="modalite-footer">
      <NuxtLink :to="`/formations/${role}/${chapter}/parties/${part}`" class="btn btn--secondary">
        ← Retour à la partie
      </NuxtLink>
    </footer>
  </div>
</template>

<style scoped>
.modalite-page {
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

.modalite-header {
  background: linear-gradient(135deg, #667eea 0%, #4299e1 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.modalite-header__content h1 {
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
}

.modalite-description {
  font-size: 1.1rem;
  opacity: 0.95;
  margin: 0;
}

.modalite-content {
  margin-bottom: 3rem;
  line-height: 1.8;
}

.modalite-footer {
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

@media (max-width: 768px) {
  .modalite-page {
    padding: 1rem;
  }

  .modalite-header {
    padding: 2rem 1rem;
  }

  .modalite-header__content h1 {
    font-size: 1.75rem;
  }
}
</style>
