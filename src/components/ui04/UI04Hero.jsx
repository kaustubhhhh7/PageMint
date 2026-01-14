import React, { useEffect, useState } from 'react';

const UI04Hero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-950 text-white">
            {/* Animated Background Streaks & Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[800px] bg-orange-600/10 -skew-x-[20deg] blur-[140px] rounded-3xl animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-slate-800/20 -skew-x-[20deg] blur-[120px] rounded-full"></div>

                {/* Centre Glow to reduce "flatness" */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-950/20 blur-[150px] rounded-full"></div>

                {/* Moving stripes with less contrast */}
                <div className="absolute top-0 right-[20%] w-[1px] h-full bg-white/5 -skew-x-[20deg]"></div>
                <div className="absolute top-0 right-[15%] w-32 h-full bg-white/[0.02] -skew-x-[20deg]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className={`transition-all duration-1000 transform ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-900/30 border border-orange-500/30 rounded-full mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_orange]"></span>
                        <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">New Year • New You</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black text-white italic tracking-tighter leading-[0.9] mb-6 drop-shadow-2xl">
                        TRAIN HARD.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-200">STAY STRONG.</span><br />
                        <span className="text-white decoration-orange-500 underline decoration-4 underline-offset-4 decoration-skip-ink-none">TRANSFORM.</span>
                    </h1>

                    <p className="text-xl text-slate-400 mb-8 max-w-lg font-medium">
                        World-class coaching, data-driven programs, and a community that refuses to quit. Your journey starts here.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <button
                            onClick={() => scrollTo('plans')}
                            className="group relative px-8 py-4 bg-orange-600 text-white font-bold uppercase tracking-wider skew-x-[-10deg] overflow-hidden hover:bg-orange-500 transition-colors duration-300 hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]"
                        >
                            <span className="relative z-10 inline-block skew-x-[10deg]">Start Free Trial</span>
                            {/* Pulse Glow Effect */}
                            <span className="absolute top-0 left-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-shimmer skew-x-[20deg]"></span>
                        </button>
                        <button
                            onClick={() => scrollTo('programs')}
                            className="px-8 py-4 bg-transparent text-white border-2 border-white/20 font-bold uppercase tracking-wider skew-x-[-10deg] hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
                        >
                            <span className="inline-block skew-x-[10deg]">View Programs</span>
                        </button>
                    </div>

                    <div className="flex items-center gap-8 border-t border-white/10 pt-8">
                        <div>
                            <p className="text-2xl font-black text-white">500+</p>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Members</p>
                        </div>
                        <div>
                            <p className="text-2xl font-black text-white">12</p>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Expert Trainers</p>
                        </div>
                        <div>
                            <p className="text-2xl font-black text-white">4.9★</p>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Average Rating</p>
                        </div>
                    </div>
                </div>

                {/* Right Content - Dashboard Mock */}
                <div className={`relative hidden lg:block transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                    {/* Main Card */}
                    <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl shadow-black/50 border border-white/10 w-full max-w-md mx-auto rotate-[-2deg] hover:rotate-0 transition-transform duration-500 group">
                        {/* Glow behind card */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>

                        {/* Header */}
                        <div className="relative z-10 flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                            <div>
                                <h3 className="text-lg font-bold text-white">Weekly Progress</h3>
                                <p className="text-xs text-slate-400 font-semibold">Jan 12 - Jan 19</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">JP</div>
                        </div>

                        {/* Bars Mock */}
                        <div className="relative z-10 flex justify-between items-end h-40 mb-8 px-2 space-x-2">
                            {[40, 65, 30, 85, 55, 90, 45].map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                                    <div className="w-full bg-white/5 rounded-t-lg relative h-full overflow-hidden">
                                        <div
                                            style={{ height: `${h}%` }}
                                            className={`absolute bottom-0 left-0 w-full rounded-t-lg bg-slate-700 transition-all duration-1000 ${mounted ? 'opacity-100' : 'h-0 opacity-0'} group-hover:bg-orange-500 group-hover:shadow-[0_0_10px_orange]`}
                                        ></div>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-500">
                                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Stat Row */}
                        <div className="relative z-10 grid grid-cols-3 gap-4">
                            <div className="bg-white/5 p-3 rounded-2xl text-center border border-white/5">
                                <p className="text-xs text-slate-400 font-bold uppercase mb-1">Calories</p>
                                <p className="text-lg font-black text-white">2,450</p>
                            </div>
                            <div className="bg-white/5 p-3 rounded-2xl text-center border border-white/5">
                                <p className="text-xs text-slate-400 font-bold uppercase mb-1">Workouts</p>
                                <p className="text-lg font-black text-white">12</p>
                            </div>
                            <div className="bg-orange-500/10 p-3 rounded-2xl text-center border border-orange-500/20">
                                <p className="text-xs text-orange-400 font-bold uppercase mb-1">Streak</p>
                                <p className="text-lg font-black text-orange-500">8 Days 🔥</p>
                            </div>
                        </div>

                        {/* Floating Badges */}
                        <div className="absolute -top-6 -right-6 bg-slate-800 p-3 rounded-2xl shadow-xl border border-white/10 animate-[bounce_3s_infinite] z-20">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_limegreen]"></span>
                                <span className="text-xs font-bold text-white">Personal Coaching</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white text-black p-4 rounded-2xl shadow-xl animate-[bounce_4s_infinite_1s] z-20">
                            <p className="text-xs font-bold opacity-60 uppercase mb-1">Focus</p>
                            <p className="text-sm font-bold">HIIT • Strength • Yoga</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default UI04Hero;
