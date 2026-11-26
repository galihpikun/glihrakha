"use client";

import dynamic from "next/dynamic";
import Loop from "@/components/Loop";

const AnimatedContent = dynamic(() => import("@/components/AnimatedContent"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section id="home" className="pt-28 md:pt-36 lg:pt-40 pb-12">
      <AnimatedContent
        distance={60}
        direction="vertical"
        reverse={false}
        duration={0.7}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.05}
        delay={0}
        className="flex flex-col">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-16 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-12">
          {/* Left Headline Area */}
          <div className="flex flex-col gap-5 max-w-2xl">
            {/* Terminal Eyebrow & Status */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="text-gray-400 tracking-wider">
                {"// GALIH RAKHASIWI • DEPOK, ID"}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Available for Collab
              </span>
            </div>

            {/* Main Display Typography */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] text-slate-900 dark:text-white font-light text-left leading-[0.95] tracking-tight">
              I&apos;m a Software <br />
              <span className="font-bold text-accent">Engineer.</span>
            </h1>

            {/* Description & CTAs */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 font-light leading-relaxed max-w-lg mt-1">
              Full-stack student developer at SMK Taruna Bhakti. Building
              resilient web systems, clean relational databases, and
              responsive digital interfaces.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
              <a
                href="#projects"
                className="bg-accent text-white dark:text-slate-950 hover:bg-accent/90 px-5 py-2.5 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(22,196,127,0.3)]">
                <span>Explore Works</span>
                <span>↓</span>
              </a>
              <a
                href="#about"
                className="bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/15 text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/30 px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm">
                <span>About Me →</span>
              </a>
            </div>
          </div>

          {/* Right Photo & Bio Card */}
          <div className="flex flex-col items-start lg:items-end gap-4 w-full sm:w-auto self-center lg:self-auto">
            <div className="relative group rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-900 shadow-xl dark:shadow-2xl w-60 sm:w-64 md:w-72 aspect-[3/4]">
              <img
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src="/images/ross.jpeg"
                alt="Ross - Galih Rakha Avatar"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* HUD Overlay Labels */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-gray-300 pointer-events-none">
                <span className="px-2 py-0.5 rounded-md bg-slate-950/70 backdrop-blur-md border border-white/10 text-white">
                  ROSS.AVATAR
                </span>
                <span className="text-accent font-semibold">#01</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono pointer-events-none">
                <span className="text-gray-300">SYS_OPERATOR</span>
                <span className="text-accent/90">2026.BUILD</span>
              </div>
            </div>

            <p className="w-full max-w-xs text-left lg:text-right font-mono text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
              Building high-performance web systems and full-stack
              applications. <br />
              <span className="text-accent">
                Scroll down to explore works.
              </span>
            </p>
          </div>
        </div>

        {/* Marquee Technology Loop */}
        <div className="mt-14 md:mt-20 border-y border-slate-200 dark:border-white/5 bg-slate-100/60 dark:bg-slate-950/30">
          <Loop />
        </div>
      </AnimatedContent>
    </section>
  );
}
