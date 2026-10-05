import React from 'react';
import { experienceData } from '../data/portfolioData';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-24 border-b border-[#1F2A44]">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-text-muted">
            02 / PRODUCTION CONTEXT
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary">
            Work Experience
          </h2>
          <p className="text-sm text-text-secondary max-w-xl">
            Where the technical and product foundations were built and proven in production.
          </p>
        </div>

        {/* Experience Card */}
        <div className="spec-card p-6 sm:p-8 space-y-8">
          
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#1F2A44] pb-4">
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="text-xl font-bold text-text-primary">
                  {experienceData.company}
                </h3>
                <span className="spec-tag text-accent-teal border-accent-teal/30">
                  Production SaaS
                </span>
              </div>
              <div className="text-xs font-mono text-accent-blue mt-1">
                {experienceData.role}
              </div>
            </div>

            <div className="text-xs font-mono text-text-muted">
              {experienceData.period} &bull; {experienceData.location}
            </div>
          </div>

          <p className="text-sm text-text-secondary">
            {experienceData.summary}
          </p>

          {/* Grouped Bullets: Built, Designed, Fixed, Documented */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {experienceData.groups.map((group) => (
              <div key={group.title} className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-text-muted font-bold border-b border-[#1F2A44] pb-1.5">
                  {group.title}
                </div>

                <div className="space-y-2.5">
                  {group.bullets.map((b, i) => (
                    <div key={i} className="text-xs text-text-secondary leading-relaxed flex items-start gap-2">
                      <span className="text-accent-blue font-bold font-mono mt-0.5">&bull;</span>
                      <p>
                        <strong className="text-text-primary font-medium">{b.action}</strong> {b.text}
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
