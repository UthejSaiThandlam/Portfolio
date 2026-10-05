import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileDown, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { useRole } from '../context/RoleContext';
import { personalInfo } from '../data/portfolioData';

export const Navbar = ({ onOpenResumeModal }) => {
  const { activeLens, setActiveLens } = useRole();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const lenses = [
    { id: 'engineer', label: 'Engineer' },
    { id: 'product', label: 'Product' },
    { id: 'analyst', label: 'Analyst' }
  ];

  const navLinks = [
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Product & BA', href: '/#product-work' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Contact', href: '/#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B1020]/90 backdrop-blur-md border-b border-[#1F2A44]">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-mono text-sm font-bold text-accent-blue bg-accent-blue/10 px-2 py-1 rounded border border-accent-blue/30">
              US
            </span>
            <span className="text-sm font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
              {personalInfo.name}
            </span>
          </Link>

          {/* Center: View-as Toggle */}
          <div className="hidden md:flex items-center bg-[#121A2F] p-1 rounded-lg border border-[#1F2A44]">
            <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted px-2.5">
              View as:
            </span>
            <div className="flex items-center gap-1">
              {lenses.map((lens) => {
                const isActive = activeLens === lens.id;
                return (
                  <button
                    key={lens.id}
                    onClick={() => setActiveLens(lens.id)}
                    className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                      isActive
                        ? 'bg-accent-blue text-[#0B1020] font-bold shadow-sm'
                        : 'text-text-secondary hover:text-text-primary hover:bg-[#18233F]'
                    }`}
                  >
                    {lens.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop Links & Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-5 text-xs font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="h-4 w-px bg-[#1F2A44]" />

            {/* Resume Action */}
            <button
              onClick={() => onOpenResumeModal(activeLens)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-accent-blue/40 text-accent-blue hover:bg-accent-blue/10 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-text-muted hover:text-text-primary transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-text-muted hover:text-accent-blue transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenResumeModal(activeLens)}
              className="px-2.5 py-1 text-xs font-mono rounded border border-accent-blue/40 text-accent-blue"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-text-secondary hover:text-text-primary"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#1F2A44] bg-[#0B1020] px-4 py-4 space-y-4">
          <div className="flex items-center justify-between p-2 bg-[#121A2F] rounded-lg border border-[#1F2A44]">
            <span className="text-xs font-mono text-text-muted">View as:</span>
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
                      ? 'bg-accent-blue text-[#0B1020] font-bold'
                      : 'text-text-secondary'
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
                className="px-3 py-2 rounded text-text-secondary hover:text-text-primary hover:bg-[#121A2F]"
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
