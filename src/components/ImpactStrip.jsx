import React from 'react';
import { impactNumbers } from '../data/portfolioData';

export const ImpactStrip = () => {
  return (
    <section className="py-10 bg-[#0B1020] border-b border-[#1F2A44]">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {impactNumbers.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-accent-blue tracking-tight">
                {item.value}
              </div>
              
              <div className="text-xs font-mono uppercase tracking-[0.08em] text-text-secondary font-semibold">
                {item.label}
              </div>

              <div className="text-xs text-text-muted">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
