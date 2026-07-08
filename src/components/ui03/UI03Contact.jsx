import React, { useState } from 'react';

const UI03Contact = () => {
    const [focused, setFocused] = useState({});
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const handleFocus = (field) => setFocused(prev => ({ ...prev, [field]: true }));
    const handleBlur = (field) => setFocused(prev => ({ ...prev, [field]: false }));

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    const InputField = ({ name, type = 'text', label, isTextArea = false }) => (
        <div className="relative mb-6">
            <label
                className={`absolute left-4 transition-all duration-200 pointer-events-none ${focused[name] || formState[name]
                        ? 'top-[-10px] text-xs bg-white px-1 text-indigo-600 font-medium'
                        : 'top-3.5 text-slate-400'
                    }`}
            >
                {label}
            </label>
            {isTextArea ? (
                <textarea
                    name={name}
                    value={formState[name]}
                    onChange={handleChange}
                    onFocus={() => handleFocus(name)}
                    onBlur={() => handleBlur(name)}
                    rows="4"
                    className={`w-full bg-white border rounded-xl px-4 py-3 outline-none transition-all duration-300 ${focused[name] ? 'border-indigo-600 shadow-[0_0_0_4px_rgba(79,70,229,0.1)]' : 'border-slate-200 hover:border-slate-300'
                        }`}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={formState[name]}
                    onChange={handleChange}
                    onFocus={() => handleFocus(name)}
                    onBlur={() => handleBlur(name)}
                    className={`w-full bg-white border rounded-xl px-4 py-3 outline-none transition-all duration-300 ${focused[name] ? 'border-indigo-600 shadow-[0_0_0_4px_rgba(79,70,229,0.1)]' : 'border-slate-200 hover:border-slate-300'
                        }`}
                />
            )}
        </div>
    );

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div>
                        <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">Get in Touch</h2>
                        <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                            Let's build something <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">meaningful.</span>
                        </h3>
                        <p className="text-lg text-slate-600 mb-8 max-w-md">
                            Whether you have a project in mind or just want to chat about design and tech, I'm always open to new connections.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {['kaustubhhhh7@gmail.com', 'LinkedIn', 'GitHub'].map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="px-4 py-2 bg-slate-50 text-slate-600 rounded-full font-medium hover:bg-slate-100 hover:text-indigo-600 transition-colors"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="relative">
                        {/* Decorative circle */}
                        <div className="absolute top-[-40px] right-[-40px] w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-60 z-0"></div>

                        <div className="relative z-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                            <form onSubmit={handleSubmit}>
                                <InputField name="name" label="Your Name" />
                                <InputField name="email" type="email" label="Your Email" />
                                <InputField name="message" label="Your Message" isTextArea />

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="relative w-full overflow-hidden bg-slate-900 text-white rounded-xl py-4 font-bold tracking-wide transition-all hover:shadow-lg disabled:opacity-70 group"
                                >
                                    <span className={`relative z-10 flex items-center justify-center ${status === 'success' ? 'opacity-0' : 'opacity-100'}`}>
                                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                    </span>

                                    {/* Success Message Overlay */}
                                    <div className={`absolute inset-0 flex items-center justify-center bg-green-500 transition-all duration-300 ${status === 'success' ? 'translate-y-0' : 'translate-y-full'}`}>
                                        <span className="flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Message Sent!
                                        </span>
                                    </div>

                                    {/* Ripple Effect Placeholder (CSS-based simple hover effect for now, could be advanced with JS) */}
                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl"></div>
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UI03Contact;
