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
      className="bg-linear-to-br
  from-[#0f172a]
  via-[#1e293b]
  to-[#020617] flex flex-col w-full h-full gap-30 text-hover">
      <nav
        className="fixed w-full h-20 bg-secondary/40 backdrop-blur-md z-10 backdrop-saturate-150 flex justify-around items-center text-hover"
        suppressHydrationWarning>
        <h1 className="text-2xl font-light italic">glihrakha</h1>
        <div className="text-accent flex gap-8 items-center">
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
          className="bg-accent px-4 py-2 rounded-full text-hover font-semibold hover:bg-hover hover:text-accent transition-all duration-300 hover:scale-105">
          Contact Us!
        </a>
      </nav>

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
        <section className="mt-40 flex-row flex justify-between px-20 items-center">
          <h1 className="text-9xl text-hover font-light">
            I'm Software <br />
            <span className="font-bold">Engineer</span>
          </h1>
          <div className="flex-col items-end flex gap-5">
            <img
              className="bg-gray-500 w-50 h-80 rounded-xl object-cover hover:w-full hover:h-100 transition-all duration-300"
              src="/images/ross.jpeg"
            />
            <h1 className="w-60 text-right font-medium">
              Hi there! Need a{" "}
              <span className="text-accent">Software Engineer</span> for your
              project? Well You're in the right place! <br />
              Go down for more.
            </h1>
          </div>
        </section>
        <div className="mt-20">
          <Loop></Loop>
        </div>
      </AnimatedContent>

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
        <section className="flex justify-around items-center" id="about">
          <div className="flex flex-col gap-3">
            <h1 className="text-accent bg-hover px-4 py-2 rounded-full w-fit font-semibold">
              About Me
            </h1>
            <h1 className="text-4xl w-60 font-semibold text-accent">
              Who Am I?
            </h1>
            <p className="w-[800px] font-medium text-lg">
              I'm{" "}
              <span className="font-semibold text-xl text-accent">
                Galih Rakhasiwi Putra Kanaya
              </span>
              , a Software Engineering student from SMK Taruna Bhakti. I was
              born from jakarta and im currently 16 years old. My goals is to
              get rich so that one day i wont have to reconsider when buying
              shit. <br />
              When I'm not coding, I enjoy watching playing games, watching
              movies and listening to music.
            </p>
            <Button className="w-fit bg-accent hover:bg-hover hover:text-accent hover:scale-105 transition-all duration-300 px-6">
              Get My CV?
            </Button>
          </div>
          <img
            className="w-[350px] rounded-full h-[350px] border-4 border-hover shadow-accent shadow rotate-25 hover:scale-110 transition-all duration-500 hover:rotate-0 hover:shadow-xl"
            src="/images/lubac.jpeg"
          />
        </section>
      </AnimatedContent>

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
          className="grid grid-cols-3 place-items-center bg-secondary p-20 py-30 gap-15 mx-20 rounded-4xl"
          id="skills">
          <div className="w-85 ">
            <h1 className="text-7xl">
              My <br />
              Skills
            </h1>
            <p className="text-xl mt-1">The Ablities Ive Learned So Far.</p>
          </div>

          <div className="flex flex-col gap-2 w-85 p-5 rounded-xl bg-linear-to-br from-[#353c4d] via-[#283441] to-[#2a2f36] h-60 pt-8 shadow-lg shadow-accent">
            <h1 className="text-xl border-t-2 w-fit pr-2 border-hover font-medium">
              Web Development
            </h1>
            <p className="text-lg">
              I've Learned the fundamentals of making a website, from back-end
              to front-end. Not only that i can use React, Express and even
              Go-Lang.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-85 p-5 rounded-xl bg-linear-to-br from-[#353c4d] via-[#283441] to-[#2a2f36] h-60 pt-8 shadow-lg shadow-accent">
            <h1 className="text-xl border-t-2 w-fit pr-2 border-hover font-medium">
              UI/UX
            </h1>
            <p className="text-lg">
              I've used figma for quite some time now for every project i've
              done so it's safe to say i know how to design a great website.
              Although if you think otherwise i'm still developing.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-85 p-5 rounded-xl bg-linear-to-br from-[#353c4d] via-[#283441] to-[#2a2f36] h-60 pt-8 shadow-lg shadow-accent">
            <h1 className="text-xl border-t-2 w-fit pr-2 border-hover font-medium">
              Mobile App Development
            </h1>
            <p className="text-lg">
              I’ve Learned The Basics and necessities of Mobile Development. For
              the tools i usually use React Expo but i can do a little bit of
              flutter too.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-85 p-5 rounded-xl bg-linear-to-br from-[#353c4d] via-[#283441] to-[#2a2f36] h-60 pt-8 shadow-lg shadow-accent">
            <h1 className="text-xl border-t-2 w-fit pr-2 border-hover font-medium">
              Database Management
            </h1>
            <p className="text-lg">
              I've learned the basics of Database Management, such as Data
              Definition and Data Manipulation Language. I've managed those data
              with MySQL and PostGres.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-85 p-5 rounded-xl bg-linear-to-br from-[#353c4d] via-[#283441] to-[#2a2f36] h-60 pt-8 shadow-lg shadow-accent">
            <h1 className="text-xl border-t-2 w-fit pr-2 border-hover font-medium">
              General Knowledge
            </h1>
            <p className="text-lg">
              I Graduated from Schools with pretty good grades. Wether with
              Bahasa Indonesia, History or even math i can do it. But really i
              excell the most at English.
            </p>
          </div>
        </section>
      </AnimatedContent>

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
        <section className="px-20 flex flex-col gap-10" id="projects">
          <div className="flex justify-between items-center">
            <p className="text-lg border-b-4 pb-1 border-accent">
              The projects i've done <br />
              so far in my life.
            </p>

            <h1 className="text-6xl text-right">
              My <br />
              Projects
            </h1>
          </div>
          <div className="flex flex-wrap justify-center place-items-center gap-15">
            <Link
              href="https://github.com/galihpikun/Projek-AAS-Kelas-11-Perpustakaan-Sekolah"
              target="_blank"
              className="
        group relative block
        w-[400px] h-[250px]
        rounded-2xl overflow-hidden
        bg-black
        cursor-pointer      ">
              <img
                src="/images/perpus.png"
                alt="Prjoect Image"
                className="
          w-full h-full object-cover
          transition-transform duration-500
          group-hover:scale-110
        "
              />

              <div
                className="
          absolute inset-0
          bg-black/60 backdrop-blur-md
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          flex flex-col justify-end
          p-5
        ">
                <h3 className="text-lg font-semibold text-[#ECDFCC]">
                  Web Perpustakaan Sims
                </h3>

                <p className="text-sm text-[#ECDFCC]/80 mt-1">
                  Web Peminjaman buku sederhana menggunakan React untuk frontend
                  dan menggunakan MySQL Sebagai Database. Fitur termasuk
                  autentikasi pengguna, manajemen koleksi buku, dan sistem
                  peminjaman.
                </p>

                <div className="flex gap-2 mt-3 text-xs">
                  <span className="px-2 py-1 bg-white/10 rounded-full">
                    Next.Js
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full">
                    MySql
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full">
                    NextAuth
                  </span>
                </div>

                <span className="mt-3 text-sm text-[#ECDFCC]/70 flex items-center gap-1">
                  View Project →
                </span>
              </div>
            </Link>
            <Link
              href="https://github.com/RezaAdityaRamadhan26/CashBhak"
              target="_blank"
              className="
        group relative block
        w-[400px] h-[250px]
        rounded-2xl overflow-hidden
        bg-black
        cursor-pointer      ">
              <img
                src="/images/cashbhak.png"
                alt="Prjoect Image"
                className="
          w-full h-full object-cover
          transition-transform duration-500
          group-hover:scale-110
        "
              />

              <div
                className="
          absolute inset-0
          bg-black/60 backdrop-blur-md
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          flex flex-col justify-end
          p-5
        ">
                <h3 className="text-lg font-semibold text-[#ECDFCC]">
                  Cashbhak ( Web Kasir Online )
                </h3>

                <p className="text-sm text-[#ECDFCC]/80 mt-1">
                  Sebuah Web yang berfungsi sebagai kasir, Web ini bisa
                  menyimpan dan mendata produk yang anda jual. Selain itu akan
                  ada analisis penjualan seperti grafik, piechart bahkan history
                  penjualan.
                </p>

                <div className="flex gap-2 mt-3 text-xs">
                  <span className="px-2 py-1 bg-white/10 rounded-full">
                    Next.Js
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full">
                    MySql
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full">
                    NextAuth
                  </span>
                </div>

                <span className="mt-3 text-sm text-[#ECDFCC]/70 flex items-center gap-1">
                  View Project →
                </span>
              </div>
            </Link>
            <Link
              href="https://github.com/yourusername/your-repo"
              target="_blank"
              className="
        group relative block
        w-[400px] h-[250px]
        rounded-2xl overflow-hidden
        bg-black
        cursor-pointer      ">
              <img
                src="/images/perpus.png"
                alt="Prjoect Image"
                className="
          w-full h-full object-cover
          transition-transform duration-500
          group-hover:scale-110
        "
              />

              <div
                className="
          absolute inset-0
          bg-black/60 backdrop-blur-md
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          flex flex-col justify-end
          p-5
        ">
                <h3 className="text-lg font-semibold text-[#ECDFCC]">
                  Web Perpustakaan Sims
                </h3>

                <p className="text-sm text-[#ECDFCC]/80 mt-1">
                  Web Peminjaman buku sederhana menggunakan React untuk frontend
                  dan Express.js untuk backend. Fitur termasuk autentikasi
                  pengguna, manajemen koleksi buku, dan sistem peminjaman.
                </p>

                <div className="flex gap-2 mt-3 text-xs">
                  <span className="px-2 py-1 bg-white/10 rounded-full">
                    Next.Js
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full">
                    MySql
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full">
                    NextAuth
                  </span>
                </div>

                <span className="mt-3 text-sm text-[#ECDFCC]/70 flex items-center gap-1">
                  View Project →
                </span>
              </div>
            </Link>
            <Link
              href="https://github.com/yourusername/your-repo"
              target="_blank"
              className="
        group relative block
        w-[400px] h-[250px]
        rounded-2xl overflow-hidden
        bg-black
        cursor-pointer      ">
              <img
                src="/images/perpus.png"
                alt="Prjoect Image"
                className="
          w-full h-full object-cover
          transition-transform duration-500
          group-hover:scale-110
        "
              />

              <div
                className="
          absolute inset-0
          bg-black/60 backdrop-blur-md
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          flex flex-col justify-end
          p-5
        ">
                <h3 className="text-lg font-semibold text-[#ECDFCC]">
                  Web Perpustakaan Sims
                </h3>

                <p className="text-sm text-[#ECDFCC]/80 mt-1">
                  Web Peminjaman buku sederhana menggunakan React untuk frontend
                  dan Express.js untuk backend. Fitur termasuk autentikasi
                  pengguna, manajemen koleksi buku, dan sistem peminjaman.
                </p>

                <div className="flex gap-2 mt-3 text-xs">
                  <span className="px-2 py-1 bg-white/10 rounded-full">
                    Next.Js
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full">
                    MySql
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full">
                    NextAuth
                  </span>
                </div>

                <span className="mt-3 text-sm text-[#ECDFCC]/70 flex items-center gap-1">
                  View Project →
                </span>
              </div>
            </Link>
            <Link
              href="https://github.com/yourusername/your-repo"
              target="_blank"
              className="
        group relative block
        w-[400px] h-[250px]
        rounded-2xl overflow-hidden
        bg-black
        cursor-pointer      ">
              <img
                src="/images/perpus.png"
                alt="Prjoect Image"
                className="
          w-full h-full object-cover
          transition-transform duration-500
          group-hover:scale-110
        "
              />

              <div
                className="
          absolute inset-0
          bg-black/60 backdrop-blur-md
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          flex flex-col justify-end
          p-5
        ">
                <h3 className="text-lg font-semibold text-[#ECDFCC]">
                  Web Perpustakaan Sims
                </h3>

                <p className="text-sm text-[#ECDFCC]/80 mt-1">
                  Web Peminjaman buku sederhana menggunakan React untuk frontend
                  dan Express.js untuk backend. Fitur termasuk autentikasi
                  pengguna, manajemen koleksi buku, dan sistem peminjaman.
                </p>

                <div className="flex gap-2 mt-3 text-xs">
                  <span className="px-2 py-1 bg-white/10 rounded-full">
                    Next.Js
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full">
                    MySql
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full">
                    NextAuth
                  </span>
                </div>

                <span className="mt-3 text-sm text-[#ECDFCC]/70 flex items-center gap-1">
                  View Project →
                </span>
              </div>
            </Link>
          </div>
        </section>
      </AnimatedContent>

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
        className="px-20 flex flex-row gap-10"
       >
        <section className="flex flex-col gap-12"  id="sertifikat">
          <div className="flex justify-between items-end">
            <h1 className="text-6xl">
              My <br />
              <span className="text-accent font-semibold">Certificates</span>
            </h1>
            <p className="text-lg w-[420px] text-right opacity-80 border-b-4 border-accent">
              Verified learning paths and certifications that support my skills
              as a Software Engineer.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-10 px-15">
            {sertifikat.map((sertif) => (
              <div
                className="
      group rounded-2xl p-6
      bg-linear-to-br from-[#353c4d] via-[#283441] to-[#2a2f36]
      border border-white/10
      hover:shadow-xl hover:shadow-accent
      transition-all duration-300 hover:-translate-y-2"
                key={sertif.id}
               >
                <div className="h-40 w-full overflow-hidden rounded-xl">
                  <img
                    src={sertif.img}
                    alt="Certificate"
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold">{sertif.nama}</h3>

                <p className="text-sm opacity-70 mt-1">
                  {sertif.org} • {sertif.tahun}
                </p>

                <Popover>
  <PopoverTrigger asChild>
    <Button
                  
                  className="
          inline-block mt-4 text-accent font-medium
          group-hover:underline hover:text-white" variant="ghost">
                  View More →
                </Button>
  </PopoverTrigger>

  <PopoverContent
    side="top"
    align="center"
    className="
      w-auto
      max-w-none    "
  >
    <img
      src={sertif.img}
      alt="Certificate"
      className="max-w-[50vw] max-h-[50vh] rounded-xl"
    />
  </PopoverContent>
</Popover>
              </div>
            ))}
          </div>
        </section>
        
      </AnimatedContent>

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
        className="px-20 flex flex-row gap-10"
        id="contact">
        <div className="flex flex-col gap-5 w-1/2">
          <h1 className="text-6xl">
            Get in <span className="text-accent font-medium">Touch</span> with
            me <br />
            and <span className="text-accent font-medium">Contact us!</span>
          </h1>
          <p className="text-xl">
            Reach out to me by going into my socials by clicking these logos, or
            you could send me a message right away by filling up this form!
          </p>
          <div className="flex flex-row gap-4">
            <Link
              href="linkedin"
              className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit hover:scale-120">
              {" "}
              <Linkedin></Linkedin>
            </Link>
            <Link
              href="Instagram"
              className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit hover:scale-120">
              {" "}
              <Instagram></Instagram>
            </Link>
            <Link
              href="Phone"
              className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit hover:scale-120">
              {" "}
              <Phone />
            </Link>
            <Link
              href="Github"
              className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit hover:scale-120">
              {" "}
              <Github />
            </Link>
          </div>
        </div>
        <form
          className="w-1/2 bg-linear-to-br from-[#16C47F] to-[#0f3d2e] rounded-3xl p-10 flex flex-col gap-5 items-end "
          action="https://formspree.io/f/mzdralzw"
          method="POST">
          <input
            type="username"
            className="bg-white w-full px-3 py-2 rounded-lg text-black"
            placeholder="Put your Username or Nickname Here..."
            name="username"
            required
          />
          <input
            type="email"
            className="bg-white w-full px-3 py-2 rounded-lg text-black"
            placeholder="Put your Email Here..."
            name="email"
            required
          />
          <textarea
            name="message"
            id="message"
            className="bg-white w-full px-3 py-2 rounded-lg h-[90px] text-black"
            placeholder="Put your message for me right here, and write as much as long as you want!"></textarea>
          <Button
            type="submit"
            className="bg-linear-to-br from-[#353c4d] via-[#283441] to-[#2a2f36] w-fit hover:bg-accent hover:text-accent hover:scale-115 transition-all duration-300">
            Submit
          </Button>
        </form>
      </AnimatedContent>

      


      <footer className="w-full bg-[#1f2933] text-white mt-15">
        <div className="flex justify-around items-start gap-10 p-10">
          <div>
            <h1 className="text-4xl font-light">Galih Rakhasiwi</h1>
            <p className="mt-2 w-90">
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
                <a href="#features" className="hover:text-hover transition">
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="/books"
                  className="hover:text-hover hover:text-lg transition-all">
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
            <div className="grid grid-cols-4 gap-4 mt-5">
              <Link
                href="linkedin"
                className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit">
                {" "}
                <Linkedin></Linkedin>
              </Link>
              <Link
                href="linkedin"
                className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit">
                {" "}
                <Instagram></Instagram>
              </Link>
              <Link
                href="linkedin"
                className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit">
                {" "}
                <Phone />
              </Link>
              <Link
                href="linkedin"
                className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit">
                {" "}
                <Github />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 py-4 text-center text-sm opacity-80">
          © 2024 Galih Rakhasiwi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
