import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, ArrowRight, QrCode } from 'lucide-react';

const UI06Hero = () => {
    const targetDate = new Date('2026-03-15T09:00:00');
    const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

    function calcTimeLeft() {
        const diff = targetDate - new Date();
        if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            mins: Math.floor((diff / 1000 / 60) % 60),
            secs: Math.floor((diff / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calcTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const marqueeItems = ['AI & ML', 'Web3', 'Cloud Native', 'DevOps', 'Cybersec', 'UX Design', 'Startups', 'Venture Capital', 'Robotics', 'Quantum'];

    return (
        <section id="hero" className="relative pt-24 pb-0 sm:pt-32 lg:pt-32 overflow-hidden bg-slate-50">
            {/* Background Spotlights */}
            <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow delay-1000" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 mb-12 sm:mb-20">

                {/* Text Content */}
                <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm animate-fade-in-up">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Global Tech Conference</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter animate-fade-in-up delay-100">
                        NEXA <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">SUMMIT</span> <br />
                        <span className="text-stroke-3 text-transparent bg-clip-text bg-none" style={{ WebkitTextStroke: '2px #cbd5e1' }}>2026</span>
                    </h1>

                    <p className="text-xl text-slate-500 font-medium max-w-lg leading-relaxed animate-fade-in-up delay-200">
                        The ultimate gathering for builders, creators, and innovators.
                        Two days of future-defining talks, workshops, and networking in Mumbai.
                    </p>

                    <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
                        <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-lg font-bold text-sm border border-orange-200">
                            <Calendar size={18} /> March 15-16, 2026
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-lg font-bold text-sm border border-amber-200">
                            <MapPin size={18} /> Mint Convention Center, Mumbai
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 animate-fade-in-up delay-400">
                        <button
                            onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto bg-slate-900 text-white px-8 py-3.5 sm:py-4 rounded-xl font-bold uppercase tracking-wider shadow-xl shadow-slate-900/20 hover:bg-orange-600 hover:shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
                        >
                            Book Pass <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto text-slate-900 font-bold uppercase tracking-wider hover:text-orange-600 transition-colors border-b-2 border-slate-200 hover:border-orange-600 pb-1"
                        >
                            View Schedule
                        </button>
                    </div>
                </div>

                {/* Ticket Stub Card */}
                <div className="relative perspective-1000 animate-fade-in-up delay-500">
                    <div className="relative w-full max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-all duration-500 ">
                        {/* Upper Part */}
                        <div className="bg-gradient-to-br from-orange-600 to-amber-700 text-white p-8 rounded-t-3xl relative overflow-hidden shadow-lg shadow-orange-500/20">
                            <div className="absolute top-0 right-0 p-8 opacity-20">
                                <QrCode size={120} />
                            </div>
                            <div className="relative z-10">
                                <span className="text-xs font-bold uppercase tracking-widest opacity-80">General Admission</span>
                                <h3 className="text-4xl font-black mt-2 tracking-tight">NEXA SUMMIT</h3>
                                <div className="mt-8 flex gap-8">
                                    <div>
                                        <div className="text-xs opacity-60 uppercase mb-1">Date</div>
                                        <div className="font-bold text-lg">March 15</div>
                                    </div>
                                    <div>
                                        <div className="text-xs opacity-60 uppercase mb-1">Time</div>
                                        <div className="font-bold text-lg">09:00 AM</div>
                                    </div>
                                    <div>
                                        <div className="text-xs opacity-60 uppercase mb-1">Seat</div>
                                        <div className="font-bold text-lg">GA-04</div>
                                    </div>
                                </div>
                            </div>

                            {/* Perforation Circles (Concept) */}
                            <div className="absolute -bottom-3 left-0 w-full flex justify-between px-4">
                                {[...Array(12)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-slate-50" />)}
                            </div>
                        </div>

                        {/* Lower Part (Countdown) */}
                        <div className="bg-white p-8 rounded-b-3xl shadow-2xl relative border-x-2 border-b-2 border-orange-200">
                            {/* Notch cutout visual trick could go here but minimal is fine */}
                            <div className="flex justify-between items-center bg-slate-50 rounded-2xl p-4 border border-slate-100">
                                <div className="text-center">
                                    <div className="text-2xl font-black text-slate-900 font-mono">{timeLeft.days}</div>
                                    <div className="text-[10px] uppercase font-bold text-slate-400">Days</div>
                                </div>
                                <div className="text-2xl font-black text-slate-300">:</div>
                                <div className="text-center">
                                    <div className="text-2xl font-black text-slate-900 font-mono">{timeLeft.hours}</div>
                                    <div className="text-[10px] uppercase font-bold text-slate-400">Hrs</div>
                                </div>
                                <div className="text-2xl font-black text-slate-300">:</div>
                                <div className="text-center">
                                    <div className="text-2xl font-black text-slate-900 font-mono">{timeLeft.mins}</div>
                                    <div className="text-[10px] uppercase font-bold text-slate-400">Mins</div>
                                </div>
                                <div className="text-2xl font-black text-slate-300">:</div>
                                <div className="text-center">
                                    <div className="text-2xl font-black text-slate-900 font-mono">{timeLeft.secs}</div>
                                    <div className="text-[10px] uppercase font-bold text-slate-400">Secs</div>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <div className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full animate-pulse border border-amber-300">
                                    Limited Seats • Early Bird Ending Soon
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Marquee Strip */}
            <div className="w-full bg-slate-900 py-4 sm:py-6 overflow-hidden rotate-1 scale-[1.02] sm:scale-105 border-y-2 sm:border-y-4 border-orange-500">
                <div className="flex gap-8 sm:gap-12 animate-marquee whitespace-nowrap">
                    {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-white/90 text-2xl font-black uppercase tracking-widest">
                            {item} <span className="text-orange-400">•</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-marquee { animation: marquee 30s linear infinite; }
                
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.1); }
                }
                .animate-pulse-slow { animation: pulse-slow 8s infinite ease-in-out; }

                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
                
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
                .delay-500 { animation-delay: 0.5s; }
                .perspective-1000 { perspective: 1000px; }
            `}</style>
        </section>
    );
};

export default UI06Hero;
