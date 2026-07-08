import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Map, Users } from 'lucide-react';

const UI09Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative min-h-[auto] lg:min-h-screen flex items-center pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-20 overflow-hidden">
            {/* Background Image / Placeholder with Gradient */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1600"
                    alt="Travel Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} text-center lg:text-left`}>
                    <div className="inline-block bg-sky-500/20 backdrop-blur-sm border border-sky-500/30 text-sky-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                        ✈️ Discover Your Next Adventure
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-5 sm:mb-6">
                        Explore The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
                            World With Us
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
                        Curated tours, unforgettable memories, and premium comfort. Experience the world like never before with VoyageVista.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <Link
                            to="/ui/09/tours"
                            className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white px-8 py-3.5 sm:py-4 rounded-full font-bold shadow-lg shadow-sky-500/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                        >
                            View All Tours <ArrowRight size={18} />
                        </Link>
                        <Link
                            to="/ui/09/contact"
                            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 sm:py-4 rounded-full font-bold transition-all text-center"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Stats Row */}
                    <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-x-8 sm:gap-x-12 gap-y-6 text-white">
                        <div>
                            <div className="text-xl sm:text-2xl font-bold mb-1 flex items-center gap-2">
                                <Users size={18} className="sm:w-5 sm:h-5 text-sky-400" /> 1200+
                            </div>
                            <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wide">Happy Travelers</div>
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-bold mb-1 flex items-center gap-2">
                                <Map size={18} className="sm:w-5 sm:h-5 text-orange-400" /> 75+
                            </div>
                            <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wide">Destinations</div>
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-bold mb-1 flex items-center gap-2">
                                <Star size={18} className="sm:w-5 sm:h-5 text-yellow-400" /> 4.9
                            </div>
                            <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wide">Average Rating</div>
                        </div>
                    </div>
                </div>

                {/* Floating Badge (Visual Decoration) */}
                <div className={`hidden lg:block relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                    <div className="absolute top-0 right-12 bg-white p-6 rounded-2xl shadow-2xl max-w-xs animate-bounce-slow">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="bg-orange-100 text-orange-600 p-2 rounded-lg">
                                <Star size={20} fill="currentColor" />
                            </span>
                            <div>
                                <div className="font-bold text-slate-900">Summer Deal</div>
                                <div className="text-xs text-slate-500">Limited Time Offer</div>
                            </div>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">
                            Get 20% off on all Bali and Thailand packages booked this week!
                        </p>
                        <Link to="/ui/09/tours" className="text-sky-600 text-sm font-bold hover:underline">
                            Claim Offer →
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default UI09Hero;
