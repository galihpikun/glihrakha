"use client";

import { Briefcase, Calendar, CheckCircle2, Terminal } from "lucide-react";

export default function ExperienceDetails({ experience }) {
  if (!experience) return null;

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      {/* Header: Role, Company & Period */}
      <div className="flex flex-col gap-2 pb-5 border-b border-slate-200 dark:border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-base sm:text-lg font-bold text-accent font-mono">
              {experience.company}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-gray-300">
            <Calendar className="w-3.5 h-3.5 text-accent" />
            <span>{experience.period}</span>
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
          {experience.role}
        </h3>
      </div>

      {/* Description: What I Did */}
      <div className="flex flex-col gap-2">
        <span className="font-mono text-[10px] text-accent tracking-widest uppercase font-semibold flex items-center gap-1.5">
          <Briefcase className="w-3 h-3" />
          <span>SCOPE OF WORK</span>
        </span>
        <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 font-light leading-relaxed">
          {experience.description}
        </p>
      </div>

      {/* Learning & Takeaways: What I Learned */}
      <div className="flex flex-col gap-2 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0d1527]/70 border border-slate-200 dark:border-white/10 shadow-sm">
        <span className="font-mono text-[10px] text-accent tracking-widest uppercase font-semibold flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>KEY LEARNING & IMPACT</span>
        </span>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 font-light leading-relaxed">
          {experience.learning}
        </p>
      </div>

      {/* Technologies & Arsenal */}
      <div className="flex flex-col gap-2.5 pt-2">
        <span className="font-mono text-[10px] text-slate-400 dark:text-gray-500 tracking-widest uppercase font-semibold flex items-center gap-1.5">
          <Terminal className="w-3 h-3 text-accent" />
          <span>TECHNOLOGIES & TOOLS</span>
        </span>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 font-mono text-[11px] text-slate-700 dark:text-gray-300 transition-colors hover:border-accent/40">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
