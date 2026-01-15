import React from 'react';
import UI08Navbar from '../../components/ui08/UI08Navbar';
import UI08Hero from '../../components/ui08/UI08Hero';
import UI08CourseOutline from '../../components/ui08/UI08CourseOutline';
import UI08LessonPreview from '../../components/ui08/UI08LessonPreview';
import UI08Mentors from '../../components/ui08/UI08Mentors';
import UI08Outcomes from '../../components/ui08/UI08Outcomes';
import UI08Projects from '../../components/ui08/UI08Projects';
import UI08PricingEnroll from '../../components/ui08/UI08PricingEnroll';
import UI08FAQ from '../../components/ui08/UI08FAQ';
import UI08Footer from '../../components/ui08/UI08Footer';

const UI08 = () => {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-amber-100 selection:text-amber-900">
            {/* 1. Minimal Navbar */}
            <UI08Navbar />

            {/* 2. Editorial Hero */}
            <UI08Hero />

            {/* 3. Course Outline (Accordion) */}
            <UI08CourseOutline />

            {/* 4. Lesson Preview (Editor Split Pane) */}
            <UI08LessonPreview />

            {/* 5. Mentors (Minimal Row) */}
            <UI08Mentors />

            {/* 6. Outcomes (Checklist Blocks) */}
            <UI08Outcomes />

            {/* 7. Projects (Card List) */}
            <UI08Projects />

            {/* 8. Pricing (Comparison Table) */}
            <UI08PricingEnroll />

            {/* 9. FAQ (Minimal) */}
            <UI08FAQ />

            {/* 10. Footer */}
            <UI08Footer />
        </div>
    );
};

export default UI08;
