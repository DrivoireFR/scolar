<script setup lang="ts">
definePageMeta({
  middleware: ['redirect-formation-sections'],
})

const route = useRoute()
const role = route.params.role as string
const chapter = route.params.chapter as string
const section = route.params.section as string

const sectionPath = `/formations/${role}/${chapter}/${section}`

const { data: sectionData } = await useAsyncData(`section-${role}-${chapter}-${section}`, () =>
  queryCollection('formations').path(sectionPath).first(),
)

if (!sectionData.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Section introuvable : ${sectionPath}`
  })
}

useSeoMeta({
  title: sectionData.value.title,
})

// Labels
const roleLabels: Record<string, string> = {
  'fondamentaux-web': 'Fondamentaux et intégration Web',
}

const roleName = roleLabels[role] ?? role
</script>

<template>
  <div v-if="sectionData" class="section-page">
    <!-- Breadcrumb -->
    <nav class="breadcrumb">
      <NuxtLink to="/">Accueil</NuxtLink>
      <span> / </span>
      <NuxtLink to="/formations">Formations</NuxtLink>
      <span> / </span>
      <NuxtLink :to="`/formations/${role}`">{{ roleName }}</NuxtLink>
      <span> / </span>
      <NuxtLink :to="`/formations/${role}/${chapter}`">Chapitre</NuxtLink>
      <span> / </span>
      <span>{{ sectionData.title }}</span>
    </nav>

    <!-- Header -->
    <header class="section-header">
      <div class="section-header__content">
        <h1>{{ sectionData.title }}</h1>
        <p v-if="sectionData.description" class="section-description">{{ sectionData.description }}</p>
      </div>
    </header>

    <!-- Contenu -->
    <main class="section-content">
      <ContentRenderer :value="sectionData" class="body" />
    </main>

    <!-- Navigation -->
    <footer class="section-footer">
      <NuxtLink :to="`/formations/${role}/${chapter}`" class="btn btn--secondary">
        ← Retour au chapitre
      </NuxtLink>
    </footer>
  </div>
</template>

<style scoped>
.section-page {
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
  color: #4299E1;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.breadcrumb span {
  margin: 0 0.5rem;
}

.section-header {
  background: linear-gradient(135deg, #667EEA 0%, #4299E1 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.section-header__content h1 {
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
}

.section-description {
  font-size: 1.1rem;
  opacity: 0.95;
  margin: 0;
}

.section-content {
  margin-bottom: 3rem;
  line-height: 1.8;
}

.section-footer {
  padding-top: 2rem;
  border-top: 1px solid #EDF2F7;
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
  background: #EDF2F7;
  color: #4299E1;
}

.btn--secondary:hover {
  background: #E2E8F0;
}

/* Contenu Markdown */
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
  color: #2D3748;
}

:deep(ul), :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 2rem;
}

:deep(li) {
  margin-bottom: 0.5rem;
}

:deep(a) {
  color: #4299E1;
  text-decoration: none;
}

:deep(a:hover) {
  text-decoration: underline;
}

:deep(code) {
  background: #F7FAFC;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.9em;
  color: #E53E3E;
}

:deep(pre) {
  background: #2D3748;
  color: #E2E8F0;
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
  border-left: 4px solid #4299E1;
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

:deep(th), :deep(td) {
  border: 1px solid #EDF2F7;
  padding: 0.75rem;
  text-align: left;
}

:deep(th) {
  background: #F7FAFC;
  font-weight: 600;
}

@media (max-width: 768px) {
  .section-page {
    padding: 1rem;
  }

  .section-header {
    padding: 2rem 1rem;
  }

  .section-header__content h1 {
    font-size: 1.75rem;
  }
}
</style>
