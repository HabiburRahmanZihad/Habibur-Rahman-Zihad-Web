import React from 'react';
import { motion } from 'framer-motion';
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaEnvelope,
    FaHeart,
    FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            icon: FaGithub,
            url: 'https://github.com/yourusername',
            color: 'hover:text-gray-900 dark:hover:text-white'
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            url: 'https://linkedin.com/in/yourusername',
            color: 'hover:text-blue-600'
        },
        {
            name: 'Twitter',
            icon: FaTwitter,
            url: 'https://twitter.com/yourusername',
            color: 'hover:text-blue-400'
        },
        {
            name: 'Instagram',
            icon: FaInstagram,
            url: 'https://instagram.com/yourusername',
            color: 'hover:text-pink-500'
        },
        {
            name: 'Email',
            icon: FaEnvelope,
            url: 'mailto:your.email@example.com',
            color: 'hover:text-red-500'
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-base-200 text-base-content">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-primary grotesk">
                            Habibur Rahman
                        </h3>
                        <p className="text-base-content/70 max-w-md">
                            Full Stack Developer passionate about creating beautiful,
                            functional web applications that make a difference.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => {
                                const IconComponent = social.icon;
                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-xl text-base-content/60 transition-colors duration-300 ${social.color}`}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label={social.name}
                                    >
                                        <IconComponent />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`/${link.toLowerCase()}`}
                                        className="text-base-content/70 hover:text-primary transition-colors duration-300"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-primary">Get In Touch</h4>
                        <div className="space-y-2">
                            <p className="text-base-content/70">
                                <span className="font-medium">Email:</span> your.email@example.com
                            </p>
                            <p className="text-base-content/70">
                                <span className="font-medium">Location:</span> Your City, Country
                            </p>
                            <p className="text-base-content/70">
                                <span className="font-medium">Status:</span>
                                <span className="text-green-500 ml-1">Available for work</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="divider my-8"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-2 text-base-content/60">
                        <span>© {currentYear} Habibur Rahman. Made with</span>
                        <FaHeart className="text-red-500" />
                        <span>using React & Tailwind CSS</span>
                    </div>

                    {/* Back to Top Button */}
                    <motion.button
                        onClick={scrollToTop}
                        className="btn btn-circle btn-primary btn-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Back to top"
                    >
                        <FaArrowUp />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;