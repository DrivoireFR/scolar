# Complete Newsletter Pipeline - Setup Guide

## Overview

You now have a complete automated system for discovering, summarizing, and publishing a multi-domain tech newsletter using Cowork + Nuxt.

### The 5-Skill Pipeline

```
┌─────────────────────────────────────────┐
│ EVERY THURSDAY AT 09:00 UTC              │
└────────────┬────────────────────────────┘
             │
      ┌──────▼──────┐
      │ SKILL #1    │  Weekly Search
      │ Search      │  - Scan 32 sources
      │             │  - Find ~50 articles
      └──────┬──────┘
             │
      ┌──────▼──────────┐
      │ SKILL #2        │  Summarize & Create
      │ Summarize       │  - 18 high-quality posts
      │ & Create        │  - 8 categories
      │                 │  - Full YAML frontmatter
      └──────┬──────────┘
             │
      ┌──────▼──────┐
      │ SKILL #3    │  Git Commit
      │ Git Push    │  - Commit all files
      │             │  - Push to repo
      └──────┬──────┘
             │
      ┌──────▼──────────┐
      │ SKILL #4        │  Static Generation
      │ Generate        │  - Build 40+ pages
      │ Static          │  - Ready to deploy
      └──────┬──────────┘
             │
      ┌──────▼──────┐
      │ SKILL #5    │  Notification
      │ Notify      │  - Slack + Email
      │             │  - "Newsletter Ready!"
      └──────┬──────┘
             │
          ✅ DONE
```

---

## 8 Content Categories

```
📰 FRONTEND DEVELOPMENT
   React, Vue.js, CSS, Performance, Accessibility

🔧 BACKEND & APIs
   Node.js, Python, Microservices, Architecture

⚙️  DEVOPS & DEPLOYMENT
   Docker, Kubernetes, CI/CD, Cloud Infrastructure

🖥️  SYSTEM ADMINISTRATION
   Linux, Networking, Security, Administration Tools

💾 DATABASE & DATA ARCHITECTURE
   SQL, NoSQL, Query Optimization, Data Design

🎨 CSS ANIMATIONS
   Pure CSS effects, transitions, web design trends

🎬 3D WEB GRAPHICS (Three.js)
   WebGL, Shaders, 3D web experiences

📱 MOBILE STRATEGY
   React Native, Flutter, Responsive Design, PWA
```

---

## File Structure Required

```
your-nuxt-project/
│
├── .skills/                                # Cowork Skills
│   ├── 1-weekly-search/
│   │   └── SKILL.md
│   ├── 2-summarize-create/
│   │   └── SKILL.md
│   ├── 3-git-push/
│   │   └── SKILL.md
│   ├── 4-generate/
│   │   └── SKILL.md
│   └── 5-notify/
│       └── SKILL.md
│
├── content/                                # NuxtContent
│   ├── frontend/
│   │   ├── 2024-03-27-article.md
│   │   └── ...
│   ├── backend/
│   ├── devops/
│   ├── sys-admin/
│   ├── database/
│   ├── animation-css/
│   ├── animation-3d/
│   └── strat-mobile/
│
├── logs/                                   # Execution Logs
│   ├── weekly-search-*.md
│   ├── content-created-*.md
│   ├── git-push-*.md
│   ├── generate-*.md
│   ├── notification-*.md
│   └── newsletter-run-log.md
│
├── sources.json                            # URL Sources (8 categories)
├── notification-config.json               # Slack/Email Config
├── nuxt.config.ts                         # Nuxt Configuration
├── package.json                           # Dependencies
└── .git/                                  # Git Repository

```

---

## Setup Checklist

### Phase 1: Prepare Your Nuxt Project

- [ ] Create a new Nuxt project: `npx create-nuxt@latest`
- [ ] Install @nuxt/content: `npm install @nuxt/content`
- [ ] Create folder structure:
  ```bash
  mkdir -p content/{frontend,backend,devops,sys-admin,database,animation-css,animation-3d,strat-mobile}
  mkdir logs
  mkdir -p .skills/{1-weekly-search,2-summarize-create,3-git-push,4-generate,5-notify}
  ```
