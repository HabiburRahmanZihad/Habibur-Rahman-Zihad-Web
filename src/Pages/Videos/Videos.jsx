/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaPlay, FaYoutube } from 'react-icons/fa';

const featuredVideos = [
    {
        id: 1,
        title: 'NagarNirman - Civic Tech Platform Overview',
        description: 'A full overview of the NagarNirman smart infrastructure governance platform.',
        youtubeUrl: 'https://www.youtube.com/watch?v=D3CX7c0Odow',
        duration: '11:17',
        published: '13 days ago',
    },
    {
        id: 2,
        title: 'TazaRate - Project Overview',
        description: 'A quick walkthrough of TazaRate market price tracking system.',
        youtubeUrl: 'https://youtu.be/tRiTHMfSQL4',
        duration: '36:26',
        published: '4 months ago',
    },
    {
        id: 3,
        title: 'Healio - Full Stack Healthcare Project',
        description: 'Complete project review for the Healio healthcare platform.',
        youtubeUrl: 'https://youtu.be/pt03-JtGeY8',
        duration: '21:35',
        published: '3 weeks ago',
    },
    {
        id: 4,
        title: 'ReadRack - Online Book Hub',
        description: 'Feature showcase and architecture summary of the ReadRack project.',
        youtubeUrl: 'https://youtu.be/39602JBF34w',
        duration: '31:49',
        published: '5 months ago',
    },
    {
        id: 5,
        title: 'GradiFy - Student Productivity System',
        description: 'Project demonstration of the GradiFy student management application.',
        youtubeUrl: 'https://www.youtube.com/watch?v=miO5nPX536o',
        duration: '14:30',
        published: '4 months ago',
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
            <section className="py-10 md:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-base-100 to-base-200 relative overflow-hidden">
                <div className="absolute inset-0 gradient-mesh"></div>
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold tracking-widest uppercase">
                            <FaYoutube />
                            Xihad Xone
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-primary grotesk">
                            My YouTube Videos
                        </h1>
                        <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
                            Project reviews and practical software engineering videos from my channel.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://www.youtube.com/@XihadXone/videos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary gap-2"
                                data-cursor="Channel"
                            >
                                <FaYoutube />
                                Visit Full Channel
                            </a>
                            <a
                                href="https://www.youtube.com/@XihadXone?sub_confirmation=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white gap-2"
                                data-cursor="Subscribe"
                            >
                                Subscribe
                                <FaExternalLinkAlt className="text-sm" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-base-100">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary grotesk mb-2">
                            Featured Uploads
                        </h2>
                        <p className="text-base-content/70">
                            Handpicked project videos from the channel.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredVideos.map((video, index) => {
                            const videoId = getYoutubeVideoId(video.youtubeUrl);
                            if (!videoId) {
                                return null;
                            }

                            const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

                            return (
                                <motion.article
                                    key={video.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ delay: index * 0.08, duration: 0.5 }}
                                    className="group bg-base-200 rounded-2xl p-4 border border-primary/30 hover:border-primary hover:shadow-2xl transition-all duration-300 hover-lift"
                                >
                                    <div className="aspect-video overflow-hidden rounded-xl border border-base-300 relative">
                                        <img
                                            src={thumbnail}
                                            alt={`${video.title} thumbnail`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                        <div className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-semibold bg-black/70 text-white">
                                            {video.duration}
                                        </div>
                                        <a
                                            href={video.youtubeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-cursor="Watch"
                                            aria-label={`Watch ${video.title} on YouTube`}
                                            className="absolute inset-0 flex items-center justify-center"
                                        >
                                            <span className="w-16 h-16 rounded-full bg-primary text-white shadow-xl inline-flex items-center justify-center scale-95 group-hover:scale-100 transition-transform duration-200">
                                                <FaPlay className="ml-1 text-xl" />
                                            </span>
                                        </a>
                                    </div>
                                    <div className="mt-4 space-y-3">
                                        <h3 className="text-2xl text-primary font-bold grotesk leading-tight">
                                            {video.title}
                                        </h3>
                                        <p className="text-sm text-base-content/60">{video.published}</p>
                                        <p className="text-base-content/70">{video.description}</p>
                                        <a
                                            href={video.youtubeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-cursor="Open"
                                            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                                        >
                                            Watch on YouTube
                                            <FaExternalLinkAlt className="text-xs" />
                                        </a>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Videos;
