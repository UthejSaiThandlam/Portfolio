import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight,
  FileDown, 
  Mail, 
  Copy, 
  Check, 
  MapPin,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero = ({ onOpenResumeModal }) => {
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const coreTech = [
    "Python", "Django REST", "SQL & MySQL", "Hybrid RAG", "LLM APIs (Groq/Gemini)", "React.js", "Docker"
  ];

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-[#273246]/70">
      
      {/* 1. CUSTOM TECHNICAL SYSTEM SIGNAL PATH BACKGROUND */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        
        {/* Deep ink page background */}
        <div className="absolute inset-0 bg-[#090D15]" />

        {/* System Signal Path Technical Graphic (User Provided Motif) */}
        <div className="system-signal-graphic absolute right-0 top-0 w-full lg:w-2/3 h-full opacity-45 mix-blend-screen pointer-events-none">
          <img
            src="/system-signal-path.png"
            alt="System Signal Path Architecture"
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* Subtle grid lines texture */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #F3F5FA 1px, transparent 1px), linear-gradient(to bottom, #F3F5FA 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Soft coral glow anchored behind the portrait card on the right */}
        <div className="absolute top-1/4 right-1/4 w-[420px] h-[420px] bg-[#FF705C]/12 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-[#61CAE8]/6 blur-[120px] rounded-full pointer-events-none" />

        {/* Left-to-right gradient to ensure text readability */}
        <div className="hero-readability-gradient absolute inset-0 bg-gradient-to-r from-[#090D15] via-[#090D15]/90 to-transparent z-10" />
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-20 space-y-12">
        
        {/* Main Hero Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Dark Editorial Engineering Typography & Pitch (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Bar: Single Hiring Status Line */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121927] border border-[#273246] text-xs font-mono text-[#F3F5FA] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#28C49A] animate-pulse" />
                <span className="text-[#28C49A] font-semibold">Open to SDE &amp; AI Roles</span>
                <span className="text-[#6B7A90]">&bull;</span>
                <span className="text-[#AAB5C6]">Bengaluru &bull; India</span>
              </div>
            </div>

            {/* Category Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-10 sm:w-12 h-[2px] bg-[#FF705C] inline-block rounded-full"></span>
              <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#FF705C] font-bold">
                BACKEND ENGINEERING &bull; APPLIED AI
              </span>
            </div>

            {/* Big Bold Headline */}
            <div className="space-y-3.5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold font-heading text-[#F3F5FA] tracking-tight leading-[1.12]">
                I build backends and AI systems that solve real problems.
              </h1>

              <p className="text-sm sm:text-base text-[#AAB5C6] leading-relaxed font-sans max-w-2xl">
                B.Tech CSE (AI &amp; ML) 2026 graduate focused on <strong className="text-[#F3F5FA] font-semibold">Django REST backends</strong>, <strong className="text-[#F3F5FA] font-semibold">multi-tenant SaaS architectures</strong>, and <strong className="text-[#F3F5FA] font-semibold">LLM-powered applications</strong>. Delivered a production HRMS serving 130+ employees (-80% query bottlenecks) and a live hybrid RAG system.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary-coral px-6 py-3 text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                onClick={() => onOpenResumeModal('engineer')}
                className="btn-secondary-outline px-6 py-3 text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-[#FF705C]" />
                <span>Download Engineer Resume</span>
              </button>
            </div>

            {/* Simplified Contact Row & Secondary Profile Switcher */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-[#AAB5C6]">
              {/* Copy Email Button */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121927] border border-[#273246] hover:border-[#FF705C]/40 transition-colors">
                <a href={`mailto:${personalInfo.email}`} className="text-[#F3F5FA] hover:text-[#FF705C] flex items-center gap-1.5 truncate max-w-[210px]">
                  <Mail className="w-3.5 h-3.5 text-[#61CAE8]" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="text-[#AAB5C6] hover:text-[#F3F5FA] ml-1 p-0.5 transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-[#28C49A]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location indicator */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121927] border border-[#273246] text-[#AAB5C6]">
                <MapPin className="w-3.5 h-3.5 text-[#FF705C]" />
                <span>Bengaluru / Tirupati, India</span>
              </div>

              {/* Secondary Profile Link (Product / Analyst) */}
              <div className="text-[11px] text-[#6B7A90] pl-1">
                Also experienced in{' '}
                <button
                  onClick={() => onOpenResumeModal('product')}
                  className="text-[#61CAE8] hover:underline cursor-pointer"
                >
                  Product
                </button>{' '}
                &amp;{' '}
                <button
                  onClick={() => onOpenResumeModal('analyst')}
                  className="text-[#61CAE8] hover:underline cursor-pointer"
                >
                  Data Analytics
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Single Prominent Professional Portrait with Coral Signal Glow (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-4">
            
            <div className="relative group">
              
              {/* Background Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF705C]/35 to-[#61CAE8]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-500" />
              
              {/* Central Card with Suit Portrait */}
              <div className="relative w-64 sm:w-76 md:w-80 rounded-2xl overflow-hidden bg-[#121927] border-2 border-[#273246] group-hover:border-[#FF705C]/50 shadow-2xl transition-all duration-300">
                
                <div className="aspect-[4/5] w-full overflow-hidden bg-[#090D15]">
                  <img
                    src="/profile-suit.jpg"
                    alt="Thandlam Uthej Sai - Backend & AI/ML Engineer"
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Bottom Spec Badge */}
                <div className="p-3.5 bg-[#0D1320] border-t border-[#273246] space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="font-bold text-[#F3F5FA]">{personalInfo.name}</span>
                    <span className="text-[#28C49A] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#28C49A]" />
                      B.Tech '26
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#AAB5C6]">
                    <span>CGPA 8.23 &bull; Siddharth Inst.</span>
                    <span className="text-[#FF705C]">130+ SaaS Users</span>
                  </div>
                </div>

              </div>

              {/* Subtle Signal Path Accent Pin */}
              <div className="absolute -bottom-3 -right-3 z-30 bg-[#121927] border border-[#FF705C]/60 text-[10px] font-mono text-[#F3F5FA] px-2.5 py-1 rounded-lg shadow-xl flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF705C]" />
                <span>Django REST &bull; Applied AI</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Horizontal Tech Strip */}
        <div className="pt-8 border-t border-[#273246]/60">
          <div className="flex flex-wrap items-center justify-between gap-y-2.5 gap-x-4 text-xs font-mono text-[#AAB5C6]">
            <span className="text-[11px] uppercase tracking-wider text-[#6B7A90] font-semibold">Core Stack:</span>
            {coreTech.map((tech, idx) => (
              <span 
                key={idx} 
                className="hover:text-[#F3F5FA] hover:text-[#FF705C] transition-colors cursor-default px-2.5 py-1 rounded-md bg-[#121927] border border-[#273246]"
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
