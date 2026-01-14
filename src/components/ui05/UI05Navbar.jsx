import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackToHub from '../common/BackToHub'; // Importing to use the icon style if needed, but per requirements we need a specific link in navbar too.

const UI05Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('overview');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Scroll Progress & Scrolled State
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScrollProgress(Number(scroll));
            setScrolled(totalScroll > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Active Section Observer
    useEffect(() => {
        const sections = ['overview', 'highlights', 'story', 'specs', 'reviews', 'buy'];

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id) => {
        setIsMobileMenuOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { id: 'overview', label: 'Overview' },
        { id: 'highlights', label: 'Highlights' },
        { id: 'story', label: 'Story' },
        { id: 'specs', label: 'Specs' },
        { id: 'reviews', label: 'Reviews' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm' : 'bg-transparent'}`}>
                {/* Scroll Progress Bar */}
                <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-100 placeholder-scroll-bar" style={{ width: `${scrollProgress * 100}%` }}></div>

                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Brand */}
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('overview')}>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                            A
                        </div>
                        <span className="font-bold text-xl tracking-tight text-slate-900">AURA <span className="font-light text-slate-500">Pods</span></span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                className={`text-sm font-medium transition-colors relative ${activeSection === link.id ? 'text-black' : 'text-slate-500 hover:text-black'}`}
                            >
                                {link.label}
                                {activeSection === link.id && (
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600"></span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/" className="text-xs font-semibold text-slate-400 hover:text-slate-800 transition-colors uppercase tracking-wider flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            Hub
                        </Link>
                        <button
                            onClick={() => scrollTo('buy')}
                            className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-blue-500/20"
                        >
                            Buy Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-800"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Dropdown */}
                <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 flex flex-col gap-4">
                        {navLinks.map(link => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                className={`text-left text-lg font-medium ${activeSection === link.id ? 'text-blue-600' : 'text-slate-600'}`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <Link to="/" className="text-sm font-semibold text-slate-400 pt-4 border-t border-slate-100">
                            Back to Hub
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default UI05Navbar;
