<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('blog').path(route.path).first(),
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article introuvable' })
}

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
  ogTitle: page.value.title,
  ogDescription: page.value.description,
})

const categoryLabel: Record<string, string> = {
  frontend: 'Frontend Development',
  backend: 'Backend & APIs',
  devops: 'DevOps & Deployment',
  'sys-admin': 'System Administration',
  database: 'Database & Data',
  'animation-css': 'CSS Animations',
  'animation-3d': '3D Web Graphics',
  'strat-mobile': 'Mobile Strategy',
}

const category = route.params.category as string
const categoryName = categoryLabel[category] ?? category
</script>

<template>
  <article v-if="page">
    <header class="article-head">
      <p class="breadcrumb">
        <NuxtLink to="/blog">Articles</NuxtLink>
        <span> / </span>
        <NuxtLink :to="`/${category}`">{{ categoryName }}</NuxtLink>
      </p>
      <p v-if="page.date" class="date">{{ page.date }}</p>
      <h1>{{ page.title }}</h1>
      <p v-if="page.description" class="lead">{{ page.description }}</p>
      <div class="meta">
        <span v-if="page.level" class="badge">{{ page.level }}</span>
        <span v-if="page.readTime" class="read-time">{{ page.readTime }} min de lecture</span>
      </div>
    </header>

    <ContentRenderer :value="page" class="body" />

    <footer class="article-footer">
      <div v-if="page.source?.url" class="source">
        Source :
        <a :href="page.source.url" target="_blank" rel="noopener">
          {{ page.source.title ?? page.source.website ?? page.source.url }}
        </a>
      </div>
      <p class="back">
        <NuxtLink :to="`/${category}`">← Retour à {{ categoryName }}</NuxtLink>
      </p>
    </footer>
  </article>
</template>

<style scoped>
.article-head {
  margin-bottom: 1.5rem;
}
.breadcrumb {
  font-size: 0.875rem;
  color: #666;
  margin: 0 0 1rem;
}
.breadcrumb a {
  color: #0d9488;
  text-decoration: none;
}
.breadcrumb a:hover {
  text-decoration: underline;
}
.date {
  font-size: 0.875rem;
  color: #666;
  margin: 0 0 0.5rem;
}
.lead {
  color: #444;
  margin: 0.5rem 0 0;
  font-size: 1.1rem;
}
.meta {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-top: 0.75rem;
}
.badge {
  background: #f0fdfa;
  color: #0d9488;
  border: 1px solid #99f6e4;
  border-radius: 0.25rem;
  padding: 0.1rem 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: capitalize;
}
.read-time {
  font-size: 0.875rem;
  color: #666;
}
.body {
  margin-top: 1.5rem;
}
.article-footer {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e5e5;
}
.source {
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.75rem;
}
.source a {
  color: #0d9488;
  text-decoration: none;
}
.source a:hover {
  text-decoration: underline;
}
.back a {
  color: #0d9488;
  text-decoration: none;
}
.back a:hover {
  text-decoration: underline;
}
</style>
