import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1F2A44] bg-[#0B1020] py-10 text-xs text-text-muted">
      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-semibold font-mono text-text-primary">
              {personalInfo.name}
            </div>
            <div className="text-xs text-text-secondary">
              Full-Stack Engineer &bull; B.Tech CS (AI & ML) 2026
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded border border-[#1F2A44] hover:text-text-primary hover:border-text-secondary transition-colors"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded border border-[#1F2A44] hover:text-accent-blue hover:border-text-secondary transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${personalInfo.social.email}`}
              className="p-2 rounded border border-[#1F2A44] hover:text-accent-teal hover:border-text-secondary transition-colors"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded border border-[#1F2A44] hover:text-text-primary hover:border-text-secondary transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-[#1F2A44] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-text-muted">
          <div>
            Built with React, Vite & Tailwind CSS. Designed with minimal, high-signal data.
          </div>
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}
          </div>
        </div>

      </div>
    </footer>
  );
};
