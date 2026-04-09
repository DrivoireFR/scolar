<template>
  <div class="home-page">
    <div class="container">
      <!-- Hero Section -->
      <section class="hero">
        <h1>Scolar</h1>
        <p class="tagline">Formations et veille en développement web</p>

        <!-- Main CTA -->
        <div class="cta-buttons">
          <NuxtLink to="/formations" class="btn btn--primary btn--large">
            📚 Accéder aux formations
          </NuxtLink>
          <NuxtLink to="/blog" class="btn btn--secondary btn--large">
            📰 Lire la veille technologique
          </NuxtLink>
        </div>
      </section>

      <!-- Features -->
      <section class="features">
        <h2>Deux expériences pour toi</h2>
        <div class="features-grid">
          <!-- Formations -->
          <div class="feature-card">
            <div class="feature-card__icon">🎓</div>
            <h3>Formations structurées</h3>
            <p>
              Parcours complets en développement web. Maîtrise HTML, CSS, JavaScript et bien plus.
              Apprends à ton rythme avec des modalités pratiques au choix.
            </p>
            <NuxtLink to="/formations" class="feature-card__link">
              Commencer →
            </NuxtLink>
          </div>

          <!-- Veille -->
          <div class="feature-card">
            <div class="feature-card__icon">📰</div>
            <h3>Veille technologique</h3>
            <p>
              Reste à jour avec les dernières tendances. Articles hebdomadaires automatisés
              sur frontend, backend, DevOps, animations, 3D web et bien d'autres domaines.
            </p>
            <NuxtLink to="/blog" class="feature-card__link">
              Explorer →
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Latest Articles Preview -->
      <section class="preview-section">
        <h2>Derniers articles</h2>
        <p class="preview-subtitle">Découvre les derniers sujets de la veille tech</p>
        <div class="preview-placeholder">
          <p>Les articles s'affichent ici...</p>
          <NuxtLink to="/blog" class="btn btn--outline">Voir tous les articles</NuxtLink>
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

/* Hero Section */
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

.btn--secondary {
  background: white;
  color: #667eea;
  border: 2px solid white;
}

.btn--secondary:hover {
  background: transparent;
  color: white;
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.btn--outline {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.btn--outline:hover {
  background: #667eea;
  color: white;
}

/* Features */
.features {
  background: white;
  border-radius: 12px;
  padding: 4rem 2rem;
  margin: 4rem 0;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  margin-bottom: 1.5rem;
}

.feature-card__link {
  display: inline-block;
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.feature-card__link:hover {
  color: #764ba2;
}

/* Preview Section */
.preview-section {
  margin: 4rem 0;
}

.preview-section h2 {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
  text-align: center;
}

.preview-subtitle {
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.preview-placeholder {
  background: white;
  border-radius: 8px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.preview-placeholder p {
  color: #718096;
  margin-bottom: 1.5rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .tagline {
    font-size: 1.1rem;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .btn--large {
    width: 100%;
  }

  .features h2 {
    font-size: 1.75rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .preview-section h2 {
    font-size: 1.5rem;
  }
}
</style>
