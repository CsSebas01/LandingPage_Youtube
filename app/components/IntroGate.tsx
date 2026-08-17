"use client";

import { useEffect, useState } from "react";
import Rain from "./Rain";

const ROBLOX_PROFILE_URL = "https://www.roblox.com/es/users/505776198/profile";

export default function IntroGate({
  show,
  onEnter,
}: {
  show: boolean;
  onEnter: () => void;
}) {
  const [desktopEffects, setDesktopEffects] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1025px)");
    const update = () => setDesktopEffects(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (!show) return null;

  return (
        <div
          className="neon-cycle fixed inset-0 z-[60] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 pointer-events-none">
            <picture>
              <source media="(max-width: 1024px)" srcSet="/ciudad-mobile.webp" />
              <img
                src="/ciudad.jpg"
                alt="Fondo"
                className="h-full w-full object-cover blur-[4px] scale-110 opacity-60"
              />
            </picture>
            <div className="absolute inset-0 bg-[#02050f]/70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_55%)]" />
            {desktopEffects && <Rain intensity={140} />}
          </div>

          <div className="neon-frame rounded-3xl">
            <div
              className="relative w-full max-w-2xl rounded-3xl bg-[#07101d]/78 p-6 backdrop-blur-xl md:p-8"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10" />

              <div className="flex flex-col gap-5 md:flex-row md:items-center">
              <div className="flex shrink-0 justify-center md:justify-start">
                <a
                  href={ROBLOX_PROFILE_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir perfil de Roblox de Kliptt0"
                  className="block h-20 w-20 overflow-hidden rounded-full ring-4 ring-cyan-300/25 shadow-[0_0_40px_rgba(56,189,248,0.14)] transition hover:ring-cyan-200 md:h-24 md:w-24"
                >
                  <img src="/fotonacho.jpeg" alt="Kliptt0" className="h-full w-full object-cover" />
                </a>
              </div>

              <div className="text-center md:text-left">
                <h1 className="text-2xl font-extrabold text-cyan-100 md:text-3xl">
                  Bienvenido a nuestra comunidad
                </h1>

                <p className="mt-2 text-sm text-white/70 md:text-base">
                  Entra para ver los canales, redes y unirte al servidor.
                </p>

                <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                  <button
                    onClick={onEnter}
                    className="group relative w-full overflow-hidden rounded-2xl px-8 py-3.5 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(34,211,238,0.18)] sm:w-auto md:min-w-64"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400" />
                    <span className="absolute -inset-x-24 -inset-y-12 -translate-x-[-120%] rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover:translate-x-[120%]" />
                    <span className="relative">Entrar</span>
                  </button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
  );
}
