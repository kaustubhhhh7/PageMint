import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import Button from '../common/Button';

const UI01Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'}`}>
            <Container>
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-4">
                        <Link to="/ui/01" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                            MintFlow
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <Link to="/" className="text-xs font-semibold text-slate-400 hover:text-indigo-600">
                            Exit
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="mt-4 pt-4 border-t border-slate-100 px-3">
                            <Button variant="primary" className="w-full justify-center">
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default UI01Navbar;
