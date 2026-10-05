import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Award } from 'lucide-react';

export const EducationSection = () => {
  return (
    <section className="py-20 md:py-24 border-b border-[#1F2A44]">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-text-muted">
            06 / ACADEMICS & CREDENTIALS
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary">
            Education & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Degrees & College */}
          <div className="spec-card p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-text-muted uppercase">
              <GraduationCap className="w-4 h-4 text-accent-blue" />
              <span>Academic Track</span>
            </div>

            <div className="space-y-4">
              {educationData.degrees.map((deg, idx) => (
                <div key={idx} className="p-3.5 rounded bg-[#0B1020] border border-[#1F2A44] space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold text-text-primary">
                      {deg.degree}
                    </h3>
                    <span className="spec-tag text-accent-teal border-accent-teal/30 shrink-0">
                      {deg.score}
                    </span>
                  </div>
                  <div className="text-xs text-text-secondary">
                    {deg.institution}
                  </div>
                  <div className="text-[11px] font-mono text-text-muted">
                    {deg.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div className="spec-card p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-text-muted uppercase">
              <Award className="w-4 h-4 text-accent-teal" />
              <span>Verified Certifications</span>
            </div>

            <div className="space-y-3 pt-1">
              {educationData.certifications.map((cert, idx) => (
                <div key={idx} className="p-3.5 rounded bg-[#0B1020] border border-[#1F2A44] space-y-1">
                  <h4 className="text-sm font-semibold text-text-primary">
                    {cert.title}
                  </h4>
                  <div className="text-xs font-mono text-accent-blue">
                    {cert.issuer}
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
