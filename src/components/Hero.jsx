import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Phone, 
  Mail, 
  Copy, 
  Check, 
  Terminal, 
  ExternalLink,
  ShieldCheck,
  Cpu,
  Layers,
  FileDown
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
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

  const getLensHeadline = () => {
    switch (activeLens) {
      case 'product':
        return {
          role: "Product-Minded Builder",
          focus: "0→1 Product Ownership & Growth",
          description: "Shipped a live multi-tenant SaaS to 130+ daily active users as sole full-stack owner — scoping features from vague requirements to deployed production."
        };
      case 'analyst':
        return {
          role: "Data & Telemetry Engineer",
          focus: "SQL Modeling & Predictive Analytics",
          description: "Hands-on experience turning operational relational data (MySQL) into interactive Recharts dashboards, N+1 query tuning, and dual-stacked ML ensembles."
        };
      case 'engineer':
      default:
        return {
          role: "AI RAG & Full-Stack",
          focus: "Specialist & Systems Builder",
          description: "I build production-ready software with Python, Django, React, and Groq/RAG — shipped a live multi-tenant SaaS to 130+ enterprise employees at Z.APPS."
        };
    }
  };

  const lensData = getLensHeadline();

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-dev-grid">
      
      {/* Background radial glow accents (inspired by Image 1 & 2) */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-purple-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        
        {/* Hero Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Inspired directly by Image 1 */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Available Badge (Image 1 Style) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-cyan-300 font-medium">Available for Full-Stack & AI Roles</span>
            </div>

            {/* 2. Name & Giant Gradient Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] font-heading text-white">
                {personalInfo.name}
              </h1>

              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-[-0.025em] leading-[1.15]">
                <span className="gradient-text-cyan-purple">
                  {lensData.role}
                </span>
                <span className="block text-white">
                  {lensData.focus}
                </span>
              </div>
            </div>

            {/* 3. Punchy Crisp Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-xl">
              {lensData.description}
            </p>

            {/* 4. Action Buttons (Matching Image 1 CTAs) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              
              {/* Primary Gradient CTA */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 hover:opacity-95 text-slate-950 font-heading font-bold text-xs shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Secondary Dark Glassmorphic Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0E172A]/80 hover:bg-[#16223D] border border-white/10 text-white font-heading font-semibold text-xs transition-colors"
              >
                <span>Get in touch</span>
              </a>

              {/* Resume Trigger */}
              <button
                onClick={() => onOpenResumeModal(activeLens)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-slate-900 hover:bg-slate-850 border border-slate-700/80 text-cyan-300 font-mono text-xs transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume ({activeLens})</span>
              </button>

            </div>

            {/* 5. Production AI Tech Bullet Strip (Matching Image 1 bottom strip) */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Production AI Projects
              </span>
              <span>&bull;</span>
              <span>Groq LLM</span>
              <span>&bull;</span>
              <span>LangChain & RAG</span>
              <span>&bull;</span>
              <span>Django REST</span>
              <span>&bull;</span>
              <span>React.js</span>
            </div>

          </div>

          {/* Right Column (5 cols): Photo Card & Profile HUD Scan (Image 1 & 2 Style) */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start lg:items-end">
            
            <div className="w-full max-w-[340px] space-y-4">
              
              {/* Photo Card with Floating Specialty Badge (Image 1) */}
              <div className="relative rounded-2xl overflow-hidden spec-card photo-glow border border-cyan-500/30 group">
                <div className="aspect-[4/4.6] w-full overflow-hidden bg-slate-900">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter brightness-105 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Bottom Specialty Badge (Image 1 style) */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#070B14]/90 backdrop-blur-md border border-white/10 space-y-0.5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block tracking-wider">
                    Specialty Focus
                  </span>
                  <div className="text-xs font-bold font-mono text-cyan-300 truncate">
                    Multi-Tenant SaaS &bull; Groq RAG &bull; 130+ Users
                  </div>
                </div>
              </div>

              {/* Profile Scan HUD Micro-Grid (Image 2 style) */}
              <div className="spec-card p-3.5 space-y-2.5 text-xs font-mono">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5">
                  <span className="text-[10px] text-slate-400 tracking-wider">PROFILE.SCAN</span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    ONLINE
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase">Focus</span>
                    <span className="text-slate-200">AI-Powered SaaS</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase">Stack</span>
                    <span className="text-slate-200">Django + React</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase">Signal</span>
                    <span className="text-cyan-400">130+ Live Users</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase">Phone</span>
                    <button
                      onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                      className="text-slate-200 hover:text-cyan-400 inline-flex items-center gap-1"
                    >
                      <span>{personalInfo.phone}</span>
                      {copiedType === 'phone' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400" />}
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Big Centered "About" Statement Block (Directly from Image 1) */}
        <div id="about" className="pt-6 border-t border-white/[0.06] text-center max-w-3xl mx-auto space-y-4">
          <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-cyan-400 font-bold">
            ABOUT
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-white leading-snug">
            I design and ship software systems that combine{' '}
            <span className="text-cyan-400 font-bold">multi-tenant backends</span>,{' '}
            <span className="text-purple-400 font-bold">Groq & RAG AI pipelines</span>, and{' '}
            <span className="text-sky-300 font-bold">full-stack engineering</span> to automate real business workflows.
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans max-w-2xl mx-auto">
            From diagnosing critical N+1 database performance bottlenecks to architecting O(n) org chart algorithms, my projects focus on accuracy, scalability, and clean architecture — not just demos.
          </p>
        </div>

      </div>
    </section>
  );
};
