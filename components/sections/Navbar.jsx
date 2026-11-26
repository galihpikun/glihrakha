"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl h-14 bg-white/80 dark:bg-slate-950/70 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 z-50 rounded-full flex justify-between items-center px-4 sm:px-6 text-slate-800 dark:text-white shadow-xl dark:shadow-2xl shadow-slate-200/50 dark:shadow-black/60 transition-all duration-300"
        aria-label="Main Navigation">
        {/* Brand Name */}
        <a
          href="#home"
          className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-1">
          <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
          <span className="text-sm sm:text-base font-mono font-semibold tracking-tight text-slate-900 dark:text-white group-hover:text-accent transition-colors">
            glihrakha<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7 lg:gap-8 text-xs font-mono tracking-wider">
          <a
            href="#home"
            className="text-slate-600 dark:text-gray-300 hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            Home
          </a>
          <a
            href="#about"
            className="text-slate-600 dark:text-gray-300 hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            About
          </a>
          <a
            href="#skills"
            className="text-slate-600 dark:text-gray-300 hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            Skills
          </a>
          <a
            href="#projects"
            className="text-slate-600 dark:text-gray-300 hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            Projects
          </a>
          <a
            href="#experience"
            className="text-slate-600 dark:text-gray-300 hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            Experience
          </a>
          <a
            href="#sertifikat"
            className="text-slate-600 dark:text-gray-300 hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            Certificates
          </a>
        </div>

        {/* Action Button, Desktop Theme Toggle & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center">
            <ThemeToggle />
          </div>

          <a
            href="#contact"
            className="bg-accent/10 border border-accent/40 text-accent hover:bg-accent hover:text-white dark:hover:text-slate-950 px-3.5 sm:px-4 py-1.5 rounded-full font-mono text-xs font-medium tracking-wider transition-all duration-300 hover:shadow-[0_0_15px_rgba(22,196,127,0.35)] active:scale-95">
            Contact Me
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
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
        <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-slate-200 dark:border-white/15 rounded-3xl p-6 z-40 flex flex-col gap-4 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
            <span className="text-[10px] font-mono text-slate-500 dark:text-gray-400 uppercase tracking-widest">
              {"// Navigation Index"}
            </span>
            <span className="text-[10px] font-mono text-accent font-semibold">GALIH.DEV</span>
          </div>
          <div className="flex flex-col gap-2 font-mono text-sm">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 hover:text-accent transition-colors flex items-center justify-between text-slate-700 dark:text-gray-300">
              <span>00 // Home</span>
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 hover:text-accent transition-colors flex items-center justify-between text-slate-700 dark:text-gray-300">
              <span>01 // About Me</span>
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 hover:text-accent transition-colors flex items-center justify-between text-slate-700 dark:text-gray-300">
              <span>02 // Skills</span>
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 hover:text-accent transition-colors flex items-center justify-between text-slate-700 dark:text-gray-300">
              <span>03 // Selected Works</span>
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 hover:text-accent transition-colors flex items-center justify-between text-slate-700 dark:text-gray-300">
              <span>04 // Experience</span>
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </a>
            <a
              href="#sertifikat"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 hover:text-accent transition-colors flex items-center justify-between text-slate-700 dark:text-gray-300">
              <span>05 // Certificates</span>
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 hover:text-accent transition-colors flex items-center justify-between text-slate-700 dark:text-gray-300">
              <span>06 // Contact</span>
              <ArrowUpRight className="w-4 h-4 opacity-50" />
            </a>
          </div>

          {/* Mobile Theme Toggle inside Drawer */}
          <div className="pt-2 border-t border-slate-200 dark:border-white/10">
            <ThemeToggle isMobile />
          </div>
        </div>
      )}
    </>
  );
}
