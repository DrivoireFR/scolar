<template>
  <div class="formations-page">
    <div class="container">
      <!-- Header -->
      <section class="header">
        <h1>Formations</h1>
        <p class="subtitle">Parcours de formation complets en développement web</p>
      </section>

      <!-- Roles List -->
      <section class="roles-section">
        <div class="roles-grid">
          <!-- Fondamentaux et Intégration Web -->
          <NuxtLink to="/formations/fondamentaux-web" class="role-card">
            <div class="role-card__icon">🌐</div>
            <h2>Fondamentaux et intégration Web</h2>
            <p class="role-card__description">
              Intégrer une maquette Figma en HTML/CSS et maîtriser les bases du web
            </p>
            <div class="role-card__meta">
              <span class="badge">4 chapitres</span>
              <span class="badge">Débutant</span>
            </div>
            <div class="role-card__arrow">→</div>
          </NuxtLink>

          <!-- Front-end (à venir) -->
          <div class="role-card role-card--disabled">
            <div class="role-card__icon">⚛️</div>
            <h2>Front-end Developer</h2>
            <p class="role-card__description">
              React, Vue, Nuxt et frameworks modernes
            </p>
            <div class="role-card__meta">
              <span class="badge">4 chapitres</span>
              <span class="badge">Intermédiaire</span>
              <span class="badge badge--soon">À venir</span>
            </div>
          </div>

          <!-- Back-end (à venir) -->
          <div class="role-card role-card--disabled">
            <div class="role-card__icon">🔧</div>
            <h2>Back-end Developer</h2>
            <p class="role-card__description">
              Node.js, Express, bases de données et APIs
            </p>
            <div class="role-card__meta">
              <span class="badge">4 chapitres</span>
              <span class="badge">Intermédiaire</span>
              <span class="badge badge--soon">À venir</span>
            </div>
          </div>

          <!-- DevOps (à venir) -->
          <div class="role-card role-card--disabled">
            <div class="role-card__icon">🚀</div>
            <h2>DevOps Engineer</h2>
            <p class="role-card__description">
              Docker, Kubernetes, CI/CD et infrastructure
            </p>
            <div class="role-card__meta">
              <span class="badge">4 chapitres</span>
              <span class="badge">Avancé</span>
              <span class="badge badge--soon">À venir</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Info Section -->
      <section class="info-section">
        <h2>Comment ça marche ?</h2>
        <div class="info-grid">
          <div class="info-card">
            <div class="info-card__number">1</div>
            <h3>Choisir une formation</h3>
            <p>Sélectionne un rôle qui t'intéresse</p>
          </div>
          <div class="info-card">
            <div class="info-card__number">2</div>
            <h3>Parcourir les chapitres</h3>
            <p>Avance chapitre par chapitre à ton rythme</p>
          </div>
          <div class="info-card">
            <div class="info-card__number">3</div>
            <h3>Apprendre et pratiquer</h3>
            <p>Théorie, modalités pratiques et évaluation</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>

<style scoped lang="css">
.formations-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 4rem;
}

.header h1 {
  font-size: 3rem;
  font-weight: bold;
  color: #1a202c;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.25rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
}

/* Roles Section */
.roles-section {
  margin-bottom: 4rem;
}

.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.role-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.role-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.role-card--disabled {
  opacity: 0.7;
  cursor: not-allowed;
  background: #f7fafc;
}

.role-card--disabled:hover {
  transform: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.role-card__icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.role-card h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.75rem;
}

.role-card__description {
  flex: 1;
  color: #4a5568;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.role-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #edf2f7;
  color: #2d3748;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.badge--soon {
  background: #fef5e7;
  color: #d68910;
}

.role-card__arrow {
  font-size: 1.5rem;
  color: #4299e1;
  transition: transform 0.3s ease;
}

.role-card:hover .role-card__arrow {
  transform: translateX(4px);
}

/* Info Section */
.info-section {
  background: white;
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
}

.info-section h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #1a202c;
  margin-bottom: 2rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.info-card {
  padding: 1.5rem;
}

.info-card__number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: #4299e1;
  color: white;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.info-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.5rem;
}

.info-card p {
  color: #4a5568;
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .roles-grid {
    grid-template-columns: 1fr;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
