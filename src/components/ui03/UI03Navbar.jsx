import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UI03Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Simple active section detection
            const sections = navLinks.map(link => link.href.substring(1));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
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
            className={`fixed z-50 transition-all duration-300 
            ${scrolled
                    ? 'top-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[90%] md:max-w-5xl bg-white/90 backdrop-blur-md shadow-lg py-3 rounded-2xl md:rounded-full border border-slate-200/50'
                    : 'top-6 left-6 right-6 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[95%] md:max-w-6xl bg-white/80 backdrop-blur-md py-4 rounded-2xl md:rounded-full border border-white/20 shadow-lg'
                }`}
        >
            <div className="px-4 md:px-8">
                <div className="flex justify-between items-center">
                    {/* Brand */}
                    <a href="#" onClick={(e) => scrollToSection(e, '#ui03-hero')} className="text-2xl font-bold tracking-tighter text-slate-900 group">
                        Kaustubh<span className="text-indigo-600 transition-transform duration-300 group-hover:scale-150 inline-block">.</span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-1">
                        <div className="flex bg-slate-100/50 p-1 rounded-full border border-slate-200/50 backdrop-blur-sm">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 relative group 
                                    ${activeSection === link.href.substring(1)
                                            ? 'bg-indigo-600 text-white shadow-md'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4 pl-4">
                            {/* Additional buttons can go here */}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-900 focus:outline-none p-2"
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 rounded-full ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`w-full h-0.5 bg-current transition-all duration-300 rounded-full ${isOpen ? 'opacity-0' : ''}`} />
                                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 rounded-full ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 py-6 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className={`text-lg font-medium transition-colors ${activeSection === link.href.substring(1) ? 'text-indigo-600' : 'text-slate-700 hover:text-indigo-600'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-4 flex flex-col space-y-3 border-t border-slate-100">
                        <button className="text-sm font-semibold uppercase text-slate-500 text-left hover:text-indigo-600 transition-colors">
                            Download Resume
                        </button>
                        <Link to="/" className="text-sm font-semibold uppercase text-indigo-600 text-left hover:text-indigo-700 transition-colors">
                            Back to Hub
                        </Link>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default UI03Navbar;
