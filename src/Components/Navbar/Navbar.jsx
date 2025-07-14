import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import BrandLogo from '../../assets/AllPic/logo/withBorder.png';

const Navbar = () => {
    const [theme, setTheme] = useState('light'); // Light/dark theme state
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle

    // Update the HTML root with theme attribute
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    // Toggle theme between light and dark
    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    // Reusable NavLink style
    const navLinkClass = ({ isActive }) =>
        `px-4 py-1 border-2 border-primary text-primary text-xl rounded-md transition-all duration-200 hover:bg-primary hover:text-white ${isActive ? 'bg-primary text-white' : ''
        }`;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="navbar sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-md"
        >
            {/* Left - Brand Logo & Name */}
            <div className="navbar-start flex items-center gap-3">
                <img
                    src={BrandLogo}
                    alt="Brand Logo"
                    className="h-14 w-14 rounded-full border border-primary shadow"
                />
                <NavLink to="/" className="text-2xl md:text-3xl text-primary grotesk font-bold">
                    Habibur Rahman
                </NavLink>
            </div>

            {/* Center - Desktop Navigation Links */}


            {/* Right - Theme Toggle & Mobile Menu Button */}
            <div className="navbar-end flex items-center gap-2">
                <div className="hidden lg:flex">
                    <div className="flex gap-3">
                        <NavLink to="/" className={navLinkClass}>Home</NavLink>
                        <NavLink to="/about" className={navLinkClass}>About</NavLink>
                        <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
                        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
                    </div>
                </div>


                {/* Theme Button */}
                <button
                    onClick={toggleTheme}
                    className="btn btn-ghost btn-circle border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    aria-label="Toggle Theme"
                >
                    {theme === 'light' ? <FaMoon className="h-5 w-5" /> : <FaSun className="h-5 w-5" />}
                </button>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMenuOpen(prev => !prev)}
                    className="btn btn-ghost btn-circle lg:hidden border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    aria-label="Toggle Mobile Menu"
                >
                    {isMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 w-full bg-base-100 border-t-2 border-primary shadow-md lg:hidden"
                    >
                        <div className="flex flex-col gap-2 p-4">
                            <NavLink to="/" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                            <NavLink to="/about" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>About</NavLink>
                            <NavLink to="/projects" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                            <NavLink to="/contact" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;