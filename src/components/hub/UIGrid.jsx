import React from 'react';
import Container from '../common/Container';
import UICard from './UICard';

const UIGrid = () => {
    const uis = [
        { id: '01', name: 'SaaS Landing', description: 'Modern software capability showcase with feature grids and pricing tables.' },
        { id: '02', name: 'Restaurant', description: 'Elegant dining experience with menu previews and reservation capabilities.' },
        { id: '03', name: 'Personal Portfolio', description: 'Clean minimal identity site for creatives and developers.' },
        { id: '04', name: 'Fitness Studio', description: 'High-energy layout for gyms, trainers, and workout plans.' },
        { id: '05', name: 'E-Book / Product', description: 'Conversion-focused landing page for digital products.' },
        { id: '06', name: 'Event Conference', description: 'Schedule, speakers, and ticket booking interface.' },
        { id: '07', name: 'Fintech App', description: 'Trust-building design for banking and financial services.' },
        { id: '08', name: 'Online Course', description: 'Educational platform landing with curriculum preview.' },
        { id: '09', name: 'Travel Agency', description: 'Visual-heavy design showcasing destinations and packages.' },
        { id: '10', name: 'Real Estate', description: 'Property listings and agent profiles with search focus.' },
    ];

    return (
        <section id="explore" className="py-20 bg-gray-50">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                        Explore Designs
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600">
                        A collection of distinct landing page experiences. Click any card to view the full UI.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {uis.map((ui) => (
                        <UICard
                            key={ui.id}
                            title={`UI-${ui.id}`}
                            name={ui.name}
                            description={ui.description}
                            to={`/ui/${ui.id}`}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default UIGrid;
