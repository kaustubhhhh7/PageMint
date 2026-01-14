import React from 'react';
import { Link } from 'react-router-dom';

const UICard = ({ title, name, description, to }) => {
    return (
        <div className="group relative bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {title}
                    </h3>
                    <span className="px-2 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full">
                        New
                    </span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{name}</h4>
                <p className="text-gray-600 mb-6 line-clamp-2">
                    {description}
                </p>
                <Link
                    to={to}
                    className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                    Open UI
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
    );
};

export default UICard;
