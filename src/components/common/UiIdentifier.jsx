import React from 'react';
import { useLocation } from 'react-router-dom';

const UiIdentifier = () => {
    const location = useLocation();
    // Match /ui/XX start of path
    const match = location.pathname.match(/^\/ui\/(\d+)/);

    if (!match) return null;

    const uiNumber = String(match[1]).padStart(2, '0');

    return (
        <div
            style={{ zIndex: 99999 }}
            className="fixed top-5 right-5 px-4 py-2 bg-white/90 backdrop-blur-md border border-slate-300 rounded-full shadow-lg flex items-center gap-2 animate-fade-in select-none pointer-events-none"
        >
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            <span className="font-mono text-sm font-bold text-slate-600 tracking-wider">
                #UI-{uiNumber}
            </span>
        </div>
    );
};

export default UiIdentifier;
