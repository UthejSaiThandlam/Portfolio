import React, { useState } from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { personalInfo, experienceData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose, initialLens = 'engineer' }) => {
  const [selectedLens, setSelectedLens] = useState(initialLens);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pdfMap = {
    engineer: personalInfo.resumeLinks.engineer,
    product: personalInfo.resumeLinks.product,
    analyst: personalInfo.resumeLinks.analyst
  };

  const getLensTitle = () => {
    switch (selectedLens) {
      case 'product':
        return "Founding Product Engineer / PM Resume";
      case 'analyst':
        return "Data Systems & Telemetry Analyst Resume";
      case 'engineer':
      default:
        return "Backend and AI/ML Engineer Resume";
    }
  };

  return (
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn cursor-pointer"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-white dark:bg-[#121927] border border-slate-200 dark:border-[#273246] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col cursor-default"
      >
        
        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 border-b border-slate-200 dark:border-[#273246] bg-slate-50 dark:bg-[#0D1320]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FF705C]/15 text-[#FF705C] flex items-center justify-center border border-[#FF705C]/30">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-[#F3F5FA] font-heading">
                Verified Resume &bull; {personalInfo.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-[#AAB5C6] font-mono">
                B.Tech CSE (AI &amp; ML) &bull; Django REST &bull; Applied AI
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-200/80 dark:bg-[#090D15] p-1 rounded-lg border border-slate-300 dark:border-[#273246]">
              <span className="text-[10px] font-mono text-slate-500 dark:text-[#6B7A90] px-1.5 uppercase hidden sm:inline">Role:</span>
              {[
                { id: 'engineer', label: 'Engineer (Primary)' },
                { id: 'product', label: 'Product' },
                { id: 'analyst', label: 'Analyst' }
              ].map((lens) => (
                <button
                  key={lens.id}
                  onClick={() => setSelectedLens(lens.id)}
                  className={`px-2.5 py-1 text-xs font-mono rounded transition-colors cursor-pointer ${
                    selectedLens === lens.id 
                      ? 'bg-[#FF705C] text-[#090D15] font-bold shadow-sm' 
                      : 'text-slate-600 dark:text-[#AAB5C6] hover:text-slate-900 dark:hover:text-[#F3F5FA]'
                  }`}
                >
                  {lens.label}
                </button>
              ))}
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-slate-500 dark:text-[#AAB5C6] hover:text-slate-900 dark:hover:text-[#F3F5FA] hover:bg-slate-200 dark:hover:bg-white/[0.08] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content - Document Layout */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6 text-xs text-slate-700 dark:text-[#AAB5C6] leading-relaxed font-sans bg-white dark:bg-[#090D15]">
          
          {/* Header Info */}
          <div className="border-b border-slate-200 dark:border-[#273246] pb-4 space-y-1.5 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-[#F3F5FA] font-heading tracking-tight">
                {personalInfo.name}
              </h2>
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#28C49A]/15 text-[#28C49A] border border-[#28C49A]/30 self-center sm:self-auto">
                B.Tech CSE (AI &amp; ML) 2026 &bull; CGPA 8.23
              </span>
            </div>
            <div className="text-xs font-mono text-[#FF705C] font-semibold">
              {getLensTitle()}
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-[11px] font-mono text-slate-400 pt-1">
              <span>{personalInfo.location}</span>
              <span>&bull;</span>
              <a href={`tel:${personalInfo.phone}`} className="hover:text-white">{personalInfo.phone}</a>
              <span>&bull;</span>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white">{personalInfo.email}</a>
              <span>&bull;</span>
              <a href={personalInfo.social.github} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">GitHub</a>
              <span>&bull;</span>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">LinkedIn</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
              Professional Summary
            </div>
            <p className="text-slate-200 leading-relaxed text-xs sm:text-[13px] bg-[#12151F] p-3.5 rounded-xl border border-white/[0.06]">
              {personalInfo.summary}
            </p>
          </div>

          {/* Technical Skills Section from Resume */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
              Technical Skills
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-[#12151F] border border-white/[0.04]">
                <strong className="text-white font-mono block mb-0.5">Languages:</strong>
                <span className="text-slate-300">Python, Java, SQL, JavaScript</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#12151F] border border-white/[0.04]">
                <strong className="text-white font-mono block mb-0.5">Backend & APIs:</strong>
                <span className="text-slate-300">Django, Django REST Framework, REST API Design, Microservices, Multi-Tenant Architecture, JWT, RBAC, Middleware</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#12151F] border border-white/[0.04]">
                <strong className="text-white font-mono block mb-0.5">AI/ML & LLMs:</strong>
                <span className="text-slate-300">RAG, Google Gemini, Groq Llama 3.3 70B, Prompt Engineering, Hybrid Search (TF-IDF + BM25), Scikit-Learn, Stacked Ensembles</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#12151F] border border-white/[0.04]">
                <strong className="text-white font-mono block mb-0.5">Databases & Tools:</strong>
                <span className="text-slate-300">MySQL, SQLite, Multi-DB Routing, React.js, Git, GitHub, Postman, Render</span>
              </div>
            </div>
          </div>

          {/* Professional Experience from Resume */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
              Professional Experience
            </div>
            <div className="p-4 rounded-xl bg-[#12151F] border border-white/[0.06] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-white/[0.06] pb-2">
                <div>
                  <h4 className="font-bold text-white text-sm">
                    {experienceData.role} — <span className="text-[#f5a285]">{experienceData.company}</span>
                  </h4>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {experienceData.location}
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  {experienceData.period}
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#f5a285] font-bold">&bull;</span>
                  <span>Shipped features on a live, production multi-tenant HRMS/ERP SaaS used by <strong className="text-white">130+ employees</strong>, across Django REST backend, MySQL, and React layers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f5a285] font-bold">&bull;</span>
                  <span>Built the leave management microservice end-to-end with an <strong className="text-white">immutable-ledger balance pattern</strong> for traceable balances and automated email notifications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f5a285] font-bold">&bull;</span>
                  <span>Architected a <strong className="text-white">five-layer multi-tenancy system</strong> (TenantScopedModel, TenantManager, JWT-based tenant resolution, HRRouter multi-DB routing, CompanyMiddleware) with audit tooling to enforce tenant data isolation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f5a285] font-bold">&bull;</span>
                  <span>Resolved a critical N+1 query bottleneck via a bulk role-map refactor, reducing redundant calls by <strong className="text-white">80%</strong> and cutting response time by <strong className="text-white">~1 second</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f5a285] font-bold">&bull;</span>
                  <span>Built an AI chatbot using Groq LLM with RBAC-scoped, audit-logged query access; implemented dual authentication paths (JWT for HR/admin, employee-ID based for staff).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f5a285] font-bold">&bull;</span>
                  <span>Developed an AI-powered theme engine that extracts color palettes and style cues from uploaded images and applies them across the portal for per-tenant UI customization.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f5a285] font-bold">&bull;</span>
                  <span>Authored API and architecture documentation to support maintainability and team knowledge transfer.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Projects from Resume */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
              Projects
            </div>
            
            {/* Project 1: AI Planner using RAG */}
            <div className="p-3.5 rounded-xl bg-[#12151F] border border-white/[0.06] space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-xs sm:text-sm">
                  AI Planner using RAG | <span className="font-mono text-xs text-slate-400 font-normal">Python, Google Gemini, Groq, TF-IDF, BM25</span>
                </h4>
                <a
                  href="https://rag-ai-planner-1.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono font-bold text-[#f5a285] hover:underline inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" /> Live Demo
                </a>
              </div>
              <p className="text-xs text-slate-300">
                Built and deployed live an end-to-end RAG pipeline with document ingestion (PDF, DOCX, TXT, MD), sliding-window chunking (500 chars, 100 overlap), TF-IDF vector index, and cited answers (top-5 chunks with source document and page). Implemented hybrid retrieval fusing 70% semantic similarity and 30% BM25 keyword scores with multi-provider LLM fallback (Gemini 2.5 Flash-Lite &rarr; Gemini 2.5 Flash, Groq Llama 3.3 70B).
              </p>
            </div>

            {/* Project 2: Heart Disease Prediction */}
            <div className="p-3.5 rounded-xl bg-[#12151F] border border-white/[0.06] space-y-1.5">
              <h4 className="font-bold text-white text-xs sm:text-sm">
                Heart Disease Prediction — Dual Stacked Ensemble | <span className="font-mono text-xs text-slate-400 font-normal">Python, Scikit-learn, Pandas, NumPy</span>
              </h4>
              <p className="text-xs text-slate-300">
                Designed a dual stacked ensemble of multiple base classifiers reaching 98% accuracy, outperforming single-model baselines, with a preprocessing pipeline for real-time predictions.
              </p>
            </div>

            {/* Project 3: Attendance Management System */}
            <div className="p-3.5 rounded-xl bg-[#12151F] border border-white/[0.06] space-y-1.5">
              <h4 className="font-bold text-white text-xs sm:text-sm">
                Attendance Management System | <span className="font-mono text-xs text-slate-400 font-normal">Django, MySQL, Excel, REST APIs</span>
              </h4>
              <p className="text-xs text-slate-300">
                Automated attendance processing, raw-data validation and synchronization into structured attendance records with exportable reports.
              </p>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-2 border-t border-white/[0.08] pt-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
              Education & Certifications
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <strong className="text-white block">B.Tech in Computer Science & Engineering (AI & ML)</strong>
                <span className="text-slate-400">Siddharth Institute of Engg. & Tech., Puttur (2026)</span>
                <div className="text-[#f5a285] font-mono text-[11px]">CGPA: 8.23 / 10.0</div>
              </div>
              <div>
                <strong className="text-white block">Intermediate (MPC)</strong>
                <span className="text-slate-400">Sri Chaitanya Junior College, Tirupati (2022)</span>
                <div className="text-slate-400 font-mono text-[11px]">Marks: 787 / 1000</div>
              </div>
            </div>
            <div className="pt-2 text-xs text-slate-400">
              <strong className="text-slate-300">Certifications:</strong> NPTEL – The Joy of Computing Using Python (IIT Madras) &bull; Python Full Stack Development (Think Champ Pvt Ltd)
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 border-t border-white/[0.08] bg-[#090C12] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-mono text-slate-400">
            Official PDF Document &bull; Verified 2026 Profile
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={pdfMap[selectedLens]}
              target="_blank"
              rel="noopener noreferrer"
              download={`Resume-Thandlam-Uthej-Sai-${selectedLens}.pdf`}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#f5a285] hover:bg-[#ffb399] text-slate-950 text-xs font-heading font-bold inline-flex items-center justify-center gap-2 transition-all shadow-md shadow-[#f5a285]/20 hover:scale-[1.02]"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download Official Resume PDF</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
