import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UI04Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const navLinks = [
        { name: 'Programs', href: '#programs' },
        { name: 'Trainers', href: '#trainers' },
        { name: 'Plans', href: '#plans' },
        { name: 'Results', href: '#results' },
        { name: 'FAQ', href: '#faq' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Active section detection
            const sections = navLinks.map(link => link.href.substring(1));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 400) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                    ? 'bg-white/90 backdrop-blur-md border-slate-200 py-3 shadow-sm'
                    : 'bg-white/50 backdrop-blur-sm border-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Brand */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-black skew-x-[-10deg] flex items-center justify-center rounded-sm">
                            <span className="text-white font-bold text-lg skew-x-[10deg]">I</span>
                        </div>
                        <span className="text-2xl font-black italic tracking-tighter text-slate-900 uppercase">
                            Iron<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Pulse</span>
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 relative py-1
                                ${activeSection === link.href.substring(1)
                                        ? 'text-orange-600'
                                        : 'text-slate-600 hover:text-slate-900'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform transition-transform duration-300 origin-left ${activeSection === link.href.substring(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                            </a>
                        ))}
                    </div>

                    {/* Right CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/" className="text-xs font-bold uppercase text-slate-400 hover:text-slate-600 transition-colors">
                            Back to Hub
                        </Link>
                        <button className="px-6 py-2.5 bg-black text-white text-sm font-bold uppercase tracking-wider skew-x-[-10deg] hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                            <span className="inline-block skew-x-[10deg]">Join Now</span>
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-slate-900 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-black transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 bg-black transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 py-6 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-lg font-bold uppercase text-slate-800 hover:text-orange-600 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
                        <button className="w-full py-3 bg-black text-white font-bold uppercase tracking-wider skew-x-[-10deg]">
                            <span className="inline-block skew-x-[10deg]">Join Now</span>
                        </button>
                        <Link to="/" className="text-center text-xs font-bold uppercase text-slate-400">
                            Back to Hub
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default UI04Navbar;
