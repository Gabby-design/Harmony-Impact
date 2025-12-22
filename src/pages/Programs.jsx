import { motion } from 'framer-motion';

const Programs = () => {
    const programs = [
        {
            title: "Harmony in Healing",
            description: "Our flagship music therapy program designed to support individuals and groups processing trauma, stress, and emotional challenges.",
            features: ["Group drumming sessions", "Lyric analysis & songwriting", "Guided imagery & music improvisation"],
            color: "border-teal-500"
        },
        {
            title: "Creative Capacity Building",
            description: "Empowering local artists, health workers, and educators with the skills to use music as a tool for psychosocial support.",
            features: ["Training workshops", "Curriculum development", "Mentorship programs"],
            color: "border-orange-500"
        },
        {
            title: "Events for Impact",
            description: "Large-scale community events designed to raise awareness, reduce stigma, and foster social cohesion.",
            features: ["Community concerts", "Storytelling festivals", "Advocacy campaigns"],
            color: "border-purple-500"
        }
    ];

    return (
        <div className="pt-10 pb-20">
            {/* Header */}
            <div className="bg-dark text-white py-20 mb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        From clinical therapy to community celebration, our programs are designed to meet diverse healing needs.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-24">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                        >
                            <div className="w-full md:w-1/2">
                                <div className={`h-80 w-full bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 border-b-8 ${program.color} shadow-lg`}>
                                    <span>Image: {program.title}</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-bold text-dark mb-4">{program.title}</h2>
                                <div className={`w-20 h-1 bg-gradient-to-r from-gray-200 to-transparent mb-6`}></div>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    {program.description}
                                </p>
                                <ul className="space-y-3">
                                    {program.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Programs;
