import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload, FaArrowRight, FaCode, FaRocket, FaHeart } from 'react-icons/fa';
import Button from '../../Components/Buttons/Button';
import { SkillCard } from '../../Components/Cards/Card';

const Home = () => {
    const skills = [
        { icon: FaCode, title: 'Frontend', description: 'React, Vue, Angular', level: 90 },
        { icon: FaRocket, title: 'Backend', description: 'Node.js, Python, PHP', level: 85 },
        { icon: FaHeart, title: 'UI/UX', description: 'Figma, Adobe XD', level: 80 }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="hero min-h-screen bg-gradient-to-br from-base-100 to-base-200">
                <div className="hero-content text-center max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        {/* Profile Image */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="avatar mb-8"
                        >
                            <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                <span className="text-4xl">👨‍💻</span>
                            </div>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-5xl md:text-7xl font-bold text-primary grotesk mb-6"
                        >
                            Hi, I'm <span className="text-secondary">Habibur Rahman</span>
                        </motion.h1>

                        {/* Typewriter Effect */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="text-2xl md:text-3xl text-base-content/80 mb-8"
                        >
                            <span className="font-medium">I'm a </span>
                            <span className="text-primary font-bold">
                                <Typewriter
                                    words={[
                                        'Full Stack Developer',
                                        'React Specialist',
                                        'UI/UX Designer',
                                        'Problem Solver'
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto mb-10 leading-relaxed"
                        >
                            Passionate about creating beautiful, functional, and user-centered
                            digital experiences. I combine technical expertise with creative
                            problem-solving to build applications that make a difference.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <Button
                                variant="primary"
                                size="lg"
                                icon={FaArrowRight}
                                iconPosition="right"
                                href="/projects"
                                className="w-full sm:w-auto"
                            >
                                View My Work
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                icon={FaDownload}
                                iconPosition="left"
                                href="/resume.pdf"
                                target="_blank"
                                className="w-full sm:w-auto"
                            >
                                Download Resume
                            </Button>
                        </motion.div>

                        {/* Quick Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            className="stats stats-vertical lg:stats-horizontal shadow mt-16 bg-base-100"
                        >
                            <div className="stat">
                                <div className="stat-value text-primary">3+</div>
                                <div className="stat-desc">Years Experience</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value text-primary">50+</div>
                                <div className="stat-desc">Projects Completed</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value text-primary">20+</div>
                                <div className="stat-desc">Happy Clients</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Preview Section */}
            <section className="py-20 bg-base-100">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary grotesk mb-4">
                            What I Do Best
                        </h2>
                        <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                            I specialize in modern web technologies and create
                            exceptional digital experiences.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <SkillCard {...skill} />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            href="/about"
                            icon={FaArrowRight}
                            iconPosition="right"
                        >
                            Learn More About Me
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;