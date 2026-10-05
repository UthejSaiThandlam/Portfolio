import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Github } from './Icons';
import { useRole } from '../context/RoleContext';

export const ProjectCard = ({ project }) => {
  const { activeLens } = useRole();

  const currentLensHighlight = project.lensHighlights[activeLens] || project.lensHighlights.engineer;

  const getCategoryBadge = (cat) => {
    switch (cat) {
      case 'backend':
        return 'text-sky-300 bg-sky-500/10 border-sky-500/30';
      case 'ai':
        return 'text-purple-300 bg-purple-500/10 border-purple-500/30';
      case 'product':
        return 'text-indigo-300 bg-indigo-500/10 border-indigo-500/30';
      case 'data':
        return 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30';
      default:
        return 'text-slate-300 bg-slate-800 border-slate-700';
    }
  };

  return (
    <div className="glass-card rounded-2xl border border-slate-800 p-6 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-sky-500/40">
      
      <div className="space-y-4">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium border ${getCategoryBadge(project.categoryFilter)}`}>
            {project.category}
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 text-[11px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
              <Sparkles className="w-3 h-3" /> Featured Production
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
            <Link to={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* One Line Outcome Banner */}
        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-1">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            Outcome / Real Metric:
          </div>
          <div className="text-xs font-semibold text-emerald-300">
            {project.oneLineOutcome}
          </div>
        </div>

        {/* Dynamic Lens Perspective Callout */}
        <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/60 text-xs text-slate-400 space-y-0.5">
          <span className="text-[10px] font-mono uppercase text-sky-400/90 block">
            {activeLens} Angle:
          </span>
          <p className="text-slate-300 text-xs italic">
            "{currentLensHighlight}"
          </p>
        </div>

        {/* Tech Stack Chips (Monospace tags as requested) */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800/80 text-slate-400 text-[11px] font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-3">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 group/link"
        >
          <span>Read Full Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>

        <div className="flex items-center gap-2">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="GitHub Code"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-colors"
              title="Live Link / Repository"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
};
