import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaArrowRight, FaCode, FaRocket, FaHeart, FaEye } from 'react-icons/fa';
import Button from '../../Components/Buttons/Button';
import { SkillCard } from '../../Components/Cards/Card';
import profileImage from '../../assets/MinePic/mainphoto.jpg';
import { Link, useLocation } from 'react-router';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

const socialLinks = [
    { icon: FaLinkedin, name: 'LinkedIn', url: 'https://linkedin.com/in/habiburrahmanzihad' },
    { icon: FaGithub, name: 'GitHub', url: 'https://github.com/HabiburRahmanZihad' },
    { icon: FaTwitter, name: 'Twitter', url: 'https://x.com/xihad_xihad' },
    { icon: FaFacebook, name: 'Facebook', url: 'https://www.facebook.com/habiburrahmanzihad.zihad' },
];

const Home = () => {
    const location = useLocation(); // ✅ for key

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
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary grotesk mb-6"
                            >
                                Hello, I’m <span className="text-secondary">Habibur Rahman</span>
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
                                className="text-base md:text-lg text-base-content/70 mb-10 leading-relaxed"
                            >
                                “I blend logic and creativity to build web apps that work like machines and feel like magic.”
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <Link to="/projects">
                                    <Button variant="primary" size="lg" icon={FaArrowRight} iconPosition="right" className="btn w-full sm:w-auto">
                                        View My Work
                                    </Button>
                                </Link>

                                <Link to="https://drive.google.com/file/d/1hPsE9UOpTrl7TBTZbNetXxYqlJDnlmpy/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" size="lg" icon={FaEye} iconPosition="left" className="btn w-full sm:w-auto">
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
                                    <img src={profileImage} alt="Profile" className="w-full  object-cover" />
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
                <div className="max-w-6xl mx-auto px-4">
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
                                className="transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
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
        </div>
    );
};

export default Home;