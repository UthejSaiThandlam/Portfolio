import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, FileDown, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { useRole } from '../context/RoleContext';
import { personalInfo } from '../data/portfolioData';

export const Navbar = ({ onOpenResumeModal }) => {
  const { activeLens, setActiveLens } = useRole();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lenses = [
    { id: 'engineer', label: 'Engineer' },
    { id: 'product', label: 'Product' },
    { id: 'analyst', label: 'Analyst' }
  ];

  const navLinks = [
    { name: 'Home', href: '/#' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Education', href: '/#education' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Contacts', href: '/#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0F19]/90 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Identity (Jensen Omega Style) */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-heading font-extrabold text-base sm:text-lg text-white group-hover:text-accent-coral transition-colors">
              {personalInfo.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-coral inline-block"></span>
          </Link>

          {/* Center Navigation Links (Matching Jensen Omega top links) */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Lens Switcher + Resume Action */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* View As Lens Switcher */}
            <div className="flex items-center bg-[#141B2D] p-1 rounded-lg border border-white/[0.08]">
              <span className="text-[10px] font-mono uppercase text-slate-500 px-2">Lens:</span>
              {lenses.map((lens) => (
                <button
                  key={lens.id}
                  onClick={() => setActiveLens(lens.id)}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                    activeLens === lens.id
                      ? 'bg-accent-coral text-white font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lens.label}
                </button>
              ))}
            </div>

            {/* My resume button (Matching Jensen Omega CTA) */}
            <button
              onClick={() => onOpenResumeModal(activeLens)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-accent-coral text-accent-coral hover:bg-accent-coral hover:text-white font-heading font-bold text-xs transition-all shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>My resume</span>
            </button>

            {/* Social Icons & Email */}
            <div className="flex items-center gap-1 pl-1">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-slate-400 hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-slate-400 hover:text-accent-coral transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-1.5 text-slate-400 hover:text-accent-coral transition-colors"
                title="Email uthejsaithandlam@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => onOpenResumeModal(activeLens)}
              className="px-3 py-1.5 rounded-lg border border-accent-coral text-accent-coral text-xs font-bold font-heading"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-white/[0.08] bg-[#0B0F19] px-4 py-4 space-y-3">
          <div className="flex items-center justify-between p-2 bg-[#141B2D] rounded-lg border border-white/[0.08]">
            <span className="text-xs font-mono text-slate-400">View as:</span>
            <div className="flex gap-1">
              {lenses.map((lens) => (
                <button
                  key={lens.id}
                  onClick={() => {
                    setActiveLens(lens.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-2.5 py-1 text-xs font-mono rounded ${
                    activeLens === lens.id
                      ? 'bg-accent-coral text-white font-bold'
                      : 'text-slate-400'
                  }`}
                >
                  {lens.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded text-slate-300 hover:text-accent-coral hover:bg-[#141B2D]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Direct Contact Bar */}
          <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 text-accent-coral hover:underline"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <span className="text-slate-600">&bull;</span>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-slate-300 hover:text-white"
            >
              {personalInfo.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
