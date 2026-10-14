import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  FileDown, 
  Copy, 
  Check
} from 'lucide-react';
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
    const subject = encodeURIComponent(`Engineering Opportunity / Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.open(`mailto:${personalInfo.social.email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="section-wrapper bg-[#090D15] relative overflow-hidden">
      
      {/* CLIFFTOP WORKSPACE BACKGROUND IMAGE (Clear & Atmospheric) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Scenic anime clifftop remote work landscape */}
        <img
          src="/hero-sunset.jpg"
          alt="Clifftop Remote Workspace"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.1] transition-opacity duration-700"
        />

        {/* Top gradient blend: seamless transition from Education section above */}
        <div className="contact-fade-top absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#090D15] via-[#090D15]/75 to-transparent" />

        {/* Soft horizontal vignette for card readability while keeping scenic view vivid */}
        <div className="contact-fade-vignette absolute inset-0 bg-gradient-to-r from-[#090D15]/75 via-[#090D15]/45 to-[#090D15]/75" />

        {/* Bottom gradient blend into Footer */}
        <div className="contact-fade-bottom absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#090D15] via-[#090D15]/85 to-transparent" />
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#273246]/70">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#FF705C] inline-block rounded-full"></span>
              <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#FF705C] font-bold">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#F3F5FA] tracking-tight">
              Contact &amp; Resume Access
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#AAB5C6] font-sans max-w-md leading-relaxed sm:text-right">
            Open for full-time Software Engineer (SDE), Backend, and Applied AI roles. Direct outreach is welcomed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Coordinates & Role PDF Downloads (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Coordinates with 1-Click Copy */}
            <div className="spec-card p-6 space-y-4 bg-[#121927]/90 backdrop-blur-xl border border-[#273246]/90 shadow-2xl">
              <span className="text-xs font-mono text-[#6B7A90] uppercase tracking-wider font-bold block">
                Direct Coordinates
              </span>

              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#090D15]/90 backdrop-blur-md border border-[#273246] text-xs font-mono hover:border-[#FF705C]/50 transition-colors">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2.5 text-[#F3F5FA] hover:text-[#FF705C] truncate max-w-[220px]">
                  <Mail className="w-4 h-4 text-[#61CAE8]" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-1 text-[#AAB5C6] hover:text-[#F3F5FA] transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-[#28C49A]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#090D15]/90 backdrop-blur-md border border-[#273246] text-xs font-mono hover:border-[#FF705C]/50 transition-colors">
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2.5 text-[#F3F5FA] hover:text-[#FF705C]">
                  <Phone className="w-4 h-4 text-[#FF705C]" />
                  <span>{personalInfo.phone}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-1 text-[#AAB5C6] hover:text-[#F3F5FA] transition-colors cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-[#28C49A]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#090D15]/90 backdrop-blur-md border border-[#273246] text-xs font-mono text-[#AAB5C6]">
                <MapPin className="w-4 h-4 text-[#FF705C]" />
                <span>{personalInfo.location} &bull; Open to Relocation</span>
              </div>
            </div>

            {/* Direct Official PDF Downloads */}
            <div className="spec-card p-6 space-y-4 bg-[#121927]/90 backdrop-blur-xl border border-[#273246]/90 shadow-2xl">
              <span className="text-xs font-mono text-[#6B7A90] uppercase tracking-wider font-bold block">
                Official Resume Downloads
              </span>

              <div className="space-y-2.5">
                <a
                  href={personalInfo.resumeLinks.engineer}
                  download="Thandlam-Uthej-Sai-Software-Engineer-Resume.pdf"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-[#090D15]/90 backdrop-blur-md border border-[#273246] hover:border-[#FF705C]/60 text-xs font-mono text-[#F3F5FA] transition-colors group"
                >
                  <span className="flex items-center gap-2.5">
                    <FileDown className="w-4 h-4 text-[#FF705C]" />
                    <span className="font-bold">Software Engineer Resume (Primary)</span>
                  </span>
                  <span className="text-[10px] text-[#FF705C] font-bold group-hover:translate-x-0.5 transition-transform">PDF &darr;</span>
                </a>

                {/* Secondary Role Downloads */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={personalInfo.resumeLinks.product}
                    download="Thandlam-Uthej-Sai-Product-Resume.pdf"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#090D15]/90 backdrop-blur-md border border-[#273246] text-[11px] font-mono text-[#AAB5C6] hover:text-[#61CAE8] hover:border-[#61CAE8]/50 transition-colors"
                  >
                    <span>Product Resume</span>
                    <span className="text-[10px] text-[#61CAE8]">&darr;</span>
                  </a>

                  <a
                    href={personalInfo.resumeLinks.analyst}
                    download="Thandlam-Uthej-Sai-Analyst-Resume.pdf"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#090D15]/90 backdrop-blur-md border border-[#273246] text-[11px] font-mono text-[#AAB5C6] hover:text-[#28C49A] hover:border-[#28C49A]/50 transition-colors"
                  >
                    <span>Analyst Resume</span>
                    <span className="text-[10px] text-[#28C49A]">&darr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#121927]/90 backdrop-blur-xl border border-[#273246]/90 hover:border-[#F3F5FA]/40 text-xs font-mono text-[#AAB5C6] hover:text-[#F3F5FA] transition-colors shadow-lg"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile ↗</span>
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#121927]/90 backdrop-blur-xl border border-[#273246]/90 hover:border-[#FF705C]/50 text-xs font-mono text-[#AAB5C6] hover:text-[#FF705C] transition-colors shadow-lg"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile ↗</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="spec-card p-6 sm:p-8 bg-[#121927]/90 backdrop-blur-xl border border-[#273246]/90 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#28C49A]/15 border border-[#28C49A]/30 text-[#28C49A] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#F3F5FA] font-heading">
                    Message Draft Prepared
                  </h4>
                  <p className="text-xs text-[#AAB5C6] max-w-sm mx-auto leading-relaxed">
                    Your email client has opened with pre-filled details. You can also reach me directly at <strong className="text-[#FF705C]">{personalInfo.email}</strong> or <strong className="text-[#FF705C]">{personalInfo.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[#61CAE8] hover:underline pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#AAB5C6] block">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex (Engineering Recruiter)"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090D15] border border-[#273246] text-xs text-[#F3F5FA] focus:outline-none focus:border-[#FF705C] font-sans transition-colors placeholder:text-[#6B7A90]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#AAB5C6] block">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090D15] border border-[#273246] text-xs text-[#F3F5FA] focus:outline-none focus:border-[#FF705C] font-sans transition-colors placeholder:text-[#6B7A90]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#AAB5C6] block">Role Details or Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding the role, team, technical stack, or project..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090D15] border border-[#273246] text-xs text-[#F3F5FA] focus:outline-none focus:border-[#FF705C] font-sans resize-none transition-colors placeholder:text-[#6B7A90]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-coral w-full py-3.5 text-xs sm:text-sm font-heading font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Direct Message</span>
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
