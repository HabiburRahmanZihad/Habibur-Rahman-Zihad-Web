// Shared data source for the sitemap (pages + their meaningful, indexable
// images). Used by scripts/generate-image-sitemap.mjs after `vite build` to
// regenerate dist/sitemap.xml with correct hashed asset URLs for the
// locally-bundled images. Keep this in sync with the real page content —
// it intentionally only lists meaningful images (profile photos,
// certificates, project screenshots, template previews), never decorative
// icons/logos or duplicates, per Google's image-sitemap guidance.

export const SITE_URL = 'https://www.habiburrahmanzihad.me';

export const pages = [
    {
        loc: '/',
        lastmod: '2026-08-11',
        changefreq: 'monthly',
        priority: '1.0',
        images: [
            {
                url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758785330/IMG-20241101-WA0192_vyojiv.jpg',
                title: 'Habibur Rahman Zihad — Full-Stack Software Engineer',
            },
        ],
    },
    {
        loc: '/about',
        lastmod: '2026-08-11',
        changefreq: 'monthly',
        priority: '0.9',
        images: [
            {
                url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113496/photo2_shl6f1.jpg',
                title: 'Habibur Rahman Zihad — Full-Stack Software Engineer',
            },
            // Local, build-hashed: resolved by generate-image-sitemap.mjs
            {
                localBaseName: 'zihad-programming-hero-next-level-ai-bootcamp-certificate',
                title: 'Habibur Rahman Zihad — Next Level AI-Driven Software Engineering Bootcamp certificate (Programming Hero)',
            },
            {
                url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113803/pg-hero-certificate_vbiln3.png',
                title: 'Habibur Rahman Zihad — Complete Web Development Course certificate (Programming Hero)',
            },
            {
                url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1761200347/1761192742415_us33xu.jpg',
                title: 'Habibur Rahman Zihad — Black Belt in Web Development certificate (Programming Hero)',
            },
            {
                url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/Screenshot_2026-01-18_190755_ypah1h.png',
                title: 'Habibur Rahman Zihad — Smart Money Skills for Life certificate (Passport to Earning Bangladesh / UNICEF)',
            },
            {
                url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113802/CCe-Contest_ilts7n.jpg',
                title: 'Habibur Rahman Zihad — CCE Inter Semester Programming Contest-3 certificate (CCE Club, IIUC)',
            },
            {
                url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113803/COMMUNICATIONHACKS_atpsfd.png',
                title: 'Habibur Rahman Zihad — Communication Hacks certificate (10 Minute School)',
            },
            {
                url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113804/PhotoContest_lteajz.jpg',
                title: 'Habibur Rahman Zihad — Fundamentals Rules of Photography certificate (IIUCPS)',
            },
            {
                url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113810/Presentation_PublicSpeaking_s5zyxp.png',
                title: 'Habibur Rahman Zihad — Presentation & Public Speaking certificate (10 Minute School)',
            },
            {
                url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113802/cyber_xxgrcu.jpg',
                title: 'Habibur Rahman Zihad — Cyber Security & Ethical Hacking certificate (Ghoori Learning)',
            },
            {
                url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113802/10_qcmdsy.jpg',
                title: 'Habibur Rahman Zihad — Facebook Marketing certificate (10 Minute School)',
            },
            {
                url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113803/EMAIL_WRITING_tasy7q.png',
                title: 'Habibur Rahman Zihad — Email Writing certificate (10 Minute School)',
            },
        ],
    },
    {
        loc: '/projects',
        lastmod: '2026-08-11',
        changefreq: 'weekly',
        priority: '0.9',
        images: [
            { localBaseName: 'careerbangla-job-portal-project', title: 'CareerBangla — job portal platform built by Habibur Rahman Zihad' },
            { localBaseName: 'nagarnirman-civic-tech-project', title: 'NagarNirman — civic technology platform built by Habibur Rahman Zihad' },
            { localBaseName: 'tazarate-market-price-tracker-project', title: 'TazaRate — market price tracking platform built by Habibur Rahman Zihad' },
            { localBaseName: 'healio-healthcare-platform-project', title: 'Healio — healthcare platform built by Habibur Rahman Zihad' },
            { localBaseName: 'readrack-library-management-project', title: 'ReadRack — digital library management system built by Habibur Rahman Zihad' },
            { localBaseName: 'gradify-student-management-project', title: 'Gradify — student management system built by Habibur Rahman Zihad' },
        ],
    },
    {
        loc: '/templates',
        lastmod: '2026-08-11',
        changefreq: 'monthly',
        priority: '0.7',
        images: [
            { url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1786175639/Portfolio_R-T_Goldish_dwaohk.png', title: 'Portfolio R-T Goldish — developer portfolio template by Habibur Rahman Zihad' },
            { url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1786175697/Portfolio_V_Red_zqnsal.png', title: 'Portfolio V Red — developer portfolio template by Habibur Rahman Zihad' },
            { url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1786175741/Portfolio_V_Black_Blue_f7oumw.png', title: 'Portfolio V Black Blue — developer portfolio template by Habibur Rahman Zihad' },
            { url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1786175974/Portfolio_V_White_Blue_z7nqlq.png', title: 'Portfolio V White Blue — developer portfolio template by Habibur Rahman Zihad' },
            { url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1786175973/Portfolio_V_Redish_Blue_yhy5nz.png', title: 'Portfolio V Redish Blue — developer portfolio template by Habibur Rahman Zihad' },
            { url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1786175975/Portfolio_V_Bluish_gyvvna.png', title: 'Portfolio V Bluish — developer portfolio template by Habibur Rahman Zihad' },
            { url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1786175975/Portfolio_V_Black_White_v3k7nf.png', title: 'Portfolio V Black White — developer portfolio template by Habibur Rahman Zihad' },
            { url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1786175973/Portfolio_V_Red_Black_cohcfk.png', title: 'Portfolio V Red Black — developer portfolio template by Habibur Rahman Zihad' },
            { url: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1786175972/Portfolio_N_Classic_dyivtj.png', title: 'Portfolio N Classic — developer portfolio template by Habibur Rahman Zihad' },
        ],
    },
    { loc: '/videos', lastmod: '2026-08-11', changefreq: 'monthly', priority: '0.6', images: [] },
    { loc: '/contact', lastmod: '2026-08-11', changefreq: 'yearly', priority: '0.7', images: [] },
];
