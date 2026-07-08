import React, { useState } from 'react';
import { Send, Sparkles, Mail, MapPin } from 'lucide-react';
import Container from '../components/common/Container';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', source: 'Friend', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `*New Lead from PageMint Hub*%0A%0A*Name:* ${formData.name}%0A*Source:* ${formData.source}%0A*Message:* ${formData.message}`;
        const whatsappUrl = `https://wa.me/918451851439?text=${text}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center pt-16 px-4 selection:bg-teal-100 selection:text-teal-900 bg-stone-50 overflow-hidden">
            
            {/* Premium Abstract Background */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>
            
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
                <div className="absolute w-[800px] h-[800px] bg-teal-200/30 rounded-full blur-[120px] mix-blend-multiply animate-blob translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute w-[800px] h-[800px] bg-sky-200/30 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000 -translate-x-1/4 translate-y-1/4"></div>
            </div>

            <Container className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-center h-full min-h-[calc(100vh-80px)]">
                
                <div className="w-full flex flex-col md:flex-row bg-white/80 backdrop-blur-2xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white overflow-hidden animate-fade-in-up">
                    
                    {/* Left Side - Brand & Info */}
                    <div className="w-full md:w-5/12 bg-slate-900 p-8 lg:p-12 text-white relative overflow-hidden flex flex-col justify-between min-h-[250px] md:min-h-[500px]">
                        {/* Decorative dark bg element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-6">
                                <Sparkles size={14} className="text-teal-300" />
                                <span className="text-xs font-semibold tracking-widest uppercase text-teal-100">Let's Connect</span>
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 leading-tight">
                                Have an idea?<br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Let's build it.</span>
                            </h1>
                            <p className="text-slate-400 font-light text-sm leading-relaxed max-w-sm">
                                Skip the forms that go nowhere. Send a message directly to our WhatsApp and let's start the conversation instantly.
                            </p>
                        </div>

                        <div className="relative z-10 mt-8 hidden md:block">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4 text-sm font-medium text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                        <Mail size={16} className="text-teal-400" />
                                    </div>
                                    kaustubh7205@gmail.com
                                </div>
                                <div className="flex items-center gap-4 text-sm font-medium text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                        <MapPin size={16} className="text-teal-400" />
                                    </div>
                                    Mumbai, India
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="w-full md:w-7/12 p-8 lg:p-12 flex items-center">
                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                <div>
                                    <label className="block text-[11px] font-bold text-slate-700 mb-2 uppercase tracking-widest">Full Name</label>
                                    <input 
                                        required 
                                        type="text" 
                                        value={formData.name} 
                                        onChange={e => setFormData({...formData, name: e.target.value})} 
                                        className="w-full bg-slate-50/50 px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm font-medium" 
                                        placeholder="John Doe" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold text-slate-700 mb-2 uppercase tracking-widest">Where did you hear about us?</label>
                                    <select 
                                        required 
                                        value={formData.source} 
                                        onChange={e => setFormData({...formData, source: e.target.value})} 
                                        className="w-full bg-slate-50/50 px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm font-medium"
                                    >
                                        <option value="Friend">Friend</option>
                                        <option value="Colleague">Colleague</option>
                                        <option value="College">College</option>
                                        <option value="Social Media">Social Media</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="mb-8">
                                <label className="block text-[11px] font-bold text-slate-700 mb-2 uppercase tracking-widest">Message</label>
                                <textarea 
                                    required 
                                    rows="3" 
                                    value={formData.message} 
                                    onChange={e => setFormData({...formData, message: e.target.value})} 
                                    className="w-full bg-slate-50/50 px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm font-medium resize-none" 
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                className="w-full flex items-center justify-center gap-3 py-4 bg-slate-900 text-white font-semibold text-sm rounded-xl shadow-lg shadow-slate-200 hover:shadow-xl hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300 group"
                            >
                                <span>Send</span>
                                <Send size={16} className="text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default ContactPage;
