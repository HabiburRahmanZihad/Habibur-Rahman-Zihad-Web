/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaLaptopCode } from 'react-icons/fa';
import Button from '../../Components/Buttons/Button';

const PortfolioTemplateCard = ({ template, index }) => {
    const { title, previewImage, liveUrl, githubUrl, shortDescription } = template;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: (index % 3) * 0.08 }}
            className="group flex flex-col h-full bg-base-200 rounded-2xl border border-base-300/60 shadow-xl
                       hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
            {/* Preview Image */}
            <div className="relative w-full aspect-video overflow-hidden border-b border-base-300/60">
                {previewImage ? (
                    <img
                        src={previewImage}
                        alt={`${title} preview`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/10 via-base-300 to-secondary/10 text-base-content/50">
                        <FaLaptopCode className="text-3xl" />
                        <span className="text-xs font-medium">Preview image coming soon</span>
                    </div>
                )}
                <div className="absolute inset-0 ring-1 ring-inset ring-primary/0 group-hover:ring-primary/30 transition-all duration-300 pointer-events-none" />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 gap-3 p-5 sm:p-6">
                <h3 className="text-xl md:text-2xl font-extrabold text-primary grotesk">
                    {title}
                </h3>
                <p className="text-sm sm:text-base text-base-content/80 leading-relaxed flex-1">
                    {shortDescription}
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                    <Button
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        icon={FaExternalLinkAlt}
                        iconPosition="left"
                        className="w-full sm:w-auto"
                    >
                        Live Preview
                    </Button>
                    <Button
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="ghost"
                        icon={FaGithub}
                        iconPosition="left"
                        className="w-full sm:w-auto border border-primary/40 hover:border-primary"
                    >
                        Download Code
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioTemplateCard;
