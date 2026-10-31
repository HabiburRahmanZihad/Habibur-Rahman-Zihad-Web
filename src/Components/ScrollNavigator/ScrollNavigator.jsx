/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';
import { scrollTo } from '../../utils/smoothScroll';

const NEAR_TOP_THRESHOLD = 100;

const ScrollNavigator = () => {
    const [isNearTop, setIsNearTop] = useState(true);
    const { scrollY, scrollYProgress } = useScroll();

    // Motion values drive the rail directly (no re-render per scroll event);
    // the spring makes it glide instead of stepping on keyboard/touch scrolls
    const progress = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });
    const thumbTop = useTransform(progress, (value) => `${value * 100}%`);

    useMotionValueEvent(scrollY, 'change', (y) => setIsNearTop(y <= NEAR_TOP_THRESHOLD));

    const handleClick = () => {
        scrollTo(isNearTop ? 'bottom' : 0);
    };

    return (
        <div
            className="fixed inset-y-0 right-1 sm:right-2 z-40 flex flex-col items-center
                       justify-between py-20 sm:py-24 pointer-events-none"
        >
            {/* Progress rail — visually part of the scrollbar area */}
            <div className="relative w-1 flex-1">
                <div className="absolute inset-0 rounded-full bg-base-300/70 overflow-hidden">
                    <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-t from-primary to-secondary"
                        style={{ scaleY: progress, originY: 1 }}
                    />
                </div>
                <motion.div
                    className="absolute left-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_-1px] shadow-primary"
                    style={{ top: thumbTop, x: '-50%', y: '-50%' }}
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
