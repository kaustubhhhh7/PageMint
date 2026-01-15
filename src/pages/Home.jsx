import React from 'react';
import HubNavbar from '../components/hub/HubNavbar';

import Footer from '../components/hub/Footer';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

const Home = () => {
    return (
        <div className="min-h-screen bg-stone-50 font-sans selection:bg-teal-100 selection:text-teal-700">
            <HubNavbar />

            {/* Hero Section */}
            <main className="pt-24 pb-16 lg:pt-36 lg:pb-32 relative overflow-hidden">
                {/* Subtle Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-teal-50/50 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob"></div>
                    <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-slate-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
                </div>

                <Container>
                    <div className="relative text-center max-w-4xl mx-auto z-10">
                        {/* Premium Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8 animate-fade-in-up">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                Crafted by CORE3 • Premium UI Interfaces
                            </span>
                        </div>

                        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl mb-6 leading-tight">
                            <span className="block mb-2">PageMint</span>
                            <span className="block text-teal-700 bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-teal-500">
                                UI Showcase Hub
                            </span>
                        </h1>

                        <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                            A curated collection of <span className="font-semibold text-slate-900">10 distinct landing page experiences</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                            <a href="#explore">
                                <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4 shadow-xl shadow-teal-100">
                                    Explore UIs
                                </Button>
                            </a>

                        </div>


                    </div>
                </Container>
            </main>

            {/* UIGrid removed as per request */}
            <Footer />
        </div>
    );
};

export default Home;
