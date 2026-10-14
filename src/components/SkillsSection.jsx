import React from 'react';
import { categorizedSkills } from '../data/portfolioData';
import { Globe, Brain, Terminal, Code2 } from 'lucide-react';

export const SkillsSection = () => {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-5 h-5 text-[#61CAE8]" />;
      case 'terminal':
        return <Terminal className="w-5 h-5 text-[#FF705C]" />;
      case 'brain':
        return <Brain className="w-5 h-5 text-[#28C49A]" />;
      case 'globe':
      default:
        return <Globe className="w-5 h-5 text-indigo-400" />;
    }
  };

  const getLevelBadge = (level, variant) => {
    switch (variant) {
      case 'production':
        return (
          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold font-mono tracking-tight bg-[#28C49A]/15 text-[#28C49A] border border-[#28C49A]/30">
            {level}
          </span>
        );
      case 'core':
        return (
          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold font-mono tracking-tight bg-[#FF705C]/15 text-[#FF705C] border border-[#FF705C]/30">
            {level}
          </span>
        );
      case 'applied':
      default:
        return (
          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold font-mono tracking-tight bg-[#61CAE8]/15 text-[#61CAE8] border border-[#61CAE8]/30">
            {level}
          </span>
        );
    }
  };

  return (
    <section id="skills" className="section-wrapper bg-[#090D15] relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#273246]/60">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#28C49A] inline-block rounded-full"></span>
              <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#28C49A] font-bold">
                COMPETENCIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#F3F5FA] tracking-tight">
              Evidence-Backed Technical Skills
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#AAB5C6] font-sans max-w-md leading-relaxed">
            Technologies mapped directly to production modules, multi-tenant architectures, and live applied AI systems.
          </p>
        </div>

        {/* Skills Cards Grid: 4 Equal Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {categorizedSkills.map((category) => (
            <div
              key={category.id}
              className="spec-card p-6 space-y-5 transition-all duration-200"
            >
              
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-[#273246]">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-[#090D15] border border-slate-200 dark:border-[#273246] flex items-center justify-center">
                  {getCategoryIcon(category.icon)}
                </div>
                <h3 className="text-base font-bold font-heading text-slate-900 dark:text-[#F3F5FA] tracking-tight">
                  {category.category}
                </h3>
              </div>

              {/* Skill Rows */}
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-100 dark:bg-[#090D15] hover:bg-slate-200 dark:hover:bg-[#1A2438] transition-colors border border-slate-200 dark:border-[#273246]/60"
                  >
                    <span className="text-xs font-mono text-slate-900 dark:text-[#F3F5FA] font-semibold">
                      {skill.name}
                    </span>
                    {getLevelBadge(skill.level, skill.variant)}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Supporting Architecture & Tooling Badges */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#121927] border border-slate-200 dark:border-[#273246] text-center space-y-3 shadow-sm">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-[#6B7A90] font-semibold">
            Operational Engineering &bull; Tooling &bull; Protocols
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              "Multi-Tenant Architecture", "RBAC", "JWT Claims", "Query Optimization", 
              "Audit Logging", "Docker", "Git", "GitHub Actions", "Postman", "Render", "VS Code"
            ].map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md text-xs font-mono text-slate-700 dark:text-[#AAB5C6] bg-slate-100 dark:bg-[#090D15] border border-slate-200 dark:border-[#273246]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
