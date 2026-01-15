import React, { useState } from 'react';
import { Github, ExternalLink, X, List, FolderTree } from 'lucide-react';

const UI08Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "E-Commerce Dashboard",
            desc: "A full-featured admin dashboard with real-time sales data and inventory management.",
            stack: ["React", "Tailwind", "Recharts"],
            difficulty: "Intermediate"
        },
        {
            title: "Task Management API",
            desc: "Robust REST API with authentication, rate limiting, and email notifications.",
            stack: ["Node.js", "Express", "PostgreSQL"],
            difficulty: "Advanced"
        },
        {
            title: "Real-time Chat App",
            desc: "Slack clone with channels, DMs, and file sharing using WebSockets.",
            stack: ["Socket.io", "MongoDB", "React"],
            difficulty: "Hard"
        },
        {
            title: "AI Content Generator",
            desc: "SaaS application wrapping OpenAI API with credit system and history.",
            stack: ["Next.js", "OpenAI", "Stripe"],
            difficulty: "Advanced"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-white border-b border-zinc-200">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-black text-zinc-900 mb-4">Build Portfolio-Grade Software.</h2>
                    <p className="text-zinc-500">No toy apps. You'll build systems that solve real problems.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="border border-zinc-200 rounded-xl p-8 hover:border-zinc-400 transition-colors bg-white hover:bg-zinc-50/50">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl font-bold text-zinc-900">{project.title}</h3>
                                <span className="px-2 py-1 bg-zinc-100 text-xs font-bold uppercase text-zinc-500 rounded border border-zinc-200">
                                    {project.difficulty}
                                </span>
                            </div>
                            <p className="text-zinc-600 mb-8 h-12">{project.desc}</p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="text-xs font-mono text-zinc-500 px-2 py-1 bg-zinc-50 border border-zinc-100 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <button
                                onClick={() => setSelectedProject(project)}
                                className="w-full py-3 bg-white border border-zinc-300 text-zinc-900 font-bold text-sm rounded-lg hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors"
                            >
                                View Project Spec
                            </button>
                        </div>
                    ))}
                </div>

                {/* README Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedProject(null)}>
                        <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full flex flex-col max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom-4 duration-300" onClick={e => e.stopPropagation()}>

                            {/* Modal Header */}
                            <div className="p-6 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-zinc-900 text-white rounded-lg">
                                        <Github size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-zinc-900">{selectedProject.title}</h3>
                                        <p className="text-xs text-zinc-500 font-mono">README.md</p>
                                    </div>
                                </div>
                                <button onClick={() => setSelectedProject(null)} className="text-zinc-400 hover:text-zinc-900">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8 overflow-y-auto prose prose-sm max-w-none">
                                <h4 className="flex items-center gap-2 text-zinc-900 font-bold uppercase tracking-wider text-xs mb-4">
                                    <List size={16} /> Features to Implement
                                </h4>
                                <ul className="space-y-2 mb-8 text-zinc-600 list-disc pl-5">
                                    <li>Setup React project with Vite</li>
                                    <li>Implement specific design system tokens</li>
                                    <li>Connect to Backend API using Axios</li>
                                    <li>Handle loading and error states gracefully</li>
                                    <li>Write unit tests for critical components</li>
                                </ul>

                                <h4 className="flex items-center gap-2 text-zinc-900 font-bold uppercase tracking-wider text-xs mb-4">
                                    <FolderTree size={16} /> Recommended Structure
                                </h4>
                                <pre className="bg-zinc-50 border border-zinc-200 p-4 rounded-lg text-xs font-mono text-zinc-700 overflow-x-auto">
                                    {`src/
├── components/
│   ├── ui/
│   └── text-chat/
├── hooks/
│   └── useWebSocket.js
├── store/
│   └── chartSlice.js
└── utils/
    └── api.js`}
                                </pre>
                            </div>

                            {/* Modal Footer */}
                            <div className="p-6 border-t border-zinc-100 bg-zinc-50 flex justify-end gap-3">
                                <button onClick={() => setSelectedProject(null)} className="px-4 py-2 text-sm font-bold text-zinc-600 hover:text-zinc-900">
                                    Close
                                </button>
                                <button className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold text-sm rounded shadow-sm flex items-center gap-2">
                                    Start Project <ExternalLink size={14} />
                                </button>
                            </div>

                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default UI08Projects;
