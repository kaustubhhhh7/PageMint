import React, { useState } from 'react';
import { ChevronRight, Play, FileText, Code, CheckCircle, X, Lock, Maximize2, Minimize2 } from 'lucide-react';

const UI08Curriculum = () => {
    const [activeModule, setActiveModule] = useState(0);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [focusMode, setFocusMode] = useState(false);

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
        <section id="curriculum" className={`py-24 transition-colors duration-500 relative ${focusMode ? 'bg-slate-900 border-y border-slate-800' : 'bg-white'}`}>

            {/* Mode Toggle - Unique Feature */}
            <div className="absolute top-6 right-6 z-20">
                <button
                    onClick={() => setFocusMode(!focusMode)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${focusMode ? 'bg-white text-slate-900' : 'bg-slate-100 text-slate-500 hover:text-indigo-600'}`}
                >
                    {focusMode ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                    {focusMode ? 'Exit Focus Mode' : 'Try Focus Mode'}
                </button>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl md:text-4xl font-black mb-4 ${focusMode ? 'text-white' : 'text-slate-900'}`}>
                        Master the Stack.
                    </h2>
                    <p className={`text-lg ${focusMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        Hands-on labs. Code-along videos. Pop quizzes.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Module Tabs */}
                    <div className="w-full lg:w-1/3 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                        {modules.map((mod, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveModule(idx)}
                                className={`flex px-6 py-5 rounded-xl text-left transition-all min-w-[200px] border ${activeModule === idx
                                    ? 'bg-indigo-600 border-indigo-500 shadow-lg shadow-indigo-500/20 scale-100 lg:scale-105 z-10'
                                    : 'bg-transparent border-transparent hover:bg-opacity-50 hover:bg-white text-slate-500'
                                    }`}
                            >
                                <div>
                                    <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${activeModule === idx ? 'text-indigo-200' : 'text-slate-400'}`}>
                                        Module 0{idx + 1}
                                    </div>
                                    <div className={`font-bold text-lg ${activeModule === idx ? 'text-white' : focusMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                        {mod.title}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Lesson List */}
                    <div className={`w-full lg:w-2/3 rounded-3xl border overflow-hidden min-h-[400px] transition-colors ${focusMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/40'}`}>
                        <div className={`p-8 border-b flex justify-between items-center ${focusMode ? 'bg-slate-900/50 border-slate-700' : 'bg-slate-50/80 border-slate-100'}`}>
                            <h3 className={`font-bold text-xl ${focusMode ? 'text-white' : 'text-slate-900'}`}>{modules[activeModule].title}</h3>
                            <span className="text-xs font-bold text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full">
                                {modules[activeModule].lessons.length} Lessons
                            </span>
                        </div>
                        <div className={`divide-y ${focusMode ? 'divide-slate-700' : 'divide-slate-100'}`}>
                            {modules[activeModule].lessons.map((lesson) => (
                                <div
                                    key={lesson.id}
                                    className={`p-6 transition-colors cursor-pointer group flex items-center justify-between ${focusMode ? 'hover:bg-slate-700/50' : 'hover:bg-indigo-50/30'}`}
                                    onClick={() => setSelectedLesson(lesson)}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${focusMode ? 'bg-slate-700 text-slate-300' : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'}`}>
                                            {getIcon(lesson.type)}
                                        </div>
                                        <div>
                                            <div className={`font-bold text-base mb-1 ${focusMode ? 'text-slate-200' : 'text-slate-800'}`}>{lesson.title}</div>
                                            <div className={`text-xs font-medium flex items-center gap-2 ${focusMode ? 'text-slate-500' : 'text-slate-400'}`}>
                                                <span className="capitalize">{lesson.type}</span> • {lesson.duration}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`transition-colors ${focusMode ? 'text-slate-600 group-hover:text-indigo-400' : 'text-slate-300 group-hover:text-indigo-600'}`}>
                                        <ChevronRight size={20} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Lesson Detail Panel */}
                <div
                    className={`fixed inset-0 z-[70] bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${selectedLesson ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    onClick={() => setSelectedLesson(null)}
                >
                    <div
                        className={`absolute top-0 right-0 h-full w-full md:w-[500px] bg-white shadow-2xl transform transition-transform duration-300 ${selectedLesson ? 'translate-x-0' : 'translate-x-full'}`}
                        onClick={e => e.stopPropagation()}
                    >
                        {selectedLesson && (
                            <div className="h-full flex flex-col relative overflow-hidden">
                                {/* Header Mock */}
                                <div className="h-48 bg-slate-900 flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-indigo-600 opacity-20" />
                                    <Play size={48} className="text-white relative z-10" />
                                    <button onClick={() => setSelectedLesson(null)} className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors z-20">
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="p-8 flex-1 overflow-y-auto">
                                    <div className="flex gap-4 mb-6">
                                        <div className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-lg uppercase border border-indigo-100">
                                            {selectedLesson.type}
                                        </div>
                                        <div className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg uppercase border border-slate-200">
                                            {selectedLesson.duration}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-black text-slate-900 leading-tight mb-4">{selectedLesson.title}</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                        {selectedLesson.desc} Master the core concepts through interactive examples.
                                    </p>

                                    <div className="space-y-4 mb-8">
                                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Lesson Outcomes</h4>
                                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                            <CheckCircle size={18} className="text-green-500 mt-0.5" />
                                            <span className="text-sm text-slate-600 font-medium">Concept Mastery</span>
                                        </div>
                                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                            <Code size={18} className="text-indigo-500 mt-0.5" />
                                            <span className="text-sm text-slate-600 font-medium">Practical Code Implementation</span>
                                        </div>
                                    </div>

                                    <div className="bg-rose-50 border border-rose-100 rounded-xl p-6">
                                        <div className="flex items-center gap-2 font-bold text-rose-700 mb-2">
                                            <Lock size={16} /> Locked Content
                                        </div>
                                        <p className="text-sm text-rose-600/80 mb-4">Enroll to access full video, source code, and quizzes.</p>
                                        <button
                                            onClick={() => { setSelectedLesson(null); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }}
                                            className="w-full bg-rose-500 text-white font-bold py-3 rounded-lg shadow-lg shadow-rose-500/20 hover:bg-rose-600 transition-colors"
                                        >
                                            Get Full Access
                                        </button>
                                    </div>
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
