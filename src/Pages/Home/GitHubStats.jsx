/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaFire, FaGithub, FaStar } from 'react-icons/fa';
import {
    HiOutlineBadgeCheck,
    HiOutlineCalendar,
    HiOutlineChartBar,
    HiOutlineCubeTransparent,
    HiOutlineFire,
    HiOutlineLightningBolt,
    HiOutlineOfficeBuilding,
    HiOutlineUserGroup,
} from 'react-icons/hi';
import { Link } from 'react-router';
import Button from '../../Components/Buttons/Button';
import { personalIdentity } from '../../config/identity';
import pairExtraordinaireBadge from '../../assets/AllPic/GitHub/pair-extraordinaire.webp';
import pullSharkBadge from '../../assets/AllPic/GitHub/pull-shark.webp';
import quickdrawBadge from '../../assets/AllPic/GitHub/quickdraw.webp';
import yoloBadge from '../../assets/AllPic/GitHub/yolo.webp';

const GITHUB_USERNAME = personalIdentity.socialProfiles.github.split('/').pop();

// Snapshot taken 2026-10-31, shown only when the live APIs are unreachable or rate-limited.
// Every value here only grows over time, so it stays a truthful lower bound.
const FALLBACK = { repos: 123, stars: 35, followers: 33, contributions: 7682, longestStreak: 433 };

// GitHub exposes no API for achievements, so these mirror the profile's Achievements panel.
const achievements = [
    { name: 'Pull Shark', tier: 'x3', image: pullSharkBadge, description: 'Opened pull requests that got merged' },
    { name: 'Pair Extraordinaire', tier: 'x2', image: pairExtraordinaireBadge, description: 'Co-authored merged pull requests' },
    { name: 'Quickdraw', image: quickdrawBadge, description: 'Closed an issue or PR within 5 minutes' },
    { name: 'YOLO', image: yoloBadge, description: 'Merged a pull request without a review' },
];

const organizations = [
    { login: 'Half-Coders', name: 'Half Coders', avatar: 'https://avatars.githubusercontent.com/u/327417086?s=96&v=4' },
    { login: 'Job-Bridge-BD', name: 'Job Bridge BD', avatar: 'https://avatars.githubusercontent.com/u/327868334?s=96&v=4' },
    { login: 'EcomUP-AI-BD', name: 'EcomUP.AI.BD', avatar: 'https://avatars.githubusercontent.com/u/288845241?s=96&v=4' },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const LEVEL_CLASSES = ['bg-base-300', 'bg-primary/25', 'bg-primary/50', 'bg-primary/75', 'bg-primary'];

// Dates are handled as UTC midnight so day arithmetic never drifts across DST changes
const parseDate = (date) => new Date(`${date}T00:00:00Z`);
const formatDate = (date) => date.toISOString().slice(0, 10);
const addDays = (date, days) => new Date(date.getTime() + days * 86400000);
const pluralDays = (count) => (count === 1 ? ' day' : ' days');

const getLocalToday = () => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
};

const fetchJSON = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${url}`);
    return res.json();
};

const fetchProfileStats = async () => {
    const user = await fetchJSON(`https://api.github.com/users/${GITHUB_USERNAME}`);
    // The repos endpoint caps at 100 per page, so stars must be summed across every page
    const pageCount = Math.ceil(user.public_repos / 100);
    const repoPages = await Promise.all(
        Array.from({ length: pageCount }, (_, i) =>
            fetchJSON(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&page=${i + 1}`)
        )
    );
    const stars = repoPages.flat().reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
    return { repos: user.public_repos, followers: user.followers, stars };
};

// Lays the last year out as GitHub does: one column per week, Sunday on top
const buildCalendar = (byDate, today) => {
    const end = parseDate(today);
    const yearAgo = addDays(end, -364);
    let cursor = addDays(yearAgo, -yearAgo.getUTCDay());
    const weeks = [];
    let total = 0;

    while (cursor <= end) {
        const week = [];
        for (let day = 0; day < 7; day++) {
            if (cursor <= end) {
                const date = formatDate(cursor);
                const entry = byDate.get(date) ?? { date, count: 0, level: 0 };
                total += entry.count;
                week.push(entry);
            } else {
                week.push(null);
            }
            cursor = addDays(cursor, 1);
        }
        weeks.push(week);
    }

    const monthLabels = [];
    weeks.forEach((week, col) => {
        const monthStart = week.find((day) => day?.date.endsWith('-01'));
        if (col === 0 || monthStart) {
            const date = monthStart?.date ?? week[0].date;
            monthLabels.push({ col, label: MONTHS[Number(date.slice(5, 7)) - 1] });
        }
    });
    // Drop the partial first month when its label would collide with the next one
    if (monthLabels.length > 1 && monthLabels[1].col - monthLabels[0].col < 3) monthLabels.shift();

    return { weeks, monthLabels, total };
};

const fetchContributions = async () => {
    // Includes private contributions, matching the count shown on the GitHub profile
    const data = await fetchJSON(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=all`);
    const today = getLocalToday();
    // The API pads each year with future days and doesn't return years in order
    const days = data.contributions
        .filter((day) => day.date <= today)
        .sort((a, b) => a.date.localeCompare(b.date));

    let longestStreak = 0;
    let run = 0;
    for (const day of days) {
        run = day.count > 0 ? run + 1 : 0;
        longestStreak = Math.max(longestStreak, run);
    }

    // Like GitHub, today doesn't break the streak until it ends without a contribution
    let i = days.length - 1;
    if (days[i]?.count === 0) i -= 1;
    let currentStreak = 0;
    while (i >= 0 && days[i].count > 0) {
        currentStreak += 1;
        i -= 1;
    }

    const year = today.slice(0, 4);
    return {
        year,
        total: days.reduce((sum, day) => sum + day.count, 0),
        thisYear: days.filter((day) => day.date.startsWith(year)).reduce((sum, day) => sum + day.count, 0),
        bestDay: days.reduce((best, day) => Math.max(best, day.count), 0),
        longestStreak,
        currentStreak,
        calendar: buildCalendar(new Map(days.map((day) => [day.date, day])), today),
    };
};

// Animated counter component for smooth number animation
const AnimatedCounter = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let start = 0;
                    const end = value;
                    const increment = end / (duration / 16);
                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [value, duration, hasAnimated]);

    return <span ref={countRef}>{count.toLocaleString()}</span>;
};

