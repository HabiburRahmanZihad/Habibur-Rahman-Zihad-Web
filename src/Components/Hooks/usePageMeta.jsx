import { useEffect } from 'react';

const SITE_URL = 'https://habibur-rahman-zihad.vercel.app';
const SITE_NAME = 'Habibur Rahman Zihad';

const setMetaTag = (attr, key, content) => {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
};

/**
 * Keeps title, description, canonical URL, and social tags in sync with the
 * current route so every page has its own search snippet and share preview.
 */
const usePageMeta = ({ title, description, path = '/' }) => {
    useEffect(() => {
        const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Full-Stack Software Engineer`;
        const url = `${SITE_URL}${path}`;

        document.title = fullTitle;
        setMetaTag('name', 'description', description);
        setMetaTag('property', 'og:title', fullTitle);
        setMetaTag('property', 'og:description', description);
        setMetaTag('property', 'og:url', url);
        setMetaTag('name', 'twitter:title', fullTitle);
        setMetaTag('name', 'twitter:description', description);

        let canonical = document.head.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', url);
    }, [title, description, path]);
};

export default usePageMeta;
