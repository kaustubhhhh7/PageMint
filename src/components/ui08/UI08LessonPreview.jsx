import React, { useState } from 'react';
import { Maximize2, Minimize2, Copy, Check, Play, Terminal } from 'lucide-react';

const UI08LessonPreview = () => {
    const [focusMode, setFocusMode] = useState(false);
    const [copied, setCopied] = useState(false);
    const [completed, setCompleted] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const codeSnippet = `// Async/Await Example
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}`;

    return (
        <section
            id="preview"
            className={`transition-all duration-500 border-b border-zinc-200 relative ${focusMode ? 'py-12 bg-zinc-900 text-zinc-300' : 'py-24 bg-white text-zinc-600'}`}
        >
            <div className={`mx-auto px-6 transition-all duration-500 ${focusMode ? 'max-w-7xl' : 'max-w-6xl'}`}>

                {/* Header / Controls */}
                <div className="flex justify-between items-end mb-8 border-b border-zinc-200/10 pb-6">
                    <div>
                        <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${focusMode ? 'text-amber-400' : 'text-amber-600'}`}>Lesson Preview</span>
                        <h2 className={`text-2xl font-black ${focusMode ? 'text-white' : 'text-zinc-900'}`}>02. Async/Await & Promises</h2>
                    </div>
                    <button
                        onClick={() => setFocusMode(!focusMode)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider border transition-all ${focusMode
                                ? 'border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
                                : 'border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-600'
                            }`}
                    >
                        {focusMode ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                        {focusMode ? 'Exit Focus' : 'Focus Mode'}
                    </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-0 border border-zinc-200 rounded-xl overflow-hidden shadow-sm">

                    {/* LEFT: Editor / Notes Pane */}
                    <div className={`p-8 border-r border-zinc-200 ${focusMode ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50'}`}>
                        <div className="flex items-center gap-2 mb-6 opacity-50">
                            <Terminal size={16} />
                            <span className="text-xs font-mono uppercase">lesson_notes.md</span>
                        </div>

                        <div className={`prose prose-sm max-w-none ${focusMode ? 'prose-invert' : ''}`}>
                            <h3 className="text-sm font-bold uppercase tracking-wide opacity-70 mb-4">Core Concepts</h3>
                            <ul className="mb-8 space-y-2 text-sm list-none pl-0">
                                <li className="flex gap-2"><span className="text-amber-500 font-mono">01.</span> Promises represent future values.</li>
                                <li className="flex gap-2"><span className="text-amber-500 font-mono">02.</span> Async functions always return a promise.</li>
                                <li className="flex gap-2"><span className="text-amber-500 font-mono">03.</span> Await pauses execution until resolved.</li>
                            </ul>

                            <div className="relative group mt-8">
                                <div className={`absolute -inset-2 rounded-lg transition-opacity ${focusMode ? 'bg-zinc-900' : 'bg-white border border-zinc-200'} opacity-0 group-hover:opacity-100`} />
                                <div className="relative">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-mono opacity-50">example.js</span>
                                        <button
                                            onClick={handleCopy}
                                            className={`p-1.5 rounded hover:bg-zinc-200/10 transition-colors ${copied ? 'text-green-500' : 'text-zinc-500'}`}
                                        >
                                            {copied ? <Check size={14} /> : <Copy size={14} />}
                                        </button>
                                    </div>
                                    <pre className={`p-4 rounded-lg overflow-x-auto text-xs font-mono leading-relaxed ${focusMode ? 'bg-black/50 text-zinc-300' : 'bg-white border border-zinc-200 text-zinc-700'}`}>
                                        <code>{codeSnippet}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Preview / Checklist Pane */}
                    <div className={`p-8 flex flex-col justify-between ${focusMode ? 'bg-zinc-900' : 'bg-white'}`}>
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 border border-amber-200">
                                    <Play size={18} fill="currentColor" />
                                </div>
                                <div>
                                    <h4 className={`font-bold ${focusMode ? 'text-white' : 'text-zinc-900'}`}>Video Walkthrough</h4>
                                    <p className="text-xs text-zinc-500">Duration: 45 min</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h4 className={`text-xs font-bold uppercase tracking-widest ${focusMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Lesson Checklist</h4>
                                {[
                                    "Watch the concept video",
                                    "Clone the starter repository",
                                    "Implement fetchUserData()",
                                    "Handle try/catch errors"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 group cursor-pointer group">
                                        <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center transition-colors ${completed && i === 0 ? 'bg-amber-500 border-amber-500 text-white' : 'border-zinc-300'}`}>
                                            {completed && i === 0 && <Check size={12} />}
                                        </div>
                                        <span className={`text-sm transition-colors ${focusMode ? 'text-zinc-400 group-hover:text-zinc-200' : 'text-zinc-600 group-hover:text-zinc-900'}`}>
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-zinc-200/10">
                            <div className="flex items-center justify-between">
                                <div className="text-xs text-zinc-500">
                                    Progress: <span className="font-mono text-amber-500">25%</span>
                                </div>
                                <button
                                    onClick={() => setCompleted(!completed)}
                                    className={`px-6 py-2 rounded font-bold text-sm transition-all ${completed
                                            ? 'bg-green-100 text-green-700 border border-green-200'
                                            : 'bg-zinc-900 text-white hover:bg-zinc-800'
                                        }`}
                                >
                                    {completed ? 'Completed' : 'Mark as Complete'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default UI08LessonPreview;
