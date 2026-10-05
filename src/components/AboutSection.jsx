import React, { useState } from 'react';
import { personalInfo, educationData } from '../data/portfolioData';
import { GraduationCap, Briefcase, Award, Phone, Mail, MapPin, Copy, Check, ArrowRight } from 'lucide-react';

export const AboutSection = () => {
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="about" className="py-20 md:py-24 border-b border-white/[0.06] bg-[#0B0F19] relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header with Coral Accent Line (Jensen Omega Style) */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-10 sm:w-12 h-[2.5px] bg-accent-coral inline-block rounded-full"></span>
            <span className="text-xs font-mono uppercase tracking-[0.14em] text-accent-coral font-bold">
              About Me
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight leading-snug">
            Product-minded engineer bridging backend scale, applied AI, and user outcomes.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            I am a final-year Computer Science undergraduate specializing in Artificial Intelligence & Machine Learning (B.Tech 2026, CGPA 8.23). Rather than writing isolated academic scripts, I spent 6 months at <strong className="text-white">Z.APPS</strong> building and shipping a live enterprise multi-tenant HRMS/ERP platform actively used by <strong className="text-accent-coral font-semibold">130+ daily corporate employees</strong>.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Production Experience */}
          <div className="spec-card p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-accent-coral/10 border border-accent-coral/30 flex items-center justify-center text-accent-coral">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">
                Z.APPS Full-Stack Ownership
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Shipped live SaaS modules to 130+ users. Architected 5-layer multi-tenancy, built an O(n) org chart with cycle detection, and refactored N+1 query bottlenecks.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.08] text-[11px] font-mono text-accent-coral font-semibold">
              6-Month Production Internship
            </div>
          </div>

          {/* Card 2: Academic Standing */}
          <div className="spec-card p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">
                Academic Rigor & AI/ML
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                B.Tech in CS (AI & ML) at Siddharth Institute of Engg. & Tech. (CGPA: 8.23/10). Strong foundation in algorithms, relational database design, and neural networks.
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.08] text-[11px] font-mono text-sky-400 font-semibold">
              B.Tech CS 2026 &bull; CGPA 8.23
            </div>
          </div>

          {/* Card 3: Direct Contact Coordinates */}
          <div className="spec-card p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">
                Direct Contact & Availability
              </h3>
              <div className="space-y-2 pt-1 text-xs font-mono">
                <div className="flex items-center justify-between p-2 rounded bg-[#0B0F19] border border-white/[0.06]">
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-accent-coral truncate">
                    {personalInfo.phone}
                  </a>
                  <button onClick={() => copyToClipboard(personalInfo.phone, 'phone')} className="text-slate-400 hover:text-white p-0.5">
                    {copiedType === 'phone' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[#0B0F19] border border-white/[0.06]">
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-accent-coral truncate">
                    {personalInfo.email}
                  </a>
                  <button onClick={() => copyToClipboard(personalInfo.email, 'email')} className="text-slate-400 hover:text-white p-0.5">
                    {copiedType === 'email' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-white/[0.08] text-[11px] font-mono text-emerald-400 font-semibold">
              Open to Roles: SDE, AI/ML, PM & BA
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
