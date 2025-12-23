import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import communityImg from '../assets/community-session.png';

const AboutSummary = () => {
    return (
        <section className="py-20 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={communityImg}
                                alt="Community Music Therapy in Nigeria"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-bold text-lg">Music as Medicine</p>
                                <p className="text-sm opacity-90">Lagos, Nigeria</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">About Harmony Impact</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-dark mb-6">We Believe in the Healing Power of Music</h3>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Harmony Impact is a mission-driven social enterprise tailored to address the mental health crisis in underserved communities. We don't just play music; we use it as a clinical and social tool to restore hope and build resilience.
                        </p>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            From structured therapy sessions to large-scale advocacy concerts, our work bridges the gap between creative expression and psychosocial support.
                        </p>
                        <Link
                            to="/about"
                            className="inline-flex items-center text-primary font-semibold hover:text-teal-800 transition-colors group"
                        >
                            Learn more about our mission
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSummary;
