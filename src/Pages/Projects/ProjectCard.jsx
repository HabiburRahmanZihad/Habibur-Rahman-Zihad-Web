/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaRegClock } from 'react-icons/fa';
import { Link } from 'react-router';
import Button from '../../Components/Buttons/Button';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`group flex flex-col gap-4 sm:gap-6 lg:gap-8 bg-base-200 p-4 sm:p-6 rounded-2xl border border-base-300/60
                        shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300 overflow-hidden
                        ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
        >
            <div className="w-full overflow-hidden rounded-xl self-center">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live site`}>
                    <img
                        src={project.image}
                        alt={`${project.title} project screenshot — full-stack web app built by Habibur Rahman Zihad`}
                        loading="lazy"
                        className="rounded-xl w-full h-auto object-cover aspect-video max-h-64 md:max-h-full
                                   transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                </a>
            </div>

            <div className="flex flex-col justify-center w-full">
                <div className="space-y-3 md:space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-primary grotesk">
                            {project.title}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                            <FaRegClock /> {project.duration}
                        </span>
                    </div>
                    <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                            <span key={i} className="badge badge-outline border-base-content/25 text-base-content/80">{tech}</span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Link to={project.liveUrl} target="_blank">
                            <Button variant="primary" icon={FaExternalLinkAlt} iconPosition="left">
                                Live Preview
                            </Button>
                        </Link>
                        <Link to={project.githubUrl} target="_blank">
                            <Button variant="ghost" icon={FaGithub} iconPosition="left" className='border border-primary/40 hover:border-primary'>
                                Source Code
                            </Button>
                        </Link>
                        <Link to={project.youtube_Video} target="_blank">
                            <Button variant="ghost" icon={FaYoutube} iconPosition="left" className='border border-primary/40 hover:border-primary'>
                                Video Demo
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
