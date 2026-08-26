import { APP } from './app';
import type { FaqEntry, Screenshot } from './types';

export const home = {
  title: 'CardSense: Sports Card Scanner App for Collectors',
  description:
    'Free iPhone sports card scanner app. Photograph any baseball, basketball, football, hockey, or soccer card to identify it and see an estimated value from recent eBay sales.',
  ogImage: '/og/home.png',
  hero: {
    eyebrow: 'iPhone app for card collectors',
    h1Before: 'The ',
    h1Pill: 'sports card scanner app',
    h1After: ' that identifies a card and its value',
    lede: 'Snap a photo of any baseball, basketball, football, hockey, or soccer card. CardSense reads the player, team, year, set, card number, and rarity, then shows an estimated value from recent eBay sales.',
    note: 'Free download · iPhone · iOS 18.2+',
    stats: [
      { value: APP.collectorsClaim, label: 'collectors on the listing' },
      { value: APP.cardTypesClaim, label: 'card types in training' },
      { value: '5 sports', label: 'baseball to soccer' },
    ],
  },
  download: {
    eyebrow: 'Download',
    h2: 'Get the sports card scanner app',
    text: 'CardSense is free on the App Store. A premium unlock inside the app adds unlimited scans and full market details.',
    note: 'iPhone · iOS 18.2 or later · about 34 MB',
  },
  how: {
    eyebrow: 'How it works',
    h2: 'Scan a card, get the ID, then see the price',
    lede: 'No manual set lookup. Point the camera, confirm the crop, and read the result.',
    steps: [
      {
        h3: 'Snap a photo',
        p: 'Use the camera or pick a picture from your library. The scan frame finds the card. Retake or choose another if the crop is off.',
      },
      {
        h3: 'Confirm, then identify',
        p: 'The confirm screen shows the card before Start Identification. CardSense reads player, team, year, set, card number, and rarity, including rookies, inserts, parallels, autographs, and memorabilia cards.',
      },
      {
        h3: 'See the market value',
        p: 'Estimates come from recent eBay sales: a point value, the range, demand, and a price history chart. Save the card to your collection when you want a running total.',
      },
    ],
  },
  prices: {
    eyebrow: 'Sports card prices',
    h2: 'Prices from sold eBay listings, not wishful asks',
    lede: 'A listing price is what a seller hopes for. CardSense builds its estimate from recent eBay sales of the same card, so you see what buyers actually paid.',
    bullets: [
      'Average, median, and full price range per card',
      'Price history charts that show how the number moved',
      'Sales velocity, demand, and volatility on the market data screen',
      'Recent sold comps listed under the estimate',
    ],
    moreHref: '/sports-card-prices',
    moreLabel: 'guide to checking sports card prices',
  },
  collection: {
    eyebrow: 'Collection and value tracking',
    h2: 'A digital card vault with a live total',
    lede: 'Every scan can go into your collection. Totals update when the estimates do, so you are not maintaining a stale spreadsheet.',
    bullets: [
      'Unlimited saved cards and an automatic collection total',
      'Folders by team, sport, player, or rarity. One card can sit in more than one folder',
      'Notes and condition labels per card',
      'Search by player, team, or year, plus month-over-month growth',
    ],
  },
  screenshots: {
    eyebrow: 'Inside the app',
    h2: 'The sports card scanner app, screen by screen',
    lede: 'These are the App Store screenshots: scan frame, confirm, details, market data, vault, and folders.',
  },
  features: {
    eyebrow: 'Features',
    h2: 'Identification, prices, and a collection in one scan',
    lede: 'The listing groups the product into identification, eBay market data, and collection management. That is the whole job.',
    items: [
      {
        h3: 'Smart identification',
        p: `AI trained on ${APP.cardTypesClaim} card types from Topps, Panini, Upper Deck, and more. One photo returns player, team, year, set, and card number.`,
      },
      {
        h3: 'Rookies, parallels, and autos',
        p: 'Recognizes rookies, inserts, parallels, autographs, and memorabilia cards, plus variants, serial numbers, and condition grades.',
      },
      {
        h3: 'Real-time market data',
        p: 'Live pricing from recent eBay sales: average, median, range, and sales velocity.',
      },
      {
        h3: 'Price history charts',
        p: 'See whether the last sales sit on a spike, a dip, or a steady climb.',
      },
      {
        h3: 'Folders and collection vault',
        p: 'Organize by team, sport, player, or rarity. Watch the total on every folder.',
      },
      {
        h3: 'Share a find',
        p: 'Turn a pull into a social card with details and value, ready for Instagram or X.',
      },
    ],
  },
  sports: {
    eyebrow: 'Supported sports',
    h2: 'Baseball, basketball, football, hockey, and soccer',
    lede: 'One scanner for the five sports on the listing. Mix them in a single vault.',
    items: [
      {
        emoji: '⚾',
        h3: 'Baseball cards',
        html: 'The classic of the hobby. <a href="/baseball-card-scanner">Scan baseball cards</a> to identify Topps, Bowman, and Fleer issues, then check <a href="/baseball-card-values">baseball card values</a>.',
      },
      {
        emoji: '🏀',
        h3: 'Basketball cards',
        html: 'Scan NBA rookies, inserts, and parallels. <a href="/basketball-card-scanner">Basketball card scanner</a> notes, plus <a href="/basketball-card-values">basketball card values</a> before you buy, sell, or trade.',
      },
      {
        emoji: '🏈',
        h3: 'Football cards',
        html: 'Identify NFL cards, including autographs and numbered parallels. <a href="/football-card-scanner">Football card scanner</a> walkthrough and <a href="/football-card-values">football card values</a>.',
      },
      {
        emoji: '🏒',
        h3: 'Hockey cards',
        html: 'Young Guns and vintage NHL cardboard. Scan any card and check <a href="/hockey-card-values">hockey card values</a>.',
      },
      {
        emoji: '⚽',
        h3: 'Soccer cards',
        html: 'Identify club and national-team issues, then track <a href="/soccer-card-values">soccer card values</a> as the market moves.',
      },
      {
        emoji: '📈',
        h3: 'One collection',
        html: 'Keep all five sports in one vault, folder them by sport, and watch the combined total.',
      },
    ],
  },
  guides: {
    eyebrow: 'Collector guides',
    h2: 'How to check value, prices, and which scanner to use',
    lede: 'Plain guides for the searches collectors actually type, written so the method stands even if you never install the app.',
  },
  faqTitle: 'Questions collectors ask before they download',
  cta: {
    title: 'Point the camera at a card. Know what it is and what it sold for.',
    text: 'CardSense identifies the player, team, year, set, card number, and rarity, then shows an estimated value based on recent eBay sales. Free to download on iPhone.',
    note: 'Free download · iPhone · baseball, basketball, football, hockey, and soccer',
  },
};

