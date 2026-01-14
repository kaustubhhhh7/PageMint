import React from 'react';
import UI04Navbar from '../../components/ui04/UI04Navbar';
import UI04Hero from '../../components/ui04/UI04Hero';
import UI04Programs from '../../components/ui04/UI04Programs';
import UI04Trainers from '../../components/ui04/UI04Trainers';
import UI04Plans from '../../components/ui04/UI04Plans';
import UI04Transformations from '../../components/ui04/UI04Transformations';
import UI04FAQ from '../../components/ui04/UI04FAQ';
import UI04Footer from '../../components/ui04/UI04Footer';

const UI04 = () => {
    return (
        <div className="bg-black min-h-screen font-sans text-slate-200 selection:bg-orange-500 selection:text-white">
            <UI04Navbar />
            <main>
                <div id="ui04-hero">
                    <UI04Hero />
                </div>
                <UI04Programs />
                <UI04Trainers />
                <UI04Plans />
                <UI04Transformations />
                <UI04FAQ />
            </main>
            <UI04Footer />
        </div>
    );
};

export default UI04;
