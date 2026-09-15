"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Instagram, Github, Linkedin, Phone } from "lucide-react";
import AnimatedContent from "@/components/AnimatedContent";
import dynamic from "next/dynamic";
import Loop from "@/components/Loop";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import MusicPlayer from "@/components/AudioPlay";

export default function Home() {
  const AnimatedContent = dynamic(
    () => import("@/components/AnimatedContent"),
    { ssr: false },
  );

  const projectsData = [
    {
      id: 1,
      title: "SnipSnip (Web Snippet)",
      description:
        "Sebuah web yang berfungsi untuk menyimpan dan berbagi snippet kode. Di website ini anda dapat menyimpan rangkaian kode yang anda buat dan membagikannya kepada orang lain.",
      image: "/images/snipsnip.png",
      link: "https://snipsnip-three.vercel.app/",
      tags: ["Next.Js", "Express.Js", "Prisma"],
    },
    {
      id: 2,
      title: "Cashbhak ( Web Kasir Online )",
      description:
        "Sebuah Web yang berfungsi sebagai kasir, Web ini bisa menyimpan dan mendata produk yang anda jual. Selain itu akan ada analisis penjualan seperti grafik, piechart bahkan history penjualan.",
      image: "/images/cashbhak.png",
      link: "https://github.com/RezaAdityaRamadhan26/CashBhak",
      tags: ["Next.Js", "MySql2", "NextAuth"],
    },
    {
      id: 3,
      title: "Web Laporan Masyarakat",
      description:
        "Sebuah web yang berfungsi untuk menampung laporan masyarakat. Web ini memiliki admin yang bakal mengatur jalan kerja laporan masyarakat. Selain itu web ini memilki fitur komen untuk diskusi.",
      image: "/images/komune.png",
      link: "https://github.com/galihpikun/komune-fe",
      tags: ["Next.Js", "Express.Js", "MySql2"],
    },
    {
      id: 4,
      title: "Food Rescue",
      description:
        "Sebuah web yang berfungsi sebagai sarana penjual untuk menjual makanan yang sudah tidak layak jual, tetapi masih layak konsumsi. Web ini memiliki fitur untuk menampilkan produk yang dijual, dan juga fitur untuk menambahkan produk baru.",
      image: "/images/food-rescue.png",
      link: "https://github.com/RezaAdityaRamadhan26/food-rescue-fe",
      tags: ["Next.Js", "Express.Js", "Prisma"],
    },
    {
      id: 5,
      title: "Web Perpustakaan Sims",
      description:
        "Web Peminjaman buku sederhana menggunakan React untuk frontend dan menggunakan MySQL Sebagai Database. Fitur termasuk autentikasi pengguna, manajemen koleksi buku, dan sistem peminjaman.",
      image: "/images/perpus.png",
      link: "https://github.com/galihpikun/Projek-AAS-Kelas-11-Perpustakaan-Sekolah",
      tags: ["Next.Js", "MySql2", "NextAuth"],
    },
  ];

  const sertifikat = [
    {
      img: "/images/certificates/Webdev.jpeg",
      nama: "Paticipants of National IT Competition",
      org: "Universitas Harkat Negeri",
      tahun: 2025,
      id: 1,
    },
    {
      img: "/images/certificates/AOE.png",
      nama: "Paticipants of Arena Of English Speech Competition",
      org: "Politeknik Negeri Jakarta",
      tahun: 2025,
      id: 2,
    },
    {
      img: "/images/certificates/SQL.jpg",
      nama: "Belajar Dasar Structured Query Language (SQL)",
      org: "Dicoding Indonesia",
      tahun: 2025,
      id: 3,
    },
    {
      img: "/images/certificates/AI.jpg",
      nama: "Belajar Dasar AI",
      org: "Dicoding Indonesia",
      tahun: 2025,
      id: 4,
    },
    {
      img: "/images/certificates/DS.jpg",
      nama: "Belajar Dasar Data Science",
      org: "Dicoding Indonesia",
      tahun: 2025,
      id: 5,
    },
    {
      img: "/images/certificates/Flutter.jpg",
      nama: "Belajar Membuat Aplikasi Flutter untuk Pemula",
      org: "Dicoding Indonesia",
      tahun: 2025,
      id: 6,
    },
  ];

  return (
    <div className="bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#020617] flex flex-col w-full h-full gap-40 md:gap-30 text-hover overflow-x-hidden">
      {/* NAVBAR */}
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl h-14 bg-secondary/30 backdrop-blur-xl border border-white/10 z-50 rounded-full flex justify-between items-center px-6 text-white shadow-2xl shadow-black/50 transition-all duration-300"
        suppressHydrationWarning>
        {/* Logo / Brand Name */}
        <div className="flex items-center gap-2">
          <h1 className="text-base md:text-lg font-mono font-medium tracking-tight hover:text-accent transition-colors cursor-pointer">
            glihrakha<span className="text-accent">.</span>
          </h1>
        </div>

        {/* Nav Links - Minimal Monospaced Style */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-mono tracking-wider">
          <a
            href="/"
            className="text-gray-300 hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            About Me
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            Projects
          </a>
          <a
            href="#sertifikat"
            className="text-gray-300 hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            Certificates
          </a>
        </div>

        {/* Action Button */}
        <a
          href="#contact"
          className="bg-accent/10 border border-accent/40 text-accent hover:bg-accent hover:text-slate-950 px-4 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all duration-300 hover:shadow-[0_0_15px_rgba(var(--color-accent),0.3)]">
          Contact Us!
        </a>
      </nav>

      {/* HERO SECTION */}
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}
        className="flex flex-col">
        <section className="mt-32 md:mt-40 flex flex-col lg:flex-row justify-between px-6 md:px-16 lg:px-20 items-center gap-10">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-hover font-light text-center lg:text-left leading-none">
            I'm Software <br />
            <span className="font-bold text-accent">Engineer</span>
          </h1>
          <div className="flex flex-col items-center lg:items-end gap-5 w-full lg:w-auto">
            <img
              className="rounded-xl overflow-hidden bg-gray-500 w-50 h-80 object-cover transition-all duration-300 hover:w-full hover:h-100"
              src="/images/ross.jpeg"
              alt="Ross"
            />

            <p className="w-full max-w-xs text-center lg:text-right font-mono text-xs text-gray-300 leading-relaxed">
              Building high-performance web systems and full-stack applications.{" "}
              <br />
              <span className="text-accent">Scroll down to explore works.</span>
            </p>
          </div>
        </section>
        <div className="mt-14 md:mt-20">
          <Loop></Loop>
        </div>
      </AnimatedContent>

      {/* ABOUT ME SECTION */}
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}>
        <section
          className="px-6 md:px-16 lg:px-20 py-12 max-w-7xl mx-auto flex flex-col gap-8"
          id="about">
          {/* Tag Header */}
          <div className="flex items-center gap-3 text-xs font-mono text-gray-400 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>02 // ABOUT ME</span>
          </div>

          {/* Title Section */}
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Who <span className="text-accent font-serif italic">Am I?</span>
          </h1>

          {/* Grid Layout Utamaku */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* KIRI: Mini Table Profile Data + Button CV + Image */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Profile Card / Data Spec */}
              <div className="bg-[#0f172a]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-xl">
                <div className="flex justify-between items-center border-b border-white/10 pb-3 font-mono text-xs md:text-sm">
                  <span className="text-gray-400">Legal Name</span>
                  <span className="text-white font-medium text-right">
                    Galih Rakhasiwi P. K.
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3 font-mono text-xs md:text-sm">
                  <span className="text-gray-400">Institution</span>
                  <span className="text-white font-medium text-right">
                    SMK Taruna Bhakti
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3 font-mono text-xs md:text-sm">
                  <span className="text-gray-400">Origin</span>
                  <span className="text-white font-medium text-right">
                    Jakarta, Indonesia
                  </span>
                </div>
                <div className="flex justify-between items-center font-mono text-xs md:text-sm">
                  <span className="text-gray-400">Age</span>
                  <span className="text-white font-medium text-right">
                    17 Years Old
                  </span>
                </div>
              </div>

              {/* Download CV Action */}
              <Button className="w-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs uppercase tracking-wider hover:bg-accent hover:text-slate-950 transition-all duration-300 py-6 rounded-xl shadow-lg flex items-center justify-between px-6">
                <span>Download Curriculum Vitae [PDF]</span>
                <span className="text-lg">↓</span>
              </Button>

              {/* Image Container Refined (Hover animation smooth tanpa border ganjil) */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/40 shadow-lg group">
                <img
                  className="w-full h-60 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src="/images/lubac.jpeg"
                  alt="Galih Rakhasiwi"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-accent font-mono text-[10px]">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10">
                    PROFILE_PHOTO.RAW
                  </span>
                  <span className="text-gray-400">2026.IMG</span>
                </div>
              </div>
            </div>

            {/* KANAN: Text Quotes, Ambition Card, & Personal Favorites */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Paragraph Quote 1 */}
              <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed font-light border-l-2 border-accent/50 pl-4">
                “I’m{" "}
                <span className="font-semibold text-white underline decoration-accent underline-offset-4">
                  Galih Rakhasiwi Putra Kanaya
                </span>
                , a Software Engineering student from SMK Taruna Bhakti. I was
                born from Jakarta and I'm currently 16 years old.”
              </blockquote>

              {/* Paragraph Quote 2 */}
              <blockquote className="text-base md:text-lg text-gray-400 leading-relaxed font-light pl-4">
                “My goal is to get rich so that one day I won't have to
                reconsider when buying shit. When I'm not coding, I enjoy
                playing games, watching movies, and listening to music.”
              </blockquote>

              {/* Highlight Card (Discipline & Ambition) */}
              <div className="bg-[#0f172a]/80 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 hover:border-accent/40 shadow-xl">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    DISCIPLINE & AMBITION
                  </span>
                  <span className="font-mono text-xs text-accent/50">69</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                  Being an international Pimp.
                </h3>

                <p className="text-sm font-mono text-gray-400 leading-relaxed">
                  Dedicated to mastering the art of pimping and being a baller that knows no bound, On dat Agent Zero Shi.
                </p>
              </div>

              {/* FAVORITES SECTION (Movies, Albums, Anime) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Favorite Movies */}
                <div className="bg-[#0f172a]/40 border border-white/10 rounded-xl p-4 flex flex-col gap-2 transition-all duration-300 hover:border-white/20">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-wider">
                    Favorite Movies
                  </span>
                  <ul className="text-xs text-gray-300 space-y-1 font-light">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-accent/60" />
                      The Batman - Matt Reeves
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-accent/60" />
                      Crows Zero - Takashi Miike
                    </li>
                  </ul>
                </div>

                {/* Favorite Albums */}
                <div className="bg-[#0f172a]/40 border border-white/10 rounded-xl p-4 flex flex-col gap-2 transition-all duration-300 hover:border-white/20">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-wider">
                    Favorite Albums
                  </span>
                  <ul className="text-xs text-gray-300 space-y-1 font-light">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-accent/60" />
                      Grace - Jeff Buckley
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-accent/60" />
                      Ideologi Sikap Otak - Ahmad Band
                    </li>
                  </ul>
                </div>

                {/* Favorite Anime/Games */}
                <div className="bg-[#0f172a]/40 border border-white/10 rounded-xl p-4 flex flex-col gap-2 transition-all duration-300 hover:border-white/20">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-wider">
                    Anime & Games
                  </span>
                  <ul className="text-xs text-gray-300 space-y-1 font-light">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-accent/60" />
                      Devil May Cry 4
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-accent/60" />
                      Initial D
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* SKILLS SECTION */}
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}>
        <section
          className="px-6 md:px-16 lg:px-20 py-12 max-w-7xl mx-auto flex flex-col gap-8"
          id="skills">
          {/* Cinematic Header / Technical Overlay HUD */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-xs font-mono text-gray-400 tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>02 // MY SKILLS</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase">
                Technical{" "}
                <span className="text-accent not-italic font-mono">
                  Arsenal
                </span>
              </h1>
            </div>

            <p className="font-mono text-xs text-gray-400 max-w-xs leading-relaxed">
              A curated display of architectural, engineering, and design
              capabilities.
            </p>
          </div>

          {/* Abstract Asymmetric Bento Grid (Cinematic Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* 01. Web Development (Featured - Large Card / Spans 7 Cols) */}
            <div className="md:col-span-7 group relative bg-[#0d1527]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-accent/40 shadow-2xl flex flex-col justify-between min-h-[280px]">
              {/* Subtle Background HUD Overlay */}
              <div className="absolute top-0 right-0 p-6 pointer-events-none font-mono text-[90px] font-black text-white/2 leading-none select-none">
                01
              </div>

              <div className="flex justify-between items-start z-10">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
                    PRIMARY ARCHITECTURE
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Web Development
                  </h3>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full border border-white/10 bg-slate-950/50 text-gray-400 whitespace-nowrap shrink-0">
                  FULL-STACK
                </span>
              </div>

              <div className="z-10 mt-6">
                <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed max-w-xl">
                  Building robust web platforms from scalable API backends to
                  fluid interactive client interfaces using{" "}
                  <span className="text-white font-medium border-b border-accent/40">
                    React
                  </span>
                  ,{" "}
                  <span className="text-white font-medium border-b border-accent/40">
                    Nest
                  </span>
                  ,{" "}
                  <span className="text-white font-medium border-b border-accent/40">
                    Express
                  </span>
                  , and{" "}
                  <span className="text-white font-medium border-b border-accent/40">
                    Go-Lang
                  </span>
                  .
                </p>
              </div>

              {/* Monochromatic Subtle Glow Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* 02. UI/UX Design (Medium Card / Spans 5 Cols) */}
            <div className="md:col-span-5 group relative bg-[#0d1527]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-accent/40 shadow-2xl flex flex-col justify-between min-h-[280px]">
              <div className="absolute top-0 right-0 p-6 pointer-events-none font-mono text-[90px] font-black text-white/[0.02] leading-none select-none">
                02
              </div>

              <div className="flex justify-between items-start z-10">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
                    VISUAL ERGONOMICS
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    UI/UX Design
                  </h3>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full border border-white/10 bg-slate-950/50 text-gray-400">
                  FIGMA
                </span>
              </div>

              <div className="z-10 mt-6">
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  Crafting precise user interfaces and design systems with{" "}
                  <span className="text-white font-normal">Figma</span>. Focused
                  on high contrast, usability, and intuitive layout hierarchy.
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* 03. Mobile Development (Compact Card / Spans 4 Cols) */}
            <div className="md:col-span-4 group relative bg-[#0d1527]/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:border-accent/40 shadow-2xl flex flex-col justify-between min-h-[220px]">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
                  03 // MOBILE
                </span>
                <span className="font-mono text-[10px] text-gray-500">
                  EXPO / FLUTTER
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Mobile Apps
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Developing cross-platform mobile experiences using{" "}
                  <span className="text-white">React Expo</span> and native
                  fundamentals in <span className="text-white">Flutter</span>.
                </p>
              </div>
            </div>

            {/* 04. Database Management (Compact Card / Spans 4 Cols) */}
            <div className="md:col-span-4 group relative bg-[#0d1527]/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:border-accent/40 shadow-2xl flex flex-col justify-between min-h-[220px]">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
                  04 // DATA
                </span>
                <span className="font-mono text-[10px] text-gray-500">
                  SQL ARCHITECTURE
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Database Management
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Structuring normalized relational databases, DDL/DML queries,
                  and schema optimizations via{" "}
                  <span className="text-white">MySQL</span> &{" "}
                  <span className="text-white">PostgreSQL</span>.
                </p>
              </div>
            </div>

            {/* 05. General Knowledge & Languages (Compact Card / Spans 4 Cols) */}
            <div className="md:col-span-4 group relative bg-[#0d1527]/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:border-accent/40 shadow-2xl flex flex-col justify-between min-h-[220px]">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
                  05 // COMMUNICATION
                </span>
                <span className="font-mono text-[10px] text-gray-500">
                  ENGLISH C1
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  General & English
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Fluent technical communication in{" "}
                  <span className="text-accent font-medium">English</span>,
                  paired with strong foundational logic in mathematics and
                  analytical subjects.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* PROJECTS SECTION */}
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}>
        <section
          className="px-6 md:px-16 lg:px-20 py-16 max-w-7xl mx-auto flex flex-col gap-10"
          id="projects">
          {/* Minimalist Cinematic Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-gray-400 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>03 // SELECTED WORKS</span>
          </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Featured{" "}
                <span className="text-accent italic font-serif">Projects</span>
              </h1>
            </div>
            <p className="font-mono text-xs text-gray-400 max-w-xs leading-relaxed">
              Engineered systems and digital products built for speed and
              utility.
            </p>
          </div>

          {/* Project Layout (Bento Feature Grid untuk Komposisi Ganjil) */}
          <div className="flex flex-col gap-8">
            {projectsData.map((project, idx) => {
              const isFeatured = idx === 0; // Project pertama jadi Hero / Banner Sinematik

              return isFeatured ? (
                /* HERO PROJECT (Full Width Banner) */
                <Link
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  className="group relative w-full rounded-3xl overflow-hidden bg-[#0d1527]/60 border border-white/10 hover:border-accent/40 transition-all duration-500 shadow-2xl flex flex-col lg:flex-row items-stretch min-h-[340px]">
                  {/* Image Side */}
                  <div className="relative lg:w-3/5 h-[240px] lg:h-auto overflow-hidden bg-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#0d1527]/40 to-[#0d1527]" />
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-2/5 p-8 flex flex-col justify-between gap-6">
                    <div className="flex flex-col gap-3">
                      <span className="font-mono text-[10px] text-accent tracking-widest uppercase">
                        FEATURED SYSTEM // 01
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-300 font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 border-t border-white/10 pt-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2.5 py-1 bg-slate-900 border border-white/10 rounded-full font-mono text-[10px] text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="font-mono text-xs text-accent flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                        Launch Application ↗
                      </span>
                    </div>
                  </div>
                </Link>
              ) : null;
            })}

            {/* SECONDARY PROJECTS (2-Column Grid untuk Sisa Project) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsData.slice(1).map((project, idx) => (
                <Link
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  className="group relative rounded-3xl overflow-hidden bg-[#0d1527]/60 border border-white/10 hover:border-accent/40 transition-all duration-500 shadow-xl flex flex-col justify-between min-h-[380px]">
                  {/* Project Image Clean Screen */}
                  <div className="relative w-full h-[200px] overflow-hidden bg-black/40">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1527] via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col justify-between flex-grow gap-6">
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] text-gray-400 tracking-wider">
                        0{idx + 2} // PROJECT
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-400 font-light leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 bg-slate-900 border border-white/10 rounded-md font-mono text-[10px] text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="font-mono text-xs text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        View ↗
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* CERTIFICATES SECTION */}
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}>
        <section
          className="px-6 md:px-16 lg:px-20 py-16 max-w-7xl mx-auto flex flex-col gap-10"
          id="sertifikat">
          {/* Clean Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-gray-400 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>04 // CREDENTIALS</span>
          </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                My{" "}
                <span className="text-accent italic font-serif">
                  Certificates
                </span>
              </h1>
            </div>
            <p className="font-mono text-xs text-gray-400 max-w-xs leading-relaxed">
              Verified training, technical qualifications, and achievement
              records.
            </p>
          </div>

          {/* Minimalist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sertifikat.map((sertif) => (
              <div
                key={sertif.id}
                className="group relative bg-[#0d1527]/40 border border-white/10 hover:border-accent/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center font-mono text-[11px]">
                    <span className="text-gray-400">{sertif.org}</span>
                    <span className="text-accent">{sertif.tahun}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-accent transition-colors leading-snug">
                    {sertif.nama}
                  </h3>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        className="font-mono text-xs text-gray-400 hover:text-white hover:underline flex items-center gap-1.5 transition-colors cursor-pointer"
                        type="button">
                        <span>View Certificate</span>
                        <span className="text-accent">↗</span>
                      </button>
                    </PopoverTrigger>

                    <PopoverContent
                      side="top"
                      align="center"
                      className="w-auto max-w-none bg-slate-950/95 border border-white/15 p-2 shadow-2xl rounded-2xl backdrop-blur-md">
                      <img
                        src={sertif.img}
                        alt={sertif.nama}
                        className="max-w-[85vw] md:max-w-[45vw] max-h-[55vh] rounded-xl object-contain"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedContent>

      {/* CONTACT SECTION */}
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}>
        <section
          className="px-6 md:px-16 lg:px-20 py-12 max-w-7xl mx-auto flex flex-col gap-8"
          id="contact">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Box: Communication HUD & Social Links */}
            <div className="lg:col-span-5 bg-[#0d1527]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-xl">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-xs font-mono text-gray-400 tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>05 // TERMINAL CONTACT</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  Get in{" "}
                  <span className="text-accent italic font-serif">Touch</span>.
                </h1>
                <p className="text-sm font-light text-gray-300 leading-relaxed">
                  Have an enquiry, open role, or collaboration idea? Send an
                  direct dispatch or connect via verified channels below.
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-8">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                  DIRECT CHANNELS
                </span>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="p-3 bg-slate-900 border border-white/10 text-gray-300 hover:text-slate-950 hover:bg-accent transition-all duration-300 rounded-xl flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    className="p-3 bg-slate-900 border border-white/10 text-gray-300 hover:text-slate-950 hover:bg-accent transition-all duration-300 rounded-xl flex items-center justify-center">
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="tel:0882"
                    className="p-3 bg-slate-900 border border-white/10 text-gray-300 hover:text-slate-950 hover:bg-accent transition-all duration-300 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    className="p-3 bg-slate-900 border border-white/10 text-gray-300 hover:text-slate-950 hover:bg-accent transition-all duration-300 rounded-xl flex items-center justify-center">
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Form: Monochromatic High Contrast Form */}
            <form
              className="lg:col-span-7 bg-[#0d1527]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col gap-4 shadow-xl justify-between"
              action="https://formspree.io/f/mzdralzw"
              method="POST">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3 font-mono text-xs">
                  <span className="text-gray-400">FORM_DISPATCH</span>
                  <span className="text-accent">ENCRYPTED</span>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-mono text-gray-400">
                    IDENTIFIER
                  </label>
                  <input
                    type="text"
                    className="bg-slate-950/60 border border-white/10 w-full px-4 py-3 rounded-xl text-white font-mono text-xs focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your Name or Alias"
                    name="username"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-mono text-gray-400">
                    RETURN_ADDRESS
                  </label>
                  <input
                    type="email"
                    className="bg-slate-950/60 border border-white/10 w-full px-4 py-3 rounded-xl text-white font-mono text-xs focus:outline-none focus:border-accent transition-colors"
                    placeholder="name@domain.com"
                    name="email"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-mono text-gray-400">
                    TRANSMISSION_BODY
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="bg-slate-950/60 border border-white/10 w-full px-4 py-3 rounded-xl h-[120px] text-white font-mono text-xs focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Write your transmission details..."
                    required></textarea>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-4 bg-accent/10 border border-accent/40 text-accent font-mono text-xs uppercase tracking-wider hover:bg-accent hover:text-slate-950 transition-all duration-300 py-6 rounded-xl shadow-lg flex items-center justify-between px-6">
                <span>Dispatch Message</span>
                <span>[SEND] →</span>
              </Button>
            </form>
          </div>
        </section>
      </AnimatedContent>

      {/* FOOTER */}
      <footer className="w-full border-t border-white/10 bg-slate-950 text-white mt-20 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-5 flex flex-col gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-white font-mono">
              Galih Rakhasiwi
            </h1>
            <p className="text-xs font-mono text-gray-400 leading-relaxed max-w-sm">
              Software Engineering student focused on resilient web applications
              and clean backend database architecture.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3">
            <h3 className="font-mono text-xs text-accent uppercase tracking-wider">
              Navigasi
            </h3>
            <ul className="space-y-2 text-xs font-mono text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition">
                  00 // Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  01 // About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition">
                  02 // Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  03 // Projects
                </a>
              </li>
              <li className="pt-2">
                <MusicPlayer />
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <h3 className="font-mono text-xs text-accent uppercase tracking-wider">
              Location & Contact
            </h3>
            <ul className="space-y-1.5 text-xs font-mono text-gray-400">
              <li>LOCATION: Bogor / Depok, Indonesia</li>
              <li>INSTITUTION: SMK Taruna Bhakti</li>
              <li>STATUS: OPEN_FOR_COLLAB</li>
            </ul>

            <div className="flex gap-2 mt-2">
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="p-2 border border-white/10 rounded-lg hover:border-accent text-gray-400 hover:text-accent transition">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="p-2 border border-white/10 rounded-lg hover:border-accent text-gray-400 hover:text-accent transition">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="p-2 border border-white/10 rounded-lg hover:border-accent text-gray-400 hover:text-accent transition">
                <Github className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-gray-500 gap-2">
          <span>© 2026 GALIH RAKHASIWI. ALL RIGHTS RESERVED.</span>
          <span>Agung Yuli lol</span>
        </div>
      </footer>
    </div>
  );
}
