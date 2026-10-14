import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { featuredProjects, moreProjects } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Code2, 
  Sparkles, 
  Layers, 
  Activity, 
  ChevronDown, 
  ChevronUp,
  BookOpen
} from 'lucide-react';
import { Github } from './Icons';

export const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);

  // Top 3 primary featured projects (HRMS, RAG Planner, ML Ensemble)
  const primaryFeatured = featuredProjects.slice(0, 3);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'ai-study-planner-rag':
        return <Sparkles className="w-5 h-5 text-[#61CAE8]" />;
      case 'enterprise-hrms-erp':
        return <Layers className="w-5 h-5 text-[#28C49A]" />;
      case 'heart-disease-ensemble':
      default:
        return <Activity className="w-5 h-5 text-[#FF705C]" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#273246]/70 bg-[#090D15] relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header: Dark Editorial Pacing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#273246]/60">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#FF705C] inline-block rounded-full"></span>
              <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#FF705C] font-bold">
                Featured Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#F3F5FA] tracking-tight">
              Production SaaS &amp; Applied AI Systems
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#AAB5C6] font-sans max-w-md leading-relaxed">
            Curated engineering systems built for production scale, verified multi-tenancy, and testable machine learning evaluation.
          </p>
        </div>

        {/* 3 Equal Column Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {primaryFeatured.map((project) => {
            const hasLiveDemo = Boolean(project.links?.live);

            return (
              <div
                key={project.id}
                className="spec-card flex flex-col justify-between p-6 sm:p-7 space-y-6 group hover:border-[#FF705C]/50 transition-all duration-200"
              >
                {/* Card Header: Category Tag & Icon */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-[#090D15] border border-[#273246] flex items-center justify-center shadow-inner">
                        {getProjectIcon(project.id)}
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#AAB5C6]">
                        {project.category}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#090D15] border border-[#273246] text-[#FF705C]">
                      {project.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-[#F3F5FA] group-hover:text-[#FF705C] transition-colors tracking-tight">
                      {project.caseStudy ? (
                        <Link to={`/projects/${project.slug}`}>
                          {project.title}
                        </Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </h3>
                    <div className="text-xs font-mono font-semibold text-sky-600 dark:text-[#61CAE8]">
                      {project.subtitle}
                    </div>
                  </div>

                  {/* Problem & Contribution Description */}
                  <p className="text-xs sm:text-[13px] text-slate-700 dark:text-[#AAB5C6] leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Concise Key Contributions */}
                  <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-[#273246]/60">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-[#6B7A90] font-bold block">
                      Key Technical Ownership:
                    </span>
                    {project.bullets.slice(0, 2).map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 dark:text-[#F3F5FA]/90 leading-relaxed font-normal">
                        <span className="text-[#FF705C] font-bold select-none mt-0.5">&bull;</span>
                        <span className="font-sans">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips & Obvious Actions */}
                <div className="space-y-4 pt-3 border-t border-slate-200 dark:border-[#273246]/60">
                  
                  {/* Relevant Tech Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-700 dark:text-[#AAB5C6] bg-slate-100 dark:bg-[#090D15] border border-slate-200 dark:border-[#273246] hover:border-[#FF705C]/40 hover:text-slate-900 dark:hover:text-[#F3F5FA] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Obvious Actions */}
                  <div className="flex items-center gap-2 pt-1">
                    {hasLiveDemo ? (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary-coral flex-1 py-2 px-3 text-xs flex items-center justify-center gap-1.5 font-heading cursor-pointer"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                      </a>
                    ) : project.caseStudy ? (
                      <Link
                        to={`/projects/${project.slug}`}
                        className="btn-secondary-outline flex-1 py-2 px-3 text-xs inline-flex items-center justify-center gap-1.5 cursor-pointer font-heading"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-[#FF705C]" />
                        <span>Case Study</span>
                      </Link>
                    ) : null}

                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className={`${hasLiveDemo ? 'flex-1' : 'w-full'} btn-secondary-outline py-2 px-3 text-xs inline-flex items-center justify-center gap-1.5 cursor-pointer font-mono`}
                        title="View Source Code"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Compact Additional Systems Section */}
        <div className="text-center pt-2">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#AAB5C6] hover:text-[#FF705C] transition-colors px-4 py-2.5 rounded-lg bg-[#121927] border border-[#273246] cursor-pointer"
          >
            <span>{showMore ? "Collapse additional systems" : "View additional backend systems (task worker & workflows)"}</span>
            {showMore ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showMore && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-left">
              {moreProjects.map((p) => (
                <div key={p.id} className="spec-card p-5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="spec-tag">{p.tag}</span>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-[#FF705C] hover:underline inline-flex items-center gap-1"
                    >
                      <Github className="w-3.5 h-3.5" /> Code ↗
                    </a>
                  </div>
                  <h4 className="text-sm font-bold text-[#F3F5FA] font-heading">{p.title}</h4>
                  <p className="text-xs text-[#AAB5C6]">{p.outcome}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
