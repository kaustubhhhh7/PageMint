import React from 'react';
import UI02Navbar from '../../components/ui02/UI02Navbar';
import UI02Hero from '../../components/ui02/UI02Hero';
import UI02SignatureDishes from '../../components/ui02/UI02SignatureDishes';
import UI02MenuHighlights from '../../components/ui02/UI02MenuHighlights';
import UI02ChefStory from '../../components/ui02/UI02ChefStory';
import UI02Reviews from '../../components/ui02/UI02Reviews';
import UI02Reservation from '../../components/ui02/UI02Reservation';
import UI02Footer from '../../components/ui02/UI02Footer';
import BackToHub from '../../components/common/BackToHub';

const UI02 = () => {
    return (
        <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-orange-100 selection:text-orange-800">
            <UI02Navbar />
            <div className="animate-fade-in-up">
                <UI02Hero />
                <UI02SignatureDishes />
                <UI02MenuHighlights />
                <UI02ChefStory />
                <UI02Reviews />
                <UI02Reservation />
            </div>
            <UI02Footer />
            <BackToHub />
        </div>
    );
};

export default UI02;
