import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaAward, FaHeart } from 'react-icons/fa';
import Button from '../../Components/Buttons/Button';

const About = () => {
    const timeline = [
        {
            year: '2024',
            title: 'Senior Full Stack Developer',
            company: 'Tech Solutions Inc.',
            description: 'Leading development teams and architecting scalable web applications.',
            icon: FaBriefcase
        },
        {
            year: '2022',
            title: 'Full Stack Developer',
            company: 'Digital Agency',
            description: 'Developed responsive web applications using React and Node.js.',
            icon: FaBriefcase
        },
        {
            year: '2021',
            title: 'Computer Science Graduate',
            company: 'University of Technology',
            description: 'Bachelor\'s degree in Computer Science with honors.',
            icon: FaGraduationCap
        },
        {
            year: '2020',
            title: 'Frontend Developer',
            company: 'Startup Company',
            description: 'Started my professional journey building user interfaces.',
            icon: FaBriefcase
        }
    ];

    const skills = [
        { name: 'JavaScript', level: 95 },
        { name: 'React', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'AWS', level: 70 }
    ];

    const achievements = [
        { icon: FaAward, title: 'Best Developer Award', year: '2023' },
        { icon: FaAward, title: 'Innovation Prize', year: '2022' },
        { icon: FaAward, title: 'Top Performer', year: '2021' }
    ];

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-base-100 to-base-200">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-6xl font-bold text-primary grotesk mb-6">
                                About Me
                            </h1>
                            <p className="text-xl text-base-content/70 mb-6 leading-relaxed">
                                I'm a passionate Full Stack Developer with over 3 years of experience
                                creating digital solutions that bridge the gap between design and technology.
                            </p>
                            <p className="text-lg text-base-content/60 mb-8 leading-relaxed">
                                My journey started with a curiosity about how websites work, and it has
                                evolved into a deep passion for creating applications that solve real-world
                                problems. I believe in writing clean, maintainable code and creating
                                user experiences that delight and inspire.
                            </p>
                            <Button
                                variant="primary"
                                size="lg"
                                href="/contact"
                                icon={FaHeart}
                                iconPosition="right"
                            >
                                Let's Work Together
                            </Button>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex justify-center"
                        >
                            <div className="relative">
                                <div className="w-80 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl shadow-2xl flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">👨‍💼</div>
                                        <div className="text-primary font-semibold">About Me</div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                                    <span className="text-white text-2xl font-bold">3+</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
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
                            Technical Skills
                        </h2>
                        <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                            Here are the technologies I work with to bring ideas to life.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-base-200 p-6 rounded-xl"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-lg">{skill.name}</span>
                                    <span className="text-primary font-bold">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-base-300 rounded-full h-3">
                                    <motion.div
                                        className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-base-200">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary grotesk mb-4">
                            My Journey
                        </h2>
                        <p className="text-xl text-base-content/70">
                            The path that led me to where I am today.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {timeline.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                        }`}
                                >
                                    {/* Content */}
                                    <div className="flex-1 bg-base-100 p-6 rounded-xl shadow-lg">
                                        <div className="flex items-center gap-3 mb-3">
                                            <IconComponent className="text-primary text-xl" />
                                            <span className="badge badge-primary">{item.year}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-primary mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-secondary font-medium mb-2">
                                            {item.company}
                                        </p>
                                        <p className="text-base-content/70">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Timeline Connector */}
                                    <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
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
                            Achievements
                        </h2>
                        <p className="text-xl text-base-content/70">
                            Recognition for my work and contributions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {achievements.map((achievement, index) => {
                            const IconComponent = achievement.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="text-center bg-base-200 p-8 rounded-xl"
                                >
                                    <IconComponent className="text-4xl text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-primary mb-2">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-secondary font-medium">
                                        {achievement.year}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;