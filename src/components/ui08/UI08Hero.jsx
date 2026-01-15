import React from 'react';
import { Play, CheckCircle, ArrowRight, Star, Clock, Users, Award } from 'lucide-react';

const UI08Hero = () => {
    return (
        <section id="overview" className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
            {/* Ambient Background Blob */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-100/50 via-orange-50/30 to-transparent rounded-full blur-3xl pointer-events-none -mt-40 -mr-40" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-orange-100 shadow-sm animate-fade-in-up">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                        </span>
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Cohort Starts Soon</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                        Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Full-Stack</span> Developer.
                    </h1>

                    <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                        Master React, Node.js, and System Design with live mentorship. Build 4 real-world projects and get job-ready in 8 weeks.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2 group"
                        >
                            Start Learning <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-slate-700 border-2 border-slate-200 hover:border-blue-200 hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                        >
                            View Curriculum
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        {[
                            { icon: Users, text: "Beginner Friendly" },
                            { icon: Award, text: "Certificates Included" },
                            { icon: CheckCircle, text: "Hands-on Projects" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-100 shadow-sm text-sm font-bold text-slate-600">
                                <item.icon size={16} className="text-orange-500" /> {item.text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content: Lesson Player Mock */}
                <div className="relative group perspective-1000">
                    <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 opacity-10 group-hover:rotate-3 transition-transform duration-500" />

                    <div className="relative bg-slate-900 rounded-2xl shadow-2xl overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500 border border-slate-800">
                        {/* Video Area Mock */}
                        <div className="aspect-video bg-slate-800 relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-transparent to-slate-800 opacity-60" />

                            {/* Code Snippet Background */}
                            <div className="absolute inset-0 opacity-20 p-8 font-mono text-xs text-blue-300 leading-loose overflow-hidden select-none">
                                {`import React, { useState } from 'react';\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n  return (\n    <div className="app">\n      <h1>Hello World</h1>\n    </div>\n  );\n};`}
                            </div>

                            {/* Play Button */}
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-2xl cursor-pointer hover:scale-110 transition-transform z-10">
                                <Play size={32} fill="white" className="text-white ml-2" />
                            </div>

                            {/* Bottom Controls */}
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900 to-transparent">
                                <div className="flex items-center justify-between text-white mb-2">
                                    <div className="font-bold text-sm">Lesson 03 — React Components</div>
                                    <div className="text-xs font-mono opacity-70">12:45</div>
                                </div>
                                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                                    <div className="w-1/3 h-full bg-orange-500 rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* Next Up List */}
                        <div className="bg-white p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Up Next</div>
                                <div className="flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full animate-pulse">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> Live Session • Sat 6PM
                                </div>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { title: "State & Props Management", time: "15:20", active: true },
                                    { title: "Handling Events", time: "08:15", active: false },
                                    { title: "Building a Counter App", time: "22:10", active: false }
                                ].map((lesson, i) => (
                                    <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${lesson.active ? 'bg-slate-50 border border-slate-200' : 'opacity-50 hover:opacity-100 transition-opacity'}`}>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${lesson.active ? 'bg-orange-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                                                {i + 4}
                                            </div>
                                            <div className="text-sm font-bold text-slate-700">{lesson.title}</div>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-slate-400">
                                            <Clock size={12} /> {lesson.time}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
                .perspective-1000 { perspective: 1000px; }
            `}</style>
        </section>
    );
};

export default UI08Hero;
