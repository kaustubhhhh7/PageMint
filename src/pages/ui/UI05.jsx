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
import { ArrowUp } from 'lucide-react';

const UI05 = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="font-sans antialiased text-slate-900 bg-white selection:bg-indigo-100 selection:text-indigo-900">
            <UI05Navbar />

            <main>
                <UI05Hero />

                {/* Diagonal Divider Example */}
                <div className="relative h-24 overflow-hidden -mt-[1px] z-10 pointer-events-none">
                    <div className="absolute inset-0 bg-white transform -skew-y-3 origin-top-left translate-y-12"></div>
                </div>

                <UI05Highlights />
                <UI05StickyStory />
                <UI05Specs />
                <UI05Reviews />
                <UI05FAQ />
                <UI05BuyNow />
            </main>

            <UI05Footer />

            {/* Floating Scroll to Top */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-slate-900 text-white shadow-2xl transition-all duration-500 hover:scale-110 active:scale-90
                    ${showTopBtn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
                `}
            >
                <ArrowUp size={24} />
            </button>

            {/* Global Grain Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03] mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>
        </div>
    );
};

export default UI05;
