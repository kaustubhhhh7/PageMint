import React, { useState } from 'react';
import { Calendar, Users, Star } from 'lucide-react';

const UI08CohortTimeline = () => {
    const [activeWeek, setActiveWeek] = useState(1);

    const weeks = [1, 2, 3, 4, 5, 6, 7, 8];
    const details = {
        1: { title: "Orientation & Foundations", desc: "Meet your squad. Setup dev environment. HTML/CSS deep dive.", project: "Personal Portfolio v1" },
        2: { title: "JavaScript Core", desc: "Execution context, closures, and async JS patterns.", project: "Interactive To-Do List" },
        3: { title: "React Fundamentals", desc: "Component lifecycle, Props, and State.", project: "Weather App" },
        4: { title: "Advanced React", desc: "Hooks, Context API, and Performance.", project: "E-Commerce Cart" },
        5: { title: "Node.js & Express", desc: "Server setup, REST API design.", project: "Task Manager API" },
        6: { title: "Databases (SQL/NoSQL)", desc: "Schema design, Relations, and Aggregations.", project: "Blog Backend" },
        7: { title: "Full Stack Integration", desc: "Connecting Frontend to Backend. Auth.", project: "Social Media App" },
        8: { title: "Demo Day & Career", desc: "Final project polish. Resume reviews. Mock Interviews.", project: "Capstone Launch" }
    };

    return (
        <section className="py-24 bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 mb-2">8 Weeks. Zero Fluff.</h2>
                        <p className="text-slate-500">Every week has a clear goal and a shippable outcome.</p>
                    </div>
                </div>

                {/* Timeline Strip */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 hide-scrollbar">
                    {weeks.map(w => (
                        <button
                            key={w}
                            onClick={() => setActiveWeek(w)}
                            className={`
                                flex-shrink-0 w-32 h-20 rounded-xl flex flex-col items-center justify-center transition-all border-2
                                ${activeWeek === w
                                    ? 'bg-white border-rose-400 shadow-xl shadow-rose-500/10 scale-105 z-10'
                                    : 'bg-white/50 border-transparent hover:border-slate-200'
                                }
                            `}
                        >
                            <span className={`text-xs font-bold uppercase ${activeWeek === w ? 'text-rose-500' : 'text-slate-400'}`}>Week</span>
                            <span className={`text-2xl font-black ${activeWeek === w ? 'text-slate-900' : 'text-slate-300'}`}>0{w}</span>
                        </button>
                    ))}
                </div>

                {/* Detail View */}
                <div className="bg-white rounded-2xl border border-slate-200 p-8 mt-8 flex flex-col md:flex-row gap-8 items-center shadow-sm">
                    <div className="flex-1">
                        <div className="text-rose-500 font-bold text-sm uppercase mb-2">Focus of the Week</div>
                        <h3 className="text-3xl font-black text-slate-900 mb-4 transition-all">{details[activeWeek].title}</h3>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">{details[activeWeek].desc}</p>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                                <Calendar size={18} className="text-indigo-500" />
                                3 Live Sessions
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                                <Users size={18} className="text-rose-500" />
                                Group Review
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 bg-slate-50 rounded-xl p-6 border border-slate-100">
                        <div className="flex items-center gap-2 mb-3 text-slate-900 font-bold">
                            <Star size={18} className="text-yellow-500 fill-current" />
                            Weekly Project
                        </div>
                        <div className="font-bold text-xl text-indigo-600 mb-2">{details[activeWeek].project}</div>
                        <p className="text-xs text-slate-500">Must submit by Sunday 11:59 PM for code review.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UI08CohortTimeline;
