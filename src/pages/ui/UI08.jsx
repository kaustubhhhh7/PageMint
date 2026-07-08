import React from 'react';
import UI08Marquee from '../../components/ui08/UI08Marquee';
import UI08Navbar from '../../components/ui08/UI08Navbar';
import UI08Hero from '../../components/ui08/UI08Hero';
import UI08About from '../../components/ui08/UI08About';
import UI08Curriculum from '../../components/ui08/UI08Curriculum';
import UI08Philosophy from '../../components/ui08/UI08Philosophy';
import UI08Testimonials from '../../components/ui08/UI08Testimonials';
import UI08Contact from '../../components/ui08/UI08Contact';

const UI08 = () => {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-black selection:text-white">
            <UI08Marquee />
            <UI08Navbar />
            <UI08Hero />
            <UI08About />
            <UI08Curriculum />
            <UI08Philosophy />
            <UI08Testimonials />
            <UI08Contact />
        </div>
    );
};

export default UI08;
