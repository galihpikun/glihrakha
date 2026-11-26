"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowUpRight, Github } from "lucide-react";

const AnimatedContent = dynamic(() => import("@/components/AnimatedContent"), {
  ssr: false,
});

const projectsData = [
  {
    id: 1,
    title: "SnipSnip (Web Snippet)",
    description:
      "Sebuah web yang berfungsi untuk menyimpan dan berbagi snippet kode. Di website ini anda dapat menyimpan rangkaian kode yang anda buat dan membagikannya kepada orang lain.",
    image: "/images/snipsnip.png",
    link: "https://snipsnip-three.vercel.app/",
    tags: ["Next.Js", "Express.Js", "Prisma"],
    type: "LIVE WEB APP",
    role: "Full-Stack System",
  },
  {
    id: 2,
    title: "Cashbhak ( Web Kasir Online )",
    description:
      "Sebuah Web yang berfungsi sebagai kasir, Web ini bisa menyimpan dan mendata produk yang anda jual. Selain itu akan ada analisis penjualan seperti grafik, piechart bahkan history penjualan.",
    image: "/images/cashbhak.png",
    link: "https://github.com/RezaAdityaRamadhan26/CashBhak",
    tags: ["Next.Js", "MySql2", "NextAuth"],
    type: "GITHUB REPOSITORY",
    role: "POS & Analytics",
  },
  {
    id: 3,
    title: "Web Laporan Masyarakat",
    description:
      "Sebuah web yang berfungsi untuk menampung laporan masyarakat. Web ini memiliki admin yang bakal mengatur jalan kerja laporan masyarakat. Selain itu web ini memilki fitur komen untuk diskusi.",
    image: "/images/komune.png",
    link: "https://github.com/galihpikun/komune-fe",
    tags: ["Next.Js", "Express.Js", "MySql2"],
    type: "GITHUB REPOSITORY",
    role: "Civic Reporting Platform",
  },
  {
    id: 4,
    title: "Food Rescue",
    description:
      "Sebuah web yang berfungsi sebagai sarana penjual untuk menjual makanan yang sudah tidak layak jual, tetapi masih layak konsumsi. Web ini memiliki fitur untuk menampilkan produk yang dijual, dan juga fitur untuk menambahkan produk baru.",
    image: "/images/food-rescue.png",
    link: "https://github.com/RezaAdityaRamadhan26/food-rescue-fe",
    tags: ["Next.Js", "Express.Js", "Prisma"],
    type: "GITHUB REPOSITORY",
    role: "Food Redistribution",
  },
  {
    id: 5,
    title: "Web Perpustakaan Sims",
    description:
      "Web Peminjaman buku sederhana menggunakan React untuk frontend dan menggunakan MySQL Sebagai Database. Fitur termasuk autentikasi pengguna, manajemen koleksi buku, dan sistem peminjaman.",
    image: "/images/perpus.png",
    link: "https://github.com/galihpikun/Projek-AAS-Kelas-11-Perpustakaan-Sekolah",
    tags: ["Next.Js", "MySql2", "NextAuth"],
    type: "GITHUB REPOSITORY",
    role: "Library Management",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
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
          {/* Cinematic Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-gray-400 tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>04 // SELECTED WORKS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                Featured{" "}
                <span className="text-accent italic font-serif">
                  Projects
                </span>
              </h2>
            </div>
            <p className="font-mono text-xs text-slate-500 dark:text-gray-400 max-w-xs leading-relaxed">
              Engineered systems and digital products built for speed and
              utility.
            </p>
          </div>

          {/* Projects Container */}
          <div className="flex flex-col gap-8">
            {/* HERO / FEATURED PROJECT 01 (SnipSnip) */}
            {projectsData.slice(0, 1).map((project) => (
              <Link
                key={project.id}
                href={project.link}
                target="_blank"
                className="group relative w-full rounded-3xl overflow-hidden bg-white dark:bg-[#0d1527]/70 border border-slate-200 dark:border-white/10 hover:border-accent/50 transition-all duration-500 shadow-lg dark:shadow-2xl flex flex-col lg:flex-row items-stretch">
                {/* Image Showcase */}
                <div className="relative lg:w-3/5 min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] overflow-hidden bg-black/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-slate-950/20 to-slate-950/80 dark:via-[#0d1527]/30 dark:to-[#0d1527]" />
                </div>

                {/* Content Area */}
                <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-accent tracking-widest uppercase flex items-center gap-1.5 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                        FEATURED DEPLOYMENT // 01
                      </span>
                      <span className="font-mono text-[10px] text-slate-600 dark:text-gray-400 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-white/10">
                        {project.role}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 border-t border-slate-100 dark:border-white/10 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-lg font-mono text-[10px] text-slate-700 dark:text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="font-mono text-xs text-accent flex items-center gap-2 group-hover:translate-x-1.5 transition-transform font-semibold">
                      Launch Application <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* SECONDARY PROJECTS GRID (2x2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {projectsData.slice(1).map((project, idx) => (
                <Link
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#0d1527]/70 border border-slate-200 dark:border-white/10 hover:border-accent/40 transition-all duration-500 shadow-md dark:shadow-xl flex flex-col justify-between">
                  {/* Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/60">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 dark:from-[#0d1527] via-transparent to-transparent opacity-90" />
                    <div className="absolute top-3 right-3">
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-gray-200 flex items-center gap-1">
                        <Github className="w-3 h-3" />
                        REPO
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 flex flex-col justify-between flex-grow gap-5">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center font-mono text-[10px]">
                        <span className="text-slate-500 dark:text-gray-400 tracking-wider">
                          0{idx + 2} {"// PROJECT"}
                        </span>
                        <span className="text-accent font-semibold">{project.role}</span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-gray-400 font-light leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 dark:border-white/10 pt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-md font-mono text-[10px] text-slate-700 dark:text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="font-mono text-xs text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0 font-semibold">
                        View Code <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}
