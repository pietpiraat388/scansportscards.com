# CardSense: Sports Card Scanner - listing contract

Source: iTunes lookup `id=6757801294&country=us` plus App Store product page, fetched 2026-08-26.
Live site: https://scansportscards.com (evolve in place; do not scaffold a sibling landing).

## Identity

| Field | Value |
| --- | --- |
| App name (`trackName`) | CardSense: Sports Card Scanner |
| Subtitle | Value Guide, Price & Grading |
| Bundle ID | `com.parivee.cardlens` |
| App Store ID | 6757801294 |
| Site App Store URL (keep) | https://apps.apple.com/app/id6757801294 |
| Lookup `trackViewUrl` | https://apps.apple.com/us/app/cardsense-sports-card-scanner/id6757801294 |
| Developer / seller | Patrick van der Ploeg |
| Seller URL | https://www.vejoapps.com |
| Artist ID | 1789764470 |
| Primary genre | Sports (`6004`) |
| Genres | Sports, Reference |
| Price | Free (`0.00` USD) |
| Premium | In-app unlock: unlimited scans + full market details (screenshot 8) |
| Version | 1.0.3 |
| First released | 2026-01-20 |
| Current version released | 2026-07-23 |
| Release notes | This update contains stability improvements and general bug fixes. Improved design. |
| Minimum OS | iOS 18.2 |
| Size | 35,818,496 bytes (~34.2 MB) |
| Age rating | 4+ |
| Languages | English (`EN`) |
| Average rating | 4.38 |
| Rating count | 29 (under 50: **skip `aggregateRating` in JSON-LD**) |
| iPad screenshots | none |
| Platforms claimed | iPhone (product page: "Only for iPhone") |
| Google Play (`com.parivee.cardlens`) | **404** |
| Google Play (`com.parivee.cardsense`) | **404** |
| Google Play (`com.parivee.cardscanner`) | **404** |
| Marketing site | https://scansportscards.com |
| Site App Store badge country | none (`/app/id…`, not `/us/` or `/de/`). Do not silently switch. |

## Positioning (from listing + screenshot pixels)

Tagline on screenshot 1: "The #1 Sports Card Scanner" / "Identify and Value in Seconds".

One-liner from the description: "Instantly identify any sports card with AI-powered precision."

CardSense turns an iPhone camera into a card identifier and price checker. Snap a baseball, basketball, football, hockey, or soccer card; the app returns player, team, year, set, card number, rarity, and an estimated market value built from recent eBay sales. After the scan, cards go into a digital collection with folders, search, and a running total.

## Palette and type (from pixels)

Pulled from the App Store icon and marketing screenshots. The live site already matches this.

| Token | Hex | Where it shows |
| --- | --- | --- |
| Brand | `#1554f0` | Scan-frame glow, buttons, links |
| Brand deep | `#0b3bd6` | Icon background, screenshot gradients |
| Brand bright | `#2f7bff` | Highlights, CTA band |
| Paper | `#ffffff` | Phone chrome, cards |
| Ink | `#0a1a33` | UI copy |
| Foil / rookie badge | `#a97b1f` | "ROOKIE CARD" pill on screenshot 2 |
| Brand tint | `#e8efff` | Soft fills |

Display type on the listing is a heavy rounded geometric sans (white on blue). Site uses Bricolage Grotesque for headlines, Inter for body, IBM Plex Mono for eyebrows and stat labels.

## Screenshot-derived features

Read from `public/assets/full/screenshot-1.png` through `screenshot-8.png` (App Store **display** order = `screenshotUrls` array). These are marketing frames with giant captions, not cropped UI. The live gallery in `src/assets/` is the same set, numbered by original listing **filename** (1.jpg–8.jpg), which is a better walkthrough order than Apple's display order.

