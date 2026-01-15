import React from 'react';
import { Link } from 'react-router-dom';

const UICard = ({ title, name, description, tags, to }) => {
    return (
        <div className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-teal-100 transition-all duration-300 overflow-hidden flex flex-col h-full">
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1">
                            {title}
                        </span>
                        <h4 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                            {name}
                        </h4>
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-100 rounded-full uppercase tracking-wide">
                        New
                    </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                    {description}
                </p>

                <div className="space-y-6 mt-auto">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {(tags || ['Responsive', 'Clean UI']).map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-slate-50 text-slate-500 text-[10px] font-medium uppercase tracking-wider rounded border border-slate-100">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <Link
                        to={to}
                        className="inline-flex items-center text-sm font-bold text-teal-700 hover:text-teal-500 transition-colors group/link"
                    >
                        Open UI
                        <svg className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
            {/* Hover Bottom Bar */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
    );
};

export default UICard;
