/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaGraduationCap, FaHeart, FaLightbulb, FaRocket } from 'react-icons/fa';
import Button from '../../Components/Buttons/Button';
import { Link, useLocation } from 'react-router';
import BeyondCode from './BeyondCode';
import Certifications from './Certifications';
import Experience from './Experience';
import Skills from './Skills';
import usePageMeta from '../../Components/Hooks/usePageMeta';

const About = () => {
    usePageMeta({
        title: 'About',
        description: 'Learn about Habibur Rahman Zihad (ZIHAD) — his journey into web development, tech skills, certifications, and what he loves to build.',
        path: '/about',
    });
    const location = useLocation();

    const timeline = [
        {
            year: '2024 - Present (6th Semester)',
            title: 'Computer Communication & Engineering',
            institute: 'International Islamic University Chittagong',
            description: 'Currently pursuing a Bachelor\'s degree in Computer Communication & Engineering, building a foundation across software development, computer systems, databases, algorithms, and communication engineering.',
            icon: FaGraduationCap,
            coursework: {
                software: [
                    'Computer Fundamentals and Programming',
                    'Object Oriented Programming with Java',
                    'Data Structures and Algorithms',
                    'Python Programming',
                    'Database Management Systems',
                    'System Analysis, Design and Development',
                    'Computer Architecture',
                    'Digital Logic Design',
                    'Microprocessor and Assembly Language',
                ],
                communication: [
                    'Basic Communication Engineering',
                    'Basic Communication Engineering Sessional',
                    'Information Theory and Error Correction Coding',
                    'Electromagnetic Fields and Waves',
                ],
            },
        },
        {
            year: '2021',
            title: 'HSC / Alim',
            institute: 'Baitush Sharaf Madrasha',
            description: 'Completed Higher Secondary Certificate (HSC) with a focus on Science.',
            icon: FaGraduationCap
        },
        {
            year: '2019',
            title: 'SSC / Dakhil',
            institute: 'Baitush Sharaf Madrasha',
            description: 'Completed Secondary School Certificate (SSC) with a focus on Science.',
            icon: FaGraduationCap
        }
    ];

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section - Details */}
            <section id="details" className="pb-20 pt-10 md:pt-14 lg:pt-20 bg-gradient-to-br from-base-100 to-base-200 relative overflow-hidden">
                <div className="absolute inset-0 gradient-mesh"></div>
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="max-w-7xl mx-auto px-4 text-start relative z-10">
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
                                Hi, I'm Habibur Rahman — most people just call me <span className="font-semibold text-primary">'ZIHAD'</span>. I'm a Full Stack Developer who works across frontend and backend, and I like understanding how the different parts of an application actually fit together.
                            </p>
                            <p className="text-base sm:text-lg text-base-content/60 mb-8 leading-relaxed">
                                I started out building websites and gradually ended up working across the whole stack. These days that means building interfaces, designing APIs, working with databases, and more recently, AI-powered features and RAG-based systems. I'm especially drawn to the backend side — figuring out how a system works underneath, tracing down bugs, and getting the pieces to talk to each other reliably.
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
                                    src='https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113496/photo2_shl6f1.jpg'
                                    alt="Habibur Rahman — Web Developer"
                                    className="object-cover w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-[400px] rounded-md transition-transform duration-300 hover:scale-105"
                                />
                                {/* Optional glowing orb */}
                                <div className="absolute -z-10 top-[-20px] right-[-20px] w-28 h-28 bg-primary/30 rounded-full blur-2xl"></div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Professional Experience Section */}
            <div id="experience">
                <Experience></Experience>
            </div>

            {/* Skills Section */}
            <div id="tech-skills">
                <Skills></Skills>
            </div>

            {/* My Education Section - Learning Journey */}
            <section id="learning-journey" className="py-20 bg-base-200">
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
                            Academic foundations in software engineering, computer systems, and communication engineering.
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

                                        {item.coursework && (
                                            <div className="mt-4 pt-4 border-t border-base-300 space-y-3 text-left">
                                                <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50">
                                                    Relevant Coursework
                                                </p>
                                                <div>
                                                    <p className="text-xs font-semibold text-secondary mb-1.5">
                                                        Software & Computer Science
                                                    </p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {item.coursework.software.map((course) => (
                                                            <span
                                                                key={course}
                                                                className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                                                            >
                                                                {course}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold text-secondary mb-1.5">
                                                        Communication & Networking Foundations
                                                    </p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {item.coursework.communication.map((course) => (
                                                            <span
                                                                key={course}
                                                                className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                                                            >
                                                                {course}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0 animate-ping-once" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Life in Code - How I Start */}
            <section id="how-start" className="py-20 bg-base-100 border-t border-base-300">
                <motion.div
                    className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                            <FaLightbulb className="text-4xl" /> How It Started
                        </h2>
                        <p className="mt-6 text-lg text-base-content/70 leading-relaxed">
                            I started with web development — figuring out how websites are built and how the frontend connects to the backend. As I took on more projects, I got more interested in what happens behind the interface: APIs, databases, authentication, and the architecture that keeps an application running.
                            That interest gradually pulled me from building individual features into working across full-stack applications, and eventually into backend-heavy systems and AI-powered functionality. Working on real products — like JobBridge BD and EcomUp AI — has been the biggest part of that shift, since it's where I actually had to make these pieces work together in production, not just in a tutorial.
                        </p>
                    </div>
                    <motion.div
                        className="bg-base-200 rounded-xl shadow-lg p-8 text-center"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 120 }}
                    >
                        <p className="text-lg text-base-content/80">
                            "I've learned the most by building things, breaking them, and figuring out why they broke."
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Work I Love - What I Love to Build */}
            <section id="what-love" className="py-20 bg-base-100 border-t border-base-300">
                <motion.div
                    className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
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
                            I enjoy building applications where the frontend is only one part of the system — APIs, databases, authentication, background processing, and increasingly AI-powered features are what keep me interested.
                            I like understanding how those pieces connect and making them work together reliably, rather than just getting something to look right on screen.
                        </p>
                    </motion.div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                            <FaRocket className="text-4xl" /> What I Love to Build
                        </h2>
                        <p className="mt-6 text-lg text-base-content/70 leading-relaxed">
                            Full-stack applications are where I'm most comfortable, especially when there's an interesting backend problem to solve.
                            Lately, that's included working with AI integrations and RAG, which has gotten me more interested in building systems where backend logic and AI actually work together.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Beyond Code */}
            <BeyondCode></BeyondCode>

            {/* Certifications Section */}
            <div id="certifications">
                <Certifications></Certifications>
            </div>
        </div>
    );
};

export default About;