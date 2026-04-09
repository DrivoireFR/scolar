import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: '**',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string().optional(),
        category: z.string().optional(),
        tags: z.array(z.string()).optional(),
        level: z.string().optional(),
        readTime: z.number().optional(),
        featured: z.boolean().optional(),
        source: z.object({
          title: z.string().optional(),
          author: z.string().optional(),
          url: z.string().optional(),
          website: z.string().optional(),
        }).optional(),
      }),
      indexes: [{ columns: ['date'] }, { columns: ['category'] }],
    }),
  },
})
