# 2026-11-15 scansportscards.com K1 / K2 internal links

Revert by restoring the **old** snippet on each page. Only `<a>` wrappers were added around existing words. No H1, URL/slug, title tag, or meta description changed. No new pages. No sentence rewrites.

Target: `/rookie-card-values` (K1), `/baseball-card-scanner` (K2).

## K1: one in-body link to `/rookie-card-values` per eligible source page

### Added

#### `/football-card-values`

- Anchor: `Rookie cards`
- Location: list item under "The cards that carry the football market" (not a heading, not the first sentence)
- Old: `<strong>Rookie cards:</strong> the RC from a flagship set is the reference card.`
- New: `<strong><a href="/rookie-card-values">Rookie cards</a>:</strong> the RC from a flagship set is the reference card.`

#### `/hockey-card-values`

- Anchor: `Young Guns rookies`
- Location: list item under "Where hockey card value concentrates"
- Old: `<strong>Young Guns rookies</strong> and their parallels.`
- New: `<strong><a href="/rookie-card-values">Young Guns rookies</a></strong> and their parallels.`

#### `/soccer-card-values`

- Anchor: `rookie`
- Location: paragraph under "Stickers, first cards, and tournament noise" (not the lede, not the first sentence of the page)
- Old: `Because soccer has no single RC standard, "rookie" is an argument.`
- New: `Because soccer has no single RC standard, "<a href="/rookie-card-values">rookie</a>" is an argument.`

#### `/basketball-card-values`

- Anchor: `star rookies`
- Location: paragraph under "International demand and thin comps"
- Notes: page already linked `/rookie-card-values/michael-jordan`; this is the first hub link. Not placed on the existing Jordan link.
- Old: `Early Topps and Fleer star rookies are the high end`
- New: `Early Topps and Fleer <a href="/rookie-card-values">star rookies</a> are the high end`

#### `/baseball-card-scanner`

- Anchor: `flagship Topps rookie`
- Location: paragraph under "Bowman, flagship Topps, and the back of the card"
- Old: `The back of a Bowman issue and the back of a flagship Topps rookie are different set names`
- New: `The back of a Bowman issue and the back of a <a href="/rookie-card-values">flagship Topps rookie</a> are different set names`

#### `/football-card-scanner`

- Anchor: `base rookie`
- Location: paragraph under "Foil, patches, and light"
- Old: `If you are pricing an RPA, comps for the base rookie are the wrong comps.`
- New: `If you are pricing an RPA, comps for the <a href="/rookie-card-values">base rookie</a> are the wrong comps.`

#### `/basketball-card-scanner`

- Anchor: `rookies`
- Location: paragraph under "A practical scan session"
- Old: `Start with rookies, anything with an RC logo, and anything that looks like a parallel.`
- New: `Start with <a href="/rookie-card-values">rookies</a>, anything with an RC logo, and anything that looks like a parallel.`

#### `/sports-card-worth`

- Anchor: `rookies`
- Location: ordered-list item under "How to find value of sports cards in a mystery box"
- Notes: FAQ "Start with rookie cards of stars..." is plain text (not HTML), so the list item was the eligible body phrase.
- Old: `<strong>Pull the obvious candidates:</strong> stars, rookies, autographs, serial numbers, anything that looks premium.`
- New: `<strong>Pull the obvious candidates:</strong> stars, <a href="/rookie-card-values">rookies</a>, autographs, serial numbers, anything that looks premium.`

### Skipped (K1)

| Page | Reason |
| --- | --- |
| `/sports-card-value` | Body already links `/rookie-card-values` ("rookie card values"). |
| `/baseball-card-values` | Body already links `/rookie-card-values` ("rookie card values"). |
| `/baseball-cards-worth-money` | Body already links `/rookie-card-values` ("rookie card values"). |
| `/` (homepage) | Body already links `/rookie-card-values` (sports card + guides copy). |
| `/rookie-card-values` and player subpages | Excluded (self / children). |
| `/sports-card-prices` | No "rookie" mention in body text. |
| `/sports-card-grading` | Only mention is a screenshot figcaption ("Rookie Card badge"), rendered as plain text, and it names a UI badge rather than a natural values phrase. |
| `/best-sports-card-scanner-app` | No "rookie" mention in body text. |

Each source page above received exactly one new link (max 1 of 3-5 allowed).

## K2: homepage link to `/baseball-card-scanner`

**Skipped.** Homepage body has no unlinked natural phrase like "baseball card scanner" or "baseball cards" in a sentence that is not a heading, not the first sentence, and not already a link.

Checked:

- Hero lede: "any baseball, basketball..." is the first sentence of the page (and is not the target phrase).
- Sports H3: "Baseball cards" is a heading.
- Sports card copy already contains `<a href="/baseball-card-scanner">Scan baseball cards</a>`.
- Footer "Baseball card scanner" is already a nav link, not homepage body copy.

No homepage sentence was rewritten to create a phrase.