| Display # | Listing file | Full asset | Site `src/assets` | Headline on the frame | What the pixels actually show |
| --- | --- | --- | --- | --- | --- |
| 1 | `1.jpg` | `screenshot-1.png` | `screenshot-1.png` | The #1 Sports Card Scanner | Gloved hand holding a basketball "SPORT CARD / ROOKIE LEGEND" card inside a white scan frame on a blue field. Five white stars. Quote: Identify and Value in Seconds. |
| 2 | `3.jpg` | `screenshot-2.png` | `screenshot-3.png` | Get Full Card Details | Card detail for a 1986 Fleer Michael Jordan: estimated collection value $152,545 (+12.5%, 47 cards), gold **ROOKIE CARD** badge, Edit / Share, price-history chart ($142 up / $85 down). |
| 3 | `5.jpg` | `screenshot-3.png` | `screenshot-5.png` | Build Your Digital Card Vault | Collection screen: total value $33.652, 12 cards, search by player/team/year, filters Team / Year / Value. Rows: Jordan Near Mint $15.000–$30.000, Wembanyama $40–$70, Messi $1.200–$2.500. |
| 4 | `2.jpg` | `screenshot-4.png` | `screenshot-2.png` | Real-Time Card Detection | Confirm Card: 1986 Fleer Premier Jordan in a scan frame, Retake / Choose Another, **Start Identification**, tip to keep the card fully visible and well-lit. |
| 5 | `4.jpg` | `screenshot-5.png` | `screenshot-4.png` | Track Market Trends & Prices | Market Data: price-history sparkline, estimated value **$6,841.30** based on 50 listings, Demand Rare, Range $5.2k–$30.0k, Volatility High, recent eBay sales of 1986 Fleer #57. |
| 6 | `6.jpg` | `screenshot-6.png` | `screenshot-6.png` | Deep Insights for Every Card | Jordan card on a wood-grain board with overlays: Player/Athlete Michael Jordan, Range $5.2k–$30.0k, Demand Rare. |
| 7 | `7.jpg` | `screenshot-7.png` | `screenshot-7.png` | Organize Cards Your Way | Folders: total value $21.152 across 3 folders. All Cards (12, $21.152), Baseball (11, $19.302), Soccer ($3.850). |
| 8 | `8.jpg` | `screenshot-8.png` | `screenshot-8.png` | Unlock the Full Power of Scanning | Premium pitch: Unlimited Scans + Full Market Details, three hobby-style cards (swim, catcher, ballet) used as decoration. |

Visible product facts the copy may use (they appear on screen):

- Camera or photo-library identification, with a confirm step before "Start Identification".
- Player, set, card number, rookie badge, edit, and share on the detail screen.
- eBay-based estimates: average-style point value, range, demand, volatility, recent sales list, price-history chart.
- Collection totals, month-added count, search, filters, condition labels (Near Mint), per-card value ranges.
- Custom folders by sport with per-folder totals; one card can sit in more than one folder (listing text).
- Free download with a premium unlock for unlimited scans and full market details.

Do not treat the "$152,545 collection" or "$6,841.30" figures as live user data. They are screenshot mock values.

## Feature groups (from the App Store description)

### Smart identification

- AI trained on 5,000+ card types from Topps, Panini, Upper Deck, and more
- Identifies rookies, inserts, parallels, autographs, and memorabilia cards
- Detects special variants, serial numbers, and condition grades
- Works with photos from the camera or the photo library

### Real-time market data

- Live pricing powered by recent eBay sales
- Average, median, and price ranges
- Sales velocity to spot market trends
- Price history charts showing value changes over time

### Collection management

- Save unlimited cards to a digital collection
- Custom folders organized by team, sport, player, or rarity
- Assign cards to multiple folders simultaneously
- Total collection value with automatic updates

### Valuable insights

- Collection growth month-over-month
- Most valuable cards at a glance
- Personal notes and condition assessments
- Full-text search across the entire collection

### Share your finds

- Generate social media cards
- Share to Instagram, Twitter, and more
- Professional layouts with card details and value

## Other claims made in the listing (safe to reuse)

- "Join 10,000+ collectors who trust CardSense to identify and organize their sports card collections."
- Supported sports: baseball, basketball, football, hockey, soccer
- Card brands mentioned: Topps, Panini, Upper Deck
- Use cases: seasoned collectors tracking a portfolio, and people who "just discovered cards in the attic"
- "No more endless Google searches or forum posts - get accurate identification and fair market values in seconds."

## Asset manifest

High-res originals rewritten from mzstatic (`512x512bb.jpg` → `1024x1024bb.png`; `320x480bb.jpg` → `1284x2282bb.png`, served as 1054×2282). Gallery JPEGs via `sips -Z 1386` quality 80 (shot 8 at 72 to stay under 200 KB).

| Role | Path | Format / size |
| --- | --- | --- |
| Icon original | `public/assets/full/app-icon.png` | PNG 1024×1024 |
| Screenshots original | `public/assets/full/screenshot-1.png` … `screenshot-8.png` | PNG 1054×2282 (display order) |
| Gallery JPEGs | `public/assets/gallery/screenshot-1.jpg` … `screenshot-8.jpg` | JPEG 640×1386, all ≤200 KB |
| Site gallery (Astro) | `src/assets/screenshot-1.png` … `screenshot-8.png` | PNG 1242×2688, filename order. Keep these: they are already wired and processed to WebP. |
| Site icon | `src/assets/app-icon.png` | PNG 1024×1024 |
| OG images | `public/og/*.png` | 1200×630, generated from the icon |

