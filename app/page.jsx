"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Instagram,
  Github,
  Linkedin,
  Phone,
  ArrowUpRight,
  ExternalLink,
  Download,
  Film,
  Disc3,
  Gamepad2,
  Menu,
  X,
  Code2,
  Database,
  Smartphone,
  Palette,
  Terminal,
  FileCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Loop from "@/components/Loop";
import MusicPlayer from "@/components/AudioPlay";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const AnimatedContent = dynamic(
  () => import("@/components/AnimatedContent"),
  { ssr: false }
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("galihrakhasiwi@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

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

  return (
    <div className="bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#020617] min-h-screen text-white flex flex-col w-full selection:bg-accent selection:text-slate-950 overflow-x-hidden">
      {/* NAVBAR */}
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl h-14 bg-slate-950/70 backdrop-blur-xl border border-white/10 z-50 rounded-full flex justify-between items-center px-5 sm:px-6 text-white shadow-2xl shadow-black/60 transition-all duration-300"
        aria-label="Main Navigation">
        {/* Brand Name */}
        <a
          href="#home"
          className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-1">
          <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
          <span className="text-sm sm:text-base font-mono font-semibold tracking-tight text-white group-hover:text-accent transition-colors">
            glihrakha<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7 lg:gap-8 text-xs font-mono tracking-wider">
          <a
            href="#home"
            className="text-gray-300 hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            About
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

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="bg-accent/10 border border-accent/40 text-accent hover:bg-accent hover:text-slate-950 px-4 py-1.5 rounded-full font-mono text-xs font-medium tracking-wider transition-all duration-300 hover:shadow-[0_0_15px_rgba(22,196,127,0.35)] active:scale-95">
            Contact Me
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Toggle Navigation Menu">
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-slate-950/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 z-40 flex flex-col gap-4 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
              {"// Navigation Index"}
            </span>
            <span className="text-[10px] font-mono text-accent">GALIH.DEV</span>
          </div>
          <div className="flex flex-col gap-2 font-mono text-sm">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 hover:text-accent transition-colors flex items-center justify-between text-gray-300">
              <span>00 // Home</span>
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 hover:text-accent transition-colors flex items-center justify-between text-gray-300">
              <span>01 // About Me</span>
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 hover:text-accent transition-colors flex items-center justify-between text-gray-300">
              <span>02 // Skills</span>
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 hover:text-accent transition-colors flex items-center justify-between text-gray-300">
              <span>03 // Selected Works</span>
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </a>
            <a
              href="#sertifikat"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 hover:text-accent transition-colors flex items-center justify-between text-gray-300">
              <span>04 // Certificates</span>
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-white/5 hover:text-accent transition-colors flex items-center justify-between text-gray-300">
              <span>05 // Contact</span>
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </a>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
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
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] text-white font-light text-left leading-[0.95] tracking-tight">
                I&apos;m a Software <br />
                <span className="font-bold text-accent">Engineer.</span>
              </h1>

              {/* Description & CTAs */}
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-lg mt-1">
                Full-stack student developer at SMK Taruna Bhakti. Building
                resilient web systems, clean relational databases, and
                responsive digital interfaces.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
                <a
                  href="#projects"
                  className="bg-accent text-slate-950 hover:bg-accent/90 px-5 py-2.5 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(22,196,127,0.3)]">
                  <span>Explore Works</span>
                  <span>↓</span>
                </a>
                <a
                  href="#about"
                  className="bg-slate-900/80 border border-white/15 text-gray-300 hover:text-white hover:border-white/30 px-5 py-2.5 rounded-xl transition-all duration-200">
                  <span>About Me →</span>
                </a>
              </div>
            </div>

            {/* Right Photo & Bio Card */}
            <div className="flex flex-col items-start lg:items-end gap-4 w-full sm:w-auto self-center lg:self-auto">
              <div className="relative group rounded-2xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl w-60 sm:w-64 md:w-72 aspect-[3/4]">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src="/images/ross.jpeg"
                  alt="Ross - Galih Rakha Avatar"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* HUD Overlay Labels */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-gray-300 pointer-events-none">
                  <span className="px-2 py-0.5 rounded-md bg-slate-950/70 backdrop-blur-md border border-white/10">
                    ROSS.AVATAR
                  </span>
                  <span className="text-accent">#01</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono pointer-events-none">
                  <span className="text-gray-300">SYS_OPERATOR</span>
                  <span className="text-accent/90">2026.BUILD</span>
                </div>
              </div>

              <p className="w-full max-w-xs text-left lg:text-right font-mono text-xs text-gray-400 leading-relaxed">
                Building high-performance web systems and full-stack applications.{" "}
                <br />
                <span className="text-accent">Scroll down to explore works.</span>
              </p>
            </div>
          </div>

          {/* Marquee Technology Loop */}
          <div className="mt-14 md:mt-20 border-y border-white/5 bg-slate-950/30">
            <Loop />
          </div>
        </AnimatedContent>
      </section>

      {/* ABOUT ME SECTION */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Who <span className="text-accent font-serif italic">Am I?</span>
            </h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* LEFT: Spec Card + CV Download + Photo */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {/* Profile Card / Data Spec */}
                <div className="bg-[#0d1527]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                      PROFILE SPECIFICATION
                    </span>
                    <span className="font-mono text-[11px] text-accent">
                      VERIFIED // 2026
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-b border-white/5 pb-2.5 font-mono text-xs md:text-sm">
                    <span className="text-gray-400">Legal Name</span>
                    <span className="text-white font-medium text-right">
                      Galih Rakhasiwi P. K.
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2.5 font-mono text-xs md:text-sm">
                    <span className="text-gray-400">Institution</span>
                    <span className="text-white font-medium text-right">
                      SMK Taruna Bhakti
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2.5 font-mono text-xs md:text-sm">
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
                <a
                  href="#contact"
                  className="w-full bg-accent/10 border border-accent/40 text-accent font-mono text-xs uppercase tracking-wider hover:bg-accent hover:text-slate-950 transition-all duration-300 py-4 px-6 rounded-xl shadow-lg flex items-center justify-between group">
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>Download Curriculum Vitae [PDF]</span>
                  </span>
                  <span className="text-base group-hover:translate-y-0.5 transition-transform">
                    ↓
                  </span>
                </a>

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1527]/40 shadow-lg group">
                  <img
                    className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    src="/images/lubac.jpeg"
                    alt="Galih Rakhasiwi Portrait"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-accent font-mono text-[10px]">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10">
                      PROFILE_PHOTO.RAW
                    </span>
                    <span className="text-gray-400">2026.IMG</span>
                  </div>
                </div>
              </div>

              {/* RIGHT: Quotes, Ambition Card, & Personal Favorites */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                {/* Paragraph Quote 1 */}
                <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed font-light border-l-2 border-accent/60 pl-5 bg-white/[0.02] py-3 rounded-r-xl">
                  &ldquo;I&apos;m{" "}
                  <span className="font-semibold text-white underline decoration-accent underline-offset-4">
                    Galih Rakhasiwi Putra Kanaya
                  </span>
                  , a Software Engineering student from SMK Taruna Bhakti. I was
                  born in Jakarta and I&apos;m currently 17 years old.&rdquo;
                </blockquote>

                {/* Paragraph Quote 2 */}
                <blockquote className="text-base md:text-lg text-gray-300 leading-relaxed font-light border-l-2 border-white/15 pl-5 bg-white/[0.01] py-3 rounded-r-xl">
                  &ldquo;My goal is to get rich so that one day I won&apos;t have
                  to reconsider when buying shit. When I&apos;m not coding, I
                  enjoy playing games, watching movies, and listening to
                  music.&rdquo;
                </blockquote>

                {/* Highlight Card (Discipline & Ambition) */}
                <div className="bg-[#0d1527]/90 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 hover:border-accent/40 shadow-xl">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                      DISCIPLINE & AMBITION
                    </span>
                    <span className="font-mono text-xs text-accent">#69</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                    Being an international Pimp.
                  </h3>

                  <p className="text-sm font-mono text-gray-400 leading-relaxed">
                    Dedicated to mastering the art of pimping and being a baller
                    that knows no bound, On dat Agent Zero Shi.
                  </p>
                </div>

                {/* FAVORITES SECTION (Movies, Albums, Anime/Games) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Favorite Movies */}
                  <div className="bg-[#0d1527]/60 border border-white/10 rounded-xl p-4 flex flex-col gap-2.5 transition-all duration-300 hover:border-accent/40">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-accent uppercase tracking-wider flex items-center gap-1.5">
                        <Film className="w-3 h-3" />
                        <span>Movies</span>
                      </span>
                      <span className="text-[9px] font-mono text-gray-500">
                        CINEMA
                      </span>
                    </div>
                    <ul className="text-xs text-gray-300 space-y-1.5 font-light">
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
                  <div className="bg-[#0d1527]/60 border border-white/10 rounded-xl p-4 flex flex-col gap-2.5 transition-all duration-300 hover:border-accent/40">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-accent uppercase tracking-wider flex items-center gap-1.5">
                        <Disc3 className="w-3 h-3" />
                        <span>Albums</span>
                      </span>
                      <span className="text-[9px] font-mono text-gray-500">
                        AUDIO
                      </span>
                    </div>
                    <ul className="text-xs text-gray-300 space-y-1.5 font-light">
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
                  <div className="bg-[#0d1527]/60 border border-white/10 rounded-xl p-4 flex flex-col gap-2.5 transition-all duration-300 hover:border-accent/40">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-accent uppercase tracking-wider flex items-center gap-1.5">
                        <Gamepad2 className="w-3 h-3" />
                        <span>Anime & Games</span>
                      </span>
                      <span className="text-[9px] font-mono text-gray-500">
                        PLAY
                      </span>
                    </div>
                    <ul className="text-xs text-gray-300 space-y-1.5 font-light">
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

      {/* SKILLS SECTION */}
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
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-xs font-mono text-gray-400 tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>03 // TECHNICAL ARSENAL</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase">
                  Technical{" "}
                  <span className="text-accent not-italic font-mono">
                    Arsenal
                  </span>
                </h2>
              </div>

              <p className="font-mono text-xs text-gray-400 max-w-xs leading-relaxed">
                A curated display of architectural, engineering, and design
                capabilities.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {/* 01. Web Development (Featured Card - 7 cols) */}
              <div className="md:col-span-7 group relative bg-[#0d1527]/80 backdrop-blur-md border border-white/10 rounded-3xl p-7 md:p-8 overflow-hidden transition-all duration-500 hover:border-accent/40 shadow-2xl flex flex-col justify-between min-h-[300px]">
                <div className="absolute top-0 right-0 p-6 pointer-events-none font-mono text-7xl md:text-8xl font-black text-white/[0.03] leading-none select-none">
                  01
                </div>

                <div className="flex justify-between items-start z-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-widest flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5" />
                      PRIMARY ARCHITECTURE
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      Web Development
                    </h3>
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded-full border border-white/10 bg-slate-950/70 text-gray-300 shrink-0">
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

                  <div className="flex flex-wrap gap-2 mt-5">
                    {["React", "Next.js", "Express", "NestJS", "Go-Lang", "Tailwind CSS"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 font-mono text-[11px] text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* 02. UI/UX Design (5 cols) */}
              <div className="md:col-span-5 group relative bg-[#0d1527]/80 backdrop-blur-md border border-white/10 rounded-3xl p-7 md:p-8 overflow-hidden transition-all duration-500 hover:border-accent/40 shadow-2xl flex flex-col justify-between min-h-[300px]">
                <div className="absolute top-0 right-0 p-6 pointer-events-none font-mono text-7xl md:text-8xl font-black text-white/[0.03] leading-none select-none">
                  02
                </div>

                <div className="flex justify-between items-start z-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-widest flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5" />
                      VISUAL ERGONOMICS
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      UI/UX Design
                    </h3>
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded-full border border-white/10 bg-slate-950/70 text-gray-300">
                    FIGMA
                  </span>
                </div>

                <div className="z-10 mt-6">
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    Crafting precise user interfaces and design systems with{" "}
                    <span className="text-white font-normal">Figma</span>. Focused
                    on high contrast, usability, and intuitive layout hierarchy.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {["Figma", "Wireframing", "Design Systems", "Prototyping"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 font-mono text-[11px] text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* 03. Mobile Apps (4 cols) */}
              <div className="md:col-span-4 group relative bg-[#0d1527]/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:border-accent/40 shadow-2xl flex flex-col justify-between min-h-[230px]">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest flex items-center gap-1">
                    <Smartphone className="w-3 h-3" />
                    03 // MOBILE
                  </span>
                  <span className="font-mono text-[10px] text-gray-400">
                    EXPO / FLUTTER
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Mobile Apps
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Developing cross-platform mobile experiences using{" "}
                    <span className="text-white">React Expo</span> and native
                    fundamentals in <span className="text-white">Flutter</span>.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                  {["React Native", "Expo", "Flutter"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-900/80 border border-white/10 font-mono text-[10px] text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* 04. Database Management (4 cols) */}
              <div className="md:col-span-4 group relative bg-[#0d1527]/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:border-accent/40 shadow-2xl flex flex-col justify-between min-h-[230px]">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest flex items-center gap-1">
                    <Database className="w-3 h-3" />
                    04 // DATA
                  </span>
                  <span className="font-mono text-[10px] text-gray-400">
                    SQL ARCHITECTURE
                  </span>
                </div>

                <div className="mt-4">
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

                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                  {["MySQL", "PostgreSQL", "Prisma ORM"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-900/80 border border-white/10 font-mono text-[10px] text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* 05. General Knowledge & English (4 cols) */}
              <div className="md:col-span-4 group relative bg-[#0d1527]/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:border-accent/40 shadow-2xl flex flex-col justify-between min-h-[230px]">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest flex items-center gap-1">
                    <Terminal className="w-3 h-3" />
                    05 // COMMUNICATION
                  </span>
                  <span className="font-mono text-[10px] text-accent">
                    ENGLISH C1
                  </span>
                </div>

                <div className="mt-4">
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

                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                  {["English C1", "Problem Solving", "Logic"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-900/80 border border-white/10 font-mono text-[10px] text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* PROJECTS SECTION */}
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
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-gray-400 tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>04 // SELECTED WORKS</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                  Featured{" "}
                  <span className="text-accent italic font-serif">Projects</span>
                </h2>
              </div>
              <p className="font-mono text-xs text-gray-400 max-w-xs leading-relaxed">
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
                  className="group relative w-full rounded-3xl overflow-hidden bg-[#0d1527]/70 border border-white/10 hover:border-accent/50 transition-all duration-500 shadow-2xl flex flex-col lg:flex-row items-stretch">
                  {/* Image Showcase */}
                  <div className="relative lg:w-3/5 min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] overflow-hidden bg-black/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#0d1527]/30 to-[#0d1527]" />
                  </div>

                  {/* Content Area */}
                  <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between gap-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-accent tracking-widest uppercase flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                          FEATURED DEPLOYMENT // 01
                        </span>
                        <span className="font-mono text-[10px] text-gray-400 bg-slate-900 px-2 py-0.5 rounded border border-white/10">
                          {project.role}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 border-t border-white/10 pt-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2.5 py-1 bg-slate-900 border border-white/10 rounded-lg font-mono text-[10px] text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="font-mono text-xs text-accent flex items-center gap-2 group-hover:translate-x-1.5 transition-transform">
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
                    className="group relative rounded-3xl overflow-hidden bg-[#0d1527]/70 border border-white/10 hover:border-accent/40 transition-all duration-500 shadow-xl flex flex-col justify-between">
                    {/* Image */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/60">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1527] via-transparent to-transparent opacity-90" />
                      <div className="absolute top-3 right-3">
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-gray-300 flex items-center gap-1">
                          <Github className="w-3 h-3" />
                          REPO
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-6 flex flex-col justify-between flex-grow gap-5">
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center font-mono text-[10px]">
                          <span className="text-gray-400 tracking-wider">
                            0{idx + 2} {"// PROJECT"}
                          </span>
                          <span className="text-accent/80">{project.role}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-xs text-gray-400 font-light leading-relaxed line-clamp-3">
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

                        <span className="font-mono text-xs text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0">
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

      {/* CERTIFICATES SECTION */}
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
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-gray-400 tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>05 // CREDENTIALS</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                  My{" "}
                  <span className="text-accent italic font-serif">
                    Certificates
                  </span>
                </h2>
              </div>
              <p className="font-mono text-xs text-gray-400 max-w-xs leading-relaxed">
                Verified training, technical qualifications, and achievement
                records.
              </p>
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {sertifikat.map((sertif) => (
                <div
                  key={sertif.id}
                  className="group relative bg-[#0d1527]/50 border border-white/10 hover:border-accent/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between gap-5 shadow-lg hover:shadow-2xl">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center font-mono text-[11px]">
                      <span className="text-gray-400">{sertif.org}</span>
                      <span className="px-2 py-0.5 rounded bg-accent/10 border border-accent/30 text-accent font-medium">
                        {sertif.tahun}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-accent transition-colors leading-snug">
                      {sertif.nama}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-gray-500">
                      [{sertif.badge}]
                    </span>

                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          className="font-mono text-xs text-gray-300 hover:text-accent flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded px-1.5 py-0.5"
                          type="button">
                          <span>View Certificate</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                        </button>
                      </PopoverTrigger>

                      <PopoverContent
                        side="top"
                        align="center"
                        className="w-auto max-w-none bg-slate-950/95 border border-white/15 p-3 shadow-2xl rounded-2xl backdrop-blur-xl">
                        <div className="flex flex-col gap-2">
                          <div className="flex justify-between items-center font-mono text-xs text-gray-400 px-1">
                            <span>{sertif.nama}</span>
                            <span className="text-accent">{sertif.org}</span>
                          </div>
                          <img
                            src={sertif.img}
                            alt={sertif.nama}
                            className="max-w-[85vw] md:max-w-[45vw] max-h-[55vh] rounded-xl object-contain border border-white/10"
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

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 md:py-24">
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Direct Channels */}
              <div className="lg:col-span-5 bg-[#0d1527]/80 backdrop-blur-md border border-white/10 rounded-3xl p-7 md:p-8 flex flex-col justify-between shadow-xl">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-xs font-mono text-gray-400 tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span>06 // TERMINAL CONTACT</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Get in{" "}
                    <span className="text-accent italic font-serif">Touch</span>.
                  </h2>
                  <p className="text-sm font-light text-gray-300 leading-relaxed">
                    Have an enquiry, open role, or collaboration idea? Send a
                    direct dispatch or connect via verified channels below.
                  </p>
                </div>

                <div className="flex flex-col gap-4 mt-8">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    DIRECT CHANNELS
                  </span>
                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      className="p-3 bg-slate-900 border border-white/10 text-gray-300 hover:text-slate-950 hover:bg-accent transition-all duration-300 rounded-xl flex items-center gap-2.5 group">
                      <Linkedin className="w-4 h-4 text-accent group-hover:text-slate-950" />
                      <span>LinkedIn</span>
                    </Link>
                    <Link
                      href="https://github.com"
                      target="_blank"
                      className="p-3 bg-slate-900 border border-white/10 text-gray-300 hover:text-slate-950 hover:bg-accent transition-all duration-300 rounded-xl flex items-center gap-2.5 group">
                      <Github className="w-4 h-4 text-accent group-hover:text-slate-950" />
                      <span>GitHub</span>
                    </Link>
                    <Link
                      href="https://instagram.com"
                      target="_blank"
                      className="p-3 bg-slate-900 border border-white/10 text-gray-300 hover:text-slate-950 hover:bg-accent transition-all duration-300 rounded-xl flex items-center gap-2.5 group">
                      <Instagram className="w-4 h-4 text-accent group-hover:text-slate-950" />
                      <span>Instagram</span>
                    </Link>
                    <Link
                      href="tel:0882"
                      className="p-3 bg-slate-900 border border-white/10 text-gray-300 hover:text-slate-950 hover:bg-accent transition-all duration-300 rounded-xl flex items-center gap-2.5 group">
                      <Phone className="w-4 h-4 text-accent group-hover:text-slate-950" />
                      <span>Phone</span>
                    </Link>
                  </div>

                  {/* Quick Copy Email Banner */}
                  <div className="mt-2 p-3 bg-slate-950/60 border border-white/10 rounded-xl flex items-center justify-between font-mono text-xs">
                    <span className="text-gray-400 truncate max-w-[200px]">
                      galihrakhasiwi@gmail.com
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="text-accent hover:text-white transition-colors cursor-pointer text-[11px] underline underline-offset-4">
                      {copiedEmail ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Dispatch Form */}
              <form
                className="lg:col-span-7 bg-[#0d1527]/80 backdrop-blur-md border border-white/10 rounded-3xl p-7 md:p-8 flex flex-col gap-4 shadow-xl justify-between"
                action="https://formspree.io/f/mzdralzw"
                method="POST">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 font-mono text-xs">
                    <span className="text-gray-400">FORM_DISPATCH</span>
                    <span className="text-accent flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      ENCRYPTED
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="username"
                      className="text-xs font-mono text-gray-400">
                      IDENTIFIER
                    </label>
                    <input
                      id="username"
                      type="text"
                      className="bg-slate-950/70 border border-white/10 w-full px-4 py-3 rounded-xl text-white font-mono text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-gray-600"
                      placeholder="Your Name or Alias"
                      name="username"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-mono text-gray-400">
                      RETURN_ADDRESS
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="bg-slate-950/70 border border-white/10 w-full px-4 py-3 rounded-xl text-white font-mono text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-gray-600"
                      placeholder="name@domain.com"
                      name="email"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-mono text-gray-400">
                      TRANSMISSION_BODY
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="bg-slate-950/70 border border-white/10 w-full px-4 py-3 rounded-xl h-[120px] text-white font-mono text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none placeholder:text-gray-600"
                      placeholder="Write your transmission details..."
                      required></textarea>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full mt-4 bg-accent/10 border border-accent/40 text-accent font-mono text-xs uppercase tracking-wider hover:bg-accent hover:text-slate-950 transition-all duration-300 py-6 rounded-xl shadow-lg flex items-center justify-between px-6 cursor-pointer">
                  <span>Dispatch Message</span>
                  <span>[SEND] →</span>
                </Button>
              </form>
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-white/10 bg-slate-950 text-white mt-12 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <h3 className="text-2xl font-bold tracking-tight text-white font-mono flex items-center gap-2">
              Galih Rakhasiwi
              <span className="text-accent">.</span>
            </h3>
            <p className="text-xs font-mono text-gray-400 leading-relaxed max-w-sm">
              Software Engineering student focused on resilient web applications
              and clean backend database architecture.
            </p>
          </div>

          {/* Navigation Col */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider">
              Navigation
            </h4>
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
              <li>
                <a href="#sertifikat" className="hover:text-white transition">
                  04 // Certificates
                </a>
              </li>
              <li className="pt-2">
                <MusicPlayer />
              </li>
            </ul>
          </div>

          {/* Location & Status Col */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider">
              Location & Status
            </h4>
            <ul className="space-y-1.5 text-xs font-mono text-gray-400">
              <li>LOCATION: Bogor / Depok, Indonesia</li>
              <li>INSTITUTION: SMK Taruna Bhakti</li>
              <li>STATUS: OPEN_FOR_COLLAB</li>
            </ul>

            <div className="flex gap-2 mt-2">
              <Link
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
                className="p-2 border border-white/10 rounded-lg hover:border-accent text-gray-400 hover:text-accent transition">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
                className="p-2 border border-white/10 rounded-lg hover:border-accent text-gray-400 hover:text-accent transition">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                aria-label="GitHub"
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
