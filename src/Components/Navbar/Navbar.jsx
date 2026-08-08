/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import BrandLogo from '../../assets/AllPic/logo/withBorder.png';

const Navbar = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') return 'dark';
        try {
            return localStorage.getItem('theme')
                || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
        } catch {
            return 'dark';
        }
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('theme', theme);
        } catch {
            // localStorage unavailable (private mode) — theme still applies for this session
        }
    }, [theme]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsAboutDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
        setIsAboutDropdownOpen(false);
        setIsMobileAboutOpen(false);
    }, [location.pathname]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    const navLinkClass = ({ isActive }) =>
        `px-4 py-2 text-lg font-medium rounded-full transition-all duration-200 ${isActive
            ? 'bg-primary text-primary-content shadow-md shadow-primary/25'
            : 'text-base-content/80 hover:text-primary hover:bg-primary/10'
        }`;

    const aboutMenuItems = [
        { label: 'Details', id: 'details' },
        { label: 'Experience', id: 'experience' },
        { label: 'Tech Skills', id: 'tech-skills' },
        { label: 'Learning Journey', id: 'learning-journey' },
        { label: 'How I Started', id: 'how-start' },
        { label: 'What I Love', id: 'what-love' },
        { label: 'Certifications & Achievements', id: 'certifications' }
    ];

    const handleAboutClick = (sectionId) => {
        setIsAboutDropdownOpen(false);
        setIsMenuOpen(false);
        setIsMobileAboutOpen(false);

        if (location.pathname === '/about') {
            const element = document.getElementById(sectionId);
            if (element) {
                const offset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            navigate('/about');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        }
    };

    const isAboutActive = location.pathname === '/about';

    return (
        <nav className="sticky top-0 z-50 bg-base-100/70 backdrop-blur-xl border-b border-base-300/60 shadow-sm">
            <div className="navbar container mx-auto">
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

                {/* Right - Theme Toggle & Mobile Menu Button */}
                <div className="navbar-end flex items-center gap-2">
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex">
                        <div className="flex gap-3 items-center">
                            <NavLink to="/" className={navLinkClass}>Home</NavLink>

                            {/* About Dropdown - Desktop */}
                            <div
                                ref={dropdownRef}
                                className="relative"
                                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                                onMouseLeave={() => setIsAboutDropdownOpen(false)}
                            >
                                <button
                                    onClick={() => navigate('/about')}
                                    className={`px-4 py-2 text-lg font-medium rounded-full transition-all duration-200 flex items-center gap-2 ${isAboutActive
                                        ? 'bg-primary text-primary-content shadow-md shadow-primary/25'
                                        : 'text-base-content/80 hover:text-primary hover:bg-primary/10'
                                        }`}
                                >
                                    About
                                    <motion.div
                                        animate={{ rotate: isAboutDropdownOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaChevronDown className="text-sm" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {isAboutDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-3 w-56 bg-base-100/95 backdrop-blur-xl border border-base-300 rounded-xl shadow-xl overflow-hidden"
                                        >
                                            {aboutMenuItems.map((item, index) => (
                                                <motion.button
                                                    key={index}
                                                    onClick={() => handleAboutClick(item.id)}
                                                    className="w-full text-left px-4 py-3 text-base-content hover:bg-primary/10 hover:text-primary transition-colors duration-200 border-b border-base-300/60 last:border-b-0"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                >
                                                    {item.label}
                                                </motion.button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
                            <NavLink to="/videos" className={navLinkClass}>Videos</NavLink>
                            <NavLink to="/templates" className={navLinkClass}>Templates</NavLink>
                            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
                        </div>
                    </div>

                    {/* Theme Button */}
                    <button
                        onClick={toggleTheme}
                        className="btn btn-ghost btn-circle text-primary border border-base-300 hover:border-primary hover:bg-primary/10"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <FaMoon className="h-5 w-5" /> : <FaSun className="h-5 w-5" />}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(prev => !prev)}
                        className="btn btn-ghost btn-circle lg:hidden text-primary border border-base-300 hover:border-primary hover:bg-primary/10"
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
                            className="absolute top-full left-0 w-full bg-base-100/95 backdrop-blur-xl border-t border-base-300 shadow-lg lg:hidden"
                        >
                            <div className="flex flex-col gap-2 p-4">
                                <NavLink
                                    to="/"
                                    className={navLinkClass}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </NavLink>

                                {/* Mobile About with Inline Submenu */}
                                <div className="flex flex-col gap-2">
                                    <button
                                        onClick={() => setIsMobileAboutOpen(prev => !prev)}
                                        className={`px-4 py-2 text-lg font-medium rounded-full transition-all duration-200 flex items-center justify-between ${isAboutActive
                                            ? 'bg-primary text-primary-content shadow-md shadow-primary/25'
                                            : 'text-base-content/80 hover:text-primary hover:bg-primary/10'
                                            }`}
                                    >
                                        <span>About</span>
                                        <motion.div
                                            animate={{ rotate: isMobileAboutOpen ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <FaChevronDown className="text-sm" />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {isMobileAboutOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden pl-4 flex flex-col gap-2"
                                            >
                                                {aboutMenuItems.map((item, index) => (
                                                    <motion.button
                                                        key={index}
                                                        onClick={() => handleAboutClick(item.id)}
                                                        className="text-left px-4 py-2 text-base-content hover:text-primary transition-colors duration-200 border-l-2 border-primary/30 hover:border-primary"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.05 }}
                                                    >
                                                        {item.label}
                                                    </motion.button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <NavLink
                                    to="/projects"
                                    className={navLinkClass}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Projects
                                </NavLink>
                                <NavLink
                                    to="/videos"
                                    className={navLinkClass}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Videos
                                </NavLink>
                                <NavLink
                                    to="/templates"
                                    className={navLinkClass}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Templates
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={navLinkClass}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </NavLink>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
