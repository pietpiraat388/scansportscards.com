import type { FeatureImage, Guide } from './types';

const D = '2026-08-26';

function feat(slug: string, alt: string): FeatureImage {
  return { src: `/assets/guides/${slug}-feature.webp`, alt, width: 1536, height: 1024 };
}

export const guides: Guide[] = [
  {
    slug: 'sports-card-value',
    path: '/sports-card-value',
    tag: 'Value guide',
    title: 'Sports Card Value: What Makes a Card Valuable?',
    metaTitle: 'Sports Card Value Guide: What Makes a Card Valuable? | CardSense',
    description:
      'Sports card value comes down to five factors: player, rookie status, scarcity, condition, and demand. Learn how they work together and how to check any card from a photo.',
    eyebrow: 'Value guide',
    lede: 'Two cards can look nearly identical and sell for wildly different amounts. These five factors are why, and they are what you need before you trust a number.',
    directAnswer:
      '<strong>Sports card value is set by five factors:</strong> the player, whether it is a rookie card, how scarce it is, its condition, and current demand. The number that matters is what buyers recently paid for that exact card in the same condition, not an asking price.',
    cardTitle: "What determines a sports card's value?",
    cardText:
      'Player, rookie status, rarity, condition, and demand. Why two cards that look alike can sell for wildly different amounts.',
    featuredOnHome: true,
    featureImage: feat(
      'sports-card-value',
      'Worn cream trading card, gold holographic card, magnifying loupe, and torn cardboard on torn blue paper',
    ),
    datePublished: '2026-07-12',
    dateModified: D,
    related: ['/sports-card-prices', '/sports-card-worth', '/sports-card-grading'],
    sources: [
      { name: 'eBay sports card price guide', url: 'https://pages.ebay.com/price-guide/' },
      { name: 'CardSense App Store listing', url: 'https://apps.apple.com/app/id6757801294' },
    ],
    faqs: [
      {
        q: 'What makes a sports card valuable?',
        a: 'Five factors: the player, rookie status, scarcity (print run, parallels, serial numbers), condition, and demand. The cards that bring real money score high on several of those at once.',
      },
      {
        q: 'Are old sports cards always valuable?',
        a: 'No. Age is not a value factor by itself. Cards from the late 1980s and early 1990s were printed in huge quantities, so most are cheap even though they are decades old. Scarcity and demand beat age.',
      },
    ],
    sections: [
      {
        h2: 'The five factors that determine sports card value',
        paras: [
          'Every expensive card combines several of these. Missing even one of them is usually what separates a spectacular card from an ordinary one.',
        ],
      },
      {
        h2: 'The player',
        paras: [
          'The player is the foundation. Superstars, Hall of Famers, and hyped young talents carry demand; role players rarely do. Awards, championships, records, and comebacks all pull collectors toward a player\'s cards, and prices follow that story week to week.',
        ],
      },
      {
        h2: 'Rookie status',
        paras: [
          'A rookie card is a player\'s first officially licensed card. Collectors treat it as the definitive version to own, so it usually sells for more than later cards of the same player. Many modern cards carry an RC logo or a Rated Rookie style mark that makes them easy to spot. A rookie of a player who never became a star is still just a common.',
        ],
      },
      {
        h2: 'Scarcity: print runs, parallels, and serial numbers',
        paras: [
          'Fewer copies means each one can be worth more. Modern sets express scarcity through parallels: alternate versions with different colors or foils, often serial-numbered (/99, /10, 1/1). Vintage scarcity is different. Older cards survive in small numbers because most were thrown away, played with, or damaged.',
        ],
      },
      {
        h2: 'Condition and grading',
        paras: [
          'Condition can multiply or destroy value. Collectors look at corners, edges, surface, and centering. PSA, BGS, and SGC score cards from 1 to 10 and seal them in slabs. The same card in worn shape can be a small fraction of its top-grade price. See <a href="/sports-card-grading">when grading pays</a> before you spend a submission fee.',
        ],
      },
      {
        h2: 'Demand and timing',
        paras: [
          'Value is not static. A playoff run, an MVP season, an injury, or simple hype can move a price within weeks. That is why recent sold sales beat any printed guide: the market is what buyers are paying now.',
        ],
        figure: {
          shot: 4,
          caption: 'Market data screen with an eBay-based estimate, range, demand, and recent sales',
        },
      },
      {
        h2: 'Why two nearly identical cards can have different values',
        paras: ['The usual mistake is comparing your card to a different version of it.'],
        list: {
          items: [
            '<strong>Base vs parallel:</strong> the same photo and number can exist in a dozen print runs.',
            '<strong>Reprints:</strong> famous vintage cards get reprinted. A reprint is a different card.',
            '<strong>Graded vs raw:</strong> a high grade usually sells for more than an ungraded copy.',
            '<strong>Different sets, same year:</strong> brands release many sets per season.',
          ],
        },
      },
      {
        h2: 'How to find the value of a sports card',
        paras: ['Three steps. Identification is the one people skip, and it is the one that wrecks a lookup.'],
        list: {
          ordered: true,
          items: [
            '<strong>Identify the exact card</strong> (player, year, set, number, parallel).',
            '<strong>Judge condition</strong> on corners, edges, surface, and centering.',
            '<strong>Compare recent sold prices</strong> for that version. <a href="/sports-card-prices">How to read averages, medians, and ranges</a>.',
          ],
        },
        cta: {
          title: 'Check a card from a photo',
          text: 'CardSense identifies player, year, set, card number, and rarity, then shows an estimated value from recent eBay sales.',
        },
      },
      {
        h2: 'A worked example without naming a sale price',
        paras: [
          'Take two cards that share a player photo. One is the unnumbered base rookie. The other is a gold parallel serial-stamped to 10 copies. Same player, same year, same set name on the back. The base card might trade for a modest amount if the player is real. The /10 can be a different order of magnitude because scarcity and demand stack. If you price the /10 against sold listings of the base card, you will lowball it. If you price the base against the /10, you will fool yourself.',
          'Condition does the same job. A vintage star in a worn, centered-poor copy is still that player, still that set, still that number. Collectors who want a wall piece may pay something. Collectors who want a slab will walk. Grade is not a vibe. It is corners, edges, surface, centering, scored by a third party or judged strictly by you.',
          'Demand is the factor you cannot see on the cardboard. A role player\'s autograph from a dead set can sit. A star\'s base rookie can jump on a playoff run and give it back a month later. That is why this page refuses a static "the card is worth X" table. The honest output of a lookup is a recent range, with the exact version named.',
        ],
      },
      {
        h2: 'What this guide is not',
        paras: [
          'It is not a substitute for SportsCardsPro, CardLadder, or a full sold-listings search when you are pricing a high-end card to sell. Those tools exist because the market is a database problem at scale. This page is the method: name the five factors, name the exact version, then go get comps. A scanner app is a faster way through the naming step, not a different theory of value.',
        ],
      },
    ],
  },
  {
    slug: 'sports-card-prices',
    path: '/sports-card-prices',
    tag: 'Price guide',
    title: 'Sports Card Prices: How to Check What Cards Really Sell For',
    metaTitle: 'Sports Card Prices: How to Check Real Market Prices | CardSense',
    description:
      'Sports card prices are set by recent sold sales, not asking prices. Learn where prices come from, how to read averages and ranges, and how to check a card from a photo.',
    eyebrow: 'Price guide',
    lede: 'Listed prices tell you what sellers hope for. Sold prices tell you what cards trade for. Here is how to read the second number.',
    directAnswer:
      '<strong>The price of a sports card is what buyers recently paid for it</strong> in comparable condition. Identify the exact card, then look at completed sales and read the average, median, and range rather than a single result.',
    cardTitle: 'How to check sports card prices',
    cardText:
      'Sold listings beat asking prices. How to read averages, medians, and ranges, and the usual mistakes when pricing a card.',
    featuredOnHome: true,
    featureImage: feat(
      'sports-card-prices',
      'Wooden desk with a blank notepad of wave lines, a brass magnifying glass, a stack of blank slips, and a blank card',
    ),
    datePublished: '2026-07-12',
    dateModified: D,
    related: ['/sports-card-value', '/sports-card-worth', '/sports-card-grading'],
    sources: [
      { name: 'eBay sports card price guide', url: 'https://pages.ebay.com/price-guide/' },
      { name: 'SportsCardsPro price guide', url: 'https://www.sportscardspro.com/' },
    ],
    faqs: [
      {
        q: 'Why are asking prices so much higher than sold prices?',
        a: 'Anyone can list a card at any price. Optimistic sellers often ask several times what the card actually trades for. A card is only worth what a buyer pays, so completed sales are the reference, not active listings.',
      },
      {
        q: 'What if there are no recent sales of my card?',
        a: 'Thinly traded cards are harder to price. Look at the closest comparables: the same card in a different grade, the same player in a similar set, or a nearby serial-number range. A wide estimated range is normal when few copies trade.',
      },
    ],
    sections: [
      {
        h2: 'Asking prices vs sold prices',
        paras: [
          'Marketplaces mix two numbers. An asking price is what a seller wants. A sold price is what a buyer paid. Only the second one is a data point. Hopeful listings can sit for months. When someone says a card "goes for" a number, ask: listed, or sold?',
        ],
      },
      {
        h2: 'Where sports card prices come from',
        paras: [
          'For most cards, the reference market is eBay. It hosts the most completed sports card sales across sports, eras, and price brackets. That is why CardSense builds estimates on recent eBay sales. Six-figure cards also trade at specialist auctions, but for the cards in a typical binder, recent eBay sales are the market.',
        ],
        figure: {
          shot: 4,
          caption: 'Estimated value, demand, range, and a list of recent eBay sales on the Market Data screen',
        },
      },
      {
        h2: 'How to read card prices',
        paras: ['One sale is an anecdote. A cluster of recent sales is a price.'],
        table: {
          headers: ['Metric', 'What it tells you'],
          rows: [
            ['Average', 'The mean of recent sales. Useful, but a single outlier can pull it.'],
            ['Median', 'The middle sale. Often the saner "typical" price.'],
            ['Range', 'Low to high. A wide range means condition, timing, or thin trading.'],
            ['Price history', 'Whether the last months climbed, dipped, or sat still.'],
          ],
        },
      },
      {
        h2: 'Mistakes that inflate a number',
        paras: [],
        list: {
          items: [
            'Comparing your raw card to a PSA 10 sold listing.',
            'Using an active auction bid as a sold price.',
            'Ignoring shipping, or mixing domestic and international comps.',
            'Pricing a parallel against the base card because the photo matches.',
          ],
        },
        cta: {
          title: 'Skip the manual eBay search',
          text: 'Photograph the card. CardSense identifies it and shows an estimate from recent eBay sales, with average, median, range, and a chart.',
        },
      },
      {
        h2: 'How often prices move',
        paras: [
          'Constantly, for anything with a pulse. Games, playoffs, awards, injuries, and collector hype all hit. Popular modern cards can move week to week, which is why a chart beats a printed annual. For the five factors behind those moves, read <a href="/sports-card-value">what determines sports card value</a>.',
        ],
      },
      {
        h2: 'A practical sold-listings workflow',
        paras: [
          'Search the exact player, year, set, and card number. Add the parallel name or serial range if you have one. Filter to sold and completed. Ignore auctions that ended with one weird bid and a lot of watchers but no second bidder. Prefer a handful of sales from the last 30 to 90 days over a two-year-old outlier.',
          'Match condition. A raw near-mint copy is not a PSA 10, and a PSA 8 is not a raw "looks fine in the photo" card. If you only find graded comps, say so to yourself and discount. If you only find raw comps and you plan to sell graded, you do not have the number yet.',
          'Shipping and fees are part of the price. A $40 card plus $8 shipping is not a $40 sale. International postage makes this worse. When an app shows a range from recent eBay sales, treat that range as a snapshot of completed prices, then sanity-check two or three of the underlying listings if the card is valuable enough to argue about.',
        ],
      },
      {
        h2: 'When a scanner helps, and when it does not',
        paras: [
          'A scanner earns its keep when you do not know the set. It is weaker when the card is so rare that three sales exist in a year, or when the photo is a bad crop of a foil that fools the model. In those cases, do the manual sold search anyway. The app is a first pass, not a closing price for an auction house lot.',
        ],
      },
    ],
  },
  {
    slug: 'sports-card-worth',
    path: '/sports-card-worth',
    tag: 'Worth check',
    title: 'What Are My Sports Cards Worth? Find Out in 3 Steps',
    metaTitle: 'What Are My Sports Cards Worth? Find Out in 3 Steps | CardSense',
    description:
      'Your sports cards are worth what buyers recently paid for the same cards in the same condition. Identify the card, assess condition, then compare recent sold prices.',
    eyebrow: 'Worth check',
    lede: 'A shoebox in the attic or a binder from childhood: here is a three-step method to get from unknown cardboard to a real market number.',
    directAnswer:
      '<strong>Your sports cards are worth what buyers recently paid</strong> for the same cards in the same condition. Identify each card exactly (year, set, number, variant), judge condition honestly, then compare recent sold prices. A scanner app can run that lookup from a photo.',
    cardTitle: 'What are my sports cards worth?',
    cardText:
      'Found a box in the attic? Identify the exact card, judge condition, then compare recent sold prices. The app can do the lookup from a photo.',
    featuredOnHome: true,
    featureImage: feat(
      'sports-card-worth',
      'Open cardboard box of face-down trading cards on attic floorboards beside a worn baseball glove',
    ),
    datePublished: '2026-07-12',
    dateModified: D,
    related: ['/sports-card-value', '/sports-card-prices', '/sports-card-grading'],
    sources: [
      { name: 'eBay sports card price guide', url: 'https://pages.ebay.com/price-guide/' },
      { name: 'PSA grading overview', url: 'https://www.psacard.com/' },
    ],
    howto: {
      name: 'How to find out what your sports cards are worth',
      description: 'Identify the exact card, assess condition, then compare recent sold prices.',
      steps: [
        { name: 'Identify the exact card', text: 'Record player, year, set, card number, and any parallel, autograph, or serial number.' },
        { name: 'Assess condition', text: 'Check corners, edges, surface, and centering. Be strict.' },
        { name: 'Compare recent sold prices', text: 'Use completed sales of that exact version in similar condition. Read average, median, and range.' },
      ],
    },
    faqs: [
      {
        q: 'Are sports cards from the 1980s and 1990s worth anything?',
        a: 'Most cards from roughly 1987 to 1993, the junk wax era, were printed in such volume that even star-player commons trade for very little. Exceptions are key rookies of all-time greats in top condition, and scarcer premium sets from the early 1990s.',
      },
      {
        q: 'Which cards in a collection are most likely to be valuable?',
        a: 'Start with rookie cards of stars and Hall of Famers, anything serial-numbered or autographed, memorabilia cards, and vintage cards from before about 1980. Sharp corners and clean surfaces are what separate a keeper from a common.',
      },
    ],
    sections: [
      {
        h2: 'Step 1: Identify exactly which card you have',
        paras: [
          '"A Michael Jordan card" is not enough. His cards span decades, dozens of sets, and thousands of versions. You need player and team, year and set, card number, and variant markers (foil, color, serial number, autograph, RC logo).',
          'That identification step is where manual lookups go wrong, and it is what a <a href="/">sports card scanner</a> automates from a photo.',
        ],
        figure: {
          shot: 2,
          caption: 'Confirm Card screen before identification starts, with Retake and Choose Another',
        },
      },
      {
        h2: 'Step 2: Assess the condition honestly',
        paras: ['Condition is the multiplier. Collectors and graders judge four things.'],
        list: {
          items: [
            '<strong>Corners</strong> - sharp, or rounded and frayed.',
            '<strong>Edges</strong> - clean, or chipped.',
            '<strong>Surface</strong> - scratches, print lines, stains, creases.',
            '<strong>Centering</strong> - even borders, or not.',
          ],
        },
      },
      {
        h2: 'Step 3: Compare recent sold prices',
        paras: [
          'With the exact card and its condition known, look at what that card actually sold for, not what sellers are asking. Read the average, the median, and the range. <a href="/sports-card-prices">How to check sports card prices</a> walks through each number.',
        ],
        cta: {
          title: 'Get the answer from one photo',
          text: 'Scan a card with CardSense: identification plus an estimated value from recent eBay sales, with average, median, range, and price history.',
        },
      },
      {
        h2: 'How to find value of sports cards in a mystery box',
        paras: ['The attic-box method:'],
        list: {
          ordered: true,
          items: [
            '<strong>Sort by era.</strong> The back usually shows a copyright year. Pre-1980 cards deserve individual attention; 1987-1993 cards are mostly mass-printed.',
            '<strong>Pull the obvious candidates:</strong> stars, rookies, autographs, serial numbers, anything that looks premium.',
            '<strong>Scan the candidates</strong> and let the estimates tell you where to spend time. Save them into a folder so you build an inventory.',
            '<strong>Do not toss the rest carelessly.</strong> Sentimental value is real, and bulk lots of commons still find buyers.',
          ],
        },
      },
      {
        h2: 'Sell, grade, or keep?',
        paras: [],
        list: {
          items: [
            '<strong>Sell</strong> when the current price meets your goal, especially around a career peak.',
            '<strong>Grade</strong> when a card is valuable and clean enough that a certified grade would beat the fee. See <a href="/sports-card-grading">sports card grading</a>.',
            '<strong>Keep</strong> and track. CardSense updates a collection total so you can decide later with fresh comps.',
          ],
        },
      },
      {
        h2: 'How to find the value of sports cards you cannot name',
        paras: [
          'This is the actual attic problem. You do not know the set. The back is in a language you do not collect. The foil pattern does not match the two sets you remember from childhood. Manual lookup here means flipping through checklists until something matches the photo, which is how people spend an evening and still price the wrong parallel.',
          'Work in batches. Photograph a stack in decent light. Identify each card. Save anything with a real number attached. Leave the rest in a "look later" pile instead of throwing it out. Junk-wax commons are still easier to move as a bulk lot than as 400 individual listings.',
          'If a card comes back with a wide range, that is information. Wide range usually means thin trading, mixed condition in the comps, or a variant the market does not agree on. Do not pick the high end because it feels better. Pick the median and move on unless the card is valuable enough to justify a longer search.',
        ],
      },
    ],
  },
  {
    slug: 'sports-card-grading',
    path: '/sports-card-grading',
    tag: 'Grading',
    title: 'Sports Card Grading: How It Works and When It Pays',
    metaTitle: 'Sports Card Grading: PSA, BGS & SGC Explained | CardSense',
    description:
      'Sports card grading is a professional condition assessment on a 1-10 scale. Learn how PSA, BGS, and SGC grade cards, what a slab does for value, and when the fee is worth it.',
    eyebrow: 'Grading guide',
    lede: 'A professional grade turns "nice condition" into a number the market trusts. Here is how it works, what it costs you, and when the math actually works.',
    directAnswer:
      '<strong>Sports card grading is a professional condition assessment:</strong> PSA, BGS, or SGC scores a card from 1 to 10 on centering, corners, edges, and surface, then seals it in a slab. Grading is worth it when the expected graded price minus the fee clearly exceeds what the card sells for raw.',
    cardTitle: 'Sports card grading: when does it pay?',
    cardText:
      'How PSA, BGS, and SGC grade cards, what a slab does for resale, and the simple fee math before you submit.',
    featuredOnHome: true,
    featureImage: feat(
      'sports-card-grading',
      'White-gloved hand holding a slabbed silhouette baseball card next to a bent raw copy on a white table',
    ),
    datePublished: '2026-07-12',
    dateModified: D,
    related: ['/sports-card-value', '/sports-card-prices', '/sports-card-worth'],
    sources: [
      { name: 'PSA', url: 'https://www.psacard.com/' },
      { name: 'Beckett Grading Services', url: 'https://www.beckett.com/grading' },
      { name: 'SGC', url: 'https://www.gosgc.com/' },
    ],
    faqs: [
      {
        q: 'What does a PSA 10 mean?',
        a: 'PSA 10 (Gem Mint) is the top of PSA\'s 1-10 scale: a virtually flawless card with sharp corners, clean edges and surface, and strong centering. Because so few cards earn it, a 10 usually sells for a clear premium over a 9 of the same card.',
      },
      {
        q: 'Does grading always increase a card\'s value?',
        a: 'No. Grading adds a fee, and a low grade can hurt resale. It pays when the card is valuable and clean: expected graded price minus fee should beat the raw price. For common or worn cards, the math rarely works.',
      },
    ],
    sections: [
      {
        h2: 'What grading actually does',
        paras: [
          'A grader inspects centering, corners, edges, and surface, assigns a number, and seals the card in a tamper-evident holder with a certification number. Buyers no longer have to guess condition from photos, so high-grade slabs trade more easily than raw copies of the same card.',
        ],
      },
      {
        h2: 'PSA, BGS, and SGC',
        paras: [
          'PSA is the largest and usually the most liquid market for slabs. BGS is known for subgrades and its Black Label. SGC has a strong vintage reputation. The "best" company depends on the card and where you plan to sell it, not a universal ranking.',
        ],
        figure: {
          shot: 3,
          caption: 'Card detail with a Rookie Card badge. Condition still has to be judged separately from the ID.',
        },
      },
      {
        h2: 'The simple math before you submit',
        paras: [
          'Take the recent sold price of the card raw. Take the recent sold price of the same card in the grade you honestly expect. Subtract the grading fee and shipping. If there is not a clear margin, keep it raw. Grading a junk-wax common almost never pays.',
        ],
        cta: {
          title: 'Price the card raw first',
          text: 'Scan the card, see the eBay-based estimate, then compare that raw number to graded comps before you pay a submission fee.',
        },
      },
      {
        h2: 'This app does not grade cards',
        paras: [
          'CardSense identifies a card and estimates a market value. It does not replace PSA, BGS, or SGC. Use the scan to decide whether a card is even in the conversation, then look at graded comps if the raw number is high enough.',
        ],
      },
      {
        h2: 'What graders actually look at',
        paras: [
          'Centering is the borders. A card that is obviously shifted left will not gem, even if the corners are knife-sharp. Corners are the easiest tell for a non-grader: look for fraying, dings, or whitening. Edges chip. Surfaces pick up scratches, print defects, wax stains, and roller marks that only show in raking light.',
          'If you cannot describe those four things honestly, you are not ready to pick a grade target. "Looks pretty good in a toploader on my desk" is how people pay for a 6 and feel cheated. Pull the card out. Tilt it. Compare it to photos of known 8s and 9s of the same issue if they exist.',
        ],
      },
      {
        h2: 'Fees, queues, and the cards that never pay',
        paras: [
          'Grading is not free, and it is not instant. Economy tiers are cheaper and slower. Express tiers cost more. You also pay shipping both ways and, on some services, a special handling fee for older cardboard. Add those up before you compare raw and graded comps.',
          'Mass-printed commons, damaged vintage, and modern base cards of role players almost never clear that hurdle. A $12 raw card that might be $25 in a 10 still loses if the fee is $20 and the card comes back a 9. Grade the cards where a single point on the scale is hundreds of dollars, not the cards where it is three.',
        ],
      },
    ],
  },
  {
    slug: 'baseball-card-values',
    path: '/baseball-card-values',
    tag: 'Baseball',
    title: 'Baseball Card Values: What Are Your Cards Worth?',
    metaTitle: 'Baseball Card Values: What Are Your Cards Worth? | CardSense',
    description:
      'Baseball card values depend on era, player, rookie status, scarcity, and condition. From junk wax to vintage: learn which baseball cards hold value and how to check yours.',
    eyebrow: 'Baseball guide',
    lede: 'Baseball is where card collecting began, and it is still the deepest market. Era sets the stage; player, rookie status, scarcity, and condition do the rest.',
    directAnswer:
      '<strong>Baseball card values depend on the era, the player, rookie status, scarcity, and condition.</strong> Vintage cards (roughly pre-1980) and key modern rookies in high grades hold the most value. Mass-printed cards from 1987-1993 are usually worth little. Real value is what buyers recently paid for the same card in the same condition.',
    cardTitle: 'Baseball card values explained',
    cardText:
      'Vintage, junk wax, or modern. Which eras hold value, what makes a rookie special, and how to check any baseball card.',
    featuredOnHome: true,
    featureImage: feat(
      'baseball-card-values',
      'Baseball glove holding blank cards, a wooden bat, and a scuffed baseball on blue linen by a window',
    ),
    datePublished: '2026-07-12',
    dateModified: D,
    related: ['/baseball-card-scanner', '/sports-card-worth', '/sports-card-grading'],
    sources: [
      { name: 'eBay sports card price guide', url: 'https://pages.ebay.com/price-guide/' },
      { name: 'SportsCardsPro baseball prices', url: 'https://www.sportscardspro.com/category/baseball-cards' },
    ],
    faqs: [
      {
        q: 'Are baseball cards from the 1980s and 1990s worth anything?',
        a: 'Most cards from 1987-1993, the junk wax era, are worth very little because of enormous print runs. Exceptions are iconic Hall of Fame rookies in top graded condition and some scarcer premium issues from the early 1990s.',
      },
      {
        q: 'What is a baseball rookie card?',
        a: 'A rookie card is a player\'s first officially licensed card in a major set. Modern collectors chase first Bowman Chrome prospect cards and flagship Topps rookies marked RC. Those usually carry the biggest premium of any card of that player.',
      },
    ],
    sections: [
      {
        h2: 'What drives baseball card values',
        paras: [
          'Baseball uses the same five factors as every sport (see the <a href="/sports-card-value">sports card value guide</a>), but the era of the card sets the stage. Star power on a 1950s Topps card is a different market from a 1990 mass-market card of a similar caliber player.',
        ],
      },
      {
        h2: 'Baseball card values by era',
        paras: [],
        table: {
          headers: ['Era', 'Years (approx.)', 'What it means for value'],
          rows: [
            ['Pre-war', 'Before 1945', 'Tobacco and gum cards (T206, Goudey). Genuinely scarce; even worn key cards attract serious collectors.'],
            ['Vintage', '1945-1979', 'Classic Topps decades. Star cards and rookies are blue chips; condition is everything because few survived well.'],
            ['Junk wax', '1987-1993', 'Massive overproduction. Most cards are commons; only top rookies in top grades and scarcer premium issues stand out.'],
            ['Modern', '1994-today', 'Engineered scarcity: numbered parallels, autographs, first Bowman Chrome, and flagship rookies.'],
          ],
        },
      },
      {
        h2: 'Rookie cards and the sets that matter',
        paras: [
          'The rookie premium is amplified by prospecting. Collectors buy minor-leaguers hoping to hold a future star\'s first card.',
        ],
        list: {
          items: [
            '<strong>First Bowman Chrome:</strong> often issued years before an MLB debut. The modern chase card.',
            '<strong>Flagship Topps RC:</strong> the licensed rookie most casual collectors recognize.',
            '<strong>Vintage flagship rookies:</strong> the cards that built the hobby, where grade gaps are enormous.',
          ],
        },
        figure: {
          shot: 5,
          caption: 'Collection vault with search and filters, including baseball cards mixed with other sports',
        },
        cta: {
          title: 'Scan a baseball card',
          text: 'Photograph any Topps, Bowman, Fleer, or Upper Deck baseball card. CardSense returns the ID and an eBay-based estimate.',
        },
      },
      {
        h2: 'Junk wax vs vintage, in practice',
        paras: [
          'If your box is full of 1988-1992 glossy rookies in rubber-banded stacks, assume common until a scan says otherwise. The print runs from those years are the reason "old" and "valuable" parted ways. A Hall of Fame rookie from that window can still be real money in a high grade. The same player\'s 15th card from the same year is usually not.',
          'Vintage is the opposite problem: survival. A 1950s or 1960s star that spent 40 years in an attic may be the right card and still be a low-grade copy. Do not sandbag yourself by comparing it to a PSA 8 auction result you saw on a highlight reel. Compare it to other worn copies of the same number.',
        ],
      },
      {
        h2: 'How to check a baseball card you cannot name',
        paras: [
          'Read the copyright line and the card number on the back. Note any RC mark, any foil pattern, any serial stamp. If the back is bilingual, you may be holding an O-Pee-Chee-style issue even on a baseball card from a shared design language, so do not assume Topps. Then either search those details as sold listings or photograph the card and let the scanner propose the set.',
          'Once you have the exact name, jump to <a href="/baseball-card-scanner">scanning baseball cards</a> if you have a pile, or stay on sold comps if you have one card and already know the set. The <a href="/sports-card-worth">three-step worth method</a> is the same here as in any other sport. Baseball just has more lookalikes.',
        ],
      },
    ],
  },
  {
    slug: 'basketball-card-values',
    path: '/basketball-card-values',
    tag: 'Basketball',
    title: 'Basketball Card Values: What Are Your Cards Worth?',
    metaTitle: 'Basketball Card Values: What Are Your Cards Worth? | CardSense',
    description:
      'Basketball card values are driven by the player, rookie status, parallels, and condition. Learn which NBA cards hold value and how to check any card from a photo.',
    eyebrow: 'Basketball guide',
    lede: 'Basketball is the most parallel-driven major card market. One rookie can exist in dozens of versions with wildly different prices.',
    directAnswer:
      '<strong>Basketball card values depend on the player, rookie status, the exact parallel, and condition.</strong> Modern NBA sets print the same card in many versions. Identifying the precise parallel is the job. Real value is what buyers recently paid for that version in the same condition.',
    cardTitle: 'Basketball card values explained',
    cardText:
      'Rookies, inserts, and parallels. How the NBA card market prices the same player many ways.',
    featuredOnHome: false,
    featureImage: feat(
      'basketball-card-values',
      'Orange basketball on a gym floor next to a fan of face-down cards and a gold foil card',
    ),
    datePublished: '2026-07-12',
    dateModified: D,
    related: ['/basketball-card-scanner', '/sports-card-worth', '/sports-card-grading'],
    sources: [
      { name: 'eBay sports card price guide', url: 'https://pages.ebay.com/price-guide/' },
      { name: 'CardSense App Store listing', url: 'https://apps.apple.com/app/id6757801294' },
    ],
    faqs: [
      {
        q: 'Are basketball cards from the 1990s worth anything?',
        a: 'Base cards from the early 1990s were overprinted and are usually cheap. The exceptions are scarce inserts and premium sets of superstars, plus iconic rookies in top graded condition.',
      },
      {
        q: 'Why are two basketball cards of the same player worth different amounts?',
        a: 'Modern sets are built around parallels: colors, foils, and print runs from unnumbered base to 1/1. The exact parallel, plus condition, is what separates a common from a chase card.',
      },
    ],
    sections: [
      {
        h2: 'What makes basketball cards different',
        paras: [
          'Since the 1990s, NBA sets have layered scarce chase cards on top of base sets: refractors, colored parallels, serial-numbered versions, case hits. The gap between a base card and its rarest parallel is enormous. The five general factors still apply; see the <a href="/sports-card-value">sports card value guide</a>.',
        ],
      },
      {
        h2: 'Basketball card values by era',
        paras: [],
        table: {
          headers: ['Era', 'Years (approx.)', 'What it means for value'],
          rows: [
            ['Vintage', '1948-1985', 'Sparse releases, low survival. Early Topps and Fleer star rookies sit at the high end.'],
            ['Insert boom', '1986-1998', 'Jordan-era hobby explosion. Base is often cheap; scarce inserts of stars still chase.'],
            ['Modern parallels', '1999-today', 'Engineered scarcity. The parallel and the autograph are the price.'],
          ],
        },
        figure: {
          shot: 6,
          caption: 'Identified basketball card with player name, price range, and demand overlays',
        },
        cta: {
          title: 'Scan a basketball card',
          text: 'Photograph an NBA card. CardSense reads the set and parallel, then shows an estimate from recent eBay sales.',
        },
      },
      {
        h2: 'Inserts from the 1990s vs modern parallels',
        paras: [
          '1990s basketball taught the hobby that a pack-odds chase card can outrun a base rookie. Many of those inserts are still the cards people mean when they say a 90s basketball card is "worth something." The trap is the base set from the same year, which was printed like wallpaper.',
          'Modern NBA collecting flipped the script toward parallels of the same rookie. The photo may match. The print run does not. Color, foil, and a serial stamp are the whole identification job. If you skip them, you will search the wrong sold listings every time.',
        ],
      },
      {
        h2: 'How to check an NBA card from a photo',
        paras: [
          'Fill the frame so borders and foil are visible. Confirm the set line on the back against whatever the scanner returns. Then read the estimate as a range, not a promise. International stars often have demand from more than one country, which can make comps noisier, not cleaner.',
          'For a binder, scan rookies and anything that looks like a parallel first. Leave base commons for last. Details on the camera flow live on the <a href="/basketball-card-scanner">basketball card scanner</a> page.',
        ],
      },
      {
        h2: 'International demand and thin comps',
        paras: [
          'NBA cards travel. A European or African star can have collectors at home and in the US looking at the same parallel, which sometimes tightens a market and sometimes just adds messy foreign listings to the sold feed. When the range is wide, open two or three actual sales and see whether you are looking at the same grade and the same parallel.',
          'Vintage basketball is thinner. Early Topps and Fleer star rookies are the high end because so few copies survived in high grade, not because every 1970s basketball card is a grail. Most of a mixed box from that era will still be commons once you name the set. Name it first, then decide whether condition is even worth an argument.',
          'If you are pricing to sell, pull comps from the last 60 days when you can. A Jordan-adjacent insert from the 90s can have a long tape. A current parallel of a role player may have three sales and a prayer. The range is the honest output. A single screenshot of someone else\'s asking price is not.',
        ],
      },
    ],
  },
  {
    slug: 'football-card-values',
    path: '/football-card-values',
    tag: 'Football',
    title: 'Football Card Values: What Are Your Cards Worth?',
    metaTitle: 'Football Card Values: What Are Your Cards Worth? | CardSense',
    description:
      'Football card values are driven by the player (especially quarterbacks), rookie status, parallels, and condition. Learn which NFL cards hold value and how to check yours.',
    eyebrow: 'Football guide',
    lede: 'Football cards live and die with the quarterback position, rookie classes, and the exact parallel in your hand.',
    directAnswer:
      '<strong>Football card values depend on the player and position, rookie status, the exact parallel, and condition.</strong> Quarterbacks command the biggest premiums. Rookie cards are the most collected versions. Scarcity comes from numbered parallels and autographs. Real value is what buyers recently paid for that exact version.',
    cardTitle: 'Football card values explained',
    cardText:
      'Why quarterbacks dominate the market, and which NFL rookies and parallels hold value.',
    featuredOnHome: false,
    featureImage: feat(
      'football-card-values',
      'Brown football on night turf beside a stack of red-and-gold bordered cards',
    ),
    datePublished: '2026-07-12',
    dateModified: D,
    related: ['/football-card-scanner', '/sports-card-worth', '/sports-card-grading'],
    sources: [
      { name: 'eBay sports card price guide', url: 'https://pages.ebay.com/price-guide/' },
      { name: 'CardSense App Store listing', url: 'https://apps.apple.com/app/id6757801294' },
    ],
    faqs: [
      {
        q: 'Why are quarterback cards worth more?',
        a: 'Quarterbacks are the face of every franchise and dominate collector demand. Star players at other positions can still be valuable, but elite QB rookies set the top of the football market.',
      },
      {
        q: 'What is a rookie patch auto (RPA)?',
        a: 'An RPA is a rookie card with an on-card autograph and a piece of player-worn jersey or patch, usually serial-numbered to a low print run. RPAs from premium sets are the flagship chase cards of modern football.',
      },
    ],
    sections: [
      {
        h2: 'What drives football card values',
        paras: [
          'Same five factors as every sport, with two accents. Position matters: quarterbacks are collected far more than other spots. The season is event-driven. A playoff run can reprice a player\'s whole market in weeks, which is why recent sold prices beat any static guide. Background: <a href="/sports-card-value">sports card value</a>.',
        ],
      },
      {
        h2: 'The cards that carry the football market',
        paras: [],
        list: {
          items: [
            '<strong>Rookie cards:</strong> the RC from a flagship set is the reference card.',
            '<strong>Colored and numbered parallels:</strong> scarcer versions of the same rookie.',
            '<strong>Rookie patch autos:</strong> serial-numbered rookies with an autograph and patch.',
            '<strong>Vintage stars:</strong> 1950s-1970s Hall of Famers, where condition and scarcity set the price.',
          ],
        },
        cta: {
          title: 'Scan a football card',
          text: 'Photograph an NFL card, including autographs and numbered parallels. CardSense identifies it and shows an eBay-based estimate.',
        },
      },
      {
        h2: 'Position, rookies, and a short season',
        paras: [
          'A late-round running back can have a gorgeous rookie. The market still prefers quarterbacks. That is not a moral claim. It is how demand has worked for years. When you triage a football collection, QB rookies, RPAs, and numbered color go in the first pile. Most other base cards go in the second.',
          'Because the NFL season is short and loud, prices jump on playoff runs and give it back in March. Price a football card with recent sales, not last year\'s peak screenshot. If you are deciding whether to grade, wait until you have both a raw number and a graded number from the same window. The <a href="/sports-card-grading">grading math</a> does not change for football; the volatility does.',
        ],
      },
      {
        h2: 'How to check an NFL card you just found',
        paras: [
          'Look for an RC logo, a serial stamp, a patch window, and an autograph. Those four marks do more than the player name. Photograph the card in light that does not blow out the foil. Confirm year, set, and number. Then read comps for that exact version. The camera walkthrough is on <a href="/football-card-scanner">football card scanner</a>.',
        ],
      },
      {
        h2: 'Junk wax football and the cards that still clear',
        paras: [
          'Late-1980s and early-1990s football was overprinted like every other sport. Base cards of even famous names from those years are usually commons. The cards that still clear a lookup are high-grade flagship rookies of all-time quarterbacks, scarcer premium issues, and anything that was actually short-printed at the time rather than just old.',
          'Modern football flipped to engineered scarcity. The same rookie is a ladder of colors and patches. If you inherited a 2010s break box leftover, scan the numbered cards and the autos first. The rest of the base rainbow is homework, not a retirement plan. Use recent sold prices, because last season\'s QB hype is already stale.',
          'When a card is both numbered and autographed, search that way. Comps for the unsigned color are the wrong comps. Comps for a different serial range can be wrong too. Tight identification is the whole game on modern football, which is why a photo beats a guess from the player\'s name on the front.',
        ],
      },
    ],
  },
  {
    slug: 'hockey-card-values',
    path: '/hockey-card-values',
    tag: 'Hockey',
    title: 'Hockey Card Values: What Are Your Cards Worth?',
    metaTitle: 'Hockey Card Values: What Are Your Cards Worth? | CardSense',
    description:
      'Hockey card values are driven by the player, rookie cards like Young Guns, scarcity, and condition. Learn which NHL cards hold value, from vintage O-Pee-Chee to modern rookies.',
    eyebrow: 'Hockey guide',
    lede: 'From vintage O-Pee-Chee cardboard to modern Young Guns rookies, hockey has one of the hobby\'s most loyal collector bases.',
    directAnswer:
      '<strong>Hockey card values depend on the player, rookie status, scarcity, and condition.</strong> Modern value concentrates in flagship rookies such as Upper Deck Young Guns and their scarcer parallels. Vintage value concentrates in star cards that survived clean. The real price is what buyers recently paid for the exact card.',
    cardTitle: 'Hockey card values explained',
    cardText:
      'Young Guns rookies, vintage O-Pee-Chee, and where NHL card value concentrates.',
    featuredOnHome: false,
    featureImage: feat(
      'hockey-card-values',
      'Black hockey puck on ice beside a toploaded card showing a skater silhouette',
    ),
    datePublished: '2026-07-12',
    dateModified: D,
    related: ['/sports-card-worth', '/sports-card-grading', '/baseball-card-values'],
    sources: [
      { name: 'eBay sports card price guide', url: 'https://pages.ebay.com/price-guide/' },
      { name: 'CardSense App Store listing', url: 'https://apps.apple.com/app/id6757801294' },
    ],
    faqs: [
      {
        q: 'What are Young Guns cards?',
        a: 'Young Guns are the rookie cards in Upper Deck\'s flagship hockey series. They are the standard modern hockey rookie: short-printed relative to the base set, easy to recognize, and the first card the market reprices when a prospect breaks out.',
      },
      {
        q: 'What is the difference between O-Pee-Chee and Topps vintage hockey cards?',
        a: 'For decades the same designs were issued by Topps in the US and O-Pee-Chee in Canada. Canadian versions often had different print runs and bilingual backs. Collectors price the two separately, so identifying which one you hold matters.',
      },
    ],
    sections: [
      {
        h2: 'What makes hockey collecting distinct',
        paras: [
          'One brand, Upper Deck, has defined modern NHL collecting. One rookie subset, Young Guns, is the standard in a way few sports can match. Vintage has a twist: the same designs existed as Topps (US) and O-Pee-Chee (Canada), priced separately. The universal rules from the <a href="/sports-card-value">value guide</a> still apply on top.',
        ],
      },
      {
        h2: 'Where hockey card value concentrates',
        paras: [],
        list: {
          items: [
            '<strong>Young Guns rookies</strong> and their parallels.',
            '<strong>High-end rookie autographs and patches</strong> from premium releases.',
            '<strong>Vintage stars</strong> from the Original Six era through the 1980s, in clean condition.',
            '<strong>O-Pee-Chee variants</strong>, collected and priced on their own.',
          ],
        },
        cta: {
          title: 'Scan a hockey card',
          text: 'Photograph Young Guns, vintage O-Pee-Chee, or a modern parallel. CardSense identifies the card and shows an estimate from recent eBay sales.',
        },
      },
      {
        h2: 'Young Guns, and the vintage bilingual trap',
        paras: [
          'If a modern hockey card has the Young Guns design language, you are probably holding the rookie the market cares about. Parallels of that rookie still need the same careful ID as basketball color. Do not price a numbered Young Guns parallel against the base Young Guns sold listing.',
          'Vintage is where people mix Topps and O-Pee-Chee. The fronts can look like cousins. The backs and the print runs are not the same, and collectors pay accordingly. If the back is bilingual, stop assuming it is the US issue. Get the exact version name before you shop comps.',
        ],
      },
      {
        h2: 'How to check hockey cards in a mixed box',
        paras: [
          'Sort Young Guns and anything that looks like a premium rookie into one stack. Sort older cardboard into another and check the back language. Scan the first stack. For the second, identification matters as much as condition because the wrong brand version will send you to the wrong sales.',
          'Hockey demand is loyal and thinner than football or basketball on many names. A wide range on an estimate often means few sales, not a broken tool. Read the underlying listings when the number would change a keep-or-sell decision.',
        ],
      },
      {
        h2: 'Goalies, skaters, and a smaller auction tape',
        paras: [
          'Star goaltenders have a dedicated following, and their key rookies are chased. The premium still concentrates on elite forwards more often than not. Position is a hint, not a rule. The player\'s actual career is the rule.',
          'Because fewer copies of many hockey cards trade, a three-sale sample can bounce. Do not treat one outlier as the market. If you are selling, look at more than the app\'s point estimate. If you are keeping, a vault total that moves around on thin names is expected. Grade only when raw and graded comps for that exact Young Guns or vintage star are far apart after fees.',
          'Early-1990s hockey was overprinted like junk wax everywhere else. Base cards from that window are usually commons. Value from the era sits in scarcer inserts, key rookies of all-time greats in high grades, and premium issues. Age is not a shortcut around that fact.',
        ],
      },
    ],
  },
  {
    slug: 'soccer-card-values',
    path: '/soccer-card-values',
    tag: 'Soccer',
    title: 'Soccer Card Values: What Are Your Cards Worth?',
    metaTitle: 'Soccer Card Values: What Are Your Cards Worth? | CardSense',
    description:
      'Soccer card values are driven by global stars, first cards in major sets, parallels, and condition. Learn how the market works and check any card from a photo.',
    eyebrow: 'Soccer guide',
    lede: 'Soccer brings a worldwide collector base and tournament cycles that US sports do not have. Identification of the exact set matters even more here.',
    directAnswer:
      '<strong>Soccer card values depend on the player\'s global star power, how early the card sits in their career, the exact set and parallel, and condition.</strong> Soccer has no single rookie-card standard like the NBA or NFL, so identifying the precise set and year is the step that decides the comps. Real value is what buyers recently paid for that exact card.',
    cardTitle: 'Soccer card values explained',
    cardText:
      'Global stars, tournament cycles, and first cards in a market that still moves with the calendar.',
    featuredOnHome: false,
    featureImage: feat(
      'soccer-card-values',
      'Black-and-white soccer ball on grass at sunset with face-down cards and one rainbow foil card',
    ),
    datePublished: '2026-07-12',
    dateModified: D,
    related: ['/sports-card-worth', '/sports-card-grading', '/basketball-card-values'],
    sources: [
      { name: 'eBay sports card price guide', url: 'https://pages.ebay.com/price-guide/' },
      { name: 'CardSense App Store listing', url: 'https://apps.apple.com/app/id6757801294' },
    ],
    faqs: [
      {
        q: 'What counts as a rookie card in soccer?',
        a: 'Soccer has no single rookie-card standard. Collectors generally treat a player\'s first cards in major licensed sets as their rookie-year cards, which is why the exact set and year matter even more than in US sports.',
      },
      {
        q: 'Do soccer card values spike around the World Cup?',
        a: 'Tournament cycles move the market. Interest in international stars builds toward major tournaments, and breakout performances pull new collectors in. Club competitions like the Champions League drive a second rhythm across the season.',
      },
    ],
    sections: [
      {
        h2: 'Why soccer identification is picky',
        paras: [
          'Collectors on every continent chase the same global icons. The market is younger and less standardized than baseball or basketball, which makes exact set identification more important, not less. Stickers (especially vintage World Cup albums) are a separate hobby from modern licensed trading cards.',
        ],
        list: {
          items: [
            '<strong>Global icons:</strong> early cards, parallels, and autographs of the sport\'s legendary names.',
            '<strong>First cards of young stars</strong> in major licensed sets.',
            '<strong>Parallels and autographs</strong> with serial numbers, same playbook as US sports.',
            '<strong>Tournament cycles</strong> around World Cups and continental championships.',
          ],
        },
        cta: {
          title: 'Scan a soccer card',
          text: 'Photograph a club or national-team card. CardSense identifies it and shows an estimate from recent eBay sales.',
        },
      },
      {
        h2: 'Stickers, first cards, and tournament noise',
        paras: [
          'A World Cup sticker album is not a Panini Prizm parallel. People mix those hobbies because both involve soccer and cardboard. Vintage complete albums can be collected seriously. Loose modern stickers usually are not the same market as serial-numbered trading cards. If you are pricing a trading card, stay in trading-card comps.',
          'Because soccer has no single RC standard, "rookie" is an argument. Collectors still pay a premium for early licensed cards of a star. Your job is to name the set and the year, not to win the argument. Tournament years add noise: a breakout at a World Cup can reprice a young player for a few months. Use recent sales, not a peak tweet.',
        ],
      },
      {
        h2: 'How to check a soccer card from a photo',
        paras: [
          'Club crest, national-team kit, set name, and year are the identifiers. Photograph the front and glance at the back for the set line. Confirm that the scanner\'s set matches that line. Then read the eBay range. If the player is global, comps may include more than one country\'s listings; shipping and currency will scatter the range.',
        ],
      },
      {
        h2: 'Club vs country, and the young-star premium',
        paras: [
          'Some collectors chase club issues, some chase national-team tournaments. The same player can have both, with different print runs and different demand. Do not assume a club parallel comps like a World Cup card because the face is the same.',
          'Young stars at top clubs attract prospecting the way Bowman does in baseball, except without a single official rookie logo to settle arguments. Your protection is the set name and the year, written down or saved in a vault after a scan. When a tournament lights up a new name, prices can jump and then sit. Use the last few months of sales, not the week of the final.',
          'Licensed trading-card brands in soccer have changed over the years, which is another reason set name beats player name. A first card in one product is not a first card in every product. Write the product down. Then compare sold listings of that product, not a generic "rookie" search.',
        ],
      },
    ],
  },
  {
    slug: 'best-sports-card-scanner-app',
    path: '/best-sports-card-scanner-app',
    tag: 'App comparison',
    title: 'Best Sports Card Scanner App: 4 Scanners Compared',
    metaTitle: 'Best Sports Card Scanner App: 4 Apps Compared (2026) | CardSense',
    description:
      'CardSense, CollX, Ludex, and StarSnap compared on price, sports coverage, pricing data, and platforms, using each app\'s public listing. CardSense is ours; the page says so.',
    eyebrow: 'App comparison',
    lede: 'Every scanner promises to identify your cards and tell you what they are worth. They differ in what happens next: selling, TCG, grading, or tracking a collection.',
    directAnswer:
      '<strong>The best sports card scanner app depends on what you want after the scan.</strong> Choose CardSense for identification, eBay-based values, and collection tracking on iPhone. Choose CollX for a built-in marketplace. Choose Ludex if you also collect trading card games or use Android. Choose StarSnap if grading guidance matters most.',
    cardTitle: 'The best sports card scanner apps, compared',
    cardText:
      'CardSense, CollX, Ludex, and StarSnap side by side on price, sports coverage, and pricing data. CardSense is ours; the page says so.',
    featuredOnHome: true,
    featureImage: feat(
      'best-sports-card-scanner-app',
      'Four black phones face-down on a white table with a baseball, basketball, football, hockey puck, and a blank card',
    ),
    datePublished: '2026-08-04',
    dateModified: D,
    related: ['/sports-card-value', '/sports-card-prices', '/baseball-card-scanner'],
    sources: [
      { name: 'CardSense on the App Store', url: 'https://apps.apple.com/app/id6757801294' },
      { name: 'CollX', url: 'https://collx.app/' },
      { name: 'Ludex', url: 'https://www.ludex.com/' },
    ],
    faqs: [
      {
        q: 'Do sports card scanner apps work on Android?',
        a: 'Some do. Ludex lists iOS and Android. CardSense is an iPhone app (iOS 18.2+) and has no Play Store listing.',
      },
      {
        q: 'Can these apps scan Pokémon and other trading card games?',
        a: 'CollX and Ludex both list support for trading card games such as Pokémon alongside sports cards. CardSense is built for sports cards: baseball, basketball, football, hockey, and soccer.',
      },
    ],
    sections: [
      {
        h2: 'First, the disclosure',
        paras: [
          'CardSense is our app. This site exists to support it. Instead of a rigged ranking, this comparison sticks to what each app says about itself on its public listing or website (checked August 2026) and says which collector each one fits. Where CardSense is not the right choice, it says so.',
        ],
      },
      {
        h2: 'The four apps at a glance',
        paras: [],
        table: {
          headers: ['', 'CardSense', 'CollX', 'Ludex', 'StarSnap'],
          rows: [
            ['Focus', 'Identify, value, track sports cards', 'Scan plus buy/sell marketplace', 'Sports cards and TCG', 'Scan with grading guidance'],
            ['Platform', 'iPhone, iOS 18.2+', 'iPhone (marketplace in-app)', 'iOS and Android', 'iPhone'],
            ['Pricing data', 'Recent eBay sales', 'Own sales database', 'Price guide plus TCG', 'Market data plus grade hints'],
            ['Sports', 'Baseball, basketball, football, hockey, soccer', 'Sports cards broadly', 'Sports plus TCG', 'Sports cards'],
            ['Download', 'Free, premium for unlimited scans', 'Free with marketplace features', 'Free with premium tier', 'Free with premium tier'],
          ],
        },
      },
      {
        h2: 'How to choose',
        paras: [
          'If you want a marketplace in the same app, CollX is built for that. If you collect Pokémon as well as sports, or you need Android, Ludex fits better. If you are trying to decide whether to submit for grading, StarSnap leans that way. If you want a fast ID, an eBay-based number, and a vault on iPhone, that is CardSense.',
          'No scanner is perfect. Identification is hardest on parallels that differ in small details. Let the app ID the card, then glance at the year, set, and number it returns before you trust the estimate.',
        ],
        cta: {
          title: 'Try CardSense free',
          text: 'Free on the App Store for iPhone. Premium unlocks unlimited scans and full market details.',
        },
      },
      {
        h2: 'What "best" cannot mean',
        paras: [
          'Google for this query is a pile of App Store listings, Reddit threads, and each company\'s own site. There is no independent lab score. Accuracy claims in marketing copy are not something this page will repeat as fact. A useful comparison is jobs: marketplace, TCG, grading guidance, or a clean identify-and-track loop on iPhone.',
          'CardSense does not buy or sell cards, does not scan Pokémon, and does not run on Android. If those are requirements, pick the app that lists them. If you want eBay-based comps and a vault after the scan, stay. The rest of this site is the method behind the numbers: <a href="/sports-card-prices">sold prices</a>, <a href="/sports-card-value">the five value factors</a>, and sport-specific pages when the cardboard is baseball-heavy.',
        ],
      },
      {
        h2: 'Accuracy, platforms, and the hardware red herring',
        paras: [
          'Reddit threads about "fastest scanner" are useful for software feel and less useful for a single accuracy percentage. Parallels that differ in a thin foil line will fool every camera app some of the time. The workable habit is: scan, read the set line, then trust the comps.',
          'Google also ranks physical document scanners for this query. Those machines digitize a collection. They do not identify a 1986 Fleer from a living-room photo. If you wanted a Fujitsu, you are on the wrong page. If you wanted an iPhone app, compare the four above and download the one whose after-scan job matches yours.',
        ],
      },
    ],
  },
  {
    slug: 'baseball-card-scanner',
    path: '/baseball-card-scanner',
    tag: 'Baseball scanner',
    title: 'Baseball Card Scanner: Identify and Value Cards from a Photo',
    metaTitle: 'Baseball Card Scanner: Identify & Value Any Card | CardSense',
    description:
      'Scan baseball cards with your iPhone. CardSense identifies the player, year, set, and card number from a photo and shows an estimated value from recent eBay sales.',
    eyebrow: 'Baseball scanner',
    lede: 'Seventy years of Topps, junk-wax mountains, and Bowman prospects that all look alike. Baseball is the sport where scanning beats searching by hand.',
    directAnswer:
      '<strong>A baseball card scanner identifies a card from a photo and shows what it is worth.</strong> Snap a picture with your iPhone and CardSense returns the player, team, year, set, card number, and rarity, plus an estimated value based on recent eBay sales. It is free to download and works on junk-wax commons and vintage Topps alike.',
    cardTitle: 'Scan baseball cards from a photo',
    cardText:
      'Why baseball is the hardest sport to look up by hand, and how a scan reads the year, set, and card number that set the price.',
    featuredOnHome: true,
    featureImage: feat(
      'baseball-card-scanner',
      'Black phone hovering over a blank cream card with a blue scan glow on a wooden desk, baseball nearby',
    ),
    datePublished: '2026-08-04',
    dateModified: D,
    related: ['/baseball-card-values', '/sports-card-worth', '/best-sports-card-scanner-app'],
    sources: [
      { name: 'CardSense App Store listing', url: 'https://apps.apple.com/app/id6757801294' },
      { name: 'eBay sports card price guide', url: 'https://pages.ebay.com/price-guide/' },
    ],
    howto: {
      name: 'How to scan a baseball card',
      description: 'Photograph the card, confirm the crop, then read the identification and eBay-based estimate.',
      steps: [
        { name: 'Photograph the card', text: 'Use the camera or a library photo. Keep the card fully visible and well-lit.' },
        { name: 'Confirm the crop', text: 'Check the Confirm Card screen. Retake or choose another picture if needed, then start identification.' },
        { name: 'Read the result', text: 'Check player, year, set, and number, then the eBay-based value. Save it to a folder if you want a running total.' },
      ],
    },
    faqs: [
      {
        q: 'Can I scan baseball cards for value with just a phone camera?',
        a: 'Yes. A phone photo is enough. No flatbed scanner. CardSense works with a new camera shot and with pictures already in your library.',
      },
      {
        q: 'Does scanning work on vintage baseball cards?',
        a: 'Scanner apps handle vintage cardboard as well as modern releases. CardSense is trained on more than 5,000 card types including Topps, Bowman, Fleer, and Upper Deck. Era still changes value; see the baseball values guide.',
      },
    ],
    sections: [
      {
        h2: 'Why baseball cards are the hardest to look up by hand',
        paras: [
          'Typing a modern basketball rookie into a search bar often works. Baseball is different. Topps has printed flagship sets every year since the 1950s. Bowman issues prospect cards years before the majors. The junk wax era left collections with hundreds of near-identical commons. The year, set, and number that <a href="/sports-card-value">actually determine value</a> are slow work with a checklist. A scanner reads those details from the card.',
        ],
      },
      {
        h2: 'What the scanner reads from a baseball card',
        paras: [],
        table: {
          headers: ['What CardSense identifies', 'Why it matters for value'],
          rows: [
            ['<strong>Player and team</strong>', 'Stars and Hall of Famers carry the demand.'],
            ['<strong>Year and set</strong>', 'A 1975 Topps card and a 1990 mass-market card live in different price universes.'],
            ['<strong>Card number</strong>', 'Pins down the exact card so comps match.'],
            ['<strong>Rookie status and rarity</strong>', 'Rookies, inserts, autos, and memorabilia command premiums.'],
            ['<strong>Parallels and serial numbers</strong>', 'A numbered parallel can be worth many times the base card.'],
          ],
        },
        figure: {
          shot: 2,
          caption: 'Confirm Card screen with a 1986 Fleer basketball example of the same identification flow baseball uses',
        },
      },
      {
        h2: 'From scan to market value',
        paras: [
          'After the ID, CardSense shows an estimate from recent eBay sales: average, median, range, a chart, and sales velocity. Same sold-prices-first approach as the <a href="/sports-card-prices">prices guide</a>.',
        ],
        cta: {
          title: 'Scan your first baseball card free',
          text: 'Download CardSense, photograph any baseball card, and see the identification and estimated value. Camera or existing photos.',
        },
      },
      {
        h2: 'Scanning a shoebox',
        paras: ['Work through it card by card.'],
        list: {
          ordered: true,
          items: [
            'Scan the stars first: big names, obvious rookies, anything shiny or numbered.',
            'Save keepers into the app. Folders by team, player, or era.',
            'Let the totals do the math. The collection value updates as you go.',
          ],
        },
      },
      {
        h2: 'Scanner app or manual lookup?',
        paras: [
          'For a single modern card you already recognize, a sold-listings search is fine. The scanner pays off when identification is the bottleneck: unmarked vintage, stacks of junk wax, prospect cards from sets you do not know, or parallels that differ in a foil pattern.',
          'Hardware "card scanners" in Google results are often document scanners. That is a different product. This page is about a phone camera reading the card, then attaching comps. If you are still choosing an app, the <a href="/best-sports-card-scanner-app">scanner comparison</a> is the honest version, including where CardSense is not the pick.',
        ],
      },
      {
        h2: 'Bowman, flagship Topps, and the back of the card',
        paras: [
          'Prospect cards often predate an MLB debut. The back of a Bowman issue and the back of a flagship Topps rookie are different set names even when the player is the same kid. Scan both if you have both. Do not assume the first card you find is the "real" rookie the market wants; baseball collectors argue about that, and the sold listings settle it better than a forum thread.',
          'Always read the copyright line. A tribute or reprint can share a photo with a vintage card and share almost none of the value. If the scanner returns a modern set and the cardboard feels 50 years old, stop and look again. The confirm step is there for that mismatch.',
        ],
      },
    ],
  },
  {
    slug: 'football-card-scanner',
    path: '/football-card-scanner',
    tag: 'Football scanner',
    title: 'Football Card Scanner: Identify NFL Cards from a Photo',
    metaTitle: 'Football Card Scanner: Identify NFL Cards from a Photo | CardSense',
    description:
      'Scan football cards with your iPhone. CardSense identifies NFL rookies, parallels, and autographs from a photo and shows an estimated value from recent eBay sales.',
    eyebrow: 'Football scanner',
    lede: 'Quarterbacks, rookie classes, and numbered parallels that look like the base card until you catch the foil. A photo is faster than guessing the set from memory.',
    directAnswer:
      '<strong>A football card scanner identifies an NFL card from a photo and returns an estimated market value.</strong> CardSense reads player, team, year, set, card number, and rarity, then shows comps from recent eBay sales. It handles base rookies, colored parallels, autographs, and memorabilia cards.',
    cardTitle: 'Scan football cards from a photo',
    cardText:
      'Quarterbacks, rookies, and numbered parallels. How a phone photo identifies an NFL card and pulls recent eBay comps.',
    featuredOnHome: true,
    featureImage: feat(
      'football-card-scanner',
      'Black phone and a blank card with a blue scan glow on green cloth beside a football',
    ),
    datePublished: D,
    dateModified: D,
    related: ['/football-card-values', '/sports-card-worth', '/best-sports-card-scanner-app'],
    sources: [
      { name: 'CardSense App Store listing', url: 'https://apps.apple.com/app/id6757801294' },
      { name: 'eBay sports card price guide', url: 'https://pages.ebay.com/price-guide/' },
    ],
    howto: {
      name: 'How to scan a football card',
      description: 'Photograph the NFL card, confirm the crop, then read the identification and eBay-based estimate.',
      steps: [
        { name: 'Photograph the card', text: 'Fill the frame. Light the surface so foil and serial numbers are visible.' },
        { name: 'Confirm, then identify', text: 'Check the crop. Start identification. Glance at year, set, and number before you trust the value.' },
        { name: 'Save keepers', text: 'Drop rookies, RPAs, and numbered parallels into a football folder so the vault total stays current.' },
      ],
    },
    faqs: [
      {
        q: 'Can a scanner tell a base football rookie from a numbered parallel?',
        a: 'That is the whole point of scanning instead of searching by player name. Parallels that share a photo still differ in foil, color, or a serial stamp. CardSense is built to pick those variants up; you should still confirm the number on the card matches the result.',
      },
      {
        q: 'Do I need a flatbed to scan football cards?',
        a: 'No. A phone camera is the scanner. Hardware document scanners show up in Google for this query; they are a different product. CardSense is an iPhone app.',
      },
    ],
    sections: [
      {
        h2: 'Why football cards are easy to mis-identify',
        paras: [
          'Modern football sets reprint the same rookie photo across a rainbow of parallels. Searching "Player Name rookie" online will surface the base card more often than the /99 you actually hold. RPAs add a patch and an autograph on top. The scan has to read those extras or the comps will be wrong. <a href="/football-card-values">Football card values</a> explains why quarterbacks and RPAs dominate the high end.',
        ],
      },
      {
        h2: 'What to check after the scan',
        paras: [
          'Look at year, set, and card number first. Then look at whether the app marked a parallel, autograph, or memorabilia variant. If the card has a serial stamp in the corner, that stamp should match the ID. Then read the eBay estimate the same way you would a sold-listings search: average, median, range, not one outlier.',
        ],
        figure: {
          shot: 4,
          caption: 'Market Data view with estimated value, range, demand, and recent eBay sales',
        },
        cta: {
          title: 'Scan an NFL card',
          text: 'Free on the App Store. Photograph a football card and see the identification plus an eBay-based estimate.',
        },
      },
      {
        h2: 'Working through a football binder',
        paras: [
          'Pull quarterback rookies, anything with a patch or signature, and anything numbered. Scan those first. Commons from the junk-wax years can wait; most are not worth a long lookup. Save the keepers so you are not re-identifying them next season.',
        ],
      },
      {
        h2: 'Foil, patches, and light',
        paras: [
          'Football cards hide information in gloss. A serial number in a corner disappears in glare. A patch window looks like a color blob if you shoot from too high and too close to a lamp. Tilt the card, fill the frame, and use even light. The Confirm Card screen exists so you can retake before you spend a scan.',
          'After identification, match the result to the physical card: year, set, number, parallel, autograph. Then read the eBay range. If you are pricing an RPA, comps for the base rookie are the wrong comps. The <a href="/football-card-values">football values page</a> is the market context; this page is the capture step.',
        ],
      },
      {
        h2: 'When a football scan is the wrong tool',
        paras: [
          'If you already know the set and you are pricing a six-figure RPA, you want a specialist and a stack of auction results, not a phone estimate. If the card is a junk-wax common of a backup linebacker, you do not need a scan to know it is a bulk lot. The middle is the use case: a binder of mixed rookies, a break leftover, an inherited box where half the cards are numbered and you cannot name the product.',
          'CardSense is iPhone-only. If you need Android, this is not your scanner. If you need to list the card for sale inside the same app, look at marketplace apps in the <a href="/best-sports-card-scanner-app">comparison</a>. This flow ends at identification, comps, and a vault.',
          'Light from a window beats an overhead bulb on glossy football stock. If the serial number is in foil, tilt until it is readable in the photo. Retake is cheaper than a wrong parallel. Once the ID is right, the estimate is only as good as the recent sales behind it. Thin names bounce. Stars with lots of tape settle.',
        ],
      },
    ],
  },
  {
    slug: 'basketball-card-scanner',
    path: '/basketball-card-scanner',
    tag: 'Basketball scanner',
    title: 'Basketball Card Scanner: Identify NBA Cards from a Photo',
    metaTitle: 'Basketball Card Scanner: Identify NBA Cards from a Photo | CardSense',
    description:
      'Scan basketball cards with your iPhone. CardSense identifies NBA rookies, inserts, and parallels from a photo and shows an estimated value from recent eBay sales.',
    eyebrow: 'Basketball scanner',
    lede: 'The same rookie photo can be a base card, a colored parallel, or a 1/1. A scan is how you find out which one you are holding.',
    directAnswer:
      '<strong>A basketball card scanner identifies an NBA card from a photo, including the parallel, and shows an estimated value from recent eBay sales.</strong> CardSense returns player, team, year, set, card number, and rarity. That last field is the one that usually decides whether two cards that look alike are worth pocket change or real money.',
    cardTitle: 'Scan basketball cards from a photo',
    cardText:
      'Rookies, inserts, and parallels of the same player. Scan the card instead of guessing the set from the photo.',
    featuredOnHome: true,
    featureImage: feat(
      'basketball-card-scanner',
      'Black phone hovering over a gold-bordered blank card on hardwood, basketball at the bottom of the frame',
    ),
    datePublished: D,
    dateModified: D,
    related: ['/basketball-card-values', '/sports-card-worth', '/best-sports-card-scanner-app'],
    sources: [
      { name: 'CardSense App Store listing', url: 'https://apps.apple.com/app/id6757801294' },
      { name: 'eBay sports card price guide', url: 'https://pages.ebay.com/price-guide/' },
    ],
    howto: {
      name: 'How to scan a basketball card',
      description: 'Photograph the NBA card, confirm the crop, then confirm the parallel before you trust the estimate.',
      steps: [
        { name: 'Photograph the card', text: 'Include the borders. Foil and colorways are how parallels differ.' },
        { name: 'Confirm identification', text: 'Start identification, then check set, number, and variant against the physical card.' },
        { name: 'Read comps', text: 'Use the eBay-based estimate and range. Save the card if it belongs in the vault.' },
      ],
    },
    faqs: [
      {
        q: 'Can I scan inserts and refractors, not just base NBA cards?',
        a: 'Yes. CardSense lists inserts, parallels, autographs, and memorabilia cards among the things it identifies. Inserts from the 1990s are exactly the cards where a photo search by player name fails.',
      },
      {
        q: 'Does the scanner work on vintage basketball cards?',
        a: 'It is trained across eras, including older Topps and Fleer issues. Survival and grade matter more on vintage than on a modern parallel, so after the ID, look at corners and surface before you treat the estimate as a sale price.',
      },
    ],
    sections: [
      {
        h2: 'Parallels are why basketball needs a scan',
        paras: [
          'NBA sets have stacked chase cards on base sets since the 1990s. Searching by player name returns the common version. The card in your hand might be a refractor, a color, or a numbered copy of the same photo. <a href="/basketball-card-values">Basketball card values</a> covers why that gap is larger here than in most other sports.',
        ],
      },
      {
        h2: 'A practical scan session',
        paras: [
          'Start with rookies, anything with an RC logo, and anything that looks like a parallel. Confirm the ID against the tiny set line on the back. Then look at the estimate. If you are triaging a binder, save the hits and leave the base commons for last.',
        ],
        figure: {
          shot: 5,
          caption: 'Collection list with Jordan, Wembanyama, and Messi rows, condition labels, and value ranges',
        },
        cta: {
          title: 'Scan an NBA card',
          text: 'Free on the App Store. Photograph a basketball card and see the identification plus an eBay-based estimate.',
        },
      },
      {
        h2: 'Light, borders, and the parallel you actually hold',
        paras: [
          'Basketball parallels live in the borders and the foil. Crop too tight and you throw away the evidence. Shoot in light that does not blow out a refractor into a white rectangle. If the card has a serial stamp, it should appear in the photo and in the ID.',
          'When the estimate comes back, compare it to one or two sold listings of that same parallel. If the app named the base card and you are holding a color, the number is wrong even if the player is right. That is the failure mode this page exists to prevent. Market context: <a href="/basketball-card-values">basketball card values</a>.',
        ],
      },
      {
        h2: '1990s inserts in a modern binder',
        paras: [
          'A lot of "scan my basketball cards" sessions are really "is this insert the famous one." Pack-odds chase cards from the 1990s still confuse people because the photo looks like the base set. Shoot the whole front, including any logo strip or foil pattern the insert uses, then confirm the set name on the back.',
          'Vintage NBA cardboard is a different session: fewer issues, nastier condition problems, bigger grade gaps. Identify first. Then decide whether the copy is even close to the comps you saw for clean examples. A scanner names the card. It does not magically restore corners.',
          'If you collect both modern parallels and 90s inserts, keep them in different folders. The vault total is more useful when a spike in one era does not hide a pile of commons in the other. Scan, confirm the set line, save the hits. Leave the rest of the base rainbow for a rainy Saturday.',
          'CardSense is iPhone-only. If you need Android or a built-in marketplace, pick another app from the <a href="/best-sports-card-scanner-app">scanner comparison</a>. This page is the capture step for NBA cardboard: photo, confirm, read the parallel, then decide keep, sell, or grade.',
        ],
      },
    ],
  },
];

export const relatedByPath: Record<string, string[]> = Object.fromEntries(
  guides.map((g) => [g.path, g.related]),
);

export function guideByPath(path: string) {
  return guides.find((g) => g.path === path);
}

export function homeGuideCards() {
  return guides.filter((g) => g.featuredOnHome);
}
