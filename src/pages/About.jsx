import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-10 pb-20">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/10 to-teal-50 py-16 mb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">About Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Who We Are, Our Vision, and Our Mission.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                {/* Who We Are */}
                <section className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold text-dark mb-6">Who We Are</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            Harmony Impact is a mission-driven social enterprise tailored to address the mental health crisis in underserved communities.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We operate at the intersection of music, health, and social impact. By leveraging evidence-based music therapy and community engagement, we provide spaces for healing, expression, and connection.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="bg-gray-200 rounded-2xl h-80 w-full flex items-center justify-center text-gray-400">
                            {/* Placeholder for Who We Are Image */}
                            <span>Image: Team or Community Event</span>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <h2 className="text-2xl font-bold text-dark mb-4">Our Vision</h2>
                            <p className="text-gray-600 leading-relaxed">
                                A world where every community has access to the healing power of music and the psychosocial support needed to thrive mentally and emotionally.
                            </p>
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                            </div>
                            <h2 className="text-2xl font-bold text-dark mb-4">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed">
                                To improve mental health and emotional wellbeing in underserved communities through music-based therapy, community engagement, and evidence-driven programs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Leadership */}
                <section>
                    <h2 className="text-3xl font-bold text-dark mb-10 text-center">Leadership Profile</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Placeholder Leadership Cards */}
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="text-center group">
                                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
                                </div>
                                <h3 className="text-xl font-bold text-dark">Leader Name</h3>
                                <p className="text-primary font-medium mb-2">Position Title</p>
                                <p className="text-sm text-gray-500 max-w-xs mx-auto">Brief bio describing expertise in music therapy or organizational leadership.</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
