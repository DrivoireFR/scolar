// https://nuxt.com/docs/api/configuration/nuxt-config
const redirect301 = (to: string) => ({ redirect: { to, statusCode: 301 as const } })

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  /** Anciennes URLs blog / veille → hub formations */
  routeRules: {
    '/blog': redirect301('/formations'),
    '/blog/**': redirect301('/formations'),
    '/backend': redirect301('/formations'),
    '/backend/**': redirect301('/formations'),
    '/frontend': redirect301('/formations'),
    '/frontend/**': redirect301('/formations'),
    '/devops': redirect301('/formations'),
    '/devops/**': redirect301('/formations'),
    '/database': redirect301('/formations'),
    '/database/**': redirect301('/formations'),
    '/animation-css': redirect301('/formations'),
    '/animation-css/**': redirect301('/formations'),
    '/animation-3d': redirect301('/formations'),
    '/animation-3d/**': redirect301('/formations'),
    '/strat-mobile': redirect301('/formations'),
    '/strat-mobile/**': redirect301('/formations'),
    '/sys-admin': redirect301('/formations'),
    '/sys-admin/**': redirect301('/formations'),
  },
  mdc: {
    headings: {
      anchorLinks: false,
    },
  },
})