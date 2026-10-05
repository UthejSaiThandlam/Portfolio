import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070B14] py-10 text-xs text-slate-400">
      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-semibold font-heading text-white">
              {personalInfo.name}
            </div>
            <div className="text-xs text-slate-400">
              Software Developer &bull; B.Tech CS (AI & ML) 2026
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-white/[0.08] bg-[#111625] hover:text-white hover:border-white/30 transition-colors"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-white/[0.08] bg-[#111625] hover:text-accent-coral hover:border-accent-coral/40 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg border border-white/[0.08] bg-[#111625] hover:text-accent-coral hover:border-accent-coral/40 transition-colors"
              title="Email uthejsaithandlam@gmail.com"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-white/[0.08] bg-[#111625] hover:text-white hover:border-white/30 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-slate-500">
          <div>
            Built with React, Vite & Tailwind CSS. Direct email: <a href={`mailto:${personalInfo.email}`} className="text-accent-coral hover:underline">{personalInfo.email}</a>
          </div>
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}
          </div>
        </div>

      </div>
    </footer>
  );
};
