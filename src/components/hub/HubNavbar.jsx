import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../common/Container';

const HubNavbar = ({ isHidden }) => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(!location.pathname.startsWith('/ui/'));

    // Automatically hide/show navbar when navigating between Hub and UI templates
    useEffect(() => {
        setIsVisible(!location.pathname.startsWith('/ui/'));
    }, [location.pathname]);

    const navLinks = Array.from({ length: 10 }, (_, i) => ({
        name: `UI-${String(i + 1).padStart(2, '0')}`,
        path: `/ui/${String(i + 1).padStart(2, '0')}`
    }));

    const isActive = (path) => location.pathname === path;

    const navHidden = isHidden || !isVisible;

    useEffect(() => {
        document.documentElement.style.setProperty('--hub-nav-height', navHidden ? '0px' : '80px');
        if (navHidden) {
            setIsOpen(false);
        }
    }, [navHidden]);

    return (
        <nav id="hub-navbar" className={`fixed top-0 left-0 w-full z-[90] bg-white/70 backdrop-blur-md border-b border-slate-200 shadow-sm transition-transform duration-500 ${navHidden ? '-translate-y-full' : 'translate-y-0'}`}>
            <Container>
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-3">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
                            <span className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-teal-700 transition-colors">
                                PageMint
                            </span>
                            <span className="text-xs font-medium text-slate-400 border-l border-slate-300 pl-2 tracking-wide uppercase">
                                by KAUSTUBH
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:ml-8 md:flex md:items-center md:space-x-2 overflow-x-auto no-scrollbar py-2">
                        <Link
                            to="/"
                            className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${isActive('/')
                                ? 'bg-slate-700 border-slate-600 text-white shadow-sm'
                                : 'bg-transparent border-transparent text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-sm hover:border-slate-200 hover:-translate-y-0.5'
                                }`}
                        >
                            Home
                        </Link>
                        <div className="w-px h-4 bg-slate-300 mx-2"></div>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 border whitespace-nowrap ${isActive(link.path)
                                    ? 'bg-slate-700 border-slate-600 text-white shadow-sm'
                                    : 'bg-transparent border-transparent text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-sm hover:border-slate-200 hover:-translate-y-0.5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="w-px h-4 bg-slate-300 mx-2 flex-shrink-0"></div>
                        <Link
                            to="/contact"
                            className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 bg-gradient-to-r from-teal-400 to-emerald-400 text-white shadow-md shadow-teal-200/50 hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 focus:outline-none transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 w-full shadow-lg">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        <div className="grid grid-cols-2 gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-sm font-semibold text-center transition-colors border ${isActive(link.path)
                                        ? 'bg-slate-700 border-slate-600 text-white'
                                        : 'bg-slate-50 border-transparent text-slate-600 hover:bg-white hover:border-slate-200 hover:shadow-sm'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="w-full mt-4 block px-4 py-3 rounded-lg text-sm font-bold text-center transition-colors bg-gradient-to-r from-teal-400 to-emerald-400 text-white shadow-md"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
            
            {/* Toggle Visibility Button */}
            {!isHidden && (
                <button
                    onClick={() => setIsVisible(!isVisible)}
                    className="absolute top-full left-1/2 -translate-x-1/2 bg-white border border-t-0 border-slate-200 px-6 py-1 rounded-b-xl shadow-md hover:bg-slate-50 text-slate-500 hover:text-teal-600 transition-colors focus:outline-none flex items-center justify-center cursor-pointer"
                    title={isVisible ? "Hide Navbar" : "Show Navbar"}
                >
                    {isVisible ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    )}
                </button>
            )}
        </nav>
    );
};

export default HubNavbar;
