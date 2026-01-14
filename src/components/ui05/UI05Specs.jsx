import React, { useState, useEffect, useRef } from 'react';
import { Copy, Check, Cpu, Battery, Bluetooth, CloudRain, Clock, Mic } from 'lucide-react';

const UI05Specs = () => {
    const [copiedId, setCopiedId] = useState(null);
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const specs = [
        { id: 'bat', label: 'Battery Life', value: '48 Hours Total', icon: Battery },
        { id: 'anc', label: 'Noise Control', value: 'Hybrid ANC', icon: Mic },
        { id: 'chg', label: 'Charging', value: 'USB-C + Wireless', icon: Battery }, // Using Battery as placeholder for charging
        { id: 'wtr', label: 'Water Rating', value: 'IPX5 Sweat/Water', icon: CloudRain },
        { id: 'blu', label: 'Connectivity', value: 'Bluetooth 5.3', icon: Bluetooth },
        { id: 'lat', label: 'Latency', value: '35ms Ultra-Low', icon: Cpu },
    ];

    const handleCopy = (id, value) => {
        navigator.clipboard.writeText(value);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

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

    return (
        <section id="specs" ref={sectionRef} className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">

                {/* Left Side Header */}
                <div className="lg:col-span-1">
                    <h2 className="text-5xl font-bold text-slate-900 mb-6">Tech Specs.</h2>
                    <p className="text-lg text-slate-500 mb-8">
                        Engineered to perfection. Every detail matters when it comes to sound quality and daily usability.
                    </p>
                    <div className="w-full h-80 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative overflow-hidden flex items-center justify-center">
                        {/* Decorative element */}
                        <div className="w-48 h-48 rounded-full border-[16px] border-slate-200 opacity-50" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/50 to-transparent" />
                    </div>
                </div>

                {/* Right Side Grid */}
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                    {specs.map((spec, idx) => (
                        <div
                            key={spec.id}
                            className={`p-6 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-500 bg-white group
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              `}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-slate-50 rounded-xl text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                                    {React.createElement(spec.icon, { size: 20 })}
                                </div>
                                <button
                                    onClick={() => handleCopy(spec.id, spec.value)}
                                    className="text-slate-400 hover:text-indigo-600 transition-colors"
                                    title="Copy value"
                                >
                                    {copiedId === spec.id ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                                </button>
                            </div>

                            <div className="space-y-1">
                                <span className="text-sm font-medium text-slate-500 block">{spec.label}</span>
                                <span className="text-xl font-bold text-slate-900 block">{spec.value}</span>
                            </div>

                            {copiedId === spec.id && (
                                <span className="text-xs text-green-500 font-medium absolute top-6 right-10 animate-fade-in-flash">
                                    Copied!
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
          @keyframes flash {
              0%, 100% { opacity: 0; transform: translateY(5px); }
              50% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-flash { animation: flash 1.5s ease-out forwards; }
      `}</style>
        </section>
    );
};

export default UI05Specs;
