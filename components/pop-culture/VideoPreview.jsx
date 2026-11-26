"use client";

import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  X,
  Film,
  Maximize2,
} from "lucide-react";

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

export default function VideoPreview({
  title,
  creator,
  badge = "MEDIA PREVIEW",
  description,
  videoSrc,
  isOpen = true,
  onClose,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);

  // Stop playback when popover closes
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  useEffect(() => {
    const video = videoRef.current;
    return () => {
      if (video) {
        video.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (hasEnded) {
      videoRef.current.currentTime = 0;
      setHasEnded(false);
    }

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current
        .play()
        .then(() => {
          setHasEnded(false);
        })
        .catch((err) => {
          console.warn("Video playback blocked or failed:", err);
          setIsPlaying(false);
        });
    }
  };

  const handleReplay = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    setHasEnded(false);
    videoRef.current
      .play()
      .catch(() => setIsPlaying(false));
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleSeekChange = (e) => {
    const target = parseFloat(e.target.value);
    setCurrentTime(target);
  };

  const handleSeekStart = () => {
    setIsSeeking(true);
  };

  const handleSeekEnd = (e) => {
    const target = parseFloat(e.target.value);
    setIsSeeking(false);
    if (videoRef.current) {
      videoRef.current.currentTime = target;
    }
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex flex-col bg-white dark:bg-[#0d1527] text-slate-900 dark:text-white rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
      {/* Video Container (16:9 Aspect Ratio) */}
      <div className="relative aspect-video w-full bg-black overflow-hidden group/video select-none">
        <video
          ref={videoRef}
          src={videoSrc}
          playsInline
          preload="metadata"
          className="w-full h-full object-cover cursor-pointer"
          onClick={togglePlay}
          onPlay={() => {
            setIsPlaying(true);
            setHasEnded(false);
          }}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={() => {
            if (!isSeeking && videoRef.current) {
              setCurrentTime(videoRef.current.currentTime);
            }
          }}
          onLoadedMetadata={() => {
            if (videoRef.current) {
              setDuration(videoRef.current.duration || 0);
            }
          }}
          onEnded={() => {
            setIsPlaying(false);
            setHasEnded(true);
          }}
        />

        {/* Big Center Play / Replay Overlay Button */}
        {(!isPlaying || hasEnded) && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (hasEnded) handleReplay();
                else togglePlay();
              }}
              type="button"
              className="pointer-events-auto w-14 h-14 rounded-full bg-slate-950/80 border border-white/20 text-white flex items-center justify-center hover:bg-accent hover:text-slate-950 hover:scale-110 active:scale-95 transition-all shadow-2xl cursor-pointer"
              aria-label={hasEnded ? "Replay video" : "Play video"}>
              {hasEnded ? (
                <RotateCcw className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 fill-current ml-0.5" />
              )}
            </button>
          </div>
        )}

        {/* Video Controls Bar Overlay (visible on hover or when paused) */}
        <div className="absolute inset-x-0 bottom-0 p-3 pt-6 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent flex flex-col gap-1.5 transition-opacity duration-200">
          {/* Seek Bar */}
          <div className="relative w-full flex items-center">
            <input
              type="range"
              min={0}
              max={duration || 100}
              step={0.1}
              value={currentTime}
              onChange={handleSeekChange}
              onMouseDown={handleSeekStart}
              onMouseUp={handleSeekEnd}
              onTouchStart={handleSeekStart}
              onTouchEnd={handleSeekEnd}
              className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent focus:outline-none"
              style={{
                background: `linear-gradient(to right, #16c47f 0%, #16c47f ${progressPercent}%, rgba(255,255,255,0.2) ${progressPercent}%, rgba(255,255,255,0.2) 100%)`,
              }}
              aria-label="Video progress slider"
            />
          </div>

          {/* Controls line */}
          <div className="flex items-center justify-between text-xs font-mono text-gray-300">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                type="button"
                className="hover:text-accent transition-colors cursor-pointer"
                aria-label={isPlaying ? "Pause" : "Play"}>
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
              </button>

              <button
                onClick={toggleMute}
                type="button"
                className="hover:text-accent transition-colors cursor-pointer"
                aria-label={isMuted ? "Unmute" : "Mute"}>
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-red-400" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>

              <span className="text-[10px] text-gray-300">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <button
              onClick={handleFullscreen}
              type="button"
              className="hover:text-accent transition-colors cursor-pointer"
              aria-label="Toggle fullscreen">
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Metadata Card Below Video */}
      <div className="p-4 sm:p-5 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-accent tracking-widest uppercase font-semibold flex items-center gap-1.5">
            <Film className="w-3 h-3" />
            <span>{badge}</span>
          </span>

          {onClose && (
            <button
              onClick={onClose}
              type="button"
              className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-0.5 rounded-md transition-colors cursor-pointer"
              aria-label="Close preview">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex flex-col gap-0.5">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
            {title}
          </h4>
          {creator && (
            <p className="font-mono text-xs text-accent font-medium">
              {creator}
            </p>
          )}
        </div>

        {description && (
          <p className="text-xs text-slate-600 dark:text-gray-400 font-light leading-relaxed pt-1 border-t border-slate-100 dark:border-white/10 mt-1">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
