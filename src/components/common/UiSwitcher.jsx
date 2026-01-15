import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Command, Search, X, RefreshCw, Monitor, AppWindow, ArrowRight } from 'lucide-react';

const uis = [
    { id: '00', name: 'Home', tags: ['Hub', 'Start'], path: '/' },
    { id: '01', name: 'SaaS Landing', tags: ['Responsive', 'Pricing'], path: '/ui/01' },
    { id: '02', name: 'Restaurant Experience', tags: ['Visual', 'Menu'], path: '/ui/02' },
    { id: '03', name: 'Personal Portfolio', tags: ['Minimal', 'Profile'], path: '/ui/03' },
    { id: '04', name: 'Fitness Studio', tags: ['Dynamic', 'Sports'], path: '/ui/04' },
    { id: '05', name: 'Product / eBook Launch', tags: ['Conversion', 'Sales'], path: '/ui/05' },
    { id: '06', name: 'Event Conference', tags: ['Schedule', 'Speakers'], path: '/ui/06' },
    { id: '07', name: 'Fintech App', tags: ['Trust', 'Finance'], path: '/ui/07' },
    { id: '08', name: 'Online Course', tags: ['Education', 'LMS'], path: '/ui/08' },
    { id: '09', name: 'Travel Agency', tags: ['Gallery', 'Booking'], path: '/ui/09' },
    { id: '10', name: 'Real Estate', tags: ['Listings', 'Luxury'], path: '/ui/10' },
];

const UiSwitcher = () => {
    // Debug mount
    useEffect(() => {
        console.log("Global UiSwitcher Mounted 🟢");
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // Get current location
    const overlayRef = useRef(null);

    // Dragging State - Responsive initial position
    const getInitialPosition = () => {
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
            // Bottom-right on mobile
            return { x: window.innerWidth - 60, y: window.innerHeight - 80 };
        }
        // Top-left on desktop
        return { x: 16, y: 16 };
    };

    const [position, setPosition] = useState(getInitialPosition());
    const [isDragging, setIsDragging] = useState(false);
    const dragStartRef = useRef({ x: 0, y: 0 });
    const initialPosRef = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        // Only left click drags
        if (e.button !== 0) return;

        setIsDragging(true);
        dragStartRef.current = { x: e.clientX, y: e.clientY };
        initialPosRef.current = { ...position };

        // Prevent default to stop text selection
        e.preventDefault();
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            const dx = e.clientX - dragStartRef.current.x;
            const dy = e.clientY - dragStartRef.current.y;
            setPosition({
                x: initialPosRef.current.x + dx,
                y: initialPosRef.current.y + dy
            });
        };

        const handleMouseUp = () => {
            if (isDragging) {
                setIsDragging(false);
            }
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Handle window resize to reposition button
    useEffect(() => {
        const handleResize = () => {
            if (!isDragging) {
                setPosition(getInitialPosition());
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isDragging]);

    const handleSelect = (path) => {
        navigate(path);
        setIsOpen(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target === overlayRef.current) {
            setIsOpen(false);
        }
    };

    // Helper to check if UI is active
    const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

    console.log("Rendering UiSwitcher", { isOpen });

    return (
        <>
            {/* Floating Shortcut Icon */}
            <button
                onMouseDown={handleMouseDown}
                onClick={(e) => {
                    const dx = e.clientX - dragStartRef.current.x;
                    const dy = e.clientY - dragStartRef.current.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 5) {
                        setIsOpen(true);
                    }
                }}
                style={{
                    position: 'fixed',
                    top: `${position.y}px`,
                    left: `${position.x}px`,
                    zIndex: 999999,
                    cursor: isDragging ? 'grabbing' : 'grab'
                }}
                className="p-2 sm:p-3 bg-white/90 backdrop-blur-md border border-slate-300 rounded-full shadow-2xl hover:scale-105 hover:border-teal-400 active:scale-95 hover:rotate-180 transition-transform duration-500 group flex items-center justify-center select-none touch-none"
                aria-label="Switch UI"
            >
                <div className="relative flex items-center justify-center pointer-events-none">
                    <RefreshCw size={18} className="sm:w-5 sm:h-5 text-slate-600 group-hover:text-teal-600 transition-colors" />
                </div>
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div
                    ref={overlayRef}
                    onClick={handleOverlayClick}
                    className="fixed inset-0 z-[10000] bg-slate-900/10 backdrop-blur-sm flex items-start justify-center pt-[10vh] sm:pt-[15vh] px-3 sm:px-4 animate-fade-in"
                >
                    {/* Command Palette Panel */}
                    <div className="w-full max-w-xl bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-pop-in flex flex-col max-h-[80vh] sm:max-h-[70vh]">

                        {/* Header */}
                        <div className="p-3 sm:p-4 border-b border-slate-100 bg-slate-50/50">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="p-1 bg-teal-100 rounded text-teal-700">
                                        <Command size={14} />
                                    </span>
                                    <h2 className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">Switch UI</h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="hidden sm:inline-block text-xs text-slate-400 font-medium bg-white px-2 py-1 rounded border border-slate-100">ESC to close</span>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                                        aria-label="Close"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* List */}
                        <div className="overflow-y-auto p-2 custom-scrollbar">
                            <div className="grid gap-2">
                                {uis.map((ui) => {
                                    const active = isActive(ui.path);
                                    return (
                                        <button
                                            key={ui.id}
                                            onClick={() => handleSelect(ui.path)}
                                            className={`flex items-center justify-between w-full p-3 rounded-xl text-left border transition-all duration-200 group ${active
                                                ? 'bg-teal-50 border-teal-200 shadow-sm ring-1 ring-teal-100'
                                                : 'bg-transparent border-transparent hover:bg-slate-50 hover:border-slate-100'
                                                }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`flex items-center justify-center w-10 h-10 rounded-lg font-bold font-mono text-sm transition-colors ${active
                                                    ? 'bg-teal-200 text-teal-800'
                                                    : 'bg-slate-100 text-slate-500 group-hover:bg-teal-50 group-hover:text-teal-700'
                                                    }`}>
                                                    {ui.id}
                                                </div>
                                                <div>
                                                    <h3 className={`font-bold transition-colors ${active ? 'text-teal-900' : 'text-slate-800 group-hover:text-teal-700'
                                                        }`}>
                                                        {ui.name}
                                                    </h3>
                                                    <div className="flex items-center gap-2 mt-0.5">
                                                        {ui.tags.map((tag, i) => (
                                                            <span key={i} className={`text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded border transition-colors ${active
                                                                ? 'bg-white text-teal-600 border-teal-200'
                                                                : 'bg-slate-100 text-slate-400 border-slate-200 group-hover:border-teal-100 group-hover:text-teal-500'
                                                                }`}>
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            {active && (
                                                <span className="flex items-center gap-1.5 pr-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
                                                    <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest">Active</span>
                                                </span>
                                            )}
                                            {!active && (
                                                <ArrowRight size={16} className="text-slate-300 group-hover:text-teal-500 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-3 bg-slate-50 border-t border-slate-100 text-[10px] text-slate-400 text-center font-medium uppercase tracking-wider">
                            PageMint by CORE3
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default UiSwitcher;
