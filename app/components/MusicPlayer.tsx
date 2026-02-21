"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Howl, Howler } from "howler";
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react";

type PlayerState = {
  enabled: boolean;
  muted: boolean;
  volume: number;
  playing: boolean;
};

const STORAGE_KEY = "yt-landing-player-v2";
const AUDIO_SRC = "/audio/MusicaFondoCompleta.mp3";

export default function MusicPlayer() {
  const soundRef = useRef<Howl | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const rafRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [state, setState] = useState<PlayerState>({
    enabled: false,
    muted: false,
    volume: 0.35,
    playing: false,
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<PlayerState>;
      setState((s) => ({
        enabled: !!parsed.enabled,
        muted: !!parsed.muted,
        playing: !!parsed.playing,
        volume:
          typeof parsed.volume === "number"
            ? Math.min(1, Math.max(0, parsed.volume))
            : s.volume,
      }));
    } catch {
      // ignore
    }
  }, []);

  useMemo(() => {
    if (typeof window === "undefined") return;

    if (!soundRef.current) {
      soundRef.current = new Howl({
        src: [AUDIO_SRC],
        loop: true,
        volume: state.volume,
        html5: false,
      });
    }
  }, []);

  useEffect(() => {
    if (!soundRef.current) return;
    soundRef.current.volume(state.volume);
    soundRef.current.mute(state.muted);
  }, [state.volume, state.muted]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const setupAnalyser = () => {
    try {
      if (analyserRef.current) return;

      const ctx = Howler.ctx;
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.85;

      Howler.masterGain.connect(analyser);

      analyserRef.current = analyser;
      dataRef.current = new Uint8Array(analyser.frequencyBinCount) as Uint8Array<ArrayBuffer>;
    } catch {
      // ignore
    }
  };

  const startVisualizer = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const analyser = analyserRef.current;
    const data = dataRef.current;
    if (!analyser || !data) return;

    const ctx2d = canvas.getContext("2d");
    if (!ctx2d) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    const draw = () => {
      analyser.getByteFrequencyData(data);

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx2d.clearRect(0, 0, w, h);

      const bars = 18;
      const gap = 3;
      const barW = Math.max(3, Math.floor((w - gap * (bars - 1)) / bars));

      for (let i = 0; i < bars; i++) {
        const idx = Math.floor((i / bars) * data.length);
        const v = data[idx] / 255;
        const barH = Math.max(2, v * h);

        const x = i * (barW + gap);
        const y = h - barH;

        ctx2d.globalAlpha = 0.9;
        ctx2d.fillStyle = "rgba(200, 245, 255, 0.85)";
        ctx2d.fillRect(x, y, barW, barH);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    draw();

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  };

  const enable = () => {
    setupAnalyser();

    setState((s) => ({ ...s, enabled: true, playing: true }));
    const s = soundRef.current;
    if (s && !s.playing()) s.play();

    setTimeout(() => startVisualizer(), 50);
  };

  const togglePlay = () => {
    const s = soundRef.current;
    if (!s) return;

    setupAnalyser();

    if (s.playing()) {
      s.pause();
      setState((x) => ({ ...x, playing: false, enabled: true }));
    } else {
      s.play();
      setState((x) => ({ ...x, playing: true, enabled: true }));
      setTimeout(() => startVisualizer(), 50);
    }
  };

  const stopAll = () => {
    const s = soundRef.current;
    if (!s) return;
    s.stop();
    setState((x) => ({ ...x, playing: false, enabled: false }));
  };

  const toggleMute = () => setState((s) => ({ ...s, muted: !s.muted }));

  useEffect(() => {
    const handler = () => enable();
    window.addEventListener("enable-music", handler);
    return () => window.removeEventListener("enable-music", handler);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-[80]">
      {!state.enabled ? (
        <button
          onClick={enable}
          className="group flex items-center gap-3 rounded-2xl border border-cyan-300/25 bg-[#08121f]/70 px-4 py-3 shadow-[0_0_40px_rgba(34,211,238,0.16)] transition hover:bg-white/10 backdrop-blur-xl"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Music className="h-5 w-5 text-cyan-200/90" />
          </span>
          <div className="text-left">
            <div className="text-sm font-bold text-white">Activar música</div>
            <div className="text-xs text-white/60">Ambient + música</div>
          </div>
        </button>
      ) : (
        <div className="flex w-full flex-col gap-3 rounded-2xl border border-cyan-300/25 bg-[#08121f]/70 px-4 py-3 shadow-[0_0_40px_rgba(34,211,238,0.16)] backdrop-blur-xl sm:w-[460px] sm:flex-row sm:items-center sm:gap-3">
          <button
            onClick={toggleMute}
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10"
            aria-label={state.muted ? "Activar sonido" : "Silenciar"}
          >
            {state.muted ? (
              <VolumeX className="h-5 w-5 text-cyan-200/90" />
            ) : (
              <Volume2 className="h-5 w-5 text-cyan-200/90" />
            )}
          </button>

          <div className="flex flex-col gap-1">
            <div className="text-xs text-white/60">Volumen</div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <canvas
                ref={canvasRef}
                className="h-8 w-full sm:w-28 rounded-lg border border-white/10 bg-white/5"
              />
              <input
                type="range"
                min={0}
                max={100}
                value={Math.round(state.volume * 100)}
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    volume: Number(e.target.value) / 100,
                  }))
                }
                className="w-full sm:w-32 accent-cyan-300"
              />
            </div>
          </div>

          <button
            onClick={togglePlay}
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10"
            title={state.playing ? "Pausar" : "Reproducir"}
          >
            {state.playing ? (
              <Pause className="h-5 w-5 text-cyan-200/90" />
            ) : (
              <Play className="h-5 w-5 text-cyan-200/90" />
            )}
          </button>

          <button
            onClick={stopAll}
            className="rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white sm:px-3"
            title="Stop"
          >
            Stop
          </button>
        </div>
      )}
    </div>
  );
}
