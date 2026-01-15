import React from 'react';

const UI03Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">

                <div className="mb-4 md:mb-0">
                    <span className="text-2xl font-bold text-white tracking-tighter">
                        Kaustubh<span className="text-indigo-500">.</span>
                    </span>
                    <p className="text-sm mt-1 text-slate-500">
                        © 2026 CORE3. Designed by Kaustubh Ghadshi
                    </p>
                </div>

                <div className="flex space-x-8">
                    {['Home', 'Projects', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase() === 'home' ? 'ui03-hero' : item.toLowerCase()}`}
                            className="text-sm font-medium hover:text-white transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </footer >
    );
};

export default UI03Footer;
