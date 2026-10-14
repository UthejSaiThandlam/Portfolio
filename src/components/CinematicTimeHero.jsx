import React, { useState, useEffect, useRef } from 'react';
import { Sun, Sunset, Moon, Clock, Sparkles } from 'lucide-react';

export const CinematicTimeHero = () => {
  const [timeMode, setTimeMode] = useState('auto'); // 'auto' | 'day' | 'sunset' | 'night'
  const [currentTime, setCurrentTime] = useState(new Date());
  const canvasRef = useRef(null);

  // Update clock every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Determine active scene based on timeMode or real local time
  const getActiveScene = () => {
    if (timeMode !== 'auto') return timeMode;
    const hour = currentTime.getHours();
    if (hour >= 6 && hour < 17) return 'day';
    if (hour >= 17 && hour < 20) return 'sunset';
    return 'night';
  };

  const activeScene = getActiveScene();

  const scenes = {
    day: {
      id: 'day',
      label: 'Daytime',
      tag: 'Midday Blue Sky',
      image: '/hero-day.jpg',
      mood: 'Peaceful midday summer light · Studio Ghibli aesthetic',
      sparkleColor: 'rgba(255, 255, 255, 0.85)',
      sunRayColor: 'rgba(255, 240, 180, 0.18)',
      waveColor: 'rgba(255, 255, 255, 0.22)',
      dappleColor: 'rgba(20, 45, 25, 0.08)'
    },
    sunset: {
      id: 'sunset',
      label: 'Golden Hour',
      tag: 'Sunset Horizon',
      image: '/hero-sunset.jpg',
      mood: 'Warm golden serene twilight · Makoto Shinkai aesthetic',
      sparkleColor: 'rgba(255, 225, 160, 0.9)',
      sunRayColor: 'rgba(255, 175, 75, 0.22)',
      waveColor: 'rgba(255, 210, 150, 0.25)',
      dappleColor: 'rgba(60, 30, 15, 0.1)'
    },
    night: {
      id: 'night',
      label: 'Starry Night',
      tag: 'Milky Way & Crescent Moon',
      image: '/hero-night.jpg',
      mood: 'Calm moonlit clifftop · Bioluminescent waves',
      sparkleColor: 'rgba(120, 220, 255, 0.85)',
      sunRayColor: 'rgba(180, 210, 255, 0.15)',
      waveColor: 'rgba(90, 200, 255, 0.3)',
      dappleColor: 'rgba(10, 15, 30, 0.12)'
    }
  };

  const currentSceneConfig = scenes[activeScene];

  // Subtle Natural Motion Canvas Animation
  // - Sparkling water highlights on the ocean
  // - Gentle sunbeam shimmer through the upper-right tree
  // - Soft wave pulse along the shoreline
  // - Dappled leaf shadow shimmer on the desk/foliage
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Sparkling water particles in the ocean area (left two-thirds of frame)
    const glints = Array.from({ length: 28 }, () => ({
      xRatio: 0.12 + Math.random() * 0.44, // 12% to 56% across ocean
      yRatio: 0.50 + Math.random() * 0.24, // 50% to 74% vertical
      size: 1 + Math.random() * 2.2,
      opacity: Math.random(),
      speed: 0.015 + Math.random() * 0.025,
      phase: Math.random() * Math.PI * 2
    }));

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      // 1. Gentle Sun / Moon Rays shimmering through tree foliage (upper-right)
      const sunX = w * 0.78;
      const sunY = h * 0.08;
      const rayGradient = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, h * 0.75);
      const rayAlpha = (0.5 + Math.sin(time * 0.8) * 0.2) * (activeScene === 'night' ? 0.4 : 0.65);
      rayGradient.addColorStop(0, currentSceneConfig.sunRayColor.replace(/[\d.]+\)$/, `${rayAlpha})`));
      rayGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.02)');
      rayGradient.addColorStop(1, 'transparent');

      ctx.fillStyle = rayGradient;
      ctx.beginPath();
      ctx.moveTo(sunX, sunY);
      ctx.arc(sunX, sunY, h * 0.85, 0.6 * Math.PI, 1.2 * Math.PI);
      ctx.closePath();
      ctx.fill();

      // 2. Gentle ocean waves subtle rolling shimmer along curved shoreline
      const waveAlpha = 0.15 + Math.sin(time * 0.6) * 0.08;
      ctx.save();
      ctx.beginPath();
      // Curved shore path matching the 16:9 beach
      ctx.moveTo(0, h * 0.84);
      ctx.bezierCurveTo(w * 0.2, h * 0.78, w * 0.42, h * 0.65, w * 0.60, h * 0.56);
      ctx.lineWidth = 3 + Math.sin(time * 0.6) * 1.5;
      ctx.strokeStyle = currentSceneConfig.waveColor.replace(/[\d.]+\)$/, `${waveAlpha})`);
      ctx.filter = 'blur(2px)';
      ctx.stroke();
      ctx.restore();

      // 3. Sparkling highlights on the water (twinkling naturally)
      glints.forEach((g) => {
        const x = g.xRatio * w;
        const y = g.yRatio * h;
        const pulse = Math.sin(time * 2 + g.phase);
        const alpha = Math.max(0, pulse * 0.85);

        if (alpha > 0.05) {
          ctx.save();
          ctx.fillStyle = currentSceneConfig.sparkleColor.replace(/[\d.]+\)$/, `${alpha})`);
          ctx.shadowColor = currentSceneConfig.sparkleColor;
          ctx.shadowBlur = 4;

          // Tiny diamond cross sparkle
          const r = g.size * (0.8 + pulse * 0.4);
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();

          // Subtle horizontal glint
          ctx.fillStyle = currentSceneConfig.sparkleColor.replace(/[\d.]+\)$/, `${alpha * 0.6})`);
          ctx.fillRect(x - r * 2, y - 0.5, r * 4, 1);
          ctx.restore();
        }
      });

      // 4. Shifting dappled leaf shadow gently wavering over desk area
      const dappleAlpha = 0.04 + Math.sin(time * 0.4) * 0.02;
      const dappleGrad = ctx.createRadialGradient(w * 0.72, h * 0.68, 10, w * 0.72, h * 0.68, w * 0.22);
      dappleGrad.addColorStop(0, currentSceneConfig.dappleColor.replace(/[\d.]+\)$/, `${dappleAlpha})`));
      dappleGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = dappleGrad;
      ctx.fillRect(w * 0.52, h * 0.45, w * 0.4, h * 0.5);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeScene, currentSceneConfig]);

  // Formatted local clock time
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="w-full relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl bg-slate-950 group/cinema">
      
      {/* Aspect Ratio 16:9 Cinematic Container */}
      <div className="relative w-full aspect-[16/9] overflow-hidden select-none">
        
        {/* Layer 1: Base Images with crossfade transition */}
        <div className="absolute inset-0 w-full h-full">
          {Object.values(scenes).map((s) => (
            <img
              key={s.id}
              src={s.image}
              alt={s.mood}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out pointer-events-none ${
                activeScene === s.id ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Layer 2: Subtle Cloud Drift Overlay across the sky (ultra-slow 60s CSS loop) */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-25 mix-blend-screen"
          style={{
            backgroundImage: 'radial-gradient(ellipse 60% 30% at 25% 20%, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
            animation: 'driftCloud 50s linear infinite'
          }}
        />

        {/* Layer 3: Interactive Canvas with sparkling ocean, wave pulse & dappled sun rays */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        {/* Layer 4: Vignette frame for high-end cinematic polish */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30 z-20" />

        {/* Top Floating Recruiter HUD: Real-Time Clock & Mode Badges */}
        <div className="absolute top-3 sm:top-5 left-3 sm:left-5 right-3 sm:right-5 z-30 flex flex-wrap items-center justify-between gap-2 pointer-events-auto">
          
          {/* Time & Aesthetic Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-white shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs font-bold text-white flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#f5a285]" />
              <span>{formattedTime}</span>
            </span>
            <span className="text-white/40">&bull;</span>
            <span className="text-[11px] sm:text-xs font-mono text-[#fcd5c7] hidden sm:inline">
              {currentSceneConfig.tag}
            </span>
          </div>

          {/* Time-of-Day Quick Selector */}
          <div className="flex items-center gap-1 bg-slate-950/80 backdrop-blur-md p-1 rounded-full border border-white/20 shadow-xl">
            <button
              onClick={() => setTimeMode('day')}
              className={`px-2.5 py-1 rounded-full text-[11px] font-mono transition-all flex items-center gap-1 cursor-pointer ${
                activeScene === 'day' && timeMode === 'day'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              title="Daytime (Bright Blue Sky)"
            >
              <Sun className="w-3 h-3 text-amber-300" />
              <span className="hidden xs:inline">Day</span>
            </button>

            <button
              onClick={() => setTimeMode('sunset')}
              className={`px-2.5 py-1 rounded-full text-[11px] font-mono transition-all flex items-center gap-1 cursor-pointer ${
                activeScene === 'sunset' && timeMode === 'sunset'
                  ? 'bg-orange-500 text-white font-bold shadow'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              title="Golden Hour / Sunset"
            >
              <Sunset className="w-3 h-3 text-orange-300" />
              <span className="hidden xs:inline">Sunset</span>
            </button>

            <button
              onClick={() => setTimeMode('night')}
              className={`px-2.5 py-1 rounded-full text-[11px] font-mono transition-all flex items-center gap-1 cursor-pointer ${
                activeScene === 'night' && timeMode === 'night'
                  ? 'bg-indigo-600 text-white font-bold shadow'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              title="Starry Night (Crescent Moon)"
            >
              <Moon className="w-3 h-3 text-indigo-300" />
              <span className="hidden xs:inline">Night</span>
            </button>

            <button
              onClick={() => setTimeMode('auto')}
              className={`px-2 py-1 rounded-full text-[10px] font-mono transition-all flex items-center gap-1 cursor-pointer ${
                timeMode === 'auto'
                  ? 'bg-[#f5a285] text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Automatic Mode (Follows your local device time)"
            >
              <span>Auto</span>
            </button>
          </div>

        </div>

        {/* Bottom Floating Bar: Remote Engineering Philosophy & Verified Suit Link */}
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 z-30 flex items-center justify-between text-[11px] font-mono text-white/90 pointer-events-auto">
          
          <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 flex items-center gap-2 max-w-[70%] sm:max-w-none truncate">
            <Sparkles className="w-3.5 h-3.5 text-[#f5a285] shrink-0" />
            <span className="truncate">
              {currentSceneConfig.mood}
            </span>
          </div>

          <div className="bg-slate-950/80 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/15 text-[10px] font-mono text-white/70 hidden sm:flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>16:9 Cinema · Locked View</span>
          </div>

        </div>

      </div>

      {/* Cloud drift animation definition */}
      <style>{`
        @keyframes driftCloud {
          0% { transform: translateX(-15%); }
          50% { transform: translateX(15%); }
          100% { transform: translateX(-15%); }
        }
      `}</style>
    </div>
  );
};
