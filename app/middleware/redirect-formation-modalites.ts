/** Redirige les URLs directes vers quiz-validation.md / modalites.md vers la page Partie ou chapitre avec ancre. */
export default defineNuxtRouteMiddleware((to) => {
  const modalite = to.params.modalite
  if (typeof modalite !== 'string') return
  if (modalite !== 'quiz-validation' && modalite !== 'modalites') return
  const role = to.params.role as string
  const chapter = to.params.chapter as string
  const part = to.params.part
  const hash = modalite === 'quiz-validation' ? '#theory-quiz' : '#theory-modalities'
  if (typeof part === 'string' && part.length) {
    return navigateTo({
      path: `/formations/${role}/${chapter}/parties/${part}`,
      hash,
      replace: true,
    })
  }
  return navigateTo({
    path: `/formations/${role}/${chapter}`,
    hash,
    replace: true,
  })
})
