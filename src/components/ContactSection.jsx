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
    <section id="contact" className="py-20 md:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-accent-blue font-semibold">
            07 / GET IN TOUCH
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-white">
            Contact & Resumes
          </h2>
          <p className="text-sm text-text-secondary max-w-xl leading-relaxed">
            Available for full-time engineering and product/analyst roles. Reaching out directly is preferred.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Coordinates & Role PDF Downloads (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Coordinates with 1-Click Copy */}
            <div className="spec-card p-5 space-y-3">
              <span className="text-xs font-mono text-text-muted uppercase block">
                Direct Coordinates
              </span>

              {/* Phone */}
              <div className="flex items-center justify-between p-2.5 rounded bg-[#0B1020] border border-[#1F2A44] text-xs font-mono">
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 text-text-primary hover:text-accent-teal">
                  <Phone className="w-3.5 h-3.5 text-accent-teal" />
                  <span>{personalInfo.phone}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-1 text-text-muted hover:text-text-primary transition-colors"
                  title="Copy Phone"
                >
                  {copiedType === 'phone' ? <Check className="w-3.5 h-3.5 text-accent-teal" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-2.5 rounded bg-[#0B1020] border border-[#1F2A44] text-xs font-mono">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-text-primary hover:text-accent-blue truncate max-w-[200px]">
                  <Mail className="w-3.5 h-3.5 text-accent-blue" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-1 text-text-muted hover:text-text-primary transition-colors"
                  title="Copy Email"
                >
                  {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-accent-teal" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 p-2.5 rounded bg-[#0B1020] border border-[#1F2A44] text-xs font-mono text-text-secondary">
                <MapPin className="w-3.5 h-3.5 text-text-muted" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Direct Official PDF Downloads */}
            <div className="spec-card p-5 space-y-3">
              <span className="text-xs font-mono text-text-muted uppercase block">
                Download Official Resumes (PDF)
              </span>

              <div className="space-y-2">
                <a
                  href={personalInfo.resumeLinks.engineer}
                  download="Thandlam-Uthej-Sai-Software-Engineer-Resume.pdf"
                  className="w-full flex items-center justify-between p-2.5 rounded bg-[#0B1020] border border-[#1F2A44] hover:border-accent-blue/50 text-xs font-mono text-text-primary transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FileDown className="w-3.5 h-3.5 text-accent-blue" />
                    <span>Software Engineer Resume</span>
                  </span>
                  <span className="text-[10px] text-accent-blue">PDF &darr;</span>
                </a>

                <a
                  href={personalInfo.resumeLinks.product}
                  download="Thandlam-Uthej-Sai-Product-Manager-Resume.pdf"
                  className="w-full flex items-center justify-between p-2.5 rounded bg-[#0B1020] border border-[#1F2A44] hover:border-indigo-500/50 text-xs font-mono text-text-primary transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FileDown className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Product Manager Resume</span>
                  </span>
                  <span className="text-[10px] text-indigo-400">PDF &darr;</span>
                </a>

                <a
                  href={personalInfo.resumeLinks.analyst}
                  download="Thandlam-Uthej-Sai-Data-Analyst-Resume.pdf"
                  className="w-full flex items-center justify-between p-2.5 rounded bg-[#0B1020] border border-[#1F2A44] hover:border-accent-teal/50 text-xs font-mono text-text-primary transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FileDown className="w-3.5 h-3.5 text-accent-teal" />
                    <span>Data Analyst Resume</span>
                  </span>
                  <span className="text-[10px] text-accent-teal">PDF &darr;</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded bg-[#121A2F] border border-[#1F2A44] hover:border-text-secondary text-xs font-mono text-text-secondary hover:text-text-primary transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded bg-[#121A2F] border border-[#1F2A44] hover:border-text-secondary text-xs font-mono text-text-secondary hover:text-accent-blue transition-colors"
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
                  <div className="w-10 h-10 rounded-full bg-accent-teal/10 border border-accent-teal/30 text-accent-teal flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-text-primary">
                    Message Prepared
                  </h4>
                  <p className="text-xs text-text-secondary max-w-sm mx-auto">
                    Your email client has opened with pre-filled details. You can also reach me directly at <strong className="text-accent-blue">{personalInfo.phone}</strong> or <strong className="text-accent-blue">{personalInfo.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-text-muted hover:text-text-primary underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-text-secondary block">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3 py-2 rounded-lg bg-[#0B1020] border border-[#1F2A44] text-xs text-text-primary focus:outline-none focus:border-accent-blue font-sans"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-text-secondary block">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@company.com"
                        className="w-full px-3 py-2 rounded-lg bg-[#0B1020] border border-[#1F2A44] text-xs text-text-primary focus:outline-none focus:border-accent-blue font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-text-secondary block">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the role, project, or opportunity..."
                      className="w-full px-3 py-2 rounded-lg bg-[#0B1020] border border-[#1F2A44] text-xs text-text-primary focus:outline-none focus:border-accent-blue font-sans resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-accent-blue hover:bg-accent-blue/90 text-[#0B1020] font-semibold text-xs font-mono flex items-center justify-center gap-2 transition-colors shadow-md shadow-accent-blue/20"
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
