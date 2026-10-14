import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail, Mountain } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#273246]/70 bg-[#070B14] py-10 text-xs text-[#AAB5C6] overflow-hidden">
      
      {/* Clifftop Meadow & Sea Horizon Watermark Background (User Request) */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-25 overflow-hidden">
        <img
          src="/hero-sunset.jpg"
          alt="Clifftop Meadow"
          className="w-full h-full object-cover object-bottom filter blur-[1.5px] brightness-75"
        />
        <div className="footer-fade-overlay absolute inset-0 bg-gradient-to-t from-[#090D15] via-[#090D15]/80 to-[#090D15]/95" />
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-6 relative z-10">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-bold font-heading text-[#F3F5FA] flex items-center justify-center sm:justify-start gap-2">
              <span>{personalInfo.name}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#121927] border border-[#273246] text-[#28C49A]">
                B.Tech '26
              </span>
            </div>
            <div className="text-xs text-[#AAB5C6] font-sans">
              Backend &amp; Applied AI Engineer &bull; Django REST &bull; Multi-Tenant SaaS
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-[#273246] bg-[#121927]/90 text-[#AAB5C6] hover:text-[#F3F5FA] hover:border-[#F3F5FA]/40 transition-colors shadow-md"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-[#273246] bg-[#121927]/90 text-[#AAB5C6] hover:text-[#FF705C] hover:border-[#FF705C]/50 transition-colors shadow-md"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl border border-[#273246] bg-[#121927]/90 text-[#AAB5C6] hover:text-[#61CAE8] hover:border-[#61CAE8]/50 transition-colors shadow-md"
              title={`Email ${personalInfo.email}`}
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl border border-[#273246] bg-[#121927]/90 text-[#AAB5C6] hover:text-[#F3F5FA] hover:border-[#FF705C]/40 transition-colors shadow-md cursor-pointer ml-1"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-[#273246]/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-[#6B7A90]">
          <div className="flex items-center gap-2">
            <Mountain className="w-3.5 h-3.5 text-[#61CAE8]" />
            <span>Clifftop Remote Workspace Edition &bull; Direct: <a href={`mailto:${personalInfo.email}`} className="text-[#FF705C] hover:underline">{personalInfo.email}</a></span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name} &bull; All Rights Reserved
          </div>
        </div>

      </div>
    </footer>
  );
};

