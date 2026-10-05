import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { featuredProjects, moreProjects } from '../data/portfolioData';
import { ArrowRight, ChevronDown, ChevronUp, ExternalLink, Sparkles, LayoutGrid, Terminal, Cpu, Database } from 'lucide-react';
import { Github } from './Icons';

export const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: LayoutGrid },
    { id: 'Full Stack & SaaS', label: 'Full Stack & SaaS', icon: Terminal },
    { id: 'AI & LLMOps', label: 'AI & LLMs', icon: Cpu },
    { id: 'Machine Learning & Data', label: 'ML & Analytics', icon: Database }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-24 border-b border-[#1F2A44]">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Section Header with Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="text-xs font-mono text-text-muted">
              01 / PROVEN & APPLIED WORK
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary">
              Featured Projects
            </h2>
            <p className="text-sm text-text-secondary max-w-xl">
              Shipped production systems and working prototypes. Each card features real outcomes and an architectural case study.
            </p>
          </div>

          {/* Interactive Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121A2F] border border-[#1F2A44] rounded-lg self-start md:self-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                    isActive 
                      ? 'bg-accent-blue text-[#0B1020] font-bold shadow-sm' 
                      : 'text-text-secondary hover:text-text-primary hover:bg-[#18233F]'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="spec-card p-6 flex flex-col justify-between space-y-5 hover:border-accent-blue/40 transition-all duration-200 group"
            >
              <div className="space-y-4">
                {/* Tag & Category */}
                <div className="flex items-center justify-between">
                  <span className="spec-tag text-accent-blue border-accent-blue/30">
                    {project.tag}
                  </span>
                  <span className="text-[11px] font-mono text-text-muted">
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                    <Link to={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Outcome */}
                <div className="p-3 rounded-lg bg-[#0B1020] border border-[#1F2A44] space-y-1">
                  <span className="text-[10px] font-mono uppercase text-text-muted tracking-wider block">
                    Verified Outcome
                  </span>
                  <p className="text-xs font-medium text-text-primary">
                    {project.outcome}
                  </p>
                </div>

                {/* Key Metric Chips */}
                {project.keyStats && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.keyStats.map((stat, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#18233F] text-accent-teal border border-accent-teal/20">
                        {stat}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech tags: rounded pill, border only */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="spec-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#1F2A44] flex items-center justify-between gap-3 text-xs font-mono">
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-accent-blue hover:underline font-semibold"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2 text-text-muted">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 hover:text-text-primary transition-colors"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 hover:text-accent-blue transition-colors"
                    title="Live Code / Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Collapsed "More Projects" Toggle */}
        <div className="mt-8 pt-4 border-t border-[#1F2A44]/60">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors"
          >
            <span>{showMore ? "Collapse additional projects" : "View more projects (asynchronous task worker & teardown)"}</span>
            {showMore ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showMore && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {moreProjects.map((p) => (
                <div key={p.id} className="spec-card p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="spec-tag">{p.tag}</span>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-text-primary text-xs font-mono inline-flex items-center gap-1"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">{p.title}</h4>
                    <p className="text-xs text-text-secondary mt-1">{p.outcome}</p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {p.technologies.map((t, i) => (
                      <span key={i} className="spec-tag text-[11px]">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
