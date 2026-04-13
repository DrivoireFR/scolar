<template>
  <div class="home-page">
    <div class="container">
      <section class="hero">
        <h1>Scolar</h1>
        <p class="tagline">Formations en développement web, à ton rythme</p>
        <div class="cta-buttons">
          <NuxtLink to="/formations" class="btn btn--primary btn--large">
            Voir les formations
          </NuxtLink>
        </div>
      </section>

      <section class="features">
        <h2>Pourquoi Scolar ?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-card__icon">🎓</div>
            <h3>Parcours clairs</h3>
            <p>
              Des chapitres ordonnés, de la théorie aux modalités pratiques (TP, projet, quiz).
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-card__icon">⚡</div>
            <h3>Modalités au choix</h3>
            <p>
              Chaque partie propose plusieurs façons d’apprendre et de valider tes acquis.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-card__icon">📐</div>
            <h3>Contenu à jour</h3>
            <p>
              Le matériel évolue avec les bonnes pratiques web actuelles.
            </p>
          </div>
        </div>
        <div class="features-footer">
          <NuxtLink to="/formations" class="btn btn--outline-light">
            Accéder aux formations
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>

<style scoped lang="css">
.home-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero {
  text-align: center;
  color: white;
  padding: 4rem 0;
}

.hero h1 {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.tagline {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.95;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-size: 1.05rem;
}

.btn--large {
  padding: 1.25rem 2.5rem;
}

.btn--primary {
  background: #4299e1;
  color: white;
}

.btn--primary:hover {
  background: #2c7dd8;
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.btn--outline-light {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 0.75rem 1.75rem;
}

.btn--outline-light:hover {
  background: rgba(255, 255, 255, 0.15);
}

.features {
  background: white;
  border-radius: 12px;
  padding: 4rem 2rem;
  margin: 2rem 0 4rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.features h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1a202c;
  text-align: center;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  background: #f7fafc;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  background: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.feature-card__icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.75rem;
}

.feature-card p {
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
}

.features-footer {
  margin-top: 3rem;
  text-align: center;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .tagline {
    font-size: 1.1rem;
  }

  .btn--large {
    width: 100%;
    text-align: center;
  }

  .features h2 {
    font-size: 1.75rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
