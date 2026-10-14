import React from 'react';
import { educationTimeline } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export const EducationSection = () => {
  return (
    <section id="education" className="section-wrapper bg-[#090D15] relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#273246]/60">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#61CAE8] inline-block rounded-full"></span>
              <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#61CAE8] font-bold">
                ACADEMICS &amp; CERTIFICATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#F3F5FA] tracking-tight">
              Education &amp; Credentials Timeline
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#AAB5C6] font-sans max-w-md leading-relaxed">
            Academic degree, verified coursework, and official technical certifications in Python Full-Stack &amp; Applied AI.
          </p>
        </div>

        {/* Central Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Continuous Vertical Center Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-slate-300 dark:bg-[#273246]" />

          {/* Central Graduation Cap Icon Milestone */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white dark:bg-[#121927] border-2 border-[#FF705C] shadow-xl items-center justify-center text-[#FF705C]">
            <GraduationCap className="w-5 h-5" />
          </div>

          {/* Timeline Items List */}
          <div className="space-y-10 md:space-y-14">
            {educationTimeline.map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start"
                >
                  
                  {/* Left Column (Institution & Date on Desktop) */}
                  <div className="md:col-span-5 md:text-right space-y-1 pl-4 md:pl-0 border-l-2 md:border-l-0 border-slate-300 dark:border-[#273246]">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-[#F3F5FA] tracking-tight">
                      {item.institution}
                    </h3>
                    <div className="text-xs font-mono text-slate-600 dark:text-[#AAB5C6]">
                      {item.period}
                    </div>
                  </div>

                  {/* Center Column Spacer / Desktop Dot */}
                  <div className="hidden md:flex md:col-span-2 justify-center pt-1.5 relative z-10">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FF705C] border-2 border-white dark:border-[#090D15] shadow" />
                  </div>

                  {/* Right Column (Degree, Specialization, Score Card) */}
                  <div className="md:col-span-5 space-y-2 text-left pl-4 md:pl-0 border-l-2 md:border-l-0 border-slate-300 dark:border-[#273246]">
                    
                    <div className="spec-card p-4 space-y-2 bg-white dark:bg-[#121927] border border-slate-200 dark:border-[#273246]">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs sm:text-[13px] font-bold font-heading text-slate-900 dark:text-[#F3F5FA]">
                          {item.degree}
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-600 dark:text-[#28C49A] px-2 py-0.5 rounded bg-emerald-50 dark:bg-[#090D15] border border-emerald-200 dark:border-[#273246]">
                          {item.score}
                        </span>
                      </div>

                      <div className="text-xs text-slate-700 dark:text-[#AAB5C6] font-sans">
                        {item.field}
                      </div>

                      {item.details && (
                        <p className="text-[11px] text-slate-500 dark:text-[#6B7A90] font-sans pt-1 border-t border-slate-200 dark:border-[#273246]/60">
                          {item.details}
                        </p>
                      )}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
