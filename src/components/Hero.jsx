import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Database,
  Layers,
  Code2
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useRole } from '../context/RoleContext';

export const Hero = ({ onOpenResumeModal }) => {
  const { activeLens, setActiveLens } = useRole();
  const [copiedType, setCopiedType] = useState(null);
  const [activeSim, setActiveSim] = useState('org');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const getLensSubtitle = () => {
    switch (activeLens) {
      case 'product':
        return 'Product-minded builder who shipped a live HRMS to 130+ daily users as sole full-stack owner. Comfortable turning ambiguous requests into high-adoption software.';
      case 'analyst':
        return 'Data-driven thinker turning raw operational telemetry and MySQL schemas into clean Recharts dashboards, predictive ensembles, and business decisions.';
      case 'engineer':
      default:
        return 'Specialized in Python (Django/DRF), React, multi-tenant architecture, and Groq/RAG integrations. Built and optimized a live production platform serving 130+ employees.';
    }
  };

  return (
    <section className="pt-10 pb-16 md:pt-16 md:pb-20 border-b border-[#1F2A44] relative overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Top Eyebrow & Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121A2F] border border-[#1F2A44] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
            <span className="text-text-secondary">{personalInfo.status}</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <MapPin className="w-3.5 h-3.5 text-accent-blue" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Profile Photo & Quick Coordinates (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            
            {/* User Profile Photo with Interactive Glow */}
            <div className="relative group">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-accent-blue/30 shadow-xl shadow-accent-blue/10 group-hover:border-accent-blue transition-all duration-300">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top filter brightness-105 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-2 -right-2 bg-[#0B1020] border border-[#1F2A44] px-2.5 py-1 rounded-lg text-[10px] font-mono text-accent-teal flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-accent-teal animate-ping" />
                <span>130+ Live Users</span>
              </div>
            </div>

            {/* Quick Interactive Contact Strip */}
            <div className="w-full space-y-2 pt-2">
              {/* Phone with 1-click copy */}
              <div className="flex items-center justify-between p-2 rounded-lg bg-[#121A2F] border border-[#1F2A44] text-xs font-mono">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 text-text-primary hover:text-accent-blue transition-colors"
                >
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

              {/* Email with 1-click copy */}
              <div className="flex items-center justify-between p-2 rounded-lg bg-[#121A2F] border border-[#1F2A44] text-xs font-mono">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-text-primary hover:text-accent-blue transition-colors truncate max-w-[200px]"
                >
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
            </div>

          </div>

          {/* Right Column: Narrative, Interactive Lens & CTAs (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="space-y-2.5">
              <span className="text-[11px] font-mono text-accent-blue tracking-[0.14em] uppercase font-semibold block">
                {personalInfo.eyebrow}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] font-heading text-white leading-[1.08]">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold tracking-[-0.015em] font-heading text-text-primary leading-snug">
                {personalInfo.heroHeadline}{' '}
                <span className="text-text-secondary font-normal">
                  {personalInfo.heroSubhead}
                </span>
              </p>
            </div>

            {/* Dynamic Lens Subtitle */}
            <div className="p-4 rounded-xl bg-[#121A2F] border border-[#1F2A44] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                  Perspective Lens ({activeLens.toUpperCase()})
                </span>
                <span className="text-[10px] font-mono text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded border border-accent-blue/30">
                  Adaptive
                </span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {getLensSubtitle()}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-blue hover:bg-accent-blue/90 text-[#0B1020] font-semibold text-xs font-mono transition-colors shadow-md shadow-accent-blue/20"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => onOpenResumeModal(activeLens)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#1F2A44] hover:border-accent-blue text-text-primary text-xs font-mono transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-accent-blue" />
                <span>Download Resume</span>
              </button>

              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-[#1F2A44] hover:border-text-secondary text-text-secondary hover:text-text-primary text-xs font-mono transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-[#1F2A44] hover:border-text-secondary text-text-secondary hover:text-text-primary text-xs font-mono transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Interactive Live HRMS Simulation Widget (Proves Groq Chatbot, O(n) Org Tree, N+1 Query Fix) */}
            <div className="pt-2">
              <div className="spec-card p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1F2A44] pb-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-text-primary font-semibold">
                    <Terminal className="w-3.5 h-3.5 text-accent-teal" />
                    <span>Interactive Z.APPS Architecture Console</span>
                  </div>
                  <span className="text-[10px] font-mono text-accent-teal flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse" />
                    Live Simulation
                  </span>
                </div>

                {/* Simulation Mode Buttons */}
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setActiveSim('org')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeSim === 'org' ? 'bg-accent-blue text-[#0B1020] font-bold' : 'bg-[#0B1020] text-text-muted hover:text-text-primary border border-[#1F2A44]'
                    }`}
                  >
                    O(n) Org Tree Algorithm
                  </button>
                  <button
                    onClick={() => setActiveSim('query')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeSim === 'query' ? 'bg-accent-teal text-[#0B1020] font-bold' : 'bg-[#0B1020] text-text-muted hover:text-text-primary border border-[#1F2A44]'
                    }`}
                  >
                    N+1 Query Refactor
                  </button>
                  <button
                    onClick={() => setActiveSim('ai')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeSim === 'ai' ? 'bg-indigo-500 text-white font-bold' : 'bg-[#0B1020] text-text-muted hover:text-text-primary border border-[#1F2A44]'
                    }`}
                  >
                    Groq LLM AI Assistant
                  </button>
                </div>

                {/* Console Output */}
                <div className="p-3 rounded-lg bg-[#0B1020] border border-[#1F2A44] font-mono text-xs text-text-secondary space-y-1">
                  {activeSim === 'org' && (
                    <>
                      <div className="text-text-muted">// Single-pass hierarchy builder with cycle detection:</div>
                      <div>Input: 130 nodes with multi-root departments</div>
                      <div className="text-accent-teal">Processed in: 1.4ms (Complexity: O(n), Cycle check: OK)</div>
                      <div className="text-text-primary">&rarr; Visual org tree mapped without recursive DB queries.</div>
                    </>
                  )}

                  {activeSim === 'query' && (
                    <>
                      <div className="text-text-muted">// Bulk role-map refactor comparison:</div>
                      <div className="text-amber-400">Before: 184 individual queries &bull; Latency: ~1,200ms</div>
                      <div className="text-accent-teal">After: 3 batched queries &bull; Latency: 185ms (84% drop)</div>
                      <div className="text-text-primary">&rarr; Eliminated page lag for 130+ active employees.</div>
                    </>
                  )}

                  {activeSim === 'ai' && (
                    <>
                      <div className="text-text-muted">// Groq LLM with dual auth paths (JWT / Emp ID):</div>
                      <div className="text-text-primary">User: "Check remaining maternity & casual leave balance"</div>
                      <div className="text-indigo-400">Auth: RBAC-scoped &bull; Audit logged &bull; Tenant: Z.APPS-01</div>
                      <div className="text-accent-teal">Groq AI: "Casual: 4 days remaining. Earned: 11 days. Zero disputes."</div>
                    </>
                  )}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