- [ ] Initialize Git: `git init && git remote add origin [your-repo]`

### Phase 2: Copy Skills

For each skill (1-5):
- [ ] Copy the SKILL.md file to `.skills/[skill-name]/SKILL.md`
- [ ] Verify file paths are correct

### Phase 3: Configure Sources

- [ ] Copy `sources-extended.json` to project root
- [ ] Rename to `sources.json`
- [ ] **Edit with YOUR sources:**
  - Replace generic URLs with your actual sources
  - Keep the 8-category structure
  - Add/remove sources per category

Example personalization:
```json
{
  "category": "frontend",
  "sites": [
    {
      "name": "Your Favorite Blog",
      "url": "https://yourblog.com",
      "priority": "high"
    }
  ]
}
```

### Phase 4: Configure Notifications

- [ ] Create `notification-config.json` with your settings
- [ ] **For Slack:**
  - Create incoming webhook at slack.com/apps/manage
  - Copy webhook URL
  ```json
  {
    "slack": {
      "enabled": true,
      "webhook_url": "https://hooks.slack.com/services/..."
    }
  }
  ```
- [ ] **For Email:**
  - Configure SMTP or email service
  ```json
  {
    "email": {
      "enabled": true,
      "recipient": "your@email.com"
    }
  }
  ```

### Phase 5: Configure Nuxt

- [ ] Update `nuxt.config.ts` with content settings (see nuxt-content-structure.md)
- [ ] Install dependencies: `npm install`
- [ ] Test build: `npm run generate`

### Phase 6: Set Up Cowork

- [ ] Install Claude Desktop (Mac or Windows)
- [ ] Open Claude Desktop → Cowork
- [ ] Point to your project folder
- [ ] Verify skills are loaded:
  - Run: `/list skills`
  - Should show all 5 skills

### Phase 7: Test the Pipeline

**Test each skill individually first:**

1. **Skill #1 - Search:**
   - Run: "Do a weekly search on my sources"
   - Check: `/logs/weekly-search-*.md` created

2. **Skill #2 - Create:**
   - Run: "Create NuxtContent files from search results"
   - Check: Files created in `content/[category]/`

3. **Skill #3 - Git Push:**
   - Run: "Commit and push to git"
   - Check: GitHub/Git shows new commits

4. **Skill #4 - Generate:**
   - Run: "Generate static site"
   - Check: `dist/` folder created

5. **Skill #5 - Notify:**
   - Run: "Send notification"
   - Check: Slack message or email received

### Phase 8: Schedule Automatic Runs

In Cowork:
- [ ] Type: `/schedule`
- [ ] Select: Run weekly at [day/time]
- [ ] Choose: "Run all 5 skills in sequence"
- [ ] Save: Cowork will run automatically every week

---

## Key Files Reference

| File | Purpose | Edit? |
|------|---------|-------|
| `sources.json` | URLs to monitor | ✏️  YES - Add your sources |
| `notification-config.json` | Slack/Email config | ✏️  YES - Add credentials |
| `nuxt.config.ts` | Build configuration | ✏️  YES - Tweak as needed |
| `.skills/*/SKILL.md` | Pipeline logic | 🔴 NO - Leave as-is |
| `content/*/` | Your articles | ✏️  YES - Review/edit |
| `logs/` | Execution records | 📖 READ ONLY - For debugging |

---

## Workflow After Setup

### Weekly Automatic Execution (Thursday 9:00 AM)

Cowork automatically runs all 5 skills in sequence:

1. **Searches 32+ sources** → finds ~50 articles
2. **Summarizes best ones** → creates 18 high-quality posts
3. **Commits to Git** → saves your work
4. **Generates static site** → builds 40+ pages
5. **Sends notification** → "Your newsletter is ready!"

**Total time:** ~20 minutes (fully automated)

### Manual Intervention (As Needed)

