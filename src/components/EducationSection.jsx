import React from 'react';
import { educationTimeline } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-b border-white/[0.06] bg-[#080B11] relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-14">
        
        {/* Header - Directly matching Image 4 */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-[11px] font-mono uppercase tracking-[0.15em] text-indigo-400">
            Education
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            My education and certification journey timeline.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            Academic milestones, foundational coursework, and verified professional certifications.
          </p>
        </div>

        {/* Central Vertical Timeline - Exact Recreation of Image 4 */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Continuous Vertical Center Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-indigo-500/60 via-purple-500/40 to-indigo-500/20" />

          {/* Central Graduation Cap Icon Milestone (Matching Image 4) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0E1320] border-2 border-indigo-400 shadow-xl shadow-indigo-500/30 items-center justify-center text-indigo-300">
            <GraduationCap className="w-5 h-5" />
          </div>

          {/* Timeline Items List */}
          <div className="space-y-12 md:space-y-16">
            {educationTimeline.map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start"
                >
                  
                  {/* Left Column (Institution & Date on Desktop, matching Image 4 Left Column) */}
                  <div className="md:col-span-5 md:text-right space-y-1 pl-4 md:pl-0 border-l-2 md:border-l-0 border-indigo-500/40">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-white tracking-tight">
                      {item.institution}
                    </h3>
                    <div className="text-xs font-mono text-slate-400">
                      {item.period}
                    </div>
                  </div>

                  {/* Center Column Spacer / Mobile Dot */}
                  <div className="hidden md:flex md:col-span-2 justify-center pt-1.5 relative z-10">
                    <div className="w-3.5 h-3.5 rounded-full bg-indigo-500 border-2 border-[#080B11] shadow-md shadow-indigo-500/50" />
                  </div>

                  {/* Right Column (Degree, Specialization, Score, matching Image 4 Right Column) */}
                  <div className="md:col-span-5 space-y-2.5 text-left pl-4 md:pl-0 border-l-2 md:border-l-0 border-indigo-500/40 md:border-none">
                    
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h4 className="text-sm sm:text-base font-bold font-heading text-white">
                        {item.degree}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans">
                      {item.specialization}
                    </p>

                    {item.score && (
                      <div className="inline-block px-3 py-1 rounded-md text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/25">
                        {item.score}
                      </div>
                    )}

                    {item.highlights && (
                      <p className="text-xs text-slate-400 leading-relaxed font-sans pt-0.5">
                        {item.highlights}
                      </p>
                    )}

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
