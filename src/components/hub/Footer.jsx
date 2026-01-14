import React from 'react';
import Container from '../common/Container';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            PageMint
                        </span>
                        <p className="text-gray-500 text-sm mt-1">
                            Building beautiful interfaces, one pixel at a time.
                        </p>
                    </div>
                    <div className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} PageMint. Built with React + Tailwind.
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
