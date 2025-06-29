import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Button from '../../Components/Buttons/Button';
import { Link } from 'react-router';
import ReadRackImg from '../../assets/AllPic/Projects/ReadRack.png';
import SnapTaskerImg from '../../assets/AllPic/Projects/SnapTasker.png';
import JobNestImg from '../../assets/AllPic/Projects/JobNestWeb.png';

// Reusable Project Card Component
const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col lg:flex-row gap-4 sm:gap-6 bg-base-200 p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
        >
            <div className="w-full">
                <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="rounded-xl w-full h-auto object-cover aspect-video max-h-64 md:max-h-full"
                />
            </div>

            <div className="flex flex-col justify-around w-full">
                <div className="space-y-2 md:space-y-6">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-primary">{project.title}  <span className="text-base-content/80 text-sm">{project.duration}</span></h3>
                    <p className="text-sm sm:text-base text-base-content/80">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                            <span key={i} className="badge badge-outline">{tech}</span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <Link to={project.githubUrl} target="_blank">
                            <Button
                                variant="ghost"
                                icon={FaGithub}
                                iconPosition="left"
                                className='border border-primary'
                            >
                                GitHub
                            </Button>
                        </Link>
                        <Link to={project.liveUrl} target="_blank">
                            <Button
                                variant="secondary"
                                icon={FaExternalLinkAlt}
                                iconPosition="left"
                            >
                                Live Preview
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'ReadRack',
            description: 'Digital library management system with advanced book search, user profiles, authentication, and a review/rating system.',
            image: ReadRackImg,
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Firebase', 'DaisyUI', 'Vite'],
            duration: '8 days',
            liveUrl: 'https://readrack-web.web.app',
            githubUrl: 'https://github.com/HabiburRahmanZihad/ReadRack',
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
        },
    ];

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <section className="py-10 md:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-base-100 to-base-200">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
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
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
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
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
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