import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';
import Button from '../../Components/Buttons/Button';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }} // ✅ changed from whileInView to animate
            transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
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
                    <h3 className="text-2xl md:text-3xl font-extrabold text-primary">
                        {project.title}
                        <span className="text-base-content/80 text-sm"> {project.duration}</span>
                    </h3>
                    <p className="text-sm sm:text-base text-base-content/80">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                            <span key={i} className="badge badge-outline">{tech}</span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <Link to={project.githubUrl} target="_blank">
                            <Button variant="ghost" icon={FaGithub} iconPosition="left" className='border border-primary'>
                                GitHub
                            </Button>
                        </Link>
                        <Link to={project.liveUrl} target="_blank">
                            <Button variant="secondary" icon={FaExternalLinkAlt} iconPosition="left">
                                Live Preview
                            </Button>
                        </Link>
                        <Link to={project.youtube_Video} target="_blank">
                            <Button variant="ghost" icon={FaYoutube} iconPosition="left" className='border border-primary'>
                                Details
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;