import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import { ProjectCard } from '../../Components/Cards/Card';
import Button from '../../Components/Buttons/Button';

const Projects = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
            image: 'https://via.placeholder.com/400x250/DAA520/FFFFFF?text=E-Commerce+Platform',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            category: 'fullstack',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/example',
            featured: true
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates and team collaboration features.',
            image: 'https://via.placeholder.com/400x250/B88B58/FFFFFF?text=Task+Management',
            technologies: ['React', 'Firebase', 'Material-UI'],
            category: 'frontend',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/example',
            featured: false
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'A beautiful weather dashboard with location-based forecasts and interactive charts.',
            image: 'https://via.placeholder.com/400x250/6C6C6C/FFFFFF?text=Weather+Dashboard',
            technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
            category: 'frontend',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/example',
            featured: true
        },
        {
            id: 4,
            title: 'REST API Server',
            description: 'A robust RESTful API server with authentication, data validation, and comprehensive documentation.',
            image: 'https://via.placeholder.com/400x250/F9B934/FFFFFF?text=REST+API',
            technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
            category: 'backend',
            liveUrl: null,
            githubUrl: 'https://github.com/example',
            featured: false
        },
        {
            id: 5,
            title: 'Portfolio Website',
            description: 'A responsive portfolio website with modern animations and dark mode support.',
            image: 'https://via.placeholder.com/400x250/4CAF50/FFFFFF?text=Portfolio',
            technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
            category: 'frontend',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/example',
            featured: false
        },
        {
            id: 6,
            title: 'Blog Platform',
            description: 'A full-stack blog platform with CMS capabilities, user authentication, and SEO optimization.',
            image: 'https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Blog+Platform',
            technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
            category: 'fullstack',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/example',
            featured: true
        }
    ];

    const categories = [
        { value: 'all', label: 'All Projects' },
        { value: 'frontend', label: 'Frontend' },
        { value: 'backend', label: 'Backend' },
        { value: 'fullstack', label: 'Full Stack' }
    ];

    const filteredProjects = projects.filter(project => {
        const matchesFilter = selectedFilter === 'all' || project.category === selectedFilter;
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

        return matchesFilter && matchesSearch;
    });

    const featuredProjects = projects.filter(project => project.featured);

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
                        <p className="text-xl text-base-content/70 max-w-3xl mx-auto mb-8">
                            A collection of projects that showcase my skills and passion for creating
                            innovative solutions. Each project represents a unique challenge and learning experience.
                        </p>

                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="max-w-md mx-auto relative"
                        >
                            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/50" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="input input-bordered w-full pl-12 bg-base-100"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Projects */}
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
                            Featured Projects
                        </h2>
                        <p className="text-xl text-base-content/70">
                            Highlighted work that demonstrates my best capabilities.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    technologies={project.technologies}
                                    liveUrl={project.liveUrl}
                                    githubUrl={project.githubUrl}
                                    className="h-full"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Projects */}
            <section className="py-20 bg-base-200">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary grotesk mb-4">
                            All Projects
                        </h2>
                        <p className="text-xl text-base-content/70 mb-8">
                            Explore my complete portfolio of work.
                        </p>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {categories.map((category) => (
                                <button
                                    key={category.value}
                                    onClick={() => setSelectedFilter(category.value)}
                                    className={`btn ${selectedFilter === category.value
                                        ? 'btn-primary'
                                        : 'btn-outline'
                                        }`}
                                >
                                    <FaFilter className="w-4 h-4 mr-2" />
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                layout
                            >
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    technologies={project.technologies}
                                    liveUrl={project.liveUrl}
                                    githubUrl={project.githubUrl}
                                    badge={project.featured ? 'Featured' : null}
                                    className="h-full"
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <h3 className="text-2xl font-bold text-base-content/50 mb-4">
                                No projects found
                            </h3>
                            <p className="text-base-content/40 mb-6">
                                Try adjusting your search terms or filters.
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setSelectedFilter('all');
                                    setSearchTerm('');
                                }}
                            >
                                Clear Filters
                            </Button>
                        </motion.div>
                    )}
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
                                href="https://github.com/yourusername"
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
