/**
 * Ancien slug unique ch01-html-css → ch01-html (HTML) ou ch02-css (parties CSS / TP).
 * Chemins profonds des anciennes parties ne sont pas conservés tels quels.
 */
const LEGACY = '/formations/fondamentaux-web/ch01-html-css'

const REDIRECTS: Record<string, string> = {
  '': '/formations/fondamentaux-web/ch01-html',
  '/evaluation': '/formations/fondamentaux-web/ch02-css/evaluation',
  '/parties/p01-html-semantique': '/formations/fondamentaux-web/ch01-html/parties/p01-fondamentaux-document',
  '/parties/p01-html-semantique/modalites': '/formations/fondamentaux-web/ch01-html/parties/p01-fondamentaux-document/modalites',
  '/parties/p02-css-flexbox': '/formations/fondamentaux-web/ch02-css/parties/p07-flexbox',
  '/parties/p02-css-flexbox/modalites': '/formations/fondamentaux-web/ch02-css/parties/p07-flexbox/modalites',
  '/parties/p03-grid-responsive': '/formations/fondamentaux-web/ch02-css/parties/p14-integration-pratique',
  '/parties/p03-grid-responsive/modalites': '/formations/fondamentaux-web/ch02-css/parties/p14-integration-pratique/modalites',
  '/parties/p03-grid-responsive/modalite-tp':
    '/formations/fondamentaux-web/ch02-css/parties/p14-integration-pratique/modalite-tp',
  '/parties/p03-grid-responsive/modalite-projet':
    '/formations/fondamentaux-web/ch02-css/parties/p14-integration-pratique/modalite-projet',
}

export default defineNuxtRouteMiddleware((to) => {
  if (!to.path.startsWith(LEGACY)) return
  const suffix = to.path.slice(LEGACY.length) || ''
  const target = REDIRECTS[suffix]
  if (!target) {
    return navigateTo({
      path: '/formations/fondamentaux-web/ch01-html',
      query: to.query,
      hash: to.hash,
      replace: true,
    })
  }
  return navigateTo({ path: target, query: to.query, hash: to.hash, replace: true })
})
