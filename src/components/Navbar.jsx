import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sparkles, FileDown } from 'lucide-react';
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
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Artifacts', href: '/#artifacts' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Contact', href: '/#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#070B14]/85 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Identity (Inspired by Image 1 & 2) */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500/20 via-sky-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-xs text-cyan-400 group-hover:border-cyan-400 transition-colors">
              US
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                130+ Users SaaS
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Clean & Minimal) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-mono">
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

          {/* Right: Lens Switcher + Hire Me / Resume CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* View as Switcher */}
            <div className="flex items-center bg-[#0E172A] p-0.5 rounded-lg border border-white/[0.08]">
              <span className="text-[10px] font-mono uppercase text-slate-500 px-2">Lens:</span>
              {lenses.map((lens) => (
                <button
                  key={lens.id}
                  onClick={() => setActiveLens(lens.id)}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                    activeLens === lens.id
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lens.label}
                </button>
              ))}
            </div>

            {/* Gradient CTA Button (Matching Image 1: "Hire me" button) */}
            <button
              onClick={() => onOpenResumeModal(activeLens)}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 hover:opacity-95 text-slate-950 font-heading font-bold text-xs shadow-md shadow-cyan-500/20 transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Social Icons */}
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
                className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => onOpenResumeModal(activeLens)}
              className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-950 font-bold text-xs"
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
        <div className="sm:hidden border-b border-white/[0.08] bg-[#070B14] px-4 py-4 space-y-3">
          <div className="flex items-center justify-between p-2 bg-[#0E172A] rounded-lg border border-white/[0.08]">
            <span className="text-xs font-mono text-slate-400">Active View:</span>
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
                      ? 'bg-cyan-500 text-slate-950 font-bold'
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
                className="px-3 py-2 rounded text-slate-300 hover:text-cyan-400 hover:bg-[#0E172A]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
