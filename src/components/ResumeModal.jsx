import React, { useState } from 'react';
import { X, Download, FileText, Printer, CheckCircle2, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { personalInfo, experienceData, educationData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose, initialLens = 'engineer' }) => {
  const [selectedLens, setSelectedLens] = useState(initialLens);

  if (!isOpen) return null;

  const pdfMap = {
    engineer: personalInfo.resumeLinks.engineer,
    product: personalInfo.resumeLinks.product,
    analyst: personalInfo.resumeLinks.analyst
  };

  const getResumeHighlights = () => {
    switch (selectedLens) {
      case 'product':
        return {
          title: "Founding Product Manager / Product Management Resume",
          summary: "Recent CS (AI & ML) graduate who has shipped and owned a live product end-to-end (0 -> 1 to 130+ daily users as sole full-stack owner). Comfortable with SQL and data-driven decisions, builds fast with AI tools (Groq LLM, RAG), and pairs strong technical fluency with product judgment.",
          strengths: [
            "0 -> 1 Product Ownership: Shipped a real product to 130+ users end-to-end (requirements, UX decisions, build, iteration).",
            "Data & SQL: SQL-backed reporting logic and interactive Recharts dashboards.",
            "AI-Native Builder: Groq LLM chatbot, RAG planning assistant, AI-assisted workflows.",
            "Vague -> Shipped: Took ambiguous asks ('personalize portal per company') and turned them into a shipped AI-driven theme engine."
          ]
        };
      case 'analyst':
        return {
          title: "Data Analyst & Business Telemetry Resume",
          summary: "Data-driven B.Tech Computer Science (AI & ML) graduate (2026, CGPA 8.23) with hands-on experience turning raw operational data into reports, dashboards, and decisions on a live production SaaS platform used by 130+ employees.",
          strengths: [
            "Data Analysis & Statistics: SQL, Data Modeling, Database Design, Regression Analysis, Predictive Modeling.",
            "Performance Engineering: Resolved critical N+1 query issue via bulk role-map refactor.",
            "Dashboarding & Visualization: Interactive Recharts dashboards and O(n) org chart hierarchy visualization.",
            "Database Rigor: Designed and queried multi-tenant relational schemas (MySQL) across five-layer architecture."
          ]
        };
      case 'engineer':
      default:
        return {
          title: "Python Full-Stack & AI Systems Engineer Resume",
          summary: "B.Tech CS (AI & ML) graduate (2026), CGPA 8.23, with hands-on experience building a live, production multi-tenant HRMS/ERP SaaS used by 130+ employees. Delivered core Django/React modules, leave management, notification systems, and an AI-driven theme engine.",
          strengths: [
            "Five-Layer Multi-Tenancy: TenantScopedModel, TenantManager, JWT auth, HRRouter multi-DB routing, and CompanyMiddleware.",
            "Immutable Ledger Pattern: Built leave management microservice with double-entry auditable ledger pattern.",
            "Algorithmic Problem-Solving: O(n) org tree builder with cycle detection for multi-root hierarchies.",
            "AI Integration: Groq LLM chatbot with RBAC-scoped audit logging and dual auth paths."
          ]
        };
    }
  };

  const highlights = getResumeHighlights();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#0B1020]/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#121A2F] border border-[#1F2A44] rounded-xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 border-b border-[#1F2A44] bg-[#0B1020]/70">
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-text-primary font-mono">
              Resume View & Direct PDF
            </h3>
            <p className="text-xs text-text-secondary">
              Review tailored summary or download the verified PDF.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-[#121A2F] p-1 rounded border border-[#1F2A44]">
            {['engineer', 'product', 'analyst'].map((lens) => (
              <button
                key={lens}
                onClick={() => setSelectedLens(lens)}
                className={`px-2.5 py-1 text-xs font-mono rounded capitalize transition-colors ${
                  selectedLens === lens ? 'bg-accent-blue text-[#0B1020] font-bold' : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {lens}
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            className="p-1 text-text-muted hover:text-text-primary absolute top-4 right-4 sm:static"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-4 text-xs text-text-secondary leading-relaxed font-sans">
          
          {/* Header Info */}
          <div className="border-b border-[#1F2A44] pb-3 space-y-1">
            <h2 className="text-base font-bold text-text-primary">{personalInfo.name}</h2>
            <div className="text-xs font-mono text-accent-blue">{highlights.title}</div>
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-text-muted pt-1">
              <span>{personalInfo.phone}</span>
              <span>&bull;</span>
              <span>{personalInfo.email}</span>
              <span>&bull;</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-text-muted font-bold block">
              Professional Summary
            </span>
            <p className="text-text-primary leading-relaxed">
              {highlights.summary}
            </p>
          </div>

          {/* Targeted Strengths */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono uppercase text-text-muted font-bold block">
              Key Strengths & Production Evidence
            </span>
            <div className="space-y-1.5">
              {highlights.strengths.map((str, i) => (
                <div key={i} className="p-2.5 rounded bg-[#0B1020] border border-[#1F2A44] text-[11px] text-text-secondary">
                  &bull; {str}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="space-y-1 pt-1 border-t border-[#1F2A44]">
            <span className="text-[11px] font-mono uppercase text-text-muted font-bold block">
              Education & Certifications
            </span>
            <div className="text-[11px] text-text-primary">
              B.Tech in CS & Engineering (AI & ML) &bull; Siddharth Institute of Engg. & Tech. (CGPA: 8.23/10)
            </div>
            <div className="text-[11px] text-text-muted">
              Certifications: NPTEL The Joy of Computing Using Python &bull; Python Full Stack Development
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 border-t border-[#1F2A44] bg-[#0B1020]/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-mono text-text-muted">
            Uploaded Resumes: Exact PDFs
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={pdfMap[selectedLens]}
              target="_blank"
              rel="noopener noreferrer"
              download={`Resume-Thandlam-Uthej-Sai-${selectedLens}.pdf`}
              className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-accent-blue hover:bg-accent-blue/90 text-[#0B1020] text-xs font-mono font-bold inline-flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-accent-blue/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official PDF ({selectedLens})</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
