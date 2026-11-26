"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { Briefcase } from "lucide-react";

const AnimatedContent = dynamic(() => import("@/components/AnimatedContent"), {
  ssr: false,
});

const experiences = [
  {
    id: 1,
    year: "2026",
    company: "Bangun Kreatif Abadi",
    role: "Software Engineer Intern",
    image: "/images/gedung.jpeg",
    description:
      "Worked on web Ticket Booking web, guided by senior developers to enhance my skills in web development and software engineering practices. Also participated on preventive actions of Transjakarta tapping system.",
  },
  {
    id: 2,
    year: "2025",
    company: "Another Company",
    role: "Web Developer",
    image: "/images/gedung.jpeg",
    description:
      "Built and improved web interfaces while working with modern frontend technologies.",
  },
  // --- TEMPORARY MOCK DATA (remove when real experiences are added) ---
  {
    id: 3,
    year: "2024",
    company: "Mock Studio Alpha",
    role: "Frontend Intern",
    image: "/images/vibe.jpeg",
    description:
      "Temporary placeholder experience for layout testing. Remove this entry when real data is available.",
  },
  {
    id: 4,
    year: "2024",
    company: "Mock Agency Beta",
    role: "Junior Developer",
    image: "/images/lubac.jpeg",
    description:
      "Temporary placeholder experience for layout testing. Remove this entry when real data is available.",
  },
  {
    id: 5,
    year: "2023",
    company: "Mock Corp Gamma",
    role: "IT Support Intern",
    image: "/images/vibe.jpeg",
    description:
      "Temporary placeholder experience for layout testing. Remove this entry when real data is available.",
  },
  {
    id: 6,
    year: "2023",
    company: "Mock Labs Delta",
    role: "Web Trainee",
    image: "/images/lubac.jpeg",
    description:
      "Temporary placeholder experience for layout testing. Remove this entry when real data is available.",
  },
  // --- END TEMPORARY MOCK DATA ---
];

