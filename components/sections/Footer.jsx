import Link from "next/link";
import { Linkedin, Instagram, Github } from "lucide-react";
import MusicPlayer from "@/components/AudioPlay";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white mt-12 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        {/* Brand Col */}
        <div className="md:col-span-5 flex flex-col gap-3">
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-mono flex items-center gap-2">
            Galih Rakhasiwi
            <span className="text-accent">.</span>
          </h3>
          <p className="text-xs font-mono text-slate-500 dark:text-gray-400 leading-relaxed max-w-sm">
            Software Engineering student focused on resilient web applications
            and clean backend database architecture.
          </p>
        </div>

        {/* Navigation Col */}
        <div className="md:col-span-3 flex flex-col gap-3">
          <h4 className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs font-mono text-slate-600 dark:text-gray-400">
            <li>
              <a href="#home" className="hover:text-slate-950 dark:hover:text-white transition">
                00 // Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-slate-950 dark:hover:text-white transition">
                01 // About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-slate-950 dark:hover:text-white transition">
                02 // Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-slate-950 dark:hover:text-white transition">
                03 // Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-slate-950 dark:hover:text-white transition">
                04 // Experience
              </a>
            </li>
            <li>
              <a href="#sertifikat" className="hover:text-slate-950 dark:hover:text-white transition">
                05 // Certificates
              </a>
            </li>
            <li className="pt-2">
              <MusicPlayer />
            </li>
          </ul>
        </div>

        {/* Location & Status Col */}
        <div className="md:col-span-4 flex flex-col gap-3">
          <h4 className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
            Location & Status
          </h4>
          <ul className="space-y-1.5 text-xs font-mono text-slate-600 dark:text-gray-400">
            <li>LOCATION: Bogor / Depok, Indonesia</li>
            <li>INSTITUTION: SMK Taruna Bhakti</li>
            <li>STATUS: OPEN_FOR_COLLAB</li>
          </ul>

          <div className="flex gap-2 mt-2">
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className="p-2 border border-slate-200 dark:border-white/10 rounded-lg hover:border-accent text-slate-600 dark:text-gray-400 hover:text-accent transition bg-white/50 dark:bg-transparent">
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="p-2 border border-slate-200 dark:border-white/10 rounded-lg hover:border-accent text-slate-600 dark:text-gray-400 hover:text-accent transition bg-white/50 dark:bg-transparent">
              <Instagram className="w-4 h-4" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              aria-label="GitHub"
              className="p-2 border border-slate-200 dark:border-white/10 rounded-lg hover:border-accent text-slate-600 dark:text-gray-400 hover:text-accent transition bg-white/50 dark:bg-transparent">
              <Github className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20 border-t border-slate-200 dark:border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-slate-500 dark:text-gray-500 gap-2">
        <span>© 2026 GALIH RAKHASIWI. ALL RIGHTS RESERVED.</span>
        <span>Agung Yuli lol</span>
      </div>
    </footer>
  );
}
