import React, { useRef } from 'react';

const HighlightCard = ({ number, title, description, stat, reversed }) => {
    const visualRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!visualRef.current) return;
        const { left, top, width, height } = visualRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        visualRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${y * -10}deg) scale(1.05)`;
    };

    const handleMouseLeave = () => {
        if (!visualRef.current) return;
        visualRef.current.style.transform = `perspective(1000px) rotateY(0) rotateX(0) scale(1)`;
    };

    return (
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16 py-12 lg:py-24`}>
            {/* Text Content */}
            <div className="flex-1 space-y-6">
                <span className="text-6xl md:text-8xl font-black text-slate-100 opacity-80">{number}</span>
                <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                    {title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                    {description}
                </p>
                <div className="border-t border-slate-200 pt-6">
                    <p className="text-sm font-bold uppercase tracking-widest text-blue-600 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span> {stat}
                    </p>
                </div>
            </div>

            {/* Visual Panel */}
            <div
                className="flex-1 w-full"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    ref={visualRef}
                    className="relative pb-[60%] sm:pb-[50%] lg:pb-[70%] w-full bg-slate-100 rounded-3xl overflow-hidden transition-transform duration-200 ease-out shadow-lg hover:shadow-2xl border border-slate-200 group"
                >
                    <div className="absolute inset-0 bg-white">
                        {/* Placeholder Visuals using CSS */}
                        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_50%_50%,#e2e8f0_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                        {/* Animated Waveform Lines (Simulating abstract tech) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 h-32">
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-2 md:w-4 bg-slate-900 rounded-full animate-wave"
                                    style={{
                                        height: '40%',
                                        animationDelay: `${i * 0.1}s`,
                                        opacity: 0.2 + (i / 20)
                                    }}
                                ></div>
                            ))}
                        </div>

                        <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/90 backdrop-blur rounded-lg border border-slate-200 text-xs font-mono text-slate-500 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            Visualization Active
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const UI05Highlights = () => {
    return (
        <section id="highlights" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Redefining Immersion.</h2>
                    <p className="text-xl text-slate-500 font-light">
                        Every component was engineered for a singular purpose: to deliver the purest audio experience imaginable.
                    </p>
                </div>

                <div className="space-y-12">
                    <HighlightCard
                        number="01"
                        title="Silence the World."
                        description="Advanced Active Noise Cancellation adapts 200 times per second to neutralize background noise before it reaches your ears."
                        stat="Up to 48dB Noise Reduction"
                        reversed={false}
                    />
                    <HighlightCard
                        number="02"
                        title="360° Spatial Audio."
                        description="Dynamic head tracking wraps sound around you, creating a theater-like experience for movies and music."
                        stat="6-Axis Gyroscope Sensors"
                        reversed={true}
                    />
                    <HighlightCard
                        number="03"
                        title="Instant Sync."
                        description="Engineered for gamers. Ultra-low latency ensures that what you see and what you hear are perfectly synchronized."
                        stat="< 30ms Latency"
                        reversed={false}
                    />
                    <HighlightCard
                        number="04"
                        title="Crystal Clear Calls."
                        description="Beamforming microphones isolate your voice from the wind and crowd, ensuring you're heard with absolute clarity."
                        stat="AI-Powered Voice Isolation"
                        reversed={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default UI05Highlights;
