import React from 'react';
import { ArrowRight, FileText, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useRole } from '../context/RoleContext';

export const Hero = ({ onOpenResumeModal }) => {
  const { activeLens } = useRole();

  // Dynamic lens highlight line
  const getLensSubtitle = () => {
    switch (activeLens) {
      case 'product':
        return 'Product-minded builder who ships to real users with clear requirements & telemetry.';
      case 'analyst':
        return 'Data-driven builder turning operational database records into business clarity.';
      case 'engineer':
      default:
        return 'Specialized in Python backend, PostgreSQL optimization, and multi-tenant SaaS architecture.';
    }
  };

  return (
    <section className="pt-14 pb-16 md:pt-20 md:pb-24 border-b border-[#1F2A44] relative">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Left: 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top eyebrow */}
            <div className="font-mono text-xs text-text-muted tracking-wider">
              {personalInfo.eyebrow}
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.1]">
                {personalInfo.name}
              </h1>

              <p className="text-xl sm:text-2xl text-text-primary font-medium leading-snug">
                {personalInfo.heroHeadline}{' '}
                <span className="text-text-secondary font-normal">
                  {personalInfo.heroSubhead}
                </span>
              </p>
            </div>

            {/* Dynamic lens subtext */}
            <p className="text-sm text-text-secondary font-sans leading-relaxed max-w-xl">
              {getLensSubtitle()}
            </p>

            {/* 4 Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-blue hover:bg-accent-blue/90 text-[#0B1020] font-semibold text-xs font-mono transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => onOpenResumeModal(activeLens)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#1F2A44] hover:border-text-secondary text-text-primary text-xs font-mono transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-accent-blue" />
                <span>Resume</span>
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

            {/* Status Line */}
            <div className="pt-2 text-xs font-mono text-text-muted flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-teal"></span>
              <span>{personalInfo.status}</span>
            </div>

          </div>

          {/* Right Side: The 3 Honest Layers (5 cols) */}
          <div className="lg:col-span-5">
            <div className="spec-card p-5 sm:p-6 space-y-4">
              
              <div className="flex items-center justify-between border-b border-[#1F2A44] pb-3">
                <span className="text-xs font-mono uppercase text-text-muted tracking-wider">
                  Honest Scope Breakdown
                </span>
                <span className="text-[11px] font-mono text-text-muted">3-Layer Model</span>
              </div>

              <div className="space-y-3">
                {personalInfo.layers.map((layer, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#0B1020]/60 border border-[#1F2A44] space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-text-primary font-mono">
                        {layer.label}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${layer.color}`}>
                        {layer.badge}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-[11px] font-mono text-text-muted pt-1">
                * Built with verified evidence: shipped HRMS code, RAG repos & PRDs.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
