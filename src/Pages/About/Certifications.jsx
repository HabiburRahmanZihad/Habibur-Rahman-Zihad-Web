/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaTimes, FaExpand } from 'react-icons/fa';
import L2PgHeroCertificate from '../../assets/AllPic/Certificate/zihad-programming-hero-next-level-ai-bootcamp-certificate.jpeg';



const achievements = [
    { image: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1787729499/success_poster_v3glym.jpg', title: 'Full-Time Junior Software Developer', year: '2026', Platform: 'Digital Aid IT', ShortSummary: 'Successfully started my professional journey as a Junior Software Developer at Digital Aid IT. This achievement represents my dedication, continuous learning, and growth in software development. Grateful to Programming Hero and Jhankar Mahbub Sir for their guidance and support throughout my learning journey.' },
    { image: L2PgHeroCertificate, title: 'Next Level AI-Driven Software Engineering Bootcamp', year: '2026', Platform: 'Programming Hero', ShortSummary: 'Successfully completed the Next Level AI-Driven Software Engineering Bootcamp by Programming Hero, gaining exposure to modern software engineering, full-stack development, cloud technologies, and AI integration for building scalable, production-ready software solutions.' },
    { image: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113803/pg-hero-certificate_vbiln3.png', title: 'Complete Web Development Course', year: '2025', Platform: 'Programming Hero', ShortSummary: 'Successfully completed the Complete Web Development Course with Excellence, mastering HTML, CSS, JavaScript, React, and real-world projects.' },
    { image: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1761200347/1761192742415_us33xu.jpg', title: 'Black Belt in Web Development', year: '2025', Platform: 'Programming Hero', ShortSummary: 'Earned the prestigious Black Belt from Programming Hero for outstanding performance and dedication throughout the Complete Web Development course, showcasing excellence in coding, projects, and problem-solving.' },
    { image: 'https://res.cloudinary.com/dvq3pcykn/image/upload/Screenshot_2026-01-18_190755_ypah1h.png', title: 'Smart Money Skills for Life', year: '2026', Platform: 'Passport to Earning Bangladesh (UNICEF)', ShortSummary: 'Successfully completed the Smart Money Skills for Life course by Passport to Earning Bangladesh in collaboration with UNICEF, gaining essential financial literacy skills including budgeting, saving, smart spending, and responsible money management.' },
    { image: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113802/CCe-Contest_ilts7n.jpg', title: 'CCE Inter Semester Programming Contest-3', year: '2025', Platform: 'CCE Club, IIUC', ShortSummary: 'Participated in the CCE Inter Semester Programming Contest-3, enhancing problem-solving skills and coding expertise through competitive programming.' },
    { image: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113803/COMMUNICATIONHACKS_atpsfd.png', title: 'Communication Hacks', year: '2025', Platform: '10 Minute School', ShortSummary: 'Completed a course on communication strategies and techniques.' },
    { image: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113804/PhotoContest_lteajz.jpg', title: 'Fundamentals rules of PhotoGraphy', year: '2024', Platform: 'IIUCPS', ShortSummary: 'Participated in a photography contest and won recognition for outstanding skills.' },
    { image: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113810/Presentation_PublicSpeaking_s5zyxp.png', title: 'Presentation & Public Speaking', year: '2023', Platform: '10 Minute School', ShortSummary: 'Completed a comprehensive course on Presentation & Public Speaking, gaining skills in effective communication and audience engagement.' },
    { image: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113802/cyber_xxgrcu.jpg', title: 'Cyber Security & Ethical Hacking', year: '2021', Platform: 'Ghoori Learning', ShortSummary: 'Completed a comprehensive course on Cyber Security and Ethical Hacking, gaining skills in protecting systems and networks.' },
    { image: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113802/10_qcmdsy.jpg', title: 'Facebook Marketing', year: '2021', Platform: '10 Minute School', ShortSummary: 'Completed a course on Facebook Marketing, learning strategies for effective social media advertising.' },
    { image: 'https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113803/EMAIL_WRITING_tasy7q.png', title: 'Email Writing', year: '2025', Platform: '10 Minute School', ShortSummary: 'Completed a course on Email Writing, mastering the art of professional communication through email.' }
];

const Certifications = () => {
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    useEffect(() => {
        if (selectedAchievement) {
            document.documentElement.classList.add('no-custom-cursor');
        } else {
            document.documentElement.classList.remove('no-custom-cursor');
        }
        return () => document.documentElement.classList.remove('no-custom-cursor');
    }, [selectedAchievement]);

    return (
        <section className="py-20 bg-base-200">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary grotesk mb-4">
                        Certifications & Achievements
                    </h2>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                        Certifications, courses, and achievements that mark my learning and professional growth.
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

                                    {/* Image Container with Hover Icon */}
                                    <div className="relative group/img overflow-hidden rounded-xl mb-4 h-[200px]">
                                        <motion.img
                                            src={achievement.image}
                                            alt={`Habibur Rahman Zihad — ${achievement.title} certificate from ${achievement.Platform}`}
                                            loading="lazy"
                                            className="h-full w-full object-cover border border-secondary shadow-lg cursor-zoom-in"
                                            whileHover={{
                                                scale: 1.05, brightness: 1.1,
                                                transition: { duration: 0.3 }
                                            }}
                                            onClick={() => setSelectedAchievement(achievement)}
                                        />
                                        <motion.div
                                            className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover/img:opacity-100 transition-all duration-500 pointer-events-none"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                className="flex flex-col items-center gap-2"
                                            >
                                                <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30 text-primary">
                                                    <FaExpand className="text-xl" />
                                                </div>
                                                <span className="text-white text-sm font-bold tracking-widest uppercase">View Certificate</span>
                                            </motion.div>
                                        </motion.div>
                                    </div>

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

            {/* Full Screen Image Modal */}
            <AnimatePresence>
                {selectedAchievement && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/98 backdrop-blur-sm p-4 md:p-8 cursor-default"
                        onClick={() => setSelectedAchievement(null)}
                    >
                        <motion.button
                            className="absolute top-6 right-6 text-white text-3xl hover:text-primary transition-colors z-[110]"
                            onClick={() => setSelectedAchievement(null)}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaTimes />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedAchievement.image}
                                alt={`Habibur Rahman Zihad — ${selectedAchievement.title} certificate from ${selectedAchievement.Platform}`}
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;