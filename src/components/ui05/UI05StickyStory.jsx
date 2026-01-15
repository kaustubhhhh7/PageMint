import React, { useState, useEffect, useRef } from 'react';
import { Package, Smartphone, VolumeX, BatteryCharging } from 'lucide-react';

const UI05StickyStory = () => {
    const [activeStep, setActiveStep] = useState(0);
    const stepsRef = useRef([]);

    const stories = [
        {
            id: 0,
            title: "Unbox the vibe.",
            desc: "A premium unboxing experience that sets the tone. Minimalist packaging, maximum anticipation.",
            icon: Package,
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            id: 1,
            title: "Tap. Pair. Play.",
            desc: "Instant connection with Google Fast Pair and Apple Seamless Switch. Just open the case, and you're ready.",
            icon: Smartphone,
            gradient: "from-purple-500 to-pink-500"
        },
        {
            id: 2,
            title: "Noise disappears.",
            desc: "Step into your own world. Our adaptive processor analyzes ambient sound 48,000 times per second.",
            icon: VolumeX,
            gradient: "from-slate-800 to-slate-600"
        },
        {
            id: 3,
            title: "Power that lasts.",
            desc: "From your morning commute to your evening run. 48 hours of total playtime with the MagSafe charging case.",
            icon: BatteryCharging,
            gradient: "from-green-500 to-emerald-500"
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
                threshold: 0.6, // Trigger when 60% of element is visible
                rootMargin: "-10% 0px -10% 0px"
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
        <section id="story" className="relative bg-slate-50 py-24">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Sticky Left Side */}
                <div className="hidden lg:block h-[calc(100vh-100px)] sticky top-24">
                    <div className="h-full flex flex-col justify-center relative">
                        {/* Background Glow */}
                        <div className={`absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-br ${stories[activeStep].gradient} rounded-full blur-[100px] opacity-20 transition-all duration-700 -translate-y-1/2`} />

                        <div className="relative z-10">
                            <div className="mb-6 inline-flex p-4 rounded-2xl bg-white shadow-lg shadow-indigo-100 transition-all duration-500 transform">
                                {React.createElement(stories[activeStep].icon, {
                                    size: 32,
                                    className: `text-slate-900 transition-all duration-300`
                                })}
                            </div>

                            <div className="h-32 overflow-hidden relative">
                                <h2 key={activeStep} className="text-6xl font-black text-slate-900 animate-slide-up leading-tight">
                                    {stories[activeStep].title}
                                </h2>
                            </div>

                            <p key={`desc-${activeStep}`} className="text-xl text-slate-500 max-w-md mt-6 animate-fade-in leading-relaxed">
                                {stories[activeStep].desc}
                            </p>

                            {/* Vertical Progress Dots */}
                            <div className="flex gap-2 mt-12">
                                {stories.map((s, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-2 rounded-full transition-all duration-500 ${activeStep === idx ? 'w-12 bg-slate-900' : 'w-2 bg-slate-300'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scrollable Right Side */}
                <div className="space-y-32 py-10">
                    {stories.map((story, idx) => (
                        <div
                            key={idx}
                            data-index={idx}
                            ref={el => stepsRef.current[idx] = el}
                            className="min-h-[60vh] flex items-center justify-center p-8 transition-opacity duration-500"
                        >
                            {/* Visual Card for Step */}
                            <div className="w-full max-w-md aspect-[4/5] bg-white rounded-[3rem] shadow-2xl overflow-hidden relative group border border-slate-100">
                                <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                {/* Placeholder Visuals using CSS */}
                                <div className="absolute inset-x-8 inset-y-12 bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 flex items-center justify-center">
                                    {idx === 0 && (
                                        <div className="w-40 h-40 bg-slate-900 rounded-3xl shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                                    )}
                                    {idx === 1 && (
                                        <div className="flex gap-4">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-20"></span>
                                            <div className="w-20 h-32 bg-slate-200 rounded-2xl" />
                                            <div className="w-20 h-32 bg-slate-900 rounded-2xl" />
                                        </div>
                                    )}
                                    {idx === 2 && (
                                        <div className="relative w-full h-full">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-64 h-64 border border-slate-200 rounded-full animate-[spin_10s_linear_infinite]" />
                                                <div className="w-48 h-48 border border-slate-300 rounded-full absolute animate-[spin_8s_linear_infinite_reverse]" />
                                                <div className="w-32 h-32 border border-slate-400 rounded-full absolute" />
                                            </div>
                                        </div>
                                    )}
                                    {idx === 3 && (
                                        <div className="relative w-24 h-40 border-4 border-slate-300 rounded-xl flex items-center justify-center">
                                            <div className="w-full bg-green-500 absolute bottom-0 left-0 right-0 animate-[grow_2s_ease-out_infinite] opacity-50" style={{ height: '80%' }} />
                                            <div className="z-10 font-bold text-slate-800">48h</div>
                                        </div>
                                    )}
                                    {/* Mobile Text (Visible only on mobile since sticky left is hidden) */}
                                    <div className="lg:hidden absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-sm">
                                        <h3 className="text-xl font-bold mb-2 text-slate-900">{story.title}</h3>
                                        <p className="text-sm text-slate-600">{story.desc}</p>
                                    </div>
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

        @keyframes grow {
            0% { height: 10%; }
            100% { height: 80%; }
        }
      `}</style>
        </section>
    );
};

export default UI05StickyStory;
