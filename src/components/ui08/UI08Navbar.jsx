import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Menu, X, ArrowRight } from 'lucide-react';

const UI08Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const scrollTo = (id) => {
        setIsMobileOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { id: 'overview', label: 'Overview' },
        { id: 'outline', label: 'Outline' },
        { id: 'preview', label: 'Preview' },
        { id: 'mentors', label: 'Mentors' },
        { id: 'projects', label: 'Projects' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'faq', label: 'FAQ' },
    ];

    return (
        <nav className="sticky top-0 w-full z-50 bg-white border-b border-zinc-200">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <BookOpen size={20} className="text-zinc-900" />
                    <span className="text-lg font-bold text-zinc-900 tracking-tight">MonoLearn</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:underline decoration-amber-400 decoration-2 underline-offset-4 transition-all"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <Link to="/" className="text-sm font-medium text-zinc-500 hover:text-zinc-900">
                        Back to Hub
                    </Link>
                    <button
                        onClick={() => scrollTo('pricing')}
                        className="bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2"
                    >
                        Start Learning <ArrowRight size={14} className="text-zinc-400" />
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-zinc-900"
                    onClick={() => setIsMobileOpen(true)}
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Drawer */}
            <div className={`fixed inset-0 z-[60] bg-zinc-900/50 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileOpen(false)}>
                <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
                    <div className="p-6 flex justify-between items-center border-b border-zinc-100">
                        <span className="font-bold text-lg text-zinc-900">Menu</span>
                        <button onClick={() => setIsMobileOpen(false)} className="text-zinc-500 hover:text-zinc-900">
                            <X size={24} />
                        </button>
                    </div>
                    <div className="p-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                className="text-left py-2 text-zinc-800 font-medium hover:text-zinc-900 border-b border-zinc-50"
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-col gap-4">
                            <Link to="/" className="text-sm text-zinc-500">Back to Hub</Link>
                            <button
                                onClick={() => scrollTo('pricing')}
                                className="w-full bg-zinc-900 text-white py-3 rounded-lg font-bold text-center"
                            >
                                Start Learning
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default UI08Navbar;
