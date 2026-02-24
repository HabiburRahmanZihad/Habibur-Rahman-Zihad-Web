/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const Card = ({
    children,
    className = '',
    hover = true,
    onClick,
    image,
    title,
    description,
    badge,
    actions,
    ...props
}) => {
    const baseClasses = 'card bg-base-100 shadow-xl transition-all duration-300';
    const hoverClasses = hover ? 'hover:shadow-2xl hover:scale-105' : '';
    const cardClasses = `${baseClasses} ${hoverClasses} ${className}`;

    return (
        <motion.div
            className={cardClasses}
            onClick={onClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={hover ? { y: -5 } : {}}
            {...props}
        >
            {image && (
                <figure className="relative overflow-hidden">
                    <img
                        src={image}
                        alt={title || 'Card image'}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    {badge && (
                        <div className="absolute top-4 left-4">
                            <span className="badge badge-primary">{badge}</span>
                        </div>
                    )}
                </figure>
            )}

            <div className="card-body">
                {title && (
                    <h3 className="card-title text-primary grotesk">
                        {title}
                    </h3>
                )}

                {description && (
                    <p className="text-base-content/70">
                        {description}
                    </p>
                )}

                {children}

                {actions && (
                    <div className="card-actions justify-end mt-4">
                        {actions}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

// Project Card Component
export const ProjectCard = ({
    title,
    description,
    image,
    technologies = [],
    liveUrl,
    githubUrl,
    className = ''
}) => {
    return (
        <Card
            image={image}
            title={title}
            description={description}
            className={className}
            actions={
                <div className="flex gap-2 flex-wrap">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm"
                        >
                            Live Demo
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-sm"
                        >
                            Source Code
                        </a>
                    )}
                </div>
            }
        >
            {technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="badge badge-secondary badge-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </Card>
    );
};

// Skill Card Component
export const SkillCard = ({
    icon: Icon,
    title,
    description,
    tags = [],
    level,
    className = ''
}) => {
    return (
        <div
            className={`h-full flex flex-col bg-base-100 rounded-2xl border border-primary/20 shadow-xl p-6 text-center
                        hover:border-primary/60 hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-1
                        transition-all duration-300 group ${className}`}
        >
            {/* Icon */}
            {Icon && (
                <div className="flex justify-center mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center
                                    group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="text-2xl text-primary" />
                    </div>
                </div>
            )}

            {/* Title */}
            <h3 className="text-lg font-bold text-primary grotesk mb-3">
                {title}
            </h3>

            {/* Description */}
            {description && (
                <p className="text-base-content/60 text-sm leading-relaxed mb-5 flex-1">
                    {description}
                </p>
            )}

            {/* Tech Tags */}
            {tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs font-semibold
                                       bg-primary/10 text-primary border border-primary/20
                                       group-hover:bg-primary/20 transition-colors duration-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            {/* Proficiency Bar */}
            {level && (
                <div className="mt-auto">
                    <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs text-base-content/50 font-medium uppercase tracking-wider">Proficiency</span>
                        <span className="text-xs font-bold text-primary">{level}%</span>
                    </div>
                    <div className="w-full bg-base-300 rounded-full h-2.5">
                        <div
                            className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full transition-all duration-1000"
                            style={{ width: `${level}%` }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
