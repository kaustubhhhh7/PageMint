import React, { useState } from 'react';
import { Eye, Layers, Github, X } from 'lucide-react';

const UI08ProjectsShowcase = () => {
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Smart Attendance System",
            stack: ["React", "Node", "MongoDB"],
            difficulty: "Intermediate",
            image: "bg-slate-100", // placeholder
            desc: "A full-stack application for tracking student attendance with QR codes and generating meaningful reports for teachers."
        },
        {
            id: 2,
            title: "E-Commerce Dashboard",
            stack: ["Next.js", "Tailwind", "Stripe"],
            difficulty: "Advanced",
            image: "bg-blue-50",
            desc: "Admin dashboard with real-time sales charts, inventory management, and stripe payment integration."
        },
        {
            id: 3,
            title: "Task Management SaaS",
            stack: ["React", "Firebase", "Redux"],
            difficulty: "Advanced",
            image: "bg-orange-50",
            desc: "Trello-clone with drag-and-drop kanban boards, team collaboration features, and realtime updates."
        },
        {
            id: 4,
            title: "Developer Portfolio",
            stack: ["HTML", "CSS", "JS"],
            difficulty: "Beginner",
            image: "bg-purple-50",
            desc: "A highly responsive personal portfolio website to showcase your projects and resume."
        }
    ];

    return (
        <section id="projects" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 mb-2">Build a portfolio that hires you.</h2>
                        <p className="text-slate-500">You will ship these 4 projects during the bootcamp.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
                            {/* Project Image Mock */}
                            <div className={`h-48 ${project.image} flex items-center justify-center`}>
                                <Layers size={48} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-bold text-xl text-slate-900">{project.title}</h3>
                                        <div className="flex gap-2 mt-2">
                                            {project.stack.map((t, i) => (
                                                <span key={i} className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-orange-500 uppercase tracking-wide border border-orange-200 px-2 py-1 rounded bg-orange-50">
                                        {project.difficulty}
                                    </span>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {project.desc}
                                </p>
                                <button
                                    onClick={() => setActiveProject(project)}
                                    className="w-full py-3 border border-slate-200 rounded-lg text-slate-700 font-bold hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-2"
                                >
                                    <Eye size={16} /> Preview Project
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {activeProject && (
                <div className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setActiveProject(null)}>
                    <div
                        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-up"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className={`h-40 ${activeProject.image} w-full flex items-center justify-center relative`}>
                            <button onClick={() => setActiveProject(null)} className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full transition-colors">
                                <X size={20} />
                            </button>
                            <Layers size={64} className="text-slate-400" />
                        </div>

                        <div className="p-8">
                            <h3 className="text-2xl font-black text-slate-900 mb-2">{activeProject.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">{activeProject.desc}</p>

                            <div className="mb-8">
                                <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {activeProject.stack.map(s => (
                                        <span key={s} className="bg-blue-50 text-blue-700 px-3 py-1 font-bold rounded-lg text-sm">{s}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button className="flex-1 bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-colors">
                                    Add to Portfolio
                                </button>
                                <button className="flex-1 border-2 border-slate-200 text-slate-700 font-bold py-3.5 rounded-xl hover:border-slate-300 flex items-center justify-center gap-2">
                                    <Github size={18} /> View Code
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default UI08ProjectsShowcase;