/** Filename order (src/assets), not App Store display order. Alts name the pixels. */
export const screenshots: Screenshot[] = [
  {
    id: 1,
    file: 'screenshot-1.png',
    alt: 'Gloved hand holding a basketball-style rookie card inside a white scan frame under the headline The #1 Sports Card Scanner',
    caption: 'Scan frame around a card',
  },
  {
    id: 2,
    file: 'screenshot-2.png',
    alt: 'Confirm Card screen showing a 1986 Fleer Premier Michael Jordan basketball card, Retake and Choose Another buttons, and Start Identification',
    caption: 'Confirm the card, then identify',
  },
  {
    id: 3,
    file: 'screenshot-3.png',
    alt: 'Card detail for a Michael Jordan rookie with a gold Rookie Card badge, Edit and Share buttons, collection total, and a price history chart',
    caption: 'Full details after a scan',
  },
  {
    id: 4,
    file: 'screenshot-4.png',
    alt: 'Market Data screen with a price chart, estimated value $6,841.30 based on 50 listings, demand Rare, range $5.2k to $30.0k, and recent eBay sales of 1986 Fleer 57',
    caption: 'eBay comps and a price range',
  },
  {
    id: 5,
    file: 'screenshot-5.png',
    alt: 'Collection screen with total value, 12 cards, search, filters for team year and value, and rows for Jordan, Wembanyama, and Messi with Near Mint labels',
    caption: 'Digital card vault',
  },
  {
    id: 6,
    file: 'screenshot-6.png',
    alt: '1986 Fleer Michael Jordan card on a wood board with overlays for player name, price range $5.2k to $30.0k, and demand Rare',
    caption: 'Player, range, and demand',
  },
  {
    id: 7,
    file: 'screenshot-7.png',
    alt: 'Folders screen with total value $21.152 across three folders: All Cards, Baseball, and Soccer',
    caption: 'Folders by sport',
  },
  {
    id: 8,
    file: 'screenshot-8.png',
    alt: 'Premium unlock screen reading Unlimited Scans and Full Market Details above three hobby-style cards',
    caption: 'Unlimited scans unlock',
  },
];

