"use client";

import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const AnimatedContent = dynamic(() => import("@/components/AnimatedContent"), {
  ssr: false,
});

const sertifikat = [
  {
    img: "/images/certificates/Webdev.jpeg",
    nama: "Paticipants of National IT Competition",
    org: "Universitas Harkat Negeri",
    tahun: 2025,
    id: 1,
    badge: "COMPETITION",
  },
  {
    img: "/images/certificates/AOE.png",
    nama: "Paticipants of Arena Of English Speech Competition",
    org: "Politeknik Negeri Jakarta",
    tahun: 2025,
    id: 2,
    badge: "COMMUNICATION",
  },
  {
    img: "/images/certificates/SQL.jpg",
    nama: "Belajar Dasar Structured Query Language (SQL)",
    org: "Dicoding Indonesia",
    tahun: 2025,
    id: 3,
    badge: "DATABASE",
  },
  {
    img: "/images/certificates/AI.jpg",
    nama: "Belajar Dasar AI",
    org: "Dicoding Indonesia",
    tahun: 2025,
    id: 4,
    badge: "AI / ML",
  },
  {
    img: "/images/certificates/DS.jpg",
    nama: "Belajar Dasar Data Science",
    org: "Dicoding Indonesia",
    tahun: 2025,
    id: 5,
    badge: "DATA SCIENCE",
  },
  {
    img: "/images/certificates/Flutter.jpg",
    nama: "Belajar Membuat Aplikasi Flutter untuk Pemula",
    org: "Dicoding Indonesia",
    tahun: 2025,
    id: 6,
    badge: "MOBILE DEV",
  },
];

export default function CertificatesSection() {
  return (
    <section id="sertifikat" className="py-16 md:py-24">
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
                <span>06 // CREDENTIALS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                My{" "}
                <span className="text-accent italic font-serif">
                  Certificates
                </span>
              </h2>
            </div>
            <p className="font-mono text-xs text-slate-500 dark:text-gray-400 max-w-xs leading-relaxed">
              Verified training, technical qualifications, and achievement
              records.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sertifikat.map((sertif) => (
              <div
                key={sertif.id}
                className="group relative bg-white dark:bg-[#0d1527]/50 border border-slate-200 dark:border-white/10 hover:border-accent/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between gap-5 shadow-sm dark:shadow-lg hover:shadow-md dark:hover:shadow-2xl">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center font-mono text-[11px]">
                    <span className="text-slate-500 dark:text-gray-400">{sertif.org}</span>
                    <span className="px-2 py-0.5 rounded bg-accent/10 border border-accent/30 text-accent font-medium">
                      {sertif.tahun}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight group-hover:text-accent transition-colors leading-snug">
                    {sertif.nama}
                  </h3>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-slate-400 dark:text-gray-500">
                    [{sertif.badge}]
                  </span>

                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        className="font-mono text-xs text-slate-600 dark:text-gray-300 hover:text-accent flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded px-1.5 py-0.5"
                        type="button">
                        <span>View Certificate</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                      </button>
                    </PopoverTrigger>

                    <PopoverContent
                      side="top"
                      align="center"
                      className="w-auto max-w-none bg-white/95 dark:bg-slate-950/95 border border-slate-200 dark:border-white/15 p-3 shadow-2xl rounded-2xl backdrop-blur-xl">
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center font-mono text-xs text-slate-500 dark:text-gray-400 px-1">
                          <span className="text-slate-900 dark:text-white font-medium">{sertif.nama}</span>
                          <span className="text-accent font-semibold">{sertif.org}</span>
                        </div>
                        <img
                          src={sertif.img}
                          alt={sertif.nama}
                          className="max-w-[85vw] md:max-w-[45vw] max-h-[55vh] rounded-xl object-contain border border-slate-200 dark:border-white/10"
                        />
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}
