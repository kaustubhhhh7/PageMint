import React, { useEffect, useState } from 'react';

const UI05Hero = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 20; // range -10 to 10
        const y = (clientY / window.innerHeight - 0.5) * 20;
        setOffset({ x, y });
    };

    return (
        <section
            id="overview"
            className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#f8f9fa]"
            onMouseMove={handleMouseMove}
        >
            {/* Animated Gradient Mesh Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-purple-200/40 rounded-full blur-[100px] animate-blob mix-blend-multiply"></div>
                <div className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-blue-200/40 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
                <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] bg-pink-200/40 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
                {/* Left Content */}
                <div className="space-y-8 text-center lg:text-left">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/40 text-sm font-semibold tracking-wide text-slate-500 shadow-sm">
                        New Release 2026
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9]">
                        Hear the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Future.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
                        Studio-grade sound. All-day comfort. <br className="hidden md:block" /> Zero distractions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <button
                            onClick={() => document.getElementById('buy').scrollIntoView({ behavior: 'smooth' })}
                            className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-bold overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                        >
                            <span className="relative z-10">Pre-Order Now</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <button
                            onClick={() => document.getElementById('highlights').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow-md"
                        >
                            Explore Features
                        </button>
                    </div>
                </div>

                {/* Right Product Mock */}
                <div className="relative flex items-center justify-center h-[500px] lg:h-[700px]">
                    {/* Floating Product "CSS-only 3D" Representation */}
                    <div
                        className="relative w-64 h-64 md:w-96 md:h-96 transition-transform duration-100 ease-out"
                        style={{ transform: `translate(${offset.x * -1}px, ${offset.y * -1}px)` }}
                    >
                        {/* Case Shadow */}
                        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-32 h-8 bg-black/20 blur-xl rounded-full"></div>

                        {/* Case Body (Abstract Representation) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-200 rounded-[3rem] shadow-[inset_0_2px_10px_rgba(255,255,255,0.8),0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center border border-white/60">
                            {/* Inner Shine */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-b from-white/80 to-transparent rounded-full opacity-60"></div>

                            {/* Logo */}
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shadow-inner">
                                <span className="font-bold text-slate-300 text-xs">AURA</span>
                            </div>

                            {/* Floating Pod Left */}
                            <div className="absolute -left-12 top-10 w-24 h-40 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-between py-4 border border-slate-100 animate-float-slow">
                                <div className="w-3 h-3 bg-black/5 rounded-full"></div>
                                <div className="w-1.5 h-8 bg-slate-200 rounded-full"></div>
                            </div>

                            {/* Floating Pod Right */}
                            <div className="absolute -right-12 top-20 w-24 h-40 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-between py-4 border border-slate-100 animate-float-delayed">
                                <div className="w-3 h-3 bg-black/5 rounded-full"></div>
                                <div className="w-1.5 h-8 bg-slate-200 rounded-full"></div>
                            </div>
                        </div>

                        {/* Floating Specs Chips */}
                        <div className="absolute -top-12 -right-8 px-4 py-2 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-white/50 animate-float-delayed text-xs font-bold text-slate-700">
                            🎵 Spatial Audio
                        </div>
                        <div className="absolute bottom-10 -left-16 px-4 py-2 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-white/50 animate-float-slow text-xs font-bold text-slate-700">
                            🔋 48h Battery
                        </div>
                        <div className="absolute -bottom-8 right-0 px-4 py-2 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-white/50 animate-float text-xs font-bold text-slate-700">
                            ⚡ Low Latency
                        </div>

                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
                <span className="text-[10px] uppercase tracking-widest text-slate-400">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
            </div>
        </section>
    );
};

export default UI05Hero;