const ContributionCalendar = ({ calendar }) => (
    <div className="overflow-x-auto pb-2">
        <div
            role="img"
            aria-label={`Contribution calendar: ${calendar.total.toLocaleString()} contributions in the last year`}
            className="grid gap-[3px] min-w-[680px]"
            style={{ gridTemplateColumns: `auto repeat(${calendar.weeks.length}, minmax(0, 1fr))` }}
        >
            {calendar.monthLabels.map(({ col, label }) => (
                <span
                    key={`${label}-${col}`}
                    className="text-xs text-base-content/60 whitespace-nowrap pb-1"
                    style={{ gridRow: 1, gridColumn: `${col + 2} / span 3` }}
                >
                    {label}
                </span>
            ))}
            {['Mon', 'Wed', 'Fri'].map((label, i) => (
                <span
                    key={label}
                    className="text-xs text-base-content/60 pr-2 self-center"
                    style={{ gridRow: i * 2 + 3, gridColumn: 1 }}
                >
                    {label}
                </span>
            ))}
            {calendar.weeks.map((week, col) =>
                week.map((day, row) =>
                    day && (
                        <div
                            key={day.date}
                            title={`${day.count.toLocaleString()} contribution${day.count === 1 ? '' : 's'} on ${parseDate(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}`}
                            className={`aspect-square rounded-[3px] ${LEVEL_CLASSES[day.level] ?? LEVEL_CLASSES[4]}`}
                            style={{ gridRow: row + 2, gridColumn: col + 2 }}
                        />
                    )
                )
            )}
        </div>
    </div>
);