export default function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [experienceScrollProgress, setExperienceScrollProgress] = useState(0);
  const experienceTrackRef = useRef(null);

  const updateExperienceScroll = useCallback(() => {
    const el = experienceTrackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setExperienceScrollProgress(0);
      return;
    }
    const progress = Math.min(Math.max(el.scrollLeft / maxScroll, 0), 1);
    setExperienceScrollProgress(progress);
  }, []);

  useEffect(() => {
    const el = experienceTrackRef.current;
    if (!el) return;

    updateExperienceScroll();

    const onWheel = (e) => {
      // Horizontal scroll support via vertical mouse wheel when inside track
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const canScrollLeft = el.scrollLeft > 0 && e.deltaY < 0;
        const canScrollRight =
          el.scrollLeft < el.scrollWidth - el.clientWidth && e.deltaY > 0;
        if (canScrollLeft || canScrollRight) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", updateExperienceScroll);

    return () => {
      el.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", updateExperienceScroll);
    };
  }, [updateExperienceScroll]);

  return (
    <section id="experience" className="py-16 md:py-24 overflow-hidden">
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
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="px-6 md:px-16 lg:px-20 max-w-7xl mx-auto w-full">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-gray-400 tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>05 // CAREER LOG</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Work{" "}
                  <span className="text-accent italic font-serif">
                    Experience
                  </span>
                </h2>
              </div>
              <p className="font-mono text-xs text-slate-500 dark:text-gray-400 max-w-xs leading-relaxed">
                Professional milestones and hands-on engineering roles.
              </p>
            </div>
          </div>

          {/* Horizontal Experience Track */}
          <div
            ref={experienceTrackRef}
            onScroll={updateExperienceScroll}
            className="experience-track no-scrollbar flex items-start gap-6 md:gap-8 overflow-x-auto pb-6 px-6 md:px-16 lg:px-20 scroll-smooth"
            style={{
              scrollSnapType: "x proximity",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 2.5rem, black calc(100% - 2.5rem), transparent)",
              maskImage:
                "linear-gradient(to right, transparent, black 2.5rem, black calc(100% - 2.5rem), transparent)",
            }}>
            {experiences.map((exp, idx) => {
              const isSelected = selectedExperience === exp.id;

              return (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() =>
                    setSelectedExperience(isSelected ? null : exp.id)
                  }
                  aria-expanded={isSelected}
                  className="group relative flex-shrink-0 rounded-2xl text-left cursor-pointer transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
                  style={{
                    scrollSnapAlign: "start",
                  }}>
                  <div
                    className={`relative flex flex-col overflow-hidden rounded-2xl border bg-white dark:bg-[#0d1527]/70 transition-all duration-300 ease-in-out ${
                      isSelected
                        ? "border-accent/60 shadow-xl dark:shadow-2xl shadow-accent/15"
                        : "border-slate-200 dark:border-white/10 shadow-md dark:shadow-xl hover:border-accent/50 hover:shadow-xl dark:hover:shadow-2xl"
                    }`}
                    style={{
                      width: isSelected
                        ? "clamp(320px, 80vw, 420px)"
                        : "clamp(240px, 42vw, 290px)",
                      transform: isSelected
                        ? "translateY(-6px) scale(1.01)"
                        : "translateY(0) scale(1)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                      }
                    }}>
                    {/* Image — hero of inactive state */}
                    <div
                      className={`relative w-full overflow-hidden bg-black/60 transition-all duration-300 ease-in-out ${
                        isSelected
                          ? "h-[200px] sm:h-[220px] md:h-[240px]"
                          : "h-[360px] sm:h-[390px] md:h-[420px]"
                      }`}>
                      <img
                        src={exp.image}
                        alt={exp.company}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                          isSelected ? "scale-105" : "group-hover:scale-105"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                      {/* Year badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/10 font-mono text-xs text-white font-semibold flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-accent" />
                          {exp.year}
                        </span>
                      </div>

                      {/* Index badge */}
                      <div className="absolute top-3 right-3">
                        <span
                          className={`px-2.5 py-1 rounded-md backdrop-blur-md border font-mono text-[10px] tracking-wider transition-all duration-300 ${
                            isSelected
                              ? "bg-slate-950/90 border-[#10B981] text-[#00FF87] shadow-[0_0_12px_rgba(0,255,135,0.35)]"
                              : "bg-slate-950/70 border-white/15 text-gray-300"
                          }`}>
                          {isSelected ? "ACTIVE" : `0${idx + 1}`}
                        </span>
                      </div>

                      {/* Company name overlay — only on inactive */}
                      {!isSelected && (
                        <div className="absolute bottom-0 inset-x-0 p-4 pt-8 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent">
                          <h3 className="text-base font-bold text-white tracking-tight truncate group-hover:text-accent transition-colors duration-300">
                            {exp.company}
                          </h3>
                        </div>
                      )}
                    </div>

                    {/* Expanded content — only when active */}
                    <div
                      className="grid"
                      style={{
                        gridTemplateRows: isSelected ? "1fr" : "0fr",
                        opacity: isSelected ? 1 : 0,
                        transition:
                          "grid-template-rows 300ms ease-in-out, opacity 250ms ease-in-out",
                      }}>
                      <div className="overflow-hidden">
                        <div className="p-5 flex flex-col gap-2.5">
                          <div className="flex justify-between items-center font-mono text-[10px] text-slate-500 dark:text-gray-400 tracking-wider">
                            <span>{exp.year} {"// ROLE"}</span>
                            <span className="text-[#059669] dark:text-[#00FF87] font-semibold">VERIFIED</span>
                          </div>

                          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                            {exp.company}
                          </h3>

                          {exp.role && (
                            <span className="font-mono text-xs text-accent font-medium">
                              {exp.role}
                            </span>
                          )}

                          <div className="border-t border-slate-100 dark:border-white/10 pt-3 mt-1">
                            <p className="text-xs text-slate-600 dark:text-gray-300 font-light leading-relaxed">
                              {exp.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Custom Interactive Scroll Indicator */}
          <div className="px-6 md:px-16 lg:px-20 max-w-7xl mx-auto w-full flex items-center justify-between gap-4 font-mono text-[11px] text-slate-500 dark:text-gray-500">
            <span className="flex items-center gap-1.5 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              SWIPE / WHEEL TO EXPLORE
            </span>
            <div className="flex items-center gap-3 w-40 sm:w-56 md:w-72">
              <div className="relative w-full h-[3px] bg-slate-200 dark:bg-slate-900 border border-slate-300/60 dark:border-white/10 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 bottom-0 left-0 rounded-full transition-all duration-150 ease-out"
                  style={{
                    width: "35%",
                    transform: `translateX(${experienceScrollProgress * 185}%)`,
                    background: "linear-gradient(90deg, #10B981, #00FF87)",
                    boxShadow: "0 0 10px rgba(0, 255, 135, 0.5)",
                  }}
                />
              </div>
              <span className="text-[10px] text-accent font-semibold w-8 text-right">
                {Math.round(experienceScrollProgress * 100)}%
              </span>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}
