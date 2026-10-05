import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, FileDown } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const ContactSection = ({ onOpenResumeModal }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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
          <div className="text-xs font-mono text-text-muted">
            07 / GET IN TOUCH
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary">
            Contact & Resume
          </h2>
          <p className="text-sm text-text-secondary max-w-xl">
            Open to full-time engineering and product/analyst internship opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Role Resumes & Direct Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Role-specific Resume downloads */}
            <div className="spec-card p-6 space-y-4">
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-text-primary">
                  Role-Specific Resumes
                </h3>
                <p className="text-xs text-text-secondary">
                  Tailored highlights for each specific career track.
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  onClick={() => onOpenResumeModal('engineer')}
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-[#0B1020] border border-[#1F2A44] hover:border-accent-blue/50 text-xs font-mono text-text-primary transition-colors text-left"
                >
                  <span className="flex items-center gap-2">
                    <FileDown className="w-3.5 h-3.5 text-accent-blue" />
                    <span>Software & AI Engineer Resume</span>
                  </span>
                  <span className="text-[11px] text-accent-blue">View / PDF &rarr;</span>
                </button>

                <button
                  onClick={() => onOpenResumeModal('product')}
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-[#0B1020] border border-[#1F2A44] hover:border-indigo-500/50 text-xs font-mono text-text-primary transition-colors text-left"
                >
                  <span className="flex items-center gap-2">
                    <FileDown className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Product Management Resume</span>
                  </span>
                  <span className="text-[11px] text-indigo-400">View / PDF &rarr;</span>
                </button>

                <button
                  onClick={() => onOpenResumeModal('analyst')}
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-[#0B1020] border border-[#1F2A44] hover:border-accent-teal/50 text-xs font-mono text-text-primary transition-colors text-left"
                >
                  <span className="flex items-center gap-2">
                    <FileDown className="w-3.5 h-3.5 text-accent-teal" />
                    <span>Data & Business Analyst Resume</span>
                  </span>
                  <span className="text-[11px] text-accent-teal">View / PDF &rarr;</span>
                </button>
              </div>
            </div>

            {/* Direct Coordinates */}
            <div className="space-y-2 text-xs font-mono text-text-secondary">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-text-muted" />
                <a href={`mailto:${personalInfo.social.email}`} className="text-text-primary hover:text-accent-blue">
                  {personalInfo.social.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-text-muted" />
                <a href={personalInfo.social.github} target="_blank" rel="noreferrer" className="text-text-primary hover:text-accent-blue">
                  github.com/UthejSaiThandlam
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-text-muted" />
                <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer" className="text-text-primary hover:text-accent-blue">
                  linkedin.com/in/thandlam-uthejsai
                </a>
              </div>
            </div>

          </div>

          {/* Right: Clean Message Form (7 cols) */}
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
                    Your email client has opened with pre-filled details. You can also write directly to <strong className="text-accent-blue">{personalInfo.social.email}</strong>.
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
                    className="w-full py-2.5 rounded-lg bg-accent-blue hover:bg-accent-blue/90 text-[#0B1020] font-semibold text-xs font-mono flex items-center justify-center gap-2 transition-colors"
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
