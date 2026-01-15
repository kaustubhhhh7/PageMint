import React from 'react';
import UI08ScholarshipBanner from '../../components/ui08/UI08ScholarshipBanner';
import UI08Navbar from '../../components/ui08/UI08Navbar';
import UI08Hero from '../../components/ui08/UI08Hero';
import UI08FloatingDock from '../../components/ui08/UI08FloatingDock';
import UI08LearningPathMap from '../../components/ui08/UI08LearningPathMap';
import UI08CohortTimeline from '../../components/ui08/UI08CohortTimeline';
import UI08CommunityWall from '../../components/ui08/UI08CommunityWall';
import UI08Curriculum from '../../components/ui08/UI08Curriculum';
import UI08CertificateSection from '../../components/ui08/UI08CertificateSection';
import UI08Mentors from '../../components/ui08/UI08Mentors';
import UI08Outcomes from '../../components/ui08/UI08Outcomes';
import UI08ProjectsShowcase from '../../components/ui08/UI08ProjectsShowcase';
import UI08PricingEnroll from '../../components/ui08/UI08PricingEnroll';
import UI08Testimonials from '../../components/ui08/UI08Testimonials';
import UI08FAQ from '../../components/ui08/UI08FAQ';
import UI08Footer from '../../components/ui08/UI08Footer';

const UI08 = () => {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900">
            {/* Top Banner */}
            <UI08ScholarshipBanner />

            {/* Navbar */}
            <UI08Navbar />

            {/* Main Content */}
            <main>
                <UI08Hero />
                <UI08LearningPathMap />
                <UI08CohortTimeline />
                <UI08CommunityWall />
                <UI08Curriculum />
                <UI08Mentors />
                <UI08CertificateSection />
                <UI08Outcomes />
                <UI08ProjectsShowcase />
                <UI08PricingEnroll />
                <UI08Testimonials />
                <UI08FAQ />
            </main>

            {/* Footer */}
            <UI08Footer />

            {/* Floating Dock (Fixed UI) */}
            <UI08FloatingDock />
        </div>
    );
};

export default UI08;
