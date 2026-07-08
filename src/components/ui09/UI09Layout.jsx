import React from 'react';
import { Outlet } from 'react-router-dom';
import UI09Navbar from './UI09Navbar';
import UI09Footer from './UI09Footer';

const UI09Layout = () => {
    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            <UI09Navbar />
            <main>
                <Outlet />
            </main>
            <UI09Footer />
        </div>
    );
};

export default UI09Layout;
