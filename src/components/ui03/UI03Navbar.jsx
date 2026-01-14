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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Brand */}
                    <a href="#" onClick={(e) => scrollToSection(e, '#ui03-hero')} className="text-2xl font-bold tracking-tighter text-slate-900 group">
                        Kaustubh<span className="text-indigo-600 transition-transform duration-300 group-hover:scale-150 inline-block">.</span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className={`text-sm font-medium transition-all duration-200 relative group ${activeSection === link.href.substring(1) ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'}`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4 pl-6 border-l border-slate-200">
                            <button className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-indigo-600 transition-colors">
                                Resume
                            </button>
                            <Link to="/" className="text-xs font-semibold uppercase tracking-wider text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full transition-colors">
                                Back to Hub
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-900 focus:outline-none"
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 py-6 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-lg font-medium text-slate-700 hover:text-indigo-600 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-4 flex flex-col space-y-3 border-t border-slate-100">
                        <button className="text-sm font-semibold uppercase text-slate-500 text-left">
                            Download Resume
                        </button>
                        <Link to="/" className="text-sm font-semibold uppercase text-indigo-600 text-left">
                            Back to Hub
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default UI03Navbar;
