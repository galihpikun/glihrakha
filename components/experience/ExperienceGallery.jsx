"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

export default function ExperienceGallery({
  company,
  role,
  badge = "EXP // 01",
  images = [],
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const handleNext = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Automatic Carousel Interval
  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    // Check prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [images.length, isPaused, handleNext]);

  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-xl group aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/3] min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={0}
      aria-label={`${company} image showcase carousel`}>
      {/* Images with smooth crossfade */}
      {images.map((src, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={src + index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}>
            <img
              src={src}
              alt={`${company} preview ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/40 pointer-events-none" />
          </div>
        );
      })}

      {/* Top HUD Overlay */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/15 font-mono text-[10px] text-accent tracking-wider font-semibold">
            {badge}
          </span>
          <span className="hidden sm:inline-block px-2.5 py-1 rounded-lg bg-slate-950/60 backdrop-blur-md border border-white/10 font-mono text-[10px] text-gray-300">
            {company}
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/15 font-mono text-[10px] text-gray-300">
          <ImageIcon className="w-3 h-3 text-accent" />
          <span>
            0{currentIndex + 1} / 0{images.length}
          </span>
        </div>
      </div>

      {/* Bottom HUD & Title Overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col gap-3 pointer-events-none">
        <div className="flex flex-col gap-0.5">
          <span className="font-mono text-[10px] text-accent font-semibold tracking-widest uppercase">
            {role}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-md">
            {company}
          </h3>
        </div>

        {/* Position Indicators */}
        <div className="flex items-center gap-2 pointer-events-auto pt-1">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              type="button"
              className="group/btn relative py-1 focus:outline-none cursor-pointer"
              aria-label={`Jump to slide ${idx + 1}`}>
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-accent shadow-[0_0_8px_rgba(22,196,127,0.6)]"
                    : "w-3 bg-white/30 hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Manual Navigation Arrows (subtle on hover) */}
      <div className="absolute inset-y-0 left-2 z-20 flex items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          type="button"
          className="pointer-events-auto p-1.5 rounded-full bg-slate-950/70 border border-white/20 text-white hover:text-accent hover:bg-slate-950 hover:scale-110 active:scale-95 transition-all cursor-pointer shadow-lg"
          aria-label="Previous image">
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-2 z-20 flex items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          type="button"
          className="pointer-events-auto p-1.5 rounded-full bg-slate-950/70 border border-white/20 text-white hover:text-accent hover:bg-slate-950 hover:scale-110 active:scale-95 transition-all cursor-pointer shadow-lg"
          aria-label="Next image">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
