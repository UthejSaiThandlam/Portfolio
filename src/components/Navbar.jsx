import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';

export const Navbar = ({ onOpenResumeModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '').replace('/', '');

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (!targetId) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return;
    }

    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#090D15]/92 backdrop-blur-xl border-b border-[#273246]/70 transition-colors duration-200">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Identity: Monogram + Name + Primary Role */}
          <Link to="/" onClick={(e) => handleNavClick(e, '#')} className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-[#FF705C]/60 shadow-sm shrink-0 bg-[#121927]">
              <img
                src="/profile-suit.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-sm sm:text-base text-slate-900 dark:text-[#F3F5FA] group-hover:text-[#FF705C] transition-colors tracking-tight">
                  {personalInfo.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF705C] inline-block"></span>
              </div>
              <span className="text-[11px] font-mono text-slate-600 dark:text-[#AAB5C6] leading-none">
                Backend &amp; Applied AI
              </span>
            </div>
          </Link>

          {/* Center Navigation Links: Clean, Focused 6 Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-700 dark:text-[#AAB5C6] hover:text-[#FF705C] dark:hover:text-[#F3F5FA] transition-colors cursor-pointer font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Theme Toggle + Resume Action + Social Shortcuts */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-lg bg-slate-100 dark:bg-[#121927] border border-slate-300 dark:border-[#273246] text-slate-700 dark:text-[#AAB5C6] hover:text-[#FF705C] hover:border-[#FF705C]/40 transition-all cursor-pointer shadow-sm"
              title={theme === 'dark' ? "Switch to Light Theme" : "Switch to Dark Theme"}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500" />
              )}
            </button>

            {/* Resume Action: "Resume PDF ↗" */}
            <button
              onClick={() => onOpenResumeModal('engineer')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#121927] border border-[#FF705C]/60 text-[#FF705C] hover:bg-[#FF705C] hover:text-[#090D15] font-heading font-bold text-xs transition-all shadow-sm cursor-pointer"
            >
              <span>Resume PDF</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-1 pl-1">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-[#AAB5C6] hover:text-[#F3F5FA] transition-colors rounded-lg hover:bg-white/[0.04]"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-[#AAB5C6] hover:text-[#FF705C] transition-colors rounded-lg hover:bg-white/[0.04]"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-1.5 rounded-lg bg-[#121927] border border-[#273246] text-[#AAB5C6]"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>

            <button
              onClick={() => onOpenResumeModal('engineer')}
              className="px-3 py-1.5 rounded-lg border border-[#FF705C] text-[#FF705C] text-xs font-bold font-heading"
            >
              Resume ↗
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#AAB5C6] hover:text-[#F3F5FA]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 dark:border-[#273246] bg-white dark:bg-[#090D15] px-4 py-4 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded text-slate-700 dark:text-[#AAB5C6] hover:text-[#FF705C] hover:bg-slate-100 dark:hover:bg-[#121927] cursor-pointer font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Direct Contact Bar */}
          <div className="pt-2 border-t border-slate-200 dark:border-[#273246] flex items-center justify-between text-xs font-mono">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 text-[#FF705C] hover:underline"
            >
              <span>{personalInfo.email}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal('engineer');
              }}
              className="text-sky-600 dark:text-[#61CAE8] hover:underline"
            >
              View Secondary Profiles
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
