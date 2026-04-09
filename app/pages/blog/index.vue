<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('blog').order('date', 'DESC').all(),
)

const categories = [
  { slug: 'frontend',      label: 'Frontend Development',   emoji: '📰' },
  { slug: 'backend',       label: 'Backend & APIs',          emoji: '🔧' },
  { slug: 'devops',        label: 'DevOps & Deployment',     emoji: '⚙️'  },
  { slug: 'sys-admin',     label: 'System Administration',   emoji: '🖥️'  },
  { slug: 'database',      label: 'Database & Data',         emoji: '💾' },
  { slug: 'animation-css', label: 'CSS Animations',          emoji: '🎨' },
  { slug: 'animation-3d',  label: '3D Web Graphics',         emoji: '🎬' },
  { slug: 'strat-mobile',  label: 'Mobile Strategy',         emoji: '📱' },
]

// Regrouper les articles par catégorie
const postsByCategory = computed(() => {
  const map: Record<string, typeof posts.value> = {}
  for (const cat of categories) {
    map[cat.slug] = posts.value?.filter(p => p.path?.startsWith(`/${cat.slug}/`)) ?? []
  }
  return map
})

const totalPosts = computed(() => posts.value?.length ?? 0)

useSeoMeta({
  title: 'Newsletter Tech — Toutes les catégories',
  description: 'Articles hebdomadaires sur le dev web, DevOps, bases de données, 3D et mobile.',
})
</script>

<template>
  <div>
    <header class="page-header">
      <h1>Newsletter Tech</h1>
      <p class="subtitle">
        {{ totalPosts }} article{{ totalPosts > 1 ? 's' : '' }} répartis en 8 catégories
      </p>
    </header>

    <div class="categories">
      <section
        v-for="cat in categories"
        :key="cat.slug"
        class="category-block"
        :class="{ empty: !postsByCategory[cat.slug]?.length }"
      >
        <div class="cat-title">
          <h2>
            <NuxtLink :to="`/${cat.slug}`">
              {{ cat.emoji }} {{ cat.label }}
            </NuxtLink>
          </h2>
          <span class="cat-count">
            {{ postsByCategory[cat.slug]?.length ?? 0 }} article{{ (postsByCategory[cat.slug]?.length ?? 0) > 1 ? 's' : '' }}
          </span>
        </div>

        <ul v-if="postsByCategory[cat.slug]?.length" class="post-list">
          <li
            v-for="post in postsByCategory[cat.slug]?.slice(0, 3)"
            :key="post.path"
          >
            <NuxtLink :to="post.path" class="post-link">
              <span class="post-title">{{ post.title }}</span>
              <span v-if="post.date" class="post-date">{{ post.date }}</span>
            </NuxtLink>
            <p v-if="post.description" class="excerpt">{{ post.description }}</p>
          </li>
        </ul>

        <p v-else class="empty-label">Aucun article pour l'instant.</p>

        <NuxtLink
          v-if="(postsByCategory[cat.slug]?.length ?? 0) > 3"
          :to="`/${cat.slug}`"
          class="see-all"
        >
          Voir tous les articles →
        </NuxtLink>
      </section>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  margin-bottom: 2rem;
}
.subtitle {
  color: #666;
  margin: 0;
}
.categories {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.category-block {
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e5e5;
}
.category-block:last-child {
  border-bottom: none;
}
.cat-title {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
}
.cat-title h2 {
  margin: 0;
  font-size: 1.1rem;
}
.cat-title h2 a {
  color: #1a1a1a;
  text-decoration: none;
}
.cat-title h2 a:hover {
  color: #0d9488;
}
.cat-count {
  font-size: 0.8rem;
  color: #999;
  white-space: nowrap;
}
.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.post-list li {
  margin-bottom: 0.85rem;
}
.post-link {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 0.75rem;
  align-items: baseline;
  text-decoration: none;
  color: #0d9488;
  font-weight: 600;
  font-size: 0.95rem;
}
.post-link:hover {
  text-decoration: underline;
}
.post-date {
  font-size: 0.8rem;
  font-weight: 400;
  color: #888;
}
.excerpt {
  margin: 0.2rem 0 0;
  font-size: 0.875rem;
  color: #555;
}
.see-all {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #0d9488;
  text-decoration: none;
}
.see-all:hover {
  text-decoration: underline;
}
.empty-label {
  font-size: 0.875rem;
  color: #aaa;
  font-style: italic;
  margin: 0;
}
</style>
