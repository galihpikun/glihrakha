"use client";

import dynamic from "next/dynamic";
import { Download, Film, Disc3, Gamepad2 } from "lucide-react";

const AnimatedContent = dynamic(() => import("@/components/AnimatedContent"), {
  ssr: false,
});

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <AnimatedContent
        distance={60}
        direction="vertical"
        reverse={false}
        duration={0.7}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.08}
        delay={0}>
        <div className="px-6 md:px-16 lg:px-20 max-w-7xl mx-auto flex flex-col gap-8">
          {/* Tag Header */}
          <div className="flex items-center gap-3 text-xs font-mono text-gray-400 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>02 // ABOUT ME</span>
          </div>

          {/* Title Section */}
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Who <span className="text-accent font-serif italic">Am I?</span>
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT: Spec Card + CV Download + Photo */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Profile Card / Data Spec */}
              <div className="bg-white dark:bg-[#0d1527]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-md dark:shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-gray-400 uppercase tracking-widest">
                    PROFILE SPECIFICATION
                  </span>
                  <span className="font-mono text-[11px] text-accent font-semibold">
                    VERIFIED // 2026
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-slate-100 dark:border-white/5 pb-2.5 font-mono text-xs md:text-sm">
                  <span className="text-slate-500 dark:text-gray-400">Legal Name</span>
                  <span className="text-slate-900 dark:text-white font-medium text-right">
                    Galih Rakhasiwi P. K.
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-white/5 pb-2.5 font-mono text-xs md:text-sm">
                  <span className="text-slate-500 dark:text-gray-400">Institution</span>
                  <span className="text-slate-900 dark:text-white font-medium text-right">
                    SMK Taruna Bhakti
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-white/5 pb-2.5 font-mono text-xs md:text-sm">
                  <span className="text-slate-500 dark:text-gray-400">Origin</span>
                  <span className="text-slate-900 dark:text-white font-medium text-right">
                    Jakarta, Indonesia
                  </span>
                </div>
                <div className="flex justify-between items-center font-mono text-xs md:text-sm">
                  <span className="text-slate-500 dark:text-gray-400">Age</span>
                  <span className="text-slate-900 dark:text-white font-medium text-right">
                    17 Years Old
                  </span>
                </div>
              </div>

              {/* Download CV Action */}
              <a
                href="#contact"
                className="w-full bg-accent/10 border border-accent/40 text-accent font-mono text-xs uppercase tracking-wider hover:bg-accent hover:text-white dark:hover:text-slate-950 transition-all duration-300 py-4 px-6 rounded-xl shadow-md flex items-center justify-between group">
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Download Curriculum Vitae [PDF]</span>
                </span>
                <span className="text-base group-hover:translate-y-0.5 transition-transform">
                  ↓
                </span>
              </a>

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0d1527]/40 shadow-md dark:shadow-lg group">
                <img
                  className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src="/images/lubac.jpeg"
                  alt="Galih Rakhasiwi Portrait"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-accent font-mono text-[10px]">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-white">
                    PROFILE_PHOTO.RAW
                  </span>
                  <span className="text-gray-300">2026.IMG</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Quotes, Ambition Card, & Personal Favorites */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Paragraph Quote 1 */}
              <blockquote className="text-lg md:text-xl text-slate-700 dark:text-gray-200 leading-relaxed font-light border-l-2 border-accent/60 pl-5 bg-slate-100/70 dark:bg-white/[0.02] py-3 rounded-r-xl">
                &ldquo;I&apos;m{" "}
                <span className="font-semibold text-slate-900 dark:text-white underline decoration-accent underline-offset-4">
                  Galih Rakhasiwi Putra Kanaya
                </span>
                , a Software Engineering student from SMK Taruna Bhakti. I was
                born in Jakarta and I&apos;m currently 17 years old.&rdquo;
              </blockquote>

              {/* Paragraph Quote 2 */}
              <blockquote className="text-base md:text-lg text-slate-600 dark:text-gray-300 leading-relaxed font-light border-l-2 border-slate-300 dark:border-white/15 pl-5 bg-slate-100/50 dark:bg-white/[0.01] py-3 rounded-r-xl">
                &ldquo;My goal is to get rich so that one day I won&apos;t
                have to reconsider when buying shit. When I&apos;m not coding,
                I enjoy playing games, watching movies, and listening to
                music.&rdquo;
              </blockquote>

              {/* Highlight Card (Discipline & Ambition) */}
              <div className="bg-white dark:bg-[#0d1527]/90 border border-slate-200 dark:border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 hover:border-accent/40 shadow-md dark:shadow-xl">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-gray-400 uppercase tracking-widest">
                    DISCIPLINE & AMBITION
                  </span>
                  <span className="font-mono text-xs text-accent font-semibold">#69</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  Being an international Pimp.
                </h3>

                <p className="text-sm font-mono text-slate-600 dark:text-gray-400 leading-relaxed">
                  Dedicated to mastering the art of pimping and being a baller
                  that knows no bound, On dat Agent Zero Shi.
                </p>
              </div>

              {/* FAVORITES SECTION (Movies, Albums, Anime/Games) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Favorite Movies */}
                <div className="bg-white dark:bg-[#0d1527]/60 border border-slate-200 dark:border-white/10 rounded-xl p-4 flex flex-col gap-2.5 transition-all duration-300 hover:border-accent/40 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                      <Film className="w-3 h-3" />
                      <span>Movies</span>
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 dark:text-gray-500">
                      CINEMA
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-gray-300 space-y-1.5 font-light">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span>The Batman - Matt Reeves</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span>Crows Zero - Takashi Miike</span>
                    </li>
                  </ul>
                </div>

                {/* Favorite Albums */}
                <div className="bg-white dark:bg-[#0d1527]/60 border border-slate-200 dark:border-white/10 rounded-xl p-4 flex flex-col gap-2.5 transition-all duration-300 hover:border-accent/40 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                      <Disc3 className="w-3 h-3" />
                      <span>Albums</span>
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 dark:text-gray-500">
                      AUDIO
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-gray-300 space-y-1.5 font-light">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span>Grace - Jeff Buckley</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span>Ideologi Sikap Otak - Ahmad Band</span>
                    </li>
                  </ul>
                </div>

                {/* Favorite Anime/Games */}
                <div className="bg-white dark:bg-[#0d1527]/60 border border-slate-200 dark:border-white/10 rounded-xl p-4 flex flex-col gap-2.5 transition-all duration-300 hover:border-accent/40 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                      <Gamepad2 className="w-3 h-3" />
                      <span>Anime & Games</span>
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 dark:text-gray-500">
                      PLAY
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-gray-300 space-y-1.5 font-light">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span>Devil May Cry 4</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span>Initial D</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}
