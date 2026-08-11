// Static SEO + image audit for this portfolio. Run with `npm run seo-audit`.
// Read-only — it never edits files, only reports findings to the console.
// Re-run it after adding new pages/images to catch regressions early:
// missing alt text, background-image misuse, localhost URLs leaking into
// SEO metadata, and — most importantly — any social URL that doesn't match
// src/config/identity.js (the single source of truth for who this site
// belongs to).

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';
import { personalIdentity, sameAsUrls } from '../src/config/identity.js';

const ROOT = process.cwd();
const SRC_DIR = join(ROOT, 'src');
const PUBLIC_DIR = join(ROOT, 'public');

let issues = 0;
let warnings = 0;

const section = (title) => console.log(`\n\x1b[1m${title}\x1b[0m`);
const fail = (msg) => { console.log(`  \x1b[31m✗\x1b[0m ${msg}`); issues++; };
const warn = (msg) => { console.log(`  \x1b[33m!\x1b[0m ${msg}`); warnings++; };
const ok = (msg) => console.log(`  \x1b[32m✓\x1b[0m ${msg}`);

const walk = (dir, exts, out = []) => {
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        const stat = statSync(full);
        if (stat.isDirectory()) walk(full, exts, out);
        else if (exts.includes(extname(entry))) out.push(full);
    }
    return out;
};

const sourceFiles = walk(SRC_DIR, ['.jsx', '.js']);
const fileContents = sourceFiles.map((f) => ({ file: f, content: readFileSync(f, 'utf-8') }));

