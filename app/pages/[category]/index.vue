<script setup lang="ts">
const route = useRoute()
const category = route.params.category as string

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

const categoryEmoji: Record<string, string> = {
  frontend: '📰',
  backend: '🔧',
  devops: '⚙️',
  'sys-admin': '🖥️',
  database: '💾',
  'animation-css': '🎨',
  'animation-3d': '🎬',
  'strat-mobile': '📱',
}

const categoryName = categoryLabel[category] ?? category
const emoji = categoryEmoji[category] ?? '📄'

const { data: posts } = await useAsyncData(`category-${category}`, () =>
  queryCollection('blog')
    .where('path', 'LIKE', `/${category}/%`)
    .order('date', 'DESC')
    .all(),
)

if (!posts.value?.length) {
  // Catégorie inconnue — laisser la page afficher un état vide plutôt que 404
}

useSeoMeta({
  title: `${categoryName} — Newsletter`,
  description: `Articles sur ${categoryName} — tech newsletter hebdomadaire.`,
})
</script>

<template>
  <div>
    <header class="cat-header">
      <p class="breadcrumb">
        <NuxtLink to="/blog">← Toutes les catégories</NuxtLink>
      </p>
      <h1>{{ emoji }} {{ categoryName }}</h1>
      <p class="count">{{ posts?.length ?? 0 }} article{{ (posts?.length ?? 0) > 1 ? 's' : '' }}</p>
    </header>

    <ul v-if="posts?.length" class="list">
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="post.path" class="post-link">
          <span class="post-title">{{ post.title }}</span>
          <span v-if="post.date" class="post-date">{{ post.date }}</span>
        </NuxtLink>
        <p v-if="post.description" class="excerpt">{{ post.description }}</p>
        <div class="tags">
          <span v-if="post.level" class="badge">{{ post.level }}</span>
          <span v-if="post.readTime" class="read-time">{{ post.readTime }} min</span>
        </div>
      </li>
    </ul>

    <p v-else class="empty">Aucun article dans cette catégorie pour l'instant.</p>
  </div>
</template>

<style scoped>
.cat-header {
  margin-bottom: 2rem;
}
.breadcrumb {
  font-size: 0.875rem;
  margin: 0 0 0.75rem;
}
.breadcrumb a {
  color: #0d9488;
  text-decoration: none;
}
.breadcrumb a:hover {
  text-decoration: underline;
}
.count {
  font-size: 0.875rem;
  color: #666;
  margin: 0;
}
.list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.list li {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f0f0f0;
}
.list li:last-child {
  border-bottom: none;
}
.post-link {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  align-items: baseline;
  text-decoration: none;
  color: #0d9488;
  font-weight: 600;
}
.post-link:hover {
  text-decoration: underline;
}
.post-date {
  font-size: 0.875rem;
  font-weight: 400;
  color: #666;
}
.excerpt {
  margin: 0.35rem 0 0.5rem;
  font-size: 0.95rem;
  color: #444;
}
.tags {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.badge {
  background: #f0fdfa;
  color: #0d9488;
  border: 1px solid #99f6e4;
  border-radius: 0.25rem;
  padding: 0.1rem 0.4rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: capitalize;
}
.read-time {
  font-size: 0.8rem;
  color: #666;
}
.empty {
  color: #888;
  font-style: italic;
}
</style>
