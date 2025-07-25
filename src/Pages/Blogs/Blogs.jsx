import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const blogs = [
    {
        id: 1,
        title: '🔗 Introduction to React Router',
        date: 'July 20, 2025',
        excerpt: 'React Router is the standard routing library for React. It enables navigation without full page reloads.',
        url: 'https://reactrouter.com/en/main/start/overview',
    },
    {
        id: 2,
        title: '⚛️ Understanding React useState & useEffect',
        date: 'July 15, 2025',
        excerpt: 'These hooks are essential for adding interactivity and side effects in React applications.',
        url: 'https://react.dev/learn/state-a-components-memory',
    },
    {
        id: 3,
        title: '🎨 Styling in React with Tailwind CSS',
        date: 'July 10, 2025',
        excerpt: 'Tailwind CSS pairs beautifully with React. Learn how utility-first classes simplify styling.',
        url: 'https://tailwindcss.com/docs/guides/vite',
    },
    {
        id: 4,
        title: '🧩 JavaScript ES6 Features You Should Know',
        date: 'July 8, 2025',
        excerpt: 'Explore modern JavaScript features like let/const, arrow functions, template literals, and more.',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        id: 5,
        title: '🧱 Building Responsive Layouts with CSS Grid',
        date: 'July 5, 2025',
        excerpt: 'CSS Grid provides powerful layout capabilities. Learn to build complex, responsive layouts easily.',
        url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
    },
    {
        id: 6,
        title: '🌀 What is Flexbox and How to Use It',
        date: 'July 3, 2025',
        excerpt: 'Flexbox is a one-dimensional layout method for laying out items in rows or columns.',
        url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
    },
    {
        id: 7,
        title: '🔌 Connecting Frontend with REST APIs',
        date: 'June 30, 2025',
        excerpt: 'Learn how to use fetch and axios to make API calls from your frontend application.',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
    },
    {
        id: 8,
        title: '📦 npm vs Yarn: Which One to Use?',
        date: 'June 28, 2025',
        excerpt: 'Understand the differences and use-cases for npm and Yarn as JavaScript package managers.',
        url: 'https://classic.yarnpkg.com/en/docs/migrating-from-npm/',
    },
    {
        id: 9,
        title: '🚀 Deploying a React App on Vercel',
        date: 'June 25, 2025',
        excerpt: 'Step-by-step guide to deploying your React application to Vercel’s cloud platform.',
        url: 'https://vercel.com/docs',
    },
    {
        id: 10,
        title: '📁 Structuring Large React Projects',
        date: 'June 22, 2025',
        excerpt: 'Proper project structure improves maintainability and scalability of React apps.',
        url: 'https://reactjs.org/docs/faq-structure.html',
    },
    {
        id: 11,
        title: '🌐 Creating Responsive Navbars with Tailwind CSS',
        date: 'June 20, 2025',
        excerpt: 'Build mobile-friendly and responsive navigation bars with Tailwind utility classes.',
        url: 'https://tailwindcss.com/components/navigation',
    },
    {
        id: 12,
        title: '🧮 JavaScript Closures Explained',
        date: 'June 18, 2025',
        excerpt: 'Closures are a fundamental concept in JavaScript. Understand how and why they work.',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
    },
    {
        id: 13,
        title: '🔐 Introduction to JSON Web Tokens (JWT)',
        date: 'June 15, 2025',
        excerpt: 'JWTs are used for securely transmitting information between parties as JSON objects.',
        url: 'https://jwt.io/introduction',
    },
    {
        id: 14,
        title: '⚙️ Getting Started with Node.js and Express',
        date: 'June 13, 2025',
        excerpt: 'Build your first backend API using Express, a fast Node.js web framework.',
        url: 'https://expressjs.com/en/starter/installing.html',
    },
    {
        id: 15,
        title: '🧾 HTML5 Semantic Elements You Should Use',
        date: 'June 10, 2025',
        excerpt: 'Use semantic HTML elements like <article>, <section>, and <aside> for better structure and accessibility.',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
    },
    {
        id: 16,
        title: '📊 Building Charts in React with Chart.js',
        date: 'June 7, 2025',
        excerpt: 'Visualize your data with beautiful charts using the Chart.js library in React.',
        url: 'https://www.chartjs.org/docs/latest/',
    },
    {
        id: 17,
        title: '🪝 Creating Custom React Hooks',
        date: 'June 5, 2025',
        excerpt: 'Learn how to extract logic from components and reuse it using custom hooks.',
        url: 'https://react.dev/learn/reusing-logic-with-custom-hooks',
    },
    {
        id: 18,
        title: '🗂 Using LocalStorage in JavaScript',
        date: 'June 3, 2025',
        excerpt: 'Persist user data in the browser with the Web Storage API.',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage',
    },
    {
        id: 19,
        title: '💡 Understanding the Virtual DOM in React',
        date: 'June 1, 2025',
        excerpt: 'Learn how React’s virtual DOM improves performance and rendering.',
        url: 'https://reactjs.org/docs/faq-internals.html',
    },
    {
        id: 20,
        title: '📦 Vite vs Webpack: Build Tools Compared',
        date: 'May 29, 2025',
        excerpt: 'Vite offers blazing fast dev experience. Compare it with Webpack’s traditional bundling.',
        url: 'https://vitejs.dev/guide/',
    },
    {
        id: 21,
        title: '🧰 Mastering DevTools for Debugging',
        date: 'May 27, 2025',
        excerpt: 'Learn how to effectively debug HTML, CSS, and JavaScript using Chrome DevTools.',
        url: 'https://developer.chrome.com/docs/devtools/',
    },
    {
        id: 22,
        title: '📜 TypeScript for JavaScript Developers',
        date: 'May 25, 2025',
        excerpt: 'Enhance your JavaScript code with static typing using TypeScript.',
        url: 'https://www.typescriptlang.org/docs/',
    },
    {
        id: 23,
        title: '🌐 Introduction to RESTful API Design',
        date: 'May 22, 2025',
        excerpt: 'Understand the principles of REST and how to design scalable APIs.',
        url: 'https://restfulapi.net/',
    },
    {
        id: 24,
        title: '🛠 Building a Full-Stack App with MERN',
        date: 'May 20, 2025',
        excerpt: 'Combine MongoDB, Express, React, and Node.js to build full-stack web apps.',
        url: 'https://www.mongodb.com/mern-stack',
    },
    {
        id: 25,
        title: '📥 Form Validation in React with Formik',
        date: 'May 18, 2025',
        excerpt: 'Learn how to manage and validate forms in React applications using Formik.',
        url: 'https://formik.org/docs/overview',
    },
    {
        id: 26,
        title: '🚀 Animations in React with Framer Motion',
        date: 'May 16, 2025',
        excerpt: 'Bring your React components to life with Framer Motion animations.',
        url: 'https://www.framer.com/motion/',
    },
    {
        id: 27,
        title: '📘 Markdown Basics for Developers',
        date: 'May 14, 2025',
        excerpt: 'Markdown helps format text on GitHub, blogs, and docs. Learn its syntax quickly.',
        url: 'https://www.markdownguide.org/basic-syntax/',
    },
    {
        id: 28,
        title: '💾 Introduction to MongoDB for Beginners',
        date: 'May 12, 2025',
        excerpt: 'NoSQL databases like MongoDB are great for flexible data structures.',
        url: 'https://www.mongodb.com/docs/manual/introduction/',
    }, {
        id: 29,
        title: '🌍 Internationalization (i18n) in React Apps',
        date: 'May 10, 2025',
        excerpt: 'Support multiple languages in your React application using libraries like react-i18next.',
        url: 'https://react.i18next.com/',
    },
    {
        id: 30,
        title: '🛡️ Securing Express APIs with Middleware',
        date: 'May 8, 2025',
        excerpt: 'Use Express middleware functions to add authentication, logging, and error handling.',
        url: 'https://expressjs.com/en/guide/using-middleware.html',
    },
];



