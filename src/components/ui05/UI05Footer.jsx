import React from 'react';
import { ArrowUp } from 'lucide-react';

const UI05Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-900 text-slate-400 py-12 relative overflow-hidden">
            {/* Background noise texture via CSS */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white tracking-widest mb-1">AURA</h2>
                    <p className="text-xs text-slate-500">Designed in California. Assembled in Future.</p>
                </div>

                <div className="flex gap-8 text-sm font-medium">
                    <a href="#overview" className="hover:text-white transition-colors">Overview</a>
                    <a href="#specs" className="hover:text-white transition-colors">Specs</a>
                    <a href="#buy" className="hover:text-white transition-colors">Buy</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                </div>

                <button
                    onClick={scrollToTop}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:-translate-y-1"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={20} />
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-xs text-slate-600">
                © 2024 AURA Audio Inc. All rights reserved. Actual product may float in CSS but real gravity applies.
            </div>
        </footer>
    );
};

export default UI05Footer;
