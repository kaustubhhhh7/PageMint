import React from 'react';
import UI07Layout from '../../components/ui07/UI07Layout';
import UI07HeroOverview from '../../components/ui07/UI07HeroOverview';
import UI07SecurityCompliance from '../../components/ui07/UI07SecurityCompliance';
import UI07Features from '../../components/ui07/UI07Features';
import UI07Metrics from '../../components/ui07/UI07Metrics';
import UI07PricingPlans from '../../components/ui07/UI07PricingPlans';
import UI07Testimonials from '../../components/ui07/UI07Testimonials';
import UI07FAQ from '../../components/ui07/UI07FAQ';
import UI07ContactSales from '../../components/ui07/UI07ContactSales';
import UI07Footer from '../../components/ui07/UI07Footer';

const UI07 = () => {
    return (
        <UI07Layout>
            <UI07HeroOverview />
            <UI07SecurityCompliance />
            <UI07Features />
            <UI07Metrics />
            <UI07PricingPlans />
            <UI07Testimonials />
            <UI07FAQ />
            <UI07ContactSales />
            <UI07Footer />
        </UI07Layout>
    );
};

export default UI07;
