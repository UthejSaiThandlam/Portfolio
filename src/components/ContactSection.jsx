import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, FileDown, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const ContactSection = ({ onOpenResumeModal }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.open(`mailto:${personalInfo.social.email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-24 border-b border-white/[0.06] bg-[#070B14]">
      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="w-10 sm:w-12 h-[2.5px] bg-accent-coral inline-block rounded-full"></span>
            <span className="text-xs font-mono uppercase tracking-[0.14em] text-accent-coral font-bold">
              Get in Touch
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-white">
            Contact & Resumes
          </h2>
          <p className="text-sm text-slate-400 font-sans leading-relaxed">
            Open for full-time engineering and product/analyst roles. Reaching out directly via phone or email is preferred.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Coordinates & Role PDF Downloads (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Coordinates with 1-Click Copy */}
            <div className="spec-card p-5 sm:p-6 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold block">
                Direct Coordinates
              </span>

              {/* Phone */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B0F19] border border-white/[0.08] text-xs font-mono hover:border-accent-coral/40 transition-colors">
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 text-white hover:text-accent-coral">
                  <Phone className="w-3.5 h-3.5 text-accent-coral" />
                  <span>{personalInfo.phone}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                  title="Copy Phone"
                >
                  {copiedType === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B0F19] border border-white/[0.08] text-xs font-mono hover:border-accent-coral/40 transition-colors">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-white hover:text-accent-coral truncate max-w-[210px]">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                  title="Copy Email"
                >
                  {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0B0F19] border border-white/[0.08] text-xs font-mono text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-accent-coral" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Direct Official PDF Downloads */}
            <div className="spec-card p-5 sm:p-6 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold block">
                Download Official Resumes (PDF)
              </span>

              <div className="space-y-2">
                <a
                  href={personalInfo.resumeLinks.engineer}
                  download="Thandlam-Uthej-Sai-Software-Engineer-Resume.pdf"
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#0B0F19] border border-white/[0.08] hover:border-accent-coral/50 text-xs font-mono text-white transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <FileDown className="w-3.5 h-3.5 text-accent-coral" />
                    <span>Software Engineer Resume</span>
                  </span>
                  <span className="text-[10px] text-accent-coral font-bold group-hover:translate-x-0.5 transition-transform">PDF &darr;</span>
                </a>

                <a
                  href={personalInfo.resumeLinks.product}
                  download="Thandlam-Uthej-Sai-Product-Manager-Resume.pdf"
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#0B0F19] border border-white/[0.08] hover:border-indigo-400/50 text-xs font-mono text-white transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <FileDown className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Product Manager Resume</span>
                  </span>
                  <span className="text-[10px] text-indigo-400 font-bold group-hover:translate-x-0.5 transition-transform">PDF &darr;</span>
                </a>

                <a
                  href={personalInfo.resumeLinks.analyst}
                  download="Thandlam-Uthej-Sai-Data-Analyst-Resume.pdf"
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#0B0F19] border border-white/[0.08] hover:border-emerald-400/50 text-xs font-mono text-white transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <FileDown className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Data Analyst Resume</span>
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold group-hover:translate-x-0.5 transition-transform">PDF &darr;</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#111625] border border-white/[0.08] hover:border-white/30 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#111625] border border-white/[0.08] hover:border-accent-coral/40 text-xs font-mono text-slate-300 hover:text-accent-coral transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="spec-card p-6 sm:p-7">
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white font-heading">
                    Message Prepared
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Your email client has opened with pre-filled details. You can also reach me directly at <strong className="text-accent-coral">{personalInfo.phone}</strong> or <strong className="text-accent-coral">{personalInfo.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-slate-400 hover:text-accent-coral underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 block">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0F19] border border-white/[0.08] text-xs text-white focus:outline-none focus:border-accent-coral font-sans transition-colors placeholder:text-slate-600"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 block">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0F19] border border-white/[0.08] text-xs text-white focus:outline-none focus:border-accent-coral font-sans transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the role, project, or opportunity..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0F19] border border-white/[0.08] text-xs text-white focus:outline-none focus:border-accent-coral font-sans resize-none transition-colors placeholder:text-slate-600"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-coral w-full py-3 text-xs sm:text-sm font-heading font-bold flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
