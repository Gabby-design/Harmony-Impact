import { Heart, Hand, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';
import teamImg from '../assets/team-session.png';
import communityImg from '../assets/community-session.png';


const GetInvolved = () => {
    return (
        <div className="pt-10 pb-20">
            <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Get Involved</h1>
                <p className="text-xl text-gray-600">
                    Be a part of the movement. Whether you want to partner, donate, or volunteer, your contribution creates harmony.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Partner */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                        <div className="h-48 overflow-hidden">
                            <img src={teamImg} alt="Partner" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-dark mb-4">Partner With Us</h2>
                            <p className="text-gray-600 mb-6">
                                Collaborate with us to bring music therapy programs to your community, school, or organization.
                            </p>
                            <Link
                                to="/contact?type=partnership"
                                className="block w-full py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-colors text-center"
                            >
                                Become a Partner
                            </Link>
                        </div>

                    </div>

                    {/* Support */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                        <div className="h-48 overflow-hidden">
                            <img src={heroBg} alt="Donate" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-dark mb-4">Support a Program</h2>
                            <p className="text-gray-600 mb-6">
                                Your financial support helps us purchase instruments, pay therapists, and organize community events.
                            </p>
                            <Link
                                to="/contact?type=donation"
                                className="block w-full py-3 bg-secondary text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg text-center"
                            >
                                Donate Now
                            </Link>
                        </div>

                    </div>

                    {/* Volunteer */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                        <div className="h-48 overflow-hidden">
                            <img src={communityImg} alt="Volunteer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-dark mb-4">Volunteer</h2>
                            <p className="text-gray-600 mb-6">
                                Join our team of creatives and health professionals. We need everything from musicians to event organizers.
                            </p>
                            <Link
                                to="/contact?type=volunteer"
                                className="block w-full py-3 border-2 border-purple-600 text-purple-600 font-bold rounded-xl hover:bg-purple-600 hover:text-white transition-colors text-center"
                            >
                                Join Volunteer Team
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInvolved;
