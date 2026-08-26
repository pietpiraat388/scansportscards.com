#!/usr/bin/env node
import { readFile, readdir, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const site = 'https://scansportscards.com';
let failed = 0;

function fail(msg) {
  failed += 1;
  console.error('FAIL', msg);
}

function ok(msg) {
  console.log('OK  ', msg);
}

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function walkHtml(dir, acc = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walkHtml(p, acc);
    else if (e.name.endsWith('.html')) acc.push(p);
  }
  return acc;
}

function locToFile(loc) {
  const u = new URL(loc);
  let path = u.pathname;
  if (path === '/') return join(dist, 'index.html');
  if (path.endsWith('/')) path = path.slice(0, -1);
  return join(dist, path.replace(/^\//, ''), 'index.html');
}

const htmlFiles = await walkHtml(dist);
if (htmlFiles.length === 0) {
  fail('no HTML in dist/');
  process.exit(1);
}

const homepage = join(dist, 'index.html');
const homeHtml = await readFile(homepage, 'utf8');

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const rel = file.slice(dist.length);
  const h1s = html.match(/<h1\b[^>]*>/g) || [];
  if (h1s.length !== 1) fail(`${rel} has ${h1s.length} H1s`);

  const canon = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (!canon) fail(`${rel} missing canonical`);
  else if (!canon[1].startsWith(site)) fail(`${rel} canonical off-domain ${canon[1]}`);

  const jsonBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const [, raw] of jsonBlocks) {
    try {
      JSON.parse(raw);
    } catch {
      fail(`${rel} JSON-LD parse error`);
    }
  }

  if (html.includes('\u2014')) fail(`${rel} contains em dash`);
}

ok(`${htmlFiles.length} HTML files: one H1, canonical, JSON-LD parse, no em dash`);

const summaries = [...homeHtml.matchAll(/<summary>([^<]+)<\/summary>/g)].map((m) => m[1].trim());
const faqBlock = [...homeHtml.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .map((m) => JSON.parse(m[1]))
  .find((j) => j['@type'] === 'FAQPage');
if (!faqBlock) fail('homepage missing FAQPage JSON-LD');
else {
  const names = faqBlock.mainEntity.map((q) => q.name);
  if (summaries.length !== names.length) fail(`homepage FAQ count HTML ${summaries.length} vs JSON-LD ${names.length}`);
  for (let i = 0; i < names.length; i += 1) {
    if (summaries[i] !== names[i]) fail(`FAQ mismatch: HTML "${summaries[i]}" vs JSON-LD "${names[i]}"`);
  }
  ok(`homepage FAQ ${names.length} questions match JSON-LD`);
}

const skipExt = new Set(['http:', 'https:', 'mailto:', 'tel:']);
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const rel = file.slice(dist.length);
  const refs = [...html.matchAll(/\b(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  for (const ref of refs) {
    if (ref.startsWith('#') || ref.startsWith('data:') || skipExt.has(new URL(ref, site).protocol)) continue;
    if (ref.startsWith('http') && !ref.startsWith(site)) continue;
    const url = ref.startsWith('http') ? new URL(ref) : new URL(ref, site);
    let disk;
    if (url.pathname === '/') disk = join(dist, 'index.html');
    else if (url.pathname.includes('.')) disk = join(dist, url.pathname.replace(/^\//, ''));
    else disk = join(dist, url.pathname.replace(/^\//, ''), 'index.html');
    if (!(await exists(disk))) fail(`${rel} broken ${ref} -> ${disk.slice(dist.length)}`);
  }
}
ok('internal href/src resolve');

const sitemapFiles = ['sitemap-index.xml', 'sitemap-0.xml'].map((f) => join(dist, f));
for (const f of sitemapFiles) {
  if (!(await exists(f))) fail(`missing ${f.slice(dist.length)}`);
}
const sm = await readFile(join(dist, 'sitemap-0.xml'), 'utf8');
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const loc of locs) {
  const disk = locToFile(loc);
  if (!(await exists(disk))) fail(`sitemap loc missing file ${loc}`);
}
ok(`sitemap ${locs.length} locs exist on disk`);

if (!(await exists(join(dist, 'robots.txt')))) fail('robots.txt missing');
else ok('robots.txt present');

const usedImages = new Set();
const guidePages = htmlFiles.filter((f) => {
  const rel = f.slice(dist.length);
  return rel !== '/index.html' && !rel.endsWith('/404.html') && rel.endsWith('/index.html');
});
for (const page of guidePages) {
  const slug = page.slice(dist.length).replace(/^\//, '').replace(/\/index\.html$/, '');
  const html = await readFile(page, 'utf8');
  const og = html.match(/property="og:image" content="([^"]+)"/);
  const tw = html.match(/name="twitter:image" content="([^"]+)"/);
  const article = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1]))
    .find((j) => j['@type'] === 'Article');
  if (!og) fail(`${slug} missing og:image`);
  if (!tw) fail(`${slug} missing twitter:image`);
  if (og && tw && og[1] !== tw[1]) fail(`${slug} og/twitter image mismatch`);
  if (!article) fail(`${slug} missing Article JSON-LD`);
  else if (og && article.image !== og[1]) fail(`${slug} Article.image ${article.image}`);
  const imgPath = og ? new URL(og[1]).pathname : '';
  if (imgPath) {
    if (usedImages.has(imgPath)) fail(`${slug} reuses feature image ${imgPath}`);
    usedImages.add(imgPath);
    const srcDisk = join(root, 'public', imgPath.replace(/^\//, ''));
    const built = join(dist, imgPath.replace(/^\//, ''));
    if (!(await exists(srcDisk)) && !(await exists(built))) fail(`${slug} missing image file ${imgPath}`);
    const width = Number(html.match(/class="article-hero__image"[^>]*width="(\d+)"/)?.[1]);
    const height = Number(html.match(/class="article-hero__image"[^>]*height="(\d+)"/)?.[1]);
    if (!width || !height) fail(`${slug} feature img missing width/height`);
    else if (!(width > height)) fail(`${slug} feature image not landscape (${width}x${height})`);
  }
}
ok(`${guidePages.length} guides have unique landscape feature images wired to hero/OG/Twitter/Article`);

if (failed) {
  console.error(`\n${failed} failure(s)`);
  process.exit(1);
}
console.log('\nvalidate-site: all checks passed');
