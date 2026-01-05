import { motion } from 'framer-motion';
import {
    FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFacebook, FaArrowUp,
} from 'react-icons/fa';
import { Link } from 'react-router';
import Logo from '../../assets/AllPic/logo/withBorder.png';

const Footer = () => {
    const socialLinks = [
        { name: 'GitHub', icon: FaGithub, url: 'https://github.com/HabiburRahmanZihad' },
        { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/habiburrahmanzihad' },
        { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/xihad_xihad' },
        { name: 'Email', icon: FaEnvelope, url: 'mailto:e241024@ugrad.iiuc.ac.bd' },
        { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/habiburrahmanzihad.zihad' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-base-200/50 text-content py-12 px-4 sm:px-8 border-t border-primary/10 mt-5 md:mt-10">
            {/* Gradient Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

            {/* Background mesh */}
            <div className="absolute inset-0 gradient-mesh opacity-20 pointer-events-none"></div>

            <div className="container mx-auto relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Branding */}
                <div className="text-center sm:text-left">
                    <motion.img
                        src={Logo}
                        alt="Habibur Rahman Logo"
                        className="w-20 sm:w-24 mx-auto sm:mx-0 mb-4 rounded-lg shadow glow-ring"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                    />
                    <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-2 grotesk">
                        Habibur Rahman
                    </h3>
                    <p className="text-base-content/70 text-sm leading-relaxed">
                        Full Stack Developer building accessible, performant, and visually engaging web applications that solve real problems.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="text-center sm:text-left">
                    <h4 className="text-xl font-semibold text-primary mb-4">Quick Links</h4>
                    <ul className="text-base-content/70 text-sm font-medium grid grid-cols-2 gap-3 justify-center sm:justify-start">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About', path: '/about' },
                            { name: 'Projects', path: '/projects' },
                            { name: 'Contact', path: '/contact' },
                        ].map(({ name, path }) => (
                            <li key={name}>
                                <Link
                                    to={path}
                                    className="hover:text-primary transition-colors duration-300 hover:underline"
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact & Socials */}
                <div className="text-center sm:text-left">
                    <h4 className="text-xl font-semibold text-primary mb-4">Connect With Me</h4>
                    <ul className="text-base-content/70 text-sm space-y-2 mb-4">
                        <li>📍 Chattogram, Bangladesh</li>
                        <li>📧 e241024@ugrad.iiuc.ac.bd</li>
                    </ul>
                    <div className="flex justify-center sm:justify-start gap-3 mt-2">
                        {socialLinks.map(({ name, icon: Icon, url }) => (
                            <motion.a
                                key={name}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={name}
                                title={name}
                                className="text-xl p-2 rounded-lg glass-card text-base-content/70 hover:text-primary hover:border-primary/30 border border-transparent transition-all duration-300"
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-12 text-center text-sm text-base-content/60 border-t border-primary/10 pt-6 relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <span>© {new Date().getFullYear()} Habibur Rahman. All rights reserved.</span>

                {/* Scroll to Top Button */}
                <motion.button
                    onClick={scrollToTop}
                    className="p-3 rounded-full glass-card border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Scroll to top"
                >
                    <FaArrowUp className="text-sm" />
                </motion.button>
            </div>
        </footer>
    );
};

export default Footer;