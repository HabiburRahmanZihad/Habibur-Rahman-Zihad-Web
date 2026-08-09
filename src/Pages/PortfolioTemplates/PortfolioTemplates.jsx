/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import { useLocation } from 'react-router';
import Button from '../../Components/Buttons/Button';
import usePageMeta from '../../Components/Hooks/usePageMeta';
import portfolioTemplates from './portfolioTemplatesData';
import PortfolioTemplateCard from './PortfolioTemplateCard';

const SUPPORT_EMAIL = 'e241024@ugrad.iiuc.ac.bd';

const PortfolioTemplates = () => {
    usePageMeta({
        title: 'Portfolio Templates | Habibur Rahman Zihad',
        description: 'Explore ready-made developer portfolio templates, preview the designs, and download the source code to customize them with your own information.',
        path: '/templates',
    });
    const location = useLocation();

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <section className="py-10 md:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-base-100 to-base-200 relative overflow-hidden">
                <div className="absolute inset-0 gradient-mesh"></div>
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary grotesk mb-6">
                            Portfolio Templates
                        </h1>
                        <p className="text-lg sm:text-xl text-base-content/70 max-w-3xl mx-auto">
                            Looking for a ready-made portfolio? Choose a design, download the source code, add your own information, and make it yours.
                        </p>
                        <p className="text-base sm:text-lg text-base-content/60 max-w-2xl mx-auto mt-4">
                            Each template is built to be customized, so you can replace the content, images, colors, and sections with your own.
                        </p>
                        <p className="text-sm sm:text-base text-base-content/50 max-w-2xl mx-auto mt-4">
                            If you run into any issues while setting up a template, feel free to email me and I'll help you out.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Templates Grid Section */}
            <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8 bg-base-100">
                <motion.div
                    key={location.key}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {portfolioTemplates.map((template, index) => (
                        <PortfolioTemplateCard key={template.id} template={template} index={index} />
                    ))}
                </motion.div>
            </section>

            {/* Support CTA Section */}
            <section className="py-20 px-4 md:px-6 lg:px-8 bg-primary text-primary-content">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        key={location.pathname + '-support-cta'}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold grotesk mb-6">
                            Need Help Setting It Up?
                        </h2>
                        <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            Download the code, add your own information, and customize it however you like. If you run into any issues while setting it up, feel free to email me.
                        </p>
                        <div className="flex justify-center">
                            <Button
                                href={`mailto:${SUPPORT_EMAIL}`}
                                variant="secondary"
                                size="lg"
                                icon={FaEnvelope}
                                iconPosition="left"
                                className="text-white hover:bg-white hover:text-primary"
                            >
                                Email Me
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PortfolioTemplates;
