/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';

const featuredVideos = [
    {
        id: 1,
        title: 'NagarNirman - Civic Tech Platform Overview',
        description: 'A full overview of the NagarNirman smart infrastructure governance platform.',
        youtubeUrl: 'https://www.youtube.com/watch?v=D3CX7c0Odow',
    },
    {
        id: 2,
        title: 'TazaRate - Project Overview',
        description: 'A quick walkthrough of TazaRate market price tracking system.',
        youtubeUrl: 'https://youtu.be/tRiTHMfSQL4',
    },
    {
        id: 3,
        title: 'Healio - Full Stack Healthcare Project',
        description: 'Complete project review for the Healio healthcare platform.',
        youtubeUrl: 'https://youtu.be/pt03-JtGeY8',
    },
    {
        id: 4,
        title: 'ReadRack - Online Book Hub',
        description: 'Feature showcase and architecture summary of the ReadRack project.',
        youtubeUrl: 'https://youtu.be/39602JBF34w',
    },
    {
        id: 5,
        title: 'GradiFy - Student Productivity System',
        description: 'Project demonstration of the GradiFy student management application.',
        youtubeUrl: 'https://www.youtube.com/watch?v=miO5nPX536o',
    },
];

const getYoutubeVideoId = (url) => {
    try {
        const parsed = new URL(url);

        if (parsed.hostname.includes('youtu.be')) {
            return parsed.pathname.replace('/', '');
        }

        if (parsed.hostname.includes('youtube.com')) {
            return parsed.searchParams.get('v');
        }
    } catch {
        return null;
    }

    return null;
};

const Videos = () => {
    useEffect(() => {
        document.title = 'Videos | Habibur Rahman Zihad';
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen bg-base-100"
        >
            <section className="py-20 bg-gradient-to-br from-base-100 to-base-200 relative overflow-hidden">
                <div className="absolute inset-0 gradient-mesh"></div>
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-primary grotesk">
                            My YouTube Videos
                        </h1>
                        <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
                            Project reviews and practical software engineering videos from my channel.
                        </p>
                        <a
                            href="https://www.youtube.com/@XihadXone/videos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary gap-2"
                        >
                            <FaYoutube />
                            Visit Full Channel
                        </a>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 bg-base-100">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
                    {featuredVideos.map((video, index) => {
                        const videoId = getYoutubeVideoId(video.youtubeUrl);
                        if (!videoId) {
                            return null;
                        }

                        return (
                            <motion.article
                                key={video.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.08, duration: 0.5 }}
                                className="bg-base-200 rounded-2xl p-4 border border-primary/30 shadow-md"
                            >
                                <div className="aspect-video overflow-hidden rounded-xl border border-base-300 relative group">
                                    <iframe
                                        className="w-full h-full pointer-events-none"
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        title={video.title}
                                        loading="lazy"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                    <a
                                        href={video.youtubeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-cursor="Watch"
                                        aria-label={`Watch ${video.title} on YouTube`}
                                        className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                    >
                                        <span className="px-4 py-2 rounded-full bg-primary text-white font-semibold">
                                            Watch on YouTube
                                        </span>
                                    </a>
                                </div>
                                <div className="mt-4 space-y-2">
                                    <h2 className="text-2xl text-primary font-bold grotesk">{video.title}</h2>
                                    <p className="text-base-content/70">{video.description}</p>
                                    <a
                                        href={video.youtubeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary hover:underline"
                                    >
                                        Watch on YouTube
                                        <span>↗</span>
                                    </a>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </section>
        </motion.div>
    );
};

export default Videos;
