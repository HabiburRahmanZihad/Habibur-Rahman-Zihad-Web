import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaHeart, FaArrowRight } from 'react-icons/fa';
import Button from '../../Components/Buttons/Button';
import PhotoContest from '../../assets/AllPic/Certificate/PhotoContest.jpg';
import CyberSecurity from '../../assets/AllPic/Certificate/cyber.jpg';
import facebookMarketing from '../../assets/AllPic/Certificate/10.jpg';
import profileImage from '../../assets/MinePic/photo2.jpg';
import { Link, useLocation } from 'react-router';

const About = () => {
    const location = useLocation(); // ✅ for key to reset animations

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

    const skills = [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'React', level: 90 },
        { name: 'MongoDB', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'Next.js', level: 70 },
    ];

    const achievements = [
        { image: CyberSecurity, title: 'Cyber Security & Ethical Hacking', year: '2021', Platform: 'Ghoori Learning', ShortSummary: 'Completed a comprehensive course on Cyber Security and Ethical Hacking, gaining skills in protecting systems and networks.' },
        { image: PhotoContest, title: 'Fundamentals rules of PhotoGraphy', year: '2024', Platform: 'IIUCPS', ShortSummary: 'Participated in a photography contest and won recognition for outstanding skills.' },
        { image: facebookMarketing, title: 'Facebook Marketing', year: '2021', Platform: '10 Minute School', ShortSummary: 'Completed a course on Facebook Marketing, learning strategies for effective social media advertising.' }
    ];

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <section className="pb-20 pt-10 md:pt-14 lg:pt-20 bg-gradient-to-br from-base-100 to-base-200">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        key={location.pathname} // ✅ triggers animation reset on route change
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
                                    src={profileImage}
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
                            A glimpse at the tech stack that powers my projects.
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

            {/* Work I Love */}
            <section className="py-20 bg-base-200 border-t border-base-300">
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

            {/* Beyond Tech */}
            <section className="py-20 bg-base-100 border-t border-base-300">
                <motion.div
                    className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                            <span className="text-4xl">🌍</span> Beyond the Code
                        </h2>
                        <p className="mt-6 text-lg text-base-content/70 leading-relaxed">
                            Life isn't just about code — and I wouldn't have it any other way. I'm someone who believes that the best ideas often come from outside the screen.
                            Whether I'm out exploring new places, snapping photos, sharing what I've learned with others, or diving into a plate of biriyani, I try to bring curiosity and creativity into everything I do.
                        </p>
                    </div>

                    <motion.div
                        className="bg-base-200 rounded-xl p-8 shadow-md"
                        whileHover={{ scale: 1.02 }}
                    >
                        <ul className="list-disc pl-5 text-base-content/70 space-y-3 text-lg">
                            <li>✈️ I love to travel — discovering new cultures helps me think with a broader perspective</li>
                            <li>📚 Lifelong learner — I'm always exploring new tech, ideas, and skills</li>
                            <li>🎓 Teaching and mentoring gives me joy — I believe knowledge grows when it's shared</li>
                            <li>📸 Photography is my creative outlet — especially candid, everyday moments</li>
                            <li>🍛 Big fan of biriyani — enough said.</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </section>

            {/* Certifications Section */}
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
        </div>
    );
};

export default About;