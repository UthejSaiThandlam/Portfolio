import React from 'react';
import { howIWorkSteps } from '../data/portfolioData';

export const HowIWork = () => {
  return (
    <section className="py-20 md:py-24 border-b border-[#1F2A44]">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-accent-blue font-semibold">
            05 / METHODOLOGY
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-white">
            How I Work
          </h2>
          <p className="text-sm text-text-secondary max-w-xl leading-relaxed">
            A 7-stage mental model from problem discovery to continuous iteration.
          </p>
        </div>

        {/* 7-step clean grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {howIWorkSteps.map((st) => (
            <div
              key={st.step}
              className="spec-card p-4 space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-accent-blue">
                  {st.step}
                </div>
                <div className="text-sm font-semibold text-text-primary">
                  {st.name}
                </div>
                <p className="text-[11px] text-text-secondary leading-snug">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
