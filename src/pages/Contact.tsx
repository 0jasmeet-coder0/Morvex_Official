'use client';
import { useState } from 'react';
import { useEffect } from 'react';
import { Mail, MapPin, Phone, Github, Twitter, Linkedin, Send } from 'lucide-react';

export default function Contact() {

  useEffect(() => {
  document.title = 'MOVEX || Contacts';
}, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const [talkFormData, setTalkFormData] = useState({
    name: '',
    company: '',
    email: '',
    type: 'partnership',
    message: '',
  });
  const [talkSubmitted, setTalkSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTalkChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTalkFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleTalkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTalkSubmitted(true);
    setTimeout(() => {
      setTalkFormData({ name: '', company: '', email: '', type: 'partnership', message: '' });
      setTalkSubmitted(false);
    }, 3000);
  };

  return (
    <main className="bg-black text-white">
       <section className="py-32 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">LET'S TALK</h2>
            <p className="text-xl text-gray-500 font-light">
              Interested in partnerships, investments, or collaboration? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="border-l-2 border-white/20 pl-6">
              <h3 className="text-sm tracking-[0.3em] text-gray-500 mb-3 font-light">PARTNERSHIPS</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Looking to collaborate on innovative projects? We're always interested in strategic partnerships.
              </p>
            </div>
            <div className="border-l-2 border-white/20 pl-6">
              <h3 className="text-sm tracking-[0.3em] text-gray-500 mb-3 font-light">INVESTMENTS</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                We're building the future of interactive entertainment. Join us in this journey.
              </p>
            </div>
            <div className="border-l-2 border-white/20 pl-6">
              <h3 className="text-sm tracking-[0.3em] text-gray-500 mb-3 font-light">COLLABORATION</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                From artists to technologists, we welcome visionaries ready to create magic.
              </p>
            </div>
          </div>

          <form onSubmit={handleTalkSubmit} className="max-w-3xl">
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm tracking-[0.3em] text-gray-500 mb-4 font-light">FULL NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={talkFormData.name}
                    onChange={handleTalkChange}
                    required
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm tracking-[0.3em] text-gray-500 mb-4 font-light">COMPANY</label>
                  <input
                    type="text"
                    name="company"
                    value={talkFormData.company}
                    onChange={handleTalkChange}
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm tracking-[0.3em] text-gray-500 mb-4 font-light">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={talkFormData.email}
                  onChange={handleTalkChange}
                  required
                  className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm tracking-[0.3em] text-gray-500 mb-4 font-light">INQUIRY TYPE</label>
                <select
                  name="type"
                  value={talkFormData.type}
                  onChange={handleTalkChange}
                  className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                >
                  <option value="partnership">Partnership</option>
                  <option value="investment">Investment</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm tracking-[0.3em] text-gray-500 mb-4 font-light">MESSAGE</label>
                <textarea
                  name="message"
                  value={talkFormData.message}
                  onChange={handleTalkChange}
                  required
                  rows={6}
                  className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  placeholder="Tell us about your vision..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative px-12 py-4 text-lg font-medium tracking-wider border-2 border-white hover:bg-white hover:text-black transition-all duration-500 overflow-hidden flex items-center gap-3"
                >
                  <span className="relative z-10">
                    {talkSubmitted ? 'MESSAGE SENT' : 'SEND MESSAGE'}
                  </span>
                  {!talkSubmitted && (
                    <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  )}
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </button>
              </div>
            </div>
          </form>

          {talkSubmitted && (
            <div className="mt-8 p-6 border border-green-500/30 bg-green-500/10 text-green-400">
              <p className="font-light">Thank you for reaching out. We'll be in touch soon.</p>
            </div>
          )}
        </div>
      </section>
       </main>       
); }
          
