# Professional Page

Personal portfolio site for Emilio Urbina Arredondo. Built with [Astro](https://astro.build)
(no UI framework, no template), deployed to GitHub Pages via GitHub Actions.

Implements the Claude Design handoff (`Portfolio.dc.html`) as the source of truth for visual
detail, and `design_brief.md` for interaction and accessibility behavior. All copy comes from
`portfolio_content_draft.md`, unabridged.

## Before the first deploy

Three values still need filling in. All of them live in **`src/site.config.ts`**:

| Field              | Current value                | What it needs to be                                 |
| ------------------ | ---------------------------- | --------------------------------------------------- |
| `SITE.url`         | `https://USERNAME.github.io` | Your real GitHub Pages URL                          |
| `CONTACT.linkedin` | `null`                       | Full LinkedIn profile URL, or leave `null` to omit  |
| `CONTACT.github`   | `null`                       | Full GitHub profile URL, or leave `null` to omit    |

`CONTACT.email` is already set. A `null` link is omitted from the footer entirely rather than
rendered as a dead placeholder.

## Deploying

This is configured for a GitHub Pages **user site** — repository named `<username>.github.io`,
served from the root, so `base` is `/`.

1. `git init && git add . && git commit -m "Initial site"`
2. Create a repo named `<username>.github.io` and push to `main`.
3. In the repo, **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Push to `main`. `.github/workflows/deploy.yml` builds and publishes on every push.

If you ever move this to a project repo instead (e.g. `github.com/<username>/portfolio`),
change `base` in `astro.config.ts` to `'/portfolio/'` and update `SITE.url`. Asset and CV paths
are built from `import.meta.env.BASE_URL`, so they follow automatically.

## Commands

| Command           | Action                                        |
| ----------------- | --------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Dev server at `localhost:4321`                |
| `npm run build`   | Production build to `./dist/`                 |
| `npm run preview` | Serve the built site locally                  |
| `npm run check`   | Type-check `.astro` and `.ts` files           |

## Structure

```
src/
  site.config.ts          identity, deploy URL, contact links  ← edit this
  data/projects.ts        project cards + full panel write-ups ← edit this
  assets/hero-fjord.jpg   hero photo (optimized at build time)
  styles/global.css       design tokens + shared primitives
  layouts/Base.astro      document shell, fonts, meta
  components/
    Nav.astro             fixed nav, fades in past the hero
    Hero.astro            full-bleed photo, gradient, node-graph canvas
    About.astro
    ResearchInterests.astro
    Projects.astro        compact project cards
    ProjectPanel.astro    slide-in panel / mobile sheet + all panel logic
    Skills.astro
    CvDownload.astro
    Footer.astro
public/
  Main_CV.pdf             replace whenever Main_CV.tex is regenerated
```

## Notes on implementation

**Project panels.** Cards are real anchors to `#project-<slug>`, so every panel is directly
linkable and works with browser back/forward. On click, JS intercepts and pushes the hash
without navigating. The panel closes on Escape, on click-outside (the scrim), and on the close
control; focus is trapped while open and returns to the triggering card on close; background
scroll is locked. Desktop gets a right-hand slide-in, mobile (≤720px) a full-screen sheet that
rises from the bottom — same content either way, nothing dropped. With JavaScript disabled the
hash links still open the right write-up via a `:target` fallback in `<noscript>`.

**Reduced motion.** The hero node-graph paints a single static frame and never starts an
animation loop under `prefers-reduced-motion: reduce`; it also re-checks live if the OS setting
changes. The scroll cue, panel slide, card hover-lift, and smooth scrolling are all disabled
under the same query.

**Fonts** (Fraunces, IBM Plex Sans, IBM Plex Mono) are downloaded and self-hosted at build time
by Astro's font pipeline — no runtime request to Google, and no flash of unstyled text.

**Hero image** is optimized at build time into WebP at 768/1280/1920/2560 widths (the 8.7 MB
source becomes a 43–389 kB responsive set).

## Adding a project

Append an entry to `PROJECTS` in `src/data/projects.ts`. `slug` becomes the URL hash, `why` is
optional (renders as the rule-marked aside), and `inProgress: true` adds the badge to both the
card and the panel. Card and panel markup follow automatically.
