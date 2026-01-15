import React, { useEffect, useState, useRef } from 'react';

const StatCounter = ({ label, value, suffix = "+" }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimated.current) {
                hasAnimated.current = true;
                let start = 0;
                const end = parseInt(value.toString().replace(/,/g, ''), 10);
                if (start === end) return;

                let totalDuration = 2000;
                let incrementTime = (totalDuration / end) * 0.8;
                // clamp speed
                if (incrementTime < 10) incrementTime = 10;

                let timer = setInterval(() => {
                    start += Math.ceil(end / 50);
                    if (start >= end) {
                        setCount(end);
                        clearInterval(timer);
                    } else {
                        setCount(start);
                    }
                }, 30);
            }
        }, { threshold: 0.5 });

        if (elementRef.current) observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={elementRef} className="text-center group cursor-default">
            <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-cyan-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                {count}{suffix}
            </div>
            <div className="text-sm font-bold uppercase tracking-widest text-cyan-600 group-hover:text-cyan-700 transition-colors">
                {label}
            </div>
            {/* Hover confetti dots (CSS) */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {/* Simplified confetti - just CSS specks */}
            </div>
        </div>
    );
};

const UI06StatsStrip = () => {
    const stats = [
        { label: "Attendees", value: 800 },
        { label: "Workshops", value: 10 },
        { label: "Global Brands", value: 15 },
        { label: "Live Demos", value: 24 } // used 24 for variety
    ];

    return (
        <section className="py-20 border-b border-slate-200 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="relative">
                            <StatCounter {...stat} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI06StatsStrip;
