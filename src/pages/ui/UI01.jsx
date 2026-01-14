import React from 'react';
import UI01Navbar from '../../components/ui01/UI01Navbar';
import UI01Hero from '../../components/ui01/UI01Hero';
import UI01Features from '../../components/ui01/UI01Features';
import UI01Pricing from '../../components/ui01/UI01Pricing';
import UI01Testimonials from '../../components/ui01/UI01Testimonials';
import UI01FAQ from '../../components/ui01/UI01FAQ';
import UI01Contact from '../../components/ui01/UI01Contact';
import UI01Footer from '../../components/ui01/UI01Footer';
import BackToHub from '../../components/common/BackToHub';

const UI01 = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-700">
            <UI01Navbar />
            <div className="animate-fade-in-up">
                <UI01Hero />
                <UI01Features />
                <UI01Pricing />
                <UI01Testimonials />
                <UI01FAQ />
                <UI01Contact />
            </div>
            <UI01Footer />
            <BackToHub />
        </div>
    );
};

export default UI01;
