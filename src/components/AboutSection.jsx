import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const AboutSection = () => {
  const techOrbNodes = [
    { name: "Python", icon: "🐍", color: "from-blue-500/20 to-yellow-500/20 text-yellow-300" },
    { name: "Django", icon: "🟢", color: "from-emerald-500/20 to-teal-500/20 text-emerald-300" },
    { name: "React", icon: "⚛️", color: "from-cyan-500/20 to-blue-500/20 text-cyan-300" },
    { name: "Groq LLM", icon: "⚡", color: "from-orange-500/20 to-amber-500/20 text-amber-300" },
    { name: "Docker", icon: "🐳", color: "from-sky-500/20 to-blue-500/20 text-sky-300" },
    { name: "MySQL", icon: "🐬", color: "from-indigo-500/20 to-blue-500/20 text-blue-300" }
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-white/[0.06] bg-[#090C12] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-16 relative z-10">
        
        {/* Section Tag */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-[11px] font-mono uppercase tracking-[0.15em] text-indigo-400">
            About
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            A quick snapshot From where I started to where I am today.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            The journey of building deep engineering foundations, architecting production multi-tenant SaaS, and shipping live AI systems.
          </p>
        </div>

        {/* Bento Grid (Exact Recreation of User's Latest Inspiration Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Card 1: "Learn more about me" (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0D1017] border border-white/[0.08] hover:border-white/[0.18] p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all duration-300 shadow-xl relative overflow-hidden group">
            
            <div className="space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Learn more about me
              </span>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
                  Hi, I'm Uthej Sai
                </h3>
                <p className="text-xs sm:text-sm text-[#f5a285] font-mono font-semibold">
                  Backend &amp; AI/ML Engineer &bull; B.Tech '26 (CGPA 8.23)
                </p>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans pt-1">
                  I specialize in Django REST backends, multi-tenant architectures, and live LLM/RAG pipelines. At Z.APPS, I shipped core features for an enterprise SaaS used by 130+ employees, cutting database query bottlenecks by 80%.
                </p>
              </div>
            </div>

            {/* Photo Sticker Frame inside Card (Matching Image 1 Left Bento Card) */}
            <div className="pt-2 flex items-center justify-between">
              
              {/* Status pill */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Open to SDE &amp; AI Roles</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 block">
                  Bengaluru &bull; Tirupati
                </div>
              </div>

              {/* Tilted Photo Sticker (Image 1 Style) */}
              <div className="w-28 sm:w-32 h-36 sm:h-40 p-2 rounded-2xl bg-gradient-to-b from-white/15 to-white/5 border border-white/25 shadow-2xl backdrop-blur-md transform rotate-6 group-hover:rotate-0 transition-transform duration-300 shrink-0">
                <div className="w-full h-full rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src="/uthej-red-shirt.jpg"
                    alt="Uthej Sai Portrait"
                    className="w-full h-full object-cover object-top filter contrast-105"
                  />
                </div>
              </div>

            </div>

          </div>

          {/* Bento Card 2: "Skills Orbital Network" (7 cols) - Replicating Image 1 Right Bento Card */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0D1017] border border-white/[0.08] hover:border-white/[0.18] p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all duration-300 shadow-xl relative overflow-hidden group">
            
            {/* Header with Arrow Link */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  Interactive Skills &amp; Stack
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
                  Skills &amp; Technologies
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  A growing list of technologies and systems I actively engineer with.
                </p>
              </div>

              {/* Corner Circular Arrow Button (Matching Image 1) */}
              <a
                href="#skills"
                className="w-10 h-10 rounded-full bg-white/[0.06] hover:bg-[#f5a285] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200 shadow-lg border border-white/[0.1] shrink-0"
                title="Jump to Full Technical Stack"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            {/* Orbital Interactive Graphic (Center Avatar with Orbiting Nodes matching Image 1) */}
            <div className="relative py-6 sm:py-8 flex items-center justify-center">
              
              {/* Background Orbit Ring Paths */}
              <div className="absolute w-52 sm:w-64 h-52 sm:h-64 rounded-full border border-dashed border-white/[0.1] pointer-events-none animate-spin" style={{ animationDuration: '45s' }} />
              <div className="absolute w-72 sm:w-88 h-72 sm:h-88 rounded-full border border-white/[0.05] pointer-events-none" />

              {/* Central Avatar Node (Image 1 Center Circle) */}
              <div className="relative z-10 w-20 sm:w-24 h-20 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-[#f5a285] to-indigo-500 shadow-2xl shadow-[#f5a285]/20 hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 border-2 border-[#090C12]">
                  <img
                    src="/uthej-beach-sunset.png"
                    alt="Uthej Central Avatar"
                    className="w-full h-full object-cover object-center filter brightness-105"
                  />
                </div>
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full ring-4 ring-[#f5a285]/30 animate-pulse pointer-events-none" />
              </div>

              {/* Floating Orbiting Tech Badges (Matching Image 1 Floating Orbit Badges) */}
              <div className="absolute inset-0 flex items-center justify-around pointer-events-none">
                {techOrbNodes.map((tech, idx) => {
                  // Pre-computed positions around the central circle
                  const angles = [0, 60, 120, 180, 240, 300];
                  const angle = angles[idx];
                  const rad = (angle * Math.PI) / 180;
                  const radius = 110; // px
                  const x = Math.cos(rad) * radius;
                  const y = Math.sin(rad) * radius;

                  return (
                    <div
                      key={tech.name}
                      style={{
                        transform: `translate(${x}px, ${y}px)`
                      }}
                      className="absolute pointer-events-auto p-2 sm:p-2.5 rounded-xl bg-[#141824] border border-white/[0.12] hover:border-[#f5a285]/60 hover:scale-110 shadow-xl transition-all duration-200 flex items-center gap-1.5 cursor-default group/orb"
                    >
                      <span className="text-sm select-none">{tech.icon}</span>
                      <span className="text-[11px] font-mono font-bold text-slate-200 group-hover/orb:text-[#f5a285] transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Bottom Tech Pills Summary */}
            <div className="pt-2 border-t border-white/[0.06] flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
              <span>Django REST &bull; Multi-Tenant &bull; Hybrid RAG &bull; Ensemble ML</span>
              <a href="#skills" className="text-[#f5a285] hover:underline inline-flex items-center gap-1">
                View all skills &rarr;
              </a>
            </div>

          </div>

        </div>

        {/* Curved Journey Roadmap Section (Exact Recreation of Image 3) */}
        <div className="relative max-w-4xl mx-auto pt-8 pb-4">
          
          {/* Central Connecting Road/Timeline Path (Desktop Curved Path SVG) */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 800 650" fill="none" preserveAspectRatio="none">
              <path
                d="M 320 60 C 320 180, 290 280, 290 320 C 290 360, 480 390, 480 580"
                stroke="rgba(99, 102, 241, 0.22)"
                strokeWidth="2.5"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          <div className="space-y-20 relative z-10">
            
            {/* Milestone 1: Origins (Image 3: Left Card, Right Text) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              
              {/* Left Column: Tilted Photo / Card Badge (Matching Image 3 Card 1 with White Shirt Photo) */}
              <div className="md:col-span-5 flex justify-center md:justify-end">
                <div className="relative group">
                  <div className="w-60 sm:w-68 p-3 rounded-2xl bg-gradient-to-b from-white/12 to-white/5 border border-white/20 shadow-2xl backdrop-blur-md transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="w-full h-68 rounded-xl overflow-hidden bg-slate-900 relative">
                      <img
                        src="/uthej-white-shirt.jpg"
                        alt="Uthej Programming Origins"
                        className="w-full h-full object-cover object-center filter contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-3.5">
                        <span className="text-[11px] font-mono text-white/90 bg-slate-900/80 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-sm">
                          Foundations &amp; Algorithms
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-3 -right-3 bg-indigo-600 text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-lg border border-indigo-400">
                    2022 - College
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative Block */}
              <div className="md:col-span-7 space-y-3.5 text-left relative pl-2 md:pl-6 border-l-2 md:border-l-0 border-indigo-500/30">
                
                <div className="hidden md:flex absolute -left-[30px] top-4 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 items-center justify-center" />

                <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                  Phase 01 / Origins
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
                  My programming origins
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  I decided to pursue <strong className="text-white font-semibold">Computer Science &amp; Engineering (AI &amp; ML)</strong> at Siddharth Institute of Engineering &amp; Technology. My passion for engineering began with an urge to understand the mathematical and computational engines behind modern software.
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  Starting with Python, Java, object-oriented design, and SQL, I built foundational systems from scratch. Excelling in data structures, DBMS, and algorithms helped me build a rigorous core and confirmed that scalable backend architectures and applied AI were the path I wanted to follow.
                </p>

                <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono text-slate-300">
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">Python</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">Java</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">Algorithms</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">SQL &amp; Relational DBs</span>
                </div>

              </div>

            </div>

            {/* Milestone 2: Scaled Systems & AI (Image 3: Left Text, Right Card with Street Hoodie Photo) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              
              {/* Left Column: Narrative Block */}
              <div className="md:col-span-7 space-y-3.5 text-left order-2 md:order-1 relative pr-0 md:pr-6 border-l-2 md:border-l-0 border-indigo-500/30 pl-2 md:pl-0">
                
                <div className="hidden md:flex absolute -right-[26px] top-4 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 items-center justify-center" />

                <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                  Phase 02 / Production &amp; Scale
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
                  Finding My Way to Production &amp; Scaled AI
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Bridging the gap between theory and industry scale, I stepped into production as a <strong className="text-white font-semibold">Python Full Stack Intern at Z.APPS</strong>, shipping features for an enterprise multi-tenant HRMS/ERP SaaS serving 130+ employees across Django REST and React.
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  There, I engineered a five-layer multi-tenancy isolation architecture, resolved critical N+1 query bottlenecks reducing redundant calls by 80%, built immutable-ledger leave systems, and integrated Groq LLM chatbots. Simultaneously, I deployed live end-to-end RAG pipelines with 70/30 hybrid retrieval and multi-provider fallback, alongside dual stacked ML ensembles reaching 98% accuracy.
                </p>

                <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono text-slate-300">
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">Z.APPS SaaS</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">130+ Employees</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">N+1 Query Tuning (-80%)</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">Live RAG (Render)</span>
                </div>

              </div>

              {/* Right Column: Tilted Photo / Card Badge (Matching Image 3 Card 2 with Street Hoodie Photo) */}
              <div className="md:col-span-5 flex justify-center md:justify-start order-1 md:order-2">
                <div className="relative group">
                  <div className="w-60 sm:w-68 p-3 rounded-2xl bg-gradient-to-b from-white/12 to-white/5 border border-white/20 shadow-2xl backdrop-blur-md transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="w-full h-68 rounded-xl overflow-hidden bg-slate-900 relative">
                      <img
                        src="/uthej-black-hoodie.jpg"
                        alt="Uthej Production Engineer Street Style"
                        className="w-full h-full object-cover object-center filter contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-3.5">
                        <span className="text-[11px] font-mono text-white/90 bg-slate-900/80 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-sm">
                          Production SDE &amp; AI Systems
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-3 -left-3 bg-emerald-600 text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-lg border border-emerald-400">
                    Live Production
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
