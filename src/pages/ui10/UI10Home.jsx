import React from 'react';
import UI10Hero from '../../components/ui10/UI10Hero';
import UI10SearchBar from '../../components/ui10/UI10SearchBar';
import UI10FeaturedProperties from '../../components/ui10/UI10FeaturedProperties';
import UI10LuxuryHighlights from '../../components/ui10/UI10LuxuryHighlights';
import UI10Neighborhoods from '../../components/ui10/UI10Neighborhoods';
import UI10AgentsPreview from '../../components/ui10/UI10AgentsPreview';
import UI10Testimonials from '../../components/ui10/UI10Testimonials';
import UI10CTA from '../../components/ui10/UI10CTA';

const UI10Home = () => {
    return (
        <>
            <UI10Hero />
            <div className="relative z-20 -mt-16 md:-mt-24 px-4">
                <UI10SearchBar />
            </div>
            <UI10FeaturedProperties />
            <UI10LuxuryHighlights />
            <UI10Neighborhoods />
            <UI10AgentsPreview />
            <UI10Testimonials />
            <UI10CTA />
        </>
    );
};

export default UI10Home;
