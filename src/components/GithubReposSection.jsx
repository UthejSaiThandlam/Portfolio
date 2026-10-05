import React, { useState, useEffect } from 'react';
import { sampleGithubRepos, personalInfo } from '../data/portfolioData';
import { Star, GitFork, ExternalLink, RefreshCw, CheckCircle2 } from 'lucide-react';
import { Github } from './Icons';

export const GithubReposSection = () => {
  const [repos, setRepos] = useState(sampleGithubRepos);
  const [loading, setLoading] = useState(true);
  const [isLiveApi, setIsLiveApi] = useState(false);

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/UthejSaiThandlam/repos?sort=updated&per_page=6', {
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data);
            setIsLiveApi(true);
          } else {
            // Keep curated fallback
            setIsLiveApi(false);
          }
        } else {
          setIsLiveApi(false);
        }
      } catch (err) {
        console.warn('GitHub API fetch fallback to curated dataset:', err);
        setIsLiveApi(false);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

  const getLanguageColor = (lang) => {
    switch (lang) {
      case 'Python':
        return 'bg-blue-400';
      case 'JavaScript':
      case 'TypeScript':
        return 'bg-yellow-400';
      case 'HTML':
      case 'CSS':
        return 'bg-orange-400';
      case 'SQL':
        return 'bg-emerald-400';
      default:
        return 'bg-sky-400';
    }
  };

  return (
    <section className="py-20 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-2">
              <span className="w-2 h-0.5 bg-sky-400"></span>
              07 &bull; Live Open-Source Stream
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              GitHub Repositories
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Real-time feed connected to GitHub REST API. Showcases backend modules, ML pipelines, and open architectures.
            </p>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono">
            {isLiveApi ? (
              <>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-emerald-400">Live API Connected</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                <span className="text-slate-400">Curated Production Repos</span>
              </>
            )}
          </div>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="glass-card p-5 rounded-xl border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sky-400 group-hover:text-sky-300">
                    <Github className="w-4 h-4" />
                    <h3 className="text-sm font-bold font-mono text-white truncate max-w-[200px]">
                      {repo.name}
                    </h3>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white p-1 rounded transition-colors"
                    title="View Repo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {repo.description || "Clean software engineering architecture and modular implementation."}
                </p>
              </div>

              {/* Footer Meta */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${getLanguageColor(repo.language)}`}></span>
                  <span>{repo.language || 'Code'}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 hover:text-slate-200">
                    <Star className="w-3 h-3 text-amber-400" />
                    <span>{repo.stargazers_count ?? 0}</span>
                  </span>
                  <span className="flex items-center gap-1 hover:text-slate-200">
                    <GitFork className="w-3 h-3 text-slate-400" />
                    <span>{repo.forks_count ?? 0}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-200 text-xs font-mono font-medium border border-slate-800 hover:border-slate-700 transition-all"
          >
            <Github className="w-4 h-4 text-sky-400" />
            <span>Visit @UthejSaiThandlam on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

      </div>
    </section>
  );
};
