/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaPlay, FaYoutube } from 'react-icons/fa';
import usePageMeta from '../../Components/Hooks/usePageMeta';
import { personalIdentity } from '../../config/identity';

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
const YOUTUBE_MAX_RESULTS = Number(import.meta.env.VITE_YOUTUBE_MAX_RESULTS || 6);

const formatDuration = (isoDuration) => {
    const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return '0:00';

    const hours = Number(match[1] || 0);
    const minutes = Number(match[2] || 0);
    const seconds = Number(match[3] || 0);

    if (hours > 0) {
        return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    return `${minutes}:${String(seconds).padStart(2, '0')}`;
};

const formatPublished = (publishedAt) => {
    const then = new Date(publishedAt).getTime();
    const now = Date.now();
    const diffMs = Math.max(0, now - then);

    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 365 * day;

    if (diffMs >= year) return `${Math.floor(diffMs / year)} year${Math.floor(diffMs / year) > 1 ? 's' : ''} ago`;
    if (diffMs >= month) return `${Math.floor(diffMs / month)} month${Math.floor(diffMs / month) > 1 ? 's' : ''} ago`;
    if (diffMs >= day) return `${Math.floor(diffMs / day)} day${Math.floor(diffMs / day) > 1 ? 's' : ''} ago`;
    if (diffMs >= hour) return `${Math.floor(diffMs / hour)} hour${Math.floor(diffMs / hour) > 1 ? 's' : ''} ago`;
    if (diffMs >= minute) return `${Math.floor(diffMs / minute)} minute${Math.floor(diffMs / minute) > 1 ? 's' : ''} ago`;
    return 'Just now';
};

const normalizeDescription = (description) => {
    if (!description) return 'Watch the full project walkthrough on my YouTube channel.';
    return description.length > 150 ? `${description.slice(0, 150)}...` : description;
};

const Videos = () => {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const channelName = useMemo(() => {
        if (videos.length > 0) {
            return videos[0].channelTitle || 'Xihad Xone';
        }
        return 'Xihad Xone';
    }, [videos]);

    usePageMeta({
        title: 'Videos by Habibur Rahman Zihad',
        description: 'Project walkthroughs and dev videos by Habibur Rahman Zihad on the Xihad Xone YouTube channel.',
        path: '/videos',
    });

    useEffect(() => {
        const fetchVideos = async () => {
            if (!YOUTUBE_API_KEY || !YOUTUBE_CHANNEL_ID) {
                setError('Missing YouTube API config. Add VITE_YOUTUBE_API_KEY and VITE_YOUTUBE_CHANNEL_ID in .env.local.');
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);
                setError('');

                const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&maxResults=${YOUTUBE_MAX_RESULTS}&order=date&type=video&key=${YOUTUBE_API_KEY}`;
                const searchRes = await fetch(searchUrl);
                if (!searchRes.ok) {
                    throw new Error(`Search API failed (${searchRes.status})`);
                }

                const searchData = await searchRes.json();
                const items = searchData.items || [];
                const videoIds = items
                    .map((item) => item?.id?.videoId)
                    .filter(Boolean);

                if (videoIds.length === 0) {
                    setVideos([]);
                    setIsLoading(false);
                    return;
                }

                const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds.join(',')}&key=${YOUTUBE_API_KEY}`;
                const detailsRes = await fetch(detailsUrl);
                if (!detailsRes.ok) {
                    throw new Error(`Video details API failed (${detailsRes.status})`);
                }

                const detailsData = await detailsRes.json();
                const detailsMap = (detailsData.items || []).reduce((acc, item) => {
                    acc[item.id] = item.contentDetails?.duration || 'PT0M0S';
                    return acc;
                }, {});

                const normalizedVideos = items.map((item) => {
                    const videoId = item.id.videoId;
                    const snippet = item.snippet || {};
                    const durationIso = detailsMap[videoId] || 'PT0M0S';

                    return {
                        id: videoId,
                        title: snippet.title || 'Untitled Video',
                        description: normalizeDescription(snippet.description),
                        youtubeUrl: `https://www.youtube.com/watch?v=${videoId}`,
                        duration: formatDuration(durationIso),
                        published: formatPublished(snippet.publishedAt),
                        publishedAt: snippet.publishedAt || '',
                        channelTitle: snippet.channelTitle || 'Xihad Xone',
                        thumbnail:
                            snippet.thumbnails?.maxres?.url ||
                            snippet.thumbnails?.high?.url ||
                            snippet.thumbnails?.medium?.url ||
                            snippet.thumbnails?.default?.url ||
                            `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
                    };
                });

                setVideos(normalizedVideos);
            } catch (err) {
                setError(err.message || 'Failed to load videos.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchVideos();
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
                            {channelName}
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary grotesk">
                            My YouTube Videos
                        </h1>
                        <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto">
                            Project reviews and practical software engineering videos from my channel.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href={`${personalIdentity.socialProfiles.youtube}/videos`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary gap-2"
                                data-cursor="Channel"
                            >
                                <FaYoutube />
                                Visit Full Channel
                            </a>
                            <a
                                href={`${personalIdentity.socialProfiles.youtube}?sub_confirmation=1`}
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


                    {isLoading && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-base-200 rounded-2xl p-4 border border-primary/20 animate-pulse"
                                >
                                    <div className="aspect-video rounded-xl bg-base-300"></div>
                                    <div className="mt-4 h-8 w-4/5 bg-base-300 rounded"></div>
                                    <div className="mt-3 h-4 w-1/3 bg-base-300 rounded"></div>
                                    <div className="mt-3 h-4 w-full bg-base-300 rounded"></div>
                                    <div className="mt-2 h-4 w-2/3 bg-base-300 rounded"></div>
                                </div>
                            ))}
                        </div>
                    )}

                    {!isLoading && error && (
                        <div className="max-w-3xl mx-auto text-center p-6 rounded-2xl border border-error/30 bg-error/10 text-error">
                            {error}
                        </div>
                    )}

                    {!isLoading && !error && videos.length === 0 && (
                        <div className="max-w-3xl mx-auto text-center p-6 rounded-2xl border border-primary/30 bg-base-200 text-base-content/80">
                            No videos found for this channel yet.
                        </div>
                    )}

                    {!isLoading && !error && videos.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {videos.map((video, index) => (
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
                                            src={video.thumbnail}
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
                                        <h3 className="text-xl md:text-2xl text-primary font-bold grotesk leading-tight line-clamp-2">
                                            {video.title}
                                        </h3>
                                        <p className="text-sm text-base-content/60">{video.published}</p>
                                        <p className="text-base-content/70 line-clamp-3">{video.description}</p>
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
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </motion.div>
    );
};

export default Videos;
