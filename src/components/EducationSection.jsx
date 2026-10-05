import React from 'react';
import { educationData } from '../data/portfolioData';

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
          
          {/* Degree Card */}
          <div className="spec-card p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-text-muted uppercase">Degree</span>
              <span className="spec-tag text-accent-teal border-accent-teal/30">
                CGPA {educationData.cgpa}
              </span>
            </div>

            <h3 className="text-base font-semibold text-text-primary">
              {educationData.degree}
            </h3>

            <div className="text-xs font-mono text-text-muted">
              {educationData.institution}
            </div>

            <p className="text-xs text-text-secondary pt-1 border-t border-[#1F2A44] leading-relaxed">
              <strong>Core Coursework:</strong> {educationData.coursework}
            </p>
          </div>

          {/* Certifications Card */}
          <div className="spec-card p-6 space-y-3">
            <span className="text-xs font-mono text-text-muted uppercase block">
              Verified Credentials
            </span>

            <div className="space-y-3 pt-1">
              {educationData.certifications.map((cert, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#0B1020] border border-[#1F2A44] space-y-1">
                  <h4 className="text-xs font-semibold text-text-primary">
                    {cert.title}
                  </h4>
                  <div className="text-[11px] font-mono text-text-muted">
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
