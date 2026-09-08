// Pushes every page URL to the IndexNow API (https://www.indexnow.org),
// which Bing, Yandex, and Seznam consume to recrawl a site immediately
// instead of waiting for their next scheduled crawl. Google does not use
// this protocol — Search Console already recrawls fast on its own — which
// is exactly why Bing/Edge search can keep showing stale or wrong info
// long after Google has picked up a fix. Run with `npm run indexnow`
// after every deploy that changes page content or identity.js.
//
// The key file at public/<INDEXNOW_KEY>.txt must contain exactly the key
// and be reachable at https://<site>/<INDEXNOW_KEY>.txt — that file proves
// domain ownership to IndexNow, no account/verification step needed.

import { SITE_URL, pages } from './sitemap-data.mjs';

const INDEXNOW_KEY = 'b499e0d2ac9b4ed58cf366eca27cb394';

const urlList = pages.map((p) => `${SITE_URL}${p.loc}`);

const body = {
    host: new URL(SITE_URL).host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList,
};

console.log(`Submitting ${urlList.length} URLs to IndexNow (Bing, Yandex, Seznam)...`);
urlList.forEach((u) => console.log(`  - ${u}`));

const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
});

if (res.ok) {
    console.log(`\nSubmitted successfully (HTTP ${res.status}).`);
} else {
    console.error(`\nIndexNow submission failed: HTTP ${res.status} ${res.statusText}`);
    console.error(await res.text().catch(() => ''));
    process.exit(1);
}
