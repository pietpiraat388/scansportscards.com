// Generates favicons and per-page Open Graph images from the real app icon.
// Run once: node scripts/generate-images.mjs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const ICON = 'src/assets/app-icon.png';

await mkdir('public/og', { recursive: true });

// Favicons + apple touch icon straight from the App Store icon.
const rounded = (size, radius) => Buffer.from(
  `<svg width="${size}" height="${size}"><rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}"/></svg>`
);

for (const [file, size] of [
  ['public/favicon-16.png', 16],
  ['public/favicon-32.png', 32],
  ['public/favicon-192.png', 192],
  ['public/apple-touch-icon.png', 180],
]) {
  const img = sharp(ICON).resize(size, size);
  if (size >= 180) {
    await img.png().toFile(file);
  } else {
    await img
      .composite([{ input: rounded(size, Math.round(size * 0.22)), blend: 'dest-in' }])
      .png()
      .toFile(file);
  }
  console.log('wrote', file);
}

// Open Graph images: brand gradient, app icon, page title.
const iconPng = await sharp(ICON)
  .resize(220, 220)
  .composite([{ input: rounded(220, 48), blend: 'dest-in' }])
  .png()
  .toBuffer();
const iconB64 = iconPng.toString('base64');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function ogSvg(title, subtitle) {
  const lines = title.length > 26 ? splitTitle(title) : [title];
  const titleSpans = lines
    .map((l, i) => `<tspan x="90" dy="${i === 0 ? 0 : 78}">${esc(l)}</tspan>`)
    .join('');
  const titleY = lines.length > 1 ? 330 : 360;
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0B3BD6"/>
      <stop offset="1" stop-color="#2F7BFF"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <g stroke="#ffffff" stroke-opacity="0.45" stroke-width="10" fill="none" stroke-linecap="round">
    <path d="M 1040 120 h -60 M 1040 120 v 60"/>
    <path d="M 1040 510 h -60 M 1040 510 v -60"/>
  </g>
  <image x="90" y="96" width="150" height="150" href="data:image/png;base64,${iconB64}"/>
  <text x="270" y="160" font-family="Helvetica, Arial, sans-serif" font-size="44" font-weight="bold" fill="#ffffff">CardSense</text>
  <text x="270" y="208" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#CFE0FF">Sports Card Scanner</text>
  <text x="90" y="${titleY}" font-family="Helvetica, Arial, sans-serif" font-size="68" font-weight="bold" fill="#ffffff">${titleSpans}</text>
  <text x="90" y="${titleY + (lines.length > 1 ? 78 : 0) + 70}" font-family="Helvetica, Arial, sans-serif" font-size="34" fill="#CFE0FF">${esc(subtitle)}</text>
  <text x="90" y="560" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#9FC0FF">scansportscards.com</text>
</svg>`;
}

function splitTitle(title) {
  const words = title.split(' ');
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
}

const pages = [
  ['home', 'Scan Any Sports Card. Know Its Value.', 'AI sports card scanner for iPhone'],
  ['sports-card-value', 'Sports Card Value Guide', 'What makes a sports card valuable'],
  ['sports-card-prices', 'Sports Card Prices Explained', 'How to check real market prices'],
  ['sports-card-worth', 'What Are My Sports Cards Worth?', 'Find out in three steps'],
  ['baseball-card-values', 'Baseball Card Values', 'From junk wax to vintage grails'],
  ['basketball-card-values', 'Basketball Card Values', 'Rookies, inserts, and parallels'],
  ['football-card-values', 'Football Card Values', 'Rookies, RPAs, and the QB premium'],
  ['hockey-card-values', 'Hockey Card Values', 'Young Guns to vintage O-Pee-Chee'],
  ['soccer-card-values', 'Soccer Card Values', 'The hobby&apos;s fastest-growing market'],
  ['sports-card-grading', 'Sports Card Grading', 'PSA, BGS & SGC - and when it pays'],
];

for (const [slug, title, subtitle] of pages) {
  await sharp(Buffer.from(ogSvg(title, subtitle))).png().toFile(`public/og/${slug}.png`);
  console.log('wrote', `public/og/${slug}.png`);
}
