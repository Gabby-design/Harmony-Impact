import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <section className="py-24 bg-dark relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10"></div>
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Join Us in Restoring Hope</h2>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                    Whether you are a partner, donor, or volunteer, your support helps us bring healing music to communities that need it most.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/get-involved"
                        className="px-8 py-4 bg-primary hover:bg-teal-600 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/30"
                    >
                        Become a Partner
                    </Link>
                    <Link
                        to="/contact"
                        className="px-8 py-4 bg-transparent border border-gray-500 hover:border-white text-gray-300 hover:text-white rounded-full font-bold text-lg transition-all"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
