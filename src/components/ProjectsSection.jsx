import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { featuredProjects, moreProjects } from '../data/portfolioData';
import { 
  ExternalLink, 
  Code2, 
  Sparkles, 
  Layers, 
  Activity, 
  CalendarCheck, 
  ChevronDown, 
  ChevronUp,
  BookOpen
} from 'lucide-react';
import { Github } from './Icons';

export const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'AI & LLMOps', label: 'AI & LLMs' },
    { id: 'Full Stack & SaaS', label: 'Full Stack & SaaS' },
    { id: 'Machine Learning & Data', label: 'Machine Learning' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(p => p.category === activeCategory);

  // Icon mapping for top header icons (matching Image 1)
  const getProjectIcon = (id) => {
    switch (id) {
      case 'ai-study-planner-rag':
        return <Sparkles className="w-5 h-5 text-purple-300" />;
      case 'enterprise-hrms-erp':
        return <Layers className="w-5 h-5 text-emerald-300" />;
      case 'heart-disease-ensemble':
        return <Activity className="w-5 h-5 text-rose-300" />;
      case 'attendance-management-system':
      default:
        return <CalendarCheck className="w-5 h-5 text-sky-300" />;
    }
  };

  const getHeaderGradient = (accent) => {
    switch (accent) {
      case 'purple':
        return 'from-purple-900/40 via-purple-950/20 to-transparent border-purple-500/30';
      case 'emerald':
        return 'from-emerald-900/40 via-emerald-950/20 to-transparent border-emerald-500/30';
      case 'rose':
        return 'from-rose-900/40 via-rose-950/20 to-transparent border-rose-500/30';
      case 'cyan':
      default:
        return 'from-cyan-900/40 via-cyan-950/20 to-transparent border-cyan-500/30';
    }
  };

  const getIconWrapper = (accent) => {
    switch (accent) {
      case 'purple':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 'emerald':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'rose':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      case 'cyan':
      default:
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-white/[0.06] bg-[#0A0D14] relative">
      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono uppercase tracking-[0.15em] text-[#f5a285]">
            Featured Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            Projects
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            Shipped production SaaS platforms, live RAG pipelines, and 98% accuracy predictive ensembles.
          </p>

          {/* Centered Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive 
                      ? 'bg-[#f5a285] text-slate-950 font-bold shadow-md shadow-[#f5a285]/20 scale-105' 
                      : 'bg-[#121620] text-slate-400 hover:text-white border border-white/[0.08] hover:border-[#f5a285]/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid - Exact Replication of Image 1 Aesthetics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {filteredProjects.map((project) => {
            const hasLiveDemo = Boolean(project.links?.live);

            return (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#0F1218] border border-white/[0.09] hover:border-white/[0.2] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Top Subtle Gradient Bar & Icon Header (Matching Image 1) */}
                <div className={`p-5 pb-3 border-b border-white/[0.06] bg-gradient-to-b ${getHeaderGradient(project.accentColor)} flex items-center justify-between`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-inner ${getIconWrapper(project.accentColor)}`}>
                    {getProjectIcon(project.id, project.accentColor)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]">
                    {project.tag}
                  </span>
                </div>

                {/* Card Main Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    {/* Title & Subtitle */}
                    <div className="space-y-1.5">
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight group-hover:text-[#f5a285] transition-colors">
                        {project.caseStudy ? (
                          <Link to={`/projects/${project.slug}`}>
                            {project.title}
                          </Link>
                        ) : (
                          <span>{project.title}</span>
                        )}
                      </h3>
                      <div className="text-xs sm:text-sm font-semibold text-[#f5a285] tracking-wide font-heading">
                        {project.subtitle}
                      </div>
                    </div>

                    {/* High-level Description Paragraph */}
                    <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Bullet Points with Arrow (Matching Image 1: → text) */}
                    <div className="space-y-2 pt-1">
                      {project.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                          <span className="text-[#f5a285] font-bold text-sm select-none leading-none mt-0.5">
                            &rarr;
                          </span>
                          <span className="flex-1 font-sans">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags & Bottom Actions */}
                  <div className="space-y-5 pt-3">
                    
                    {/* Tech Badges (Rounded pill tags with peach border/tint matching Image 1) */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-2.5 py-1 rounded-full text-[11px] font-mono text-[#fcd5c7] bg-[#1a171c] border border-[#f5a285]/25 hover:border-[#f5a285]/60 hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action Buttons (Matching Image 1) */}
                    <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2.5">
                      
                      {/* Live Demo Button (Peach filled button if live link exists) */}
                      {hasLiveDemo ? (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#f5a285] hover:bg-[#ffb399] text-slate-950 font-bold text-xs font-heading shadow-md shadow-[#f5a285]/20 transition-all hover:scale-[1.02] active:scale-100"
                        >
                          <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                          <span>Live Demo</span>
                        </a>
                      ) : project.caseStudy ? (
                        <Link
                          to={`/projects/${project.slug}`}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold text-xs font-heading border border-white/[0.1] transition-colors"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-[#f5a285]" />
                          <span>Case Study</span>
                        </Link>
                      ) : null}

                      {/* View Code Button (Dark outline button with code icon) */}
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className={`${hasLiveDemo ? 'flex-1' : 'w-full'} inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-transparent hover:bg-white/[0.05] text-slate-200 hover:text-white font-semibold text-xs font-mono border border-white/[0.14] hover:border-white/30 transition-all`}
                        title="View Source Code"
                      >
                        <Code2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                        <span>View Code</span>
                      </a>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Collapsible More Projects */}
        <div className="text-center pt-4">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#f5a285] transition-colors px-4 py-2 rounded-lg bg-white/[0.02] border border-white/[0.06]"
          >
            <span>{showMore ? "Collapse additional systems" : "View additional backend systems (task worker & workflows)"}</span>
            {showMore ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showMore && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-left">
              {moreProjects.map((p) => (
                <div key={p.id} className="spec-card p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="spec-tag">{p.tag}</span>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-[#f5a285] hover:underline inline-flex items-center gap-1"
                    >
                      <Github className="w-3.5 h-3.5" /> Code
                    </a>
                  </div>
                  <h4 className="text-sm font-bold text-white font-heading">{p.title}</h4>
                  <p className="text-xs text-slate-400">{p.outcome}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
