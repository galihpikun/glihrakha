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
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#16C47F"
        ariaLabel="Technology partners"
      />
      
    </div>
  );
}