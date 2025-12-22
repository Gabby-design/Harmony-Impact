import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Programs', path: '/programs' },
        { name: 'Impact', path: '/impact' },
        { name: 'Get Involved', path: '/get-involved' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;
    const isHome = location.pathname === '/';

    // Dynamic classes based on scroll and location
    // If home & not scrolled: Transparent (show Hero)
    // If scrolled: Primary color with blur
    // If not home & not scrolled: Primary (since other pages have light bg usually, but let's stick to user request of "primary color")

    // User request interpretation: "Navbar have the color of the primary color"
    // "When I scroll... transparent blur"

    // Let's go with:
    // Default: bg-primary (Solid Teal)
    // Scrolled: bg-primary/30 + backdrop-blur-md (Glassmorphism)

    const navbarClasses = scrolled
        ? 'bg-primary/30 backdrop-blur-md shadow-md border-b border-white/10'
        : 'bg-primary shadow-none border-b border-transparent';

    const textColor = 'text-white';
    const logoColor = 'text-white';

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarClasses}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className={`p-2 rounded-full transition-colors ${scrolled ? 'bg-white/20' : 'bg-white/10 group-hover:bg-white/20'}`}>
                            <Music className={`h-6 w-6 ${logoColor}`} />
                        </div>
                        <span className={`font-bold text-xl tracking-tight ${textColor}`}>
                            Harmony<span className="text-secondary">Impact</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-200 ${isActive(link.path)
                                        ? 'text-secondary font-bold'
                                        : `${textColor} hover:text-secondary`
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/get-involved"
                            className="bg-secondary hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                        >
                            <Heart className="w-4 h-4" />
                            Partner With Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${textColor} hover:text-secondary focus:outline-none`}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary border-t border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-base font-medium ${isActive(link.path)
                                            ? 'bg-white/10 text-white'
                                            : 'text-white/80 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 px-4">
                                <Link
                                    to="/get-involved"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full bg-secondary text-white py-3 rounded-xl font-medium flex justify-center items-center gap-2 shadow-sm hover:bg-orange-600"
                                >
                                    <Heart className="w-4 h-4" />
                                    Partner With Us
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
