import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaArrowLeft, FaRocket, FaCode, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100 flex items-center justify-center px-4 overflow-hidden relative">
            {/* Golden particle effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="text-center max-w-4xl mx-auto relative z-10">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden -z-10">
                    {/* Floating Code Symbols with Custom Colors */}
                    <motion.div
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 8,
                            ease: "linear"
                        }}
                        className="absolute top-10 left-20 text-6xl"
                        style={{ color: '#DAA520', opacity: 0.2 }}
                    >
                        &lt;/&gt;
                    </motion.div>
                    <motion.div
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 6,
                            ease: "easeInOut"
                        }}
                        className="absolute top-32 right-16 text-4xl"
                        style={{ color: '#B88B58', opacity: 0.3 }}
                    >
                        { }
                    </motion.div>
                    <motion.div
                        animate={{
                            x: [0, 20, 0],
                            opacity: [0.2, 0.8, 0.2]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-20 left-10 text-3xl"
                        style={{ color: '#6C6C6C', opacity: 0.4 }}
                    >
                        404
                    </motion.div>

                    {/* Additional floating elements */}
                    <motion.div
                        animate={{
                            rotate: [0, -360],
                            x: [0, 15, 0]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 10,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/4 left-1/4 text-5xl"
                        style={{ color: '#F9B934', opacity: 0.15 }}
                    >
                        ⚡
                    </motion.div>
                    <motion.div
                        animate={{
                            y: [0, -25, 0],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 7,
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-1/3 right-1/4 text-4xl"
                        style={{ color: '#DAA520', opacity: 0.2 }}
                    >
                        🚀
                    </motion.div>
                </div>

                {/* Main 404 with Enhanced Glitch Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8 relative"
                >
                    <motion.h1
                        className="text-[120px] md:text-[200px] lg:text-[280px] font-bold leading-none relative"
                        style={{
                            color: '#DAA520',
                            fontFamily: 'Space Grotesk, sans-serif',
                            fontWeight: '700'
                        }}
                        animate={{
                            textShadow: [
                                "0 0 0 transparent",
                                "3px 3px 0 #B88B58, 6px 6px 0 #6C6C6C, 9px 9px 20px rgba(218, 165, 32, 0.3)",
                                "0 0 0 transparent"
                            ]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut"
                        }}
                    >
                        404
                    </motion.h1>

                    {/* Enhanced Glitch Lines with Golden Colors */}
                    <motion.div
                        animate={{
                            opacity: [0, 1, 0],
                            scaleX: [0, 1, 0]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            times: [0, 0.1, 1]
                        }}
                        className="absolute top-1/3 left-0 w-full h-3"
                        style={{ backgroundColor: 'rgba(249, 185, 52, 0.6)' }}
                    />
                    <motion.div
                        animate={{
                            opacity: [0, 1, 0],
                            scaleX: [0, 1, 0]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2.5,
                            times: [0, 0.1, 1],
                            delay: 0.5
                        }}
                        className="absolute bottom-1/4 right-0 w-3/4 h-2"
                        style={{ backgroundColor: 'rgba(218, 165, 32, 0.6)' }}
                    />

                    {/* Additional glitch effect */}
                    <motion.div
                        animate={{
                            opacity: [0, 0.8, 0],
                            x: [0, 10, -5, 0]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.8,
                            times: [0, 0.05, 0.1, 1],
                            delay: 1
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                    />
                </motion.div>

                {/* Animated Golden Rocket with Trail */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mb-8 relative"
                >
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut"
                        }}
                        className="inline-block relative"
                    >
                        <FaRocket
                            className="text-8xl mx-auto relative z-10"
                            style={{ color: '#B88B58' }}
                        />

                        {/* Rocket trail effect */}
                        <motion.div
                            animate={{
                                opacity: [0.3, 0.7, 0.3],
                                scale: [0.8, 1.2, 0.8]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 rounded-full blur-xl"
                            style={{
                                background: 'radial-gradient(circle, rgba(218, 165, 32, 0.3) 0%, transparent 70%)'
                            }}
                        />
                    </motion.div>
                </motion.div>

                {/* Enhanced Error Message with Custom Styling */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mb-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 grotesk">
                        <span style={{ color: '#DAA520' }}>Houston,</span>
                        <span className="text-neutral"> we have a problem!</span>
                    </h2>
                    <div className="space-y-2">
                        <p className="text-xl md:text-2xl text-neutral/80">
                            This page seems to have escaped into the
                            <span className="font-semibold ml-2" style={{ color: '#B88B58' }}>void</span>
                        </p>
                        <p className="text-lg text-neutral/60">
                            Don't worry, even the best developers get lost sometimes
                            <span className="inline-block ml-1">🚀</span>
                        </p>
                    </div>
                </motion.div>

                {/* Enhanced Code Block with Golden Theme */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="bg-base-300 rounded-lg p-6 mb-8 max-w-2xl mx-auto font-mono text-left border-l-4"
                    style={{
                        borderLeftColor: '#DAA520',
                        boxShadow: '0 4px 20px rgba(218, 165, 32, 0.1)'
                    }}
                >
                    <div className="text-sm mb-2" style={{ color: '#6C6C6C' }}>
                        // Error Details
                    </div>
                    <div className="font-semibold" style={{ color: '#EF4444' }}>
                        Error: PageNotFoundException
                    </div>
                    <div className="text-neutral/60 text-sm mt-1">
                        at Route.handler (/portfolio/routes.js:404)<br />
                        at Browser.navigate (/client/router.js:128)
                    </div>
                    <div className="text-sm mt-3 p-2 rounded" style={{
                        backgroundColor: 'rgba(218, 165, 32, 0.1)',
                        color: '#B88B58'
                    }}>
                        💡 <strong>Suggestion:</strong> Try navigating to an existing page
                    </div>
                </motion.div>

                {/* Enhanced Action Buttons with Golden Theme */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                >
                    {/* Home Button with Custom Golden Style */}
                    <Link to="/">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 30px rgba(218, 165, 32, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-lg font-semibold text-white shadow-lg transition-all duration-300 flex items-center gap-2 text-lg"
                            style={{
                                backgroundColor: '#DAA520',
                                border: '2px solid transparent'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#F9B934';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#DAA520';
                            }}
                        >
                            <FaHome className="text-lg" />
                            Return Home
                        </motion.button>
                    </Link>

                    {/* Previous Page Button with Custom Styling */}
                    <motion.button
                        onClick={() => window.history.back()}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 30px rgba(184, 139, 88, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-lg"
                        style={{
                            backgroundColor: 'transparent',
                            border: '2px solid #B88B58',
                            color: '#B88B58'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#B88B58';
                            e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = '#B88B58';
                        }}
                    >
                        <FaArrowLeft className="text-lg" />
                        Go Back
                    </motion.button>
                </motion.div>

                {/* Enhanced Navigation Suggestions with Golden Theme */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    className="pt-8 border-t"
                    style={{ borderTopColor: 'rgba(218, 165, 32, 0.2)' }}
                >
                    <p className="text-neutral/60 mb-6 text-lg">
                        Or explore these sections of my portfolio:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                        <Link to="/about">
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(218, 165, 32, 0.08)"
                                }}
                                className="p-6 bg-base-200 rounded-xl transition-all duration-300 hover:shadow-lg group border-2 border-transparent hover:border-primary/20"
                                style={{
                                    boxShadow: '0 2px 10px rgba(218, 165, 32, 0.05)'
                                }}
                            >
                                <FaCode
                                    className="text-3xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                                    style={{ color: '#DAA520' }}
                                />
                                <h3 className="font-semibold text-neutral group-hover:text-primary transition-colors duration-300">
                                    About Me
                                </h3>
                                <p className="text-sm text-neutral/60 mt-1">
                                    My story & skills
                                </p>
                            </motion.div>
                        </Link>

                        <Link to="/projects">
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(218, 165, 32, 0.08)"
                                }}
                                className="p-6 bg-base-200 rounded-xl transition-all duration-300 hover:shadow-lg group border-2 border-transparent hover:border-primary/20"
                                style={{
                                    boxShadow: '0 2px 10px rgba(218, 165, 32, 0.05)'
                                }}
                            >
                                <FaRocket
                                    className="text-3xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                                    style={{ color: '#B88B58' }}
                                />
                                <h3 className="font-semibold text-neutral group-hover:text-primary transition-colors duration-300">
                                    Projects
                                </h3>
                                <p className="text-sm text-neutral/60 mt-1">
                                    My work & creations
                                </p>
                            </motion.div>
                        </Link>

                        <Link to="/contact">
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(218, 165, 32, 0.08)"
                                }}
                                className="p-6 bg-base-200 rounded-xl transition-all duration-300 hover:shadow-lg group border-2 border-transparent hover:border-primary/20"
                                style={{
                                    boxShadow: '0 2px 10px rgba(218, 165, 32, 0.05)'
                                }}
                            >
                                <FaStar
                                    className="text-3xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                                    style={{ color: '#6C6C6C' }}
                                />
                                <h3 className="font-semibold text-neutral group-hover:text-primary transition-colors duration-300">
                                    Contact
                                </h3>
                                <p className="text-sm text-neutral/60 mt-1">
                                    Let's connect
                                </p>
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>

                {/* Enhanced Easter Egg with Golden Touch */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="mt-12 text-xs text-neutral/40 p-4 rounded-lg"
                    style={{
                        backgroundColor: 'rgba(218, 165, 32, 0.03)',
                        border: '1px solid rgba(218, 165, 32, 0.1)'
                    }}
                >
                    <p className="flex items-center justify-center gap-2">
                        <span>Fun fact: 404 errors were named after room 404 at CERN where the web was born!</span>
                        <span style={{ color: '#DAA520' }}>🌐</span>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Error;