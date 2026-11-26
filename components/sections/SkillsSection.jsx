"use client";

import dynamic from "next/dynamic";
import {
  Code2,
  Palette,
  Smartphone,
  Database,
  Terminal,
} from "lucide-react";

const AnimatedContent = dynamic(() => import("@/components/AnimatedContent"), {
  ssr: false,
});

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
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
          {/* Cinematic Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-gray-400 tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>03 // TECHNICAL ARSENAL</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                Technical{" "}
                <span className="text-accent not-italic font-mono">
                  Arsenal
                </span>
              </h2>
            </div>

            <p className="font-mono text-xs text-slate-500 dark:text-gray-400 max-w-xs leading-relaxed">
              A curated display of architectural, engineering, and design
              capabilities.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* 01. Web Development (Featured Card - 7 cols) */}
            <div className="md:col-span-7 group relative bg-white dark:bg-[#0d1527]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-7 md:p-8 overflow-hidden transition-all duration-500 hover:border-accent/40 shadow-md dark:shadow-2xl flex flex-col justify-between min-h-[300px]">
              <div className="absolute top-0 right-0 p-6 pointer-events-none font-mono text-7xl md:text-8xl font-black text-slate-900/[0.04] dark:text-white/[0.03] leading-none select-none">
                01
              </div>

              <div className="flex justify-between items-start z-10">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest flex items-center gap-1.5 font-semibold">
                    <Code2 className="w-3.5 h-3.5" />
                    PRIMARY ARCHITECTURE
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Web Development
                  </h3>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-950/70 text-slate-700 dark:text-gray-300 shrink-0">
                  FULL-STACK
                </span>
              </div>

              <div className="z-10 mt-6">
                <p className="text-slate-600 dark:text-gray-300 text-sm md:text-base font-light leading-relaxed max-w-xl">
                  Building robust web platforms from scalable API backends to
                  fluid interactive client interfaces using{" "}
                  <span className="text-slate-900 dark:text-white font-medium border-b border-accent/40">
                    React
                  </span>
                  ,{" "}
                  <span className="text-slate-900 dark:text-white font-medium border-b border-accent/40">
                    Nest
                  </span>
                  ,{" "}
                  <span className="text-slate-900 dark:text-white font-medium border-b border-accent/40">
                    Express
                  </span>
                  , and{" "}
                  <span className="text-slate-900 dark:text-white font-medium border-b border-accent/40">
                    Go-Lang
                  </span>
                  .
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {[
                    "React",
                    "Next.js",
                    "Express",
                    "NestJS",
                    "Go-Lang",
                    "Tailwind CSS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 font-mono text-[11px] text-slate-700 dark:text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* 02. UI/UX Design (5 cols) */}
            <div className="md:col-span-5 group relative bg-white dark:bg-[#0d1527]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-7 md:p-8 overflow-hidden transition-all duration-500 hover:border-accent/40 shadow-md dark:shadow-2xl flex flex-col justify-between min-h-[300px]">
              <div className="absolute top-0 right-0 p-6 pointer-events-none font-mono text-7xl md:text-8xl font-black text-slate-900/[0.04] dark:text-white/[0.03] leading-none select-none">
                02
              </div>

              <div className="flex justify-between items-start z-10">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest flex items-center gap-1.5 font-semibold">
                    <Palette className="w-3.5 h-3.5" />
                    VISUAL ERGONOMICS
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    UI/UX Design
                  </h3>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-950/70 text-slate-700 dark:text-gray-300">
                  FIGMA
                </span>
              </div>

              <div className="z-10 mt-6">
                <p className="text-slate-600 dark:text-gray-300 text-sm font-light leading-relaxed">
                  Crafting precise user interfaces and design systems with{" "}
                  <span className="text-slate-900 dark:text-white font-medium">Figma</span>.
                  Focused on high contrast, usability, and intuitive layout
                  hierarchy.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {[
                    "Figma",
                    "Wireframing",
                    "Design Systems",
                    "Prototyping",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 font-mono text-[11px] text-slate-700 dark:text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* 03. Mobile Apps (4 cols) */}
            <div className="md:col-span-4 group relative bg-white dark:bg-[#0d1527]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:border-accent/40 shadow-md dark:shadow-2xl flex flex-col justify-between min-h-[230px]">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest flex items-center gap-1 font-semibold">
                  <Smartphone className="w-3 h-3" />
                  03 // MOBILE
                </span>
                <span className="font-mono text-[10px] text-slate-500 dark:text-gray-400">
                  EXPO / FLUTTER
                </span>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Mobile Apps
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 font-light leading-relaxed">
                  Developing cross-platform mobile experiences using{" "}
                  <span className="text-slate-900 dark:text-white font-medium">React Expo</span> and native
                  fundamentals in <span className="text-slate-900 dark:text-white font-medium">Flutter</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100 dark:border-white/5">
                {["React Native", "Expo", "Flutter"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 font-mono text-[10px] text-slate-600 dark:text-gray-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 04. Database Management (4 cols) */}
            <div className="md:col-span-4 group relative bg-white dark:bg-[#0d1527]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:border-accent/40 shadow-md dark:shadow-2xl flex flex-col justify-between min-h-[230px]">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest flex items-center gap-1 font-semibold">
                  <Database className="w-3 h-3" />
                  04 // DATA
                </span>
                <span className="font-mono text-[10px] text-slate-500 dark:text-gray-400">
                  SQL ARCHITECTURE
                </span>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Database Management
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 font-light leading-relaxed">
                  Structuring normalized relational databases, DDL/DML
                  queries, and schema optimizations via{" "}
                  <span className="text-slate-900 dark:text-white font-medium">MySQL</span> &{" "}
                  <span className="text-slate-900 dark:text-white font-medium">PostgreSQL</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100 dark:border-white/5">
                {["MySQL", "PostgreSQL", "Prisma ORM"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 font-mono text-[10px] text-slate-600 dark:text-gray-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 05. General Knowledge & English (4 cols) */}
            <div className="md:col-span-4 group relative bg-white dark:bg-[#0d1527]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:border-accent/40 shadow-md dark:shadow-2xl flex flex-col justify-between min-h-[230px]">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest flex items-center gap-1 font-semibold">
                  <Terminal className="w-3 h-3" />
                  05 // COMMUNICATION
                </span>
                <span className="font-mono text-[10px] text-accent font-semibold">
                  ENGLISH C1
                </span>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  General & English
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 font-light leading-relaxed">
                  Fluent technical communication in{" "}
                  <span className="text-accent font-medium">English</span>,
                  paired with strong foundational logic in mathematics and
                  analytical subjects.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100 dark:border-white/5">
                {["English C1", "Problem Solving", "Logic"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 font-mono text-[10px] text-slate-600 dark:text-gray-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}
