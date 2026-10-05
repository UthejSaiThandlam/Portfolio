import React from 'react';
import { skillsData } from '../data/portfolioData';

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-24 border-b border-[#1F2A44]">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-accent-blue font-semibold">
            04 / TECHNICAL & STRATEGIC CAPABILITIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-white">
            Skills & Competencies
          </h2>
          <p className="text-sm text-text-secondary max-w-xl leading-relaxed">
            Only technologies and frameworks actively applied in production or working code. No subjective skill bars.
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="spec-card p-6 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#1F2A44] pb-2.5">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary">
                  {group.category}
                </h3>
                {group.isLearning && (
                  <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/30">
                    Active Focus
                  </span>
                )}
              </div>

              {/* Rounded pill tags: border only, no fill */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span key={idx} className="spec-tag hover:border-text-secondary transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
