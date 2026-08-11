// ─────────────────────────────────────────────────────────────────────────
// SOURCE OF TRUTH — Habibur Rahman Zihad's public identity
// ─────────────────────────────────────────────────────────────────────────
// Every page, component, and the index.html JSON-LD (injected at build time
// by vite.config.js, see `structuredDataPlugin`) reads from this single file
// instead of hardcoding a name, email, or social URL. That is intentional:
// a prior SEO pass let identity data drift and get duplicated across files,
// which is exactly how a portfolio ends up accidentally linking to a
// different person's social profile. Centralizing it here prevents that.
//
// RULE: a URL only belongs in `socialProfiles` if it was found verified
// inside this project's own source code (and used identically everywhere),
// never guessed and never found via a name search on the web. If a platform
// isn't listed below, it was not verified — don't add it without proof.
// ─────────────────────────────────────────────────────────────────────────

export const SITE_URL = 'https://habibur-rahman-zihad.vercel.app';
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const personalIdentity = {
    name: 'Habibur Rahman Zihad',
    alternateName: 'ZIHAD',
    jobTitle: 'Full-Stack Software Engineer',
    description:
        'Habibur Rahman Zihad (ZIHAD) is a Full-Stack Software Engineer from Chattogram, Bangladesh, working across web development, backend engineering, and AI/RAG-powered applications.',
    email: 'e241024@ugrad.iiuc.ac.bd',
    location: { addressLocality: 'Chattogram', addressCountry: 'BD' },
    worksFor: { name: 'JobBridge BD', url: 'https://jobbridgebd.com/' },
    alumniOf: { name: 'International Islamic University Chittagong' },
    knowsAbout: [
        'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
        'TypeScript', 'DevOps', 'REST API', 'Retrieval-Augmented Generation (RAG)',
    ],

    // Real, verified photos of Habibur Rahman Zihad — the Home hero portrait
    // and the About page portrait. Not a logo, not a certificate, not a
    // project screenshot. Used for the Person entity's `image` field.
    images: [
        'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758785330/IMG-20241101-WA0192_vyojiv.jpg',
        'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113496/photo2_shl6f1.jpg',
    ],

    // VERIFIED social profile URLs only — cross-checked across every
    // component that links to them (Footer, Contact, Home, Videos) during
    // the 2026-08-11 SEO audit and found 100% consistent, with zero
    // conflicting URLs anywhere in the project. Nothing below was resolved
    // via a name search. Any platform not listed here (e.g. Instagram) has
    // no verified URL in this project and must stay out of sameAs.
    socialProfiles: {
        github: 'https://github.com/HabiburRahmanZihad',
        linkedin: 'https://linkedin.com/in/habiburrahmanzihad',
        twitter: 'https://x.com/xihad_xihad',
        facebook: 'https://www.facebook.com/habiburrahmanzihad.zihad',
        youtube: 'https://www.youtube.com/@XihadXone',
    },
};

export const sameAsUrls = Object.values(personalIdentity.socialProfiles);

// Person structured data — the single canonical entity. Every page that
// needs a Person (ProfilePage's mainEntity, etc.) must reference PERSON_ID
// rather than declaring a second, competing Person block.
export const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: personalIdentity.name,
    alternateName: personalIdentity.alternateName,
    url: `${SITE_URL}/`,
    image: personalIdentity.images,
    jobTitle: personalIdentity.jobTitle,
    description: personalIdentity.description,
    address: { '@type': 'PostalAddress', ...personalIdentity.location },
    worksFor: { '@type': 'Organization', ...personalIdentity.worksFor },
    alumniOf: { '@type': 'CollegeOrUniversity', ...personalIdentity.alumniOf },
    email: `mailto:${personalIdentity.email}`,
    knowsAbout: personalIdentity.knowsAbout,
    sameAs: sameAsUrls,
};

export const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: personalIdentity.name,
    alternateName: 'ZIHAD Portfolio',
    url: `${SITE_URL}/`,
    inLanguage: 'en',
    publisher: { '@id': PERSON_ID },
};
