import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Ticket, ArrowLeft, ChevronRight } from 'lucide-react';

const UI06Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['speakers', 'schedule', 'tickets', 'venue', 'sponsors', 'faq'];
            let current = '';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = section;
                        break;
                    }
                }
            }
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const links = [
        { id: 'speakers', label: 'Speakers' },
        { id: 'schedule', label: 'Schedule' },
        { id: 'tickets', label: 'Tickets' },
        { id: 'venue', label: 'Venue' },
        { id: 'sponsors', label: 'Sponsors' },
        { id: 'faq', label: 'FAQ' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-3 border-b border-orange-100 shadow-sm' : 'bg-transparent py-5'}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Brand */}
                    <div className="flex items-center gap-1 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center text-white font-black text-xl rotate-3 group-hover:rotate-6 transition-transform shadow-lg shadow-orange-200">
                            N
                        </div>
                        <div className="flex flex-col leading-none ml-2">
                            <span className="text-xl font-black text-slate-900 tracking-tighter">NEXA</span>
                            <span className="text-xs font-bold text-orange-600 tracking-widest uppercase">SUMMIT 2026</span>
                        </div>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {links.map(link => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                className={`relative text-sm font-bold uppercase tracking-wide transition-colors duration-300 ${activeSection === link.id ? 'text-orange-600' : 'text-slate-500 hover:text-slate-900'}`}
                            >
                                {link.label}
                                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transform transition-transform duration-300 ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0'}`} />
                            </button>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center gap-4">

                        <button
                            onClick={() => scrollTo('tickets')}
                            className="bg-gradient-to-r from-orange-500 to-amber-400 text-slate-900 px-6 py-2.5 rounded-r-2xl rounded-bl-2xl font-bold uppercase text-sm tracking-wider hover:shadow-xl hover:shadow-orange-300/50 transition-all duration-300 shadow-lg active:scale-95 flex items-center gap-2 group"
                        >
                            Get Tickets
                            <Ticket size={16} className="group-hover:rotate-12 transition-transform" />
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="lg:hidden text-slate-900" onClick={() => setMobileMenuOpen(true)}>
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[60] bg-slate-900/95 backdrop-blur-xl transform transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-8 flex items-center justify-between">
                    <span className="text-2xl font-black text-white tracking-tighter">NEXA <span className="text-orange-400">SUMMIT</span></span>
                    <button onClick={() => setMobileMenuOpen(false)} className="text-white/50 hover:text-white transition-colors">
                        <X size={32} />
                    </button>
                </div>
                <div className="px-8 mt-12 flex flex-col gap-6">
                    {links.map(link => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-200 hover:to-white text-left uppercase tracking-tight flex items-center justify-between group"
                        >
                            {link.label}
                            <ChevronRight size={24} className="text-orange-400 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                        </button>
                    ))}
                    <div className="mt-8 border-t border-white/10 pt-8 flex flex-col gap-4">
                        <button onClick={() => scrollTo('tickets')} className="w-full bg-gradient-to-r from-orange-500 to-amber-400 text-slate-900 py-4 font-black uppercase tracking-widest rounded text-center shadow-lg shadow-orange-300/50">
                            Get Tickets
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default UI06Navbar;
