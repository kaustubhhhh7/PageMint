import React, { useEffect, useRef } from 'react';

const UI03Experience = () => {
    const timelineRef = useRef(null);

    const timelineData = [
        {
            year: '2024 - Present',
            title: 'UI & System Design',
            desc: 'Focusing on building scalable design systems and polished user interfaces. contributing to open source projects.',
            active: true,
        },
        {
            year: '2023',
            title: 'Hackathons & Competitions',
            desc: 'Participated in multiple hackathons, building rapid prototypes and learning to work under pressure.',
            active: false,
        },
        {
            year: '2022',
            title: 'Building Projects',
            desc: 'Started building full-stack applications using the MERN stack. Created my first significant personal projects.',
            active: false,
        },
        {
            year: '2021',
            title: 'Started Web Dev',
            desc: 'Wrote my first line of HTML. Fell in love with the ability to create things from nothing.',
            active: false,
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-x-0');
                        entry.target.classList.remove('opacity-0', '-translate-x-10');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const items = document.querySelectorAll('.timeline-item');
        items.forEach((item) => observer.observe(item));

        return () => items.forEach((item) => observer.unobserve(item));
    }, []);

    return (
        <section id="experience" className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">Journey</h2>
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">My Path So Far</h3>
                </div>

                <div className="relative max-w-3xl mx-auto" ref={timelineRef}>
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 md:left-1/2 md:-ml-0.5"></div>

                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className={`timeline-item flex flex-col md:flex-row gap-8 mb-12 relative opacity-0 -translate-x-10 transition-all duration-700 ease-out`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            {/* Dot */}
                            <div className={`absolute left-8 -ml-3 md:left-1/2 md:-ml-3 w-6 h-6 rounded-full border-4 border-white ${item.active ? 'bg-indigo-600 shadow-[0_0_0_4px_rgba(79,70,229,0.2)]' : 'bg-slate-300'}`}></div>

                            {/* Content - Alternating sides on desktop */}
                            <div className={`pl-20 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:translate-x-full md:pl-12'}`}>
                                <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md ${item.active ? 'border-indigo-100 ring-1 ring-indigo-50' : ''}`}>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${item.active ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-500'}`}>
                                        {item.year}
                                    </span>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
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
