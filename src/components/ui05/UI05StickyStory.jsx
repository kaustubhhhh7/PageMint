import React, { useState, useEffect, useRef } from 'react';
import { Package, Smartphone, VolumeX, BatteryCharging, Bluetooth, Music, Zap, Box } from 'lucide-react';

const UI05StickyStory = () => {
    const [activeStep, setActiveStep] = useState(0);
    const stepsRef = useRef([]);

    const stories = [
        {
            id: 0,
            title: "Unbox the vibe.",
            desc: "A premium unboxing experience that sets the tone. Minimalist packaging, maximum anticipation.",
            icon: Box,
            gradient: "from-blue-500 to-cyan-500",
            bg: "bg-blue-50"
        },
        {
            id: 1,
            title: "Tap. Pair. Play.",
            desc: "Instant connection with Google Fast Pair and Apple Seamless Switch. Just open the case, and you're ready.",
            icon: Bluetooth,
            gradient: "from-violet-500 to-fuchsia-500",
            bg: "bg-fuchsia-50"
        },
        {
            id: 2,
            title: "Noise disappears.",
            desc: "Step into your own world. Our adaptive processor analyzes ambient sound 48,000 times per second.",
            icon: VolumeX,
            gradient: "from-slate-700 to-slate-900",
            bg: "bg-slate-100"
        },
        {
            id: 3,
            title: "Power that lasts.",
            desc: "From your morning commute to your evening run. 48 hours of total playtime with the MagSafe charging case.",
            icon: Zap,
            gradient: "from-emerald-400 to-teal-500",
            bg: "bg-emerald-50"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        if (!isNaN(index)) {
                            setActiveStep(index);
                        }
                    }
                });
            },
            {
                threshold: 0.6,
                rootMargin: "-20% 0px -20% 0px"
            }
        );

        const elements = stepsRef.current.filter(el => el !== null);
        elements.forEach((el) => {
            observer.observe(el);
        });

        return () => {
            elements.forEach((el) => {
                if (el) observer.unobserve(el);
            });
            observer.disconnect();
        };
    }, []);

    return (
        <section id="story" className="relative bg-white py-24">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Sticky Left Side */}
                <div className="hidden lg:block h-[calc(100vh-100px)] sticky top-24">
                    <div className="h-full flex flex-col justify-center relative pl-8">
                        {/* Dynamic Background Blob */}
                        <div className={`absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-br ${stories[activeStep].gradient} rounded-full blur-[120px] opacity-10 transition-all duration-1000 -translate-y-1/2 -ml-20`} />

                        <div className="relative z-10 space-y-8">
                            <div className="inline-flex p-4 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-500 transform hover:scale-105 hover:rotate-3">
                                {React.createElement(stories[activeStep].icon, {
                                    size: 32,
                                    className: `text-slate-900 transition-all duration-300`
                                })}
                            </div>

                            <div className="space-y-4">
                                <h2 key={activeStep} className="text-6xl font-black text-slate-900 animate-slide-up leading-[1.1] tracking-tight">
                                    {stories[activeStep].title}
                                </h2>
                                <p key={`desc-${activeStep}`} className="text-xl text-slate-500 max-w-md animate-fade-in leading-relaxed font-light">
                                    {stories[activeStep].desc}
                                </p>
                            </div>

                            {/* Progress Indicators */}
                            <div className="flex gap-3 pt-8">
                                {stories.map((s, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-1.5 rounded-full transition-all duration-700 ease-out ${activeStep === idx ? 'w-16 bg-slate-900' : 'w-3 bg-slate-200'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scrollable Right Side */}
                <div className="py-10">
                    {stories.map((story, idx) => (
                        <div
                            key={idx}
                            data-index={idx}
                            ref={el => stepsRef.current[idx] = el}
                            className="min-h-screen flex items-center justify-center p-4"
                        >
                            {/* Card Container */}
                            <div className={`w-full max-w-md aspect-[3/4] ${story.bg} rounded-[3rem] shadow-2xl overflow-hidden relative group border-4 border-white ring-1 ring-slate-100/50 transition-all duration-500 hover:scale-[1.02]`}>

                                {/* Inner Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />

                                {/* Interactive Animations Container */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">

                                    {/* 1. Unbox Animation */}
                                    {idx === 0 && (
                                        <div className="relative w-48 h-48 perspective-1000 group-hover:scale-110 transition-transform duration-700">
                                            {/* Box Bottom */}
                                            <div className="absolute inset-x-0 bottom-0 h-24 bg-white rounded-xl shadow-xl border border-slate-100 flex items-center justify-center z-10">
                                                <div className="w-12 h-1 bg-slate-200 rounded-full" />
                                            </div>
                                            {/* Box Lid - Animates open */}
                                            <div className="absolute inset-x-0 bottom-[95px] h-12 bg-slate-50 rounded-t-xl border border-slate-100 shadow-md origin-bottom transition-all duration-700 group-hover:-rotate-x-110 group-hover:translate-y-[-20px] z-20 flex items-center justify-center">
                                                <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase">AURA</span>
                                            </div>
                                            {/* Product Floating Out */}
                                            <div className="absolute inset-x-8 bottom-4 h-32 bg-slate-900 rounded-2xl shadow-lg transform transition-all duration-1000 group-hover:-translate-y-16 group-hover:rotate-6 flex items-center justify-center z-0">
                                                <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.8)] animate-pulse" />
                                            </div>
                                        </div>
                                    )}

                                    {/* 2. Pairing Animation */}
                                    {idx === 1 && (
                                        <div className="relative">
                                            {/* Ripples */}
                                            {[1, 2, 3].map((i) => (
                                                <div
                                                    key={i}
                                                    className="absolute inset-0 border-2 border-violet-500/30 rounded-full animate-ripple"
                                                    style={{ animationDelay: `${i * 0.5}s` }}
                                                />
                                            ))}
                                            <div className="relative w-32 h-32 bg-white rounded-[2.5rem] shadow-2xl flex items-center justify-center z-10">
                                                <Bluetooth size={48} className="text-violet-600 animate-pulse" />
                                            </div>
                                            {/* Success Check */}
                                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-300">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}

                                    {/* 3. Noise Cancellation Animation */}
                                    {idx === 2 && (
                                        <div className="w-full px-12 flex flex-col items-center gap-8">
                                            <div className="flex items-center justify-center gap-1.5 h-32 w-full">
                                                {[...Array(12)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-2 bg-slate-800 rounded-full animate-wave-compress"
                                                        style={{
                                                            animationDelay: `${i * 0.05}s`,
                                                            height: i % 2 === 0 ? '60%' : '30%'
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                            <div className="px-6 py-2 bg-slate-900 text-white rounded-full shadow-xl flex items-center gap-3">
                                                <VolumeX size={18} />
                                                <span className="text-xs font-bold uppercase tracking-wider">ANC On</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* 4. Power/Battery Animation */}
                                    {idx === 3 && (
                                        <div className="relative">
                                            {/* Ring */}
                                            <svg className="w-48 h-48 -rotate-90">
                                                <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="none" className="text-slate-200" />
                                                <circle
                                                    cx="96" cy="96" r="88"
                                                    stroke="currentColor"
                                                    strokeWidth="12"
                                                    fill="none"
                                                    className="text-emerald-500"
                                                    strokeDasharray="553"
                                                    strokeDashoffset="553"
                                                    style={{ animation: 'charge 2s ease-out forwards 0.5s' }}
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <Zap size={32} className="text-emerald-500 mb-2 animate-bounce" />
                                                <span className="text-5xl font-black text-slate-900 tracking-tighter">48<span className="text-2xl align-top">h</span></span>
                                            </div>
                                        </div>
                                    )}

                                </div>

                                {/* Mobile Text Label */}
                                <div className="lg:hidden absolute bottom-8 left-0 right-0 text-center px-6">
                                    <h3 className="text-2xl font-bold text-slate-900">{story.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes slide-up {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        @keyframes fade-in {
             from { opacity: 0; }
             to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }

        @keyframes ripple {
            0% { transform: scale(0.8); opacity: 1; }
            100% { transform: scale(2.5); opacity: 0; }
        }
        .animate-ripple { animation: ripple 2s cubic-bezier(0, 0, 0.2, 1) infinite; }

        @keyframes wave-compress {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(0.1); }
        }
        .animate-wave-compress { animation: wave-compress 1.5s ease-in-out infinite; }

        @keyframes charge {
            to { stroke-dashoffset: 0; }
        }

        .perspective-1000 { perspective: 1000px; }
        .-rotate-x-110 { transform: rotateX(-110deg); }
      `}</style>
        </section>
    );
};

export default UI05StickyStory;
