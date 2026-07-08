import React, { useEffect } from 'react';

const UI03Experience = () => {
    const timelineData = [
        {
            year: 'Now',
            title: 'UI & System Designer',
            company: 'Freelance / Open Source',
            desc: 'Focusing on building scalable design systems and polished user interfaces. contributing to open source projects.',
            active: true,
            color: 'bg-indigo-500'
        },
        {
            year: '2023',
            title: 'Frontend Developer',
            company: 'Tech Solutions Inc.',
            desc: 'Participated in multiple hackathons, building rapid prototypes and learning to work under pressure.',
            active: false,
            color: 'bg-blue-500'
        },
        {
            year: '2022',
            title: 'Junior Developer',
            company: 'Startup Hub',
            desc: 'Started building full-stack applications using the MERN stack. Created my first significant personal projects.',
            active: false,
            color: 'bg-emerald-500'
        },
        {
            year: '2021',
            title: 'The Beginning',
            company: 'Self-Taught',
            desc: 'Wrote my first line of HTML. Fell in love with the ability to create things from nothing.',
            active: false,
            color: 'bg-amber-500'
        },
    ];

    return (
        <section id="experience" className="py-24 bg-white relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-slate-50 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3 pl-1">Journey</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">My Path So Far</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className={`group md:even:translate-y-16 transition-all duration-500`}
                        >
                            <div className="relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`px-4 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-wider ${item.color} shadow-lg shadow-indigo-100`}>
                                        {item.year}
                                    </div>
                                    {item.active && (
                                        <span className="flex h-3 w-3 relative">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                        </span>
                                    )}
                                </div>

                                <h4 className="text-2xl font-bold text-slate-900 mb-1">{item.title}</h4>
                                <h5 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">{item.company}</h5>
                                <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>

                                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                                    <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI03Experience;