const GitHubStats = () => {
    const [profile, setProfile] = useState(FALLBACK);
    const [contributions, setContributions] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Settled independently so a GitHub API rate limit doesn't also hide the contribution data
        Promise.allSettled([fetchProfileStats(), fetchContributions()]).then(([profileResult, contributionsResult]) => {
            if (profileResult.status === 'fulfilled') setProfile(profileResult.value);
            else console.error('Error fetching GitHub stats:', profileResult.reason);

            if (contributionsResult.status === 'fulfilled') setContributions(contributionsResult.value);
            else console.error('Error fetching GitHub contributions:', contributionsResult.reason);

            setIsLoading(false);
        });
    }, []);

    const longestStreak = contributions?.longestStreak ?? FALLBACK.longestStreak;
    const stats = [
        { label: 'Repositories', value: profile.repos, suffix: '+', icon: HiOutlineCubeTransparent, color: 'text-blue-500' },
        { label: 'Total Stars', value: profile.stars, suffix: '', icon: FaStar, color: 'text-yellow-500' },
        { label: 'Contributions', value: contributions?.total ?? FALLBACK.contributions, suffix: '+', icon: HiOutlineChartBar, color: 'text-green-500' },
        { label: 'Longest Streak', value: longestStreak, suffix: pluralDays(longestStreak), icon: HiOutlineFire, color: 'text-orange-500' },
    ];

    // Time-sensitive numbers have no honest fallback, so this row only appears once fetched live
    const highlights = contributions ? [
        { label: 'Current Streak', value: contributions.currentStreak, suffix: pluralDays(contributions.currentStreak), icon: FaFire },
        { label: `Contributions in ${contributions.year}`, value: contributions.thisYear, suffix: '', icon: HiOutlineCalendar },
        { label: 'Most in a Single Day', value: contributions.bestDay, suffix: '', icon: HiOutlineLightningBolt },
        { label: 'Followers', value: profile.followers, suffix: '', icon: HiOutlineUserGroup },
    ] : [];

    return (
        <section className="py-20 bg-base-100 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
                    >
                        <FaFire className="animate-pulse" />
                        Live from GitHub API
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold grotesk mb-4 flex items-center justify-center gap-3"
                    >
                        <HiOutlineChartBar className="text-primary" />
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">GitHub Statistics</span>
                    </motion.h2>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                        Real metrics from my coding journey — fetched live from GitHub
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.5, type: 'spring' }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass-card rounded-2xl p-6 text-center hover-lift border border-primary/20 group cursor-default relative overflow-hidden"
                        >
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-base-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                                    <stat.icon className="text-2xl" />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-primary grotesk mb-2">
                                    {isLoading ? (
                                        <span className="inline-block w-16 h-10 bg-primary/20 rounded animate-pulse"></span>
                                    ) : (
                                        <>
                                            <AnimatedCounter value={stat.value} />
                                            <span>{stat.suffix}</span>
                                        </>
                                    )}
                                </div>
                                <p className="text-base-content/70 font-medium text-sm uppercase tracking-wider">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Secondary highlights */}
                {highlights.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="glass-card rounded-xl px-4 py-3 border border-primary/10 flex items-center gap-3"
                            >
                                <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                    <item.icon className="text-lg" />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-xl font-bold text-base-content grotesk leading-tight">
                                        <AnimatedCounter value={item.value} />
                                        <span>{item.suffix}</span>
                                    </div>
                                    <p className="text-xs text-base-content/60 truncate">{item.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Contribution calendar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card rounded-2xl border border-primary/20 p-5 md:p-6 mt-6"
                >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                        <h3 className="text-lg font-semibold text-base-content">
                            {contributions
                                ? `${contributions.calendar.total.toLocaleString()} contributions in the last year`
                                : 'Contribution Activity'}
                        </h3>
                        {contributions && (
                            <span className="text-sm text-base-content/60">
                                {contributions.total.toLocaleString()} total since joining GitHub
                            </span>
                        )}
                    </div>

                    {isLoading ? (
                        <div className="h-36 rounded-xl bg-primary/10 animate-pulse"></div>
                    ) : contributions ? (
                        <>
                            <ContributionCalendar calendar={contributions.calendar} />
                            <div className="flex items-center justify-end gap-1.5 mt-3 text-xs text-base-content/60">
                                <span className="mr-1">Less</span>
                                {LEVEL_CLASSES.map((levelClass) => (
                                    <span key={levelClass} className={`w-3 h-3 rounded-[3px] ${levelClass}`}></span>
                                ))}
                                <span className="ml-1">More</span>
                            </div>
                        </>
                    ) : (
                        <p className="text-base-content/60 py-10 text-center">
                            The contribution calendar couldn't load right now — see it live on my GitHub profile.
                        </p>
                    )}
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-6 mt-6">
                    {/* Achievements */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card rounded-2xl border border-primary/20 p-5 md:p-6 lg:col-span-2"
                    >
                        <h3 className="text-lg font-semibold text-base-content flex items-center gap-2 mb-5">
                            <HiOutlineBadgeCheck className="text-primary text-xl" />
                            GitHub Achievements
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {achievements.map((badge, index) => (
                                <motion.div
                                    key={badge.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.4, type: 'spring' }}
                                    whileHover={{ y: -4 }}
                                    className="text-center group"
                                >
                                    <div className="relative w-20 h-20 mx-auto mb-3">
                                        <img
                                            src={badge.image}
                                            alt={`${badge.name} achievement badge`}
                                            width={80}
                                            height={80}
                                            loading="lazy"
                                            className="w-20 h-20 rounded-full drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        />
                                        {badge.tier && (
                                            <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-primary text-primary-content text-xs font-bold shadow-md">
                                                {badge.tier}
                                            </span>
                                        )}
                                    </div>
                                    <p className="font-semibold text-sm text-base-content">{badge.name}</p>
                                    <p className="text-xs text-base-content/60 mt-1 leading-snug">{badge.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Organizations */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="glass-card rounded-2xl border border-primary/20 p-5 md:p-6"
                    >
                        <h3 className="text-lg font-semibold text-base-content flex items-center gap-2 mb-5">
                            <HiOutlineOfficeBuilding className="text-primary text-xl" />
                            Organizations
                        </h3>
                        <ul className="space-y-3">
                            {organizations.map((org) => (
                                <li key={org.login}>
                                    <a
                                        href={`https://github.com/${org.login}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-2 -mx-2 rounded-xl hover:bg-primary/10 transition-colors duration-300"
                                    >
                                        <img
                                            src={org.avatar}
                                            alt={`${org.name} logo`}
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            className="w-10 h-10 rounded-lg bg-base-200"
                                        />
                                        <div className="min-w-0">
                                            <p className="font-semibold text-sm text-base-content truncate">{org.name}</p>
                                            <p className="text-xs text-base-content/60 truncate">@{org.login}</p>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-10"
                >
                    <Link to={personalIdentity.socialProfiles.github} target="_blank">
                        <Button variant="outline" size="lg" icon={FaGithub} iconPosition="left" className="border-gradient group">
                            <span className="group-hover:mr-2 transition-all">View GitHub Profile</span>
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default GitHubStats;
