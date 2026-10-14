import React from 'react';
import { experienceData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-wrapper bg-[#090D15] relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#273246]/60">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#FF705C] inline-block rounded-full"></span>
              <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#FF705C] font-bold">
                EXPERIENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#F3F5FA] tracking-tight">
              Production Engineering Ownership
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#AAB5C6] font-sans max-w-md leading-relaxed">
            Shipped multi-tenant architectures, query tuning, and automated workflows on a live enterprise SaaS serving 130+ employees.
          </p>
        </div>

        {/* Experience Card */}
        <div className="spec-card p-6 sm:p-8 space-y-8 bg-[#121927] border border-[#273246]">
          
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-slate-200 dark:border-[#273246] pb-5">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-[#F3F5FA] tracking-tight">
                  {experienceData.company}
                </h3>
                <span className="spec-tag text-emerald-600 dark:text-[#28C49A] border-emerald-300 dark:border-[#28C49A]/30 bg-emerald-50 dark:bg-[#090D15]">
                  Live Production SaaS
                </span>
              </div>
              <div className="text-xs font-mono text-[#FF705C] mt-1.5 font-bold">
                {experienceData.role}
              </div>
            </div>

            <div className="text-xs font-mono text-slate-600 dark:text-[#AAB5C6]">
              {experienceData.period} &bull; {experienceData.location}
            </div>
          </div>

          <p className="text-sm text-slate-700 dark:text-[#AAB5C6] font-sans leading-relaxed">
            {experienceData.summary}
          </p>

          {/* Grouped Bullets: Built & Fixed */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {experienceData.groups.slice(0, 2).map((group) => (
              <div key={group.title} className="space-y-3.5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-[#6B7A90] font-bold border-b border-slate-200 dark:border-[#273246] pb-2 flex items-center justify-between">
                  <span>{group.title}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF705C]" />
                </div>

                <div className="space-y-3">
                  {group.bullets.map((b, i) => (
                    <div key={i} className="text-xs text-slate-700 dark:text-[#AAB5C6] leading-relaxed flex items-start gap-2.5">
                      <span className="text-[#FF705C] font-bold font-mono mt-0.5">&bull;</span>
                      <p>
                        <strong className="text-slate-900 dark:text-[#F3F5FA] font-semibold">{b.action}</strong> {b.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Direct Proof Actions */}
          <div className="pt-4 border-t border-[#273246] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <span className="text-[#6B7A90]">Verified in production deployment at Z.APPS</span>
            <div className="flex items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[#61CAE8] hover:text-[#FF705C] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Read HRMS Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#architecture"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[#FF705C] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Inspect Query Tuning</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
