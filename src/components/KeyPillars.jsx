import { motion } from 'framer-motion';
import { Music, Users, BarChart3 } from 'lucide-react';

const pillars = [
    {
        icon: Music,
        title: "Music Therapy & Psychosocial Support",
        description: "Structured group sessions promoting emotional expression, resilience, and healing through the power of music.",
        color: "bg-teal-100 text-teal-700",
    },
    {
        icon: Users,
        title: "Community Engagement & Advocacy",
        description: "Healing concerts, storytelling events, and stigma-reduction initiatives that bring people together.",
        color: "bg-orange-100 text-orange-700",
    },
    {
        icon: BarChart3,
        title: "Monitoring, Evaluation & Learning",
        description: "Data-driven impact measurement and transparent reporting to ensure sustainable change.",
        color: "bg-blue-100 text-blue-700",
    },
];

const KeyPillars = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Core Pillars</h2>
                    <p className="text-lg text-gray-600">
                        We built Harmony Impact on three foundational pillars designed to create lasting change.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-light rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <div className={`w-14 h-14 ${pillar.color} rounded-2xl flex items-center justify-center mb-6`}>
                                <pillar.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-3 leading-snug">{pillar.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyPillars;
