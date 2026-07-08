import React from 'react';
import Container from '../common/Container';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 py-12">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:items-start items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-white tracking-tight">
                                PageMint
                            </span>

                        </div>
                        <p className="text-slate-400 text-sm mt-2 font-light">
                            Building beautiful interfaces, one pixel at a time.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2">
                        <div className="text-slate-500 text-sm">
                            &copy; {new Date().getFullYear()} Designed by Kaustubh Ghadshi
                        </div>
                        <div className="flex gap-4">
                            {/* Optional Social Links - Minimal Placeholder */}
                            <a href="https://github.com/kaustubhhhh7" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-500 hover:text-teal-400 uppercase tracking-wider transition-colors">GitHub</a>
                            <a href="https://kaustubh7-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-500 hover:text-teal-400 uppercase tracking-wider transition-colors">Portfolio</a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
