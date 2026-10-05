import React, { useState } from 'react';
import { X, Download, FileText, Printer, CheckCircle2 } from 'lucide-react';
import { personalInfo, experienceData, educationData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose, initialLens = 'engineer' }) => {
  const [selectedLens, setSelectedLens] = useState(initialLens);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const text = `
===================================================================
${personalInfo.name.toUpperCase()} - RESUME (${selectedLens.toUpperCase()} TRACK)
${educationData.degree} | CGPA: ${educationData.cgpa}
Email: ${personalInfo.social.email} | GitHub: ${personalInfo.social.github} | LinkedIn: ${personalInfo.social.linkedin}
===================================================================

POSITIONING STATEMENT:
Full-stack engineer building AI-powered products. Learning product and business analysis.

EDUCATION:
- ${educationData.degree}
- ${educationData.institution} | CGPA: ${educationData.cgpa}
- Coursework: ${educationData.coursework}

EXPERIENCE:
${experienceData.company} — ${experienceData.role} (${experienceData.period})
Summary: ${experienceData.summary}

KEY HIGHLIGHTS:
${experienceData.groups.map(g => `\n[${g.title.toUpperCase()}]\n` + g.bullets.map(b => `* ${b.action} ${b.text}`).join('\n')).join('')}

CORE VERIFIED PROJECTS:
1. Enterprise Multi-Tenant HRMS & ERP SaaS (Z.APPS)
   - Shipped to production; 130+ daily active employees.
   - 5-layer multi-tenancy isolation and O(n) org-tree construction.
   - Eliminated N+1 relational query bottlenecks.

2. Autonomous AI Study & Goal Planner (RAG)
   - LangChain, ChromaDB embeddings, adaptive daily routine synthesis.

3. Clinical Heart Disease Predictive Engine
   - Dual-stacked ensemble (91.8% ROC-AUC), minimizing false negatives with SHAP explainability.
===================================================================
    `.trim();

    const element = document.createElement("a");
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Resume-Thandlam-Uthej-Sai-${selectedLens}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1020]/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#121A2F] border border-[#1F2A44] rounded-xl shadow-2xl overflow-hidden my-auto max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#1F2A44] bg-[#0B1020]/70">
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-text-primary font-mono">
              Resume Preview ({selectedLens.toUpperCase()})
            </h3>
            <p className="text-xs text-text-secondary">
              Clean, single-page printable text document.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-[#121A2F] p-1 rounded border border-[#1F2A44]">
            {['engineer', 'product', 'analyst'].map((lens) => (
              <button
                key={lens}
                onClick={() => setSelectedLens(lens)}
                className={`px-2.5 py-1 text-xs font-mono rounded ${
                  selectedLens === lens ? 'bg-accent-blue text-[#0B1020] font-bold' : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {lens}
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            className="p-1 text-text-muted hover:text-text-primary ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-5 text-xs text-text-secondary leading-relaxed font-sans">
          <div className="border-b border-[#1F2A44] pb-3">
            <h2 className="text-base font-bold text-text-primary">{personalInfo.name}</h2>
            <div className="text-xs font-mono text-accent-blue mt-0.5">
              {personalInfo.heroHeadline}
            </div>
            <div className="text-[11px] font-mono text-text-muted mt-1">
              {personalInfo.social.email} &bull; {personalInfo.social.location}
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-text-muted font-bold block">Education</span>
            <div className="text-text-primary font-medium">{educationData.degree}</div>
            <div className="text-text-muted text-[11px]">{educationData.institution} &bull; CGPA {educationData.cgpa}</div>
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase text-text-muted font-bold block">Experience</span>
            <div className="p-3 rounded bg-[#0B1020] border border-[#1F2A44] space-y-1.5">
              <div className="flex justify-between text-text-primary font-semibold">
                <span>{experienceData.company} &mdash; {experienceData.role}</span>
                <span className="text-text-muted font-mono font-normal">{experienceData.period}</span>
              </div>
              <p className="text-[11px] text-text-secondary">{experienceData.summary}</p>
              <ul className="space-y-1 pt-1 text-[11px] text-text-secondary">
                {experienceData.groups.slice(0, 3).map((g, i) => (
                  <li key={i}>
                    <strong>[{g.title}]</strong> {g.bullets[0].action} {g.bullets[0].text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="text-[11px] font-mono uppercase text-text-muted font-bold block">Verified Projects</span>
            <div className="space-y-1 text-[11px]">
              <div>&bull; <strong className="text-text-primary">Enterprise HRMS/ERP:</strong> Multi-tenant SaaS with immutable ledger shipped to 130+ users.</div>
              <div>&bull; <strong className="text-text-primary">AI Study Planner (RAG):</strong> LangChain + ChromaDB context-aware scheduler.</div>
              <div>&bull; <strong className="text-text-primary">Clinical Heart Disease Classifier:</strong> Dual-stacked ML ensemble (91.8% ROC-AUC).</div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-[#1F2A44] bg-[#0B1020]/70 flex items-center justify-between">
          <span className="text-xs font-mono text-text-muted">
            Format: Clean Text / Print
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-[#1F2A44] hover:bg-[#334771] text-xs font-mono text-text-primary inline-flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded bg-accent-blue hover:bg-accent-blue/90 text-[#0B1020] text-xs font-mono font-bold inline-flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.txt)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
