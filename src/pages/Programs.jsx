import { motion } from 'framer-motion';
import headerImg from '../assets/programs-header.png';
import healingImg from '../assets/program-healing.png';
import capacityImg from '../assets/program-capacity.png';
import eventsImg from '../assets/program-events.png';

const Programs = () => {
    const programs = [
        {
            title: "Harmony in Healing",
            description: "Our flagship music therapy program designed to support individuals and groups processing trauma, stress, and emotional challenges.",
            features: ["Group drumming sessions", "Lyric analysis & songwriting", "Guided imagery & music improvisation"],
            color: "border-teal-500",
            image: healingImg
        },
        {
            title: "Creative Capacity Building",
            description: "Empowering local artists, health workers, and educators with the skills to use music as a tool for psychosocial support.",
            features: ["Training workshops", "Curriculum development", "Mentorship programs"],
            color: "border-orange-500",
            image: capacityImg
        },
        {
            title: "Events for Impact",
            description: "Large-scale community events designed to raise awareness, reduce stigma, and foster social cohesion.",
            features: ["Community concerts", "Storytelling festivals", "Advocacy campaigns"],
            color: "border-purple-500",
            image: eventsImg
        }
    ];

    return (
        <div className="pt-10 pb-20">
            {/* Header with Background Image */}
            <div className="relative bg-dark text-white py-24 mb-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={headerImg}
                        alt="Music instruments"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            From clinical therapy to community celebration, our programs are designed to meet diverse healing needs.
                        </p>
                    </motion.div>
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
                                <div className={`relative h-96 w-full rounded-3xl overflow-hidden shadow-2xl group border-b-8 ${program.color}`}>
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent"></div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-bold text-dark mb-4">{program.title}</h2>
                                <div className={`w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-6`}></div>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    {program.description}
                                </p>
                                <ul className="space-y-3">
                                    {program.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700 font-medium">
                                            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                            </div>
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

