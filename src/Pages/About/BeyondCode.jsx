import { motion } from "framer-motion";
import PhotoGrid from "./PhotoGrid";

const BeyondCode = () => {
    return (
        <section className="py-20 bg-base-100 border-t border-base-300">
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
                        I’ve always loved to travel. It has helped me open up with people, and for some
                        reason, I feel more confident whenever I’m exploring new places. I’ve been to a
                        few places inside and outside Bangladesh, and I’d love to travel even more in the
                        future. One of the top things on my bucket list is to take a solo trip—to test my
                        strengths and see how I handle things on my own. I believe travel not only
                        refreshes the mind but also teaches you about yourself in ways nothing else can.
                    </p>

                    <p className="text-base-content/80 leading-relaxed text-lg">
                        As I continued growing, I realized that many large-scale projects were being built
                        with the MERN stack. Driven by a desire to contribute to bigger, more complex
                        applications, I learned the MERN stack to level up my skills further. Throughout
                        this journey, I’ve genuinely loved the learning process and have continuously
                        adapted to the evolving demands of the tech market.
                    </p>
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