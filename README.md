# ScanSportsCards.com

Marketing and SEO website for CardSense: Sports Card Scanner (iOS).
Built with Astro as a fully static site with zero client-side JavaScript.

- Live domain: https://scansportscards.com
- App Store: https://apps.apple.com/app/id6757801294
- App listing data and assets are documented in `app.md`.

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Homepage: hero, how it works, features, screenshots, sports, guides, FAQ |
| `/sports-card-value` | Guide targeting "sports card value" |
| `/sports-card-prices` | Guide targeting "sports card prices" |
| `/sports-card-worth` | Guide targeting "sports card worth" / "what are my cards worth" |
| `/baseball-card-values` | Guide targeting "baseball card values" |
| `/basketball-card-values` | Guide targeting "basketball card values" |
| `/football-card-values` | Guide targeting "football card values" |
| `/hockey-card-values` | Guide targeting "hockey card values" |
| `/soccer-card-values` | Guide targeting "soccer card values" |
| `/sports-card-grading` | Guide targeting "sports card grading" / "is grading worth it" |
| `/best-sports-card-scanner-app` | Comparison: CardSense, CollX, Ludex, StarSnap |
| `/baseball-card-scanner` | Scan baseball cards from a photo |
| `/football-card-scanner` | Scan NFL cards from a photo |
| `/basketball-card-scanner` | Scan NBA cards from a photo |

## SEO / GEO

- Unique titles, meta descriptions, and canonical URLs per page.
- Open Graph + Twitter cards. Homepage uses `public/og/home.png`; guides use unique 1536x1024 feature images.
- JSON-LD: SoftwareApplication + WebSite + FAQPage (home), Article + BreadcrumbList + FAQPage (guides), HowTo on step-shaped guides.
- `sitemap-index.xml` via @astrojs/sitemap, `robots.txt`, and `llms.txt` for AI crawlers.
- Direct-answer blocks at the top of every guide for featured snippets and AI overviews.
- All app screenshots are the real App Store assets, optimized to WebP at build time.

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the production build |
| `node scripts/generate-images.mjs` | Regenerate favicons and OG images from `src/assets/app-icon.png` |
