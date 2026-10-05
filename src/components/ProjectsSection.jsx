import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { featuredProjects, moreProjects } from '../data/portfolioData';
import { ArrowRight, ChevronDown, ChevronUp, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';

export const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Full Stack & SaaS', label: 'Full Stack & SaaS' },
    { id: 'AI & LLMOps', label: 'AI / LLMs' },
    { id: 'Machine Learning & Data', label: 'Machine Learning' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-24 border-b border-white/[0.06] bg-[#070B14]">
      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Centered Header (Directly matching Image 3 style) */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Projects
          </h2>
          <div className="text-sm font-semibold text-cyan-400 font-heading">
            Some of my Work
          </div>
          <p className="text-xs sm:text-sm text-slate-400 font-sans">
            Production systems, RAG planners, and predictive ensemble models with measurable outcomes.
          </p>

          {/* Centered Filter Pills (Matching Image 3) */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive 
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20 scale-105' 
                      : 'bg-[#0E172A] text-slate-400 hover:text-white border border-white/[0.08] hover:border-cyan-500/30'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid (Styled with Image 3 aesthetics & circular arrow button) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="spec-card p-6 flex flex-col justify-between space-y-5 group hover:border-cyan-500/40 relative"
            >
              <div className="space-y-4">
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="spec-tag text-cyan-400 border-cyan-500/30">
                    {project.tag}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-cyan-400 transition-colors">
                    <Link to={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Outcome Pill */}
                <div className="p-3 rounded-xl bg-[#090E1B] border border-white/[0.06] space-y-0.5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">
                    Measured Outcome
                  </span>
                  <p className="text-xs font-semibold text-slate-200">
                    {project.outcome}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="spec-tag text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar with Circular Arrow Button (Matching Image 3) */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  <span>Case Study</span>
                </Link>

                <div className="flex items-center gap-2">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                    title="Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {/* Circular Action Arrow Button (from Image 3) */}
                  <Link
                    to={`/projects/${project.slug}`}
                    className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-cyan-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200 group-hover:bg-cyan-500 group-hover:text-slate-950"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Collapsible More Projects */}
        <div className="text-center pt-2">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>{showMore ? "Collapse additional projects" : "View more systems (task worker & teardowns)"}</span>
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
                      className="text-xs font-mono text-cyan-400 hover:underline inline-flex items-center gap-1"
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
