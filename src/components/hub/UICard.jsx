import React from 'react';
import { Link } from 'react-router-dom';

const UICard = ({ title, name, description, tags, to, number, colorTheme = 'teal' }) => {
    const themes = {
        teal: { bg: 'bg-teal-200', border: 'border-teal-400', hoverBorder: 'hover:border-teal-500', text: 'text-teal-800', hoverText: 'group-hover:text-teal-900', bar: 'bg-teal-600', num: 'text-teal-400/60', tagBg: 'bg-teal-300/50', tagText: 'text-teal-900', heading: 'text-teal-950', desc: 'text-teal-900/80' },
        blue: { bg: 'bg-blue-200', border: 'border-blue-400', hoverBorder: 'hover:border-blue-500', text: 'text-blue-800', hoverText: 'group-hover:text-blue-900', bar: 'bg-blue-600', num: 'text-blue-400/60', tagBg: 'bg-blue-300/50', tagText: 'text-blue-900', heading: 'text-blue-950', desc: 'text-blue-900/80' },
        orange: { bg: 'bg-orange-200', border: 'border-orange-400', hoverBorder: 'hover:border-orange-500', text: 'text-orange-800', hoverText: 'group-hover:text-orange-900', bar: 'bg-orange-600', num: 'text-orange-400/60', tagBg: 'bg-orange-300/50', tagText: 'text-orange-900', heading: 'text-orange-950', desc: 'text-orange-900/80' },
        indigo: { bg: 'bg-indigo-200', border: 'border-indigo-400', hoverBorder: 'hover:border-indigo-500', text: 'text-indigo-800', hoverText: 'group-hover:text-indigo-900', bar: 'bg-indigo-600', num: 'text-indigo-400/60', tagBg: 'bg-indigo-300/50', tagText: 'text-indigo-900', heading: 'text-indigo-950', desc: 'text-indigo-900/80' },
        rose: { bg: 'bg-rose-200', border: 'border-rose-400', hoverBorder: 'hover:border-rose-500', text: 'text-rose-800', hoverText: 'group-hover:text-rose-900', bar: 'bg-rose-600', num: 'text-rose-400/60', tagBg: 'bg-rose-300/50', tagText: 'text-rose-900', heading: 'text-rose-950', desc: 'text-rose-900/80' },
        emerald: { bg: 'bg-emerald-200', border: 'border-emerald-400', hoverBorder: 'hover:border-emerald-500', text: 'text-emerald-800', hoverText: 'group-hover:text-emerald-900', bar: 'bg-emerald-600', num: 'text-emerald-400/60', tagBg: 'bg-emerald-300/50', tagText: 'text-emerald-900', heading: 'text-emerald-950', desc: 'text-emerald-900/80' },
        purple: { bg: 'bg-purple-200', border: 'border-purple-400', hoverBorder: 'hover:border-purple-500', text: 'text-purple-800', hoverText: 'group-hover:text-purple-900', bar: 'bg-purple-600', num: 'text-purple-400/60', tagBg: 'bg-purple-300/50', tagText: 'text-purple-900', heading: 'text-purple-950', desc: 'text-purple-900/80' },
        cyan: { bg: 'bg-cyan-200', border: 'border-cyan-400', hoverBorder: 'hover:border-cyan-500', text: 'text-cyan-800', hoverText: 'group-hover:text-cyan-900', bar: 'bg-cyan-600', num: 'text-cyan-400/60', tagBg: 'bg-cyan-300/50', tagText: 'text-cyan-900', heading: 'text-cyan-950', desc: 'text-cyan-900/80' },
        amber: { bg: 'bg-amber-200', border: 'border-amber-400', hoverBorder: 'hover:border-amber-500', text: 'text-amber-800', hoverText: 'group-hover:text-amber-900', bar: 'bg-amber-600', num: 'text-amber-400/60', tagBg: 'bg-amber-300/50', tagText: 'text-amber-900', heading: 'text-amber-950', desc: 'text-amber-900/80' },
        sky: { bg: 'bg-sky-200', border: 'border-sky-400', hoverBorder: 'hover:border-sky-500', text: 'text-sky-800', hoverText: 'group-hover:text-sky-900', bar: 'bg-sky-600', num: 'text-sky-400/60', tagBg: 'bg-sky-300/50', tagText: 'text-sky-900', heading: 'text-sky-950', desc: 'text-sky-900/80' },
        fuchsia: { bg: 'bg-fuchsia-200', border: 'border-fuchsia-400', hoverBorder: 'hover:border-fuchsia-500', text: 'text-fuchsia-800', hoverText: 'group-hover:text-fuchsia-900', bar: 'bg-fuchsia-600', num: 'text-fuchsia-400/60', tagBg: 'bg-fuchsia-300/50', tagText: 'text-fuchsia-900', heading: 'text-fuchsia-950', desc: 'text-fuchsia-900/80' },
    };

    const theme = themes[colorTheme] || themes.teal;

    return (
        <div className={`group relative ${theme.bg} rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col h-full`}>
            
            {/* BIG AESTHETIC NUMBER */}
            <div className={`absolute -right-4 -top-8 text-9xl font-black ${theme.num} opacity-50 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-700 pointer-events-none select-none z-0`}>
                {number}
            </div>

            <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex flex-col">
                        <span className={`text-xs font-bold ${theme.text} uppercase tracking-wider mb-1`}>
                            {title}
                        </span>
                        <h4 className={`text-2xl font-bold ${theme.heading} ${theme.hoverText} transition-colors`}>
                            {name}
                        </h4>
                    </div>
                </div>

                <p className={`text-sm leading-relaxed mb-8 line-clamp-2 flex-grow font-medium ${theme.desc}`}>
                    {description}
                </p>

                <div className="space-y-6 mt-auto">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {(tags || ['Responsive', 'Clean UI']).map((tag, idx) => (
                            <span key={idx} className={`px-2 py-1 bg-white/60 ${theme.tagText} text-[10px] font-bold uppercase tracking-wider rounded border ${theme.border} shadow-sm backdrop-blur-sm`}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <Link
                        to={to}
                        className={`inline-flex items-center text-sm font-bold ${theme.text} hover:opacity-80 transition-opacity group/link`}
                    >
                        Open UI
                        <svg className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
            {/* Hover Bottom Bar */}
            <div className={`absolute inset-x-0 bottom-0 h-1.5 ${theme.bar} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10`}></div>
        </div>
    );
};

export default UICard;
