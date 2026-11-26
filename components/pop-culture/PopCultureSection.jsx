"use client";

import { useState } from "react";
import { Film, Disc3, Gamepad2, Play } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import VideoPreview from "./VideoPreview";
import MusicPlayer from "./MusicPlayer";
import { moviesData, albumsData, animeGamesData } from "./popCultureData";

export default function PopCultureSection() {
  const [activePopover, setActivePopover] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* 1. Favorite Movies */}
      <div className="bg-white dark:bg-[#0d1527]/60 border border-slate-200 dark:border-white/10 rounded-xl p-4 flex flex-col gap-2.5 transition-all duration-300 hover:border-accent/40 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-accent uppercase tracking-wider flex items-center gap-1.5 font-semibold">
            <Film className="w-3 h-3" />
            <span>Movies</span>
          </span>
          <span className="text-[9px] font-mono text-slate-400 dark:text-gray-500">
            CINEMA
          </span>
        </div>

        <ul className="text-xs text-slate-600 dark:text-gray-300 space-y-1 font-light">
          {moviesData.map((movie) => {
            const isOpen = activePopover === movie.id;
            return (
              <li key={movie.id}>
                <Popover
                  open={isOpen}
                  onOpenChange={(open) =>
                    setActivePopover(open ? movie.id : null)
                  }>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-2 text-left group/item rounded-lg py-1 px-1.5 -mx-1.5 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                      aria-label={`Open video preview for ${movie.label}`}>
                      <span className="flex items-center gap-2 truncate">
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0 group-hover/item:scale-125 transition-transform" />
                        <span className="truncate group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                          {movie.label}
                        </span>
                      </span>
                      <span className="text-[10px] font-mono text-accent opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center gap-1 shrink-0">
                        <Play className="w-2.5 h-2.5 fill-current" />
                      </span>
                    </button>
                  </PopoverTrigger>

                  <PopoverContent
                    side="top"
                    align="center"
                    sideOffset={8}
                    collisionPadding={16}
                    className="w-[calc(100vw-32px)] sm:w-[380px] p-0 bg-transparent border-0 shadow-none outline-none z-50">
                    <VideoPreview
                      title={movie.title}
                      creator={movie.creator}
                      badge={movie.badge}
                      description={movie.description}
                      videoSrc={movie.videoSrc}
                      isOpen={isOpen}
                      onClose={() => setActivePopover(null)}
                    />
                  </PopoverContent>
                </Popover>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 2. Favorite Albums */}
      <div className="bg-white dark:bg-[#0d1527]/60 border border-slate-200 dark:border-white/10 rounded-xl p-4 flex flex-col gap-2.5 transition-all duration-300 hover:border-accent/40 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-accent uppercase tracking-wider flex items-center gap-1.5 font-semibold">
            <Disc3 className="w-3 h-3" />
            <span>Albums</span>
          </span>
          <span className="text-[9px] font-mono text-slate-400 dark:text-gray-500">
            AUDIO
          </span>
        </div>

        <ul className="text-xs text-slate-600 dark:text-gray-300 space-y-1 font-light">
          {albumsData.map((album, idx) => {
            const isOpen = activePopover === album.id;
            return (
              <li key={album.id}>
                <Popover
                  open={isOpen}
                  onOpenChange={(open) =>
                    setActivePopover(open ? album.id : null)
                  }>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-2 text-left group/item rounded-lg py-1 px-1.5 -mx-1.5 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                      aria-label={`Open music player for ${album.label}`}>
                      <span className="flex items-center gap-2 truncate">
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0 group-hover/item:scale-125 transition-transform" />
                        <span className="truncate group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                          {album.label}
                        </span>
                      </span>
                      <span className="text-[10px] font-mono text-accent opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center gap-1 shrink-0">
                        <Play className="w-2.5 h-2.5 fill-current" />
                      </span>
                    </button>
                  </PopoverTrigger>

                  <PopoverContent
                    side="top"
                    align="center"
                    sideOffset={8}
                    collisionPadding={16}
                    className="w-[calc(100vw-32px)] sm:w-[380px] p-0 bg-transparent border-0 shadow-none outline-none z-50">
                    <MusicPlayer
                      initialTrackIndex={idx}
                      isOpen={isOpen}
                      onClose={() => setActivePopover(null)}
                    />
                  </PopoverContent>
                </Popover>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 3. Favorite Anime & Games */}
      <div className="bg-white dark:bg-[#0d1527]/60 border border-slate-200 dark:border-white/10 rounded-xl p-4 flex flex-col gap-2.5 transition-all duration-300 hover:border-accent/40 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-accent uppercase tracking-wider flex items-center gap-1.5 font-semibold">
            <Gamepad2 className="w-3 h-3" />
            <span>Anime & Games</span>
          </span>
          <span className="text-[9px] font-mono text-slate-400 dark:text-gray-500">
            PLAY
          </span>
        </div>

        <ul className="text-xs text-slate-600 dark:text-gray-300 space-y-1 font-light">
          {animeGamesData.map((item) => {
            const isOpen = activePopover === item.id;
            return (
              <li key={item.id}>
                <Popover
                  open={isOpen}
                  onOpenChange={(open) =>
                    setActivePopover(open ? item.id : null)
                  }>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-2 text-left group/item rounded-lg py-1 px-1.5 -mx-1.5 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                      aria-label={`Open video preview for ${item.label}`}>
                      <span className="flex items-center gap-2 truncate">
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0 group-hover/item:scale-125 transition-transform" />
                        <span className="truncate group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                          {item.label}
                        </span>
                      </span>
                      <span className="text-[10px] font-mono text-accent opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center gap-1 shrink-0">
                        <Play className="w-2.5 h-2.5 fill-current" />
                      </span>
                    </button>
                  </PopoverTrigger>

                  <PopoverContent
                    side="top"
                    align="center"
                    sideOffset={8}
                    collisionPadding={16}
                    className="w-[calc(100vw-32px)] sm:w-[380px] p-0 bg-transparent border-0 shadow-none outline-none z-50">
                    <VideoPreview
                      title={item.title}
                      creator={item.creator}
                      badge={item.badge}
                      description={item.description}
                      videoSrc={item.videoSrc}
                      isOpen={isOpen}
                      onClose={() => setActivePopover(null)}
                    />
                  </PopoverContent>
                </Popover>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
