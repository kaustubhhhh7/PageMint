import React, { useState, useEffect } from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const UI02Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Active section tracker
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const navLinks = [
        { name: 'Menu', href: '#menu' },
        { name: 'Specials', href: '#specials' },
        { name: 'Story', href: '#chef' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Reserve', href: '#reserve' },
    ];

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 ease-in-out border-b ${scrolled
                ? 'bg-stone-50/95 backdrop-blur-md shadow-md border-stone-200 py-2'
                : 'bg-transparent border-transparent py-5'
                }`}
        >
            <Container>
                <div className="flex justify-between items-center">
                    {/* Brand */}
                    <div className="flex items-center group cursor-pointer">
                        <span className="text-2xl font-serif font-bold text-stone-800 tracking-wide group-hover:text-orange-600 transition-colors duration-300">
                            Cafe Noura
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`relative text-sm font-medium transition-colors uppercase tracking-wider py-1 group ${isActive ? 'text-orange-600' : 'text-stone-600 hover:text-orange-600'
                                        }`}
                                >
                                    {link.name}
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 bg-orange-600 transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}
                                    ></span>
                                </a>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href="#reserve">
                            <button className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-700 transition-all duration-200 shadow-lg shadow-orange-200 hover:-translate-y-0.5 hover:shadow-orange-300 active:translate-y-0 active:scale-95 focus:ring-4 focus:ring-orange-200 outline-none">
                                Book a Table
                            </button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-stone-600 hover:text-stone-900 focus:outline-none p-2 rounded-md hover:bg-stone-100 transition-colors"
                        >
                            <span className="sr-only">Open menu</span>
                            {isOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-stone-50 border-b border-stone-200 absolute w-full left-0 animate-fade-in-down shadow-xl">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${activeSection === link.href.substring(1)
                                    ? 'text-orange-600 bg-orange-50'
                                    : 'text-stone-700 hover:text-orange-600 hover:bg-stone-100'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-4 px-3">
                            <a href="#reserve" onClick={() => setIsOpen(false)}>
                                <button className="w-full bg-orange-600 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-orange-700 transition-all shadow-lg active:scale-95">
                                    Book a Table
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default UI02Navbar;
