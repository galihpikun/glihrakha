"use client";

export default function AlbumArtwork({ artwork, isPlaying, alt = "Album Artwork" }) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Vinyl record container */}
      <div
        className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 border border-slate-700/60 shadow-xl flex items-center justify-center transition-shadow duration-500 ${
          isPlaying
            ? "shadow-[0_0_25px_rgba(22,196,127,0.25)] border-accent/40"
            : "shadow-md"
        }`}
        style={{
          animation: "spin 12s linear infinite",
          animationPlayState: isPlaying ? "running" : "paused",
        }}>
        {/* Subtle grooved vinyl rings */}
        <div className="absolute inset-1 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute inset-2.5 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute inset-4 rounded-full border border-white/5 pointer-events-none" />

        {/* Artwork Image */}
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <img
            src={artwork}
            alt={alt}
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        </div>

        {/* Center Vinyl Spindle Hole */}
        <div className="absolute w-6 h-6 rounded-full bg-slate-950 border border-white/20 z-10 shadow-inner flex items-center justify-center pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-accent/90 shadow-[0_0_6px_rgba(22,196,127,0.8)]" />
        </div>
      </div>
    </div>
  );
}
