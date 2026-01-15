import React, { useState } from 'react';
import { ArrowRight, Check, Lock, Book, Clock } from 'lucide-react';

const UI08LearningPathMap = () => {
    const [activeNode, setActiveNode] = useState(0);

    const nodes = [
        { id: 0, title: "HTML/CSS", label: "Foundations", locked: false, details: "Master the structure of the web. Semantic HTML, Modern CSS Grid, and Responsive Design." },
        { id: 1, title: "JavaScript", label: "Logic", locked: false, details: "Deep dive into ES6+, Async/Await, and functional programming concepts." },
        { id: 2, title: "React", label: "Frontend", locked: false, details: "Component architecture, Hooks, Context API, and global state management." },
        { id: 3, title: "Node/API", label: "Backend", locked: true, details: "Building RESTful services, Middleware, and Express.js routing." },
        { id: 4, title: "Database", label: "Data", locked: true, details: "MongoDB schema design, Aggregations, and SQL relationships." },
        { id: 5, title: "Deploy", label: "DevOps", locked: true, details: "CI/CD pipelines, AWS deployment, and performance optimization." }
    ];

    return (
        <section className="py-24 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">Your Roadmap to Hired.</h2>
                    <p className="text-slate-500">A structured path from beginner to professional engineer.</p>
                </div>

                <div className="relative">
                    {/* Animated Connection Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden md:block" />
                    <div
                        className="absolute top-1/2 left-0 h-1 bg-indigo-500 -translate-y-1/2 hidden md:block transition-all duration-700 ease-in-out"
                        style={{ width: `${(activeNode / (nodes.length - 1)) * 100}%` }}
                    />

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative z-10">
                        {nodes.map((node, i) => (
                            <div key={i} className="flex flex-col items-center group">
                                <button
                                    onClick={() => setActiveNode(i)}
                                    className={`
                                        w-14 h-14 rounded-full border-4 flex items-center justify-center transition-all duration-300 relative
                                        ${activeNode === i
                                            ? 'bg-indigo-600 border-indigo-200 text-white scale-110 shadow-lg shadow-indigo-500/30'
                                            : i < activeNode
                                                ? 'bg-indigo-600 border-indigo-600 text-white'
                                                : 'bg-white border-slate-200 text-slate-300 hover:border-indigo-300'
                                        }
                                    `}
                                >
                                    {i < activeNode ? <Check size={20} /> : (node.locked && i > activeNode ? <Lock size={16} /> : <span className="font-bold font-mono">{i + 1}</span>)}

                                    {/* Tooltip Label */}
                                    <div className={`absolute -bottom-8 whitespace-nowrap text-xs font-bold transition-colors ${activeNode === i ? 'text-indigo-600' : 'text-slate-400'}`}>
                                        {node.title}
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Active Node Detail Panel */}
                    <div className="mt-16 max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-8 relative overflow-hidden transition-all">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-500" />
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">{nodes[activeNode].label}</span>
                                <h3 className="text-2xl font-black text-slate-900 mt-1">{nodes[activeNode].title} Mastery</h3>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-lg px-3 py-1 flex items-center gap-2 text-xs font-bold text-slate-600">
                                <Clock size={14} /> 2 Weeks
                            </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            {nodes[activeNode].details} Includes 3 hands-on projects and a live code-along session.
                        </p>
                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 text-sm font-bold text-indigo-600 hover:underline">
                                <Book size={16} /> View Curriculum
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UI08LearningPathMap;
