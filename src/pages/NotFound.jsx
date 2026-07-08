import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <Container>
                <div className="text-center">
                    <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404 error</p>
                    <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found.</h1>
                    <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
                        Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
                    </p>
                    <div className="mt-6">
                        <Button to="/" variant="primary">
                            Go back home
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;
