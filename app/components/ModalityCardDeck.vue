<script setup lang="ts">
export interface ModalityCardData {
  to: string
  title: string
  introHtml: string
  structureItems: string[]
  projectNoteHtml: string
  duration: string
  characteristicLines: string[]
  closingHtml: string
}

defineProps<{
  cards: ModalityCardData[]
}>()
</script>

<template>
  <div class="modality-cards">
    <div
      v-for="(card, idx) in cards"
      :key="card.to"
      class="modality-card"
    >
      <NuxtLink
        :to="card.to"
        class="modality-card__hitbox"
        :aria-labelledby="`modality-title-${idx}`"
      />
      <div class="modality-card__inner">
        <h2 :id="`modality-title-${idx}`" class="modality-card__title">
          {{ card.title }}
        </h2>
        <p class="modality-card__intro" v-html="card.introHtml" />
        <h3>Structure</h3>
        <ul>
          <li v-for="(item, i) in card.structureItems" :key="i" v-html="item" />
        </ul>
        <p class="modality-card__note" v-html="card.projectNoteHtml" />
        <h3>Durée totale</h3>
        <p>{{ card.duration }}</p>
        <h3>Caractéristiques</h3>
        <p class="modality-card__characteristics">
          <template v-for="(line, li) in card.characteristicLines" :key="li">
            <template v-if="li > 0"><br></template>{{ line }}
          </template>
        </p>
        <div class="modality-card__closing" v-html="card.closingHtml" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modality-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-top: 1rem;
}

.modality-card {
  position: relative;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  background: #f7fafc;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.modality-card:hover {
  border-color: #4299e1;
  box-shadow: 0 4px 12px rgba(66, 153, 225, 0.2);
}

.modality-card:focus-within {
  outline: 2px solid #4299e1;
  outline-offset: 3px;
}

.modality-card__hitbox {
  position: absolute;
  inset: 0;
  z-index: 1;
  border-radius: 8px;
}

.modality-card__inner {
  position: relative;
  z-index: 0;
  pointer-events: none;
}

.modality-card__title {
  margin-top: 0;
  font-size: 1.35rem;
  color: #2d3748;
}

.modality-card__intro,
.modality-card__note,
.modality-card__characteristics,
.modality-card__closing :deep(p) {
  margin-bottom: 1rem;
  color: #2d3748;
}

.modality-card h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-size: 1.3rem;
}

.modality-card ul {
  margin-bottom: 1rem;
  padding-left: 2rem;
}

.modality-card li {
  margin-bottom: 0.5rem;
}
</style>
