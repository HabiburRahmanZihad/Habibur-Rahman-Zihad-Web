/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaArrowRight, FaCloud, FaCode, FaDatabase, FaEye, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { Link, useLocation } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';
import Button from '../../Components/Buttons/Button';
import { SkillCard } from '../../Components/Cards/Card';
import usePageMeta from '../../Components/Hooks/usePageMeta';
import { personalIdentity } from '../../config/identity';
import GitHubStats from './GitHubStats';

const socialLinks = [
    { icon: FaLinkedin, name: 'LinkedIn', url: personalIdentity.socialProfiles.linkedin },
    { icon: FaGithub, name: 'GitHub', url: personalIdentity.socialProfiles.github },
    { icon: FaTwitter, name: 'Twitter', url: personalIdentity.socialProfiles.twitter },
    { icon: FaFacebook, name: 'Facebook', url: personalIdentity.socialProfiles.facebook },
];

const Home = () => {
    const location = useLocation();

    usePageMeta({
        title: 'Habibur Rahman Zihad | Full-Stack Software Engineer',
        description: 'Habibur Rahman Zihad (ZIHAD) is a Full-Stack Software Engineer from Chattogram, Bangladesh, working across web development, backend engineering, AI-powered applications, and RAG systems.',
        path: '/',
    });

    const skills = [
        {
            icon: FaCode,
            title: 'Frontend Development',
            description: 'Building responsive, high-performance UIs with modern frameworks and clean code.',
            tags: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
            level: 95,
        },
        {
            icon: FaDatabase,
            title: 'Backend & Programming',
            description: 'Designing robust server-side systems, RESTful APIs, scalable databases, and writing performant code across multiple languages.',
            tags: ['Node.js', 'Express.js', 'Python', 'C', 'C++', 'MongoDB', 'Mongoose', 'REST API', 'PostgreSQL', 'MySQL', 'Prisma', 'Firebase', 'RAG'],
            level: 96,
        },
        {
            icon: FaCloud,
            title: 'DevOps, Cloud & Deployment',
            description: 'Streamlining workflows with containerisation, CI/CD pipelines, reverse proxies, and self-hosted Linux servers.',
            tags: ['Git & GitHub', 'Docker', 'Nginx', 'CI/CD', 'VPS', 'Vercel', 'Netlify', 'AWS'],
            level: 98,
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-base-100 to-base-200 py-8 lg:py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        key={location.pathname} // triggers animation reset on route change
                        className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:justify-between"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Left Text */}
                        <div className="text-center lg:text-left max-w-2xl w-full">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6"
                            >
                                <HiSparkles /> Welcome to my portfolio
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold grotesk mb-4"
                            >
                                <span className="text-primary">Hello, I'm</span>{' '}
                                <span className="gradient-text glow-text text-primary">Habibur Rahman Zihad</span>
                            </motion.h1>

                            {/* Static, always-crawlable role text — not dependent on the typewriter below */}
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3"
                            >
                                Full-Stack Software Engineer
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="text-lg sm:text-xl md:text-2xl text-base-content/70 mb-6"
                            >
                                <span className="font-medium">Also working as a </span>
                                <span className="text-primary font-semibold">
                                    <Typewriter
                                        words={[
                                            'Software Engineer',
                                            'Full-Stack Web Developer',
                                            'MERN & PERN Stack Specialist',
                                            'Backend-Focused Engineer',
                                            'AI / RAG Application Developer',
                                            'API & Backend Developer',
                                            'Database-Driven Developer',
                                            'DevOps & Deployment Enthusiast'
                                        ]}
                                        loop={0}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={80}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="text-base md:text-lg text-base-content/70 mb-10 leading-relaxed glass-card p-4 rounded-xl"
                            >
                                "I blend logic and creativity to build web apps that work like machines and feel like magic."
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <Link to="/projects">
                                    <Button variant="primary" size="lg" icon={FaArrowRight} iconPosition="right" className="btn w-full sm:w-auto btn-premium glow">
                                        View My Work
                                    </Button>
                                </Link>

                                <Link to="https://drive.google.com/file/d/1TKPZAnAjxViLJXyEuM6TEK6MAzXf8IOi/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" size="lg" icon={FaEye} iconPosition="left" className="btn w-full sm:w-auto border-gradient">
                                        View Resume
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Profile Image */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 100 }}
                            className="flex justify-center w-full"
                        >
                            <div className="text-center">
                                <div
                                    className="w-48 h-48 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden shadow-lg mx-auto"
                                    style={{
                                        boxShadow: '0 0 20px 5px var(--tw-ring-color)',
                                    }}
                                >
                                    <img
                                        src={personalIdentity.images[0]}
                                        alt="Habibur Rahman Zihad, Full-Stack Software Engineer"
                                        fetchPriority="high"
                                        width={400}
                                        height={400}
                                        className="w-full object-cover"
                                    />
                                </div>

                                {/* Social Links */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    className="flex flex-wrap justify-center gap-3 mt-6"
                                >
                                    {socialLinks.map((social, index) => {
                                        const Icon = social.icon;
                                        return (
                                            <motion.a
                                                key={index}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-lg bg-primary text-primary-content shadow-md hover:shadow-lg hover:shadow-primary/40 transition-all duration-300"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                aria-label={social.name}
                                            >
                                                <Icon className="text-2xl" />
                                            </motion.a>
                                        );
                                    })}
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-base-100">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                            Expertise
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary grotesk mb-4">What I Do Best</h2>
                        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                            As a Full-Stack Software Engineer, I build production-grade web apps end-to-end — crafting clean frontends, resilient backends, and shipping them through solid DevOps workflows.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                        {skills.map((skill, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                    delay: idx * 0.18,
                                    duration: 0.6,
                                    type: 'spring',
                                    stiffness: 120,
                                    damping: 15,
                                }}
                                className="h-full"
                            >
                                <SkillCard {...skill} />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-center mt-14"
                    >
                        <Link to="/about">
                            <Button variant="primary" size="lg" icon={FaArrowRight} iconPosition="right">
                                Learn More About Me
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>


            <GitHubStats />
        </div>
    );
};

export default Home;