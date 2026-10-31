/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaCheckCircle, FaRobot, FaUsers } from 'react-icons/fa';

// Tech terms called out inline within the responsibility text, longest first so
// e.g. "GitHub" is matched whole instead of being split as "Git" + "Hub", and
// "Retrieval-Augmented Generation (RAG)" is matched whole instead of leaving a
// stray "RAG" highlighted twice.
const TECH_TERMS = [
    'Retrieval-Augmented Generation (RAG)',
    'PostgreSQL', 'TypeScript', 'JavaScript', 'REST APIs', 'Tailwind CSS',
    'Google GenAI', 'OpenTelemetry', 'Express.js', 'GitHub', 'Next.js', 'Node.js',
    'Langfuse', 'pgvector', 'NestJS', 'Drizzle', 'OpenAI', 'BullMQ',
    'React', 'Prisma', 'Redis', 'Git', 'RAG',
].sort((a, b) => b.length - a.length);

const HIGHLIGHT_PATTERN = new RegExp(
    `(${TECH_TERMS.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'g'
);

const highlightTech = (text) =>
    text.split(HIGHLIGHT_PATTERN).map((part, i) =>
        TECH_TERMS.includes(part) ? (
            <span key={i} className="text-primary font-semibold">{part}</span>
        ) : (
            part
        )
    );

const experiences = [
    {
        icon: FaUsers,
        company: 'Half Coders',
        companyUrl: 'https://half-coders.tech/',
        role: 'CPO & Mentor',
        project: null,
        period: '2026 - Present',
        isCurrent: true,
        summary:
            'I serve as Chief Product Officer and mentor at Half Coders, helping guide product direction while supporting team members through mentorship.',
        responsibilities: [
            'Guiding product direction and helping shape the product roadmap',
            'Mentoring team members and supporting their professional growth',
            'Collaborating with the team to turn ideas into clear, user-focused product requirements',
            'Helping guide product development from planning through delivery',
        ],
    },
    {
        icon: FaBriefcase,
        company: 'JobBridge BD',
        companyUrl: 'https://jobbridgebd.com/',
        role: 'CTO & Software Engineer',
        project: null,
        period: '2026 - Present',
        isCurrent: true,
        summary:
            'I serve as CTO and Software Engineer at JobBridge BD, guiding technical direction while building and maintaining a real-world job platform across frontend, backend, database, infrastructure, and AI-powered functionality.',
        responsibilities: [
            'Guiding technical strategy, architecture, and engineering priorities',
            'Developing and maintaining full-stack web application features',
            'Building responsive frontend interfaces using React, Next.js, and Tailwind CSS',
            'Developing backend APIs and server-side functionality using Node.js and Express.js',
            'Working with PostgreSQL, Prisma, and Redis for application data, caching, and backend services',
            'Implementing AI-powered features and integrating AI models into backend services',
            'Working with Retrieval-Augmented Generation (RAG) for AI-powered functionality',
            'Implementing authentication, authorization, and role-based functionality',
            'Integrating frontend and backend systems through REST APIs',
            'Debugging, optimizing, and improving existing application features',
            'Working with Git/GitHub and collaborative development workflows',
            'Contributing to feature planning, implementation, testing, deployment, and continuous improvement',
        ],
    },
    {
        icon: FaRobot,
        company: 'Digital Aid IT',
        companyUrl: null,
        role: 'Software Engineer',
        project: 'EcomUp AI',
        projectUrl: 'https://ecomup.ai/',
        period: '2026',
        isCurrent: false,
        summary:
            "As a Software Engineer on EcomUp AI, my work leaned heavily toward the backend — building AI-powered features, RAG pipelines, and the services that connect AI models to real application data.",
        responsibilities: [
            'Designing and developing backend services and APIs using NestJS and TypeScript',
            'Developing and integrating AI-powered features',
            'Working with AI models and integrations using OpenAI and Google GenAI',
            'Implementing and improving Retrieval-Augmented Generation (RAG) pipelines',
            'Working with vector-based search and retrieval using PostgreSQL, pgvector, and Drizzle ORM',
            'Connecting AI models with application data and backend services',
            'Implementing asynchronous and background processing using Redis and BullMQ',
            'Working with logging, monitoring, tracing, and observability using Langfuse and OpenTelemetry',
            'Debugging, optimizing, and improving backend and AI-related functionality',
            'Contributing to scalable and production-oriented backend architecture',
        ],
    },
];

const ExperienceCard = ({ exp, index }) => {
    const Icon = exp.icon;
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="animated-gradient-border rounded-2xl p-[6px]"
        >
            <motion.div
                className="group relative overflow-hidden bg-base-100 rounded-[0.9rem] p-6 sm:p-8 md:p-10"
                whileHover={{ boxShadow: '0 20px 45px rgba(218, 165, 32, 0.18)' }}
                transition={{ duration: 0.3 }}
            >
                {/* Light sweep on hover */}
                <motion.div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full"
                    whileHover={{ translateX: '200%' }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                />

                {/* Card Header */}
                <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <motion.div
                            className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: -8 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        >
                            <Icon className="text-2xl text-primary" />
                        </motion.div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-primary grotesk">
                                {exp.role}
                            </h3>
                            <div className="flex flex-wrap items-center gap-x-2">
                                {exp.companyUrl ? (
                                    <motion.a
                                        href={exp.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 3 }}
                                        className="inline-block text-secondary font-medium hover:text-primary transition-colors duration-200 underline decoration-secondary/40 underline-offset-2 hover:decoration-primary"
                                    >
                                        {exp.company}
                                    </motion.a>
                                ) : (
                                    <span className="text-secondary font-medium">{exp.company}</span>
                                )}
                                {exp.project && (
                                    <span className="text-base-content/50 text-sm flex items-center gap-1">
                                        •
                                        {exp.projectUrl ? (
                                            <motion.a
                                                href={exp.projectUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ x: 3 }}
                                                className="inline-block text-base-content/60 hover:text-primary transition-colors duration-200 underline decoration-base-content/30 underline-offset-2 hover:decoration-primary"
                                            >
                                                {exp.project}
                                            </motion.a>
                                        ) : (
                                            exp.project
                                        )}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    {exp.period && (
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.5, type: 'spring', stiffness: 200 }}
                            viewport={{ once: true }}
                            className="badge badge-primary text-black gap-2 py-3 px-4 w-fit"
                        >
                            <FaCalendarAlt />
                            {exp.period}
                            {exp.isCurrent && (
                                <motion.span
                                    className="w-1.5 h-1.5 rounded-full bg-black/70"
                                    animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
                                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                                />
                            )}
                        </motion.span>
                    )}
                </div>

                {/* Summary */}
                <p className="relative text-base-content/70 leading-relaxed mb-8">
                    {exp.summary}
                </p>

                {/* Responsibilities */}
                <h4 className="relative text-sm font-semibold uppercase tracking-wider text-base-content/50 mb-4">
                    Responsibilities
                </h4>
                <motion.ul
                    className="relative grid sm:grid-cols-2 gap-x-6 gap-y-3 list-none"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
                    }}
                >
                    {exp.responsibilities.map((item) => (
                        <motion.li
                            key={item}
                            variants={{
                                hidden: { opacity: 0, x: -15 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.4 }}
                            whileHover={{ x: 4 }}
                            className="flex items-start gap-3"
                        >
                            <motion.span whileHover={{ scale: 1.3, rotate: 10 }} className="mt-1 shrink-0">
                                <FaCheckCircle className="text-primary text-sm" />
                            </motion.span>
                            <span className="text-base-content/70 text-sm sm:text-base leading-relaxed">
                                {highlightTech(item)}
                            </span>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.article>
    );
};

const Experience = () => {
    return (
        <section className="py-20 bg-base-200 border-t border-base-300">
            <div className="max-w-5xl mx-auto px-4">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary grotesk mb-4">
                        Professional Experience
                    </h2>
                    <p className="text-xl text-base-content/70">
                        Building products, guiding teams, and delivering full-stack and AI-powered solutions.
                    </p>
                </motion.div>

                {/* Career Timeline */}
                <div>
                    {experiences.map((exp, index) => (
                        <div key={exp.company}>
                            {index > 0 && (
                                <div className="flex flex-col items-center">
                                    <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-primary/10" />
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.4, type: 'spring', stiffness: 250 }}
                                        viewport={{ once: true }}
                                        className="w-3 h-3 my-1 rounded-full bg-primary shadow-[0_0_12px_2px_rgba(255,193,7,0.5)]"
                                    />
                                    <div className="w-px h-8 bg-gradient-to-b from-primary/10 to-primary/50" />
                                </div>
                            )}
                            <ExperienceCard exp={exp} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
