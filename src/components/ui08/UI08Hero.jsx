import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const UI08Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section id="overview" className="bg-white pt-24 pb-20 border-b border-zinc-100">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

                {/* Left: Editorial Content */}
                <div className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-block px-2 py-1 bg-zinc-100 border border-zinc-200 rounded text-[10px] uppercase font-bold tracking-widest text-zinc-600 mb-6">
                        Online Cohort • 8 Weeks
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black text-zinc-900 leading-[1.1] mb-6 tracking-tight">
                        Full-Stack <br />
                        <span className="bg-amber-300 px-2">Web Development</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed mb-10 max-w-lg font-light">
                        A calm, structured path from fundamentals to shipping real apps. No fluff, just code.
                    </p>

                    {/* Meta Row (Notion-style) */}
                    <div className="flex flex-wrap gap-8 mb-10 text-sm border-t border-b border-zinc-100 py-6">
                        <div>
                            <span className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1">Start Date</span>
                            <span className="font-medium text-zinc-900">August 15, 2026</span>
                        </div>
                        <div>
                            <span className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1">Duration</span>
                            <span className="font-medium text-zinc-900">8 Weeks (Part-time)</span>
                        </div>
                        <div>
                            <span className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1">Level</span>
                            <span className="font-medium text-zinc-900">Intermediate</span>
                        </div>
                        <div>
                            <span className="block text-zinc-400 text-xs font-bold uppercase tracking-wider mb-1">Mode</span>
                            <span className="font-medium text-zinc-900">Live + Async</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => scrollTo('pricing')}
                            className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-lg font-bold text-sm transition-transform hover:-translate-y-1"
                        >
                            Enroll for Next Cohort
                        </button>
                        <button
                            onClick={() => scrollTo('outline')}
                            className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-8 py-4 rounded-lg font-bold text-sm transition-colors border border-zinc-200"
                        >
                            View Outline
                        </button>
                    </div>
                </div>

                {/* Right: Progress Card Card (Minimal) */}
                <div className={`hidden lg:block bg-zinc-50 border border-zinc-200 rounded-xl p-8 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                    <div className="flex justify-between items-end mb-6">
                        <div>
                            <h3 className="text-lg font-bold text-zinc-900">Your Learning Path</h3>
                            <p className="text-sm text-zinc-500">From setup to deployment.</p>
                        </div>
                        <span className="text-3xl font-black text-zinc-200">01</span>
                    </div>

                    <div className="space-y-4 mb-8">
                        {[
                            "Master HTML5 & CSS Architecture",
                            "Deep dive into JavaScript & React",
                            "Build robust Backends with Node/Express",
                            "Deploy to Vercel & AWS"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className={`w-5 h-5 rounded border flex items-center justify-center ${i === 0 ? 'bg-zinc-900 border-zinc-900 text-white' : 'border-zinc-300 text-transparent'}`}>
                                    <CheckCircle2 size={12} strokeWidth={4} />
                                </div>
                                <span className={`text-sm ${i === 0 ? 'text-zinc-900 font-bold' : 'text-zinc-500'}`}>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="h-1 w-full bg-zinc-200 rounded-full overflow-hidden">
                        <div className="h-full w-1/4 bg-amber-400 rounded-full"></div>
                    </div>
                    <div className="mt-2 text-xs text-zinc-400 font-mono text-right">Step 1 of 4</div>
                </div>

            </div>
        </section>
    );
};

export default UI08Hero;
