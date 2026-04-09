<script setup lang="ts">
// Ce fichier est conservé pour compatibilité mais les articles sont maintenant
// accessibles via /[category]/[slug]. On redirige vers /blog.
await navigateTo('/blog', { replace: true })
</script>
