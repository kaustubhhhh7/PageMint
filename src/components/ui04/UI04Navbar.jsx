import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UI04Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('ui04-hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Intersection Observer logic for scroll spy
            const sections = ['ui04-hero', 'programs', 'trainers', 'plans', 'results', 'faq'];
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Programs', href: '#programs' },
        { name: 'Trainers', href: '#trainers' },
        { name: 'Plans', href: '#plans' },
        { name: 'Results', href: '#results' },
        { name: 'FAQ', href: '#faq' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                    ? 'bg-black/80 backdrop-blur-md border-white/10 py-3 shadow-lg shadow-orange-500/5'
                    : 'bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px] border-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Brand */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-white skew-x-[-10deg] flex items-center justify-center rounded-sm group-hover:bg-orange-500 transition-colors duration-300">
                            <span className="text-black font-bold text-lg skew-x-[10deg]">I</span>
                        </div>
                        <span className="text-2xl font-black italic tracking-tighter text-white uppercase">
                            Iron<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Pulse</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 relative py-1 group
                                ${activeSection === link.href.substring(1)
                                        ? 'text-orange-500'
                                        : 'text-slate-300 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform transition-transform duration-300 origin-left ${activeSection === link.href.substring(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                            </a>
                        ))}
                    </div>

                    {/* Right CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/" className="text-xs font-bold uppercase text-slate-500 hover:text-white transition-colors">
                            Back to Hub
                        </Link>
                        <button className="px-6 py-2.5 bg-white text-black text-sm font-bold uppercase tracking-wider skew-x-[-10deg] hover:bg-orange-500 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all duration-300 group">
                            <span className="inline-block skew-x-[10deg]">Join Now</span>
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 py-6 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-lg font-bold uppercase text-slate-300 hover:text-orange-500 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                        <button className="w-full py-3 bg-white text-black font-bold uppercase tracking-wider skew-x-[-10deg] hover:bg-orange-500 hover:text-white transition-colors">
                            <span className="inline-block skew-x-[10deg]">Join Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default UI04Navbar;
