import React, { useState } from 'react';

const UI03Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Dashboard',
            category: 'Web',
            description: 'A comprehensive admin dashboard for managing products, orders, and analytics.',
            tech: ['React', 'Chart.js', 'Tailwind'],
            features: ['Real-time data visualization', 'Dark/Light mode toggle', 'Role-based access control', 'Export to CSV']
        },
        {
            id: 2,
            title: 'Finance App UI',
            category: 'UI',
            description: 'Modern and clean mobile app interface design for personal finance tracking.',
            tech: ['Figma', 'CSS', 'Animation'],
            features: ['Glassmorphism effects', 'Smooth micro-interactions', 'Accessible color palette', 'Responsive layout']
        },
        {
            id: 3,
            title: 'Task API Service',
            category: 'Backend',
            description: 'RESTful API for a collaborative task management platform.',
            tech: ['Node.js', 'Express', 'MongoDB'],
            features: ['JWT Authentication', 'Rate limiting', 'Complex aggregation pipelines', 'Swagger documentation']
        },
        {
            id: 4,
            title: 'Travel Log',
            category: 'Web',
            description: 'Interactive map-based journaling app for travelers.',
            tech: ['React', 'Mapbox', 'Firebase'],
            features: ['Geolocation tagging', 'Image upload & optimization', 'Social sharing', 'Offline support']
        },
        {
            id: 5,
            title: 'Portfolio v1',
            category: 'UI',
            description: 'The first iteration of my personal portfolio, focusing on brutalist design.',
            tech: ['HTML', 'Sass', 'JS'],
            features: ['Custom cursor', 'Parallax scrolling', 'Typography-focused', 'Minimalist grid']
        },
        {
            id: 6,
            title: 'Chat Server',
            category: 'Backend',
            description: 'WebSocket server for real-time messaging applications.',
            tech: ['Socket.io', 'Redis', 'Docker'],
            features: ['Horizontal scaling', 'Message persistence', 'Room management', 'Presence detection']
        },
    ];

    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">Portfolio</h2>
                        <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">Featured Projects</h3>
                    </div>

                    {/* Filter */}
                    <div className="flex space-x-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
                        {['All', 'Web', 'UI', 'Backend'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${filter === cat
                                    ? 'bg-slate-900 text-white shadow-md'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-2 h-[320px] flex flex-col"
                        >
                            {/* Placeholder Image Area */}
                            <div className="h-40 bg-slate-50 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 group-hover:scale-110 transition-transform duration-700"></div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-indigo-600 uppercase tracking-wide shadow-sm">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h4>
                                <p className="text-slate-500 text-sm line-clamp-2 mb-4">{project.description}</p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded">{t}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Reveal Action Row */}
                            <div className="absolute bottom-0 left-0 right-0 bg-indigo-600 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center text-white">
                                <span className="font-semibold text-sm">View Details</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            {selectedProject && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                    <div
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedProject(null)}
                    ></div>

                    <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-ui03-modal-enter">
                        <div className="sticky top-0 right-0 p-4 flex justify-end z-10">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="p-2 bg-white/50 backdrop-blur-md rounded-full hover:bg-slate-100 transition-colors"
                            >
                                <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>

                        <div className="px-8 pb-8 pt-2">
                            <span className="text-indigo-600 font-bold text-sm uppercase tracking-wide mb-2 block">{selectedProject.category}</span>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">{selectedProject.title}</h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">{selectedProject.description}</p>

                            <div className="bg-slate-50 rounded-xl p-6 mb-8">
                                <h3 className="font-bold text-slate-900 mb-4">Key Features</h3>
                                <ul className="space-y-3">
                                    {selectedProject.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-slate-600">
                                            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <button className="flex-1 bg-slate-900 text-white font-semibold py-4 rounded-xl hover:bg-slate-800 transition-colors">
                                    Live Demo
                                </button>
                                <button className="flex-1 bg-white border-2 border-slate-200 text-slate-700 font-semibold py-4 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors">
                                    View GitHub
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes ui03ModalEnter {
            from { opacity: 0; transform: scale(0.95) translateY(20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-ui03-modal-enter {
            animation: ui03ModalEnter 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
        </section>
    );
};

export default UI03Projects;
