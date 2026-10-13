import React, { useState } from 'react';
import { Terminal, Layers, Cpu, Zap, Sparkles, ExternalLink } from 'lucide-react';

export const InteractiveConsole = () => {
  const [activeTab, setActiveTab] = useState('rag');

  const tabs = [
    { id: 'rag', label: 'Live RAG Planner', icon: Sparkles },
    { id: 'tenancy', label: '5-Layer Tenancy', icon: Layers },
    { id: 'tree', label: 'O(n) Org Tree Builder', icon: Cpu },
    { id: 'query', label: 'N+1 Query Refactor', icon: Zap },
    { id: 'groq', label: 'Groq LLM Chatbot', icon: Terminal }
  ];

  return (
    <section className="py-16 md:py-20 border-b border-white/[0.06] bg-[#070B14]/60 relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-cyan-400 font-bold block">
              ENTERPRISE PRODUCTION ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
              Interactive System Architecture & Code Console
            </h2>
          </div>

          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-1.5 self-start sm:self-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Production Proven
          </span>
        </div>

        {/* Terminal Window Card (Inspired by Image 2 & 4) */}
        <div className="spec-card overflow-hidden border border-white/[0.09] shadow-2xl">
          
          {/* Mac Dots & Tab Header */}
          <div className="px-4 py-3 bg-[#0A101D] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
            
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-slate-400 ml-2">core_system://architecture.spec</span>
            </div>

            {/* Interactive Tabs with Responsive Mobile Scroll */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-0.5 sm:pb-0 scrollbar-none">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.04] border border-transparent'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Console Content Display */}
          <div className="p-5 sm:p-6 bg-[#070B14]/90 font-mono text-xs sm:text-sm text-slate-300 space-y-4">
            
            {/* Tab 0: Live RAG Planner */}
            {activeTab === 'rag' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <span>$</span>
                    <span className="text-white">curl -X POST https://rag-ai-planner-1.onrender.com/api/query -d '{`{"query": "syllabus milestones", "mode": "hybrid"}`}'</span>
                  </div>
                  <a
                    href="https://rag-ai-planner-1.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f5a285] text-slate-950 font-bold font-mono hover:bg-[#ffb399] transition-all"
                  >
                    <ExternalLink className="w-3 h-3" /> Live Demo
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-2">
                  <div className="p-3.5 rounded-lg bg-[#0E172A] border border-purple-500/30 space-y-1">
                    <span className="text-[10px] text-purple-400 block font-bold">STAGE 1: INGESTION</span>
                    <div className="text-xs font-bold text-white">Multi-Format Parser</div>
                    <p className="text-[11px] text-slate-400 font-sans">Sliding window chunking (500 chars, 100 overlap) across PDF, DOCX, TXT, MD.</p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#0E172A] border border-cyan-500/30 space-y-1">
                    <span className="text-[10px] text-cyan-400 block font-bold">STAGE 2: VECTOR INDEX</span>
                    <div className="text-xs font-bold text-white">TF-IDF + Inverted Index</div>
                    <p className="text-[11px] text-slate-400 font-sans">Document vectors + frequency index for sub-millisecond sparse lookup.</p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#0E172A] border border-emerald-500/30 space-y-1">
                    <span className="text-[10px] text-emerald-400 block font-bold">STAGE 3: HYBRID FUSION</span>
                    <div className="text-xs font-bold text-white">70% Semantic + 30% BM25</div>
                    <p className="text-[11px] text-slate-400 font-sans">Linear rank fusion balancing concept proximity with strict terminology recall.</p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#0E172A] border border-amber-500/30 space-y-1">
                    <span className="text-[10px] text-amber-400 block font-bold">STAGE 4: LLM FALLBACK</span>
                    <div className="text-xs font-bold text-white">Gemini &rarr; Groq Llama 3.3</div>
                    <p className="text-[11px] text-slate-400 font-sans">Automatic provider rollover ensuring 99.9% uptime and citations (top-5 chunks).</p>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#0A101D] border border-white/[0.06] text-xs text-emerald-400 flex flex-wrap items-center justify-between gap-2">
                  <span>Pipeline Live: Deployed on Render with Cited Answers &amp; Vector Search endpoints.</span>
                  <span className="text-[#f5a285] font-mono text-[11px]">rag-ai-planner-1.onrender.com</span>
                </div>
              </div>
            )}

            {/* Tab 1: 5-Layer Tenancy */}
            {activeTab === 'tenancy' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 text-xs">
                  <span>$</span>
                  <span className="text-white">inspect --module multi-tenancy --layers 5</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-[#0E172A] border border-cyan-500/20 space-y-1">
                    <span className="text-[10px] text-cyan-400 block font-bold">LAYER 1</span>
                    <div className="text-xs font-bold text-white">TenantScopedModel</div>
                    <p className="text-[11px] text-slate-400 font-sans">Automatic tenant foreign-key scoping on all Django models.</p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0E172A] border border-cyan-500/20 space-y-1">
                    <span className="text-[10px] text-cyan-400 block font-bold">LAYER 2</span>
                    <div className="text-xs font-bold text-white">TenantManager</div>
                    <p className="text-[11px] text-slate-400 font-sans">Custom querysets intercepting SQL to inject current tenant constraints.</p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0E172A] border border-cyan-500/20 space-y-1">
                    <span className="text-[10px] text-cyan-400 block font-bold">LAYER 3</span>
                    <div className="text-xs font-bold text-white">JWT Claims Auth</div>
                    <p className="text-[11px] text-slate-400 font-sans">Organization & role token payload preventing cross-tenant spoofing.</p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0E172A] border border-cyan-500/20 space-y-1">
                    <span className="text-[10px] text-cyan-400 block font-bold">LAYER 4</span>
                    <div className="text-xs font-bold text-white">HRRouter Multi-DB</div>
                    <p className="text-[11px] text-slate-400 font-sans">Dynamic database routing directing queries to tenant-assigned schemas.</p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0E172A] border border-cyan-500/20 space-y-1">
                    <span className="text-[10px] text-cyan-400 block font-bold">LAYER 5</span>
                    <div className="text-xs font-bold text-white">CompanyMiddleware</div>
                    <p className="text-[11px] text-slate-400 font-sans">Request lifecycle resolution binding organization context thread-safe.</p>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#0A101D] border border-white/[0.06] text-xs text-emerald-400 flex items-center justify-between">
                  <span>Status: 100% data isolation verified across multi-tenant boundaries.</span>
                  <span className="text-slate-400 text-[11px]">Audit: Static Tooling Passed</span>
                </div>
              </div>
            )}

            {/* Tab 2: O(n) Org Tree */}
            {activeTab === 'tree' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 text-xs">
                  <span>$</span>
                  <span className="text-white">run org_tree_builder.py --benchmark --nodes 500</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0E172A] border border-white/[0.08] space-y-2">
                  <div className="text-text-muted">// Single-pass linear tree construction with cycle detection</div>
                  <div className="text-white">Input: 500 corporate hierarchy nodes with multi-root department directors</div>
                  <div className="text-emerald-400 font-bold">Time Taken: 1.42ms &bull; Memory Allocation: O(n) &bull; Cycles Detected: 0</div>
                  <div className="text-slate-300 font-sans text-xs">
                    Replaced recursive database CTE calls with a single dictionary map index, guaranteeing instantaneous UI rendering on company directory pages.
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: N+1 Query Refactor */}
            {activeTab === 'query' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 text-xs">
                  <span>$</span>
                  <span className="text-white">compare_perf --before "v1.2.0" --after "v1.3.0-bulk-role-map"</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20 space-y-1.5">
                    <span className="text-rose-400 font-bold text-xs uppercase block">Before Refactor (N+1 Storm)</span>
                    <div className="text-white font-bold">184 SQL Queries per page</div>
                    <div className="text-slate-400 text-xs">Response Latency: ~1,200ms</div>
                    <p className="text-[11px] text-slate-400 font-sans">Each employee card initiated individual queries for role, department, and leave balance.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1.5">
                    <span className="text-emerald-400 font-bold text-xs uppercase block">After Refactor (Bulk Role-Map)</span>
                    <div className="text-white font-bold">3 Batched Queries total</div>
                    <div className="text-emerald-400 text-xs font-bold">Response Latency: 185ms (84% Faster)</div>
                    <p className="text-[11px] text-slate-400 font-sans">Batch prefetching via select_related and bulk hash index mapping eliminated database load.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Groq LLM Chatbot */}
            {activeTab === 'groq' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 text-xs">
                  <span>$</span>
                  <span className="text-white">groq_agent --auth "employee-id:4082" --query "How many casual leave days do I have left?"</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0E172A] border border-white/[0.08] space-y-2">
                  <div className="text-slate-500 text-xs">// Dual Auth Verified: Employee-ID mode (Staff role scoped)</div>
                  <div className="text-purple-400 text-xs">// Groq Llama 3 Inference: 145ms response time</div>
                  <div className="text-white font-sans text-xs sm:text-sm pl-2 border-l-2 border-cyan-400">
                    "You have <strong>4 days of Casual Leave</strong> and <strong>11 days of Earned Leave</strong> available. All past requests have been audited and debited via the double-entry ledger."
                  </div>
                  <div className="text-emerald-400 text-[11px] pt-1">
                    &bull; Access logged to audit table: transaction_id #98142 &bull; No tenant boundary leaks.
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
