import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const AboutSection = () => {
  const techOrbNodes = [
    { name: "Python", icon: "🐍" },
    { name: "Django REST", icon: "🟢" },
    { name: "React", icon: "⚛️" },
    { name: "Groq LLM", icon: "⚡" },
    { name: "MySQL", icon: "🐬" },
    { name: "Docker", icon: "🐳" }
  ];

  return (
    <section id="about" className="section-wrapper bg-[#090D15] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF705C]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-3 border-b border-[#273246]/60">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#FF705C] inline-block rounded-full"></span>
              <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#FF705C] font-bold">
                ABOUT &amp; JOURNEY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-[#F3F5FA] tracking-tight leading-tight">
              From foundations to production systems.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#AAB5C6] font-sans max-w-sm md:text-right leading-relaxed shrink-0">
            The progression from computer science algorithms to shipping enterprise multi-tenant architectures and live RAG pipelines.
          </p>
        </div>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Column 1: Story & Professional Snapshot (6 cols) */}
          <div className="lg:col-span-6 spec-card p-6 sm:p-7 flex flex-col justify-between space-y-6">
            
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF705C] font-bold block">
                Engineering Focus
              </span>

              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-[#F3F5FA] tracking-tight">
                Backend Architectures &amp; Applied AI
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-[#AAB5C6] leading-relaxed font-sans">
                I specialize in building scalable <strong className="text-slate-900 dark:text-[#F3F5FA] font-semibold">Django REST Framework backends</strong>, implementing rigorous <strong className="text-slate-900 dark:text-[#F3F5FA] font-semibold">multi-tenant data isolation</strong>, and integrating live <strong className="text-slate-900 dark:text-[#F3F5FA] font-semibold">LLM/RAG pipelines</strong>.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-[#AAB5C6] leading-relaxed font-sans">
                During my software internship at Z.APPS, I took ownership of core enterprise ERP/HRMS features used by 130+ employees, resolved critical N+1 query bottlenecks cutting latency by ~1s, and designed an immutable double-entry leave ledger.
              </p>
            </div>

            {/* Quick status badge */}
            <div className="pt-2 flex items-center justify-between border-t border-slate-200 dark:border-[#273246]/60 text-xs font-mono">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-[#28C49A]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#28C49A] animate-pulse" />
                <span>Available for Full-Time SDE &amp; AI Roles</span>
              </div>
              <span className="text-slate-500 dark:text-[#6B7A90]">2026 Cohort</span>
            </div>

          </div>

          {/* Column 2: Compact Skills Constellation / Stack Summary (6 cols) */}
          <div className="lg:col-span-6 spec-card p-6 sm:p-7 flex flex-col justify-between space-y-6">
            
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-sky-600 dark:text-[#61CAE8] font-bold block">
                  Core Technologies
                </span>
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-[#F3F5FA]">
                  Active Technology Stack
                </h3>
              </div>

              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-9 h-9 rounded-full bg-slate-100 dark:bg-[#090D15] hover:bg-[#FF705C] hover:text-white dark:hover:text-[#090D15] text-slate-600 dark:text-[#AAB5C6] flex items-center justify-center transition-all duration-200 border border-slate-200 dark:border-[#273246] shrink-0 cursor-pointer"
                title="Jump to Full Technical Stack"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Compact Constellation Graphic */}
            <div className="relative py-6 flex items-center justify-center">
              
              {/* Circular Path */}
              <div className="absolute w-48 sm:w-56 h-48 sm:h-56 rounded-full border border-dashed border-slate-300 dark:border-[#273246] pointer-events-none" />

              {/* Central Avatar Node (Suit photo) */}
              <div className="relative z-10 w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-[#FF705C] to-[#61CAE8] shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-[#090D15] border-2 border-white dark:border-[#090D15]">
                  <img
                    src="/profile-suit.jpg"
                    alt="Uthej Avatar"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating Orbiting Tech Badges */}
              <div className="absolute inset-0 flex items-center justify-around pointer-events-none">
                {techOrbNodes.map((tech, idx) => {
                  const angles = [0, 60, 120, 180, 240, 300];
                  const angle = angles[idx];
                  const rad = (angle * Math.PI) / 180;
                  const radius = 96;
                  const x = Math.cos(rad) * radius;
                  const y = Math.sin(rad) * radius;

                  return (
                    <div
                      key={tech.name}
                      style={{ transform: `translate(${x}px, ${y}px)` }}
                      className="absolute pointer-events-auto px-2.5 py-1 rounded-lg bg-white dark:bg-[#090D15] border border-slate-200 dark:border-[#273246] hover:border-[#FF705C] shadow-md transition-all duration-200 flex items-center gap-1.5 cursor-default"
                    >
                      <span className="text-xs select-none">{tech.icon}</span>
                      <span className="text-[11px] font-mono font-bold text-slate-800 dark:text-[#F3F5FA]">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Bottom Summary */}
            <div className="pt-2 border-t border-[#273246]/60 flex items-center justify-between text-xs font-mono text-[#AAB5C6]">
              <span>Django REST &bull; Multi-Tenant &bull; Hybrid RAG &bull; Scikit-Learn</span>
              <a 
                href="#skills" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[#61CAE8] hover:text-[#FF705C] cursor-pointer"
              >
                Inspect skills &rarr;
              </a>
            </div>

          </div>

        </div>

        {/* 2 Clear Career Milestones (Foundations -> Production) */}
        <div className="pt-4 space-y-10">
          
          <div className="text-xs font-mono uppercase tracking-wider text-[#6B7A90] font-bold pb-2 border-b border-[#273246]/60">
            Two-Stage Engineering Trajectory
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Stage 01: Foundations (College Red Shirt Photo) */}
            <div className="spec-card p-6 flex flex-col justify-between space-y-5">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-sky-600 dark:text-[#61CAE8]">
                    STAGE 01 &bull; 2022 – COLLEGE
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-[#090D15] border border-slate-200 dark:border-[#273246] text-slate-600 dark:text-[#AAB5C6]">
                    Foundations &amp; Algorithms
                  </span>
                </div>

                <div className="flex gap-4 items-start">
                  {/* College Red Shirt Photo */}
                  <div className="w-24 h-28 rounded-xl overflow-hidden bg-white dark:bg-[#090D15] border border-slate-200 dark:border-[#273246] shrink-0 shadow-sm">
                    <img
                      src="/uthej-red-shirt.jpg"
                      alt="Uthej College Foundations"
                      className="w-full h-full object-cover object-top filter contrast-105"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold font-heading text-slate-900 dark:text-[#F3F5FA]">
                      Computer Science &amp; Engineering (AI &amp; ML)
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-[#AAB5C6] leading-relaxed">
                      Siddharth Institute of Engineering &amp; Technology (CGPA: 8.23). Rigorous training in data structures, algorithms, relational databases, object-oriented systems, and machine learning fundamentals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-[#273246]/60 flex flex-wrap gap-1.5 text-[10.5px] font-mono text-slate-700 dark:text-[#AAB5C6]">
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-[#090D15] border border-slate-200 dark:border-[#273246]">Python</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-[#090D15] border border-slate-200 dark:border-[#273246]">Java</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-[#090D15] border border-slate-200 dark:border-[#273246]">SQL</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-[#090D15] border border-slate-200 dark:border-[#273246]">Data Structures</span>
              </div>

            </div>

            {/* Stage 02: Production (Z.APPS Production Engineer) */}
            <div className="spec-card p-6 flex flex-col justify-between space-y-5">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-[#28C49A]">
                    STAGE 02 &bull; 2026 – PRODUCTION
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-[#090D15] border border-emerald-200 dark:border-[#273246] text-emerald-700 dark:text-[#28C49A]">
                    Production SDE &amp; AI
                  </span>
                </div>

                <div className="flex gap-4 items-start">
                  {/* Street/Production Hoodie Photo */}
                  <div className="w-24 h-28 rounded-xl overflow-hidden bg-white dark:bg-[#090D15] border border-slate-200 dark:border-[#273246] shrink-0 shadow-sm">
                    <img
                      src="/uthej-black-hoodie.jpg"
                      alt="Uthej Production Engineer"
                      className="w-full h-full object-cover object-center filter contrast-105"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold font-heading text-slate-900 dark:text-[#F3F5FA]">
                      Production Multi-Tenant SaaS &amp; Applied AI
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-[#AAB5C6] leading-relaxed">
                      Z.APPS Software Internship: Shipped five-layer multi-tenancy, resolved database bottlenecks (-80%), and built live hybrid RAG pipelines with 70/30 retrieval fusion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-[#273246]/60 flex flex-wrap gap-1.5 text-[10.5px] font-mono text-slate-700 dark:text-[#AAB5C6]">
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-[#090D15] border border-slate-200 dark:border-[#273246]">130+ SaaS Users</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-[#090D15] border border-slate-200 dark:border-[#273246]">Django REST</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-[#090D15] border border-slate-200 dark:border-[#273246]">Live RAG (Render)</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-[#090D15] border border-slate-200 dark:border-[#273246]">Ensemble ML (98%)</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
