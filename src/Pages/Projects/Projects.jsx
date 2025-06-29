import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Button from '../../Components/Buttons/Button';
import ssParcelon from '../../assets/AllPic/Projects/Screenshot 2025-06-29 185755.png';

// Reusable Project Card Component
const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col md:flex-row gap-6 bg-base-200 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 min-h-[300px]"
        >
            <div className=" w-full">
                <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="rounded-xl w-full h-full object-cover aspect-video"
                />
            </div>


            <div className="flex flex-col justify-between w-full">
                <div className='space-y-2 md:space-y-4'>
                    <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                    <p className="text-base-content/80 ">{project.description}</p>
                    <div className="flex flex-wrap gap-2 ">
                        {project.technologies.map((tech, i) => (
                            <span key={i} className="badge badge-outline">{tech}</span>
                        ))}
                    </div>
                </div>


                <div className="flex flex-wrap gap-4 mt-2">
                    {project.liveUrl && (
                        <Button
                            variant="secondary"
                            href={project.liveUrl}
                            target="_blank"
                            icon={FaExternalLinkAlt}
                            iconPosition="left"
                        >
                            Live Preview
                        </Button>
                    )}
                    <Button
                        variant="ghost"
                        href={project.githubUrl}
                        target="_blank"
                        icon={FaGithub}
                        iconPosition="left"
                    >
                        GitHub
                    </Button>
                </div>

            </div>
        </motion.div>
    );
};

const Projects = () => {

    const projects = [
        {
            id: 1,
            title: 'Parcelon',
            description: 'A parcel delivery platform with responsive UI and animation built using React, Vite, Tailwind, and Framer Motion.',
            image: ssParcelon,
            technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
            duration: 'Ongoing',
            liveUrl: 'https://parcelon.vercel.app',
            githubUrl: 'https://github.com/HabiburRahmanZihad/parcelon',
        },
        {
            id: 2,
            title: 'Netflix Clone',
            description: 'A clone of Netflix UI for layout practice, built with React and Tailwind CSS.',
            image: ssParcelon,
            technologies: ['React', 'Tailwind CSS'],
            duration: 'Ongoing',
            liveUrl: 'https://netflix-clone.vercel.app',
            githubUrl: 'https://github.com/HabiburRahmanZihad/netflix-clone',
        },
        {
            id: 3,
            title: 'Weather App',
            description: 'A minimal weather forecast app using the OpenWeatherMap API and React.',
            image: ssParcelon,
            technologies: ['React', 'API'],
            duration: 'Ongoing',
            liveUrl: 'https://weather-app-zihad.vercel.app',
            githubUrl: 'https://github.com/HabiburRahmanZihad/weather-app',
        },
    ];

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-base-100 to-base-200">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-primary grotesk mb-6">
                            My Projects
                        </h1>
                        <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
                            A collection of projects that showcase my skills and passion for building modern web applications.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects List Section */}
            <section className="py-20 bg-base-100">
                <div className="max-w-6xl mx-auto px-4 space-y-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-content">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold grotesk mb-6">
                            Have a Project in Mind?
                        </h2>
                        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            I'm always excited to take on new challenges and bring innovative ideas to life.
                            Let's collaborate and create something amazing together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                variant="secondary"
                                size="lg"
                                href="/contact"
                                className="text-primary"
                            >
                                Start a Project
                            </Button>
                            <Button
                                variant="ghost"
                                size="lg"
                                href="https://github.com/HabiburRahmanZihad"
                                target="_blank"
                                icon={FaGithub}
                                iconPosition="left"
                                className="text-white border-white hover:bg-white hover:text-primary"
                            >
                                View on GitHub
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Projects;