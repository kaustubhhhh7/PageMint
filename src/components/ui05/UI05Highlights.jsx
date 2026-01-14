import React, { useRef } from 'react';
import { Shield, Radio, Mic, Gamepad2 } from 'lucide-react';

const HighlightCard = ({ number, title, desc, stat, icon: Icon, color, delay }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        const visual = cardRef.current.querySelector('.visual-panel');
        if (visual) {
            visual.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        }
    };

    const handleMouseLeave = () => {
        const visual = cardRef.current.querySelector('.visual-panel');
        if (visual) {
            visual.style.transform = `translate(0px, 0px)`;
        }
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative bg-white rounded-[2.5rem] p-8 lg:p-12 overflow-hidden border border-slate-100 hover:border-indigo-100 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:scale-[1.01]"
        >
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${color} opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:opacity-10 transition-opacity`} />

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 h-full">
                <div className="flex flex-col justify-between">
                    <div>
                        <span className="text-6xl font-black text-slate-100 mb-6 block select-none group-hover:text-slate-200 transition-colors">
                            {number}
                        </span>
                        <div className="mb-4 inline-flex p-3 rounded-2xl bg-slate-50 text-slate-900 shadow-sm border border-slate-100">
                            <Icon size={24} strokeWidth={2} />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">{title}</h3>
                        <p className="text-slate-500 text-lg leading-relaxed">{desc}</p>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-100">
                        <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                            Key Stat
                        </span>
                        <p className="text-2xl font-bold text-slate-900 mt-1">{stat}</p>
                    </div>
                </div>

                {/* Visual Panel with Parallax */}
                <div className="visual-panel h-64 lg:h-full bg-slate-50 rounded-3xl relative overflow-hidden transition-transform duration-200 ease-out border border-slate-100">
                    {/* Animated Waveform Lines (CSS) */}
                    <div className="absolute inset-0 flex items-center justify-center gap-1 opacity-40">
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className="w-2 bg-slate-800 rounded-full animate-wave"
                                style={{
                                    height: `${Math.random() * 40 + 20}%`,
                                    animationDelay: `${i * 0.1}s`,
                                    animationDuration: '1.2s'
                                }}
                            />
                        ))}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                </div>
            </div>
        </div>
    );
};

const UI05Highlights = () => {
    const highlights = [
        {
            number: '01',
            title: 'Active Noise Cancellation',
            desc: 'Silence the world with our advanced hybrid ANC technology that filters out up to 98% of ambient noise.',
            stat: 'Up to 32dB Reduction',
            icon: Shield,
            color: 'from-blue-400 to-indigo-500'
        },
        {
            number: '02',
            title: 'Spatial Audio',
            desc: 'Experience sound from every direction. Dynamic head tracking places you in the center of your music.',
            stat: '360° Soundstage',
            icon: Radio,
            color: 'from-purple-400 to-pink-500'
        },
        {
            number: '03',
            title: 'Low Latency Gaming',
            desc: 'Synchronization so perfect you’ll never miss a beat or a footstep. Designed for competitive play.',
            stat: '50ms Ultra-Low Latency',
            icon: Gamepad2,
            color: 'from-yellow-400 to-orange-500'
        },
        {
            number: '04',
            title: 'Crystal Clear Calls',
            desc: 'Six beamforming microphones isolate your voice from the wind and crowd for pristine call quality.',
            stat: '6-Mic System + AI',
            icon: Mic,
            color: 'from-green-400 to-emerald-500'
        }
    ];

    return (
        <section id="highlights" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Reengineered for Sound.</h2>
                    <p className="text-xl text-slate-500">Every component has been redesigned to deliver the most immersive audio experience possible.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {highlights.map((item, idx) => (
                        <HighlightCard key={idx} {...item} />
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes wave {
            0%, 100% { transform: scaleY(0.5); }
            50% { transform: scaleY(1.2); }
        }
        .animate-wave { animation: wave infinite ease-in-out; }
      `}</style>
        </section>
    );
};

export default UI05Highlights;
