import React from 'react';
import { Link } from 'react-router-dom';

const BackToHub = () => {
    return (
        <Link
            to="/"
            className="fixed bottom-8 right-8 z-[100] group"
            aria-label="Back to Hub"
        >
            <div className="absolute inset-0 bg-indigo-600 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse"></div>
            <div className="relative flex items-center gap-2 bg-white border border-indigo-100 pl-4 pr-5 py-3 rounded-full shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:shadow-indigo-300/50 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <svg className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </div>
                <span className="font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">
                    Back to Hub
                </span>
            </div>
        </Link>
    );
};

export default BackToHub;
