"use client"

import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiExpo, SiExpress  } from 'react-icons/si';
import { FaGolang } from "react-icons/fa6";
import { CiDatabase } from 'react-icons/ci';
import { BsGithub } from 'react-icons/bs';

const techLogos = [
  { node: <SiReact />, title: "React", },
  { node: <SiNextdotjs />, title: "Next.js", },
  { node: <SiTypescript />, title: "TypeScript",},
  { node: <SiTailwindcss />, title: "Tailwind CSS", },
  { node: <SiJavascript />, title: "JavaScript",},
  { node: <CiDatabase />, title: "Database"},
  { node: <SiExpo />, title: "Expo"},
  { node: <FaGolang />, title: "Golang"},
  { node: <BsGithub />, title: "Github"},
  { node: <SiExpress />, title: "Express"},
];


export default function Loop() {
  return (
    <div className="relative py-4 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-6 mb-3 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400/80">
          {"// Tooling & Technologies"}
        </span>
        <span className="font-mono text-[10px] text-accent/80 hidden sm:inline">
          Continuous Integration • 2026
        </span>
      </div>
      <div className="relative h-[90px] flex items-center overflow-hidden">
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={42}
          gap={54}
          hoverSpeed={15}
          scaleOnHover
          fadeOut
          fadeOutColor="#0f172a"
          ariaLabel="Technologies and developer tools"
        />
      </div>
    </div>
  );
}