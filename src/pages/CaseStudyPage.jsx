import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { featuredProjects, moreProjects } from '../data/portfolioData';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import { Github } from '../components/Icons';

export const CaseStudyPage = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const allProjects = [...featuredProjects, ...moreProjects];
  const project = allProjects.find((p) => p.slug === slug);

  if (!project || !project.caseStudy) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <h2 className="text-2xl font-bold text-text-primary">Case Study Not Found</h2>
        <p className="text-text-secondary text-sm">The project "{slug}" could not be located.</p>
        <Link
          to="/"
          className="px-4 py-2 rounded-lg bg-accent-blue text-[#0B1020] font-semibold text-xs font-mono"
        >
          &larr; Back to Portfolio
        </Link>
      </div>
    );
  }

  const cs = project.caseStudy;

  return (
    <article className="py-14 md:py-20">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Navigation */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>

        {/* 1. Header: Title, role, timeline, stack tags */}
        <header className="space-y-4 border-b border-[#1F2A44] pb-8">
          <div className="flex items-center gap-2">
            <span className="spec-tag text-accent-blue border-accent-blue/30">
              {project.tag}
            </span>
            <span className="text-xs font-mono text-text-muted">
              Role: Full-Stack Ownership
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            {project.title}
          </h1>

          <p className="text-sm text-text-secondary leading-relaxed">
            {project.outcome}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((t, i) => (
              <span key={i} className="spec-tag">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-2 text-xs font-mono">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-text-primary hover:text-accent-blue"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Source Code</span>
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-accent-blue hover:underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Repository / Demo</span>
              </a>
            )}
          </div>
        </header>

        {/* 2. Problem */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-text-muted">
            01 / Problem
          </h2>
          <div className="spec-card p-5 text-sm text-text-secondary leading-relaxed">
            {cs.problem}
          </div>
        </section>

        {/* 3. Users and Goals */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-text-muted">
            02 / Users & Goals
          </h2>
          <div className="spec-card p-5 space-y-2.5">
            {cs.users.map((u, i) => (
              <div key={i} className="text-xs sm:text-sm text-text-secondary flex items-start gap-2.5">
                <span className="text-accent-blue font-mono font-bold">&bull;</span>
                <p>{u}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Key Decisions & Trade-Offs (PM / Architecture Signal) */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-text-muted">
            03 / Key Decisions & Trade-Offs
          </h2>
          <div className="spec-card p-5 space-y-3">
            {cs.decisions.map((d, i) => (
              <div key={i} className="text-xs sm:text-sm text-text-secondary flex items-start gap-2.5">
                <span className="text-accent-teal font-mono font-bold">&bull;</span>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Architecture Breakdown */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-text-muted">
            04 / Architecture
          </h2>
          <div className="spec-card p-5 space-y-2">
            {cs.architecture.map((layer, i) => (
              <div key={i} className="p-2.5 rounded bg-[#0B1020] border border-[#1F2A44] text-xs font-mono text-text-primary">
                {layer}
              </div>
            ))}
          </div>
        </section>

        {/* 6. Challenges & Solutions */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-text-muted">
            05 / Challenges & Solutions
          </h2>
          <div className="space-y-3">
            {cs.challenges.map((c, i) => (
              <div key={i} className="spec-card p-5 space-y-2">
                <div className="text-xs font-semibold text-text-primary">
                  Bottleneck: <span className="text-text-secondary font-normal">{c.problem}</span>
                </div>
                <div className="text-xs text-text-secondary pt-2 border-t border-[#1F2A44]">
                  <strong className="text-accent-blue font-medium">Solution:</strong> {c.solution}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Results (Real numbers only) */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-text-muted">
            06 / Results (Measured Telemetry)
          </h2>
          <div className="spec-card p-5 space-y-2.5">
            {cs.results.map((r, i) => (
              <div key={i} className="text-xs sm:text-sm text-text-primary font-medium flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent-teal shrink-0 mt-0.5" />
                <span>{r}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Lessons */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-text-muted">
            07 / Lessons Learned
          </h2>
          <div className="spec-card p-5 space-y-2 text-xs sm:text-sm text-text-secondary italic">
            {cs.lessons.map((l, i) => (
              <p key={i}>"{l}"</p>
            ))}
          </div>
        </section>

        {/* Back Link */}
        <div className="pt-6 border-t border-[#1F2A44]">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-accent-blue hover:underline"
          >
            &larr; Back to Portfolio
          </Link>
        </div>

      </div>
    </article>
  );
};
