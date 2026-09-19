"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/lights.mp3");
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Audio play blocked by browser policy:", err);
        setIsPlaying(false);
      });
    }
  };

  return (
    <div className="inline-flex items-center gap-2.5 p-1.5 px-3 rounded-full bg-slate-900/90 border border-white/10 hover:border-accent/40 transition-all duration-300">
      <button
        onClick={togglePlay}
        type="button"
        aria-label={isPlaying ? "Pause soundtrack 'Lights'" : "Play soundtrack 'Lights'"}
        className="cursor-pointer flex items-center gap-2 group select-none"
      >
        <span className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
          isPlaying ? "bg-accent text-slate-950" : "bg-white/10 text-gray-300 group-hover:bg-accent group-hover:text-slate-950"
        }`}>
          {isPlaying ? <Pause className="w-2.5 h-2.5 fill-current" /> : <Play className="w-2.5 h-2.5 fill-current ml-0.5" />}
        </span>

        <span className="font-mono text-xs text-gray-300 group-hover:text-white transition-colors">
          Lights
        </span>

        {isPlaying && (
          <span className="flex items-end gap-0.5 h-3 ml-1" aria-hidden="true">
            <span className="w-0.5 bg-accent rounded-full animate-[bounce_0.8s_infinite] h-2.5" />
            <span className="w-0.5 bg-accent rounded-full animate-[bounce_0.6s_infinite_0.2s] h-3" />
            <span className="w-0.5 bg-accent rounded-full animate-[bounce_0.9s_infinite_0.4s] h-2" />
          </span>
        )}
      </button>
    </div>
  );
}