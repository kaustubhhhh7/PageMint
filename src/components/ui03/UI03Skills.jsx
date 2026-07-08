import React, { useState } from 'react';

const UI03Skills = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const skillCategories = [
        {
            id: 'frontend',
            title: 'Frontend Mastery',
            description: 'Crafting pixel-perfect, responsive, and accessible user interfaces.',
            skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Redux', 'HTML5/CSS3'],
            color: 'from-indigo-500 to-purple-600',
            bg: 'bg-indigo-50'
        },
        {
            id: 'backend',
            title: 'Backend & API',
            description: 'Building robust, scalable server-side logic and database architectures.',
            skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Firebase', 'REST'],
            color: 'from-blue-500 to-cyan-500',
            bg: 'bg-blue-50'
        },
        {
            id: 'design',
            title: 'UI/UX Design',
            description: 'Translating user needs into intuitive and beautiful visual experiences.',
            skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Wireframing', 'Design Systems'],
            color: 'from-pink-500 to-rose-500',
            bg: 'bg-pink-50'
        },
        {
            id: 'tools',
            title: 'DevOps & Tools',
            description: 'Streamlining development workflows and deployment pipelines.',
            skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Vercel'],
            color: 'from-emerald-500 to-teal-500',
            bg: 'bg-emerald-50'
        }
    ];

    return (
        <section id="skills" className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-100/40 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3 pl-1">Expertise</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                            A versatile toolset for <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">modern problems.</span>
                        </h3>
                        <p className="text-lg text-slate-500 leading-relaxed">
                            I specialize in the JavaScript ecosystem, but I'm constantly exploring new technologies to build faster, reliable, and more engaging applications.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.id}
                            onMouseEnter={() => setHoveredCategory(category.id)}
                            onMouseLeave={() => setHoveredCategory(null)}
                            className={`group relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden ${hoveredCategory === category.id ? '-translate-y-1' : ''}`}
                        >
                            {/* Decorative Gradient Blob */}
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${category.color} opacity-5 rounded-full blur-[60px] transform translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 group-hover:opacity-10`}></div>

                            <div className="relative z-10">
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6 ${category.bg}`}>
                                    <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${category.color}`}></div>
                                </div>

                                <h4 className="text-2xl font-bold text-slate-900 mb-3">{category.title}</h4>
                                <p className="text-slate-500 mb-8 leading-relaxed h-12">{category.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium text-slate-600 group-hover:border-indigo-100 group-hover:bg-white group-hover:text-indigo-600 transition-all duration-300 shadow-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI03Skills;
