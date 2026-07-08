import React, { useState } from 'react';
import { X, Calendar, Linkedin, Twitter } from 'lucide-react';

const UI08Mentors = () => {
    const [selectedMentor, setSelectedMentor] = useState(null);

    const mentors = [
        {
            id: 1,
            name: "Sarah Jenkins",
            role: "Senior Frontend Eng @ Vercel",
            specialty: "React Internals",
            bio: "Building the web for over 10 years. Currently working on Next.js core. I love teaching component patterns and performance optimization.",
            avatar: "SJ"
        },
        {
            id: 2,
            name: "David Chen",
            role: "Staff Engineer @ Netflix",
            specialty: "System Design",
            bio: "Scaling Node.js services to millions of concurrent users. I help students bridge the gap between building apps and engineering systems.",
            avatar: "DC"
        },
        {
            id: 3,
            name: "Elena Rodriguez",
            role: "Product Designer @ Figma",
            specialty: "UI/UX & Accessibility",
            bio: "Design systems nerd. I ensure every line of code you write translates to a delightful accessible user experience.",
            avatar: "ER"
        }
    ];

    return (
        <section id="mentors" className="py-24 bg-white border-b border-zinc-100">
            <div className="max-w-6xl mx-auto px-6">

                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-3xl font-black text-zinc-900 mb-2">Expert Mentorship.</h2>
                        <p className="text-zinc-500">Learn directly from engineers shipping production code.</p>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded text-xs font-bold text-amber-700 uppercase tracking-wide">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        Weekdays 9AM - 5PM EST
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {mentors.map((mentor) => (
                        <div
                            key={mentor.id}
                            onClick={() => setSelectedMentor(mentor)}
                            className="group cursor-pointer p-6 rounded-xl border border-zinc-100 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all bg-zinc-50/50"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-lg">
                                    {mentor.avatar}
                                </div>
                                <div>
                                    <h3 className="font-bold text-zinc-900 group-hover:text-amber-600 transition-colors">{mentor.name}</h3>
                                    <p className="text-xs text-zinc-500">{mentor.role}</p>
                                </div>
                            </div>
                            <div className="text-sm text-zinc-600 line-clamp-2 mb-4">
                                {mentor.bio}
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-[10px] uppercase font-bold px-2 py-1 bg-white border border-zinc-200 rounded text-zinc-500">
                                    {mentor.specialty}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedMentor && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/40 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedMentor(null)}>
                        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                            <button onClick={() => setSelectedMentor(null)} className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900">
                                <X size={20} />
                            </button>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-2xl">
                                    {selectedMentor.avatar}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-900">{selectedMentor.name}</h3>
                                    <p className="text-sm text-zinc-500 font-medium">{selectedMentor.role}</p>
                                </div>
                            </div>

                            <p className="text-zinc-600 leading-relaxed mb-8">
                                {selectedMentor.bio}
                            </p>

                            <div className="flex gap-3 mb-8">
                                <button className="p-2 border border-zinc-200 rounded-lg hover:bg-zinc-50 text-zinc-600">
                                    <Linkedin size={18} />
                                </button>
                                <button className="p-2 border border-zinc-200 rounded-lg hover:bg-zinc-50 text-zinc-600">
                                    <Twitter size={18} />
                                </button>
                            </div>

                            <button className="w-full bg-zinc-900 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors">
                                <Calendar size={16} />
                                Book Office Hours
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default UI08Mentors;
