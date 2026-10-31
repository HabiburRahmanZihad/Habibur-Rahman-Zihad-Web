import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { scrollTo } from '../../utils/smoothScroll';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Jump, don't glide — scrolling up through the new page while it fades in looks janky
        scrollTo(0, { immediate: true });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
