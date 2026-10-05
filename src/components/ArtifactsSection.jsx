import React, { useState } from 'react';
import { productArtifacts } from '../data/portfolioData';
import { 
  FileText, 
  BarChart3, 
  GitCommit, 
  Download, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Layers, 
  TrendingDown, 
  TrendingUp,
  Maximize2
} from 'lucide-react';
import { useRole } from '../context/RoleContext';

export const ArtifactsSection = () => {
  const { activeLens } = useRole();
  const [activeTab, setActiveTab] = useState('prd');
  const [selectedKpiMonth, setSelectedKpiMonth] = useState('Jun');

  const prdArtifact = productArtifacts.find(a => a.type === 'PRD');
  const kpiArtifact = productArtifacts.find(a => a.type === 'KPI Mock');
  const flowArtifact = productArtifacts.find(a => a.type === 'Process Flow');

  const downloadPRD = () => {
    const textContent = `
=====================================================
PRODUCT REQUIREMENT DOCUMENT (PRD)
PROJECT: Enterprise Multi-Tier Leave Ledger Engine
AUTHOR: Thandlam Uthej Sai (Product-Minded Engineer)
TARGET PRODUCT: Z.APPS HRMS/ERP Platform (130+ Active Users)
=====================================================

1. EXECUTIVE SUMMARY
Employees across 3 corporate tiers experienced recurring confusion over leave balances due to manual adjustments in spreadsheets. This PRD outlines an automated, double-entry transactional leave management module with manager delegation and real-time ledger auditing.

2. TARGET PERSONAS
- Standard Employee: Submits requests, tracks remaining quota, receives webhook alerts.
- Team Lead / Approver: Reviews team absences, evaluates conflict overlap, 1-click tokenized approvals.
- HR Administrator: Sets organizational policies, handles exceptions, exports compliance audit ledgers.

3. FUNCTIONAL REQUIREMENTS
[FR-1] Ledger Calculation: Balance MUST be derived from the sum of immutable credit/debit records.
[FR-2] Conflict Detection: Concurrent submissions for identical dates must acquire a row-level lock.
[FR-3] Multi-Tier Escalation: If a manager fails to act within 48h, auto-route to department head.

4. NON-FUNCTIONAL REQUIREMENTS
- API response p95 under 250ms (achieved 185ms).
- Zero data leakage between organization tenants (5-layer isolation).

5. OUTCOMES ACHIEVED
- 130+ daily enterprise users onboarded.
- 65% drop in internal leave disputes.
- 82% query latency reduction post N+1 optimization.
    `.trim();

    const element = document.createElement("a");
    const file = new Blob([textContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "PRD-HRMS-Leave-Ledger-Thandlam-Uthej-Sai.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="artifacts" className="py-20 border-b border-slate-800/80 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-2">
              <span className="w-2 h-0.5 bg-sky-400"></span>
              04 &bull; Product & Analytics Artifacts
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Tangible PM & BA Deliverables
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Concrete proof of product discovery, user journeys, functional PRDs, and analytical telemetry. Not just hypothetical assertions.
            </p>
          </div>

          {/* Artifact Tab Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs font-mono">
            <button
              onClick={() => setActiveTab('prd')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'prd'
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>HRMS PRD</span>
            </button>

            <button
              onClick={() => setActiveTab('kpi')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'kpi'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>KPI Telemetry</span>
            </button>

            <button
              onClick={() => setActiveTab('flow')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'flow'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <GitCommit className="w-3.5 h-3.5" />
              <span>Process Flow</span>
            </button>
          </div>
        </div>

        {/* Tab 1: PRD Viewer */}
        {activeTab === 'prd' && prdArtifact && (
          <div className="glass-card rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 font-semibold">
                    {prdArtifact.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Context: {prdArtifact.context}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {prdArtifact.title}
                </h3>
              </div>

              <button
                onClick={downloadPRD}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-850 text-sky-400 border border-slate-700 text-xs font-mono font-medium hover:border-sky-400 transition-all self-start sm:self-auto"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Clean PRD (.txt)</span>
              </button>
            </div>

            {/* Key PRD Target Outcomes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {prdArtifact.keyMetrics.map((km, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    {km.label}
                  </span>
                  <span className="text-lg font-bold font-mono text-indigo-300">
                    {km.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Structured PRD Sections */}
            <div className="space-y-4 pt-2">
              {prdArtifact.sections.map((sec, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    {sec.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 whitespace-pre-line leading-relaxed pl-3.5">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Author: Thandlam Uthej Sai (Intern Product Lead)</span>
              <span className="text-emerald-400">Status: Shipped to Production (130+ Users)</span>
            </div>
          </div>
        )}

        {/* Tab 2: KPI Telemetry Dashboard Mock */}
        {activeTab === 'kpi' && kpiArtifact && (
          <div className="glass-card rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-semibold">
                    {kpiArtifact.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{kpiArtifact.context}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {kpiArtifact.title}
                </h3>
              </div>
              <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Simulated Live Telemetry Stream
              </div>
            </div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
              {kpiArtifact.mockStats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    {stat.title}
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold font-mono text-white">
                    {stat.value}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <TrendingUp className="w-3 h-3" />
                    <span>{stat.change}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Breakdown Simulation */}
            <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Month-over-Month Impact: Query Latency Drop vs. Leave Disputes
                  </h4>
                  <p className="text-xs text-slate-400">
                    Demonstrating how resolving N+1 database queries coincided with drop in employee support tickets.
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Data: 6-Month Z.APPS Pilot
                </div>
              </div>

              {/* Visual Bar representation */}
              <div className="grid grid-cols-6 gap-2 sm:gap-4 pt-4 text-center">
                {kpiArtifact.chartData.map((d) => {
                  const isSelected = selectedKpiMonth === d.month;
                  return (
                    <div
                      key={d.month}
                      onClick={() => setSelectedKpiMonth(d.month)}
                      className={`p-3 rounded-xl cursor-pointer transition-all ${
                        isSelected 
                          ? 'bg-slate-800 border border-sky-400/60 shadow-lg' 
                          : 'bg-slate-950/60 border border-slate-850 hover:bg-slate-850'
                      }`}
                    >
                      <div className="text-xs font-mono font-bold text-white mb-2">{d.month}</div>
                      
                      {/* Latency column height */}
                      <div className="h-28 flex items-end justify-center gap-1.5 pb-2">
                        {/* Latency bar */}
                        <div 
                          className="w-3 bg-sky-500 rounded-t transition-all"
                          style={{ height: `${(d.latency / 1200) * 100}%` }}
                          title={`API Latency: ${d.latency}ms`}
                        />
                        {/* Disputes bar */}
                        <div 
                          className="w-3 bg-amber-400 rounded-t transition-all"
                          style={{ height: `${(d.leaveDisputes / 20) * 100}%` }}
                          title={`Disputes: ${d.leaveDisputes}`}
                        />
                      </div>

                      <div className="text-[10px] font-mono text-slate-400">
                        {d.latency}ms
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-6 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-sky-500"></span> API p95 Latency (ms)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-amber-400"></span> Reported Disputes (Count)
                </span>
              </div>
            </div>

            <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>Analytical Insight: System responsiveness directly lowered perceived administrative errors by 89%.</span>
            </div>
          </div>
        )}

        {/* Tab 3: Process Flow Diagram */}
        {activeTab === 'flow' && flowArtifact && (
          <div className="glass-card rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-800 pb-5">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-sky-500/10 text-sky-300 border border-sky-500/30 font-semibold">
                {flowArtifact.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {flowArtifact.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {flowArtifact.summary}
              </p>
            </div>

            {/* Stepper Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {flowArtifact.steps.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 relative space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold font-mono text-sky-400">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      Phase {idx + 1}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Flow Logic Code snippet preview */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 font-mono text-xs text-slate-300 space-y-1">
              <span className="text-slate-500 block">// Transactional Guard Pseudocode (Immutable Double-Entry Ledger)</span>
              <span className="text-purple-400">with</span> transaction.atomic():
              <div className="pl-4 text-slate-300">
                ledger = LeaveLedger.objects.select_for_update().filter(tenant_id=ctx.tenant_id, employee_id=req.emp_id)<br/>
                <span className="text-sky-300">if</span> ledger.available_balance &lt; req.days:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">raise</span> InsufficientBalanceError(<span className="text-emerald-300">"Overdraft not permitted"</span>)<br/>
                LeaveLedgerEntry.create(type=<span className="text-emerald-300">"DEBIT"</span>, days=req.days, approved_by=ctx.user_id)
              </div>
            </div>

            <div className="text-xs font-mono text-slate-400">
              Result: Zero race conditions or duplicate booking collisions across 130+ concurrent employees.
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
