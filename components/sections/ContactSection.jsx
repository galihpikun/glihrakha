"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Linkedin,
  Github,
  Instagram,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AnimatedContent = dynamic(() => import("@/components/AnimatedContent"), {
  ssr: false,
});

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("galihrakhasiwi@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
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
            <div className="lg:col-span-5 bg-white dark:bg-[#0d1527]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-7 md:p-8 flex flex-col justify-between shadow-md dark:shadow-xl">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-gray-400 tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>07 // TERMINAL CONTACT</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Get in{" "}
                  <span className="text-accent italic font-serif">Touch</span>
                  .
                </h2>
                <p className="text-sm font-light text-slate-600 dark:text-gray-300 leading-relaxed">
                  Have an enquiry, open role, or collaboration idea? Send a
                  direct dispatch or connect via verified channels below.
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-8">
                <span className="text-[10px] font-mono text-slate-500 dark:text-gray-400 uppercase tracking-widest">
                  DIRECT CHANNELS
                </span>
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="p-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-white dark:hover:text-slate-950 hover:bg-accent transition-all duration-300 rounded-xl flex items-center gap-2.5 group">
                    <Linkedin className="w-4 h-4 text-accent group-hover:text-white dark:group-hover:text-slate-950" />
                    <span>LinkedIn</span>
                  </Link>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    className="p-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-white dark:hover:text-slate-950 hover:bg-accent transition-all duration-300 rounded-xl flex items-center gap-2.5 group">
                    <Github className="w-4 h-4 text-accent group-hover:text-white dark:group-hover:text-slate-950" />
                    <span>GitHub</span>
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    className="p-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-white dark:hover:text-slate-950 hover:bg-accent transition-all duration-300 rounded-xl flex items-center gap-2.5 group">
                    <Instagram className="w-4 h-4 text-accent group-hover:text-white dark:group-hover:text-slate-950" />
                    <span>Instagram</span>
                  </Link>
                  <Link
                    href="tel:0882"
                    className="p-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-white dark:hover:text-slate-950 hover:bg-accent transition-all duration-300 rounded-xl flex items-center gap-2.5 group">
                    <Phone className="w-4 h-4 text-accent group-hover:text-white dark:group-hover:text-slate-950" />
                    <span>Phone</span>
                  </Link>
                </div>

                {/* Quick Copy Email Banner */}
                <div className="mt-2 p-3 bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 rounded-xl flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-600 dark:text-gray-400 truncate max-w-[200px]">
                    galihrakhasiwi@gmail.com
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-accent hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer text-[11px] underline underline-offset-4 font-semibold">
                    {copiedEmail ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Dispatch Form */}
            <form
              className="lg:col-span-7 bg-white dark:bg-[#0d1527]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-7 md:p-8 flex flex-col gap-4 shadow-md dark:shadow-xl justify-between"
              action="https://formspree.io/f/mzdralzw"
              method="POST">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/10 pb-3 font-mono text-xs">
                  <span className="text-slate-500 dark:text-gray-400">FORM_DISPATCH</span>
                  <span className="text-accent flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    ENCRYPTED
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="username"
                    className="text-xs font-mono text-slate-600 dark:text-gray-400">
                    IDENTIFIER
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-white/10 w-full px-4 py-3 rounded-xl text-slate-900 dark:text-white font-mono text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600"
                    placeholder="Your Name or Alias"
                    name="username"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono text-slate-600 dark:text-gray-400">
                    RETURN_ADDRESS
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-white/10 w-full px-4 py-3 rounded-xl text-slate-900 dark:text-white font-mono text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600"
                    placeholder="name@domain.com"
                    name="email"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-mono text-slate-600 dark:text-gray-400">
                    TRANSMISSION_BODY
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-white/10 w-full px-4 py-3 rounded-xl h-[120px] text-slate-900 dark:text-white font-mono text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-gray-600"
                    placeholder="Write your transmission details..."
                    required></textarea>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-4 bg-accent/10 border border-accent/40 text-accent font-mono text-xs uppercase tracking-wider hover:bg-accent hover:text-white dark:hover:text-slate-950 transition-all duration-300 py-6 rounded-xl shadow-md flex items-center justify-between px-6 cursor-pointer">
                <span>Dispatch Message</span>
                <span>[SEND] →</span>
              </Button>
            </form>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}
