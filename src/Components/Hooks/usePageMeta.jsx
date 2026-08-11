import { useEffect } from 'react';
import { SITE_URL } from '../../config/identity';

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
 * Keeps title, description, canonical URL, social tags, and optional
 * page-specific JSON-LD in sync with the current route. `title` is used
 * verbatim as document.title, so callers must pass the full, page-specific
 * title (e.g. "About Habibur Rahman Zihad | Full-Stack Software Engineer").
 */
const usePageMeta = ({ title, description, path = '/', structuredData }) => {
    useEffect(() => {
        const url = `${SITE_URL}${path}`;

        document.title = title;
        setMetaTag('name', 'description', description);
        setMetaTag('property', 'og:title', title);
        setMetaTag('property', 'og:description', description);
        setMetaTag('property', 'og:url', url);
        setMetaTag('name', 'twitter:title', title);
        setMetaTag('name', 'twitter:description', description);

        let canonical = document.head.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', url);

        let script;
        if (structuredData) {
            script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(structuredData);
            document.head.appendChild(script);
        }

        return () => {
            if (script) script.remove();
        };
    }, [title, description, path, structuredData]);
};

export default usePageMeta;
