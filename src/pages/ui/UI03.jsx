import React from 'react';
import UI03Navbar from '../../components/ui03/UI03Navbar';
import UI03Hero from '../../components/ui03/UI03Hero';
import UI03About from '../../components/ui03/UI03About';
import UI03Skills from '../../components/ui03/UI03Skills';
import UI03Projects from '../../components/ui03/UI03Projects';
import UI03Experience from '../../components/ui03/UI03Experience';
import UI03Contact from '../../components/ui03/UI03Contact';
import UI03Footer from '../../components/ui03/UI03Footer';
import BackToHub from '../../components/common/BackToHub';

const UI03 = () => {

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
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
            <BackToHub />
        </div>
    );
};

export default UI03;
