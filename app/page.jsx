import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Instagram, Github, Linkedin, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-primary flex flex-col w-full h-full gap-45 text-hover">
      <nav className="fixed w-full h-20 bg-secondary/40 backdrop-blur-md z-10 backdrop-saturate-150 flex justify-around items-center text-hover">
        <h1 className="text-2xl font-light italic">glihrakha</h1>
        <div className="text-accent flex gap-8 items-center">
          <a
            href="/"
            className="font-semibold hover:text-hover  relative 
    after:content-[''] 
    after:absolute 
    after:left-0 
    after:-bottom-1 
    after:h-[2px] 
    after:w-0 
    after:bg-current
    after:transition-all 
    after:duration-300
    hover:after:w-full">
            Home
          </a>
          <a
            href="#about"
            className="font-semibold hover:text-hover  relative 
    after:content-[''] 
    after:absolute 
    after:left-0 
    after:-bottom-1 
    after:h-[2px] 
    after:w-0 
    after:bg-current
    after:transition-all 
    after:duration-300
    hover:after:w-full">
            About Me
          </a>
          <a
            href="#skills"
            className="font-semibold hover:text-hover  relative 
    after:content-[''] 
    after:absolute 
    after:left-0 
    after:-bottom-1 
    after:h-[2px] 
    after:w-0 
    after:bg-current
    after:transition-all 
    after:duration-300
    hover:after:w-full">
            Skills
          </a>
          <a
            href="#projects"
            className="font-semibold hover:text-hover  relative 
    after:content-[''] 
    after:absolute 
    after:left-0 
    after:-bottom-1 
    after:h-[2px] 
    after:w-0 
    after:bg-current
    after:transition-all 
    after:duration-300
    hover:after:w-full">
            Projects
          </a>
        </div>
        <a
          href=""
          className="bg-accent px-4 py-2 rounded-full text-hover font-semibold hover:bg-hover hover:text-accent transition-all duration-300 hover:scale-105">
          Contact Us!
        </a>
      </nav>

      <section className="mt-40 flex-row flex justify-between px-20 items-center">
        <h1 className="text-9xl text-hover font-light">
          Software <br />
          <span className="font-bold">Engineer</span>
        </h1>
        <div className="flex-col items-end flex gap-5">
          <div className="bg-gray-500 w-50 h-80 rounded-xl "></div>
          <h1 className="w-60 text-right font-medium">
            Hi there! Need a Software Engineer for your project? Well You're in
            the right place! <br />
            Go down for more.
          </h1>
        </div>
      </section>

      <section className="flex justify-around items-center" id="about">
        <div className="flex flex-col gap-3">
          <h1 className="text-accent bg-hover px-4 py-2 rounded-full w-fit font-semibold">
            About Me
          </h1>
          <h1 className="text-4xl w-60 font-semibold text-accent">Who Am I?</h1>
          <p className="w-[800px] font-medium text-lg">
            I'm{" "}
            <span className="italic font-semibold">
              Galih Rakhasiwi Putra Kanaya
            </span>
            , a Software Engineering student from SMK Taruna Bhakti. I was born
            from jakarta and im currently 16 years old. My goals is to get rich
            so that one day i wont have to reconsider when buying shit. <br />
            When I'm not coding, I enjoy watching playing games, watching movies
            and listening to music.
          </p>
          <Button className="w-fit bg-accent hover:bg-hover hover:text-accent hover:scale-105 transition-all duration-300 px-6">
            Get My CV?
          </Button>
        </div>
        <div className="w-[350px] rounded-full h-[350px] border-4 border-hover"></div>
      </section>

      <section className="grid grid-cols-3 place-items-center bg-secondary p-20 py-30 gap-15 " id="skills">
        <div className="w-85 ">
          <h1 className="text-7xl">
            My <br />
            Skills
          </h1>
          <p className="text-xl mt-1">The Ablities Ive Learned So Far.</p>
        </div>

        <div className="flex flex-col gap-2 w-85 p-5 rounded-xl bg-accent h-60 justify-center">
          <h1 className="text-xl border-t-2 w-fit pr-2 border-hover font-medium">
            Web Development
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            animi dolores natus praesentium, sint incidunt qui exercitationem
            ipsam iure mollitia.
          </p>
        </div>

        <div className="flex flex-col gap-2 w-85 p-5 rounded-xl bg-accent h-60 justify-center">
          <h1 className="text-xl border-t-2 w-fit pr-2 border-hover font-medium">
            Web Development
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            animi dolores natus praesentium, sint incidunt qui exercitationem
            ipsam iure mollitia.
          </p>
        </div>

        <div className="flex flex-col gap-2 w-85 p-5 rounded-xl bg-accent h-60 justify-center">
          <h1 className="text-xl border-t-2 w-fit pr-2 border-hover font-medium">
            Web Development
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            animi dolores natus praesentium, sint incidunt qui exercitationem
            ipsam iure mollitia.
          </p>
        </div>

        <div className="flex flex-col gap-2 w-85 p-5 rounded-xl bg-accent h-60 justify-center">
          <h1 className="text-xl border-t-2 w-fit pr-2 border-hover font-medium">
            Web Development
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            animi dolores natus praesentium, sint incidunt qui exercitationem
            ipsam iure mollitia.
          </p>
        </div>

        <div className="flex flex-col gap-2 w-85 p-5 rounded-xl bg-accent h-60 justify-center">
          <h1 className="text-xl border-t-2 w-fit pr-2 border-hover font-medium">
            Web Development
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            animi dolores natus praesentium, sint incidunt qui exercitationem
            ipsam iure mollitia.
          </p>
        </div>
      </section>

      <section className="px-20 flex flex-col gap-10" id="projects">
        <div className="flex justify-between items-center">
          <p className="text-lg">
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

       <footer className="w-full bg-secondary text-white">
        <div className="flex justify-around items-start gap-10 p-10">
          <div>
            <h1 className="text-4xl font-light">Galih Rakhasiwi</h1>
            <p className="mt-2 w-90">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ex et delectus aperiam dolor quisquam neque recusandae ducimus aut architecto.</p>
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
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-hover transition">
                  Features
                </a>
              </li>
              <li>
                <a href="/books" className="hover:text-hover hover:text-lg transition-all">
                  Books
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Kontak</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Email: email@perpus.com</li>
              <li>Telp: 0882-xxxx-xxxx</li>
              <li>Lokasi: Bekasi, Jawa Barat</li>
            </ul>
            <div className="grid grid-cols-4 gap-4 mt-5">
              <Link href='linkedin' className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit"> <Linkedin></Linkedin></Link>
              <Link href='linkedin' className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit"> <Instagram></Instagram></Link>
              <Link href='linkedin' className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit"> <Phone/></Link>
              <Link href='linkedin' className="border-2 border-hover text-hover hover:bg-hover hover:text-accent transition-all rounded-full p-2 flex w-fit"> <Github/></Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 py-4 text-center text-sm opacity-80">
          © 2024 Galih Rakhasiwi. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
