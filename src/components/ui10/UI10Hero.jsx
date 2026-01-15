import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Star, Key } from 'lucide-react';

const UI10Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-100">
            {/* Dynamic Background Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-stone-50/50 via-transparent to-stone-100/80"></div>

                {/* Animated Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl filter mix-blend-multiply animate-blob"></div>
                <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-stone-200/40 rounded-full blur-3xl filter mix-blend-multiply animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20 text-center">
                {/* Main Content */}
                <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-amber-600 font-bold tracking-[0.2em] uppercase text-sm mb-6">
                        The World's Finest Real Estate
                    </h2>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-900 leading-tight mb-8">
                        Discover <span className="italic font-light">Luxury</span><br />
                        Living Redefined.
                    </h1>

                    <p className="max-w-xl mx-auto text-xl text-stone-500 font-light leading-relaxed mb-10">
                        Handpicked residences in the world's most desirable locations.
                        Experience an exclusive collection of homes that match your extraordinary lifestyle.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            to="/ui/10/properties"
                            className="group relative px-8 py-4 bg-stone-900 text-white min-w-[200px] overflow-hidden"
                        >
                            <span className="relative z-10 font-bold tracking-widest uppercase text-sm group-hover:text-stone-900 transition-colors duration-300">
                                Explore Properties
                            </span>
                            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out"></div>
                        </Link>

                        <Link
                            to="/ui/10/agents"
                            className="group flex items-center gap-2 px-8 py-4 border border-stone-300 min-w-[200px] justify-center hover:border-amber-600 transition-colors duration-300"
                        >
                            <span className="font-bold tracking-widest uppercase text-sm text-stone-900">
                                Meet Our Agents
                            </span>
                            <ArrowRight className="w-4 h-4 text-amber-600 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-16 pt-8 border-t border-stone-200 inline-flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="flex items-center gap-3 text-stone-500">
                            <Shield className="w-5 h-5 text-amber-600" />
                            <span className="text-xs uppercase tracking-widest">Verified Listings</span>
                        </div>
                        <div className="flex items-center gap-3 text-stone-500">
                            <Key className="w-5 h-5 text-amber-600" />
                            <span className="text-xs uppercase tracking-widest">Private Tours</span>
                        </div>
                        <div className="flex items-center gap-3 text-stone-500">
                            <Star className="w-5 h-5 text-amber-600" />
                            <span className="text-xs uppercase tracking-widest">Premium Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UI10Hero;
