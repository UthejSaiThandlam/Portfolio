import React, { useState } from 'react';
import { productArtifacts } from '../data/portfolioData';
import { FileText, ListChecks, GitBranch, BarChart3, Download, ExternalLink, X } from 'lucide-react';

export const ProductWorkSection = () => {
  const [activeModalArtifact, setActiveModalArtifact] = useState(null);

  const getArtifactIcon = (type) => {
    switch (type) {
      case 'PRD': return <FileText className="w-4 h-4 text-accent-blue" />;
      case 'User Stories': return <ListChecks className="w-4 h-4 text-accent-teal" />;
      case 'Process Flow': return <GitBranch className="w-4 h-4 text-indigo-400" />;
      case 'KPI Mock': default: return <BarChart3 className="w-4 h-4 text-amber-400" />;
    }
  };

  const handleDownload = (artifact) => {
    if (!artifact.downloadableText) return;
    const element = document.createElement("a");
    const file = new Blob([artifact.downloadableText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${artifact.id}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="product-work" className="py-20 md:py-24 border-b border-[#1F2A44]">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-text-muted">
            03 / PM & BUSINESS ANALYSIS DIRECTION
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary">
            Product & Business Thinking
          </h2>
          <p className="text-sm text-text-secondary max-w-xl">
            Tangible artifacts proving product management and business analysis capabilities. Production PRDs alongside self-initiated practice.
          </p>
        </div>

        {/* 4 Artifact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productArtifacts.map((art) => (
            <div
              key={art.id}
              className="spec-card p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getArtifactIcon(art.type)}
                    <span className="text-xs font-mono font-medium text-text-muted">
                      {art.context}
                    </span>
                  </div>
                  <span className="spec-tag text-[11px]">
                    {art.badge}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-text-primary">
                  {art.title}
                </h3>

                <p className="text-xs text-text-secondary leading-relaxed">
                  {art.summary}
                </p>

                {/* Specific preview data */}
                {art.type === 'KPI Mock' && (
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {art.metrics.map((m, i) => (
                      <div key={i} className="p-2.5 rounded bg-[#0B1020] border border-[#1F2A44]">
                        <div className="text-[10px] font-mono text-text-muted uppercase">{m.label}</div>
                        <div className="text-base font-bold font-mono text-accent-blue">{m.value}</div>
                        <div className="text-[10px] text-text-muted">{m.sub}</div>
                      </div>
                    ))}
                  </div>
                )}

                {art.type === 'Process Flow' && (
                  <div className="space-y-1.5 pt-2">
                    {art.steps.map((st, i) => (
                      <div key={i} className="text-xs font-mono text-text-secondary bg-[#0B1020] p-2 rounded border border-[#1F2A44]">
                        {st}
                      </div>
                    ))}
                  </div>
                )}

                {art.type === 'User Stories' && (
                  <div className="space-y-1.5 pt-2">
                    {art.stories.slice(0, 2).map((s, i) => (
                      <div key={i} className="text-xs text-text-secondary bg-[#0B1020] p-2.5 rounded border border-[#1F2A44] leading-relaxed">
                        <span className="text-text-primary font-medium">As a {s.asA},</span> I want {s.iWant} so that {s.soThat}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action */}
              <div className="pt-3 border-t border-[#1F2A44] flex items-center justify-between text-xs font-mono">
                {art.downloadableText ? (
                  <button
                    onClick={() => handleDownload(art)}
                    className="inline-flex items-center gap-1.5 text-accent-blue hover:underline font-medium"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Spec (.txt)</span>
                  </button>
                ) : (
                  <span className="text-text-muted">Documented in codebase</span>
                )}

                <button
                  onClick={() => setActiveModalArtifact(art)}
                  className="text-text-muted hover:text-text-primary"
                >
                  View full artifact &rarr;
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for full viewing */}
        {activeModalArtifact && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1020]/80 backdrop-blur-sm">
            <div className="bg-[#121A2F] border border-[#1F2A44] rounded-xl max-w-xl w-full p-6 space-y-4 max-h-[85vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-[#1F2A44] pb-3">
                <div className="flex items-center gap-2">
                  {getArtifactIcon(activeModalArtifact.type)}
                  <h3 className="text-sm font-bold text-text-primary font-mono">
                    {activeModalArtifact.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalArtifact(null)}
                  className="text-text-muted hover:text-text-primary"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs text-text-secondary leading-relaxed space-y-3 font-sans">
                <p>{activeModalArtifact.summary}</p>
                {activeModalArtifact.downloadableText && (
                  <pre className="p-3 bg-[#0B1020] border border-[#1F2A44] rounded font-mono text-[11px] whitespace-pre-wrap text-text-primary">
                    {activeModalArtifact.downloadableText}
                  </pre>
                )}
                {activeModalArtifact.stories && (
                  <div className="space-y-2">
                    {activeModalArtifact.stories.map((st, i) => (
                      <div key={i} className="p-2.5 bg-[#0B1020] border border-[#1F2A44] rounded">
                        <strong>Story {i+1} ({st.asA}):</strong> As a {st.asA}, I want {st.iWant} so that {st.soThat}.
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-[#1F2A44] flex justify-end">
                <button
                  onClick={() => setActiveModalArtifact(null)}
                  className="px-4 py-1.5 rounded bg-[#1F2A44] hover:bg-[#334771] text-xs font-mono text-text-primary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
