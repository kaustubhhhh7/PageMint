import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

import UI06Navbar from '../../components/ui06/UI06Navbar';
import UI06Hero from '../../components/ui06/UI06Hero';
import UI06StatsStrip from '../../components/ui06/UI06StatsStrip';
import UI06Speakers from '../../components/ui06/UI06Speakers';
import UI06Schedule from '../../components/ui06/UI06Schedule';
import UI06Tickets from '../../components/ui06/UI06Tickets';
import UI06Venue from '../../components/ui06/UI06Venue';
import UI06Sponsors from '../../components/ui06/UI06Sponsors';
import UI06FAQ from '../../components/ui06/UI06FAQ';
import UI06Footer from '../../components/ui06/UI06Footer';

const UI06 = () => {
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
        <div className="font-sans antialiased text-slate-900 bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
            <UI06Navbar />

            <main>
                <UI06Hero />
                <UI06StatsStrip />
                <UI06Speakers />
                {/* Diagonal Divider */}
                <div className="h-24 bg-white -mb-[1px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900 transform -skew-y-2 origin-bottom-right translate-y-12"></div>
                </div>
                {/* Schedule & Tickets need background contrast */}
                <div className="relative z-10">
                    <UI06Schedule />
                </div>
                <UI06Tickets />
                <UI06Venue />
                <UI06Sponsors />
                <UI06FAQ />
            </main>

            <UI06Footer />

            {/* Floating Back To Top */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-gradient-to-r from-cyan-500 to-lime-400 text-slate-900 shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-cyan-500/50 active:scale-90 ${showTopBtn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
                <ArrowUp size={24} />
            </button>
        </div>
    );
};

export default UI06;
