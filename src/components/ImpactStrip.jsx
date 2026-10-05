import React from 'react';
import { impactNumbers } from '../data/portfolioData';

export const ImpactStrip = () => {
  return (
    <section className="py-12 bg-[#080C16] border-b border-white/[0.08]">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {impactNumbers.map((item, idx) => (
            <div 
              key={idx} 
              className="spec-card p-5 sm:p-6 space-y-2.5 flex flex-col justify-between group hover:border-accent-coral/40"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                    BENCHMARK 0{idx + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-coral/60 group-hover:bg-accent-coral transition-colors" />
                </div>
                
                <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-black text-accent-coral tracking-tight group-hover:scale-[1.02] transition-transform duration-200">
                  {item.value}
                </div>
              </div>
              
              <div className="space-y-1 pt-2 border-t border-white/[0.06]">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-200 font-bold">
                  {item.label}
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
