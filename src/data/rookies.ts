import type { FeatureImage, Guide } from './types';

function feat(slug: string, alt: string): FeatureImage {
  return { src: `/assets/guides/${slug}-feature.webp`, alt, width: 1536, height: 1024 };
}

const D = '2026-10-22';

export const rookieGuides: Guide[] = [
  {
    slug: 'rookie-card-values',
    path: '/rookie-card-values',
    tag: 'Rookie guide',
    title: 'Rookie Card Values: How to Identify and Price a Rookie',
    metaTitle: 'Rookie Card Values: Identify and Price Any Rookie Card',
    description:
      'What makes a rookie card valuable, how to spot the real rookie of Judge, Trout, Jordan and Ruth, and how to see live eBay sold prices with a free scan.',
    eyebrow: 'Rookie guide',
    lede: 'A rookie card is a specific issue, not a vibe. Name the set and the number first, then check what that exact version recently sold for.',
    directAnswer:
      'A rookie card\'s value depends on the player, the specific card, and its condition. The most valuable rookies are a star\'s earliest widely recognized card in high grade, especially serial-numbered parallels and autographs. Because prices change with every sale, check recent sold listings for the exact card and grade instead of trusting a printed price guide.',
    cardTitle: 'Rookie card values',
    cardText:
      'How to tell a real rookie from a prospect card, what moves value, and how to check live eBay sold prices with a scan.',
    featuredOnHome: true,
    featureImage: feat(
      'rookie-card-values',
      'Gold-tinted illustration of stacked rookie cards and a scan frame on a deep blue field',
    ),
    datePublished: D,
    dateModified: D,
    related: [
      '/rookie-card-values/aaron-judge',
      '/rookie-card-values/mike-trout',
      '/rookie-card-values/michael-jordan',
      '/rookie-card-values/babe-ruth',
      '/baseball-cards-worth-money',
      '/sports-card-grading',
    ],
    sources: [
      { name: 'CardSense App Store listing (checked October 22, 2026)', url: 'https://apps.apple.com/app/id6757801294' },
      { name: 'eBay sports card price guide', url: 'https://pages.ebay.com/price-guide/' },
      { name: 'PSA CardFacts: 2017 Bowman Aaron Judge #32', url: 'https://www.psacard.com/cardfacts/baseball-cards/2017-bowman/aaron-judge-32/645215' },
      { name: 'PSA CardFacts: 2011 Topps Update Mike Trout #US175', url: 'https://www.psacard.com/cardfacts/baseball-cards/2011-topps-update/mike-trout-us175/650905' },
      { name: 'PSA CardFacts: 1986 Fleer Michael Jordan #57', url: 'https://www.psacard.com/cardfacts/basketball-cards/1986-fleer/michael-jordan-57/5003' },
      { name: 'PSA CardFacts: 1915/16 M101-5 Sporting News Babe Ruth #151', url: 'https://www.psacard.com/cardfacts/baseball-cards/1915-16-m101-5-sporting-news/babe-ruth-151/20146' },
    ],
    faqs: [
      {
        q: 'What makes a rookie card valuable?',
        a: 'The player, the specific issue (set, year, and number), condition or grade, and extras such as a serial-numbered parallel or an autograph. A rookie of a player who never became a star is often still a common. Check recent sold listings for that exact version.',
      },
      {
        q: 'What is the difference between a rookie card and a prospect card?',
        a: 'A prospect card, such as many Bowman first issues, can appear years before a major-league debut. A rookie card is the first widely recognized licensed card of the player\'s rookie season or first major set. Collectors argue about the line; the sold market for the exact set and number is the practical answer.',
      },
      {
        q: 'Are rookie cards always worth more?',
        a: 'No. A later scarce parallel or autograph can outrun a base rookie. A worn rookie of a star can sit below a sharp later card. Name the version, then compare sold prices. Do not assume "RC" means expensive.',
      },
      {
        q: 'How do I check what my rookie card sold for?',
        a: 'Identify year, set, card number, and any parallel or autograph. Then look at completed sales in similar condition. CardSense can run that lookup from a photo and show an estimate from recent eBay sales.',
        learnMore: { href: '/sports-card-prices', label: 'How to check sports card prices' },
      },
    ],
    sections: [
      {
        h2: 'What counts as a rookie card',
        paras: [
          'Modern baseball and football cards often carry an RC logo or a Rated Rookie style mark. That mark is a hint, not the whole identity. You still need the year, the set name, and the card number, because the same player can have a flagship rookie, an update rookie, and a chrome version in the same season.',
          'Prospect cards are earlier. Bowman first issues and similar products can show a player years before a debut. Collectors chase those cards, and they are not the same product as a flagship Topps rookie. Soccer, as the <a href="/soccer-card-values">soccer values guide</a> notes, has no single RC standard at all.',
          'If two cards share a photo, read the back. The set line is what you will search when you compare sold listings.',
        ],
      },
      {
        h2: 'What drives rookie card value',
        paras: [
          'The player is first. A star or Hall of Famer carries demand; a cup-of-coffee rookie usually does not. Condition and grade come next: centering, corners, edges, and surface. Then scarcity: a serial-numbered parallel or an autograph is a different card from the unnumbered base. For when a slab is even worth the fee, see <a href="/sports-card-grading#grading-cost">how much grading costs</a>.',
          'This hub does not publish dollar values. Sold prices move, and this site has no public price feed. Scan the card or search completed sales for the exact version and grade.',
        ],
      },
      {
        h2: 'Player guides',
        paras: [
          'Each guide names the key issues we could cite from PSA CardFacts, PSA certification records, or PSA articles. None of them lists a price.',
        ],
        list: {
          items: [
            '<a href="/rookie-card-values/aaron-judge">Aaron Judge rookie card</a> - 2017 Bowman, Bowman Chrome, Topps, and Topps Update issues with PSA-cited numbers.',
            '<a href="/rookie-card-values/mike-trout">Mike Trout rookie card</a> - 2009 Bowman Chrome Draft autograph and 2011 flagship rookies.',
            '<a href="/rookie-card-values/michael-jordan">Michael Jordan rookie card</a> - 1986 Fleer #57, plus how to treat reprints and fakes.',
            '<a href="/rookie-card-values/babe-ruth">Babe Ruth rookie card</a> - why PSA treats the Sporting News issue as the rookie and the Baltimore News card as a pre-rookie.',
          ],
        },
      },
      {
        h2: 'How to check a rookie card sold price',
        paras: [
          'Write down year, set, number, and any parallel, autograph, or serial stamp. Compare completed sales of that version in similar condition. Read the average, median, and range. <a href="/sports-card-prices">Sports card prices</a> explains those numbers. For baseball stacks, the <a href="/baseball-cards-worth-money">what baseball cards are worth money</a> checklist is the filter before you price anything.',
          'Or photograph the card. CardSense identifies player, year, set, number, and rarity, then shows an estimate from recent eBay sales. <a href="/baseball-card-scanner">Scan baseball cards</a> when the pile is Topps and Bowman; use the <a href="/basketball-card-scanner">basketball card scanner</a> for Jordan-era Fleer.',
        ],
        cta: {
          title: 'Scan your rookie card to see what it sold for on eBay',
          text: 'Free on the App Store for iPhone. CardSense identifies the card and shows an estimate from recent eBay sales.',
        },
      },
    ],
  },
  {
    slug: 'rookie-card-values/aaron-judge',
    path: '/rookie-card-values/aaron-judge',
    tag: 'Aaron Judge',
    title: 'Aaron Judge Rookie Card: Which One Is It and What Moves Its Value',
    metaTitle: 'Aaron Judge Rookie Card Guide: Key Cards & Value Tips',
    description:
      'Which Aaron Judge cards PSA lists as 2017 rookies, how to tell Bowman from Update, and how to scan for live eBay sold prices.',
    eyebrow: 'Aaron Judge',
    lede: 'Judge has more than one 2017 card collectors call a rookie. PSA records name the set and the number. Use those, then check sold comps for that exact version.',
    directAnswer:
      'PSA records list several 2017 Aaron Judge issues collectors treat as rookies, including 2017 Bowman #32, 2017 Bowman Chrome #56, 2017 Topps #287, and 2017 Topps Update #US1. They are different cards. Identify the set line and number, then scan or search sold listings for that version. This page does not publish a dollar value.',
    cardTitle: 'Aaron Judge rookie card',
    cardText: 'PSA-cited 2017 Bowman, Bowman Chrome, Topps, and Topps Update issues, plus what to confirm before you price one.',
    featuredOnHome: false,
    featureImage: feat(
      'aaron-judge-rookie',
      'Navy and white illustrated baseball card frames for an Aaron Judge rookie identification guide',
    ),
    datePublished: D,
    dateModified: D,
    related: ['/rookie-card-values', '/baseball-card-scanner', '/baseball-cards-worth-money', '/sports-card-grading'],
    sources: [
      { name: 'PSA CardFacts: 2017 Bowman Aaron Judge #32', url: 'https://www.psacard.com/cardfacts/baseball-cards/2017-bowman/aaron-judge-32/645215' },
      { name: 'PSA CardFacts: 2017 Bowman Chrome set', url: 'https://www.psacard.com/cardfacts/baseball-cards/2017-bowman-chrome/33852' },
      { name: 'PSA certification: 2017 Bowman Chrome #56 Aaron Judge', url: 'https://www.psacard.com/cert/29023534/psa' },
      { name: 'PSA certification: 2017 Topps Update #US1 Aaron Judge', url: 'https://www.psacard.com/cert/119480465/psa' },
      { name: 'PSA certification: 2017 Topps #287 Aaron Judge', url: 'https://www.psacard.com/cert/147217115/psa' },
      { name: 'PSA certification: 2017 Topps Chrome Update #HMT50 Aaron Judge', url: 'https://www.psacard.com/cert/90807202/psa' },
      { name: 'CardSense App Store listing', url: 'https://apps.apple.com/app/id6757801294' },
    ],
    faqs: [
      {
        q: 'What is Aaron Judge\'s rookie card?',
        a: 'Collectors point to more than one 2017 issue. PSA CardFacts lists 2017 Bowman #32. PSA certification records also identify 2017 Bowman Chrome #56, 2017 Topps #287, and 2017 Topps Update #US1. Name the set and number on the back before you shop comps.',
      },
      {
        q: 'Is the 2017 Topps Update Judge the same as Bowman?',
        a: 'No. Bowman #32, Bowman Chrome #56, flagship Topps #287, and Topps Update #US1 are different products. A sold listing for one is the wrong comp for the others.',
      },
      {
        q: 'How do I check what my Judge card sold for?',
        a: 'Confirm year, set, and number, including Chrome versus paper. Then compare recent sold listings of that version in similar condition, or scan the card in CardSense to see an estimate from recent eBay sales.',
      },
      {
        q: 'Should I grade an Aaron Judge rookie?',
        a: 'Only after you know the raw sold price and the sold price in the grade you honestly expect, minus the fee and shipping. Start with the grading cost section, not a guess.',
        learnMore: { href: '/sports-card-grading#grading-cost', label: 'Card grading cost' },
      },
    ],
    sections: [
      {
        h2: 'The key rookie card(s)',
        paras: [
          'PSA CardFacts for 2017 Bowman identifies Aaron Judge as card #32 and notes that he debuted in 2016, then played his first full season in 2017. That Bowman paper issue is one of the cards collectors mean when they say "Judge rookie." It is not the only one.',
          'PSA certification records identify 2017 Bowman Chrome #56 as Aaron Judge. PSA\'s CardFacts write-up for the 2017 Bowman Chrome set says the 100-card set includes cardboard debuts for Aaron Judge, Alex Bregman, and Cody Bellinger, and that fifteen rookies, including Judge, have short-print image variations. The same CardFacts page lists a parallel run (Refractor through SuperFractor). Those parallels share a set name and a number but are not the base card.',
          'PSA also certifies 2017 Topps #287 Aaron Judge and 2017 Topps Update #US1 Aaron Judge as separate items. A further certification record names 2017 Topps Chrome Update #HMT50 Aaron Judge Update. If your card says Update or Chrome Update on the back, do not price it against Bowman or flagship Topps.',
        ],
      },
      {
        h2: 'How to tell it\'s real',
        paras: [
          'Read the copyright line and the card number. Bowman, Bowman Chrome, Topps, Topps Update, and Topps Chrome Update are five different products in the same season. A reprint or a later insert that reuses a 2017 photo is a later card. If the scanner or a marketplace title says "Judge rookie" without a set and number, that title is not an identification.',
          'Chrome stock and paper stock are easy to mix up in a photo. Tilt the card. Confirm the set name on the back against whatever an app or a listing claims. For a pile, <a href="/baseball-card-scanner">scan baseball cards</a> and then read the set line it returns.',
        ],
      },
      {
        h2: 'Parallels and variations',
        paras: [
          '2017 Bowman Chrome, per PSA CardFacts, includes numbered refractor parallels and 1/1 SuperFractors and printing plates. PSA also notes short-print image variations for Judge in that set. Topps Update and Topps Chrome Update are already different base products from flagship Topps. A color or a serial stamp on any of those is another version again.',
          'Search sold listings with the parallel name or the serial range. Comps for the unnumbered base card are the wrong comps for a /50.',
        ],
      },
      {
        h2: 'What moves the price',
        paras: [
          'The player is established, so demand concentrates on the exact issue and on condition. A high grade of a widely collected 2017 Judge will not price like a raw copy, and a Chrome parallel will not price like paper Bowman #32. This page will not invent a dollar figure. Scan the card you hold, or compare recent eBay sold listings for that set, number, parallel, and grade.',
          'If you are deciding whether to submit, price it raw first and read <a href="/sports-card-grading#grading-cost">how much it costs to get cards graded</a>. For a broader baseball filter, use <a href="/baseball-cards-worth-money">what baseball cards are worth money</a>.',
        ],
        cta: {
          title: 'Scan your Aaron Judge card to see what it sold for on eBay',
          text: 'Photograph the card. CardSense identifies the set and number, then shows an estimate from recent eBay sales.',
        },
      },
    ],
  },
  {
    slug: 'rookie-card-values/mike-trout',
    path: '/rookie-card-values/mike-trout',
    tag: 'Mike Trout',
    title: 'Mike Trout Rookie Card: Which One Is It and What Moves Its Value',
    metaTitle: 'Mike Trout Rookie Card Guide: Key Cards & Value Tips',
    description:
      'PSA-cited Mike Trout cards from 2009 Bowman Chrome Draft and 2011 Topps Update, plus how to check live eBay sold prices.',
    eyebrow: 'Mike Trout',
    lede: 'Trout\'s first Bowman Chrome autograph and his 2011 flagship rookies are different cards. PSA names the sets. Sold listings settle the rest.',
    directAnswer:
      'PSA describes 2009 Bowman Chrome Draft Picks & Prospects #BDPP89, an on-card autograph, as Trout\'s key first card. PSA CardFacts and a PSA Set Registry article also name 2011 Topps Update #US175 as his most popular rookie, with 2011 Bowman Chrome #175, 2011 Bowman Chrome Draft #101, and 2011 Finest #94 in the same rookie conversation. Identify the exact issue, then check recent sold prices. This page lists no dollar values.',
    cardTitle: 'Mike Trout rookie card',
    cardText: '2009 Bowman Chrome Draft #BDPP89 and the 2011 Topps and Bowman rookies PSA cites, without a price table.',
    featuredOnHome: false,
    featureImage: feat(
      'mike-trout-rookie',
      'Red and navy illustrated card frames for a Mike Trout rookie identification guide',
    ),
    datePublished: D,
    dateModified: D,
    related: ['/rookie-card-values', '/baseball-card-scanner', '/baseball-cards-worth-money', '/sports-card-grading'],
    sources: [
      { name: 'PSA CardFacts: 2011 Topps Update Mike Trout #US175', url: 'https://www.psacard.com/cardfacts/baseball-cards/2011-topps-update/mike-trout-us175/650905' },
      { name: 'PSA CardFacts: 2009 Bowman Chrome Draft Picks & Prospects Mike Trout autograph-refractor #BDPP89', url: 'https://www.psacard.com/cardfacts/baseball-cards/2009-bowman-chrome-draft-picks-prospects/mike-trout-autograph-refractor-bdpp89/669072' },
      { name: 'PSA Set Registry: Collecting Mike Trout', url: 'https://www.psacard.com/articles/articleview/8941/psa-set-registry-collecting-mike-trout-reeling-best-cards-angels-superstar' },
      { name: 'PSA Set Registry Starter Kit: Mike Trout Rookie Set', url: 'https://www.psacard.com/articles/articleview/9928/psa-set-registry-starter-kit-mike-trout-rookie' },
      { name: 'PSA certification: 2009 Bowman Chrome Draft #BDPP89 Mike Trout autograph', url: 'https://www.psacard.com/cert/20914723/psa' },
      { name: 'CardSense App Store listing', url: 'https://apps.apple.com/app/id6757801294' },
    ],
    faqs: [
      {
        q: 'What is Mike Trout\'s rookie card?',
        a: 'Collectors split "first card" and "flagship rookie." PSA has called 2009 Bowman Chrome Draft Picks & Prospects #BDPP89, an on-card autograph, Trout\'s key first card. A PSA Set Registry article calls 2011 Topps Update #US175 his most popular rookie.',
      },
      {
        q: 'Is the 2009 Bowman Trout a rookie or a prospect card?',
        a: 'It is a 2009 Draft Picks & Prospects issue, years before Trout\'s 2011 major-league debut that PSA CardFacts records. Collectors still chase it as his first card. It is not the same product as 2011 Topps Update #US175.',
      },
      {
        q: 'How do I check what my Trout card sold for?',
        a: 'Confirm whether you hold the 2009 Bowman Chrome Draft autograph or a 2011 paper or Chrome rookie, including any parallel. Then compare recent sold listings of that version, or scan it in CardSense.',
      },
      {
        q: 'Do Trout parallels matter that much?',
        a: 'Yes. PSA\'s Trout article lists numbered refractor parallels on the 2009 Chrome Draft auto, and the 2011 Topps Update starter-kit article notes a run of parallels on #US175. Price the version in your hand, not the base photo.',
      },
    ],
    sections: [
      {
        h2: 'The key rookie card(s)',
        paras: [
          'A 2016 PSA Set Registry article on collecting Mike Trout calls 2009 Bowman Chrome Draft Picks & Prospects Autograph #BDPP89 his key first card: an on-card signature, not a sticker, showing Trout in an Angels batting pose. PSA certification records use the same set name and number, sometimes with a variety line such as DP & PROS-AUTOGRAPH. The same article says the black borders and glossy finish make high-grade copies harder to find.',
          'PSA CardFacts for 2011 Topps Update lists Mike Trout as #US175. A later PSA "Starter Kit" article on Trout\'s rookie set calls #US175 his most popular rookie and names three other 2011 issues in that set: 2011 Finest #94, 2011 Bowman Chrome Draft #101, and 2011 Bowman Chrome #175. Those are four different cards. A sold listing for Update is the wrong comp for Bowman Chrome.',
          'PSA CardFacts biography text for the 2011 Topps Update card records Trout\'s 2011 debut with the Angels. That debut year is why 2011 issues are the flagship rookie conversation, while 2009 Bowman is the first-card conversation.',
        ],
      },
      {
        h2: 'How to tell it\'s real',
        paras: [
          'The 2009 Chrome Draft auto is a chrome card with an on-card signature. PSA\'s collecting article contrasts it with 2009 Bowman Sterling, which it describes as a sticker autograph and a different product. If you are holding paper, Sterling, or a later reprint-style issue, you are not holding BDPP89 Chrome.',
          'For 2011 cards, read the set name. Finest, Bowman Chrome, Bowman Chrome Draft, and Topps Update share a player and a year and almost nothing else. Confirm the number: US175 is Update, 175 is Bowman Chrome, 101 is Bowman Chrome Draft, 94 is Finest, per the PSA starter-kit article.',
        ],
      },
      {
        h2: 'Parallels and variations',
        paras: [
          'The 2016 PSA Trout article lists five refractor parallels for the 2009 Bowman Chrome Draft auto that collectors chase for a master set: regular (numbered to 500), Xfractor (225), blue (150), orange (25), and red (5). PSA CardFacts also has separate entries for autograph-refractor and gold-refractor versions of #BDPP89. Those are not the base auto.',
          'The PSA starter-kit article says 2011 Topps Update #US175 "comes in a slew of parallels - 14 total." It also notes that 2011 Bowman Chrome #175 has variants, and that the Bowman Chrome Draft card exists in Chrome and paper. Write the parallel down before you search sold listings.',
        ],
      },
      {
        h2: 'What moves the price',
        paras: [
          'First-card autograph versus flagship 2011 rookie is the first split. Grade and chrome borders are the next: PSA\'s articles flag black borders and gloss as condition traps. A parallel with a tiny print run is a third split. This page does not quote the sale prices that appear on those PSA pages, because they age. Check recent sold listings for the exact card, or <a href="/baseball-card-scanner">scan baseball cards</a> and read the eBay estimate.',
          'Grading only makes sense after you compare raw and graded comps and the current fee. See <a href="/sports-card-grading#grading-cost">card grading cost</a>. Back to the <a href="/rookie-card-values">rookie card values</a> hub for the method that applies to every player.',
        ],
        cta: {
          title: 'Scan your Mike Trout card to see what it sold for on eBay',
          text: 'Photograph the card. CardSense identifies the set and number, then shows an estimate from recent eBay sales.',
        },
      },
    ],
  },
  {
    slug: 'rookie-card-values/michael-jordan',
    path: '/rookie-card-values/michael-jordan',
    tag: 'Michael Jordan',
    title: 'Michael Jordan Rookie Card: Which One Is It and What Moves Its Value',
    metaTitle: 'Michael Jordan Rookie Card Guide: Key Cards & Value Tips',
    description:
      'PSA identifies 1986 Fleer #57 as the Jordan rookie, warns it is heavily faked, and explains condition traps. Scan for live sold prices.',
    eyebrow: 'Michael Jordan',
    lede: 'The hobby\'s most famous basketball rookie is also the one PSA calls the most heavily counterfeited. Name 1986 Fleer #57, then prove it is real.',
    directAnswer:
      'PSA CardFacts identifies the 1986 Fleer Michael Jordan #57 as the key modern basketball rookie. The same page says it is the most heavily counterfeited card in the hobby and that the multi-colored borders chip. Identify that set and number, inspect color and borders, then check recent sold listings for the grade you actually have. This page publishes no prices.',
    cardTitle: 'Michael Jordan rookie card',
    cardText: '1986 Fleer #57, why fakes are common, and what PSA says about borders and centering.',
    featuredOnHome: false,
    featureImage: feat(
      'michael-jordan-rookie',
      'Red and black illustrated basketball card frames for a Michael Jordan rookie identification guide',
    ),
    datePublished: D,
    dateModified: D,
    related: ['/rookie-card-values', '/basketball-card-scanner', '/basketball-card-values', '/sports-card-grading'],
    sources: [
      { name: 'PSA CardFacts: 1986 Fleer Michael Jordan #57', url: 'https://www.psacard.com/cardfacts/basketball-cards/1986-fleer/michael-jordan-57/5003' },
      { name: 'PSA: Michael Jordan, Still the Best Ever', url: 'https://www.psacard.com/articles/articleview/6895/michael-jordan-still-best-ever' },
      { name: 'PSA: Modern Masterpiece, the 1986-87 Fleer basketball set', url: 'https://www.psacard.com/articles/articleview/3235/modern-masterpiece-look-1986-87-fleer-basketball-card-set' },
      { name: 'PSA certification: 1986 Fleer #57 Michael Jordan', url: 'https://www.psacard.com/cert/26168917/psa' },
      { name: 'CardSense App Store listing', url: 'https://apps.apple.com/app/id6757801294' },
    ],
    faqs: [
      {
        q: 'What is Michael Jordan\'s rookie card?',
        a: 'PSA CardFacts and PSA articles identify the 1986 Fleer Michael Jordan #57 as the key rookie. Certification records use the same year, brand, and number. Later Jordan cards are not that rookie.',
      },
      {
        q: 'Why are Jordan rookies faked so often?',
        a: 'PSA CardFacts calls #57 the most heavily counterfeited card in the hobby. A PSA article on Jordan collecting says fakes often show dull, less-sharp color on the front. Buy from sources you trust and inspect color, borders, and print.',
      },
      {
        q: 'How do I check what my Jordan card sold for?',
        a: 'Confirm it is 1986 Fleer #57, not a later insert or a sticker. Then compare recent sold listings in the same condition or grade, or scan the card. This page will not quote a number that will be stale next month.',
      },
      {
        q: 'Is a reprint the same as the rookie?',
        a: 'No. A reprint or a later tribute that copies the photo is a different card. PSA\'s Fleer set article is about the 1986-87 issue. If the copyright line is later, you are not holding that issue.',
      },
    ],
    sections: [
      {
        h2: 'The key rookie card(s)',
        paras: [
          'PSA CardFacts for 1986 Fleer Michael Jordan describes #57 as the most recognizable basketball card and the most important modern card from any sport. PSA certification records list the item as 1986 Fleer #57 Michael Jordan. A PSA article on the 1986-87 Fleer basketball set calls that Jordan the key to the set and "the most important of all the Jordan cards, his classic rookie."',
          'The same CardFacts page and the set article place the card in the 1986-87 Fleer basketball issue, a set collectors still build as a set. If your card is a later Fleer, Upper Deck, or insert that happens to show Jordan in a Bulls uniform, it is not #57 from that set.',
        ],
      },
      {
        h2: 'How to tell it\'s real',
        paras: [
          'PSA CardFacts says this card is the most heavily counterfeited card in the hobby. A PSA article titled "Michael Jordan: Still the Best Ever" quotes a collector who says fakes tend to have poor color on the front, with colors that are not as sharp as the originals. The article also says buying a copy already graded and authenticated by PSA is the easiest way to reduce that risk. PSA\'s own certification pages warn that verifying a cert number does not eliminate the risk of a counterfeit label that reused a real number.',
          'Reprints and tributes copy the photo. Check the year and the Fleer set line. If the card feels wrong on color or stock, stop. This is the case where a casual marketplace photo is not enough. <a href="/basketball-card-scanner">Scan basketball cards</a> can name a set; you still inspect the physical card.',
        ],
      },
      {
        h2: 'Parallels and variations',
        paras: [
          'The 1986-87 Fleer basketball set is a base set plus a sticker set from the same era. PSA\'s set article is about the standard 1986-87 Fleer cards with colored borders. This page does not invent a parallel rainbow that the 1986 Fleer base issue did not use the way a modern Prizm card does. Later Jordan refractors and inserts are other products.',
          'If someone offers a "Jordan rookie parallel," ask for the set name and the year. A modern color of a different Jordan card is not 1986 Fleer #57.',
        ],
      },
      {
        h2: 'What moves the price',
        paras: [
          'PSA\'s Fleer set article says centering and chipping on the colored borders are the two main condition problems, and that the slightest touch can show white cardboard under the ink. The Jordan collecting article makes the same point: fragile red and blue borders and poor centering make top-grade copies hard to find. Grade gaps on this card are the market. This page will not paste auction results from CardFacts, because those results are dated the day they print.',
          'Check recent sold listings for the exact grade, or scan the card and then sanity-check the comps. If you are considering a slab, read <a href="/sports-card-grading#grading-cost">how much grading costs</a> first. Condition work on this issue is not optional. Back to <a href="/rookie-card-values">rookie card values</a> or <a href="/basketball-card-values">basketball card values</a> for the wider method.',
        ],
        cta: {
          title: 'Scan your Michael Jordan card to see what it sold for on eBay',
          text: 'Photograph the card. CardSense identifies the set and number, then shows an estimate from recent eBay sales.',
        },
      },
    ],
  },
  {
    slug: 'rookie-card-values/babe-ruth',
    path: '/rookie-card-values/babe-ruth',
    tag: 'Babe Ruth',
    title: 'Babe Ruth Rookie Card: Which One Is It and What Moves Its Value',
    metaTitle: 'Babe Ruth Rookie Card Guide: Key Cards & Value Tips',
    description:
      'PSA explains why the Sporting News Babe Ruth is the rookie and the 1914 Baltimore News card is a pre-rookie. Scan later issues for live comps.',
    eyebrow: 'Babe Ruth',
    lede: 'There is no single card every collector agrees is "the" Ruth rookie. PSA published the argument, and it names two different issues with two different jobs.',
    directAnswer:
      'PSA CardFacts calls the 1915/16 M101-5 Sporting News Babe Ruth #151 the rookie card of Ruth as a Boston Red Sox pitcher. A PSA article contrasts that issue with the 1914 Baltimore News card, which it describes as a scarce minor-league pre-rookie of Ruth with the Baltimore Orioles. Identify which issue you have. This page does not publish prices for either card.',
    cardTitle: 'Babe Ruth rookie card',
    cardText: 'PSA\'s split between the Sporting News rookie and the Baltimore News pre-rookie, plus how reprints fool people.',
    featuredOnHome: false,
    featureImage: feat(
      'babe-ruth-rookie',
      'Sepia illustrated vintage card frames for a Babe Ruth rookie identification guide',
    ),
    datePublished: D,
    dateModified: D,
    related: ['/rookie-card-values', '/baseball-card-scanner', '/baseball-cards-worth-money', '/sports-card-grading'],
    sources: [
      { name: 'PSA CardFacts: 1915/16 M101-5 Sporting News Babe Ruth #151', url: 'https://www.psacard.com/cardfacts/baseball-cards/1915-16-m101-5-sporting-news/babe-ruth-151/20146' },
      { name: 'PSA CardFacts: 1914 Baltimore News Orioles Babe Ruth', url: 'https://www.psacard.com/cardfacts/baseball-cards/1914-baltimore-news-orioles/babe-ruth/158264' },
      { name: 'PSA: Taking My Hacks, Clash of the Titans', url: 'https://www.psacard.com/articles/articleview/5500/taking-my-hacks-clash-titans' },
      { name: 'CardSense App Store listing', url: 'https://apps.apple.com/app/id6757801294' },
    ],
    faqs: [
      {
        q: 'What is Babe Ruth\'s rookie card?',
        a: 'PSA CardFacts calls the 1915/16 M101-5 Sporting News #151 Ruth\'s rookie: the first card to show him in a major-league Red Sox uniform. PSA also documents a 1914 Baltimore News card as a minor-league pre-rookie. Collectors still argue; those are the two issues PSA explains.',
      },
      {
        q: 'Is the 1914 Baltimore News Ruth a rookie?',
        a: 'PSA\'s "Clash of the Titans" article says many hobbyists call it the Ruth rookie, but technically it is a minor-league card of Ruth with the Baltimore Orioles of the International League. PSA CardFacts calls it a pre-rookie.',
      },
      {
        q: 'How do I check a later Ruth card I actually own?',
        a: 'Most people asking this question do not hold 1914 or 1916 cardboard. Identify the year, set, and number on the card you have, then compare recent sold listings or scan it. Do not apply a headline about those two rarities to a 1930s gum card or a modern reprint.',
      },
      {
        q: 'Are Ruth reprints common?',
        a: 'Yes. Famous vintage cards get reprinted. A modern card that copies the Sporting News or Baltimore News photo is a different card. Check the copyright line and the stock. If it looks new, treat it as new until a set name says otherwise.',
      },
    ],
    sections: [
      {
        h2: 'The key rookie card(s)',
        paras: [
          'PSA CardFacts for 1915/16 M101-5 Sporting News Babe Ruth opens by calling #151 "the rookie card of the greatest player who ever lived." It pictures Ruth as a pitcher for the Boston Red Sox, before the Yankees years. The page says the card is often found off-center and that backs vary, including advertising backs and blank backs. It is the key to a 200-card M101-5 set.',
          'PSA CardFacts for 1914 Baltimore News Orioles Babe Ruth describes a different card: Ruth as a minor-league pitcher for the Baltimore Orioles of the International League, with a team schedule on the reverse. The set pictures local Orioles and Federal League Terrapins. PSA says the cards measure about 2-5/8 by 3-5/8 inches and exist with blue or red borders. At the time of that write-up, PSA said fewer than 10 copies were known.',
          'Joe Orlando\'s PSA article "Taking My Hacks: Clash of the Titans" walks the argument. He writes that the Baltimore News card is scarcer and more condition-sensitive, but that it is technically a minor-league card. He calls the Sporting News issue Ruth\'s true rookie: the first card to picture Ruth in a major-league uniform. He also notes a dating dispute (1915 versus 1916) and says the year is "virtually irrelevant" to that rookie definition. This page follows PSA\'s published explanation instead of inventing a third winner.',
        ],
      },
      {
        h2: 'How to tell it\'s real',
        paras: [
          'These two issues are among the most copied images in the hobby. A glossy modern reprint, a tobacco-style fantasy card, or a later gum-card Ruth is not M101-5 #151 and is not a 1914 Baltimore News. Check size, border color (blue or red on the Baltimore News card, per PSA), back advertising, and paper. PSA notes the Baltimore News borders chip easily.',
          'If you inherited "a Babe Ruth rookie," you almost certainly have a later licensed card or a reprint. Identify that later card on its own terms. <a href="/baseball-card-scanner">Scan baseball cards</a> for anything that is actually a modern or junk-wax issue. For cardboard this old, a specialist and authentication belong in the conversation before a phone estimate.',
        ],
      },
      {
        h2: 'Parallels and variations',
        paras: [
          'The Baltimore News card, per PSA, comes in red-border and blue-border varieties. The Sporting News / M101-5 card, per PSA, is known with blank backs and a variety of advertising backs. Those back variations are different collectibles even when the front pose matches. They are not modern color parallels, and this page will not invent a rainbow that the 1910s did not print.',
          'Later Ruth cards (goudeys, reprints, modern inserts) are outside this rookie question. Name those sets separately.',
        ],
      },
      {
        h2: 'What moves the price',
        paras: [
          'Scarcity, authenticity, and grade dominate both issues. PSA\'s article and CardFacts pages mention low survival, poor centering, print defects, and fragile borders. This page will not quote the auction figures those PSA pages also display, because a single headline sale is not a current guide for the card in a shoebox, and because most readers do not hold these two cards.',
          'If you do hold period paper, get it authenticated. If you hold a later Ruth, price that later card with recent sold listings or a scan. <a href="/sports-card-grading#grading-cost">Grading fees</a> on a modern reprint are a different math problem than grading a 1916 issue. Return to the <a href="/rookie-card-values">rookie card values</a> hub or the <a href="/baseball-cards-worth-money">baseball checklist</a> for everyday cardboard.',
        ],
        cta: {
          title: 'Scan your Babe Ruth card to see what it sold for on eBay',
          text: 'If the card is a later licensed issue or a reprint, photograph it. CardSense identifies the set and shows an estimate from recent eBay sales.',
        },
      },
    ],
  },
];
