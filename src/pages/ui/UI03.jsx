import React, { useEffect } from 'react';
import UI03Navbar from '../../components/ui03/UI03Navbar';
import UI03Hero from '../../components/ui03/UI03Hero';
import UI03About from '../../components/ui03/UI03About';
import UI03Skills from '../../components/ui03/UI03Skills';
import UI03Projects from '../../components/ui03/UI03Projects';
import UI03Experience from '../../components/ui03/UI03Experience';
import UI03Contact from '../../components/ui03/UI03Contact';
import UI03Footer from '../../components/ui03/UI03Footer';

const UI03 = () => {

    // Custom Cursor Logic
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        // Only run on desktop
        if (window.matchMedia("(pointer: fine)").matches) {
            const moveCursor = (e) => {
                if (cursor) {
                    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
                }
            };

            const handleMouseOver = (e) => {
                if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a') || e.target.closest('.cursor-pointer')) {
                    cursor?.classList.add('cursor-hover');
                } else {
                    cursor?.classList.remove('cursor-hover');
                }
            };

            window.addEventListener('mousemove', moveCursor);
            document.addEventListener('mouseover', handleMouseOver);

            return () => {
                window.removeEventListener('mousemove', moveCursor);
                document.removeEventListener('mouseover', handleMouseOver);
            };
        }
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 font-sans cursor-none selection:bg-indigo-500 selection:text-white">

            {/* Custom Cursor Element */}
            <div
                id="custom-cursor"
                className="fixed top-0 left-0 w-4 h-4 bg-indigo-600 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out mix-blend-multiply hidden lg:block"
            >
                <div className="w-full h-full rounded-full bg-indigo-600 opacity-50 blur-[2px]"></div>
            </div>

            <style>{`
                .cursor-hover {
                    transform: scale(2.5) !important;
                    background-color: transparent !important;
                    border: 1px solid rgba(79, 70, 229, 0.5) !important;
                    backdrop-filter: blur(2px);
                }
                /* Hide default cursor only on the page container, restored in inspection */
            `}</style>

            <UI03Navbar />
            <main>
                <UI03Hero />
                <UI03About />
                <UI03Skills />
                <UI03Projects />
                <UI03Experience />
                <UI03Contact />
            </main>
            <UI03Footer />
        </div>
    );
};

export default UI03;
