import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin, Phone } from 'lucide-react';

const UI09Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();

    // Effect for sticky navbar transitions inside UI-09 scope
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
    }, [location]);

    const navLinkClasses = ({ isActive }) =>
        `text-sm font-semibold tracking-wide transition-colors ${isActive
            ? (isScrolled ? 'text-sky-600' : 'text-sky-400')
            : (isScrolled ? 'text-slate-600 hover:text-sky-500' : 'text-white/90 hover:text-white')
        }`;

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <Link to="/ui/09" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-200 group-hover:scale-105 transition-transform">
                        <MapPin size={20} fill="currentColor" />
                    </div>
                    <div>
                        <span className={`block text-xl font-bold leading-none transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>VoyageVista</span>
                        <span className={`block text-[10px] font-bold uppercase tracking-widest transition-colors ${isScrolled ? 'text-sky-500' : 'text-sky-200'}`}>Travel Co.</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    <NavLink to="/ui/09" end className={navLinkClasses}>Home</NavLink>
                    <NavLink to="/ui/09/about" className={navLinkClasses}>About</NavLink>

                    {/* Dropdown Wrapper */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button className={`flex items-center gap-1 text-sm font-semibold py-2 transition-colors ${isScrolled ? 'text-slate-600 hover:text-sky-500' : 'text-white/90 hover:text-white'}`}>
                            Tours <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        <div className={`absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden transition-all duration-200 origin-top ${isDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                            <div className="p-2 space-y-1">
                                <Link to="/ui/09/tours" className="block px-4 py-2 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-600 rounded-lg font-medium">All Tours</Link>
                                <Link to="/ui/09/tours?type=adventure" className="block px-4 py-2 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-600 rounded-lg font-medium">Adventure</Link>
                                <Link to="/ui/09/tours?type=honeymoon" className="block px-4 py-2 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-600 rounded-lg font-medium">Honeymoon</Link>
                                <Link to="/ui/09/tours?type=family" className="block px-4 py-2 text-sm text-slate-600 hover:bg-sky-50 hover:text-sky-600 rounded-lg font-medium">Family</Link>
                            </div>
                        </div>
                    </div>

                    <NavLink to="/ui/09/gallery" className={navLinkClasses}>Gallery</NavLink>
                    <NavLink to="/ui/09/contact" className={navLinkClasses}>Contact</NavLink>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <div className={`flex items-center gap-2 text-sm font-medium transition-colors ${isScrolled ? 'text-slate-500' : 'text-white/80'}`}>
                        <Phone size={16} />
                        <span>+1 800 123 4567</span>
                    </div>
                    <Link to="/ui/09/tours" className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-orange-200 transition-all hover:-translate-y-0.5 active:translate-y-0">
                        Book Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className={`lg:hidden transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(true)}>
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Drawer */}
            <div className={`fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm lg:hidden transition-opacity ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}>
                <div
                    className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={e => e.stopPropagation()}
                >
                    <div className="p-6 flex justify-between items-center border-b border-slate-100">
                        <span className="font-bold text-xl text-slate-800">Menu</span>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-50 rounded-full text-slate-500">
                            <X size={20} />
                        </button>
                    </div>
                    <div className="p-6 space-y-4">
                        <NavLink to="/ui/09" end className="block text-lg font-semibold text-slate-700">Home</NavLink>
                        <NavLink to="/ui/09/about" className="block text-lg font-semibold text-slate-700">About</NavLink>

                        <div>
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center justify-between w-full text-lg font-semibold text-slate-700">
                                Tours <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`mt-2 ml-4 space-y-2 border-l-2 border-slate-100 pl-4 overflow-hidden transition-all ${isDropdownOpen ? 'max-h-48' : 'max-h-0'}`}>
                                <Link to="/ui/09/tours" className="block text-slate-500 py-1">All Tours</Link>
                                <Link to="/ui/09/tours?type=adventure" className="block text-slate-500 py-1">Adventure</Link>
                                <Link to="/ui/09/tours?type=honeymoon" className="block text-slate-500 py-1">Honeymoon</Link>
                                <Link to="/ui/09/tours?type=family" className="block text-slate-500 py-1">Family</Link>
                            </div>
                        </div>

                        <NavLink to="/ui/09/gallery" className="block text-lg font-semibold text-slate-700">Gallery</NavLink>
                        <NavLink to="/ui/09/contact" className="block text-lg font-semibold text-slate-700">Contact</NavLink>

                        <div className="pt-8 mt-8 border-t border-slate-100">
                            <Link to="/ui/09/tours" className="block w-full text-center bg-orange-400 text-white py-3 rounded-xl font-bold shadow-lg shadow-orange-200">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default UI09Navbar;
