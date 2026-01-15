import React, { useState } from 'react';
import UI07Sidebar from './UI07Sidebar';
import UI07TopBar from './UI07TopBar';
import { ArrowUp } from 'lucide-react';

const UI07Layout = ({ children }) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [showTopBtn, setShowTopBtn] = useState(false);

    // Scroll listener for back-to-top button
    React.useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
            {/* Sidebar Navigation */}
            <UI07Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />

            {/* Main Content Area */}
            <div className="flex-1 lg:pl-72 flex flex-col min-h-screen relative">
                <UI07TopBar setIsMobileOpen={setIsMobileOpen} />

                <main className="flex-1 relative">
                    {children}
                </main>

                {/* Local Scroll to Top (Inside Main Content) */}
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-white text-slate-900 shadow-xl border border-slate-200 transition-all duration-500 hover:scale-110 hover:border-emerald-500 hover:text-emerald-600 ${showTopBtn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
                >
                    <ArrowUp size={20} />
                </button>
            </div>
        </div>
    );
};

export default UI07Layout;
