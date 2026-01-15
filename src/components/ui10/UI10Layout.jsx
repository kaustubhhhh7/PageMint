import React, { useEffect } from 'react';
import UI10Navbar from './UI10Navbar';
import UI10Footer from './UI10Footer';
import ScrollToTop from '../common/ScrollToTop';

const UI10Layout = ({ children }) => {
    // Add a class to body for global style overrides if needed (optional)
    useEffect(() => {
        document.body.classList.add('bg-stone-50');
        return () => {
            document.body.classList.remove('bg-stone-50');
        };
    }, []);

    return (
        <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden w-full">
            <ScrollToTop />
            <UI10Navbar />
            <main className="w-full">
                {children}
            </main>
            <UI10Footer />
        </div>
    );
};

export default UI10Layout;
