import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section className="relative bg-dark text-white overflow-hidden min-h-[90vh] flex items-center">
            {/* Background with Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-slate-900 to-slate-900 opacity-90 z-0"></div>
            <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20 z-0" style={{ backgroundImage: `url(${heroBg})` }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
                            Healing Minds. <br />
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-400 to-teal-200 inline-block"
                                animate={{
                                    scale: [1, 1.05, 1],
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    backgroundSize: '200% 200%'
                                }}
                            >
                                Restoring Hope.
                            </motion.span> <br />
                            Transforming Communities.
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
                    >
                        Using music-based therapy, community engagement, and evidence-driven programs to improve emotional wellbeing in underserved communities.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            to="/get-involved"
                            className="px-8 py-4 bg-primary hover:bg-teal-600 text-white rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
                        >
                            <Heart className="w-5 h-5" />
                            Partner With Us
                        </Link>
                        <Link
                            to="/programs"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 group"
                        >
                            Our Programs
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Shapes/Decorations */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-t from-primary/10 to-transparent blur-3xl rounded-full translate-y-1/2 translate-x-1/2"></div>
        </section>
    );
};

export default Hero;
