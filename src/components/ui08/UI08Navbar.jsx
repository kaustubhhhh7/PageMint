import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Menu, X, ArrowRight } from 'lucide-react';
import UI08ScrollProgressPills from './UI08ScrollProgressPills';

const UI08Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        setIsMobileOpen(false);
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -120; // Account for banner + navbar + pills
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <nav className={`sticky top-0 w-full z-50 transition-all duration-300 border-b border-indigo-100 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white py-4'}`}>
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Row: Logo & Actions */}
                <div className="flex items-center justify-between mb-3">
                    {/* Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:rotate-6 transition-transform">
                            <BookOpen size={20} fill="currentColor" className="text-white" />
                        </div>
                        <div>
                            <span className="block text-lg font-black text-slate-900 leading-none tracking-tight">SkillSprint</span>
                            <span className="block text-xs font-bold text-rose-500 uppercase tracking-widest">Academy</span>
                        </div>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link to="/" className="text-sm font-bold text-slate-400 hover:text-indigo-600 transition-colors">
                            Back to Hub
                        </Link>
                        <button
                            onClick={() => scrollTo('pricing')}
                            className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-bold shadow-xl active:scale-95 transition-all flex items-center gap-2 group"
                        >
                            Start Learning <ArrowRight size={16} className="text-rose-400 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="lg:hidden text-slate-600" onClick={() => setIsMobileOpen(true)}>
                        <Menu size={28} />
                    </button>
                </div>

                {/* Bottom Row: Pills (Desktop Only) */}
                <div className="hidden lg:block pb-1">
                    <UI08ScrollProgressPills />
                </div>
            </div>

            {/* Mobile Drawer */}
            <div className={`fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileOpen(false)}>
                <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
                    <div className="p-6 flex justify-between items-center border-b border-indigo-50">
                        <span className="font-black text-xl text-indigo-900">Menu</span>
                        <button onClick={() => setIsMobileOpen(false)} className="p-2 bg-indigo-50 rounded-full hover:bg-indigo-100 text-indigo-500">
                            <X size={20} />
                        </button>
                    </div>
                    <div className="p-6 space-y-2">
                        {['overview', 'curriculum', 'mentors', 'projects'].map((id) => (
                            <button
                                key={id}
                                onClick={() => scrollTo(id)}
                                className="w-full text-left px-4 py-3 rounded-lg font-bold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors capitalize"
                            >
                                {id}
                            </button>
                        ))}
                        <div className="h-px bg-slate-100 my-4" />
                        <button
                            onClick={() => scrollTo('pricing')}
                            className="w-full bg-rose-500 text-white py-3 rounded-xl font-bold shadow-lg shadow-rose-500/20"
                        >
                            Enroll Now
                        </button>
                    </div>
                    <div className="absolute bottom-6 left-0 w-full text-center">
                        <Link to="/" className="text-sm font-bold text-slate-400 hover:text-indigo-600">Back to Hub</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default UI08Navbar;
