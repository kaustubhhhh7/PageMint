import React, { useState, useEffect } from 'react';

const UI08ScrollProgressPills = () => {
    const [activeSection, setActiveSection] = useState('overview');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
        );

        const sections = ['overview', 'curriculum', 'mentors', 'projects', 'faq'];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'curriculum', label: 'Curriculum' },
        { id: 'mentors', label: 'Mentors' },
        { id: 'projects', label: 'Projects' },
    ];

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex items-center gap-1 md:gap-2">
            {sections.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                    <button
                        key={sec.id}
                        onClick={() => scrollTo(sec.id)}
                        className={`
                            relative px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300
                            ${isActive
                                ? 'bg-slate-100 text-indigo-600 pl-4 pr-3'
                                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                            }
                        `}
                    >
                        {isActive && (
                            <span className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
                        )}
                        {sec.label}
                    </button>
                );
            })}
        </div>
    );
};

export default UI08ScrollProgressPills;
