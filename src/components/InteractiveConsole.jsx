import React, { useState } from 'react';
import { Terminal, Layers, Cpu, Zap, Sparkles, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';

export const InteractiveConsole = () => {
  const [activeTab, setActiveTab] = useState('rag');

  const tabs = [
    { id: 'rag', label: 'Hybrid RAG Pipeline', icon: Sparkles },
    { id: 'tenancy', label: '5-Layer Tenancy', icon: Layers },
    { id: 'query', label: 'N+1 Query Refactor (-80%)', icon: Zap },
    { id: 'tree', label: 'O(n) Org Tree Builder', icon: Cpu }
  ];

  return (
    <section id="architecture" className="section-wrapper bg-[#090D15] relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#273246]/60">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#61CAE8] inline-block rounded-full"></span>
              <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#61CAE8] font-bold">
                SIGNATURE ARCHITECTURE EXPLORER
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#F3F5FA] tracking-tight">
              System Design &amp; Pipeline Inspection
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121927] border border-[#273246] text-xs font-mono text-[#AAB5C6] self-start sm:self-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#61CAE8] animate-pulse" />
            <span>Interactive Architecture Walkthrough</span>
          </div>
        </div>

        {/* Terminal / Explorer Container */}
        <div className="spec-card overflow-hidden border border-[#273246] shadow-2xl bg-[#121927]">
          
          {/* Top Bar with System Breadcrumb and Tabs */}
          <div className="px-5 py-3.5 bg-[#0D1320] border-b border-[#273246] flex flex-wrap items-center justify-between gap-3">
            
            {/* Window Controls & Breadcrumb */}
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-[#61CAE8] ml-2 hidden sm:inline">
                architecture://{activeTab}.pipeline
              </span>
            </div>

            {/* Interactive Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-0.5 sm:pb-0">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#FF705C] text-[#090D15] font-bold shadow-md'
                        : 'bg-[#090D15] text-[#AAB5C6] hover:text-[#F3F5FA] border border-[#273246] hover:border-[#FF705C]/40'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Interactive Content Panels */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Tab 1: Hybrid RAG Pipeline */}
            {activeTab === 'rag' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-[#273246]">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-[#F3F5FA]">
                      Hybrid RAG Document Planner &amp; Retrieval Engine
                    </h3>
                    <p className="text-xs text-slate-700 dark:text-[#AAB5C6] font-sans">
                      Combines 70% dense semantic similarity with 30% BM25 keyword matching and multi-provider fallback.
                    </p>
                  </div>
                  <a
                    href="https://rag-ai-planner-1.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF705C] text-[#090D15] text-xs font-mono font-bold hover:bg-[#FF5840] transition-colors self-start shrink-0 shadow-sm"
                  >
                    <span>Inspect Live Render App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Visual Pipeline Stages */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  {[
                    { step: "01. Ingestion", desc: "PDF, DOCX, TXT parsing with sliding-window chunking (500 chars, 100 overlap)" },
                    { step: "02. Hybrid Index", desc: "Dual index: TF-IDF vector matrix + BM25 keyword inverted index" },
                    { step: "03. Fusion Score", desc: "Rank = 0.70 × CosineSim + 0.30 × BM25Score, re-ranking top-5 chunks" },
                    { step: "04. LLM Generation", desc: "Gemini 2.5 Flash fallback to Groq Llama 3.3 70B with cited page sources" }
                  ].map((s, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-100 dark:bg-[#090D15] border border-slate-200 dark:border-[#273246] space-y-1.5">
                      <span className="text-[11px] font-mono text-sky-600 dark:text-[#61CAE8] font-bold block">{s.step}</span>
                      <p className="text-xs text-slate-700 dark:text-[#AAB5C6] font-sans leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Code / Architecture Snippet */}
                <div className="rounded-xl bg-[#0B0F19] border border-slate-800 dark:border-[#273246] p-4 font-mono text-xs text-[#F3F5FA] overflow-x-auto shadow-inner">
                  <span className="text-[#6B7A90] block pb-2"># Hybrid retrieval fusion implementation</span>
                  <pre className="text-[11.5px] leading-relaxed text-[#AAB5C6]">
{`def hybrid_retrieve(query: str, top_k: int = 5, semantic_weight: float = 0.7):
    # Dense semantic cosine similarity
    query_vec = vectorizer.transform([query])
    semantic_scores = cosine_similarity(query_vec, doc_vectors).flatten()

    # Sparse BM25 keyword score
    tokenized_query = query.lower().split()
    bm25_scores = bm25_index.get_scores(tokenized_query)

    # Normalized score fusion
    hybrid_scores = (semantic_weight * normalize(semantic_scores) + 
                     (1 - semantic_weight) * normalize(bm25_scores))
    top_indices = np.argsort(hybrid_scores)[::-1][:top_k]
    return [chunks[idx] for idx in top_indices]`}
                  </pre>
                </div>
              </div>
            )}

            {/* Tab 2: 5-Layer Multi-Tenancy */}
            {activeTab === 'tenancy' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="pb-3 border-b border-slate-200 dark:border-[#273246]">
                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-[#F3F5FA]">
                    Five-Layer Tenant Isolation Architecture
                  </h3>
                  <p className="text-xs text-slate-700 dark:text-[#AAB5C6] font-sans">
                    Zero data leakage across client companies on Z.APPS production HRMS/ERP SaaS.
                  </p>
                </div>

                {/* 5 Layer Architecture Graphic */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
                  {[
                    { num: "L1", name: "CompanyMiddleware", detail: "Resolves tenant slug from JWT payload & subdomain" },
                    { num: "L2", name: "HRRouter", detail: "Routes write transactions to dedicated tenant DB schemas" },
                    { num: "L3", name: "TenantManager", detail: "Filters all base ORM queries by request company context" },
                    { num: "L4", name: "TenantScopedModel", detail: "Injects foreign key company_id and composite indices" },
                    { num: "L5", name: "Audit Tools", detail: "Automated scan catching any un-scoped cross-tenant leakage" }
                  ].map((layer, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-100 dark:bg-[#090D15] border border-slate-200 dark:border-[#273246] space-y-1">
                      <span className="text-[10px] font-mono text-[#FF705C] font-bold block">{layer.num} &bull; {layer.name}</span>
                      <p className="text-[11px] text-slate-700 dark:text-[#AAB5C6] leading-tight">{layer.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl bg-[#0B0F19] border border-slate-800 dark:border-[#273246] p-4 font-mono text-xs text-[#F3F5FA] overflow-x-auto shadow-inner">
                  <span className="text-[#6B7A90] block pb-2"># Django TenantScopedManager pattern</span>
                  <pre className="text-[11.5px] leading-relaxed text-[#AAB5C6]">
{`class TenantManager(models.Manager):
    def get_queryset(self):
        # Automatically scopes every query to current thread tenant
        current_tenant = get_current_tenant()
        if not current_tenant:
            raise SecurityException("Unscoped tenant access detected")
        return super().get_queryset().filter(company=current_tenant)`}
                  </pre>
                </div>
              </div>
            )}

            {/* Tab 3: N+1 Query Refactoring */}
            {activeTab === 'query' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="pb-3 border-b border-slate-200 dark:border-[#273246]">
                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-[#F3F5FA]">
                    N+1 Query Resolution (-80% Redundant Calls)
                  </h3>
                  <p className="text-xs text-slate-700 dark:text-[#AAB5C6] font-sans">
                    Resolved critical database latency when rendering organizational employee directory.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Before */}
                  <div className="p-4 rounded-xl bg-rose-50 dark:bg-[#090D15] border border-rose-300 dark:border-rose-500/30 space-y-2">
                    <span className="text-xs font-mono text-rose-600 dark:text-rose-400 font-bold block">
                      Before Optimization (130+ Queries)
                    </span>
                    <p className="text-xs text-slate-700 dark:text-[#AAB5C6]">
                      Each employee row executed individual lookups for permissions, company roles, and leave balances in a loop.
                    </p>
                    <div className="text-[11px] font-mono text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-500/10 p-2 rounded">
                      Average response: ~1.28s &bull; DB CPU spikes under concurrent load
                    </div>
                  </div>

                  {/* After */}
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-[#090D15] border border-emerald-300 dark:border-[#28C49A]/40 space-y-2">
                    <span className="text-xs font-mono text-emerald-600 dark:text-[#28C49A] font-bold block">
                      After Refactor (2 Batched Queries)
                    </span>
                    <p className="text-xs text-slate-700 dark:text-[#AAB5C6]">
                      Prefetched role maps into an in-memory dictionary; single SQL batch query with tenant-composite index.
                    </p>
                    <div className="text-[11px] font-mono text-emerald-700 dark:text-[#28C49A] bg-emerald-100 dark:bg-[#28C49A]/10 p-2 rounded">
                      Average response: ~240ms &bull; 80% fewer database roundtrips
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: O(n) Org Tree Builder */}
            {activeTab === 'tree' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="pb-3 border-b border-slate-200 dark:border-[#273246]">
                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-[#F3F5FA]">
                    O(n) Adjacency-List Hierarchy Builder
                  </h3>
                  <p className="text-xs text-slate-700 dark:text-[#AAB5C6] font-sans">
                    Constructs recursive organization charts in linear time without nested database queries.
                  </p>
                </div>

                <div className="rounded-xl bg-[#0B0F19] border border-slate-800 dark:border-[#273246] p-4 font-mono text-xs text-[#F3F5FA] overflow-x-auto shadow-inner">
                  <span className="text-[#6B7A90] block pb-2"># Linear time hierarchy assembly</span>
                  <pre className="text-[11.5px] leading-relaxed text-[#AAB5C6]">
{`def build_org_tree(employees):
    nodes = {emp['id']: {**emp, 'children': []} for emp in employees}
    root_nodes = []
    for emp_id, node in nodes.items():
        parent_id = node.get('reports_to_id')
        if parent_id and parent_id in nodes:
            nodes[parent_id]['children'].append(node)
        else:
            root_nodes.append(node)
    return root_nodes  # O(n) time and O(n) space`}
                  </pre>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
