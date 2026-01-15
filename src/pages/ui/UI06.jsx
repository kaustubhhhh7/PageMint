import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowLeft } from 'lucide-react';

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
            {/* Floating Back To Top */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-24 right-8 z-40 p-3 rounded-full bg-slate-900 text-white shadow-xl border border-slate-800 transition-all duration-500 hover:scale-110 active:scale-90 ${showTopBtn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
            >
                <ArrowUp size={20} />
            </button>

            {/* Floating Back to Hub */}
            <Link
                to="/"
                className="fixed bottom-8 right-8 z-50 flex items-center gap-3 pl-2 pr-6 py-2 bg-white rounded-full shadow-[0_0_40px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_0_50px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 group border border-slate-100"
            >
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <ArrowLeft size={20} />
                </div>
                <span className="font-bold text-slate-800 tracking-tight group-hover:text-slate-900">Back to Hub</span>
            </Link>
        </div>
    );
};

export default UI06;
