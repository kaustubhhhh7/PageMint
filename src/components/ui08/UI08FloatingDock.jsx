import React, { useState, useEffect } from 'react';
import { DollarSign, MessageCircle, Zap, BookOpen } from 'lucide-react';

const UI08FloatingDock = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}`}>
            <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-2 border border-slate-700 shadow-2xl flex items-center gap-2">

                <button
                    onClick={() => scrollTo('curriculum')}
                    className="group flex flex-col items-center gap-1 p-3 rounded-xl hover:bg-slate-700 text-slate-400 hover:text-white transition-all w-16 md:w-20"
                >
                    <BookOpen size={20} className="group-hover:-translate-y-1 transition-transform" />
                    <span className="text-[10px] font-bold">Learn</span>
                </button>

                <div className="w-px h-8 bg-slate-700 hidden md:block" />

                <button
                    onClick={() => scrollTo('faq')}
                    className="group flex flex-col items-center gap-1 p-3 rounded-xl hover:bg-slate-700 text-slate-400 hover:text-white transition-all w-16 md:w-20"
                >
                    <MessageCircle size={20} className="group-hover:-translate-y-1 transition-transform" />
                    <span className="text-[10px] font-bold">Ask</span>
                </button>

                <button
                    onClick={() => scrollTo('pricing')}
                    className="ml-2 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-indigo-500/30 flex items-center gap-2 group transition-all hover:scale-105 active:scale-95"
                >
                    <Zap size={16} fill="currentColor" />
                    <span className="hidden md:inline">Enroll Now</span>
                </button>

            </div>
        </div>
    );
};

export default UI08FloatingDock;
