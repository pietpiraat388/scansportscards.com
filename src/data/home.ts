import { APP } from './app';
import type { FaqEntry, Screenshot } from './types';

export const home = {
  title: 'Sports Card Scanner App for iPhone | CardSense',
  description:
    'Free sports card scanner for iPhone. Snap a baseball, basketball, football, hockey or soccer card to identify it and see its value from recent eBay sales.',
  ogImage: '/og/home.png',
  hero: {
    eyebrow: 'iPhone app for card collectors',
    h1: 'Sports Card Scanner App: Identify Any Card and Its Value',
    lede: 'Snap a photo of any baseball, basketball, football, hockey, or soccer card. CardSense reads the player, team, year, set, card number, and rarity, then shows an estimated value from recent eBay sales.',
    note: 'Free · iPhone · iOS 18.2+',
    stats: [
      { value: APP.collectorsClaim, label: 'collectors on the listing' },
      { value: APP.cardTypesClaim, label: 'card types in training' },
      { value: '5 sports', label: 'baseball to soccer' },
    ],
  },
  what: {
    eyebrow: 'Sports card scanner',
    h2: 'What a sports card scanner does',
    answer:
      'A sports card scanner is an app that identifies a trading card from a photo and estimates its value. CardSense, a free iPhone app, reads the player, team, year, set and card number, then shows a value built from recent eBay sales, with the range, demand and price history. You can save each card to a collection.',
  },
  download: {
    eyebrow: 'Download',
    h2: 'Get the sports card scanner app',
    text: 'CardSense is free on the App Store. A premium unlock inside the app adds unlimited scans and full market details.',
    note: 'iPhone · iOS 18.2 or later · about 34 MB',
  },
  how: {
    eyebrow: 'How it works',
    h2: 'How the scanner works',
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
    h2: 'Scanner by sport',
    lede: 'One scanner for baseball, basketball, football, hockey, and soccer. Mix them in a single vault.',
    items: [
      {
        emoji: '⚾',
        h3: 'Baseball cards',
        html: 'The classic of the hobby. <a href="/baseball-card-scanner">Scan baseball cards</a> to identify Topps, Bowman, and Fleer issues, then check <a href="/baseball-card-values">baseball card values</a>, the <a href="/baseball-cards-worth-money">what baseball cards are worth money</a> checklist, or <a href="/rookie-card-values">rookie card values</a>.',
      },
      {
        emoji: '🏀',
        h3: 'Basketball cards',
        html: 'Scan NBA rookies, inserts, and parallels. <a href="/basketball-card-scanner">Basketball card scanner</a> notes, plus <a href="/basketball-card-values">basketball card values</a> and the <a href="/rookie-card-values/michael-jordan">Michael Jordan rookie card</a> guide.',
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
    alt: 'Sports card scanner scan frame around a basketball-style rookie card under the headline The #1 Sports Card Scanner',
    caption: 'Scan frame around a card',
  },
  {
    id: 2,
    file: 'screenshot-2.png',
    alt: 'Sports card scanner Confirm Card screen showing a 1986 Fleer Premier Michael Jordan basketball card, Retake, and Start Identification',
    caption: 'Confirm the card, then identify',
  },
  {
    id: 3,
    file: 'screenshot-3.png',
    alt: 'Sports card scanner card detail for a Michael Jordan rookie with a gold Rookie Card badge, collection total, and a price history chart',
    caption: 'Full details after a scan',
  },
  {
    id: 4,
    file: 'screenshot-4.png',
    alt: 'Sports card scanner Market Data screen with a price chart, estimated value, demand, range, and recent eBay sales of 1986 Fleer 57',
    caption: 'eBay comps and a price range',
  },
  {
    id: 5,
    file: 'screenshot-5.png',
    alt: 'Sports card scanner collection vault with total value, search, filters, and rows for Jordan, Wembanyama, and Messi',
    caption: 'Digital card vault',
  },
  {
    id: 6,
    file: 'screenshot-6.png',
    alt: 'Sports card scanner overlay on a 1986 Fleer Michael Jordan card showing player name, price range, and demand',
    caption: 'Player, range, and demand',
  },
  {
    id: 7,
    file: 'screenshot-7.png',
    alt: 'Sports card scanner folders screen with All Cards, Baseball, and Soccer totals',
    caption: 'Folders by sport',
  },
  {
    id: 8,
    file: 'screenshot-8.png',
    alt: 'Sports card scanner premium screen reading Unlimited Scans and Full Market Details',
    caption: 'Unlimited scans unlock',
  },
];

export const homeFaqs: FaqEntry[] = [
  {
    q: 'How do I scan a sports card?',
    a: 'Open CardSense on iPhone, photograph the card or pick a photo from your library, confirm the crop, then start identification. The app returns the player, team, year, set, card number, and rarity, plus an estimated value from recent eBay sales.',
  },
  {
    q: 'Is the sports card scanner free?',
    a: 'CardSense is free to download on the App Store. A premium unlock inside the app adds unlimited scans and full market details. The listing does not publish a free-tier scan cap.',
  },
  {
    q: 'Does it work on Android?',
    a: 'No. CardSense is an iPhone app and requires iOS 18.2 or later. There is no Google Play listing for the CardSense bundle ID.',
  },
  {
    q: 'Where do the prices come from?',
    a: 'Estimates are built from recent eBay sales of the same card. After a scan you see a point value plus the average, median, range, sales velocity, demand, and a price history chart. Treat that as a market snapshot, not an appraisal certificate.',
    learnMore: { href: '/sports-card-prices', label: 'How to check sports card prices' },
  },
  {
    q: 'Does it identify parallels and autographs?',
    a: 'Yes. The App Store listing says CardSense identifies rookies, inserts, parallels, autographs, and memorabilia cards, and that it can detect special variants, serial numbers, and condition grades. Always confirm the set line against the physical card.',
  },
  {
    q: 'Which sports does it support?',
    a: 'Baseball, basketball, football, hockey, and soccer. That is the five-sport list on the App Store listing, from vintage cardboard to modern parallels.',
  },
];
