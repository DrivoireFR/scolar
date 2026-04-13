/** Champs utiles des `index.md` de chapitre (type theory) + méta parcours sur le pivot */
export interface FormationTheoryDoc {
  path: string
  title: string
  description?: string | null
  role?: string
  order?: number
  type?: string
  duration?: string
  difficulty?: string
  formationTitle?: string
  formationDescription?: string
  level?: string
  estimatedDuration?: string
  formationIcon?: string
  estimatedTheoryMinutes?: number
}

/** Dernier segment du chemin Nuxt Content, ex. /formations/foo/bar → bar */
export function chapterSlugFromPath(path: string): string {
  const parts = path.split('/').filter(Boolean)
  return parts.at(-1) ?? ''
}

export function formatRoleSlugAsTitle(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export function sortTheoryByOrder(docs: FormationTheoryDoc[]): FormationTheoryDoc[] {
  return [...docs].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}

/** Exclut les docs sous `parties/` (théorie de Partie) pour la liste des chapitres du parcours */
export function filterChapterHubTheory(docs: FormationTheoryDoc[]): FormationTheoryDoc[] {
  return docs.filter((d) => !d.path.includes('/parties/'))
}
