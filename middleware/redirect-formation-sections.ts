export default defineNuxtRouteMiddleware((to) => {
  const section = to.params.section
  if (typeof section !== 'string') return
  if (section !== 'quiz-validation' && section !== 'modalites') return
  const role = to.params.role as string
  const chapter = to.params.chapter as string
  return navigateTo({
    path: `/formations/${role}/${chapter}`,
    hash: section === 'quiz-validation' ? '#theory-quiz' : '#theory-modalities',
    replace: true,
  })
})
