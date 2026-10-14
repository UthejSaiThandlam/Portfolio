import React from 'react';
import { impactNumbers } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const ImpactStrip = () => {
  const handleScroll = (e, target) => {
    e.preventDefault();
    const id = target.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-16 bg-[#090D15] border-b border-[#273246]/70">
      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Subtitle */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-[#AAB5C6]">
          <span className="uppercase tracking-wider text-slate-500 dark:text-[#6B7A90] font-semibold">
            Demonstrated Production &amp; Model Outcomes
          </span>
          <span className="text-[11px] text-slate-500 dark:text-[#AAB5C6] hidden sm:inline">
            Tested &bull; Measured against clear baselines
          </span>
        </div>

        {/* 3 Credible Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {impactNumbers.map((item, idx) => (
            <div 
              key={idx} 
              className="spec-card p-6 flex flex-col justify-between space-y-4 group hover:border-[#FF705C]/50 transition-all duration-200"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF705C] font-bold">
                    {item.label}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#28C49A]" />
                </div>
                
                <div className="text-4xl sm:text-5xl font-mono font-extrabold text-slate-900 dark:text-[#F3F5FA] tracking-tight group-hover:text-[#FF705C] transition-colors">
                  {item.value}
                </div>
              </div>
              
              <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-[#273246]/80">
                <p className="text-xs text-slate-700 dark:text-[#AAB5C6] font-sans leading-relaxed">
                  {item.detail}
                </p>

                <a
                  href={item.linkTarget}
                  onClick={(e) => handleScroll(e, item.linkTarget)}
                  className="inline-flex items-center gap-1 text-xs font-mono text-sky-600 dark:text-[#61CAE8] hover:text-[#FF705C] transition-colors cursor-pointer"
                >
                  <span>{item.linkLabel}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
