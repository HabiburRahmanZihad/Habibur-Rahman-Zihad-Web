/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';

const NEAR_TOP_THRESHOLD = 100;

const ScrollNavigator = () => {
    const [isNearTop, setIsNearTop] = useState(true);
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollable = document.documentElement.scrollHeight - document.documentElement.clientHeight;

            setIsNearTop(scrollY <= NEAR_TOP_THRESHOLD);
            setScrollPercent(scrollable > 0 ? Math.min(100, Math.max(0, (scrollY / scrollable) * 100)) : 0);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const handleClick = () => {
        if (isNearTop) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div
            className="fixed inset-y-0 right-1 sm:right-2 z-40 flex flex-col items-center
                       justify-between py-20 sm:py-24 pointer-events-none"
        >
            {/* Progress rail — visually part of the scrollbar area */}
            <div className="relative w-1 flex-1 rounded-full bg-base-300/70 overflow-hidden">
                <motion.div
                    className="absolute bottom-0 left-0 w-full rounded-full bg-gradient-to-t from-primary to-secondary"
                    animate={{ height: `${scrollPercent}%` }}
                    transition={{ duration: 0.15, ease: 'linear' }}
                />
                <motion.div
                    className="absolute left-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_-1px] shadow-primary"
                    animate={{ top: `${scrollPercent}%` }}
                    transition={{ duration: 0.15, ease: 'linear' }}
                    style={{ transform: 'translate(-50%, -50%)' }}
                />
            </div>

            {/* Rocket control — pinned at the base of the rail */}
            <motion.button
                type="button"
                onClick={handleClick}
                aria-label={isNearTop ? 'Scroll to bottom' : 'Scroll to top'}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-auto mt-6 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full
                           bg-base-200/90 backdrop-blur-md border border-primary/40
                           text-primary shadow-[0_0_18px_-4px] shadow-primary/60
                           hover:border-primary hover:shadow-[0_0_24px_-2px] hover:shadow-primary
                           transition-colors duration-300"
            >
                <motion.span
                    animate={{ rotate: isNearTop ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="flex items-center justify-center"
                >
                    <FaRocket className="text-base sm:text-lg" />
                </motion.span>
            </motion.button>
        </div>
    );
};

export default ScrollNavigator;
