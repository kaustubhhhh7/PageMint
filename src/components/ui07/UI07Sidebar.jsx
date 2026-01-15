import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, BarChart2, CreditCard, HelpCircle, Lock, LayoutDashboard, Menu, X, ChevronLeft } from 'lucide-react';

const UI07Sidebar = ({ isMobileOpen, setIsMobileOpen }) => {
    const [activeSection, setActiveSection] = useState('overview');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['overview', 'security', 'features', 'metrics', 'pricing', 'faq', 'contact'];

            // Find the current section
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If element top is within the upper third of the viewport
                    if (rect.top >= -200 && rect.top < 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMobileOpen(false);
        const element = document.getElementById(id);
        if (element) {
            // Offset for fixed header if needed, though sidebar layout usually doesn't need much offset
            // We'll give it a little breathing room
            const yOffset = -20;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const navItems = [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'security', label: 'Security', icon: Lock },
        { id: 'features', label: 'Features', icon: CreditCard },
        { id: 'metrics', label: 'Impact', icon: BarChart2 },
        { id: 'pricing', label: 'Pricing', icon: Shield },
        { id: 'faq', label: 'FAQ', icon: HelpCircle },
    ];

    const SidebarContent = () => (
        <div className="flex flex-col h-full bg-white border-r border-slate-200">
            {/* Brand Header */}
            <div className="p-6 border-b border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-emerald-400">
                    <Shield size={18} fill="currentColor" className="text-emerald-400" />
                </div>
                <div>
                    <h1 className="text-xl font-bold text-slate-900 tracking-tight leading-none">VaultPay</h1>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Enterprise</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-4 mb-4">Menu</div>

                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group ${activeSection === item.id
                                ? 'bg-slate-50 text-slate-900 border-l-4 border-emerald-500 shadow-sm'
                                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 border-l-4 border-transparent'
                            }`}
                    >
                        <item.icon size={18} className={`transition-colors ${activeSection === item.id ? 'text-emerald-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                        {item.label}
                    </button>
                ))}

                <button
                    onClick={() => scrollToSection('contact')}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 mt-8 ${activeSection === 'contact'
                            ? 'bg-emerald-50 text-emerald-900 border-l-4 border-emerald-500'
                            : 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 border-l-4 border-transparent'
                        }`}
                >
                    Contact Sales
                </button>
            </nav>

            {/* Footer Actions */}
            <div className="p-4 border-t border-slate-200 space-y-3 bg-slate-50/50">
                <button className="w-full py-2 px-4 rounded-md border border-slate-200 text-slate-600 text-sm font-semibold hover:border-slate-300 hover:text-slate-900 bg-white transition-colors">
                    Sign In
                </button>

                <Link to="/" className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors py-2">
                    <ChevronLeft size={12} /> Back to Hub
                </Link>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar (Fixed) */}
            <aside className="hidden lg:block fixed top-0 left-0 h-screen w-72 z-40">
                <SidebarContent />
            </aside>

            {/* Mobile Sidebar Overlay */}
            <div className={`lg:hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileOpen(false)}>
                <div
                    className={`absolute top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    onClick={e => e.stopPropagation()}
                >
                    <SidebarContent />
                    <button
                        onClick={() => setIsMobileOpen(false)}
                        className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default UI07Sidebar;
