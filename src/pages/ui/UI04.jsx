import React from 'react';
import { Link } from 'react-router-dom';

const UI04 = () => {
    const sections = ['Programs', 'Trainers', 'Plans', 'Transformations'];
    const accentText = 'text-red-600';
    const hoverText = 'hover:text-red-600';

    return (
        <div className="min-h-screen bg-neutral-900 text-white font-sans">
            <nav className="bg-neutral-800 shadow-sm sticky top-0 z-40 border-b border-neutral-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center">
                            <span className={`text-xl font-black italic ${accentText} uppercase`}>FitPulse</span>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            {sections.map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className={`text-gray-300 ${hoverText} font-bold uppercase tracking-wider`}>
                                    {item}
                                </a>
                            ))}
                        </div>
                        <div>
                            <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white border border-neutral-600 px-4 py-2 rounded-md hover:bg-neutral-700 transition-colors">
                                Back to Hub
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="bg-neutral-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-5xl font-black text-white sm:text-6xl sm:tracking-tight lg:text-7xl uppercase italic">
                        Crush Your Goals
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-400 font-medium">
                        UI-04 / Fitness Landing Page Placeholder
                    </p>
                </div>
                {/* Placeholder decorative element */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-b from-neutral-800/50 to-neutral-900 pointer-events-none"></div>
            </header>

            {sections.map((section) => (
                <section key={section} id={section.toLowerCase()} className="py-20 border-t border-neutral-800 first:border-t-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-extrabold text-white uppercase italic">{section}</h2>
                        <p className="mt-4 text-lg text-gray-400">Content for {section} goes here.</p>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default UI04;
