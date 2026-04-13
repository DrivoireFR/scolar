import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

const modalityCardSchema = z.object({
  to: z.string(),
  title: z.string(),
  introHtml: z.string(),
  structureItems: z.array(z.string()),
  projectNoteHtml: z.string(),
  duration: z.string(),
  characteristicLines: z.array(z.string()),
  closingHtml: z.string(),
})

export default defineContentConfig({
  collections: {
    formations: defineCollection({
      type: 'page',
      source: 'formations/**',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        type: z.string().optional(),
        parent: z.string().nullable().optional(),
        role: z.string().optional(),
        order: z.number().optional(),
        duration: z.string().optional(),
        difficulty: z.string().optional(),
        modalityType: z.string().optional(),
        modalityCards: z.array(modalityCardSchema).optional(),
        /** Méta parcours (typiquement sur le chapitre pivot, ex. order === 1) */
        formationTitle: z.string().optional(),
        formationDescription: z.string().optional(),
        level: z.string().optional(),
        estimatedDuration: z.string().optional(),
        formationIcon: z.string().optional(),
        /** Hub chapitre uniquement (liste des chapitres du parcours) */
        chapterHub: z.boolean().optional(),
        /** Partie : théorie sous `parties/<slug>/` */
        estimatedTheoryMinutes: z.number().optional(),
      }),
    }),
  },
})
