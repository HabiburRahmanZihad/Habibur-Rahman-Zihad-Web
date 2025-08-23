import { motion } from 'framer-motion';
import {
    FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFacebook,
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

    return (
        <footer className="bg-gradient-to-br from-base-200 to-base-100 text-content py-12 px-4 sm:px-8 border-t border-base-300">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Branding */}
                <div className="text-center sm:text-left">
                    <img src={Logo} alt="Logo" className="w-20 sm:w-24 mx-auto sm:mx-0 mb-4 rounded-lg shadow" />
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2 grotesk">
                        Habibur Rahman
                    </h3>
                    <p className="text-base-content/80 text-sm leading-relaxed">
                        Full Stack Developer building accessible, performant, and visually engaging web applications that solve real problems.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="text-center sm:text-left">
                    <h4 className="text-xl font-semibold text-primary  mb-4">Quick Links</h4>
                    <ul className="text-base-content/80 text-sm font-medium grid grid-cols-2 gap-3 justify-center sm:justify-start">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About', path: '/about' },
                            { name: 'Projects', path: '/projects' },
                            { name: 'Contact', path: '/contact' },
                        ].map(({ name, path }) => (
                            <li key={name}>
                                <Link
                                    to={path}
                                    className="hover:text-secondary transition-colors duration-300"
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
                    <ul className="text-base-content/80 text-sm space-y-2 mb-4">
                        <li>📍 Chattogram, Bangladesh</li>
                        <li>📧 e241024@ugrad.iiuc.ac.bd</li>
                        <li>📞 +880 1329-453598</li>
                    </ul>
                    <div className="flex justify-center sm:justify-start gap-4 mt-2">
                        {socialLinks.map(({ name, icon: Icon, url }) => (
                            <motion.a
                                key={name}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={name}
                                title={name}
                                className="text-xl text-base-content/70 hover:text-primary transition-colors"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-12 text-center text-sm text-base-content/60 border-t border-base-300 pt-6">
                © {new Date().getFullYear()} Habibur Rahman. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;