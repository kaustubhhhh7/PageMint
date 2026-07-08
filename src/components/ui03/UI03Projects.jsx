import React, { useState } from 'react';
import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';
import project3 from '../../assets/images/project3.png';
import project4 from '../../assets/images/project4.png';
import project5 from '../../assets/images/project5.png';

const UI03Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Dashboard',
            category: 'Web',
            image: project1,
            description: 'A comprehensive admin dashboard for managing products, orders, and analytics.',
            tech: ['React', 'Chart.js', 'Tailwind'],
            features: ['Real-time data visualization', 'Dark/Light mode toggle', 'Role-based access control', 'Export to CSV']
        },
        {
            id: 2,
            title: 'Finance App UI',
            category: 'UI',
            image: project2,
            description: 'Modern and clean mobile app interface design for personal finance tracking.',
            tech: ['Figma', 'CSS', 'Animation'],
            features: ['Glassmorphism effects', 'Smooth micro-interactions', 'Accessible color palette', 'Responsive layout']
        },
        {
            id: 3,
            title: 'Task API Service',
            category: 'Backend',
            image: project3,
            description: 'RESTful API for a collaborative task management platform.',
            tech: ['Node.js', 'Express', 'MongoDB'],
            features: ['JWT Authentication', 'Rate limiting', 'Complex aggregation pipelines', 'Swagger documentation']
        },
        {
            id: 4,
            title: 'Travel Log',
            category: 'Web',
            image: project4,
            description: 'Interactive map-based journaling app for travelers.',
            tech: ['React', 'Mapbox', 'Firebase'],
            features: ['Geolocation tagging', 'Image upload & optimization', 'Social sharing', 'Offline support']
        },
        {
            id: 5,
            title: 'Portfolio v1',
            category: 'UI',
            image: project5,
            description: 'The first iteration of my personal portfolio, focusing on brutalist design.',
            tech: ['HTML', 'Sass', 'JS'],
            features: ['Custom cursor', 'Parallax scrolling', 'Typography-focused', 'Minimalist grid']
        },
        {
            id: 6,
            title: 'Chat Server',
            category: 'Backend',
            image: project3,
            description: 'WebSocket server for real-time messaging applications.',
            tech: ['Socket.io', 'Redis', 'Docker'],
            features: ['Horizontal scaling', 'Message persistence', 'Room management', 'Presence detection']
        },
    ];

    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[300px] h-[300px] bg-blue-50/50 rounded-full blur-[60px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3 pl-1">Portfolio</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Featured Work</h3>
                    </div>

                    {/* Filter */}
                    <div className="flex space-x-1 mt-8 md:mt-0 bg-slate-100/80 p-1 rounded-full backdrop-blur-sm">
                        {['All', 'Web', 'UI', 'Backend'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                    ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-black/5'
                                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group relative bg-white rounded-3xl cursor-pointer hover:-translate-y-2 transition-all duration-500 ease-out border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(79,70,229,0.15)] overflow-hidden flex flex-col h-[420px]"
                        >
                            {/* Image Area */}
                            <div className="h-56 relative overflow-hidden bg-slate-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-indigo-600 uppercase tracking-wider shadow-sm border border-white/20">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{project.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6">{project.description}</p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">{t}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Overlay Icon */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 border border-white/40 shadow-xl pointer-events-none">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            {selectedProject && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4">
                    <div
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity"
                        onClick={() => setSelectedProject(null)}
                    ></div>

                    <div className="relative bg-white rounded-[2rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-ui03-modal-enter border border-white/20">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Image Side */}
                            <div className="relative h-64 lg:h-auto bg-slate-100">
                                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
                                <div className="absolute bottom-4 left-4 lg:hidden">
                                    <h2 className="text-2xl font-bold text-white shadow-sm">{selectedProject.title}</h2>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-black/40 transition-colors lg:hidden"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 lg:p-12 bg-white">
                                <div className="hidden lg:flex justify-between items-start mb-6">
                                    <div>
                                        <span className="text-indigo-600 font-bold text-sm uppercase tracking-wider mb-2 block">{selectedProject.category}</span>
                                        <h2 className="text-3xl font-bold text-slate-900">{selectedProject.title}</h2>
                                    </div>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    </button>
                                </div>

                                <p className="text-slate-600 text-lg mb-8 leading-relaxed font-light">{selectedProject.description}</p>

                                <div className="mb-8">
                                    <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Key Features</h3>
                                    <ul className="space-y-3">
                                        {selectedProject.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-slate-600">
                                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                                    <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <span className="text-sm font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-slate-100">
                                    <button className="flex-1 bg-indigo-600 text-white font-semibold py-3.5 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                                        Live Demo
                                    </button>
                                    <button className="flex-1 bg-white border border-slate-200 text-slate-700 font-semibold py-3.5 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all">
                                        Source Code
                                    </button>
                                </div>
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
            animation: ui03ModalEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
        </section>
    );
};

export default UI03Projects;
