import heroBg from '../assets/hero-bg.png';
import communityImg from '../assets/community-session.png';

const Media = () => {
    const stories = [
        { title: "Healing Through Rhythm: The Lagos Concert", date: "Dec 12, 2024", category: "Events" },
        { title: "Meet Amina: Finding Voice After Trauma", date: "Nov 28, 2024", category: "Stories" },
        { title: "Harmony Impact Featured in National Daily", date: "Oct 15, 2024", category: "Press" },
        { title: "The Science of Music Therapy", date: "Sep 02, 2024", category: "Blog" },
    ];

    return (
        <div className="pt-10 pb-20">
            <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Media & Stories</h1>
                <p className="text-xl text-gray-600">
                    Latest updates, community stories, and press coverage.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="group cursor-pointer">
                        <div className="bg-gray-200 rounded-2xl h-64 w-full mb-4 overflow-hidden relative shadow-md">
                            <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-dark z-10">
                                Events
                            </div>
                            <img
                                src={heroBg}
                                alt="Lagos Concert"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <p className="text-sm text-gray-400 mb-2">Dec 12, 2024</p>
                        <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors leading-tight">
                            Healing Through Rhythm: The Lagos Concert
                        </h3>
                    </div>

                    <div className="group cursor-pointer">
                        <div className="bg-gray-200 rounded-2xl h-64 w-full mb-4 overflow-hidden relative shadow-md">
                            <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-dark z-10">
                                Stories
                            </div>
                            <img
                                src={communityImg}
                                alt="Music Therapy Session"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <p className="text-sm text-gray-400 mb-2">Nov 28, 2024</p>
                        <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors leading-tight">
                            Meet Amina: Finding Voice After Trauma
                        </h3>
                    </div>

                    {/* Press Feature - Add press-feature.png to assets folder when available */}
                    <div className="group cursor-pointer">
                        <div className="bg-gradient-to-br from-teal-100 via-primary/20 to-blue-100 rounded-2xl h-64 w-full mb-4 overflow-hidden relative shadow-md flex items-center justify-center">
                            <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-dark z-10">
                                Press
                            </div>
                            {/* Decorative newspaper icon */}
                            <div className="text-center">
                                <svg className="w-20 h-20 text-primary/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                                <p className="text-sm font-medium text-gray-500">Press Coverage</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">Oct 15, 2024</p>
                        <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors leading-tight">
                            Harmony Impact Featured in National Daily
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Media;
