import React from 'react';
import { categorizedSkills } from '../data/portfolioData';
import { Globe, Brain } from 'lucide-react';

export const SkillsSection = () => {
  // Category icon mapping matching Image 2
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return (
          <div className="w-10 h-10 rounded-xl bg-sky-500 text-slate-950 flex items-center justify-center shadow-lg shadow-sky-500/20">
            <span className="font-mono font-black text-base">&lt;/&gt;</span>
          </div>
        );
      case 'globe':
        return (
          <div className="w-10 h-10 rounded-xl bg-purple-500 text-white flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Globe className="w-5 h-5 stroke-[2.5]" />
          </div>
        );
      case 'terminal':
        return (
          <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <span className="font-mono font-black text-base">&gt;_</span>
          </div>
        );
      case 'brain':
      default:
        return (
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <Brain className="w-5 h-5 stroke-[2.5]" />
          </div>
        );
    }
  };

  // Badge styling matching Image 2 pills (Expert = green, Advanced = blue, Intermediate = amber)
  const getLevelBadge = (level, variant) => {
    switch (variant) {
      case 'expert':
        return (
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold font-mono tracking-tight bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            {level}
          </span>
        );
      case 'intermediate':
        return (
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold font-mono tracking-tight bg-amber-500/15 text-amber-400 border border-amber-500/30">
            {level}
          </span>
        );
      case 'advanced':
      default:
        return (
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold font-mono tracking-tight bg-sky-500/15 text-sky-400 border border-sky-500/30">
            {level}
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-white/[0.06] bg-[#07090E] relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono uppercase tracking-[0.15em] text-sky-400">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            Technologies actively deployed in production systems, multi-tenant architectures, and live AI systems.
          </p>
        </div>

        {/* Skills Cards Grid - Exact Replication of Image 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {categorizedSkills.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-[#0D0F14] border border-white/[0.08] hover:border-white/[0.18] p-5 sm:p-6 space-y-5 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              
              {/* Category Header with Colored Square Icon Box (Matching Image 2) */}
              <div className="flex items-center gap-3.5 pb-2 border-b border-white/[0.06]">
                {getCategoryIcon(category.icon, category.color)}
                <h3 className="text-lg font-bold font-heading text-white tracking-tight">
                  {category.category}
                </h3>
              </div>

              {/* Skill Rows (Dark tiles with Skill Name on left & Pill Badge on right) */}
              <div className="space-y-2.5">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#13161F] hover:bg-[#181C28] transition-colors border border-white/[0.04] group"
                  >
                    <span className="text-xs sm:text-[13px] font-mono text-slate-200 group-hover:text-white transition-colors">
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
        <div className="p-6 rounded-2xl bg-[#0D0F14] border border-white/[0.06] text-center space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Additional Enterprise Engineering & Tools
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              "Multi-Tenant Architecture", "RBAC", "JWT Auth", "Query Optimization", 
              "Audit Logging", "Docker", "Git", "GitHub Actions", "Postman", "Render", "VS Code"
            ].map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-mono text-slate-300 bg-[#141822] border border-white/[0.08]"
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
