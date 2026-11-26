"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ExperienceGallery from "@/components/experience/ExperienceGallery";
import ExperienceDetails from "@/components/experience/ExperienceDetails";
import { experiencesData } from "@/components/experience/experiencesData";

const AnimatedContent = dynamic(() => import("@/components/AnimatedContent"), {
  ssr: false,
});

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(experiencesData[0].id);

  const activeExperience =
    experiencesData.find((exp) => exp.id === activeTab) || experiencesData[0];

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
        <div className="px-6 md:px-16 lg:px-20 max-w-7xl mx-auto flex flex-col gap-10">
          {/* Header */}
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

          {/* Main Tabs Container */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full flex flex-col gap-6 lg:gap-8">
            {/* Mobile Tabs List (Order: after heading, before image carousel) */}
            <div className="flex lg:hidden overflow-x-auto no-scrollbar w-full pb-1">
              <TabsList className="bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 p-1.5 rounded-2xl flex w-full min-w-fit">
                {experiencesData.map((exp) => (
                  <TabsTrigger
                    key={exp.id}
                    value={exp.id}
                    className="flex-1 py-2.5 px-3 rounded-xl font-mono text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white data-[state=active]:bg-white dark:data-[state=active]:bg-[#0d1527] data-[state=active]:text-accent data-[state=active]:border data-[state=active]:border-accent/40 data-[state=active]:shadow-lg dark:data-[state=active]:shadow-black/50 data-[state=active]:font-semibold min-h-[44px]">
                    {exp.company}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Split Showcase Grid (~50% Left / ~50% Right on Desktop) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Side: Company Visual Showcase (50%) */}
              <div className="lg:col-span-6 w-full">
                <ExperienceGallery
                  key={activeExperience.id}
                  company={activeExperience.company}
                  role={activeExperience.role}
                  badge={activeExperience.badge}
                  images={activeExperience.images}
                />
              </div>

              {/* Right Side: Desktop Tabs + Experience Information (50%) */}
              <div className="lg:col-span-6 w-full flex flex-col gap-6">
                {/* Desktop Tabs List */}
                <div className="hidden lg:flex w-full">
                  <TabsList className="bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 p-1.5 rounded-2xl flex w-full">
                    {experiencesData.map((exp) => (
                      <TabsTrigger
                        key={exp.id}
                        value={exp.id}
                        className="flex-1 py-2.5 px-4 rounded-xl font-mono text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white data-[state=active]:bg-white dark:data-[state=active]:bg-[#0d1527] data-[state=active]:text-accent data-[state=active]:border data-[state=active]:border-accent/40 data-[state=active]:shadow-lg dark:data-[state=active]:shadow-black/50 data-[state=active]:font-semibold">
                        {exp.company}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {/* Experience Details Tab Content */}
                {experiencesData.map((exp) => (
                  <TabsContent
                    key={exp.id}
                    value={exp.id}
                    className="mt-0 focus-visible:outline-none">
                    <ExperienceDetails experience={exp} />
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </AnimatedContent>
    </section>
  );
}
