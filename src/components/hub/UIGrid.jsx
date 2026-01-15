import React from 'react';
import Container from '../common/Container';
import UICard from './UICard';

const UIGrid = () => {
    const uis = [
        {
            id: '01',
            name: 'SaaS Landing',
            description: 'Modern SaaS landing page with clean hero, feature highlights, pricing preview, and conversion-focused CTA layout.',
            tags: ['SaaS', 'B2B', 'Pricing']
        },
        {
            id: '02',
            name: 'Restaurant Experience',
            description: 'Elegant restaurant landing page with menu showcase, reservation CTA, testimonials, and premium dining branding.',
            tags: ['Dining', 'Menu', 'Booking']
        },
        {
            id: '03',
            name: 'Personal Portfolio',
            description: 'Minimal developer portfolio with about, skills, project preview, and a clean contact call-to-action.',
            tags: ['Portfolio', 'Minimal', 'Resume']
        },
        {
            id: '04',
            name: 'Fitness Studio',
            description: 'High-energy fitness landing page with class highlights, membership CTA, and strong motivational layout.',
            tags: ['Sports', 'Gym', 'High Energy']
        },
        {
            id: '05',
            name: 'Product / eBook Launch',
            description: 'Conversion-focused product launch page for digital goods with features, benefits, and purchase call-to-action.',
            tags: ['E-commerce', 'Digital Product', 'Sales']
        },
        {
            id: '06',
            name: 'Event Conference',
            description: 'Conference landing page with speakers section, schedule timeline, ticket CTA, and event highlights.',
            tags: ['Events', 'Schedule', 'Booking']
        },
        {
            id: '07',
            name: 'Fintech App',
            description: 'Trust-first fintech landing with clean sections for features, security highlights, and app download CTA.',
            tags: ['Finance', 'App', 'Trust']
        },
        {
            id: '08',
            name: 'Online Course',
            description: 'Educational course landing with curriculum preview, instructor highlight, student outcomes, and enroll CTA.',
            tags: ['Education', 'LMS', 'Course']
        },
        {
            id: '09',
            name: 'Travel Agency',
            description: 'Beautiful travel landing with destination sections, package previews, and modern booking-style CTA.',
            tags: ['Travel', 'Booking', 'Visual']
        },
        {
            id: '10',
            name: 'Real Estate',
            description: 'Professional real estate landing with property highlights, agent trust section, and inquiry call-to-action.',
            tags: ['Property', 'Listing', 'Luxury']
        },
    ];

    return (
        <section id="explore" className="py-24 bg-stone-50 border-t border-slate-200">
            <Container>
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4 tracking-tight">
                        Explore Premium Interfaces
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-slate-500 font-light">
                        Click any UI to preview its complete landing page with its unique layout and navigation.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {uis.map((ui) => (
                        <UICard
                            key={ui.id}
                            title={`UI-${ui.id}`}
                            name={ui.name}
                            description={ui.description}
                            tags={ui.tags}
                            to={`/ui/${ui.id}`}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default UIGrid;
