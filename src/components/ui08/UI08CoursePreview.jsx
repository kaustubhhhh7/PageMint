import React from 'react';
import { Calendar, Clock, Monitor, Award, Star } from 'lucide-react';

const UI08CoursePreview = () => {

    const stats = [
        { icon: Calendar, label: "Duration", value: "8 Weeks" },
        { icon: Clock, label: "Commitment", value: "6-8 hrs/wk" },
        { icon: Monitor, label: "Mode", value: "Online Live" },
        { icon: Award, label: "Certificate", value: "Included" }
    ];

    const weeks = [
        { num: 1, topic: "HTML/CSS Foundations" },
        { num: 2, topic: "JavaScript Deep Dive" },
        { num: 3, topic: "React Basics" },
        { num: 4, topic: "Advanced React Hooks" },
        { num: 5, topic: "Node.js & Express" },
        { num: 6, topic: "MongoDB & SQL" },
        { num: 7, topic: "Authentication" },
        { num: 8, topic: "Final Project" }
    ];

    return (
        <section className="bg-white py-12 border-y border-slate-100 relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 flex flex-col lg:flex-row items-center gap-12 shadow-sm">

                    {/* Left: Stats Grid */}
                    <div className="w-full lg:w-1/3 grid grid-cols-2 gap-6">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col">
                                <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                                    <stat.icon size={14} /> {stat.label}
                                </div>
                                <div className="text-xl font-black text-slate-900">{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Right: What You Learn / Timeline */}
                    <div className="w-full lg:w-2/3 border-t lg:border-t-0 lg:border-l border-slate-200 pt-8 lg:pt-0 lg:pl-12">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-slate-900 text-lg">Course Timeline</h3>
                            <div className="flex items-center gap-1 text-orange-500 font-bold text-sm">
                                <Star size={16} fill="currentColor" /> 4.9/5 Student Rating
                            </div>
                        </div>

                        {/* Weekly Chips with Tooltip */}
                        <div className="flex flex-wrap gap-3">
                            {weeks.map((week) => (
                                <div key={week.num} className="group relative">
                                    <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors cursor-default shadow-sm hover:shadow-md">
                                        W{week.num}
                                    </div>

                                    {/* Tooltip */}
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none transform translate-y-2 group-hover:translate-y-0 z-10">
                                        <div className="bg-slate-900 text-white text-xs p-3 rounded-lg shadow-xl text-center">
                                            <div className="font-bold text-orange-400 mb-1">Week {week.num}</div>
                                            {week.topic}
                                            {/* Arrow */}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UI08CoursePreview;