## Original App Store description (verbatim)

Instantly identify any sports card with AI-powered precision.

CardSense transforms your phone into a professional card identification tool. Simply snap a photo of any sports card—baseball, basketball, football, hockey, or soccer—and our advanced AI instantly identifies the player, team, year, set, card number, rarity, and estimated market value.

SMART IDENTIFICATION
• AI trained on 5,000+ card types from Topps, Panini, Upper Deck, and more
• Identifies rookies, inserts, parallels, autographs, and memorabilia cards
• Detects special variants, serial numbers, and condition grades
• Works with photos from your camera or existing library

REAL-TIME MARKET DATA
• Live pricing powered by recent eBay sales
• View average, median, and price ranges
• Track sales velocity to spot market trends
• Price history charts show value changes over time

COLLECTION MANAGEMENT
• Save unlimited cards to your digital collection
• Create custom folders organized by team, sport, player, or rarity
• Assign cards to multiple folders simultaneously
• Track your total collection value with automatic updates

VALUABLE INSIGHTS
• Monitor collection growth month-over-month
• See your most valuable cards at a glance
• Add personal notes and condition assessments
• Full-text search across your entire collection

SHARE YOUR FINDS
• Generate beautiful social media cards
• Share to Instagram, Twitter, and more
• Professional layouts with card details and value

Whether you're a seasoned collector tracking a portfolio or just discovered cards in the attic, CardSense gives you instant answers. No more endless Google searches or forum posts get accurate identification and fair market values in seconds.

Join 10,000+ collectors who trust CardSense to identify and organize their sports card collections.

Download now and start scanning!

## Stack (Phase 0)

Existing Astro 7 static site. Not greenfield.

| Item | Value |
| --- | --- |
| Framework | Astro `^7.0.7` |
| Output | `dist/` prerendered HTML (`astro build`) |
| URL style | `trailingSlash: 'never'` (also `vercel.json` `trailingSlash: false`) |
| Site | `https://scansportscards.com` |
| Sitemap | `@astrojs/sitemap` → `/sitemap-index.xml` |
| Validator | none (`scripts/validate-site.mjs` not present; add one in Phase 6) |
| Data today | Copy lives in page files + `src/lib/site.ts`. Phase 3 should collapse copy/FAQs/guides into `src/data/`. |

Existing guide URLs (keep; do not rename without a redirect):

- `/sports-card-value`
- `/sports-card-prices`
- `/sports-card-worth`
- `/sports-card-grading`
- `/baseball-card-values`
- `/basketball-card-values`
- `/football-card-values`
- `/hockey-card-values`
- `/soccer-card-values`
- `/best-sports-card-scanner-app`
- `/baseball-card-scanner`

## Keywords (Phase 2)

Researched 2026-08-26. Google metrics from OpenSEO project `SportCards` (`scansportscards.com`, location 2840/en). App Store ranks from Astro ASO (`6757801294`, stores us/gb/de/nl). Do not invent missing metrics. Do not add or delete Astro-tracked keywords without confirmation. Do not `save_keywords` without confirmation.

OpenSEO GSC (last 3 months): **0 clicks**, ~2k impressions across the site. Best page ranks: `/best-sports-card-scanner-app` pos 5.7 (3 impr), `/baseball-card-scanner` pos 15.1 (12 impr), `/soccer-card-values` pos 21.0 (98 impr). Most impressions sit on `/baseball-card-values` (408, pos 59.7). Brand query `cardsense` is pos 8.4.

### Primary (homepage: title, exactly one H1, hero, meta)

Do **not** use `sports card value` (vol 22,200, KD 71) or `sports card prices` (vol 22,200, KD 58) as the H1. Those SERPs are SportsCardsPro, CardLadder, eBay, Wikipedia. This site cannot win them as a database.

| Keyword | Intent | Vol | KD | Why |
| --- | --- | ---: | ---: | --- |
| sports card scanner | transactional | 3600 | 22 | Matches the listing and screenshots. Google SERP is apps (CollX, StarSnap, eBay scan, Reddit) plus a few hardware hits. Winnable commercial variant. |
| sports card scanner app | transactional | 1900 | 33 | Cleaner app-intent than the head term. SERP is App Store / Play / CollX / Ludex / Reddit. |
| sports card scanner app free | transactional | 1000 | 28 | Listing is free with a premium unlock. Hero + FAQ, not a second H1. |
| baseball card scanner | transactional | 2400 | 13 | Highest sport-specific scanner demand. Also a dedicated guide. |

