import { motion } from 'framer-motion';

const skills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'React', level: 90 },
    { name: 'MongoDB', level: 90 },
    { name: 'Firebase', level: 95 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Node.js', level: 95 },
    { name: 'Express.js', level: 95 },
    { name: 'Next.js', level: 75 },
];

const Skills = () => {
    return (
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
    );
};

export default Skills;