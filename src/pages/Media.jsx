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
                    {stories.map((story, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="bg-gray-200 rounded-2xl h-64 w-full mb-4 overflow-hidden relative">
                                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-dark">
                                    {story.category}
                                </div>
                                {/* Image Placeholder */}
                                <div className="w-full h-full bg-gray-300 group-hover:bg-gray-400 transition-colors flex items-center justify-center text-gray-500">
                                    Image
                                </div>
                            </div>
                            <p className="text-sm text-gray-400 mb-2">{story.date}</p>
                            <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors leading-tight">
                                {story.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Media;
