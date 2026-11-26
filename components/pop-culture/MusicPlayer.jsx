"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  X,
  Disc3,
  AlertCircle,
} from "lucide-react";
import AlbumArtwork from "./AlbumArtwork";
import { albumsData } from "./popCultureData";

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

export default function MusicPlayer({
  initialTrackIndex = 0,
  isOpen = true,
  onClose,
}) {
  const [trackIndex, setTrackIndex] = useState(initialTrackIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);

  const audioRef = useRef(null);
  const currentTrack = albumsData[trackIndex] || albumsData[0];

  // Pause audio when popover closes or unmounts
  useEffect(() => {
    if (!isOpen && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isOpen]);

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  // Track switching handler
  const changeTrack = useCallback(
    (newIndex, autoPlay = true) => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setTrackIndex(newIndex);
      setCurrentTime(0);
      setDuration(0);
      setHasError(false);

      if (autoPlay) {
        setTimeout(() => {
          if (audioRef.current) {
            audioRef.current
              .play()
              .catch((err) => {
                console.log("Audio playback error/policy:", err);
                setIsPlaying(false);
              });
          }
        }, 50);
      }
    },
    []
  );

  const handleNext = () => {
    const nextIdx = (trackIndex + 1) % albumsData.length;
    changeTrack(nextIdx, isPlaying);
  };

  const handlePrev = () => {
    const prevIdx = (trackIndex - 1 + albumsData.length) % albumsData.length;
    changeTrack(prevIdx, isPlaying);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .then(() => {
          setHasError(false);
        })
        .catch((err) => {
          console.error("Audio playback error:", err);
          setHasError(true);
        });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleSeekChange = (e) => {
    const targetTime = parseFloat(e.target.value);
    setCurrentTime(targetTime);
  };

  const handleSeekStart = () => {
    setIsSeeking(true);
  };

  const handleSeekEnd = (e) => {
    const targetTime = parseFloat(e.target.value);
    setIsSeeking(false);
    if (audioRef.current) {
      audioRef.current.currentTime = targetTime;
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex flex-col bg-white dark:bg-[#0d1527] text-slate-900 dark:text-white rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl p-4 sm:p-5">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={currentTrack.audioSrc}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={() => {
          if (!isSeeking && audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration || 0);
          }
        }}
        onEnded={() => {
          handleNext();
        }}
        onError={(e) => {
          console.warn("Audio load error:", e);
          setHasError(true);
          setIsPlaying(false);
        }}
      />

      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[10px] text-accent tracking-widest uppercase font-semibold flex items-center gap-1.5">
            <Disc3 className="w-3 h-3" />
            <span>COMPACT AUDIO PLAYER</span>
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="font-mono text-[10px] text-slate-400 dark:text-gray-500">
            0{trackIndex + 1} / 0{albumsData.length}
          </span>
          {onClose && (
            <button
              onClick={onClose}
              type="button"
              className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-0.5 rounded-md transition-colors cursor-pointer"
              aria-label="Close music player">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Track & Artwork Section */}
      <div className="flex items-center gap-4 sm:gap-5 mb-5">
        {/* Spinning Album Artwork */}
        <AlbumArtwork
          artwork={currentTrack.artwork}
          isPlaying={isPlaying}
          alt={currentTrack.albumName}
        />

        {/* Track Metadata */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="font-mono text-[10px] text-accent font-semibold tracking-wider">
              {currentTrack.badge}
            </span>
            {isPlaying && (
              <span className="flex items-end gap-0.5 h-2.5 ml-1" aria-hidden="true">
                <span className="w-0.5 bg-accent rounded-full animate-[bounce_0.8s_infinite] h-2" />
                <span className="w-0.5 bg-accent rounded-full animate-[bounce_0.6s_infinite_0.2s] h-3" />
                <span className="w-0.5 bg-accent rounded-full animate-[bounce_0.9s_infinite_0.4s] h-1.5" />
              </span>
            )}
          </div>

          <h4
            className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight truncate leading-snug"
            title={currentTrack.trackTitle}>
            {currentTrack.trackTitle}
          </h4>

          <p
            className="text-xs sm:text-sm font-medium text-slate-700 dark:text-gray-300 truncate"
            title={currentTrack.artist}>
            {currentTrack.artist}
          </p>

          <p
            className="text-[11px] font-mono text-slate-400 dark:text-gray-500 truncate mt-0.5"
            title={currentTrack.albumName}>
            {currentTrack.albumName}
          </p>
        </div>
      </div>

      {/* Error alert if audio fails to load */}
      {hasError && (
        <div className="flex items-center gap-2 p-2 mb-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-xs font-mono">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>Unable to play track file. Check browser policy.</span>
        </div>
      )}

      {/* Seek Progress Bar */}
      <div className="flex flex-col gap-1 mb-4">
        <div className="relative w-full flex items-center group/slider py-1">
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
            className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-accent focus:outline-none transition-all"
            style={{
              background: `linear-gradient(to right, #16c47f 0%, #16c47f ${progressPercent}%, rgba(255,255,255,0.1) ${progressPercent}%, rgba(255,255,255,0.1) 100%)`,
            }}
            aria-label="Audio progress slider"
          />
        </div>

        {/* Time display */}
        <div className="flex justify-between items-center font-mono text-[10px] text-slate-400 dark:text-gray-500">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-between pt-1">
        {/* Mute Toggle */}
        <button
          onClick={toggleMute}
          type="button"
          className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}>
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-red-400" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>

        {/* Core Playback: Prev, Play/Pause, Next */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            type="button"
            className="p-2 rounded-full text-slate-600 dark:text-gray-300 hover:text-accent hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-200 cursor-pointer active:scale-95"
            aria-label="Previous track">
            <SkipBack className="w-4 h-4 fill-current" />
          </button>

          <button
            onClick={togglePlay}
            type="button"
            className="w-11 h-11 rounded-full bg-accent text-white dark:text-slate-950 flex items-center justify-center hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label={isPlaying ? "Pause track" : "Play track"}>
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </button>

          <button
            onClick={handleNext}
            type="button"
            className="p-2 rounded-full text-slate-600 dark:text-gray-300 hover:text-accent hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-200 cursor-pointer active:scale-95"
            aria-label="Next track">
            <SkipForward className="w-4 h-4 fill-current" />
          </button>
        </div>

        {/* Looping indicator badge */}
        <div className="font-mono text-[9px] px-2 py-0.5 rounded-full border border-slate-200 dark:border-white/10 text-slate-400 dark:text-gray-500 uppercase tracking-wider">
          LOOP 2/2
        </div>
      </div>
    </div>
  );
}
