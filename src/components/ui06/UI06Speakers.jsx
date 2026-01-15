import React, { useState } from 'react';
import { X, Linkedin, Twitter, Globe, ArrowRight } from 'lucide-react';

const speakersData = [
    {
        id: 1,
        name: "Dr. Elena Vos",
        role: "Chief AI Scientist, NeuroTech",
        topic: "AI",
        bio: "Dr. Elena Vos is a pioneer in neural interface technology. She led the team that developed the first non-invasive brain-computer bridge suitable for consumer applications. Her keynote will explore the ethics of cognitive enhancement.",
        initials: "EV",
        color: "bg-orange-100 text-orange-700"
    },
    {
        id: 2,
        name: "Marcus Chen",
        role: "VP of Cloud, Stratus",
        topic: "Cloud",
        bio: "Marcus oversees global infrastructure for Stratus, handling over 40% of the world's serverless traffic. He is an advocate for sustainable data centers and will discuss the future of green cloud computing.",
        initials: "MC",
        color: "bg-amber-100 text-amber-700"
    },
    {
        id: 3,
        name: "Sarah Jenkins",
        role: "Head of Product, Designify",
        topic: "Design",
        bio: "Sarah has redefined user experience standards for enterprise software. Her philosophy of 'Invisible Design' has influenced thousands of products. She'll be conducting a live design audit session.",
        initials: "SJ",
        color: "bg-cyan-100 text-cyan-700"
    },
    {
        id: 4,
        name: "David Ross",
        role: "Founder, SecureNet",
        topic: "Security",
        bio: "A former white-hat hacker turned CEO, David teaches organizations how to think like attackers to better defend their assets. His session promises live demos of current zero-day vulnerabilities.",
        initials: "DR",
        color: "bg-slate-100 text-slate-700"
    },
    {
        id: 5,
        name: "Priya Patel",
        role: "Director, Venture Flow",
        topic: "Startups",
        bio: "Priya has backed 12 unicorns in the last decade. She shares her framework for identifying hyper-growth potential in early-stage startups and what founders often get wrong.",
        initials: "PP",
        color: "bg-orange-100 text-orange-700"
    },
    {
        id: 6,
        name: "James Wilson",
        role: "Lead Architect, QuantumCore",
        topic: "Innovation",
        bio: "James is working at the bleeding edge of quantum computing. He explains how quantum supremacy will disrupt encryption, logistics, and drug discovery within the next 5 years.",
        initials: "JW",
        color: "bg-amber-100 text-amber-700"
    },
    {
        id: 7,
        name: "Anita Roy",
        role: "Design Lead, Creativ",
        topic: "Design",
        bio: "Anita specializes in accessible interfaces for emerging markets. Her work ensures technology empowers the next billion users effectively.",
        initials: "AR",
        color: "bg-cyan-100 text-cyan-700"
    },
    {
        id: 8,
        name: "Kenji Sato",
        role: "CTO, AutoDrive",
        topic: "AI",
        bio: "Kenji is responsible for the autonomous navigation systems in millions of vehicles. He discusses the 'trolley problem' in real-world AI decision making.",
        initials: "KS",
        color: "bg-orange-100 text-orange-700"
    }
];

const categories = ["All", "AI", "Cloud", "Design", "Security", "Startups", "Innovation"];

const UI06Speakers = () => {
    const [filter, setFilter] = useState("All");
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);

    const filteredSpeakers = filter === "All"
        ? speakersData
        : speakersData.filter(s => s.topic === filter);

    return (
        <section id="speakers" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Featured Speakers</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${filter === cat ? 'bg-orange-600 text-white shadow-lg shadow-orange-200 scale-105' : 'bg-white text-slate-500 hover:bg-slate-200 border border-slate-200'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredSpeakers.map(speaker => (
                        <div
                            key={speaker.id}
                            className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-2 border border-slate-100 hover:border-orange-200 relative overflow-hidden cursor-pointer"
                            onClick={() => setSelectedSpeaker(speaker)}
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 ${speaker.color} opacity-20 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`} />

                            <div className="mb-6 flex items-start justify-between">
                                <div className={`w-20 h-20 rounded-2xl ${speaker.color} flex items-center justify-center text-2xl font-black shadow-inner`}>
                                    {speaker.initials}
                                </div>
                                <span className="px-3 py-1 rounded-full bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider border border-slate-100">
                                    {speaker.topic}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">
                                {speaker.name}
                            </h3>
                            <p className="text-sm text-slate-500 font-medium mb-6">
                                {speaker.role}
                            </p>

                            <button className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-3 transition-all">
                                View Bio <ArrowRight size={16} className="text-orange-500" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedSpeaker && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedSpeaker(null)} />
                    <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in-up">
                        <button
                            onClick={() => setSelectedSpeaker(null)}
                            className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-orange-50 hover:text-orange-600 transition-colors z-10"
                        >
                            <X size={20} />
                        </button>

                        <div className="grid md:grid-cols-3 h-full">
                            <div className={`${selectedSpeaker.color} p-8 flex flex-col items-center justify-center text-center`}>
                                <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center text-4xl font-black shadow-lg mb-4">
                                    {selectedSpeaker.initials}
                                </div>
                                <h3 className="text-2xl font-black mb-1">{selectedSpeaker.name}</h3>
                                <p className="text-sm font-bold opacity-75">{selectedSpeaker.role}</p>
                            </div>
                            <div className="md:col-span-2 p-8 md:p-12">
                                <span className="inline-block px-3 py-1 bg-orange-50 text-orange-700 text-xs font-bold uppercase tracking-wider rounded-lg mb-4 border border-orange-200">
                                    {selectedSpeaker.topic} Speaker
                                </span>
                                <h4 className="text-lg font-bold text-slate-900 mb-4">About</h4>
                                <p className="text-slate-600 leading-relaxed mb-8">
                                    {selectedSpeaker.bio}
                                </p>
                                <div className="flex gap-4">
                                    <button className="p-2 text-slate-400 hover:text-[#0077b5] transition-colors"><Linkedin size={20} /></button>
                                    <button className="p-2 text-slate-400 hover:text-[#1da1f2] transition-colors"><Twitter size={20} /></button>
                                    <button className="p-2 text-slate-400 hover:text-orange-600 transition-colors"><Globe size={20} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default UI06Speakers;
