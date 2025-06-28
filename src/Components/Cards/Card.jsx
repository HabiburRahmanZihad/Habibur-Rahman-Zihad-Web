import React from 'react';
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
    level,
    className = ''
}) => {
    return (
        <Card className={`text-center ${className}`} hover={true}>
            {Icon && (
                <div className="flex justify-center mb-4">
                    <Icon className="w-12 h-12 text-primary" />
                </div>
            )}
            <h3 className="text-lg font-semibold text-primary grotesk mb-2">
                {title}
            </h3>
            {description && (
                <p className="text-base-content/70 text-sm mb-3">
                    {description}
                </p>
            )}
            {level && (
                <div className="w-full bg-base-300 rounded-full h-2">
                    <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${level}%` }}
                    ></div>
                </div>
            )}
        </Card>
    );
};

export default Card;
