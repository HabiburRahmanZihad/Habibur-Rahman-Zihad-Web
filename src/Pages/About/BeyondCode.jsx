/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import PhotoGrid from "./PhotoGrid";
import Button from "../../Components/Buttons/Button";

const BeyondCode = () => {
    return (
        <section className="py-20 bg-base-200 border-t border-base-300">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-primary mb-6 leading-snug">
                        What I Love Beyond Code
                    </h2>

                    <p className="text-base-content/80 leading-relaxed text-lg mb-5">
                        I’ve always loved to travel — it’s helped me open up around people, and for some
                        reason I feel more confident whenever I’m somewhere new. I’ve been to a few places
                        inside and outside Bangladesh, and I’d like to travel more when I get the chance.
                        One thing on my list is a solo trip, mostly to see how I handle things completely
                        on my own.
                    </p>

                    <p className="text-base-content/80 leading-relaxed text-lg">
                        On the technical side, I got into web development through the MERN stack, and that
                        early foundation is still where a lot of my instincts come from. It's what eventually
                        led to the full-stack and backend work I do professionally now, including the AI
                        and RAG-related work I’ve picked up more recently. I still enjoy learning new tools
                        when a project actually calls for them, rather than chasing whatever’s trending.
                    </p>

                    <Button
                        href="https://www.facebook.com/habiburrahmanzihad.zihad"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="md"
                        icon={FaFacebook}
                        iconPosition="left"
                        className="mt-8"
                    >
                        See More on Facebook
                    </Button>
                </motion.div>

                {/* Staggered Image Grid (Interactive Photo Gallery) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <PhotoGrid />
                </motion.div>
            </div>
        </section>
    );
};

export default BeyondCode;