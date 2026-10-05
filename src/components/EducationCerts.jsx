import React from 'react';
import { educationAndCerts } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';

export const EducationCerts = () => {
  return (
    <section className="py-20 border-b border-slate-800/80 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-2">
            <span className="w-2 h-0.5 bg-sky-400"></span>
            08 &bull; Foundations & Validation
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Rigorous academic grounding in computer science algorithms, distributed systems, and machine learning theory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
              <GraduationCap className="w-4 h-4 text-sky-400" />
              <span>Degree & Academics</span>
            </div>

            {educationAndCerts.education.map((edu, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-medium text-sky-400 mt-0.5">
                      {edu.specialization}
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold shrink-0">
                    CGPA {edu.cgpa}
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Timeline: {edu.period}</span>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
              <Award className="w-4 h-4 text-indigo-400" />
              <span>Certifications & Specialized Training</span>
            </div>

            <div className="space-y-3">
              {educationAndCerts.certifications.map((cert, idx) => (
                <div key={idx} className="glass-card p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-sm font-bold text-white">
                      {cert.title}
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400 shrink-0">
                      {cert.year}
                    </span>
                  </div>

                  <div className="text-xs text-indigo-300 font-mono">
                    Issuer: {cert.issuer}
                  </div>

                  <div className="text-xs text-slate-400 font-mono">
                    Verified Competency: <span className="text-slate-300">{cert.skills}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
