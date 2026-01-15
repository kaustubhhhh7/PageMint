import React, { useState, useEffect } from 'react';
import { X, Clock, Zap } from 'lucide-react';

const UI08ScholarshipBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [timeLeft, setTimeLeft] = useState({ h: 14, m: 28, s: 45 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { h, m, s } = prev;
                if (s > 0) s--;
                else {
                    s = 59;
                    if (m > 0) m--;
                    else {
                        m = 59;
                        if (h > 0) h--;
                    }
                }
                return { h, m, s };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="bg-indigo-600 text-white relative overflow-hidden z-[60]">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm animate-pulse">
                        <Zap size={16} className="text-yellow-300" fill="currentColor" />
                    </div>
                    <span className="font-bold text-sm md:text-base">
                        Early Bird Scholarship: <span className="text-yellow-300">Get 40% OFF</span> until the countdown ends.
                    </span>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1 font-mono text-sm bg-indigo-800/50 px-3 py-1 rounded-md border border-indigo-500">
                        <Clock size={14} className="text-indigo-300" />
                        <span className="font-bold text-white">{timeLeft.h.toString().padStart(2, '0')}:{timeLeft.m.toString().padStart(2, '0')}:{timeLeft.s.toString().padStart(2, '0')}</span>
                    </div>

                    <button
                        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-white text-indigo-700 hover:bg-indigo-50 px-4 py-1.5 rounded-full text-xs md:text-sm font-black uppercase tracking-wide transition-all shadow-lg hover:shadow-xl active:scale-95"
                    >
                        Claim Offer
                    </button>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-1 hover:bg-indigo-700 rounded-full transition-colors opacity-70 hover:opacity-100"
                    >
                        <X size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UI08ScholarshipBanner;
