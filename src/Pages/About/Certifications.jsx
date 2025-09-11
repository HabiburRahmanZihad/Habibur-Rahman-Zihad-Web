import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';


import WEBDEVCERT from '../../assets/AllPic/Certificate/pg-hero-certificate.png';
import PhotoContest from '../../assets/AllPic/Certificate/PhotoContest.jpg';
import CyberSecurity from '../../assets/AllPic/Certificate/cyber.jpg';
import facebookMarketing from '../../assets/AllPic/Certificate/10.jpg';
import Communication from '../../assets/AllPic/Certificate/COMMUNICATIONHACKS.png';
import Presentation from '../../assets/AllPic/Certificate/Presentation&PublicSpeaking.png';
import EMAILWRITING from '../../assets/AllPic/Certificate/EMAIL WRITING.png';

const achievements = [
    { image: WEBDEVCERT, title: 'Complete Web Development Course', year: '2025', Platform: 'Programming Hero', ShortSummary: 'Successfully completed the Complete Web Development Course with Excellence, mastering HTML, CSS, JavaScript, React, and real-world projects.' },
    { image: Communication, title: 'Communication Hacks', year: '2025', Platform: '10 Minute School', ShortSummary: 'Completed a course on communication strategies and techniques.' },
    { image: PhotoContest, title: 'Fundamentals rules of PhotoGraphy', year: '2024', Platform: 'IIUCPS', ShortSummary: 'Participated in a photography contest and won recognition for outstanding skills.' },
    { image: Presentation, title: 'Presentation & Public Speaking', year: '2023', Platform: '10 Minute School', ShortSummary: 'Completed a comprehensive course on Presentation & Public Speaking, gaining skills in effective communication and audience engagement.' },
    { image: CyberSecurity, title: 'Cyber Security & Ethical Hacking', year: '2021', Platform: 'Ghoori Learning', ShortSummary: 'Completed a comprehensive course on Cyber Security and Ethical Hacking, gaining skills in protecting systems and networks.' },
    { image: facebookMarketing, title: 'Facebook Marketing', year: '2021', Platform: '10 Minute School', ShortSummary: 'Completed a course on Facebook Marketing, learning strategies for effective social media advertising.' },
    { image: EMAILWRITING, title: 'Email Writing', year: '2025', Platform: '10 Minute School', ShortSummary: 'Completed a course on Email Writing, mastering the art of professional communication through email.' }
];

const Certifications = () => {
    return (
        <section className="py-20 bg-base-200">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary grotesk mb-4">
                        Learning & Certifications
                    </h2>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                        Here are some of the certified programs I've completed to expand my skills beyond just coding — including marketing, design, and strategic thinking.
                    </p>
                </motion.div>

                {/* Certificate Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.1
                            }
                        }
                    }}
                >
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover="hover"
                            whileTap={{ scale: 0.98 }}
                            variants={{
                                hidden: { opacity: 0, y: 60, rotateX: -15, scale: 0.9 },
                                visible: {
                                    opacity: 1, y: 0, rotateX: 0, scale: 1,
                                    transition: { type: 'spring', damping: 20, stiffness: 100, duration: 0.8 }
                                },
                                hover: {
                                    y: -10, scale: 1.02, rotateY: 5,
                                    transition: { type: 'spring', damping: 20, stiffness: 300 }
                                }
                            }}
                            className="max-w-sm w-full mx-auto cursor-pointer h-full"
                            style={{ perspective: '1000px' }}
                        >
                            <div className="animated-gradient-border rounded-2xl p-[6px] h-full">
                                <motion.div
                                    className="bg-base-100 p-4 md:p-6 rounded-[0.9rem] h-full relative overflow-hidden min-h-[500px] flex flex-col justify-between"
                                    whileHover={{ boxShadow: '0 20px 40px rgba(218, 165, 32, 0.15)' }}
                                >
                                    {/* Animated light sweep */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full"
                                        whileHover={{
                                            translateX: '200%',
                                            transition: { duration: 0.6, ease: 'easeInOut' }
                                        }}
                                    />

                                    {/* Image */}
                                    <motion.img
                                        src={achievement.image}
                                        alt={achievement.title}
                                        className="h-[200px] w-full rounded-xl mb-4 object-cover border border-secondary shadow-lg"
                                        whileHover={{
                                            scale: 1.05, brightness: 1.1,
                                            transition: { duration: 0.3 }
                                        }}
                                    />

                                    {/* Title */}
                                    <motion.h3
                                        className="text-xl font-bold text-neutral mb-2 group-hover:text-primary transition-colors duration-300"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        {achievement.title}
                                    </motion.h3>

                                    {/* Year & Platform */}
                                    <motion.div
                                        className="flex items-center gap-2 mb-2"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <motion.span
                                            className="text-secondary font-medium"
                                            whileHover={{ scale: 1.1, color: '#DAA520' }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {achievement.year}
                                        </motion.span>
                                        <span className="text-base-content/70 text-sm">
                                            • {achievement.Platform}
                                        </span>
                                    </motion.div>

                                    {/* Summary */}
                                    <motion.p
                                        className="text-base text-neutral text-justify leading-relaxed font-[500]"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        {achievement.ShortSummary}
                                    </motion.p>

                                    {/* Certified Badge */}
                                    <motion.div
                                        className="absolute top-4 right-4 bg-primary/60 text-neutral px-3 py-1 rounded-full text-xs font-semibold"
                                        initial={{ opacity: 0, scale: 0, rotate: -45 }}
                                        whileInView={{
                                            opacity: 1, scale: 1, rotate: 0,
                                            transition: {
                                                delay: index * 0.2 + 0.6,
                                                duration: 0.5,
                                                type: 'spring',
                                                damping: 15
                                            }
                                        }}
                                        whileHover={{
                                            scale: 1.1, rotate: 5,
                                            backgroundColor: 'rgba(218, 165, 32, 0.2)'
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <FaAward className="inline mr-1" />
                                        Certified
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;