import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { frame, cancelFrame } from 'framer-motion';

let lenis = null;

/**
 * Starts Lenis inertia scrolling, driven by framer-motion's frame loop so the
 * scroll position and scroll-linked motion values update in the same frame.
 * Users who prefer reduced motion keep native scrolling. Returns a cleanup.
 */
export const initSmoothScroll = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

    lenis = new Lenis({
        lerp: 0.1,
        stopInertiaOnNavigate: true,
        // SweetAlert popups scroll on their own — leave wheel events inside them alone
        prevent: (node) => node.classList?.contains('swal2-container'),
    });

    const update = ({ timestamp }) => lenis.raf(timestamp);
    frame.update(update, true);

    return () => {
        cancelFrame(update);
        lenis.destroy();
        lenis = null;
    };
};

/**
 * Scrolls the page to a pixel offset, an element, or 'bottom'. Goes through
 * Lenis when it's running so programmatic scrolls share its easing; otherwise
 * falls back to native scrolling (CSS scroll-behavior decides smooth vs. jump).
 */
export const scrollTo = (target, { offset = 0, immediate = false } = {}) => {
    if (lenis) {
        lenis.scrollTo(target, { offset, immediate });
        return;
    }

    let top;
    if (target === 'bottom') top = document.documentElement.scrollHeight;
    else if (typeof target === 'number') top = target;
    else top = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({ top: top + offset, behavior: immediate ? 'instant' : 'auto' });
};
