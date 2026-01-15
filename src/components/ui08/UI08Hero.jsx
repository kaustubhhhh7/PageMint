import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import UI08LiveClassPreview from './UI08LiveClassPreview';

const UI08Hero = () => {
    const [tagline, setTagline] = useState('');
    const fullTagline = 'Frontend • Backend • Design • Deploy';

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTagline(fullTagline.slice(0, i));
            i++;
            if (i > fullTagline.length) i = fullTagline.length;
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="overview" className="relative pt-20 pb-20 overflow-hidden bg-slate-50 min-h-[90vh] flex items-center">
            {/* Ambient Background Blob */}
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-indigo-100/40 via-purple-100/30 to-transparent rounded-full blur-3xl pointer-events-none animate-float-slow" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-tl from-rose-100/40 via-orange-100/30 to-transparent rounded-full blur-3xl pointer-events-none animate-float-delayed" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">

                {/* Left Content */}
                <div className="space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full border border-indigo-100 shadow-sm animate-fade-in-up">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                        </span>
                        <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest">Cohort #12 Enrolling Now</span>
                    </div>

                    <div>
                        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-4">
                            Learn like a team. <br />
                            <span className="relative inline-block">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-500">Build like a pro.</span>
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 opacity-50 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                                </svg>
                            </span>
                        </h1>
                        <div className="h-8 font-mono text-lg font-bold text-slate-400">
                            {tagline}<span className="animate-pulse">|</span>
                        </div>
                    </div>

                    <p className="text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Stop learning in isolation. Join a cohort of driven developers, build real-world projects, and get mentored by senior engineers.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <button
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-indigo-600/30 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
                        >
                            Join Next Cohort <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto bg-white text-slate-700 border-2 border-slate-200 hover:border-indigo-200 hover:text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group"
                        >
                            <Play size={20} fill="currentColor" className="opacity-50 group-hover:opacity-100 group-hover:text-indigo-600 transition-opacity" /> Watch Preview
                        </button>
                    </div>

                    {/* Trust Row */}
                    <div className="pt-6 flex items-center justify-center lg:justify-start gap-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold overflow-hidden shadow-sm`}>
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 13}`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <div className="text-left">
                            <div className="flex items-center gap-1 text-orange-400">
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                            </div>
                            <div className="text-xs font-bold text-slate-500">Rated 4.9 by 10k+ learners</div>
                        </div>
                    </div>
                </div>

                {/* Right Content: Live Class Visual */}
                <div>
                    <UI08LiveClassPreview />
                </div>

            </div>

            <style>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                .animate-float-slow { animation: float-slow 8s infinite ease-in-out; }
                .animate-float-delayed { animation: float-slow 10s infinite ease-in-out reverse; }
            `}</style>
        </section>
    );
};

export default UI08Hero;
