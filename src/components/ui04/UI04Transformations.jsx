import React, { useState, useRef } from 'react';

const UI04Transformations = () => {
    const [sliderValue, setSliderValue] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!isDragging || !sliderRef.current) return;

        const rect = sliderRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;

        setSliderValue(percentage);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    // Touch support
    const handleTouchMove = (e) => {
        if (!isDragging || !sliderRef.current) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        setSliderValue((x / rect.width) * 100);
    };

    return (
        <section
            id="results"
            className="py-24 bg-slate-950 relative border-t border-white/5"
            onMouseUp={handleMouseUp}
            onTouchEnd={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter mb-4">
                            REAL PEOPLE. <br />
                            <span className="text-orange-500">REAL RESULTS.</span>
                        </h2>
                        <p className="text-lg text-slate-400 max-w-md">
                            Join thousands who have transformed their lives. No trends, just consistent effort and proven methods.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-8 md:gap-12">
                        <div>
                            <p className="text-3xl md:text-4xl font-black text-white">6kg</p>
                            <p className="text-xs uppercase font-bold text-slate-500">Avg Fat Loss</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-black text-white">+28%</p>
                            <p className="text-xs uppercase font-bold text-slate-500">Strength Gain</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-black text-white">90%</p>
                            <p className="text-xs uppercase font-bold text-slate-500">Consistency</p>
                        </div>
                    </div>
                </div>

                {/* Slider Component */}
                <div
                    ref={sliderRef}
                    className="relative w-full max-w-4xl mx-auto h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl cursor-col-resize select-none border-4 border-slate-900"
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                >
                    {/* AFTER Image (Background) */}
                    <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                        {/* Mock After Vis */}
                        <div className="w-full h-full bg-slate-900 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/40 to-slate-900/40"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                <span className="text-9xl opacity-20 transform rotate-12 inline-block">💪</span>
                                <p className="text-white font-black text-4xl uppercase mt-4">After</p>
                                <p className="text-orange-400 font-bold">Leaner. Stronger. Faster.</p>
                            </div>
                        </div>
                    </div>

                    {/* BEFORE Image (Foreground clipped) */}
                    <div
                        className="absolute inset-0 bg-slate-700 overflow-hidden border-r-4 border-white"
                        style={{ width: `${sliderValue}%` }}
                    >
                        {/* Mock Before Vis */}
                        <div className="w-full h-full relative bg-slate-800">
                            <div className="absolute inset-0 w-[calc(100vw)] max-w-4xl mx-auto h-[600px]"> {/* Trick to keep content 'fixed' relative to container */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
                                    <span className="text-9xl opacity-20 transform -rotate-12 inline-block grayscale brightness-50">😓</span>
                                    <p className="text-slate-400 font-black text-4xl uppercase mt-4">Before</p>
                                    <p className="text-slate-500 font-bold">Tired. Unfocused.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-transparent cursor-ew-resize flex items-center justify-center group"
                        style={{ left: `${sliderValue}%` }}
                    >
                        <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform relative z-20">
                            <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
                        </div>
                        {/* Glow Line */}
                        <div className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.5)]"></div>
                    </div>

                    {/* Labels */}
                    <div className="absolute top-8 left-8 bg-black/50 backdrop-blur-md px-4 py-1 rounded-full text-white font-bold text-xs uppercase tracking-wider z-10 pointer-events-none">
                        Before
                    </div>
                    <div className="absolute top-8 right-8 bg-orange-600/80 backdrop-blur-md px-4 py-1 rounded-full text-white font-bold text-xs uppercase tracking-wider z-10 pointer-events-none">
                        After
                    </div>
                </div>

            </div>
        </section>
    );
};

export default UI04Transformations;
