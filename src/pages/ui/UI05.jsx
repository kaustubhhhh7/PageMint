import React, { useState, useEffect } from 'react';
import UI05Navbar from '../../components/ui05/UI05Navbar';
import UI05Hero from '../../components/ui05/UI05Hero';
import UI05Highlights from '../../components/ui05/UI05Highlights';
import UI05StickyStory from '../../components/ui05/UI05StickyStory';
import UI05Specs from '../../components/ui05/UI05Specs';
import UI05Reviews from '../../components/ui05/UI05Reviews';
import UI05FAQ from '../../components/ui05/UI05FAQ';
import UI05BuyNow from '../../components/ui05/UI05BuyNow';
import UI05Footer from '../../components/ui05/UI05Footer';
import BackToHub from '../../components/common/BackToHub';

const UI05 = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 800);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 relative overflow-x-hidden">
            {/* Subtle Background Grain Overlay */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]"
                style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)`,
                    backgroundSize: '4px 4px'
                }}
            ></div>

            <div className="relative z-10">
                <UI05Navbar />
                <UI05Hero />

                {/* Diagonal Separator */}
                <div className="relative h-24 bg-gradient-to-b from-white to-slate-50">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 transform -skew-y-2"></div>
                </div>

                <UI05Highlights />

                {/* Diagonal Separator */}
                <div className="relative h-24 bg-gradient-to-b from-white to-slate-50">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 transform skew-y-2"></div>
                </div>

                <UI05StickyStory />
                <UI05Specs />
                <UI05Reviews />

                {/* Diagonal Separator */}
                <div className="relative h-16 bg-gradient-to-b from-white to-slate-50">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 to-blue-500/5 transform -skew-y-1"></div>
                </div>

                <UI05FAQ />
                <UI05BuyNow />
                <UI05Footer />
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-24 right-8 z-40 p-4 bg-slate-900 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
                aria-label="Scroll to top"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>

            <BackToHub />
        </div>
    );
};

export default UI05;