Title (≤60): `CardSense: Sports Card Scanner App for Collectors` (46)
H1: carry **sports card scanner app** (one H1).
Meta (110–180): scan any card, identify it, see eBay-based value; iPhone; five sports.

### Secondary (section H2s, feature copy)

| Keyword | Intent | Vol | KD | Placement |
| --- | --- | ---: | ---: | --- |
| sports card prices | commercial | 22200 | 58 | H2 on home + `/sports-card-prices`. Teach sold vs asking; do not pretend to be a price-guide database. |
| sports card value | informational | 22200 | 71 | H2 language on `/sports-card-value` (five factors). Not the homepage H1. |
| sports card worth | informational | 22200 | 27 | `/sports-card-worth` cluster. Same SERP family as value/prices. |
| sports card price guide | commercial | 8100 | 32 | FAQ / prices guide. SERP is databases. |
| sports card grading | informational | 3600 | 36 | `/sports-card-grading`. SERP is PSA/SGC/CGC/TAG services. Keep the page as "when grading pays", not a grading-company clone. |
| sports card value scanner | informational | 720 | 41 | Feature copy: scan then see value. |
| sport card value scanner | informational | 720 | 18 | Same job, lower KD variant. |
| baseball card values | informational | 18100 | 25 | `/baseball-card-values` |
| football card values | informational | 5400 | 7 | `/football-card-values` |
| basketball card values | informational | 4400 | 13 | `/basketball-card-values` |
| hockey card values | informational | 1000 | 2 | `/hockey-card-values` |
| soccer card values | informational | 390 | 6 | `/soccer-card-values` (already pos ~21) |

### Long-tail (one URL each)

Every item maps to a pain the listing and screenshots actually show (scan → identify → eBay comps → collection). Keep every existing URL. Add two sport-scanner pages that follow `/baseball-card-scanner` (already striking distance).

| Keyword | Vol | KD | Pain (screenshot) | URL |
| --- | ---: | ---: | --- | --- |
| best sports card scanner app | 1900 | 35 | Choosing an app; comparison page already pos 5.7 | `/best-sports-card-scanner-app` (keep) |
| baseball card scanner | 2400 | 13 | Scan baseball cardboard (hero + confirm-card shots) | `/baseball-card-scanner` (keep) |
| football card scanner | 880 | 20 | Same scan flow, NFL cards | `/football-card-scanner` **new** |
| basketball card scanner | 320 | 27 | Jordan confirm-card / vault rows | `/basketball-card-scanner` **new** |
| what are my sports cards worth | 210 | 9 | Attic/shoebox use case in the listing | `/sports-card-worth` (keep) |
| how to find value of sports cards | 720 | 16 | How-to SERP (Reddit + CollX + CardLadder). Teach the method; app is the tool. | `/sports-card-worth` (same URL; do not split) |
| how to check sports card value | 210 | 30 | Five value factors | `/sports-card-value` (keep) |
| baseball card values | 18100 | 25 | Vault + market-data screens | `/baseball-card-values` (keep) |
| basketball card values | 4400 | 13 | Vault rows (Jordan, Wembanyama) | `/basketball-card-values` (keep) |
| football card values | 5400 | 7 | Supported-sport claim | `/football-card-values` (keep) |

Also keep (already live, impressions, not in the 10): `/sports-card-prices`, `/sports-card-grading`, `/hockey-card-values`, `/soccer-card-values`. Do not 404 them.

Dropped / poisoned:

- `card scanner`, `trading card scanner`: Pokémon / TCG / Collectr.
- Hardware `scanner` (Ricoh/Fujitsu) on "sports card scanner" image packs.
- `sports card value` / `sports card prices` as homepage H1 (price-guide databases).
- Player-specific worth queries (Judge/Trout/Jordan rookies): listing cannot uniquely serve them.
- Android-only queries: Play listing is 404.
- `collx`, `ludex`: competitor navigational.

### Placement map

| Surface | Keyword |
| --- | --- |
| `<title>` | CardSense: Sports Card Scanner App for Collectors |
| One H1 | sports card scanner app |
| Hero lede / meta | identify + eBay value; five sports; free iPhone download |
| How-it-works H2 | scan → identify → market value |
| Market H2 | sports card prices / eBay sold comps |
| Collection H2 | digital card vault / collection value |
| Guides index | long-tails above |
| FAQ | free app, which sports, how ID works, worth, best app |

### App Store ranks (US unless noted)

Astro is tracking 40 US keywords. `currentRanking` is empty for all of them. Live `search_app_store` (limit 50, exact name `CardSense: Sports Card Scanner`) on 2026-08-26:

