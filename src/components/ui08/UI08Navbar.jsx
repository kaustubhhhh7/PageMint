import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Menu, X, ArrowRight, Download } from 'lucide-react';

const UI08Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('overview');
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Simple spy logic
            const sections = ['overview', 'curriculum', 'mentors', 'outcomes', 'projects', 'pricing', 'faq'];
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top >= -100 && rect.top < 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        setIsMobileOpen(false);
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -80;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const navLinks = [
        { id: 'overview', label: 'Overview' },
        { id: 'curriculum', label: 'Curriculum' },
        { id: 'mentors', label: 'Mentors' },
        { id: 'projects', label: 'Projects' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'faq', label: 'FAQ' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white py-5 border-b border-slate-100'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                        <BookOpen size={20} fill="currentColor" className="text-white" />
                    </div>
                    <div>
                        <span className="block text-lg font-black text-slate-900 leading-none tracking-tight">SkillSprint</span>
                        <span className="block text-xs font-bold text-orange-500 uppercase tracking-widest">Academy</span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1 bg-slate-50 p-1 rounded-full border border-slate-200">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${activeSection === link.id
                                    ? 'bg-white text-blue-600 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
                        <Download size={16} /> Syllabus
                    </button>
                    <button
                        onClick={() => scrollTo('pricing')}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-orange-500/20 active:scale-95 transition-all flex items-center gap-2 group"
                    >
                        Enroll Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="lg:hidden text-slate-600" onClick={() => setIsMobileOpen(true)}>
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Drawer */}
            <div className={`fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileOpen(false)}>
                <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
                    <div className="p-6 flex justify-between items-center border-b border-slate-100">
                        <span className="font-black text-xl text-slate-900">Menu</span>
                        <button onClick={() => setIsMobileOpen(false)} className="p-2 bg-slate-50 rounded-full hover:bg-slate-100 text-slate-500">
                            <X size={20} />
                        </button>
                    </div>
                    <div className="p-6 space-y-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                className={`w-full text-left px-4 py-3 rounded-lg font-bold transition-colors ${activeSection === link.id ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="h-px bg-slate-100 my-4" />
                        <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold shadow-lg shadow-orange-500/20">
                            Enroll Now
                        </button>
                    </div>
                    <div className="absolute bottom-6 left-0 w-full text-center">
                        <Link to="/" className="text-sm font-bold text-slate-400 hover:text-blue-600">Back to Hub</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default UI08Navbar;
