import React from 'react';
import { Diamond, Crown, Key, ShieldCheck } from 'lucide-react';

const UI10LuxuryHighlights = () => {
    const services = [
        {
            icon: Crown,
            title: "Concierge Service",
            desc: "Dedicated support for every aspect of your acquisition and move-in process."
        },
        {
            icon: Key,
            title: "Private Access",
            desc: "Exclusive access to off-market listings and private viewings worldwide."
        },
        {
            icon: ShieldCheck,
            title: "Verified Ownership",
            desc: "Rigorous due diligence ensures complete transparency and security."
        },
        {
            icon: Diamond,
            title: "Elite Neighborhoods",
            desc: "Properties located only in the most prestigious postcodes and communities."
        }
    ];

    return (
        <section className="py-24 bg-stone-900 text-stone-100 border-y border-amber-900/30">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
                    {services.map((service, idx) => (
                        <div key={idx} className="group">
                            <div className="inline-block p-4 mb-6 rounded-full border border-stone-700 bg-stone-800 text-amber-500 group-hover:bg-amber-500 group-hover:text-stone-900 transition-all duration-300">
                                <service.icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-serif mb-3 text-white group-hover:text-amber-500 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-stone-400 font-light leading-relaxed text-sm">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI10LuxuryHighlights;
