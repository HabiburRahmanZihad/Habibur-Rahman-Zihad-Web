import { motion } from 'framer-motion';
import { FaGraduationCap, FaHeart } from 'react-icons/fa';
import Button from '../../Components/Buttons/Button';

import profileImage from '../../assets/MinePic/photo2.jpg';
import { Link, useLocation } from 'react-router';
import BeyondCode from './BeyondCode';
import Certifications from './Certifications';
import Skills from './Skills';
import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        document.title = 'About | Habibur Rahman Zihad';
    }, []);
    const location = useLocation();

    const timeline = [
        {
            year: '2024 - Present',
            title: 'Computer Communication & Engineering',
            institute: 'International Islamic University Chittagong',
            description: 'Currently pursuing a Bachelor\'s degree in Computer Communication & Engineering, focusing on software development and network systems.',
            icon: FaGraduationCap
        },
        {
            year: '2021',
            title: 'HSC / Alim',
            institute: 'Baitush Sharaf Madrasha',
            description: 'Completed Higher Secondary Certificate (HSC) with a focus on Science.',
            icon: FaGraduationCap
        }
    ];

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <section className="pb-20 pt-10 md:pt-14 lg:pt-20 bg-gradient-to-br from-base-100 to-base-200">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        key={location.pathname}
                        className="flex flex-col-reverse lg:flex-row gap-12 items-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary grotesk mb-6">
                                About Me
                            </h1>
                            <p className="text-lg sm:text-xl text-base-content/70 mb-6 leading-relaxed">
                                Hi, I'm Habibur Rahman — but most people know me as <span className="font-semibold text-primary">'ZIHAD'</span>. I'm a passionate and curious web developer who's been learning and building for about a year now.
                            </p>
                            <p className="text-base sm:text-lg text-base-content/60 mb-8 leading-relaxed">
                                My journey into web development started with a simple question: "How does the internet work?" Since then, I've been diving into front-end and back-end development, creating projects that help me learn and grow. I love solving problems, experimenting with new technologies, and turning ideas into functional, user-friendly websites.
                            </p>
                            <Link to="/contact">
                                <Button variant="primary" size="lg" icon={FaHeart} iconPosition="right">
                                    Let's Collaborate
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Image with animation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.8, delay: 0.4 }}
                            className="w-full lg:w-1/2 flex justify-center"
                        >
                            <div className="relative rounded-xl overflow-hidden border-4 border-primary/30 shadow-[0_10px_40px_-10px] shadow-primary animate-wowPulse">
                                <img
                                    // src={profileImage}
                                    src='https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113496/photo2_shl6f1.jpg'
                                    alt="Habibur Rahman — Web Developer"
                                    className="object-cover w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-[400px] rounded-xl transition-transform duration-300 hover:scale-105"
                                />
                                {/* Optional glowing orb */}
                                <div className="absolute -z-10 top-[-20px] right-[-20px] w-28 h-28 bg-primary/30 rounded-full blur-2xl"></div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <Skills></Skills>

            {/* My Education Section */}
            <section className="py-20 bg-base-200">
                <div className="max-w-4xl mx-auto px-4">
                    {/* Heading Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary grotesk mb-4 animate-glow">
                            My Learning Journey
                        </h2>
                        <p className="text-xl text-base-content/70">
                            Highlights of the milestones that shaped my education.
                        </p>
                    </motion.div>

                    {/* Timeline Items */}
                    <div className="space-y-8">
                        {timeline.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, rotateY: 90 }}
                                    whileInView={{ opacity: 1, rotateY: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                        }`}
                                >
                                    {/* Content Box */}
                                    <div className="flex-1 bg-base-100 p-6 rounded-xl shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl">
                                        <div className="flex items-center gap-3 mb-3">
                                            <IconComponent className="text-primary text-2xl animate-pop" />
                                            <span className="badge badge-primary text-black">{item.year}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                        <p className="text-secondary font-medium mb-2">{item.institute}</p>
                                        <p className="text-base-content/70">{item.description}</p>
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0 animate-ping-once" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Life in Code */}
            <section className="py-20 bg-base-100 border-t border-base-300">
                <motion.div
                    className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                            <span className="text-4xl">💡</span> How It Started
                        </h2>
                        <p className="mt-6 text-lg text-base-content/70 leading-relaxed">
                            My programming journey began out of simple curiosity. I remember opening up a basic HTML file just to see what would happen if I changed a line of code.
                            That tiny spark quickly grew into something bigger — I started watching tutorials, building little websites, and experimenting late into the night.
                            What started as a hobby turned into a passion, and now I'm focused on building full-stack applications that are clean, useful, and user-friendly.
                        </p>
                    </div>
                    <motion.div
                        className="bg-base-200 rounded-xl shadow-lg p-8 text-center"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 120 }}
                    >
                        <p className="text-lg text-base-content/80">
                            "Most developers start by being curious. The difference is — some of us just never stop being curious."
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Beyond Tech */}
            <BeyondCode></BeyondCode>

            {/* Work I Love */}
            <section className="py-20 bg-base-100 border-t border-base-300">
                <motion.div
                    className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="order-2 lg:order-1 bg-base-100 rounded-xl shadow-md p-6"
                        whileHover={{ scale: 1.02 }}
                    >
                        <p className="text-base-content/70 text-lg leading-relaxed">
                            I get excited about projects where I can take an idea and turn it into something real — especially if it helps people or solves a specific problem.
                            I enjoy crafting smooth, responsive interfaces that just make sense, and I love the behind-the-scenes logic that makes everything run reliably.
                            Clean code, clear design, and useful outcomes — that's what I aim for in every project.
                        </p>
                    </motion.div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                            <span className="text-4xl">🚀</span> What I Love to Build
                        </h2>
                        <p className="mt-6 text-lg text-base-content/70 leading-relaxed">
                            I feel most in my element when working on full-stack apps — especially ones that challenge me to blend great UX with smart backend logic.
                            Working with collaborative teams, or on projects with real impact, is where I thrive.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Certifications Section */}
            <Certifications></Certifications>
        </div>
    );
};

export default About;