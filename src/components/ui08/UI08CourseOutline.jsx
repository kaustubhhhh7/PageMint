import React, { useState } from 'react';
import { ChevronDown, ChevronRight, PlayCircle, Code, FileText, CheckCircle2 } from 'lucide-react';

const UI08CourseOutline = () => {
    const [openChapter, setOpenChapter] = useState(0);

    const chapters = [
        {
            title: "01. Fundamentals & Architecture",
            meta: "4 Lessons • 1hr 20m",
            lessons: [
                { title: "How the Web Works", type: "video", duration: "12m" },
                { title: "HTML5 Semantic Structure", type: "video", duration: "18m" },
                { title: "CSS Box Model Deep Dive", type: "exercise", duration: "35m" },
                { title: "Git & Version Control", type: "quiz", duration: "15m" }
            ]
        },
        {
            title: "02. Advanced JavaScript",
            meta: "5 Lessons • 2hr 10m",
            lessons: [
                { title: "ES6+ Features & Syntax", type: "video", duration: "25m" },
                { title: "Async/Await & Promises", type: "code", duration: "45m" },
                { title: "The Event Loop Explained", type: "video", duration: "20m" },
                { title: "Closures & Scope", type: "exercise", duration: "30m" },
                { title: "JS Mini-Project: Todo App", type: "project", duration: "1h 10m" }
            ]
        },
        {
            title: "03. React & Modern UI",
            meta: "6 Lessons • 3hr",
            lessons: [
                { title: "Components & Props", type: "video", duration: "30m" },
                { title: "State Management with Hooks", type: "code", duration: "50m" },
                { title: "React Router", type: "video", duration: "25m" },
                { title: "Tailwind CSS Integration", type: "exercise", duration: "45m" }
            ]
        },
        {
            title: "04. Backend with Node.js",
            meta: "4 Lessons • 2h",
            lessons: [
                { title: "Node Runtime Basics", type: "video", duration: "20m" },
                { title: "Express Server Setup", type: "code", duration: "40m" },
                { title: "REST API Design Principles", type: "video", duration: "25m" },
                { title: "Middleware & Error Handling", type: "exercise", duration: "35m" }
            ]
        },
        {
            title: "05. Database & Deployment",
            meta: "3 Lessons • 1h 30m",
            lessons: [
                { title: "MongoDB Schema Design", type: "video", duration: "30m" },
                { title: "Connecting DB to Backend", type: "code", duration: "40m" },
                { title: "Deploying to Vercel/Render", type: "project", duration: "20m" }
            ]
        },
        {
            title: "06. Capstone Project",
            meta: "2 Lessons • 1 week",
            lessons: [
                { title: "Project Planning & Specs", type: "video", duration: "40m" },
                { title: "Final Review & Submission", type: "project", duration: "Async" }
            ]
        }
    ];

    const getIcon = (type) => {
        switch (type) {
            case 'video': return <PlayCircle size={16} />;
            case 'code':
            case 'project': return <Code size={16} />;
            default: return <FileText size={16} />;
        }
    };

    return (
        <section id="outline" className="py-24 bg-zinc-50 border-b border-zinc-200">
            <div className="max-w-4xl mx-auto px-6">

                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-3xl font-black text-zinc-900 mb-4">Course Outline.</h2>
                    <p className="text-zinc-500 max-w-xl">A complete breakdown of the 8-week curriculum. Each chapter is designed to build upon the last.</p>
                </div>

                <div className="border border-zinc-200 bg-white rounded-lg overflow-hidden shadow-sm">
                    {chapters.map((chapter, index) => {
                        const isOpen = openChapter === index;
                        return (
                            <div key={index} className="border-b border-zinc-100 last:border-b-0">
                                <button
                                    onClick={() => setOpenChapter(isOpen ? null : index)}
                                    className={`w-full flex items-center justify-between p-6 hover:bg-zinc-50 transition-colors text-left group ${isOpen ? 'bg-zinc-50' : 'bg-white'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-1 rounded transition-transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                                            <ChevronRight size={18} className="text-zinc-400 group-hover:text-zinc-900" />
                                        </div>
                                        <div>
                                            <h3 className={`font-bold text-lg ${isOpen ? 'text-zinc-900' : 'text-zinc-600'}`}>
                                                {chapter.title}
                                            </h3>
                                            {!isOpen && <span className="text-xs font-mono text-zinc-400 mt-1 block">{chapter.meta}</span>}
                                        </div>
                                    </div>
                                    {isOpen && <span className="text-xs font-mono text-zinc-400 hidden md:block">{chapter.meta}</span>}
                                </button>

                                {isOpen && (
                                    <div className="px-6 pb-6 pt-2 bg-zinc-50 animate-in slide-in-from-top-2 duration-300">
                                        <div className="space-y-2 pl-10">
                                            {chapter.lessons.map((lesson, lIndex) => (
                                                <div key={lIndex} className="flex items-center justify-between group cursor-pointer py-2 hover:translate-x-1 transition-transform">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-zinc-400 group-hover:text-amber-500 transition-colors">
                                                            {getIcon(lesson.type)}
                                                        </span>
                                                        <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900">
                                                            {lesson.title}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <span className="text-[10px] uppercase font-bold text-zinc-400 px-2 py-1 bg-zinc-100 rounded border border-zinc-200 group-hover:border-zinc-300">
                                                            {lesson.type}
                                                        </span>
                                                        <span className="text-xs font-mono text-zinc-400 w-12 text-right">
                                                            {lesson.duration}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default UI08CourseOutline;