export const homeFaqs: FaqEntry[] = [
  {
    q: 'What is a sports card scanner?',
    a: 'A sports card scanner is an app that identifies a trading card from a photo instead of a manual search. You photograph the card; the app returns the player, team, year, set, card number, and rarity. CardSense then attaches an estimated market value based on recent eBay sales.',
  },
  {
    q: 'How does CardSense identify a card?',
    a: 'CardSense uses AI trained on more than 5,000 card types from brands such as Topps, Panini, and Upper Deck. It handles base cards plus rookies, inserts, parallels, autographs, and memorabilia cards, and it can pick up variants, serial numbers, and condition grades. You confirm the crop on the Confirm Card screen before identification starts.',
  },
  {
    q: 'Which sports does CardSense support?',
    a: 'Baseball, basketball, football, hockey, and soccer. That is the five-sport list on the App Store listing, from vintage cardboard to modern parallels.',
  },
  {
    q: 'Does CardSense show what a card is worth?',
    a: 'Yes. After identification, CardSense shows an estimated value from recent eBay sales, including average, median, and range, plus a price history chart and sales velocity. Treat the number as a market snapshot, not an appraisal certificate.',
    learnMore: { href: '/sports-card-worth', label: 'How to find out what your sports cards are worth' },
  },
  {
    q: 'Is there a free sports card scanner app?',
    a: 'CardSense is free to download on the App Store. A premium upgrade inside the app unlocks unlimited scans and full market details. Other scanner apps also have free tiers; they differ in marketplace features, TCG coverage, and platforms.',
    learnMore: { href: '/best-sports-card-scanner-app', label: 'Compare CardSense, CollX, Ludex, and StarSnap' },
  },
  {
    q: 'What is the best sports card scanner app?',
    a: 'It depends on what you want after the scan. CardSense focuses on identification, eBay-based values, and collection tracking on iPhone. CollX adds a buy/sell marketplace. Ludex covers trading card games and Android. StarSnap leans on grading guidance.',
    learnMore: { href: '/best-sports-card-scanner-app', label: 'Read the full scanner comparison' },
  },
  {
    q: 'Can I scan photos I already took?',
    a: 'Yes. CardSense works with a new camera shot and with pictures already in your photo library. The Confirm Card screen includes Choose Another for that path.',
  },
  {
    q: 'Can I track a whole collection in the app?',
    a: 'Yes. Save unlimited cards, put them in custom folders by team, sport, player, or rarity, add notes and condition, and search across everything. The app keeps a total collection value and can show month-over-month growth.',
  },
  {
    q: 'What do I need to run CardSense?',
    a: 'An iPhone on iOS 18.2 or later. There is no Android listing (Play Store returns 404 for the bundle ID). The download is about 34 MB and the age rating is 4+.',
  },
  {
    q: 'How do I check sports card prices without a price guide subscription?',
    a: 'Look at completed eBay sales for the exact card (year, set, number, parallel, grade), then read the average, median, and range instead of one outlier. A scanner skips the manual search: photograph the card and read the comps the app already pulled.',
    learnMore: { href: '/sports-card-prices', label: 'How to check sports card prices' },
  },
];
