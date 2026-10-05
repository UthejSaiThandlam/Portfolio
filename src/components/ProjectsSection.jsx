import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { featuredProjects, moreProjects } from '../data/portfolioData';
import { ArrowRight, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Github } from './Icons';

export const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="py-20 md:py-24 border-b border-[#1F2A44]">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-text-muted">
            01 / PROVEN & APPLIED WORK
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary">
            Featured Projects
          </h2>
          <p className="text-sm text-text-secondary max-w-xl">
            Shipped production systems and working technical prototypes. Each card features real outcomes and a detailed architectural case study.
          </p>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="spec-card p-6 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Tag */}
                <div className="flex items-center justify-between">
                  <span className="spec-tag text-accent-blue border-accent-blue/30">
                    {project.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold text-text-primary">
                    <Link to={`/projects/${project.slug}`} className="hover:text-accent-blue transition-colors">
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
                    Outcome
                  </span>
                  <p className="text-xs font-medium text-text-primary">
                    {project.outcome}
                  </p>
                </div>

                {/* Tech tags: rounded pill, border only, no fill */}
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
                  <ArrowRight className="w-3.5 h-3.5" />
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
                    title="Live Demo / Code"
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
            <span>{showMore ? "Collapse additional projects" : "View more projects (task worker & teardown)"}</span>
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
