<template>
  <div class="layout">
    <header class="header">
      <NuxtLink to="/" class="brand">Scolar</NuxtLink>
      <nav class="nav">
        <NuxtLink to="/">Accueil</NuxtLink>
        <NuxtLink to="/formations">Formations</NuxtLink>
      </nav>
    </header>
    <main class="main">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
.layout {
  max-width: min(1200px, 100%);
  margin: 0 auto;
  padding: 1.5rem;
  font-family: system-ui, sans-serif;
  line-height: 1.5;
  color: #1a1a1a;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e5e5;
}
.brand {
  font-weight: 700;
  text-decoration: none;
  color: #0d9488;
}
.nav {
  display: flex;
  gap: 1.25rem;
}
.nav a {
  color: #444;
  text-decoration: none;
}
.nav a:hover {
  text-decoration: underline;
}
.main :deep(h1) {
  font-size: 1.75rem;
  margin-top: 0;
}
.main :deep(h2) {
  font-size: 1.25rem;
  margin-top: 1.5rem;
}
</style>
