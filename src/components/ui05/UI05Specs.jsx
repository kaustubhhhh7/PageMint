import React, { useEffect, useState } from 'react';

const specs = [
    { label: "Battery Life", value: "48 Hours Total" },
    { label: "Active Noise Cancellation", value: "Adaptive Hybrid ANC" },
    { label: "Charging", value: "USB-C & Qi Wireless" },
    { label: "Water Resistance", value: "IPX5 Certified" },
    { label: "Bluetooth", value: "Version 5.3" },
    { label: "Latency", value: "Ultra Low (30ms)" },
    { label: "Driver Size", value: "11mm Dynamic" },
    { label: "Weight", value: "4.2g per bud" },
];

const UI05Specs = () => {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleCopy = (text, index) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, { threshold: 0.1 });

        const rows = document.querySelectorAll('.spec-row');
        rows.forEach(row => observer.observe(row));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="specs" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Header */}
                <div className="lg:col-span-1">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Tech Specs.</h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Beneath the sleek exterior lies a powerhouse of audio engineering. Every detail refined for performance.
                    </p>
                </div>

                {/* Specs Table */}
                <div className="lg:col-span-2 grid grid-cols-1 gap-4">
                    {specs.map((spec, index) => (
                        <div
                            key={index}
                            style={{ transitionDelay: `${index * 50}ms` }}
                            className="spec-row opacity-0 translate-y-10 transition-all duration-700 ease-out flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 group"
                        >
                            <span className="text-slate-400 font-medium">{spec.label}</span>
                            <div className="flex items-center gap-4">
                                <span className="font-bold text-lg md:text-xl">{spec.value}</span>
                                <button
                                    onClick={() => handleCopy(spec.value, index)}
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xs font-bold w-20 text-center"
                                >
                                    {copiedIndex === index ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI05Specs;