const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};



const Blogs = () => {
    useEffect(() => {
        document.title = 'Blogs | Habibur Rahman Zihad';
    }, []);



    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen bg-base-100"
        >
            {/* Header Section */}
            <section className="py-20 bg-gradient-to-br from-base-100 to-base-200">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-primary grotesk mb-6">
                            My Blogs
                        </h1>
                        <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
                            I write about web development, React, and career tips for junior developers. Check out my latest thoughts!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Cards */}
            <section className="py-16 bg-base-100">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <motion.div
                            key={blog.id}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative bg-base-200 p-6 rounded-2xl shadow-md overflow-hidden border border-primary hover:border-primary/20 hover:shadow-xl transition-shadow duration-300 group will-change-transform"
                        >
                            {/* Decorative Glow */}
                            <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500 z-0"></div>

                            {/* Card Content */}
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold text-primary grotesk mb-2 group-hover:underline transition-all duration-200">
                                    {blog.title}
                                </h2>
                                <p className="text-sm text-base-content/50">{blog.date}</p>
                                <p className="mt-4 text-base text-base-content/80 leading-relaxed">
                                    {blog.excerpt}
                                </p>

                                <a
                                    href={blog.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 text-highlight font-medium group-hover:gap-3 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                                >
                                    Read More →
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default Blogs;