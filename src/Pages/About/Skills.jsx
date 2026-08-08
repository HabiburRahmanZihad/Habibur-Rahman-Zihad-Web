/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const skillCategories = [
    {
        category: 'Frontend',
        skills: [
            { name: 'Next.js', level: 95 },
            { name: 'React', level: 95 },
            { name: 'TypeScript', level: 95 },
            { name: 'JavaScript', level: 95 },
            { name: 'Tailwind CSS', level: 95 },
            { name: 'Tailwind & Bootstrap', level: 95 },
            { name: 'HTML5', level: 95 },
            { name: 'CSS3', level: 90 },
        ],
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js', level: 95 },
            { name: 'Express.js', level: 95 },
            { name: 'REST API', level: 90 },
            { name: 'JWT / Authentication', level: 85 },
            { name: 'Redis', level: 80 },
            { name: 'Socket.IO', level: 75 },
        ],
    },
    {
        category: 'Database',
        skills: [
            { name: 'Firebase', level: 95 },
            { name: 'PostgreSQL', level: 90 },
            { name: 'MongoDB', level: 90 },
            { name: 'MySQL', level: 88 },
            { name: 'Prisma', level: 87 },
            { name: 'Mongoose', level: 85 },
        ],
    },
    {
        category: 'AI & Engineering',
        skills: [
            { name: 'RAG (Retrieval-Augmented Generation)', level: 78 },
            { name: 'OpenAI / AI Integration', level: 78 },
            { name: 'Google GenAI', level: 75 },
        ],
    },
    {
        category: 'DevOps & Infrastructure',
        skills: [
            { name: 'Git & GitHub', level: 90 },
            { name: 'Docker', level: 82 },
            { name: 'CI/CD (GitHub Actions)', level: 80 },
            { name: 'Vercel & Netlify', level: 80 },
            { name: 'Nginx', level: 78 },
            { name: 'Linux / VPS', level: 78 },
            { name: 'Sentry / Monitoring', level: 70 },
        ],
    },
    {
        category: 'Programming',
        skills: [
            { name: 'Python', level: 88 },
            { name: 'C', level: 85 },
            { name: 'C++', level: 82 },
        ],
    },
];

const Skills = () => {
    let flatIndex = 0;

    return (
        <section className="py-20 bg-base-100">
            <div className="max-w-7xl mx-auto px-4">
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

                <div className="space-y-12">
                    {skillCategories.map((group) => (
                        <div key={group.category}>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="text-xl sm:text-2xl font-bold text-primary grotesk mb-5 flex items-center gap-3"
                            >
                                <span className="w-1.5 h-6 bg-primary rounded-full" />
                                {group.category}
                            </motion.h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {group.skills.map((skill) => {
                                    const rowDelay = (flatIndex++ % 4) * 0.1;
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: rowDelay, duration: 0.6 }}
                                            viewport={{ once: true }}
                                            className="bg-base-200 p-6 rounded-xl"
                                        >
                                            <div className="flex justify-between items-center gap-2 mb-2">
                                                <span className="font-semibold text-lg min-w-0 break-words">{skill.name}</span>
                                                <span className="text-primary font-bold shrink-0">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-base-300 rounded-full h-3">
                                                <motion.div
                                                    className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ delay: rowDelay + 0.3, duration: 1 }}
                                                    viewport={{ once: true }}
                                                />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
