import React, { useEffect, useState, useRef } from 'react';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

const UI07Metrics = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const metrics = [
        { label: "Faster Payouts", value: "38%", prefix: "+", desc: "Compared to traditional banks" },
        { label: "Fraud Risk", value: "52%", prefix: "-", desc: "Active threat mitigation" },
        { label: "Secured Volume", value: "2.5B", prefix: "$", desc: "Processed annually" },
        { label: "Global Reach", value: "140", prefix: "", suffix: "+", desc: "Countries supported" },
    ];

    return (
        <section id="metrics" ref={sectionRef} className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10 backdrop-blur-sm">
                            <TrendingUp size={14} className="text-emerald-400" />
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Business Impact</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                            Startups to IPOs.<br />Scale without friction.
                        </h2>
                        <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
                            Our infrastructure adapts to your volume. Whether you're processing hundreds or millions, performance remains consistent.
                        </p>

                        <div className="pt-8 grid grid-cols-2 gap-8">
                            {metrics.map((m, i) => (
                                <div key={i} className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                                    <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                                        <span className="text-emerald-500">{m.prefix}</span>
                                        {isVisible ? m.value : '0'}
                                        {m.suffix && <span className="text-emerald-500">{m.suffix}</span>}
                                    </div>
                                    <div className="text-sm font-bold text-white mb-1">{m.label}</div>
                                    <div className="text-xs text-slate-500">{m.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Simple CSS Chart */}
                    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 relative">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="font-bold text-white">Payment Success Rate</h3>
                                <p className="text-xs text-slate-400">Past 12 months</p>
                            </div>
                            <div className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-1 rounded text-sm flex items-center gap-1">
                                <ArrowUpRight size={14} /> 99.99%
                            </div>
                        </div>

                        <div className="flex items-end justify-between h-64 gap-4 px-2">
                            {[40, 65, 55, 80, 70, 90, 85, 95].map((height, i) => (
                                <div key={i} className="w-full relative group">
                                    <div
                                        className="bg-emerald-500 rounded-t-sm opacity-50 group-hover:opacity-100 transition-all duration-500"
                                        style={{ height: isVisible ? `${height}%` : '0%', transitionDelay: `${i * 100}ms` }}
                                    />
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                                        {height}%
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between mt-4 text-xs font-mono text-slate-500 uppercase">
                            <span>Jan</span>
                            <span>Dec</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UI07Metrics;
