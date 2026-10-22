// Unique landscape feature images for new guide pages. Run: node scripts/generate-guide-feature.mjs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

await mkdir('public/assets/guides', { recursive: true });

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;');

function splitTitle(title, max = 22) {
  if (title.length <= max) return [title];
  const words = title.split(' ');
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
}

function featureSvg({ title, subtitle, c1, c2, motif }) {
  const lines = splitTitle(title);
  const titleSpans = lines
    .map((l, i) => `<tspan x="88" dy="${i === 0 ? 0 : 70}">${esc(l)}</tspan>`)
    .join('');
  const titleY = lines.length > 1 ? 430 : 460;
  return `<svg width="1536" height="1024" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="1536" height="1024" fill="url(#bg)"/>
  <g stroke="#ffffff" stroke-opacity="0.35" stroke-width="12" fill="none" stroke-linecap="round">
    <path d="M 1400 120 h -80 M 1400 120 v 80"/>
    <path d="M 1400 900 h -80 M 1400 900 v -80"/>
    <path d="M 136 120 h 80 M 136 120 v 80"/>
    <path d="M 136 900 h 80 M 136 900 v -80"/>
  </g>
  ${motif}
  <text x="88" y="200" font-family="Helvetica, Arial, sans-serif" font-size="36" font-weight="bold" fill="#CFE0FF">CardSense</text>
  <text x="88" y="248" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#9FC0FF">Sports Card Scanner</text>
  <text x="88" y="${titleY}" font-family="Helvetica, Arial, sans-serif" font-size="64" font-weight="bold" fill="#ffffff">${titleSpans}</text>
  <text x="88" y="${titleY + (lines.length > 1 ? 70 : 0) + 64}" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#CFE0FF">${esc(subtitle)}</text>
  <text x="88" y="940" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#9FC0FF">scansportscards.com</text>
</svg>`;
}

const cardMotif = `
  <g transform="translate(980 220) rotate(-8)">
    <rect x="0" y="0" width="280" height="390" rx="18" fill="#ffffff" fill-opacity="0.92"/>
    <rect x="18" y="18" width="244" height="220" rx="8" fill="#1554f0" fill-opacity="0.2"/>
    <rect x="18" y="260" width="160" height="14" rx="4" fill="#0a1a33" fill-opacity="0.25"/>
    <rect x="18" y="288" width="110" height="10" rx="4" fill="#0a1a33" fill-opacity="0.15"/>
  </g>
  <g transform="translate(1180 300) rotate(10)">
    <rect x="0" y="0" width="240" height="334" rx="16" fill="#ffffff" fill-opacity="0.78"/>
    <rect x="16" y="16" width="208" height="186" rx="8" fill="#a97b1f" fill-opacity="0.28"/>
  </g>
`;

const pages = [
  {
    slug: 'baseball-cards-worth-money',
    title: 'What Baseball Cards Are Worth Money',
    subtitle: 'A checklist of signs, not a price list',
    c1: '#0B3BD6',
    c2: '#1F6B3A',
    motif: cardMotif,
  },
  {
    slug: 'rookie-card-values',
    title: 'Rookie Card Values',
    subtitle: 'Identify the real rookie, then check sold prices',
    c1: '#0B3BD6',
    c2: '#A97B1F',
    motif: cardMotif,
  },
  {
    slug: 'aaron-judge-rookie',
    title: 'Aaron Judge Rookie Card',
    subtitle: '2017 Bowman, Chrome, Topps, and Update',
    c1: '#0A1A33',
    c2: '#1554F0',
    motif: cardMotif,
  },
  {
    slug: 'mike-trout-rookie',
    title: 'Mike Trout Rookie Card',
    subtitle: '2009 Bowman Chrome Draft and 2011 rookies',
    c1: '#8C1D18',
    c2: '#0B3BD6',
    motif: cardMotif,
  },
  {
    slug: 'michael-jordan-rookie',
    title: 'Michael Jordan Rookie Card',
    subtitle: '1986 Fleer #57, and how to spot fakes',
    c1: '#1A1A1A',
    c2: '#B91C1C',
    motif: cardMotif,
  },
  {
    slug: 'babe-ruth-rookie',
    title: 'Babe Ruth Rookie Card',
    subtitle: 'Sporting News rookie vs Baltimore News',
    c1: '#4A3728',
    c2: '#8B6914',
    motif: cardMotif,
  },
];

for (const page of pages) {
  const file = `public/assets/guides/${page.slug}-feature.webp`;
  await sharp(Buffer.from(featureSvg(page)))
    .webp({ quality: 82 })
    .toFile(file);
  console.log('wrote', file);
}
