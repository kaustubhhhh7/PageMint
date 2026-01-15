import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import UI08Navbar from '../../components/ui08/UI08Navbar';
import UI08Hero from '../../components/ui08/UI08Hero';
import UI08CoursePreview from '../../components/ui08/UI08CoursePreview';
import UI08Curriculum from '../../components/ui08/UI08Curriculum';
import UI08Mentors from '../../components/ui08/UI08Mentors';
import UI08Outcomes from '../../components/ui08/UI08Outcomes';
import UI08ProjectsShowcase from '../../components/ui08/UI08ProjectsShowcase';
import UI08PricingEnroll from '../../components/ui08/UI08PricingEnroll';
import UI08Testimonials from '../../components/ui08/UI08Testimonials';
import UI08FAQ from '../../components/ui08/UI08FAQ';
import UI08Footer from '../../components/ui08/UI08Footer';

const UI08 = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
            <UI08Navbar />

            <main>
                <UI08Hero />
                <UI08CoursePreview />
                <UI08Curriculum />
                <UI08Mentors />
                <UI08Outcomes />
                <UI08ProjectsShowcase />
                <UI08PricingEnroll />
                <UI08Testimonials />
                <UI08FAQ />
            </main>

            <UI08Footer />

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-40 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
            >
                <ArrowUp size={24} />
            </button>
        </div>
    );
};

export default UI08;
