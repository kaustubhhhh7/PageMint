import React from 'react';
import { Link } from 'react-router-dom';

const UI07 = () => {
    const sections = ['Security', 'Cards', 'Rewards', 'Support'];
    const accentText = 'text-emerald-600';
    const hoverText = 'hover:text-emerald-600';

    return (
        <div className="min-h-screen bg-white font-sans">
            <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center">
                            <span className={`text-xl font-bold ${accentText}`}>NeoBank</span>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            {sections.map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className={`text-gray-600 ${hoverText} font-medium`}>
                                    {item}
                                </a>
                            ))}
                        </div>
                        <div>
                            <Link to="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 border border-gray-200 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                                Back to Hub
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="bg-emerald-50">
                <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Banking Reimagined
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-emerald-800">
                        UI-07 / Fintech Landing Page Placeholder
                    </p>
                </div>
            </header>

            {sections.map((section) => (
                <section key={section} id={section.toLowerCase()} className="py-20 border-t border-gray-100 first:border-t-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">{section}</h2>
                        <p className="mt-4 text-lg text-gray-500">Content for {section} goes here.</p>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default UI07;
