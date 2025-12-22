import { BarChart3, FileText, Target } from 'lucide-react';

const Impact = () => {
    return (
        <div className="pt-10 pb-20">
            <div className="bg-blue-50 py-16 mb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Impact & Accountability</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We are committed to data-driven impact measurement and transparent reporting.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

                {/* Core Pillars of Impact */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <BarChart3 className="w-10 h-10 text-primary mb-6" />
                        <h3 className="text-xl font-bold text-dark mb-3">Monitoring & Evaluation</h3>
                        <p className="text-gray-600">Rigorous data collection on psychosocial well-being metrics before and after interventions.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <Target className="w-10 h-10 text-secondary mb-6" />
                        <h3 className="text-xl font-bold text-dark mb-3">Strategic Goals</h3>
                        <p className="text-gray-600">Clear KPIs aligned with UN Sustainable Development Goals (SDG 3: Good Health and Well-being).</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <FileText className="w-10 h-10 text-blue-600 mb-6" />
                        <h3 className="text-xl font-bold text-dark mb-3">Transparent Reporting</h3>
                        <p className="text-gray-600">Regular impact reports available to all partners, donors, and community members.</p>
                    </div>
                </section>

                {/* Impact Numbers (Placeholder) */}
                <section className="bg-dark text-white rounded-3xl p-12 text-center">
                    <h2 className="text-3xl font-bold mb-12">Our Impact to Date</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                            <div className="text-gray-400">Therapy Sessions</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">2k+</div>
                            <div className="text-gray-400">Lives Touched</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">10</div>
                            <div className="text-gray-400">Partner Communities</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">50+</div>
                            <div className="text-gray-400">Volunteers Trained</div>
                        </div>
                    </div>
                    <p className="mt-8 text-sm text-gray-500 italic pb-0">* Figures are illustrative placeholders.</p>
                </section>

                {/* Reports Download */}
                <section>
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-dark">Annual Reports</h2>
                        <button className="text-primary font-semibold hover:text-teal-800">View Archive</button>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                <FileText className="w-6 h-6 text-gray-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-dark">2024 Impact Report</h4>
                                <p className="text-sm text-gray-500">Released January 2025</p>
                            </div>
                        </div>
                        <button className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                            Download PDF
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Impact;