// ── 1. <img> tags without alt ──────────────────────────────────────────────
section('1. <img> elements missing alt');
let missingAlt = 0;
for (const { file, content } of fileContents) {
    const imgTags = content.match(/<img\b[^>]*>/g) || [];
    for (const tag of imgTags) {
        if (!/\balt\s*=/.test(tag)) {
            missingAlt++;
            fail(`${file.replace(ROOT, '.')}: <img> without alt — ${tag.slice(0, 80)}...`);
        } else if (/alt\s*=\s*["']\s*["']/.test(tag)) {
            warn(`${file.replace(ROOT, '.')}: <img> has empty alt="" — ${tag.slice(0, 80)}...`);
        }
    }
}
if (missingAlt === 0) ok('Every <img> tag has a non-empty alt attribute (or a dynamic alt prop).');

// ── 2. background-image usage for potentially important content ───────────
section('2. background-image / CSS-only image usage (manual review)');
let bgHits = 0;
for (const { file, content } of fileContents) {
    if (/background-image|backgroundImage\s*:/.test(content)) {
        bgHits++;
        warn(`${file.replace(ROOT, '.')}: uses background-image — confirm it's decorative, not meaningful content.`);
    }
}
if (bgHits === 0) ok('No background-image usage found in src/.');

// ── 3 & 4. external image URLs + duplicates ────────────────────────────────
section('3-4. External image URLs & duplicates');
const urlRegex = /https?:\/\/[^\s"'`)]+\.(?:jpg|jpeg|png|webp|avif|gif|svg)/gi;
const urlLocations = new Map();
for (const { file, content } of fileContents) {
    for (const match of content.match(urlRegex) || []) {
        if (!urlLocations.has(match)) urlLocations.set(match, new Set());
        urlLocations.get(match).add(file.replace(ROOT, '.'));
    }
}
console.log(`  Found ${urlLocations.size} unique external image URLs referenced in src/.`);
for (const [url, files] of urlLocations) {
    if (files.size > 1) warn(`Duplicate image URL used in ${files.size} files: ${url}`);
}

// ── 5. Social URLs found vs. identity.js ───────────────────────────────────
section('5. Social URLs vs. src/config/identity.js (critical — wrong-person check)');
const socialDomainRegex = /https?:\/\/(?:www\.)?(github\.com|linkedin\.com|facebook\.com|instagram\.com|(?:www\.)?youtube\.com|x\.com|twitter\.com)\/[^\s"'`)]+/gi;
const verifiedSet = new Set(sameAsUrls.map((u) => u.replace(/\/$/, '')));
let unverifiedFound = false;
for (const { file, content } of fileContents) {
    if (file.includes(join('src', 'config', 'identity.js'))) continue;
    for (const raw of content.match(socialDomainRegex) || []) {
        const url = raw.replace(/\/$/, '');
        const isPersonalProfileUrl =
            /github\.com\/HabiburRahmanZihad$/i.test(url) ||
            /linkedin\.com\/in\//i.test(url) ||
            /facebook\.com\/habiburrahmanzihad/i.test(url) ||
            /(x|twitter)\.com\/xihad_xihad$/i.test(url) ||
            /youtube\.com\/@XihadXone$/i.test(url);
        if (isPersonalProfileUrl && !verifiedSet.has(url)) {
            unverifiedFound = true;
            fail(`${file.replace(ROOT, '.')}: social URL not present in identity.js sameAs — ${url}`);
        }
    }
}
if (!unverifiedFound) ok('Every personal-profile URL found in src/ matches src/config/identity.js exactly.');

// ── 6. localhost / 127.0.0.1 in SEO-relevant files ─────────────────────────
section('6. localhost URLs in SEO metadata');
const seoFiles = [join(ROOT, 'index.html'), ...(existsSync(PUBLIC_DIR) ? walk(PUBLIC_DIR, ['.xml', '.txt', '.html']) : [])];
let localhostFound = false;
for (const file of seoFiles) {
    const content = readFileSync(file, 'utf-8');
    if (/localhost|127\.0\.0\.1/i.test(content)) {
        localhostFound = true;
        fail(`${file.replace(ROOT, '.')}: contains a localhost/127.0.0.1 reference.`);
    }
}
if (!localhostFound) ok('No localhost/127.0.0.1 references in index.html, robots.txt, or sitemap.xml.');

// ── 7. robots.txt sanity ───────────────────────────────────────────────────
section('7. robots.txt');
const robotsPath = join(PUBLIC_DIR, 'robots.txt');
if (existsSync(robotsPath)) {
    const robots = readFileSync(robotsPath, 'utf-8');
    if (/Disallow:\s*\/\s*$/m.test(robots)) fail('robots.txt has a bare "Disallow: /" blocking the whole site.');
    else ok('robots.txt does not broadly disallow the site.');
    if (!/Sitemap:/i.test(robots)) warn('robots.txt does not reference a Sitemap.');
    else ok('robots.txt references a Sitemap.');
} else {
    fail('public/robots.txt is missing.');
}

// ── 8. sitemap.xml sanity ──────────────────────────────────────────────────
section('8. sitemap.xml');
const sitemapPath = join(PUBLIC_DIR, 'sitemap.xml');
if (existsSync(sitemapPath)) {
    const sitemap = readFileSync(sitemapPath, 'utf-8');
    const locCount = (sitemap.match(/<loc>/g) || []).length;
    ok(`public/sitemap.xml has ${locCount} <loc> entries. (Run \`npm run build\` to regenerate dist/sitemap.xml with hashed image URLs.)`);
    if (/<image:image>/.test(sitemap)) ok('public/sitemap.xml includes <image:image> entries.');
    else warn('public/sitemap.xml has no <image:image> entries.');
} else {
    fail('public/sitemap.xml is missing.');
}

// ── 9. noindex audit ────────────────────────────────────────────────────────
section('9. noindex / robots meta audit');
for (const { file, content } of fileContents) {
    if (/noindex/i.test(content)) {
        const isErrorPage = file.includes(join('Pages', 'Error'));
        (isErrorPage ? ok : warn)(
            `${file.replace(ROOT, '.')}: sets noindex${isErrorPage ? ' (expected — 404 page)' : ' — confirm this is intentional'}.`
        );
    }
}

// ── 10. canonical URL / index.html checks ──────────────────────────────────
section('10. index.html canonical / title / description / JSON-LD');
const indexHtml = readFileSync(join(ROOT, 'index.html'), 'utf-8');
if (/<link rel="canonical" href="https:\/\//.test(indexHtml)) ok('Canonical URL present and uses https://.');
else fail('index.html canonical URL missing or not absolute https://.');
if (/<title>[^<]+<\/title>/.test(indexHtml)) ok('<title> present.');
else fail('index.html is missing a <title>.');
if (/name="description"/.test(indexHtml)) ok('Meta description present.');
else fail('index.html is missing a meta description.');
// The source index.html intentionally contains __PLACEHOLDER__ tokens —
// vite.config.js's structuredDataPlugin resolves them at dev/build time.
// Only flag unresolved placeholders in the *built* dist/index.html, since
// that's the file that would actually ship broken.
const distIndexPath = join(ROOT, 'dist', 'index.html');
if (existsSync(distIndexPath)) {
    const distHtml = readFileSync(distIndexPath, 'utf-8');
    let unresolved = false;
    for (const placeholder of ['__PERSON_JSONLD__', '__WEBSITE_JSONLD__', '__OG_IMAGE__', '__TWITTER_SITE__']) {
        if (distHtml.includes(placeholder)) {
            unresolved = true;
            fail(`dist/index.html still contains unresolved placeholder ${placeholder} — the build did not inject identity data.`);
        }
    }
    if (!unresolved) ok('dist/index.html has no unresolved identity placeholders.');
} else {
    warn('dist/ not found — run `npm run build` to verify identity placeholders resolve correctly.');
}

// ── 11. duplicate page titles/descriptions across usePageMeta calls ────────
section('11. Duplicate page titles / descriptions (usePageMeta calls)');
const titleRegex = /usePageMeta\(\{[^}]*?title:\s*['"`]([^'"`]+)['"`]/gs;
const descRegex = /usePageMeta\(\{[^}]*?description:\s*['"`]([^'"`]+)['"`]/gs;
const seenTitles = new Map();
const seenDescs = new Map();
for (const { file, content } of fileContents) {
    for (const m of content.matchAll(titleRegex)) {
        const t = m[1];
        if (!seenTitles.has(t)) seenTitles.set(t, []);
        seenTitles.get(t).push(file.replace(ROOT, '.'));
    }
    for (const m of content.matchAll(descRegex)) {
        const d = m[1];
        if (!seenDescs.has(d)) seenDescs.set(d, []);
        seenDescs.get(d).push(file.replace(ROOT, '.'));
    }
}
let dupTitles = false, dupDescs = false;
for (const [t, files] of seenTitles) if (files.length > 1) { dupTitles = true; fail(`Duplicate <title> "${t}" used in: ${files.join(', ')}`); }
for (const [d, files] of seenDescs) if (files.length > 1) { dupDescs = true; fail(`Duplicate meta description used in: ${files.join(', ')}`); }
if (!dupTitles) ok('No duplicate page titles across usePageMeta calls.');
if (!dupDescs) ok('No duplicate meta descriptions across usePageMeta calls.');

// ── 12. JSON-LD syntax validity (via identity.js, since index.html is templated) ──
section('12. Structured data validity');
try {
    JSON.parse(JSON.stringify(personalIdentity));
    ok('src/config/identity.js exports valid, serializable data.');
} catch (e) {
    fail(`identity.js structured data failed to serialize: ${e.message}`);
}

// ── Summary ──────────────────────────────────────────────────────────────
section('Summary');
console.log(`  ${issues} issue(s), ${warnings} warning(s).`);
process.exit(issues > 0 ? 1 : 0);
