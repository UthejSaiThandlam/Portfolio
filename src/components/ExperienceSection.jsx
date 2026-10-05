import React from 'react';
import { experienceData } from '../data/portfolioData';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-24 border-b border-white/[0.06] bg-[#090D18]">
      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header with Coral Accent Line */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="w-10 sm:w-12 h-[2.5px] bg-accent-coral inline-block rounded-full"></span>
            <span className="text-xs font-mono uppercase tracking-[0.14em] text-accent-coral font-bold">
              Work Experience
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-white">
            Production Track Record
          </h2>
          <p className="text-sm text-slate-400 font-sans leading-relaxed">
            Where core systems, multi-tenant architectures, and backend optimizations were built and proven in production.
          </p>
        </div>

        {/* Experience Card */}
        <div className="spec-card p-6 sm:p-8 space-y-8">
          
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/[0.08] pb-4">
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="text-xl font-bold font-heading text-white">
                  {experienceData.company}
                </h3>
                <span className="spec-tag text-emerald-400 border-emerald-500/30">
                  Production SaaS
                </span>
              </div>
              <div className="text-xs font-mono text-accent-coral mt-1 font-semibold">
                {experienceData.role}
              </div>
            </div>

            <div className="text-xs font-mono text-slate-400">
              {experienceData.period} &bull; {experienceData.location}
            </div>
          </div>

          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            {experienceData.summary}
          </p>

          {/* Grouped Bullets: Built, Designed, Fixed, Documented */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {experienceData.groups.map((group) => (
              <div key={group.title} className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold border-b border-white/[0.08] pb-1.5 flex items-center justify-between">
                  <span>{group.title}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-coral/60" />
                </div>

                <div className="space-y-2.5">
                  {group.bullets.map((b, i) => (
                    <div key={i} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
                      <span className="text-accent-coral font-bold font-mono mt-0.5">&bull;</span>
                      <p>
                        <strong className="text-white font-semibold">{b.action}</strong> {b.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
