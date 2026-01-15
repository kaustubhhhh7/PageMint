import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const UI10Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { name: 'Home', path: '/ui/10' },
        { name: 'Properties', path: '/ui/10/properties' },
        { name: 'Agents', path: '/ui/10/agents' },
        { name: 'About', path: '/ui/10/about' },
        { name: 'Contact', path: '/ui/10/contact' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out font-serif tracking-wide
        ${isScrolled
                        ? 'bg-stone-50/95 backdrop-blur-md border-b border-stone-200 py-4 shadow-sm'
                        : 'bg-transparent py-6'}`}
            >
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/ui/10" className="relative group">
                        <h1 className={`text-2xl lg:text-3xl font-bold tracking-widest uppercase transition-colors duration-300
              ${isScrolled ? 'text-stone-900' : 'text-stone-900'}`}>
                            Aurelian
                            <span className="text-amber-600">.</span>
                        </h1>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300
                ${isActive(link.path) ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'}
                group`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-amber-600 transform origin-left transition-transform duration-300
                  ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <Link to="/" className="text-xs uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors">
                            Back to Hub
                        </Link>
                        <Link
                            to="/ui/10/contact"
                            className="bg-stone-900 text-white text-xs uppercase tracking-[0.2em] px-8 py-3 
              border border-stone-900 hover:bg-transparent hover:text-stone-900 transition-all duration-300 transform active:scale-95"
                        >
                            Book Viewing
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-stone-900"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={28} strokeWidth={1} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            <div className={`fixed inset-0 z-[60] bg-stone-50 transform transition-transform duration-500 ease-out
        ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                <div className="h-full flex flex-col p-8 relative">
                    <button
                        className="absolute top-6 right-6 text-stone-900"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <X size={32} strokeWidth={1} />
                    </button>

                    <div className="flex flex-col justify-center items-center flex-grow space-y-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-3xl font-serif text-stone-900 hover:text-amber-700 transition-colors
                  ${isActive(link.path) ? 'italic text-amber-700' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="text-center space-y-4 mb-8">
                        <Link
                            to="/ui/10/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block w-full bg-stone-900 text-white text-sm uppercase tracking-widest py-4
              border border-stone-900 hover:bg-white hover:text-stone-900 transition-colors"
                        >
                            Book a Viewing
                        </Link>
                        <Link to="/" className="block text-xs uppercase tracking-widest text-stone-400">
                            Back to Hub
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UI10Navbar;
