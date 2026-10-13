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
  const [greeting] = useState(() => {
    if (typeof window === 'undefined') return "Hello";
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning!";
    if (hour < 18) return "Good afternoon!";
    return "Good evening!";
  });

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
        return 'Backend & AI/ML Engineer';
    }
  };

  const getLensTagline = () => {
    switch (activeLens) {
      case 'product':
        return 'Product-minded builder focused on 0→1 software delivery, clear product specifications, and user-centric features.';
      case 'analyst':
        return 'Data-driven problem solver with hands-on experience turning operational database records into reports, N+1 query tuning, and predictive ML ensembles.';
      case 'engineer':
      default:
        return 'B.Tech CSE (AI & ML) 2026 graduate. Builds Django REST backends and LLM-powered systems and ships them live. Delivered multi-tenant SaaS for 130+ employees, live RAG application, and 98% accuracy stacked ML ensembles.';
    }
  };

  const bottomTechList = [
    "Python", "Django", "Django REST", "React.js", "RAG Pipelines", "Google Gemini", "Groq Llama 3.3", "MySQL", "Scikit-Learn", "REST APIs"
  ];

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 sm:right-20 w-[450px] h-[450px] bg-accent-coral/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 left-10 w-[350px] h-[350px] bg-sky-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10 space-y-14">
        
        {/* Main Hero Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Side: Typography & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Dynamic Greeting Badge (Image 3 Style: "Good morning! I'm Uthej, and I work as a Software Engineer.") */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-indigo-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{greeting}</span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-slate-300">Bengaluru & Tirupati</span>
            </div>

            {/* Coral Horizontal Line + Name */}
            <div className="flex items-center gap-3.5">
              <span className="w-12 sm:w-16 h-[2.5px] bg-[#f5a285] inline-block rounded-full"></span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-white tracking-tight">
                I'm {personalInfo.name}
              </span>
            </div>

            {/* Big Bold Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.15]">
                {getLensTitle()}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-xl">
                {getLensTagline()}
              </p>
            </div>

            {/* Contact Strip (Phone + Email with 1-click copy) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono">
              {/* Phone */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141B2D] border border-white/[0.08] hover:border-[#f5a285]/40 transition-colors">
                <a href={`tel:${personalInfo.phone}`} className="text-slate-200 hover:text-[#f5a285] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#f5a285]" />
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
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141B2D] border border-white/[0.08] hover:border-[#f5a285]/40 transition-colors">
                <a href={`mailto:${personalInfo.email}`} className="text-slate-200 hover:text-[#f5a285] flex items-center gap-1.5 truncate max-w-[210px]">
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
                <MapPin className="w-3.5 h-3.5 text-[#f5a285]" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-[#f5a285] hover:bg-[#ffb399] text-slate-950 font-bold text-xs sm:text-sm font-heading shadow-md shadow-[#f5a285]/20 inline-flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-100"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                onClick={() => onOpenResumeModal(activeLens)}
                className="px-6 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.12] hover:border-white/30 text-xs sm:text-sm font-mono font-semibold inline-flex items-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4 text-[#f5a285]" />
                <span>My Resume ({activeLens})</span>
              </button>
            </div>

          </div>

          {/* Right Side: Trio Photo Collage (Replicating Image 3 Header Collage) */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-4">
            
            <div className="relative flex items-center justify-center">
              
              {/* Photo 1 (Tilted Left: Street / Hoodie) */}
              <div className="w-28 sm:w-34 h-40 sm:h-46 rounded-2xl overflow-hidden bg-slate-900 border-2 border-white/20 shadow-2xl transform -rotate-12 -mr-6 hover:rotate-0 hover:z-30 transition-all duration-300 group/p1">
                <img
                  src="/uthej-black-hoodie.jpg"
                  alt="Uthej Street Style"
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover/p1:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Photo 2 (Center - Prominent: Red Shirt Portrait) */}
              <div className="relative z-20 w-38 sm:w-46 h-54 sm:h-60 rounded-2xl overflow-hidden bg-slate-900 border-2 border-[#f5a285] shadow-2xl shadow-[#f5a285]/20 hover:scale-105 transition-all duration-300 group/p2">
                <img
                  src="/uthej-red-shirt.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top filter brightness-105 group-hover/p2:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-slate-950/85 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/10 text-center">
                  <span className="text-[10px] font-mono font-bold text-white block truncate">
                    B.Tech CSE '26 · CGPA 8.23
                  </span>
                </div>
              </div>

              {/* Photo 3 (Tilted Right: White Shirt Portrait) */}
              <div className="w-28 sm:w-34 h-40 sm:h-46 rounded-2xl overflow-hidden bg-slate-900 border-2 border-white/20 shadow-2xl transform rotate-12 -ml-6 hover:rotate-0 hover:z-30 transition-all duration-300 group/p3">
                <img
                  src="/uthej-white-shirt.jpg"
                  alt="Uthej Engineer Outdoors"
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover/p3:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 bg-[#0B0F19]/95 backdrop-blur-md border border-[#f5a285]/60 px-4 py-1.5 rounded-full text-[11px] font-mono text-white flex items-center gap-2 shadow-2xl whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#f5a285] animate-ping" />
                <span className="font-semibold text-white">Full-Stack & AI Builder</span>
                <span className="text-slate-500">&bull;</span>
                <span className="text-[#f5a285] font-mono">130+ SaaS Users</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Horizontal Tech Strip */}
        <div className="pt-6 border-t border-white/[0.08]">
          <div className="flex flex-wrap items-center justify-between gap-y-2.5 gap-x-4 text-xs font-mono font-medium text-slate-400">
            {bottomTechList.map((tech, idx) => (
              <span 
                key={idx} 
                className="hover:text-white hover:text-[#f5a285] transition-colors cursor-default px-2 py-1 rounded hover:bg-white/[0.04]"
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

