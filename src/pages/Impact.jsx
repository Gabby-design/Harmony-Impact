import { BarChart3, FileText, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const Impact = () => {
    return (
        <div className="pt-10 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-blue-50 py-16 mb-16"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Impact & Accountability</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We are committed to data-driven impact measurement and transparent reporting.
                    </p>
                </div>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

                {/* Core Pillars of Impact */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { Icon: BarChart3, title: "Monitoring & Evaluation", desc: "Rigorous data collection on psychosocial well-being metrics before and after interventions.", color: "text-primary" },
                        { Icon: Target, title: "Strategic Goals", desc: "Clear KPIs aligned with UN Sustainable Development Goals (SDG 3: Good Health and Well-being).", color: "text-secondary" },
                        { Icon: FileText, title: "Transparent Reporting", desc: "Regular impact reports available to all partners, donors, and community members.", color: "text-blue-600" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                        >
                            <item.Icon className={`w-10 h-10 ${item.color} mb-6`} />
                            <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </section>

                {/* Impact Numbers (Placeholder) */}
                <motion.section
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-dark text-white rounded-3xl p-12 text-center"
                >
                    <h2 className="text-3xl font-bold mb-12">Our Impact to Date</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "500+", label: "Therapy Sessions", color: "text-primary" },
                            { value: "2k+", label: "Lives Touched", color: "text-secondary" },
                            { value: "10", label: "Partner Communities", color: "text-teal-400" },
                            { value: "50+", label: "Volunteers Trained", color: "text-purple-400" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                    <p className="mt-8 text-sm text-gray-500 italic pb-0">* Figures are illustrative placeholders.</p>
                </motion.section>

                {/* Reports Download */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-dark">Annual Reports</h2>
                        <button className="text-primary font-semibold hover:text-teal-800 transition-colors">View Archive</button>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 flex items-center justify-between hover:shadow-md transition-shadow">
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
                </motion.section>
            </div>
        </div>
    );
};

export default Impact;
