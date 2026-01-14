import React from 'react';
import HubNavbar from '../components/hub/HubNavbar';
import UIGrid from '../components/hub/UIGrid';
import Footer from '../components/hub/Footer';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

const Home = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-700">
            <HubNavbar />

            {/* Hero Section */}
            <main className="pt-24 pb-16 lg:pt-32 lg:pb-24">
                <Container>
                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
                            CORE3
                        </p>
                        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">
                            <span className="block">PageMint</span>
                            <span className="block text-indigo-600 mt-2">UI Showcase Hub</span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto mb-10">
                            A curated collection of 10 distinct landing page experiences.
                            Designed with React, wired with React Router, and styled with Tailwind CSS.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="#explore">
                                <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
                                    Explore UIs
                                </Button>
                            </a>
                            <a href="https://github.com/kaustubhhhh7/PageMint" target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4">
                                    View Repo
                                </Button>
                            </a>
                        </div>
                    </div>
                </Container>
            </main>

            <UIGrid />
            <Footer />
        </div>
    );
};

export default Home;
