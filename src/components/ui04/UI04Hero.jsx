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
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
            {/* Animated Background Streaks */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[800px] bg-orange-100/40 -skew-x-[20deg] blur-3xl rounded-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-slate-200/50 -skew-x-[20deg] blur-3xl rounded-full"></div>
                {/* Moving stripes */}
                <div className="absolute top-0 right-[20%] w-0.5 h-full bg-slate-200/30 -skew-x-[20deg]"></div>
                <div className="absolute top-0 right-[15%] w-24 h-full bg-slate-100/50 -skew-x-[20deg]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className={`transition-all duration-1000 transform ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 border border-orange-200 rounded-full mb-6">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                        <span className="text-xs font-bold text-orange-700 uppercase tracking-wider">New Year • New You</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black text-slate-900 italic tracking-tighter leading-[0.9] mb-6">
                        TRAIN HARD.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-400">STAY STRONG.</span><br />
                        <span className="text-black decoration-orange-500 underline decoration-4 underline-offset-4 decoration-skip-ink-none">TRANSFORM.</span>
                    </h1>

                    <p className="text-xl text-slate-600 mb-8 max-w-lg font-medium">
                        World-class coaching, data-driven programs, and a community that refuses to quit. Your journey starts here.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <button
                            onClick={() => scrollTo('plans')}
                            className="group relative px-8 py-4 bg-black text-white font-bold uppercase tracking-wider skew-x-[-10deg] overflow-hidden hover:bg-orange-600 transition-colors duration-300 hover:shadow-xl hover:shadow-orange-500/20"
                        >
                            <span className="relative z-10 inline-block skew-x-[10deg]">Start Free Trial</span>
                            {/* Pulse Glow Effect */}
                            <span className="absolute top-0 left-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-shimmer skew-x-[20deg]"></span>
                        </button>
                        <button
                            onClick={() => scrollTo('programs')}
                            className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 font-bold uppercase tracking-wider skew-x-[-10deg] hover:border-black hover:bg-slate-50 transition-all duration-300"
                        >
                            <span className="inline-block skew-x-[10deg]">View Programs</span>
                        </button>
                    </div>

                    <div className="flex items-center gap-8 border-t border-slate-200 pt-8">
                        <div>
                            <p className="text-2xl font-black text-slate-900">500+</p>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Members</p>
                        </div>
                        <div>
                            <p className="text-2xl font-black text-slate-900">12</p>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Expert Trainers</p>
                        </div>
                        <div>
                            <p className="text-2xl font-black text-slate-900">4.9★</p>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Average Rating</p>
                        </div>
                    </div>
                </div>

                {/* Right Content - Dashboard Mock */}
                <div className={`relative hidden lg:block transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                    {/* Main Card */}
                    <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 w-full max-w-md mx-auto rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">Weekly Progress</h3>
                                <p className="text-xs text-slate-400 font-semibold">Jan 12 - Jan 19</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">JP</div>
                        </div>

                        {/* Bars Mock */}
                        <div className="flex justify-between items-end h-40 mb-8 px-2 space-x-2">
                            {[40, 65, 30, 85, 55, 90, 45].map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                                    <div className="w-full bg-slate-100 rounded-t-lg relative h-full overflow-hidden">
                                        <div
                                            style={{ height: `${h}%` }}
                                            className={`absolute bottom-0 left-0 w-full rounded-t-lg bg-slate-800 transition-all duration-1000 ${mounted ? 'opacity-100' : 'h-0 opacity-0'} group-hover:bg-orange-500`}
                                        ></div>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400">
                                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Stat Row */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-slate-50 p-3 rounded-2xl text-center">
                                <p className="text-xs text-slate-400 font-bold uppercase mb-1">Calories</p>
                                <p className="text-lg font-black text-slate-900">2,450</p>
                            </div>
                            <div className="bg-slate-50 p-3 rounded-2xl text-center">
                                <p className="text-xs text-slate-400 font-bold uppercase mb-1">Workouts</p>
                                <p className="text-lg font-black text-slate-900">12</p>
                            </div>
                            <div className="bg-orange-50 p-3 rounded-2xl text-center border border-orange-100">
                                <p className="text-xs text-orange-400 font-bold uppercase mb-1">Streak</p>
                                <p className="text-lg font-black text-orange-600">8 Days 🔥</p>
                            </div>
                        </div>

                        {/* Floating Badges */}
                        <div className="absolute -top-6 -right-6 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 animate-[bounce_3s_infinite]">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                <span className="text-xs font-bold text-slate-800">Personal Coaching</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-4 rounded-2xl shadow-xl animate-[bounce_4s_infinite_1s]">
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
