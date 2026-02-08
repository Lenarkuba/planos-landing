"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause, Maximize2, Users, Clapperboard } from "lucide-react";

export function VideoDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="demo" className="py-24 lg:py-32 section-gradient-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-6">
            Demo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Zobacz jak to{" "}
            <span className="gradient-text">działa</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Od wysłania linku do castingu po potwierdzenie obecności — 
            wszystko w jednym przepływie.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow effect behind video */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-3xl blur-2xl opacity-60" />
          
          {/* Video wrapper */}
          <div className="relative video-container bg-slate-900 aspect-video rounded-2xl overflow-hidden">
            {/* Placeholder for video - replace src with actual video */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '32px 32px',
                }} />
              </div>
              
              {/* Two panels mockup */}
              <div className="relative z-10 w-full max-w-4xl mx-auto px-8">
                <div className="grid grid-cols-2 gap-4">
                  {/* Agency panel */}
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded bg-primary-500/30 flex items-center justify-center">
                        <Clapperboard className="w-3 h-3 text-primary-300" />
                      </div>
                      <span className="text-xs text-white/60 font-medium">Panel Agencji</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-6 bg-white/10 rounded w-3/4" />
                      <div className="h-4 bg-white/5 rounded w-full" />
                      <div className="h-4 bg-white/5 rounded w-2/3" />
                      <div className="grid grid-cols-3 gap-2 mt-3">
                        <div className="h-12 bg-white/10 rounded" />
                        <div className="h-12 bg-white/10 rounded" />
                        <div className="h-12 bg-white/10 rounded" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Talent panel */}
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded bg-accent-500/30 flex items-center justify-center">
                        <Users className="w-3 h-3 text-accent-300" />
                      </div>
                      <span className="text-xs text-white/60 font-medium">Portal Talentu</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-6 bg-white/10 rounded w-2/3" />
                      <div className="h-4 bg-white/5 rounded w-full" />
                      <div className="h-4 bg-white/5 rounded w-3/4" />
                      <div className="flex gap-2 mt-3">
                        <div className="h-8 bg-accent-500/30 rounded flex-1" />
                        <div className="h-8 bg-white/10 rounded flex-1" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow between panels */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <span className="text-white/60 text-lg">⟷</span>
                  </div>
                </div>
              </div>

              {/* Play button overlay */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 flex items-center justify-center z-20 group"
              >
                <div className="relative">
                  {/* Pulse ring */}
                  <div className="absolute inset-0 animate-ping bg-white/20 rounded-full" style={{ animationDuration: '2s' }} />
                  
                  {/* Button */}
                  <div className="relative w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-primary-600" />
                    ) : (
                      <Play className="w-8 h-8 text-primary-600 ml-1" />
                    )}
                  </div>
                </div>
              </button>

              {/* Video element - uncomment and add your video source */}
              {/* 
              <video
                className="absolute inset-0 w-full h-full object-cover"
                poster="/video-poster.jpg"
                controls={isPlaying}
              >
                <source src="/demo-video.mp4" type="video/mp4" />
              </video>
              */}
            </div>

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10" />
            
            {/* Video info bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between z-20">
              <span className="text-sm text-white/80 font-medium">
                Pełny przepływ pracy — 3 min
              </span>
              <button className="p-2 text-white/80 hover:text-white transition-colors">
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-sm text-slate-500 mt-6">
            🎬 Agencja wysyła link → Talent wysyła zgłoszenie → Agencja potwierdza → Gotowe
          </p>
        </motion.div>
      </div>
    </section>
  );
}
