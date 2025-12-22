import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We'd love to hear from you. Whether you have a question about our programs, want to partner, or just want to say hello.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-10">
                        <h2 className="text-2xl font-bold text-dark">Get in Touch</h2>

                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-dark text-lg mb-1">Our Location</h3>
                                <p className="text-gray-600">Abuja Nigeria</p>
                                <p className="text-gray-500 text-sm mt-1">Visit us by appointment</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-dark text-lg mb-1">Email Us</h3>
                                <p className="text-gray-600">harmonyimpact@gmail.com</p>
                                <p className="text-gray-500 text-sm mt-1">For general inquiries and partnerships</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-dark text-lg mb-1">Call Us</h3>
                                <p className="text-gray-600">0915 360 3332 / 0813 313 8624</p>
                                <p className="text-gray-500 text-sm mt-1">Mon-Fri from 9am to 5pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-dark mb-6">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Your name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="How can we help?" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Write your message here..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
