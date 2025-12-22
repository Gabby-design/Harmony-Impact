import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tight">
                            Harmony<span className="text-primary">Impact</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Healing Minds. Restoring Hope. Transforming Communities through the power of music and evidence-driven therapy.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6 text-gray-100">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-gray-400 hover:text-primary text-sm transition-colors">About Us</Link></li>
                            <li><Link to="/programs" className="text-gray-400 hover:text-primary text-sm transition-colors">Our Programs</Link></li>
                            <li><Link to="/impact" className="text-gray-400 hover:text-primary text-sm transition-colors">Impact Reports</Link></li>
                            <li><Link to="/media" className="text-gray-400 hover:text-primary text-sm transition-colors">Media & Stories</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-primary text-sm transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6 text-gray-100">Our Programs</h4>
                        <ul className="space-y-3">
                            <li><Link to="/programs#healing" className="text-gray-400 hover:text-primary text-sm transition-colors">Harmony in Healing</Link></li>
                            <li><Link to="/programs#capacity" className="text-gray-400 hover:text-primary text-sm transition-colors">Creative Capacity Building</Link></li>
                            <li><Link to="/programs#events" className="text-gray-400 hover:text-primary text-sm transition-colors">Events for Impact</Link></li>
                            <li><Link to="/programs#advocacy" className="text-gray-400 hover:text-primary text-sm transition-colors">Community Advocacy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6 text-gray-100">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span>Lagos, Nigeria</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <a href="mailto:info@harmonyimpact.org" className="hover:text-white transition-colors">info@harmonyimpact.org</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <a href="tel:+2348000000000" className="hover:text-white transition-colors">+234-800-000-0000</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {currentYear} Harmony Impact. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link to="/privacy" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
