import React, { useState, useEffect } from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const UI02Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Menu', href: '#menu' },
        { name: 'Specials', href: '#specials' },
        { name: 'Story', href: '#chef' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Reserve', href: '#reserve' },
    ];

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-stone-50/90 backdrop-blur-md shadow-md border-b border-stone-200' : 'bg-transparent'}`}>
            <Container>
                <div className="flex justify-between items-center h-20">
                    {/* Brand */}
                    <div className="flex items-center">
                        <span className="text-2xl font-serif font-bold text-stone-800 tracking-wide">
                            Cafe Noura
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-stone-600 hover:text-orange-600 transition-colors uppercase tracking-wider"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/" className="text-sm font-medium text-stone-500 hover:text-orange-600 transition-colors">
                            Back to Hub
                        </Link>
                        <a href="#reserve">
                            <button className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200">
                                Book a Table
                            </button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-stone-600 hover:text-stone-900 focus:outline-none"
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
                <div className="md:hidden bg-stone-50 border-b border-stone-200">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-orange-600 hover:bg-stone-100 rounded-md"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Link
                            to="/"
                            className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-orange-600 hover:bg-stone-100 rounded-md"
                        >
                            Back to Hub
                        </Link>
                        <div className="pt-4">
                            <a href="#reserve" onClick={() => setIsOpen(false)}>
                                <button className="w-full bg-orange-600 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-orange-700 transition-colors">
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
