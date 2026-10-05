import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Phone, 
  Mail, 
  Copy, 
  Check, 
  MapPin
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useRole } from '../context/RoleContext';

export const Hero = ({ onOpenResumeModal }) => {
  const { activeLens } = useRole();
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const getLensTitle = () => {
    switch (activeLens) {
      case 'product':
        return 'Product-Minded Engineer';
      case 'analyst':
        return 'Data & Telemetry Engineer';
      case 'engineer':
      default:
        return 'Software Developer';
    }
  };

  const getLensTagline = () => {
    switch (activeLens) {
      case 'product':
        return 'Product-minded builder focused on 0→1 software delivery, clear product specifications, and user-centric features.';
      case 'analyst':
        return 'Data-driven problem solver with hands-on experience turning operational database records into Recharts dashboards, N+1 query tuning, and predictive ML ensembles.';
      case 'engineer':
      default:
        return 'B.Tech CS (AI & ML) 2026 graduate. Building production-ready software systems with Python, Django, React, and Groq/RAG integrations.';
    }
  };

  const bottomTechList = [
    "Python", "Django", "React.js", "MySQL", "Groq LLM", "LangChain RAG", "Docker", "Git", "REST APIs"
  ];

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      
      {/* Background radial glow behind the halo */}
      <div className="absolute top-1/3 right-10 sm:right-20 w-[450px] h-[450px] bg-accent-coral/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 left-10 w-[350px] h-[350px] bg-sky-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        
        {/* Main Hero Row (Matching Jensen Omega layout with Precision Symmetry) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* Left Side: Typography & Buttons (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* 1. "Hello." with coral dot */}
            <div className="flex items-baseline">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">
                Hello
              </span>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-accent-coral ml-1">
                .
              </span>
            </div>

            {/* 2. Coral Horizontal Line + "I'm Thandlam Uthej Sai" */}
            <div className="flex items-center gap-3.5">
              <span className="w-12 sm:w-16 h-[2.5px] bg-accent-coral inline-block rounded-full"></span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-white tracking-tight">
                I'm {personalInfo.name}
              </span>
            </div>

            {/* 3. Big Bold Title (Software Developer / Lens Title) */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.15]">
                {getLensTitle()}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-xl">
                {getLensTagline()}
              </p>
            </div>

            {/* 4. Contact Strip (Phone + Email with 1-click copy) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono">
              {/* Phone */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141B2D] border border-white/[0.08] hover:border-accent-coral/40 transition-colors">
                <a href={`tel:${personalInfo.phone}`} className="text-slate-200 hover:text-accent-coral flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-accent-coral" />
                  <span>{personalInfo.phone}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="text-slate-400 hover:text-white ml-1 p-0.5 transition-colors"
                  title="Copy Phone"
                >
                  {copiedType === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141B2D] border border-white/[0.08] hover:border-accent-coral/40 transition-colors">
                <a href={`mailto:${personalInfo.email}`} className="text-slate-200 hover:text-accent-coral flex items-center gap-1.5 truncate max-w-[210px]">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="text-slate-400 hover:text-white ml-1 p-0.5 transition-colors"
                  title="Copy Email"
                >
                  {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-slate-400 px-2 py-1">
                <MapPin className="w-3.5 h-3.5 text-accent-coral" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* 5. Two Action Buttons (Exact Jensen Omega Style with Enhanced Transitions) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              
              {/* Solid Coral Button: "View Projects" */}
              <a
                href="#projects"
                className="btn-primary-coral px-6 py-3 text-xs sm:text-sm inline-flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Outlined Button: "My resume" */}
              <button
                onClick={() => onOpenResumeModal(activeLens)}
                className="btn-secondary-outline px-6 py-3 text-xs sm:text-sm inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-accent-coral" />
                <span>My resume ({activeLens})</span>
              </button>

            </div>

          </div>

          {/* Right Side: Portrait inside Glowing Circular Halo + Symmetrical Floating Chevrons (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-6">
            
            {/* Symmetrical Relative Halo Wrapper */}
            <div className="relative inline-flex items-center justify-center">

              {/* Left Floating Chevron */}
              <div className="absolute -left-7 sm:-left-10 top-1/2 -translate-y-1/2 pointer-events-none opacity-85 animate-float-slow">
                <svg width="34" height="34" viewBox="0 0 36 36" fill="none" className="w-7 h-7 sm:w-9 sm:h-9">
                  <path d="M25 7 L9 18 L25 29" stroke="#FF6551" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Right Floating Chevron */}
              <div className="absolute -right-7 sm:-right-10 top-1/2 -translate-y-1/2 pointer-events-none opacity-85 animate-float-reverse">
                <svg width="34" height="34" viewBox="0 0 36 36" fill="none" className="w-7 h-7 sm:w-9 sm:h-9">
                  <path d="M11 7 L27 18 L11 29" stroke="#FF6551" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Glowing Coral Concentric Halo Frame */}
              <div className="relative w-60 h-60 xs:w-68 xs:h-68 sm:w-76 sm:h-76 md:w-80 md:h-80 rounded-full coral-halo-frame coral-ring-border flex items-center justify-center p-2.5">
                
                {/* Profile Photo in Suit */}
                <div className="w-full h-full rounded-full overflow-hidden bg-[#111625] relative">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top scale-105 filter brightness-105"
                  />
                </div>

                {/* Floating Verified Badge - Centered */}
                <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-[#0B0F19]/95 backdrop-blur-md border border-accent-coral/60 px-3.5 py-1 rounded-full text-[11px] font-mono text-white flex items-center gap-2 shadow-2xl whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-accent-coral animate-ping" />
                  <span className="font-semibold">Full-Stack & AI Builder</span>
                  <span className="text-slate-500">&bull;</span>
                  <span className="text-slate-300">B.Tech 2026</span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Horizontal Tech Ticker (Exact Jensen Omega bottom strip with Symmetric Spacing) */}
        <div className="pt-8 border-t border-white/[0.08]">
          <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-4 text-xs sm:text-sm font-heading font-medium text-slate-400">
            {bottomTechList.map((tech, idx) => (
              <span 
                key={idx} 
                className="hover:text-white hover:text-accent-coral transition-colors duration-200 cursor-default px-2 py-1 rounded hover:bg-white/[0.04]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
