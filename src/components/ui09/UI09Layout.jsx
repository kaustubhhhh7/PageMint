import React from 'react';
import { Outlet } from 'react-router-dom';
import UI09Navbar from './UI09Navbar';
import UI09Footer from './UI09Footer';
import BackToHub from '../common/BackToHub';

const UI09Layout = () => {
    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            <UI09Navbar />
            <main>
                <Outlet />
            </main>
            <UI09Footer />
            <BackToHub />
        </div>
    );
};

export default UI09Layout;
