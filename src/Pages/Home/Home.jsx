import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaArrowRight, FaCode, FaRocket, FaHeart, FaEye, FaFire, FaStar } from 'react-icons/fa';
import { HiOutlineCubeTransparent, HiOutlineChartBar, HiOutlineFire } from 'react-icons/hi';
import Button from '../../Components/Buttons/Button';
import { SkillCard } from '../../Components/Cards/Card';
import { Link, useLocation } from 'react-router';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';

// Animated counter component for smooth number animation
const AnimatedCounter = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let start = 0;
                    const end = value;
                    const increment = end / (duration / 16);
                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [value, duration, hasAnimated]);

    return <span ref={countRef}>{count.toLocaleString()}</span>;
};

const socialLinks = [
    { icon: FaLinkedin, name: 'LinkedIn', url: 'https://linkedin.com/in/habiburrahmanzihad' },
    { icon: FaGithub, name: 'GitHub', url: 'https://github.com/HabiburRahmanZihad' },
    { icon: FaTwitter, name: 'Twitter', url: 'https://x.com/xihad_xihad' },
    { icon: FaFacebook, name: 'Facebook', url: 'https://www.facebook.com/habiburrahmanzihad.zihad' },
];

const Home = () => {
    const location = useLocation();
    const [githubStats, setGithubStats] = useState([
        { label: 'Repositories', value: 0, suffix: '+', icon: HiOutlineCubeTransparent, color: 'text-blue-500' },
        { label: 'Total Stars', value: 0, suffix: '', icon: FaStar, color: 'text-yellow-500' },
        { label: 'Contributions', value: 0, suffix: '+', icon: HiOutlineChartBar, color: 'text-green-500' },
        { label: 'Longest Streak', value: 0, suffix: ' days', icon: HiOutlineFire, color: 'text-orange-500' },
    ]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.title = 'Home | Habibur Rahman Zihad';

        // Fetch real GitHub stats
        const fetchGitHubStats = async () => {
            try {
                // Fetch user data and repos in parallel
                const [userRes, reposRes] = await Promise.all([
                    fetch('https://api.github.com/users/HabiburRahmanZihad'),
                    fetch('https://api.github.com/users/HabiburRahmanZihad/repos?per_page=100')
                ]);

                const userData = await userRes.json();
                const reposData = await reposRes.json();

                // Calculate total stars across all repos
                const totalStars = reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);

                setGithubStats([
                    { label: 'Repositories', value: userData.public_repos || 93, suffix: '+', icon: HiOutlineCubeTransparent, color: 'text-blue-500' },
                    { label: 'Total Stars', value: totalStars || 7, suffix: '', icon: FaStar, color: 'text-yellow-500' },
                    { label: 'Contributions', value: 2094, suffix: '+', icon: HiOutlineChartBar, color: 'text-green-500' },
                    { label: 'Longest Streak', value: 45, suffix: ' days', icon: HiOutlineFire, color: 'text-orange-500' },
                ]);
            } catch (error) {
                console.error('Error fetching GitHub stats:', error);
                // Fallback to known values if API fails
                setGithubStats([
                    { label: 'Repositories', value: 93, suffix: '+', icon: HiOutlineCubeTransparent, color: 'text-blue-500' },
                    { label: 'Total Stars', value: 7, suffix: '', icon: FaStar, color: 'text-yellow-500' },
                    { label: 'Contributions', value: 2094, suffix: '+', icon: HiOutlineChartBar, color: 'text-green-500' },
                    { label: 'Longest Streak', value: 45, suffix: ' days', icon: HiOutlineFire, color: 'text-orange-500' },
                ]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGitHubStats();
    }, []);


    const skills = [
        { icon: FaCode, title: 'Frontend Development', description: 'React • Vue • Tailwind CSS', level: 92 },
        { icon: FaRocket, title: 'Backend Development', description: 'Node.js • Express • MongoDB', level: 88 },
        { icon: FaHeart, title: 'UI/UX Design', description: 'Figma • Adobe XD • Canva', level: 85 },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-base-100 to-base-200 py-8 lg:py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        key={location.pathname} // ✅ triggers animation reset
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
                                className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6"
                            >
                                ✨ Welcome to my portfolio
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold grotesk mb-6"
                            >
                                <span className="text-primary">Hello, I'm</span>{' '}
                                <span className="gradient-text glow-text text-primary">Habibur Rahman</span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="text-xl sm:text-2xl md:text-3xl text-base-content/80 mb-6"
                            >
                                <span className="font-medium">Passionate </span>
                                <span className="text-primary font-bold">
                                    <Typewriter
                                        words={[
                                            'MERN Stack Developer',
                                            'Creative UI/UX Designer',
                                            'Problem Solver at heart'
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

                                <Link to="https://drive.google.com/file/d/1sOZMoUF9WEzITXZadlfNlYvSajeJ7AkL/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
                                    {/* <img src={profileImage} alt="Profile" className="w-full  object-cover" /> */}
                                    <img src='https://res.cloudinary.com/dvq3pcykn/image/upload/v1758785330/IMG-20241101-WA0192_vyojiv.jpg' alt="Profile" className="w-full  object-cover" />
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
                                                className="p-3 rounded-lg bg-primary text-white hover:bg-base-200 hover:text-secondary transition-all duration-300"
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
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary grotesk mb-4">What I Do Best</h2>
                        <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                            I work with modern web stacks, crafting top‑tier frontend, backend, and design solutions that delight users and scale with purpose.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {skills.map((skill, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }} // ✅ changed from whileInView
                                transition={{
                                    delay: idx * 0.2,
                                    duration: 0.6,
                                    type: 'spring',
                                    stiffness: 120,
                                    damping: 15,
                                }}
                                className="transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl border border-glow rounded-2xl "
                            >
                                <SkillCard {...skill} />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }} // ✅ changed from whileInView
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-center mt-12"
                    >
                        <Link to="/about">
                            <Button variant="primary" size="lg" icon={FaArrowRight} iconPosition="right">
                                Learn More About Me
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>


            {/* GitHub Stats */}
            <section className="py-20 bg-base-100 relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
                        >
                            <FaFire className="animate-pulse" />
                            Live from GitHub API
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold grotesk mb-4 flex items-center justify-center gap-3"
                        >
                            <HiOutlineChartBar className="text-primary" />
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">GitHub Statistics</span>
                        </motion.h2>
                        <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                            Real metrics from my coding journey — fetched live from GitHub
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {githubStats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.5, type: 'spring' }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="glass-card rounded-2xl p-6 text-center hover-lift border border-primary/20 group cursor-default relative overflow-hidden"
                            >
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10">
                                    <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-base-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                                        <stat.icon className="text-2xl" />
                                    </div>
                                    <div className="text-4xl md:text-5xl font-bold text-primary grotesk mb-2">
                                        {isLoading ? (
                                            <span className="inline-block w-16 h-10 bg-primary/20 rounded animate-pulse"></span>
                                        ) : (
                                            <>
                                                <AnimatedCounter value={stat.value} />
                                                <span>{stat.suffix}</span>
                                            </>
                                        )}
                                    </div>
                                    <p className="text-base-content/70 font-medium text-sm uppercase tracking-wider">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-center mt-10"
                    >
                        <Link to="https://github.com/HabiburRahmanZihad" target="_blank">
                            <Button variant="outline" size="lg" icon={FaGithub} iconPosition="left" className="border-gradient group">
                                <span className="group-hover:mr-2 transition-all">View GitHub Profile</span>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;