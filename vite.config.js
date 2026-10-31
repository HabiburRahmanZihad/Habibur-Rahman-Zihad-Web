import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { personalIdentity, personJsonLd, websiteJsonLd } from './src/config/identity.js'

// Injects index.html's Person/WebSite JSON-LD and identity-critical meta
// tags (og:image, twitter:image, twitter:site) directly from
// src/config/identity.js at build/dev time, so that file stays the one
// place identity data can be edited — index.html can never drift out of
// sync with it again.
function structuredDataPlugin() {
  const twitterHandle = `@${new URL(personalIdentity.socialProfiles.twitter).pathname.replace(/\//g, '')}`;
  const profileImage = personalIdentity.images[0];

  return {
    name: 'inject-identity-data',
    transformIndexHtml(html) {
      return html
        .replace('__PERSON_JSONLD__', JSON.stringify(personJsonLd, null, 2))
        .replace('__WEBSITE_JSONLD__', JSON.stringify(websiteJsonLd, null, 2))
        .replace(/__OG_IMAGE__/g, profileImage)
        .replace('__TWITTER_SITE__', twitterHandle);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), structuredDataPlugin()],
})