import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Theme toggle functionality
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="navbar bg-base-100 shadow-lg sticky top-0 z-50"
        >
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-xl font-bold text-primary grotesk">
                    Habibur Rahman
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`btn btn-ghost ${location.pathname === item.path
                                        ? 'text-primary font-semibold'
                                        : 'text-neutral'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="navbar-end">
                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="btn btn-ghost btn-circle mr-2"
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ?
                        <FaMoon className="w-5 h-5" /> :
                        <FaSun className="w-5 h-5" />
                    }
                </button>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="btn btn-ghost btn-circle lg:hidden"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ?
                        <FaTimes className="w-5 h-5" /> :
                        <FaBars className="w-5 h-5" />
                    }
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 w-full bg-base-100 shadow-lg lg:hidden"
                >
                    <ul className="menu p-4">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`btn btn-ghost justify-start w-full ${location.pathname === item.path
                                            ? 'text-primary font-semibold'
                                            : 'text-neutral'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;