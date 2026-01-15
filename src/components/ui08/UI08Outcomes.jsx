import React from 'react';
import { Briefcase, TrendingUp, Globe, Layers } from 'lucide-react';

const UI08Outcomes = () => {
    const outcomes = [
        {
            icon: <Layers size={24} />,
            title: "Build 3 Full-Stack Apps",
            desc: "Leave with a portfolio that proves you can ship complex features."
        },
        {
            icon: <Globe size={24} />,
            title: "Master APIs & DBs",
            desc: "Design scalable schemas and RESTful endpoints confidently."
        },
        {
            icon: <TrendingUp size={24} />,
            title: "Deploy & Monitor",
            desc: "Setup CI/CD pipelines and monitor production apps on AWS/Vercel."
        },
        {
            icon: <Briefcase size={24} />,
            title: "Career Services",
            desc: "Resume review, mock interviews, and salary negotiation guides."
        }
    ];

    return (
        <section className="py-24 bg-zinc-50 border-b border-zinc-200">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-black text-zinc-900 mb-4">Tangible Outcomes.</h2>
                    <p className="text-zinc-500">We optimize for employability and engineering maturity.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 rounded-xl overflow-hidden">
                    {outcomes.map((item, index) => (
                        <div key={index} className="bg-white p-8 hover:bg-zinc-50 transition-colors group">
                            <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-amber-100 group-hover:text-amber-700 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-lg text-zinc-900 mb-3">{item.title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI08Outcomes;
