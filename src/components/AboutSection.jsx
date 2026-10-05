import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { useRole } from '../context/RoleContext';
import { CheckCircle2, Award, Building, BookOpen, Compass } from 'lucide-react';

export const AboutSection = () => {
  const { activeLens } = useRole();

  return (
    <section id="about" className="py-20 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Focused Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-2">
                <span className="w-2 h-0.5 bg-sky-400"></span>
                01 &bull; Identity & Perspective
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Not just code snippets. <br className="hidden sm:inline"/>
                <span className="text-slate-400">End-to-end software that users rely on daily.</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a final-year Computer Science undergraduate specializing in Artificial Intelligence & Machine Learning (B.Tech 2026, CGPA 8.23). Rather than writing isolated academic scripts, I spent 6 months at <strong className="text-white font-semibold">Z.APPS</strong> building and shipping a multi-tenant enterprise HRMS/ERP platform directly into the hands of <span className="text-emerald-400 font-mono font-medium">130+ daily corporate employees</span>.
              </p>
              <p>
                My work sits at the intersection of <strong className="text-white">backend architecture</strong>, <strong className="text-white">applied AI/RAG systems</strong>, and <strong className="text-white">product scoping</strong>. I treat every database query as an operational cost and every user interaction as a promise of clarity.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm font-mono border-l-2 border-sky-500 pl-3">
                "Whether diagnosing an N+1 SQL bottleneck, tuning an ensemble classifier, or drafting a functional PRD for multi-tier manager approvals—my goal is simple: eliminate friction and deliver verified results."
              </p>
            </div>

            {/* Quick credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-mono font-semibold mb-1">
                  <Award className="w-3.5 h-3.5" /> Academics
                </div>
                <div className="text-sm font-semibold text-slate-200">CGPA 8.23 / 10.0</div>
                <div className="text-[11px] text-slate-400 font-mono">B.Tech CS (AI&ML) 2026</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-semibold mb-1">
                  <Building className="w-3.5 h-3.5" /> Industry Proof
                </div>
                <div className="text-sm font-semibold text-slate-200">Z.APPS SaaS</div>
                <div className="text-[11px] text-slate-400 font-mono">130+ Live Users</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold mb-1">
                  <Compass className="w-3.5 h-3.5" /> Approach
                </div>
                <div className="text-sm font-semibold text-slate-200">Product-Minded</div>
                <div className="text-[11px] text-slate-400 font-mono">Problem &rarr; Telemetry</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Philosophy Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-5 relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Engineering Principles
                </span>
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-100 block">No Speculative Marketing</span>
                    <span className="text-slate-400 text-xs">Skills are backed by working code, deployed PRDs, or measured telemetry.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-100 block">Pragmatic Over Trendy</span>
                    <span className="text-slate-400 text-xs">Used PostgreSQL row-isolation and indexed ledger rows over unnecessary distributed complexity.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-100 block">Data-Driven Validation</span>
                    <span className="text-slate-400 text-xs">Track p95 latencies, user dispute drops, and ROC-AUC metrics instead of subjective opinions.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-100 block">Full Product Empathy</span>
                    <span className="text-slate-400 text-xs">Write code thinking about the non-technical user who has to navigate it on Monday morning.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Status: Available for Full-Time & Internships</span>
                <span className="text-sky-400">2026 Batch</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
