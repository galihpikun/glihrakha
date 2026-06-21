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
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"


export default function Home() {
  const AnimatedContent = dynamic(
    () => import("@/components/AnimatedContent"),
    { ssr: false },
  );

  const projectsData = [
    {
      id: 1,
      title: "Web Perpustakaan Sims",
      description: "Web Peminjaman buku sederhana menggunakan React untuk frontend dan menggunakan MySQL Sebagai Database. Fitur termasuk autentikasi pengguna, manajemen koleksi buku, dan sistem peminjaman.",
      image: "/images/perpus.png",
      link: "https://github.com/galihpikun/Projek-AAS-Kelas-11-Perpustakaan-Sekolah",
      tags: ["Next.Js", "MySql2", "NextAuth"]
    },
    {
      id: 2,
      title: "Cashbhak ( Web Kasir Online )",
      description: "Sebuah Web yang berfungsi sebagai kasir, Web ini bisa menyimpan dan mendata produk yang anda jual. Selain itu akan ada analisis penjualan seperti grafik, piechart bahkan history penjualan.",
      image: "/images/cashbhak.png",
      link: "https://github.com/RezaAdityaRamadhan26/CashBhak",
      tags: ["Next.Js", "MySql2", "NextAuth"]
    },
    {
      id: 3,
      title: "Web Laporan Masyarakat",
      description: "Sebuah web yang berfungsi untuk menampung laporan masyarakat. Web ini memiliki admin yang bakal mengatur jalan kerja laporan masyarakat. Selain itu web ini memilki fitur komen untuk diskusi.",
      image: "/images/komune.png",
      link: "https://github.com/galihpikun/komune-fe",
      tags: ["Next.Js", "Express.Js", "MySql2"]
    },
    {
      id: 4,
      title: "Food Rescue",
      description: "Sebuah web yang berfungsi sebagai sarana penjual untuk menjual makanan yang sudah tidak layak jual, tetapi masih layak konsumsi. Web ini memiliki fitur untuk menampilkan produk yang dijual, dan juga fitur untuk menambahkan produk baru.",
      image: "/images/komune.png",
      link: "https://github.com/RezaAdityaRamadhan26/food-rescue-fe",
      tags: ["Next.Js", "Express.Js", "Prisma"]
    },
    {
      id: 5,
      title: "SnipSnip (Web Snippet)",
      description: "Sebuah web yang berfungsi untuk menyimpan dan berbagi snippet kode. Di website ini anda dapat menyimpan rangkaian kode yang anda buat dan membagikannya kepada orang lain.",
      image: "/images/komune.png",
      link: "https://github.com/galihpikun/SnipSnip",
      tags: ["Next.Js", "Express.Js", "Prisma"]
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
    <div
      className="bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#020617] flex flex-col w-full h-full gap-40 md:gap-30 text-hover overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 w-full h-20 bg-secondary/40 backdrop-blur-md z-50 backdrop-saturate-150 flex justify-between lg:justify-around items-center px-6 md:px-12 lg:px-0 text-hover"
        suppressHydrationWarning>
        <h1 className="text-xl md:text-2xl font-light italic">glihrakha</h1>
        
        {/* Nav Links - Menyembunyikan di HP kecil atau membiarkannya scrollable horizontal agar tidak merusak layout */}
        <div className="hidden md:flex text-accent gap-4 lg:gap-8 items-center text-sm lg:text-base">
          <a
            href="/"
            className="font-semibold hover:text-hover relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
            Home
          </a>
          <a
            href="#about"
            className="font-semibold hover:text-hover relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
            About Me
          </a>
          <a
            href="#skills"
            className="font-semibold hover:text-hover relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
            Skills
          </a>
          <a
            href="#projects"
            className="font-semibold hover:text-hover relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
            Projects
          </a>
          <a
            href="#sertifikat"
            className="font-semibold hover:text-hover relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
            Certificates
          </a>
        </div>
        
        <a
          href="#contact"
          className="bg-accent px-4 py-2 rounded-full text-hover font-semibold hover:bg-hover hover:text-accent transition-all duration-300 hover:scale-105 text-sm md:text-base">
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
            <span className="font-bold">Engineer</span>
          </h1>
          <div className="flex flex-col items-center lg:items-end gap-5 w-full lg:w-auto">
            <div className="w-50 h-80 rounded-xl overflow-hidden bg-gray-500 group">
              <img
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                src="/images/ross.jpeg"
                alt="Ross"
              />
            </div>
            <h1 className="w-full max-w-xs text-center lg:text-right font-medium text-base">
              Hi there! Need a{" "}
              <span className="text-accent">Software Engineer</span> for your
              project? Well You're in the right place! <br />
              Go down for more.
            </h1>
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
        <section className="px-6 md:px-16 lg:px-20 py-8 flex flex-col-reverse lg:flex-row justify-around items-center gap-10 lg:gap-16 max-w-7xl mx-auto" id="about">
          {/* Teks Deskripsi */}
          <div className="flex flex-col gap-4 w-full lg:max-w-3xl">
            <h1 className="text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full w-fit text-sm font-semibold tracking-wide uppercase">
              About Me
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Who <span className="text-accent">Am I?</span>
            </h1>
            <p className="font-light text-base md:text-lg text-gray-300 leading-relaxed mt-2">
              I'm{" "}
              <span className="font-semibold text-xl text-accent tracking-wide">
                Galih Rakhasiwi Putra Kanaya
              </span>
              , a Software Engineering student from SMK Taruna Bhakti. I was
              born from jakarta and im currently 16 years old. My goals is to
              get rich so that one day i wont have to reconsider when buying
              shit. <br />
              <span className="block mt-3 text-gray-400 font-light">
                When I'm not coding, I enjoy watching playing games, watching
                movies and listening to music.
              </span>
            </p>
            <div className="mt-4">
              <Button className="w-fit bg-accent text-slate-950 font-medium hover:bg-white hover:text-accent hover:scale-105 transition-all duration-300 px-6 py-2.5 rounded-xl shadow-lg shadow-accent/20">
                Get My CV?
              </Button>
            </div>
          </div>

          {/* Foto Profil */}
          <div className="flex-shrink-0 relative">
            <img
              className="w-[260px] h-[260px] md:w-[350px] md:h-[350px] rounded-full object-cover border-4 border-accent/30 shadow-accent shadow-[0_0_20px_rgba(var(--color-accent),0.2)] rotate-25 hover:scale-110 transition-all duration-500 hover:rotate-0 hover:shadow-2xl hover:shadow-accent/40 hover:border-accent"
              src="/images/lubac.jpeg"
              alt="Galih Rakhasiwi"
            />
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
        delay={0}
      >
        <section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#0d1527]/60 backdrop-blur-md p-6 md:p-12 lg:p-20 gap-6 md:gap-8 mx-4 md:mx-12 lg:mx-20 rounded-3xl md:rounded-4xl border border-white/5 shadow-2xl shadow-black/40"
          id="skills"
        >
          {/* Header Card / Title Area */}
          <div className="flex flex-col justify-center pr-4 mb-4 lg:mb-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
              My <br />
              <span className="text-accent bg-gradient-to-r from-accent to-emerald-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mt-4 font-light tracking-wide">
              The Abilities I've Learned So Far.
            </p>
          </div>

          {/* Web Development */}
          <div className="group flex flex-col gap-3 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#1a2333] via-[#131a28] to-[#0f1522] border border-white/5 hover:border-accent/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(var(--color-accent),0.15)] transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-white tracking-wide border-b-2 border-accent/70 pb-1 w-fit">
                Web Development
              </h1>
              <span className="text-xs font-mono text-accent/50 group-hover:text-accent transition-colors duration-300">01</span>
            </div>
            <p className="text-gray-400 text-[15px] leading-relaxed font-light mt-2 group-hover:text-gray-300 transition-colors duration-300">
              I've learned the fundamentals of making a website, from back-end
              to front-end. Not only that, I can use <span className="text-white font-normal">React</span>, <span className="text-white font-normal">Express</span>, and even
              <span className="text-white font-normal"> Go-Lang</span>.
            </p>
          </div>

          {/* UI/UX */}
          <div className="group flex flex-col gap-3 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#1a2333] via-[#131a28] to-[#0f1522] border border-white/5 hover:border-accent/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(var(--color-accent),0.15)] transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-white tracking-wide border-b-2 border-accent/70 pb-1 w-fit">
                UI/UX Design
              </h1>
              <span className="text-xs font-mono text-accent/50 group-hover:text-accent transition-colors duration-300">02</span>
            </div>
            <p className="text-gray-400 text-[15px] leading-relaxed font-light mt-2 group-hover:text-gray-300 transition-colors duration-300">
              I've used <span className="text-white font-normal">Figma</span> for quite some time now for every project I've
              done, so it's safe to say I know how to design a great website.
              Although if you think otherwise, I'm still developing.
            </p>
          </div>

          {/* Mobile App Development */}
          <div className="group flex flex-col gap-3 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#1a2333] via-[#131a28] to-[#0f1522] border border-white/5 hover:border-accent/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(var(--color-accent),0.15)] transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-white tracking-wide border-b-2 border-accent/70 pb-1 w-fit">
                Mobile Development
              </h1>
              <span className="text-xs font-mono text-accent/50 group-hover:text-accent transition-colors duration-300">03</span>
            </div>
            <p className="text-gray-400 text-[15px] leading-relaxed font-light mt-2 group-hover:text-gray-300 transition-colors duration-300">
              I’ve learned the basics and necessities of Mobile Development. For
              the tools, I usually use <span className="text-white font-normal">React Expo</span>, but I can do a little bit of
              <span className="text-white font-normal"> Flutter</span> too.
            </p>
          </div>

          {/* Database Management */}
          <div className="group flex flex-col gap-3 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#1a2333] via-[#131a28] to-[#0f1522] border border-white/5 hover:border-accent/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(var(--color-accent),0.15)] transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-white tracking-wide border-b-2 border-accent/70 pb-1 w-fit">
                Database Management
              </h1>
              <span className="text-xs font-mono text-accent/50 group-hover:text-accent transition-colors duration-300">04</span>
            </div>
            <p className="text-gray-400 text-[15px] leading-relaxed font-light mt-2 group-hover:text-gray-300 transition-colors duration-300">
              I've learned the basics of Database Management, such as Data
              Definition and Data Manipulation Language. I've managed those data
              with <span className="text-white font-normal">MySQL</span> and <span className="text-white font-normal">PostgreSQL</span>.
            </p>
          </div>

          {/* General Knowledge */}
          <div className="group flex flex-col gap-3 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#1a2333] via-[#131a28] to-[#0f1522] border border-white/5 hover:border-accent/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(var(--color-accent),0.15)] transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-white tracking-wide border-b-2 border-accent/70 pb-1 w-fit">
                General Knowledge
              </h1>
              <span className="text-xs font-mono text-accent/50 group-hover:text-accent transition-colors duration-300">05</span>
            </div>
            <p className="text-gray-400 text-[15px] leading-relaxed font-light mt-2 group-hover:text-gray-300 transition-colors duration-300">
              I graduated from school with pretty good grades. Whether it's
              Bahasa Indonesia, History, or even Math, I can do it. But really, I
              excel the most at <span className="text-accent font-medium">English</span>.
            </p>
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
        <section className="px-6 md:px-16 lg:px-20 flex flex-col gap-10" id="projects">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-base md:text-lg border-b-4 pb-1 border-accent text-white/90">
              The projects i've done <br />
              so far in my life.
            </p>
            <h1 className="text-5xl md:text-6xl text-left sm:text-right text-white">
              My <br />
              Projects
            </h1>
          </div>

          <div className="flex flex-wrap justify-center place-items-center gap-6 md:gap-10 lg:gap-15">
            {projectsData.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                target="_blank"
                className="group relative block w-full sm:w-[400px] h-[250px] rounded-2xl overflow-hidden bg-black cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/70 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/80 mt-1">
                    {project.description}
                  </p>
                  <div className="flex gap-2 mt-3 text-xs text-white">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-3 text-sm text-white flex items-center gap-1">
                    View Project →
                  </span>
                </div>
              </Link>
            ))}
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
        delay={0}
        className="px-6 md:px-16 lg:px-20 flex flex-col gap-10"
      >
        <section className="flex flex-col gap-12 w-full" id="sertifikat">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <h1 className="text-5xl md:text-6xl">
              My <br />
              <span className="text-accent font-semibold">Certificates</span>
            </h1>
            <p className="text-base md:text-lg w-full sm:w-[420px] text-left sm:text-right opacity-80 border-b-4 border-accent pb-1">
              Verified learning paths and certifications that support my skills
              as a Software Engineer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 md:px-6 lg:px-15">
            {sertifikat.map((sertif) => (
              <div
                className="group rounded-2xl p-6 bg-linear-to-br from-[#353c4d] via-[#283441] to-[#2a2f36] border border-white/10 hover:shadow-xl hover:shadow-accent transition-all duration-300 hover:-translate-y-2"
                key={sertif.id}
              >
                <div className="h-40 w-full overflow-hidden rounded-xl">
                  <img
                    src={sertif.img}
                    alt="Certificate"
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold mt-4">{sertif.nama}</h3>

                <p className="text-sm opacity-70 mt-1">
                  {sertif.org} • {sertif.tahun}
                </p>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      className="inline-block mt-4 text-accent font-medium group-hover:underline hover:text-white" variant="ghost">
                      View More →
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent
                    side="top"
                    align="center"
                    className="w-auto max-w-none"
                  >
                    <img
                      src={sertif.img}
                      alt="Certificate"
                      className="max-w-[85vw] md:max-w-[50vw] max-h-[50vh] rounded-xl"
                    />
                  </PopoverContent>
                </Popover>
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
        delay={0}
        className="px-6 md:px-16 lg:px-20 flex flex-col lg:flex-row gap-10 lg:gap-10"
        id="contact">
        <div className="flex flex-col gap-5 w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl">
            Get in <span className="text-accent font-medium">Touch</span> with me <br />
            and <span className="text-accent font-medium">Contact us!</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-300">
            Reach out to me by going into my socials by clicking these logos, or
            you could send me a message right away by filling up this form!
          </p>
          <div className="flex flex-row gap-4 mt-2">
            <Link
              href="linkedin"
              className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit hover:scale-110">
              <Linkedin></Linkedin>
            </Link>
            <Link
              href="Instagram"
              className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit hover:scale-110">
              <Instagram></Instagram>
            </Link>
            <Link
              href="Phone"
              className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit hover:scale-110">
              <Phone />
            </Link>
            <Link
              href="Github"
              className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit hover:scale-110">
              <Github />
            </Link>
          </div>
        </div>
        
        <form
          className="w-full lg:w-1/2 bg-linear-to-br from-[#16C47F] to-[#0f3d2e] rounded-3xl p-6 md:p-10 flex flex-col gap-5 items-end"
          action="https://formspree.io/f/mzdralzw"
          method="POST">
          <input
            type="text"
            className="bg-white w-full px-3 py-2 rounded-lg text-black focus:outline-accent"
            placeholder="Put your Username or Nickname Here..."
            name="username"
            required
          />
          <input
            type="email"
            className="bg-white w-full px-3 py-2 rounded-lg text-black focus:outline-accent"
            placeholder="Put your Email Here..."
            name="email"
            required
          />
          <textarea
            name="message"
            id="message"
            className="bg-white w-full px-3 py-2 rounded-lg h-[90px] text-black focus:outline-accent"
            placeholder="Put your message for me right here, and write as much as long as you want!"></textarea>
          <Button
            type="submit"
            className="bg-linear-to-br from-[#353c4d] via-[#283441] to-[#2a2f36] w-fit hover:bg-accent hover:text-accent hover:scale-105 transition-all duration-300">
            Submit
          </Button>
        </form>
      </AnimatedContent>

      {/* FOOTER */}
      <footer className="w-full bg-[#1f2933] text-white mt-15">
        <div className="flex flex-col md:flex-row justify-around items-start gap-10 p-6 md:p-10 lg:p-14">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl font-light">Galih Rakhasiwi</h1>
            <p className="mt-2 text-sm md:text-base opacity-80 leading-relaxed">
              Seorang Murid SMK Pemrograman yang berfokus di Web Developing dan
              Database Management. Saya bertujuan untuk inian anuan biar kalo
              anu ininya ga anuan, biar jadinya nya jadi begini bukan begitu.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Navigasi</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#home" className="hover:text-hover transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-hover transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-hover transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-hover transition">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Kontak</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Email: email@placeholder.com</li>
              <li>Telp: 0882-xxxx-xxxx</li>
              <li>Lokasi: Bogor, Jomokerto.</li>
            </ul>
            <div className="flex flex-row gap-3 mt-5">
              <Link
                href="linkedin"
                className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit">
                <Linkedin></Linkedin>
              </Link>
              <Link
                href="Instagram"
                className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit">
                <Instagram></Instagram>
              </Link>
              <Link
                href="Phone"
                className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit">
                <Phone />
              </Link>
              <Link
                href="Github"
                className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit">
                <Github />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 py-4 text-center text-sm opacity-80 px-4">
          © 2024 Galih Rakhasiwi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
