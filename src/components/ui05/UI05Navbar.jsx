import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Menu, X } from 'lucide-react';

const UI05Navbar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('overview');

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));

            // Active section detection
            const sections = ['overview', 'highlights', 'story', 'specs', 'reviews', 'buy'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top < 300) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { id: 'overview', label: 'Overview' },
        { id: 'highlights', label: 'Highlights' },
        { id: 'story', label: 'Our Story' },
        { id: 'specs', label: 'Tech Specs' },
        { id: 'reviews', label: 'Reviews' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm">
                {/* Scroll Progress Bar */}
                <div
                    className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-100 ease-out"
                    style={{ width: `${scrollProgress * 100}%` }}
                />

                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <Link to="/" className="text-slate-500 hover:text-slate-900 transition-colors">
                            <ArrowLeft size={20} />
                        </Link>
                        <span
                            className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 cursor-pointer"
                            onClick={() => scrollToSection('overview')}
                        >
                            AURA <span className="font-light">Pods</span>
                        </span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`text-sm font-medium transition-all duration-300 hover:text-indigo-600 ${activeSection === link.id ? 'text-indigo-600 scale-105' : 'text-slate-600'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => scrollToSection('buy')}
                            className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/20"
                        >
                            Buy Now <ShoppingBag size={16} />
                        </button>

                        <button
                            className="md:hidden p-2 text-slate-800"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden flex flex-col items-center justify-center gap-8`}>
                {navLinks.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className="text-2xl font-medium text-slate-800 hover:text-indigo-600 transition-colors"
                    >
                        {link.label}
                    </button>
                ))}
                <button
                    onClick={() => scrollToSection('buy')}
                    className="mt-4 px-8 py-3 bg-slate-900 text-white rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-transform"
                >
                    Pre-Order Now
                </button>
            </div>
        </>
    );
};

export default UI05Navbar;
