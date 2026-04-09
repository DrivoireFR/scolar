# NuxtContent Structure for Multi-Category Newsletter

## Folder Organization

Your Nuxt project should have this structure:

```
your-nuxt-project/
├── content/
│   ├── frontend/
│   │   ├── 2024-03-27-react-19-features.md
│   │   ├── 2024-03-26-vue-3-performance.md
│   │   └── README.md (optional index)
│   │
│   ├── backend/
│   │   ├── 2024-03-27-nodejs-best-practices.md
│   │   └── ...
│   │
│   ├── devops/
│   │   └── ...
│   │
│   ├── sys-admin/
│   │   └── ...
│   │
│   ├── database/
│   │   └── ...
│   │
│   ├── animation-css/
│   │   └── ...
│   │
│   ├── animation-3d/
│   │   └── ...
│   │
│   ├── strat-mobile/
│   │   └── ...
│   │
│   └── index.md (main newsletter page)
│
├── .skills/
│   ├── 1-weekly-search/
│   │   └── SKILL.md
│   ├── 2-summarize-create/
│   │   └── SKILL.md
│   ├── 3-git-push/
│   │   └── SKILL.md
│   ├── 4-generate-static/
│   │   └── SKILL.md
│   └── 5-notify/
│       └── SKILL.md
│
├── logs/
│   ├── weekly-search-2024-03-27.md
│   ├── content-created-2024-03-27.md
│   └── newsletter-run-log.md
│
├── sources.json (or sources-extended.json)
├── nuxt.config.ts
└── package.json
```

## Nuxt Configuration

Add this to your `nuxt.config.ts` to enable NuxtContent:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    contentHead: false,
    sources: {
      content: {
        driver: 'fs',
        base: './content'
      }
    },
    highlight: {
      theme: 'dracula',
      preload: ['js', 'ts', 'html', 'css', 'python', 'bash', 'sql']
    },
    markdown: {
      remarkPlugins: ['remark-emoji'],
      rehypePlugins: ['rehype-external-links'],
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/feed.xml'],
      ignore: ['/admin']
    }
  }
})
```

## Create Category Index Files

Create a `README.md` in each category folder:

```markdown
---
title: Frontend Articles
description: Latest news and articles about frontend development
layout: category
category: frontend
---

# Frontend Development

Latest articles on React, Vue, CSS, performance, and more.
```

## Main Newsletter Page

Create `content/index.md`:

```markdown
---
title: Tech Newsletter
description: Multi-domain technology news and insights
layout: homepage
---

# Tech Newsletter

A curated collection of articles across 8 tech domains:

- **[Frontend](/frontend)** - React, Vue, CSS, UX
- **[Backend](/backend)** - Node.js, APIs, Architecture
- **[DevOps](/devops)** - Docker, Kubernetes, CI/CD
- **[Sys Admin](/sys-admin)** - Linux, Networking, Security
- **[Database](/database)** - SQL, NoSQL, Optimization
- **[CSS Animations](/animation-css)** - Pure CSS effects
- **[3D Web](/animation-3d)** - Three.js, WebGL
- **[Mobile Strategy](/strat-mobile)** - React Native, Flutter

Updated weekly with curated content.
```

## Filename Convention

- **Format:** `YYYY-MM-DD-kebab-case-title.md`
- **Examples:**
  - `2024-03-27-react-19-release.md`
  - `2024-03-26-kubernetes-best-practices.md`
  - `2024-03-25-css-animation-performance.md`

## Frontmatter Template

Every article should follow this YAML frontmatter:

```yaml
---
# Basic Info
title: "Article Title"
description: "One line summary (60 chars max)"
date: 2024-03-27
published: true

# Categorization (MUST match folder)
category: "frontend"  # Use exact category name
tags: ["React", "Performance", "UI"]

# Content Metadata
level: "beginner|intermediate|advanced"
readTime: 7  # minutes
complexity: "low|medium|high"

# Source & Attribution
source:
  title: "Original Article Title"
  author: "Author Name"
  url: "https://example.com/article"
  website: "example.com"
  published: 2024-03-27

# Newsletter Context
featured: false  # Highlight on homepage
newsletter_section: "trends|tools|how-tos|deep-dives"
relevance: "high|medium|low"

# Cross-linking
related_categories: ["backend", "devops"]
similar_topics: ["topic1", "topic2"]
---
```

## Query Articles by Category

In your Nuxt components, query articles like this:

```vue
<script setup>
const { data: frontendArticles } = await useAsyncData('frontend', () =>
  queryContent('frontend')
    .where({ published: true })
    .sort({ date: -1 })
    .find()
)

const { data: allArticles } = await useAsyncData('all', () =>
  queryContent()
    .where({ published: true })
    .sort({ date: -1 })
    .limit(10)
    .find()
)
</script>

<template>
  <div>
    <h1>Latest Frontend Articles</h1>
    <div v-for="article in frontendArticles" :key="article._id">
      <h2>{{ article.title }}</h2>
      <p>{{ article.description }}</p>
      <span class="badge">{{ article.level }}</span>
      <span class="time">{{ article.readTime }} min read</span>
    </div>
  </div>
</template>
```

## Auto-generate Category Pages

Create `pages/[category].vue`:

```vue
<script setup>
const route = useRoute()
const category = route.params.category

const { data: articles } = await useAsyncData(category, () =>
  queryContent(category)
    .where({ published: true })
    .sort({ date: -1 })
    .find()
)
</script>

<template>
  <div class="category-page">
    <h1>{{ $route.params.category }}</h1>
    <div class="articles-grid">
      <article v-for="article in articles" :key="article._id" class="article-card">
        <h2>
          <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
        </h2>
        <p class="meta">
          <time :datetime="article.date">{{ formatDate(article.date) }}</time>
          <span class="level">{{ article.level }}</span>
          <span class="time">{{ article.readTime }} min</span>
        </p>
        <p>{{ article.description }}</p>
      </article>
    </div>
  </div>
</template>
```

## Logs Folder Purpose

The `logs/` folder tracks:

1. **weekly-search-YYYY-MM-DD.md** - Articles discovered by Skill #1
2. **content-created-YYYY-MM-DD.md** - Files created by Skill #2
3. **newsletter-run-log.md** - Overall execution log

Example log entry:

```markdown
# Newsletter Run - 2024-03-27

## Skill 1: Search
- Sources scanned: 32
- Articles found: 157
- High relevance: 23

## Skill 2: Create Content
- Files created: 18
- Categories:
  - frontend: 4
  - backend: 3
  - devops: 2
  - animation-3d: 2
  - strat-mobile: 2
  - animation-css: 2
  - database: 2
  - sys-admin: 1

## Skill 3-5: Pipeline
- Git push: SUCCESS
- Static generation: 8.2s
- Notification: SENT

Overall status: ✅ COMPLETED
```

## Important Notes

- **Always validate frontmatter** - Invalid YAML breaks the build
- **Keep files under 5KB** where possible - Faster loading
- **Use relative links** - Link to other categories: `[React Patterns](/frontend/2024-03-20-react-patterns)`
- **Featured articles** - Set `featured: true` to highlight on homepage
- **Never delete old articles** - Keep history for reference

This structure allows you to:
- Organize content by 8 distinct domains
- Query articles by category or across all
- Auto-generate category landing pages
- Track content creation over time
- Maintain newsletter history

