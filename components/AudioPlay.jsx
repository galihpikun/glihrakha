"use client"; // Wajib di Next.js App Router agar bisa pakai Hooks

import { useState, useRef } from "react";

export default function MusicPlayer() {
  // 1. State untuk memantau apakah musik sedang main atau tidak
  const [isPlaying, setIsPlaying] = useState(false);

  // 2. useRef untuk menyimpan instance Audio tanpa memicu re-render ulang
  const audioRef = useRef(null);

  const togglePlay = () => {
    // Jalankan ini hanya di browser
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/lights.mp3");
      // Opsional: aktifkan looping jika ingin musiknya berulang
      audioRef.current.loop = true; 
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.log("Audio play diblokir oleh browser sampai ada interaksi user:", err);
      });
    }

    // Ubah status state
    setIsPlaying(!isPlaying);
  };
  return (
    <button
      onClick={togglePlay}
      className={`text-sm font-medium transition-colors duration-500 cursor-pointer select-none
        ${isPlaying ? "text-accent animate-pulse" : "text-muted-foreground/60 hover:text-muted-foreground"}`}
    >
      {isPlaying ? "Listening..." : "Lights"}
    </button>
  );
}