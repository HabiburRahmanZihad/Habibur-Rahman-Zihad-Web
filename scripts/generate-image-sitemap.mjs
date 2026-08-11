// Regenerates dist/sitemap.xml after `vite build`, with a Google-compatible
// <image:image> entry for every meaningful image (see scripts/sitemap-data.mjs).
// Locally-bundled images go through Vite's content hashing
// (e.g. careerbangla-job-portal-project.png -> careerbangla-job-portal-project-aUjD-KE_.png),
// so their final URL can't be hardcoded — this script resolves each one by
// scanning the actual dist/assets output right after the build, and fails
// loudly if an expected image is missing so a broken sitemap never ships.
//
// Run automatically via `npm run build` (see package.json "postbuild").

import { readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { SITE_URL, pages } from './sitemap-data.mjs';

const distDir = join(process.cwd(), 'dist');
const assetsDir = join(distDir, 'assets');

if (!existsSync(distDir)) {
    console.error('[generate-image-sitemap] dist/ not found — run `vite build` first.');
    process.exit(1);
}

const assetFiles = existsSync(assetsDir) ? readdirSync(assetsDir) : [];

const resolveLocalImage = (baseName) => {
    // Vite emits "<name>-<hash>.<ext>"; match by prefix so the hash can change freely.
    const match = assetFiles.find((f) => f.startsWith(`${baseName}-`));
    if (!match) {
        throw new Error(
            `[generate-image-sitemap] Could not find a built asset for "${baseName}" in dist/assets. ` +
            'Was the source file renamed or removed? Update scripts/sitemap-data.mjs to match.'
        );
    }
    return `${SITE_URL}/assets/${match}`;
};

const xmlEscape = (str) =>
    str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const urlEntries = pages.map((page) => {
    const imagesXml = page.images
        .map((img) => {
            const url = img.url ?? resolveLocalImage(img.localBaseName);
            return [
                '    <image:image>',
                `      <image:loc>${xmlEscape(url)}</image:loc>`,
                img.title ? `      <image:title>${xmlEscape(img.title)}</image:title>` : null,
                '    </image:image>',
            ].filter(Boolean).join('\n');
        })
        .join('\n');

    return [
        '  <url>',
        `    <loc>${SITE_URL}${page.loc}</loc>`,
        `    <lastmod>${page.lastmod}</lastmod>`,
        `    <changefreq>${page.changefreq}</changefreq>`,
        `    <priority>${page.priority}</priority>`,
        imagesXml,
        '  </url>',
    ].filter(Boolean).join('\n');
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries.join('\n')}
</urlset>
`;

writeFileSync(join(distDir, 'sitemap.xml'), xml, 'utf-8');

const totalImages = pages.reduce((sum, p) => sum + p.images.length, 0);
console.log(`[generate-image-sitemap] Wrote dist/sitemap.xml — ${pages.length} pages, ${totalImages} images.`);
