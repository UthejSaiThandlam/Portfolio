import React from 'react';
import { impactNumbers } from '../data/portfolioData';

export const ImpactStrip = () => {
  return (
    <section className="py-10 bg-[#0B0F19] border-b border-white/[0.06]">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {impactNumbers.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="text-3xl sm:text-4xl md:text-5xl font-mono font-extrabold text-accent-coral tracking-[-0.03em]">
                {item.value}
              </div>
              
              <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-slate-300 font-semibold">
                {item.label}
              </div>

              <div className="text-xs text-slate-400 leading-snug">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
