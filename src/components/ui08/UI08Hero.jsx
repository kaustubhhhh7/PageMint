import React from 'react';
import { ArrowDown } from 'lucide-react';

const UI08Hero = () => {
    return (
        <section className="bg-white min-h-[90vh] flex flex-col border-b border-black">

            {/* Top Content Area */}
            <div className="flex-1 grid lg:grid-cols-2">

                {/* Left: Typography */}
                <div className="p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black relative">
                    <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-12">
                        Master<br />
                        The<br />
                        Web.
                    </h1>

                    <div className="max-w-md">
                        <p className="text-lg md:text-xl font-medium leading-relaxed mb-8">
                            An intensive, project-based curriculum designed for those who demand excellence. Stop consuming content. Start building systems.
                        </p>

                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-black text-white px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-zinc-800 transition-colors"
                        >
                            Apply for Intake
                        </button>
                    </div>

                    <div className="hidden lg:block absolute bottom-12 right-12 animate-bounce">
                        <ArrowDown size={32} />
                    </div>
                </div>

                {/* Right: Abstract Imagery/Layout */}
                <div className="bg-zinc-100 relative overflow-hidden flex items-center justify-center p-12 lg:p-0">
                    {/* Placeholder for "Person working" - using a generated styled div for now to maintain pure code */}
                    <div className="relative w-full max-w-lg aspect-[4/5] bg-white border border-black p-4 rotate-3 hover:rotate-0 transition-transform duration-700 ease-out shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
                        <div className="w-full h-full bg-zinc-200 border border-black flex items-center justify-center overflow-hidden grayscale contrast-125">
                            {/* Abstract representational shapes if no image */}
                            <div className="text-9xl font-black text-zinc-300 opacity-50 rotate-90 whitespace-nowrap">
                                CODE / CREATE
                            </div>
                        </div>
                        <div className="absolute top-8 right-8 bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
                            New Cohort
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Ticker/Meta */}
            <div className="border-t border-black bg-white grid grid-cols-2 md:grid-cols-4 divide-x divide-black">
                <div className="p-6 text-center">
                    <span className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Start Date</span>
                    <span className="font-bold text-lg">August 15</span>
                </div>
                <div className="p-6 text-center">
                    <span className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Duration</span>
                    <span className="font-bold text-lg">12 Weeks</span>
                </div>
                <div className="p-6 text-center">
                    <span className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Format</span>
                    <span className="font-bold text-lg">Async + Live</span>
                </div>
                <div className="p-6 text-center bg-black text-white flex items-center justify-center">
                    <span className="font-bold text-lg uppercase tracking-widest">Limited Spots</span>
                </div>
            </div>

        </section>
    );
};

export default UI08Hero;