After notification, you might:

- [ ] **Review articles** in the generated site
- [ ] **Edit summaries** if needed (edit markdown files)
- [ ] **Change featured status** (set `featured: true` to highlight)
- [ ] **Adjust sources.json** based on what worked
- [ ] **Deploy to production** (push `dist/` to hosting)
- [ ] **Share with readers** (add to newsletter, blog, etc.)

### Refinement Loop

After each week:

- [ ] Which articles got the most engagement?
- [ ] Which categories need more sources?
- [ ] Should I adjust `sources.json`?
- [ ] Are summaries hitting the right tone?
- [ ] Any sources that should be removed?

Update `sources.json` for next week:
```bash
git add sources.json
git commit -m "chore: update sources for next week"
git push origin main
```

Next week, Cowork uses your updated sources.

---

## Troubleshooting

### "Skill not loading"
- Verify SKILL.md is in correct folder
- Check filename: must be exactly `SKILL.md`
- Restart Claude Desktop

### "Search finds no articles"
- Check sources.json URLs are valid
- Verify you can visit URLs manually
- Check search keywords in sources

### "Generated site has broken links"
- Verify frontmatter YAML is valid
- Check all URLs in source fields
- Run `npm run generate` manually to see errors

### "Notification not sent"
- Verify webhook URL is correct (Slack)
- Check email configuration
- Look in `/logs/notification-*.md` for errors

### "Git push fails"
- Check SSH key or token is configured
- Verify you have write access to repo
- Check branch name matches (main vs master)

---

## Monitoring & Analytics

Over time, track:

1. **Discovery efficiency** (articles → quality ratio)
2. **Category distribution** (which domains get most coverage?)
3. **Reader engagement** (which articles resonate?)
4. **Source quality** (which sources produce best articles?)

Review `/logs/newsletter-run-log.md` weekly:
```markdown
## Run #1 - March 27, 2024
- Articles discovered: 47
- Content files created: 18
- Build time: 12.4s
- Status: ✅ SUCCESS

## Run #2 - April 3, 2024
- Articles discovered: 52
- Content files created: 21
- Build time: 14.1s
- Status: ✅ SUCCESS
```

Use this data to improve:
- Which categories are trending?
- Are certain sources more reliable?
- Should I add/remove sources?

---

## What You Get

✅ **Automated discovery** of 50+ articles weekly from 32+ sources
✅ **Smart summaries** organized in 8 professional categories
✅ **Professional frontmatter** for content organization and filtering
✅ **Git-based version control** of all content
✅ **Static site generation** ready for deployment
✅ **Automatic notifications** so you never miss an update
✅ **Detailed logs** for debugging and analytics

All **without touching the terminal** after setup.

---

## Next: Deploy Your Newsletter

Once Skill #4 generates the site:

**Option 1: Vercel (Recommended)**
```bash
npm install -g vercel
vercel
# Login and follow prompts
# Your site goes live instantly
```

**Option 2: Netlify**
- Connect GitHub repo to Netlify
- Auto-builds on every push
- Live at netlify app

**Option 3: GitHub Pages**
- Commit `dist/` to `gh-pages` branch
- Site live at `yourname.github.io`

---

## Support & Questions

If skills fail:
1. Check `/logs/` folder for detailed error messages
2. Verify file paths and configurations
3. Test each skill individually
4. Review the SKILL.md instructions

Common issues solutions in each SKILL.md file under "Guardrails" and "Fallback".

---

## Summary

You now have:
- ✅ 5 interconnected Cowork skills
- ✅ 8-category content structure
- ✅ Automated pipeline (search → summarize → commit → build → notify)
- ✅ Professional frontmatter for newsletter organization
- ✅ Detailed logging for debugging
- ✅ Weekly automatic execution

**Start:** Run Skill #1 manually to test
**Next:** Schedule automatic weekly runs
**Monitor:** Check logs and newsletter quality
**Refine:** Adjust sources.json based on engagement

Your automated tech newsletter is ready! 🚀

