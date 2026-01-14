import React, { useState, useEffect, useRef } from 'react';

const storySteps = [
    {
        id: 1,
        title: "Unbox the vibe.",
        description: "Premium materials meet sustainable packaging. The unboxing experience is just the beginning of your journey.",
        color: "bg-blue-100",
        accent: "text-blue-600"
    },
    {
        id: 2,
        title: "Tap. Pair. Play.",
        description: "Zero setup time. Open the case near your device and connect instantly. It's magic, engineered.",
        color: "bg-purple-100",
        accent: "text-purple-600"
    },
    {
        id: 3,
        title: "Noise disappears.",
        description: "Step into your own world. The city fades away, leaving only you and your music.",
        color: "bg-slate-100",
        accent: "text-slate-600"
    },
    {
        id: 4,
        title: "Power that lasts.",
        description: "From morning commute to late-night gaming session. The case holds 48 hours of total charge.",
        color: "bg-orange-100",
        accent: "text-orange-600"
    }
];

const UI05StickyStory = () => {
    const [activeStep, setActiveStep] = useState(1);
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveStep(Number(entry.target.dataset.stepId));
                }
            });
        }, { threshold: 0.6 });

        const steps = document.querySelectorAll('.story-step');
        steps.forEach((step) => observer.current.observe(step));

        return () => observer.current.disconnect();
    }, []);

    const activeStory = storySteps.find(s => s.id === activeStep) || storySteps[0];

    return (
        <section id="story" className="relative bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row">

                {/* Left Sticky Content */}
                <div className="hidden lg:flex w-1/2 h-screen sticky top-0 items-center justify-center p-12">
                    <div className="w-full max-w-lg">
                        {/* Progress Dots */}
                        <div className="flex gap-2 mb-8">
                            {storySteps.map(step => (
                                <div
                                    key={step.id}
                                    className={`h-1.5 rounded-full transition-all duration-500 ease-out ${activeStep >= step.id ? `w-12 ${activeStory.accent} bg-current` : 'w-4 bg-slate-300'}`}
                                ></div>
                            ))}
                        </div>

                        <div className="relative overflow-hidden min-h-[200px] transition-all duration-500">
                            <h2 className={`text-6xl font-black mb-6 transition-all duration-500 transform ${activeStory.accent}`}>
                                {activeStory.title}
                            </h2>
                            <p className="text-2xl text-slate-600 font-light leading-relaxed">
                                {activeStory.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Scrollable Steps */}
                <div className="w-full lg:w-1/2">
                    {storySteps.map((step) => (
                        <div
                            key={step.id}
                            data-step-id={step.id}
                            className="story-step min-h-[80vh] flex items-center justify-center p-6 md:p-12 mb-12"
                        >
                            <div className={`w-full aspect-square rounded-[3rem] ${step.color} shadow-inner flex items-center justify-center p-8 transition-transform duration-700 ${activeStep === step.id ? 'scale-100 rotate-0' : 'scale-90 rotate-2 opacity-60'}`}>
                                {/* Just placeholder abstract art for the 'story' visual */}
                                <div className="text-center">
                                    <span className="text-9xl font-black text-black/5 block">{step.id}</span>
                                    {/* Mobile Only Title (since sticky is hidden on mobile) */}
                                    <div className="lg:hidden mt-8">
                                        <h3 className="text-3xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-slate-600">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UI05StickyStory;
