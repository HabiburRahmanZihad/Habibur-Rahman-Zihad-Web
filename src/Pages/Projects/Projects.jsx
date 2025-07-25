import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import Button from '../../Components/Buttons/Button';
import { Link, useLocation } from 'react-router';
import ReadRackImg from '../../assets/AllPic/Projects/ReadRack.png';
import TazaRate from '../../assets/AllPic/Projects/TazaRate.png';
import SnapTaskerImg from '../../assets/AllPic/Projects/SnapTasker.png';
import JobNestImg from '../../assets/AllPic/Projects/JobNestWeb.png';
import ProjectCard from './ProjectCard';
import { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        document.title = 'Projects | Habibur Rahman Zihad';
    }, []);
    const location = useLocation(); // ✅ new: detect route

    const projects = [
        {
            id: 4,
            title: 'TazaRate',
            description: 'TazaRate is a local market price tracking platform for vendors, admins, and everyday users. It provides live product prices, trend charts, vendor submissions, admin moderation, and ad management — all in one fast and user-friendly web app',
            image: TazaRate,
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Firebase', 'DaisyUI', 'Vite'],
            duration: '12 days',
            liveUrl: 'https://tazarate-web.web.app',
            githubUrl: 'https://github.com/HabiburRahmanZihad/TazaRate',
            youtube_Video: 'https://youtu.be/tRiTHMfSQL4',
        },
        {
            id: 1,
            title: 'ReadRack',
            description: 'Digital library management system with advanced book search, user profiles, authentication, and a review/rating system.',
            image: ReadRackImg,
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Firebase', 'DaisyUI', 'Vite'],
            duration: '8 days',
            liveUrl: 'https://readrack-web.web.app',
            githubUrl: 'https://github.com/HabiburRahmanZihad/ReadRack',
            youtube_Video: 'https://youtu.be/39602JBF34w',
        },
        {
            id: 2,
            title: 'SnapTasker',
            description: 'Task management app with real-time sync, category-based organization, and mobile-responsive UI using Firebase and React.',
            image: SnapTaskerImg,
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Firebase', 'DaisyUI', 'Vite'],
            duration: '1 week',
            liveUrl: 'https://snaptask-web.web.app',
            githubUrl: 'https://github.com/HabiburRahmanZihad/SnapTasker',
            youtube_Video: 'https://youtu.be/j5WxlTvR9pg',
        },
        {
            id: 3,
            title: 'Job Nest Web',
            description: 'A job portal system with advanced search, user profiles, resume uploads, and job alert notifications.',
            image: JobNestImg,
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Firebase', 'DaisyUI', 'Vite'],
            duration: '5 days',
            liveUrl: 'https://job-nest-web.web.app',
            githubUrl: 'https://github.com/HabiburRahmanZihad/Job-Nest-Web',
            youtube_Video: 'https://youtu.be/6f7UYlPuv-Y',
        },
    ];

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <section className="py-10 md:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-base-100 to-base-200">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        key={location.pathname} // ✅ force re-render on route change
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary grotesk mb-6">
                            My Projects
                        </h1>
                        <p className="text-lg sm:text-xl text-base-content/70 max-w-3xl mx-auto">
                            A collection of projects that showcase my skills and passion for building modern web applications.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects List Section */}
            <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-8 bg-base-100">
                <motion.div
                    key={location.key} // ✅ unique key forces motion div to re-trigger
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="max-w-6xl mx-auto space-y-12"
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-6 lg:px-8 bg-primary text-primary-content">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        key={location.pathname + '-cta'} // ✅ another animation trigger
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold grotesk mb-6">
                            Have a Project in Mind?
                        </h2>
                        <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            I'm always excited to take on new challenges and bring innovative ideas to life.
                            Let's collaborate and create something amazing together.
                        </p>
                        <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center">
                            <Link to="/contact">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="text-white  hover:bg-white hover:text-primary"
                                >
                                    Start a Project
                                </Button>
                            </Link>
                            <Link to='https://github.com/HabiburRahmanZihad' target="_blank">
                                <Button
                                    variant="ghost"
                                    size="lg"
                                    icon={FaGithub}
                                    iconPosition="left"
                                    className="text-white border-white hover:bg-white hover:text-primary"
                                >
                                    View on GitHub
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Projects;