import React, { useState } from 'react';
import { ChevronRight, Play, FileText, Code, CheckCircle, X, Lock } from 'lucide-react';

const UI08Curriculum = () => {
    const [activeModule, setActiveModule] = useState(0);
    const [selectedLesson, setSelectedLesson] = useState(null);

    const modules = [
        {
            title: "Fundamentals",
            lessons: [
                { id: 101, title: "Web Architecture Basics", type: "video", duration: "15 min", desc: "Understanding how the internet works, DNS, HTTP, and browser rendering." },
                { id: 102, title: "HTML5 Semantic Structure", type: "video", duration: "25 min", desc: "Building accessible and SEO-friendly document structures." },
                { id: 103, title: "CSS Grid & Flexbox", type: "lab", duration: "45 min", desc: "Mastering modern layout techniques with interactive exercises." },
                { id: 104, title: "Git & Version Control", type: "video", duration: "20 min", desc: "Essential Git commands, branching strategies, and GitHub workflow." }
            ]
        },
        {
            title: "Frontend (React)",
            lessons: [
                { id: 201, title: "JavaScript ES6+ Features", type: "video", duration: "35 min", desc: "Arrow functions, destructuring, modules, and async/await." },
                { id: 202, title: "React Component Lifecycle", type: "video", duration: "30 min", desc: "Understanding mounting, updating, and unmounting phases." },
                { id: 203, title: "Hooks Deep Dive", type: "lab", duration: "60 min", desc: "UseState, UseEffect, UseContext practical implementation." },
                { id: 204, title: "State Management (Redux)", type: "code", duration: "50 min", desc: "Global state patterns and Redux Toolkit setup." }
            ]
        },
        {
            title: "Backend (Node)",
            lessons: [
                { id: 301, title: "Node.js Event Loop", type: "video", duration: "20 min", desc: "How Node handles asynchronous operations under the hood." },
                { id: 302, title: "Express Middleware", type: "code", duration: "40 min", desc: "Building custom middleware for logging and authentication." },
                { id: 303, title: "REST API Design", type: "video", duration: "25 min", desc: "Best practices for resource naming, status codes, and methods." },
                { id: 304, title: "MongoDB Aggregations", type: "lab", duration: "55 min", desc: "Complex data queries and performance optimization." }
            ]
        }
    ];

    const getIcon = (type) => {
        if (type === 'video') return <Play size={16} />;
        if (type === 'code') return <Code size={16} />;
        return <FileText size={16} />;
    };

    return (
        <section id="curriculum" className="py-24 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">What you'll master.</h2>
                    <p className="text-slate-500">A comprehensive curriculum designed for modern engineering roles.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Module Tabs (Vertical on Desktop) */}
                    <div className="w-full lg:w-1/3 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                        {modules.map((mod, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveModule(idx)}
                                className={`flex px-6 py-5 rounded-xl text-left transition-all min-w-[200px] border ${activeModule === idx
                                        ? 'bg-white border-blue-200 shadow-lg shadow-blue-500/10 scale-100 lg:scale-105 z-10'
                                        : 'bg-transparent border-transparent hover:bg-white/50 text-slate-500 hover:text-slate-800'
                                    }`}
                            >
                                <div>
                                    <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${activeModule === idx ? 'text-blue-600' : 'text-slate-400'}`}>
                                        Module 0{idx + 1}
                                    </div>
                                    <div className={`font-bold text-lg ${activeModule === idx ? 'text-slate-900' : 'text-slate-600'}`}>
                                        {mod.title}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Lesson List */}
                    <div className="w-full lg:w-2/3 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden min-h-[400px]">
                        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <h3 className="font-bold text-xl text-slate-900">{modules[activeModule].title}</h3>
                            <span className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">
                                {modules[activeModule].lessons.length} Lessons
                            </span>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {modules[activeModule].lessons.map((lesson) => (
                                <div
                                    key={lesson.id}
                                    className="p-6 hover:bg-slate-50 transition-colors cursor-pointer group flex items-center justify-between"
                                    onClick={() => setSelectedLesson(lesson)}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            {getIcon(lesson.type)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-800 text-base mb-1">{lesson.title}</div>
                                            <div className="text-xs font-medium text-slate-400 flex items-center gap-2">
                                                <span className="capitalize">{lesson.type}</span> • {lesson.duration}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-slate-300 group-hover:text-blue-600 transition-colors">
                                        <ChevronRight size={20} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Lesson Detail Sidebar (Right Slide-over) */}
                <div
                    className={`fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${selectedLesson ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    onClick={() => setSelectedLesson(null)}
                >
                    <div
                        className={`absolute top-0 right-0 h-full w-full md:w-[450px] bg-white shadow-2xl transform transition-transform duration-300 ${selectedLesson ? 'translate-x-0' : 'translate-x-full'}`}
                        onClick={e => e.stopPropagation()}
                    >
                        {selectedLesson && (
                            <div className="h-full flex flex-col">
                                <div className="p-8 border-b border-slate-100 flex items-start justify-between bg-slate-50">
                                    <div>
                                        <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Lesson Details</div>
                                        <h3 className="text-2xl font-black text-slate-900 leading-tight">{selectedLesson.title}</h3>
                                    </div>
                                    <button onClick={() => setSelectedLesson(null)} className="p-2 bg-white rounded-full text-slate-400 hover:text-slate-900 border border-slate-200">
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="p-8 flex-1 overflow-y-auto">
                                    <div className="flex gap-4 mb-8">
                                        <div className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg uppercase">
                                            {selectedLesson.type}
                                        </div>
                                        <div className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg uppercase">
                                            {selectedLesson.duration}
                                        </div>
                                    </div>

                                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                        {selectedLesson.desc} In this session, we will break down the core concepts and apply them in a real-time coding environment.
                                    </p>

                                    <h4 className="font-bold text-slate-900 mb-4">You will learn:</h4>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-start gap-3 text-slate-600 text-sm">
                                            <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                                            <span>Theoretical understanding of the topic</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-600 text-sm">
                                            <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                                            <span>Practical implementation in VS Code</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-600 text-sm">
                                            <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                                            <span>Common pitfalls and debugging tips</span>
                                        </li>
                                    </ul>

                                    <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 mb-8">
                                        <div className="flex items-center gap-2 font-bold text-orange-700 mb-2">
                                            <Lock size={16} /> Locked Content
                                        </div>
                                        <p className="text-xs text-orange-600/80">Enroll in the course to access the full video, source code, and quizzes for this lesson.</p>
                                    </div>
                                </div>

                                <div className="p-6 border-t border-slate-100 bg-white">
                                    <button
                                        onClick={() => { setSelectedLesson(null); document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' }); }}
                                        className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-colors"
                                    >
                                        Unlock Full Course
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UI08Curriculum;
