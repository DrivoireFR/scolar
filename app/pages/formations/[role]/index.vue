<template>
  <div class="role-page">
    <div class="container">
      <!-- Breadcrumb -->
      <nav class="breadcrumb">
        <NuxtLink to="/">Accueil</NuxtLink>
        <span>/</span>
        <NuxtLink to="/formations">Formations</NuxtLink>
        <span>/</span>
        <span>{{ roleName }}</span>
      </nav>

      <!-- Header -->
      <section class="header">
        <div class="header__content">
          <h1>{{ roleName }}</h1>
          <p class="subtitle">{{ roleDescription }}</p>
          <div class="header__meta">
            <span class="meta-item">
              <span class="icon">📚</span>
              {{ chapters.length }} chapitres
            </span>
            <span class="meta-item">
              <span class="icon">⏱️</span>
              {{ estimatedDuration }}
            </span>
            <span class="meta-item">
              <span class="icon">📊</span>
              Niveau: {{ level }}
            </span>
          </div>
        </div>
      </section>

      <!-- Chapters List -->
      <section class="chapters-section">
        <h2>Chapitres du parcours</h2>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
        </div>
        <p class="progress-text">{{ completedCount }}/{{ chapters.length }} chapitres complétés</p>

        <div class="chapters-list">
          <div
            v-for="(chapter, index) in chapters"
            :key="chapter.slug"
            class="chapter-item"
            :class="{ 'chapter-item--completed': chapter.completed }"
          >
            <div class="chapter-item__number">
              <span v-if="chapter.completed" class="icon-check">✓</span>
              <span v-else>{{ index + 1 }}</span>
            </div>

            <div class="chapter-item__content">
              <h3>{{ chapter.title }}</h3>
              <p>{{ chapter.description }}</p>
              <div class="chapter-item__meta">
                <span class="tag">{{ chapter.duration }}</span>
                <span class="tag">{{ chapter.difficulty }}</span>
              </div>
            </div>

            <NuxtLink
              :to="`/formations/${roleSlug}/${chapter.slug}`"
              class="chapter-item__link"
            >
              Commencer →
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section">
        <h2>Prêt(e) à commencer ?</h2>
        <p>Commence par le premier chapitre et avance à ton rythme</p>
        <NuxtLink
          v-if="firstChapterSlug"
          :to="`/formations/${roleSlug}/${firstChapterSlug}`"
          class="btn btn--primary"
        >
          Démarrer la formation
        </NuxtLink>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  chapterSlugFromPath,
  filterChapterHubTheory,
  formatRoleSlugAsTitle,
  sortTheoryByOrder,
  type FormationTheoryDoc,
} from '~/utils/formationsContent'

const route = useRoute()
const roleSlug = route.params.role as string

const { data: theoryDocs } = await useAsyncData(`formations-theory-${roleSlug}`, () =>
  queryCollection('formations')
    .where('role', '=', roleSlug)
    .where('type', '=', 'theory')
    .all(),
)

if (!theoryDocs.value?.length) {
  throw createError({
    statusCode: 404,
    statusMessage: `Parcours introuvable : ${roleSlug}`,
  })
}

const sortedTheory = sortTheoryByOrder(
  filterChapterHubTheory(theoryDocs.value as FormationTheoryDoc[]),
)
const pivotDoc = sortedTheory[0]!

const roleName = computed(
  () => pivotDoc.formationTitle ?? formatRoleSlugAsTitle(roleSlug),
)
const roleDescription = computed(() => pivotDoc.formationDescription ?? '')
const level = computed(() => pivotDoc.level ?? '')
const estimatedDuration = computed(() => pivotDoc.estimatedDuration ?? '')

const chapters = computed(() =>
  sortedTheory.map((doc) => ({
    slug: chapterSlugFromPath(doc.path),
    title: doc.title,
    description: doc.description ?? '',
    duration: doc.duration ?? '—',
    difficulty: doc.difficulty ?? '—',
    completed: false,
  })),
)

const firstChapterSlug = computed(() => chapters.value[0]?.slug ?? '')

const completedCount = computed(() => chapters.value.filter((c) => c.completed).length)
const progressPercent = computed(() => {
  if (chapters.value.length === 0) return 0
  return Math.round((completedCount.value / chapters.value.length) * 100)
})

definePageMeta({
  layout: 'default',
})
</script>

<style scoped lang="css">
.role-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem 0;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Breadcrumb */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #4a5568;
}

.breadcrumb a {
  color: #4299e1;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb a:hover {
  color: #2c7dd8;
  text-decoration: underline;
}

/* Header */
.header {
  background: white;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1a202c;
  margin-bottom: 0.75rem;
}

.subtitle {
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.header__meta {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4a5568;
  font-weight: 500;
}

.meta-item .icon {
  font-size: 1.2rem;
}

/* Chapters Section */
.chapters-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.chapters-section h2 {
  font-size: 1.75rem;
  font-weight: bold;
  color: #1a202c;
  margin-bottom: 1.5rem;
}

/* Progress Bar */
.progress-bar {
  height: 8px;
  background: #edf2f7;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4299e1, #22c97f);
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.9rem;
  color: #718096;
  margin-bottom: 2rem;
}

/* Chapters List */
.chapters-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.chapter-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 2px solid #edf2f7;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.chapter-item:hover {
  border-color: #4299e1;
  background: #f7fafc;
}

.chapter-item--completed {
  background: #f0fff4;
  border-color: #22c97f;
}

.chapter-item__number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: #edf2f7;
  border-radius: 50%;
  font-weight: bold;
  color: #2d3748;
  flex-shrink: 0;
}

.chapter-item--completed .chapter-item__number {
  background: #22c97f;
  color: white;
}

.icon-check {
  font-size: 1.25rem;
}

.chapter-item__content {
  flex: 1;
}

.chapter-item h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.5rem;
}

.chapter-item p {
  color: #4a5568;
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
}

.chapter-item__meta {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #edf2f7;
  color: #2d3748;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}

.chapter-item__link {
  padding: 0.75rem 1.5rem;
  background: #4299e1;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.chapter-item__link:hover {
  background: #2c7dd8;
}

/* CTA Section */
.cta-section {
  text-align: center;
  background: linear-gradient(135deg, #4299e1, #22c97f);
  color: white;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin-bottom: 3rem;
}

.cta-section h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.cta-section p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.95;
}

/* Button */
.btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}

.btn--primary {
  background: white;
  color: #4299e1;
}

.btn--primary:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Responsive */
@media (max-width: 768px) {
  .header h1 {
    font-size: 1.75rem;
  }

  .header__meta {
    gap: 1rem;
  }

  .chapter-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .chapter-item__link {
    width: 100%;
    text-align: center;
  }

  .cta-section {
    padding: 2rem 1rem;
  }

  .cta-section h2 {
    font-size: 1.5rem;
  }
}
</style>