| Keyword | ASO pop | ASO diff | US rank | Notes |
| --- | ---: | ---: | ---: | --- |
| cardsense | n/a | n/a | **1** | Brand. GB tracked keyword also rank 1 (pop 5). |
| card sense | n/a | n/a | **1** | Same. Competitor "CardSense AI - Sports & TCG" sits at #2. |
| sports card scanner | 56 | 67 | not in top 50 | CollX, PSA, Ludex, StarSnap, Sports Card Investor |
| baseball card scanner | 52 | 47 | not in top 50 | CollX, PSA, Baseball Card Scanner - BSC9 |
| sports card value | n/a | n/a | not in top 50 | CollX, PSA, SC9, Card Ladder |
| card scanner | n/a | n/a | not in top 50 | CollX then TCG apps |
| sports cards | 51 | 71 | not in top 50 | CollX, Investor, PSA, Card Ladder |

DE (low pop): `sportkartenwert` 15 (↑3), `sportkartenwert scanner` 16 (↑9), `sportkartenscanner` 17 (↑7). NL: `sports kaarten` 15.

US ASO popularity leaders currently tracked (rank unknown / unranked): sports card scanner 56, collx: sports card scanner 55, ludex sports card scanner 53, baseball card scanner 52.

### Google SERP notes

| Query | Who ranks | Takeaway |
| --- | --- | --- |
| sports card scanner | Play StarSnap, App Store CollX, SportsCardsPro app, eBay scan, Reddit, Ricoh hardware | App + how-to mix. Homepage can compete if it is clearly an app landing, not a hardware review. |
| sports card scanner app | CollX App Store, Reddit, Ludex Play, StarSnap, CollX site | Pure app SERP. Best homepage target. |
| best sports card scanner app | Ludex, Reddit, CollX, StarSnap, Facebook | Comparison intent. Existing page already pos 5.7. |
| baseball card scanner | CollX, SportsCardsPro, eBay, StarSnap, Reddit | Same as head scanner. Keep `/baseball-card-scanner`. |
| sports card value | SportsCardsPro, Card Investor, Reddit guide, eBay, CardLadder, CollX | Databases win. Guide teaches factors; do not fake a price index. |
| sports card prices | SportsCardsPro, Investor, CardLadder, Wikipedia expensive-cards list | Same. |
| baseball card values | SportsCardsPro, CardLadder, CardHedger, Beckett, Sportlots | Databases. Keep the explainer URL. |
| what are my sports cards worth | CollX, SportsCardsPro, Reddit, CardLadder, Play identifier | How-to + app. Strongest converting long-tail for the attic story. |
| how to find value of sports cards | CardLadder, Reddit, CollX, SportsCardsPro, eBay | Blogs rank. Put the method on `/sports-card-worth`. |
| sports card grading | SGC, CGC, TAG, GameStop, Reddit | Grading companies. Page must answer "when it pays", not "submit to us". |

### Saved OpenSEO keywords (already in project, metrics were empty)

sports card scanner app, sports card scanner app free, baseball card scanner, scan baseball cards, best sports card scanner app, best app to scan sports cards, sports card value scanner, free sports card value scanner, football card scanner, app to scan sports cards for value.

Do not save more unless asked.

## ASO notes (do not mutate the live listing from this skill)

Title already contains: CardSense, Sports, Card, Scanner.
Subtitle already contains: Value, Guide, Price, Grading.

**US visibility:** brand queries only. Not in the top 50 for `sports card scanner`, `baseball card scanner`, or `sports card value`. CollX/PSA/Ludex/StarSnap occupy those lists. A competitor named **CardSense AI - Sports & TCG** sits at #2 for `cardsense` / `card sense`.

**Subtitle keyword gaps:** "Value Guide, Price & Grading" repeats value/price already implied by the screenshots and omits identify, collection, baseball, and eBay. Title already has scanner; do not spend subtitle characters on scanner again. Stronger unused angles (30 chars): collection + baseball, identify + eBay comps.

**Keyword-field suggestions** (skip tokens already in title/subtitle: cardsense, sports, card, scanner, value, guide, price, grading):

- identify, identification, ebay, collection, inventory, baseball, basketball, football, hockey, soccer, rookie, parallel, worth, appraisal, topps, panini

**Rating-count blocker:** 29 ratings, 4.38 average. Under 50, so the site must not output `aggregateRating`. An in-app review prompt at a success milestone (first successful ID, or first card saved to the collection) beats an onboarding prompt. iOS grants about 3 prompts per year.
