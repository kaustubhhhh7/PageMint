import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const UI08Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const navLinks = [
        { label: 'Curriculum', href: '#curriculum' },
        { label: 'Philosophy', href: '#philosophy' },
        { label: 'Reviews', href: '#reviews' },
        { label: 'Contact', href: '#contact' },
    ];

    const scrollTo = (id) => {
        setIsMobileOpen(false);
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="bg-white border-b border-black py-4 sticky top-0 z-50">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">

                {/* Logo */}
                <div className="flex flex-col" onClick={() => window.scrollTo(0, 0)}>
                    <span className="font-black text-xl tracking-tighter cursor-pointer uppercase">SkillSprint.</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Academy</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <button
                            key={link.label}
                            onClick={() => scrollTo(link.href)}
                            className="text-xs font-bold uppercase tracking-widest hover:text-zinc-500 transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                    <div className="h-4 w-px bg-zinc-300 mx-2"></div>
                    <Link to="/" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors">
                        Back to Hub
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="lg:hidden" onClick={() => setIsMobileOpen(true)}>
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Drawer */}
            {isMobileOpen && (
                <div className="fixed inset-0 z-50 bg-white p-6 flex flex-col items-center justify-center animate-in slide-in-from-top-10 duration-300">
                    <button onClick={() => setIsMobileOpen(false)} className="absolute top-6 right-6">
                        <X size={32} />
                    </button>
                    <div className="flex flex-col gap-8 text-center">
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollTo(link.href)}
                                className="text-2xl font-black uppercase tracking-widest"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default UI08Navbar;
