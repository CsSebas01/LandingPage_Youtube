"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Instagram, Mail, MessageCircle, Music2, Youtube } from "lucide-react";
import IntroGate from "./components/IntroGate";
import MusicPlayer from "./components/MusicPlayer";
import Modal from "./components/Modal";
import Rain from "./components/Rain";
import ShineCard from "./components/ShineCard";

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [ytOpen, setYtOpen] = useState(false);
  const [ttOpen, setTtOpen] = useState(false);
  const [dcOpen, setDcOpen] = useState(false);
  const [mailOpen, setMailOpen] = useState(false);

  const youtubeChannels = [
    {
      name: "Kliptt0",
      subs: "2M+",
      tags: ["Gaming", "Entretenimiento", "Shorts"],
      url: "https://www.youtube.com/@kliptt0",
      avatar: "/fotonacho.jpeg",
    },
    {
      name: "Ceredy",
      subs: "50K+",
      tags: ["Gaming", "Shorts"],
      url: "https://www.youtube.com/@Ceredy1",
      avatar: "/fotosebas.jpg",
    },
    {
      name: "El Tocinito",
      subs: "75K+",
      tags: ["Gaming", "Shorts"],
      url: "https://www.youtube.com/@eltocinito890",
      avatar: "/fotonacho.jpeg",
    },
  ];

  const socialAccounts = [
    {
      platform: "TikTok",
      name: "klipt0",
      followers: "140K+",
      url: "https://www.tiktok.com/@klipt0?_r=1&_t=ZS-945T5su5DMr",
      avatar: "/fotonacho.jpeg",
    },
    {
      platform: "TikTok",
      name: "kliptt0_0",
      followers: "30K+",
      url: "https://www.tiktok.com/@kliptt0_0?_r=1&_t=ZS-945T8Kiboyj",
      avatar: "/fotonacho.jpeg",
    },
    {
      platform: "Instagram",
      name: "kliptt0",
      followers: "400+",
      url: "https://www.instagram.com/kliptt0?igsh=b2p1Y3IwYzdndWtk",
      avatar: "/instagram.png",
    },
  ];

  const emails = [
    { label: "Ceredy", email: "cuentaytceredy@gmail.com" },
    { label: "Kliptt0", email: "kliptt0@gmail.com" },
    { label: "El Tocinito", email: "kliptt0@gmail.com" },
  ];

  return (
    <main className="neon-cycle relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/ciudad.jpg"
          alt="Fondo ciudad"
          className="h-full w-full object-cover blur-[4px] scale-110 opacity-60"
        />

        <div className="absolute inset-0 bg-[#01030a]/78" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgb(var(--neon-a)_/_0.18),transparent_55%),radial-gradient(circle_at_bottom_left,rgb(var(--neon-b)_/_0.14),transparent_55%),radial-gradient(circle_at_right,rgb(var(--neon-c)_/_0.12),transparent_55%)]" />

        <Rain intensity={160} />
      </div>

      {!entered && (
        <IntroGate
          show
          onEnter={() => {
            setEntered(true);
            window.dispatchEvent(new Event("enable-music"));
          }}
        />
      )}

      {entered && (
        <div className="relative mx-auto max-w-4xl px-4 py-14">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-extrabold tracking-wide text-cyan-100/90 drop-shadow-[0_0_18px_rgb(var(--neon-a)_/_0.25)] md:text-5xl">
              Bienvenido a nuestra comunidad
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70 md:text-base">
              Canales, redes y comunidad. Entra y elige dónde quieres ir.
            </p>
            <div className="mx-auto mt-4 h-[2px] w-40 rounded bg-cyan-400/60" />
          </div>

          <div className="neon-frame rounded-3xl">
            <motion.section
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative rounded-3xl bg-[#07101d]/78 p-6 backdrop-blur-2xl md:p-10"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/8" />

            <div className="flex items-start gap-6 md:flex-row md:gap-10">
              <div className="shrink-0">
                <div className="h-28 w-28 overflow-hidden rounded-full ring-4 ring-cyan-300/40 md:h-32 md:w-32">
                <img src="/fotonacho.jpeg" alt="Kliptt0" className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-3xl font-extrabold text-cyan-100/90">Kliptt0</h2>
              <p className="mt-2 text-white/70">
                Gaming, entretenimiento y shorts con una comunidad que no para de crecer. Elige tu plataforma
                y únete al viaje.
              </p>
            </div>
          </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              <ActionCard title="YouTube" subtitle="Ver Canales" Icon={Youtube} onClick={() => setYtOpen(true)} />
              <ActionCard title="TikTok" subtitle="Ver Cuentas" Icon={Music2} onClick={() => setTtOpen(true)} />
              <ActionCard
                title="Discord"
                subtitle="Únete al Servidor"
                Icon={MessageCircle}
                onClick={() => setDcOpen(true)}
              />
              <ActionCard title="Gmail" subtitle="Colaboraciones" Icon={Mail} onClick={() => setMailOpen(true)} />
            </div>

            <a
              href="https://www.youtube.com/@kliptt0?sub_confirmation=1"
              target="_blank"
              rel="noreferrer"
              className="mt-8 block"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400" />
                <div className="absolute -inset-x-24 -inset-y-12 -translate-x-[-120%] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 hover:translate-x-[120%]" />
                <div className="relative py-4 text-center text-lg font-bold text-white">¡SUSCRÍBETE AHORA!</div>
              </div>
            </a>
            </motion.section>
          </div>

          <Modal open={ytOpen} onClose={() => setYtOpen(false)} title="Canales de YouTube">
            <div className="mb-4 text-sm text-white/60">Elige un canal para abrirlo en una nueva pestaña.</div>

            <div className="grid gap-3">
              {youtubeChannels.map((c) => (
                <a
                  key={c.url}
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <img
                      src={c.avatar}
                      alt={c.name}
                      className="h-14 w-14 rounded-full object-cover ring-2 ring-cyan-300/30"
                    />

                    <div className="min-w-0">
                      <div className="truncate font-bold text-white">{c.name}</div>
                      <div className="text-sm text-white/60">{c.subs}</div>
                      <div className="truncate text-xs text-white/40">{c.url}</div>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {c.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-[rgb(var(--neon-a)_/_0.22)] bg-white/5 px-2.5 py-1 text-xs text-cyan-100"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <CopyButton text={c.url} />
                    <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-cyan-100 transition hover:bg-white/10">
                      Visitar <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              ))}
            </div>

          </Modal>

          <Modal open={ttOpen} onClose={() => setTtOpen(false)} title="TikTok e Instagram">
            <div className="mb-4 text-sm text-white/70">
              Clips, highlights y contenido diario. Sígueme para no perderte nada.
            </div>

            <div className="grid gap-3">
              {socialAccounts.map((a) => (
                <a
                  key={a.url}
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-4">
                    {a.platform === "Instagram" ? (
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <Instagram className="h-6 w-6 text-white/80" />
                      </div>
                    ) : (
                      <img
                        src={a.avatar}
                        alt={a.name}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-cyan-300/25"
                      />
                    )}
                    <div>
                      <div className="font-bold text-white">
                        {a.platform} — {a.name}
                      </div>
                      <div className="text-sm text-white/60">{a.followers} seguidores</div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-cyan-100 transition hover:bg-white/10">
                    Visitar <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </Modal>

          <Modal open={dcOpen} onClose={() => setDcOpen(false)} title="Discord — Comunidad">
            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_55%)]" />
                <div className="relative flex items-center gap-4 p-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(34,211,238,0.14)]">
                    <MessageCircle className="h-7 w-7 text-cyan-200/90" />
                  </div>

                  <div className="min-w-0">
                    <div className="text-lg font-bold text-white">Servidor Oficial</div>
                    <div className="text-sm text-white/60">
                      Chat, avisos, clips, eventos y soporte de la comunidad.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-bold text-white">🎬 Clips</div>
                  <div className="mt-1 text-xs text-white/60">Comparte highlights y mejores momentos.</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-bold text-white">🧠 Comunidad</div>
                  <div className="mt-1 text-xs text-white/60">Conoce gente y participa en retos.</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-bold text-white">📢 Avisos</div>
                  <div className="mt-1 text-xs text-white/60">No te pierdas directos y novedades.</div>
                </div>
              </div>
              <button
                disabled
                className="w-full cursor-not-allowed rounded-2xl bg-white/10 py-3 font-bold text-white/40"
              >
                Invitación próximamente
              </button>
            </div>
          </Modal>

          <Modal open={mailOpen} onClose={() => setMailOpen(false)} title="Contacto y colaboraciones">
            <div className="grid gap-3">
              {emails.map((e) => (
                <a
                  key={`${e.email}-${e.label}`}
                  href={`mailto:${e.email}`}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-cyan-200/80" />
                    <div>
                      <div className="font-bold text-white">{e.label}</div>
                      <div className="text-sm text-white/70">{e.email}</div>
                    </div>
                  </div>
                  <span className="text-sm text-cyan-100">Escribir</span>
                </a>
              ))}
            </div>
          </Modal>

          <footer className="mt-10 text-center text-xs text-white/50">
            © {new Date().getFullYear()} SMEC - Ceredy01. Todos los derechos reservados.
          </footer>
        </div>
      )}

      <MusicPlayer />
    </main>
  );
}

function ActionCard({
  title,
  subtitle,
  Icon,
  onClick,
}: {
  title: string;
  subtitle: string;
  Icon: React.ElementType;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="text-left">
      <ShineCard className="flex items-center gap-4 p-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <Icon className="h-6 w-6 text-cyan-200/80 transition" />
        </div>

        <div>
          <div className="text-xl font-bold text-white">{title}</div>
          <div className="text-sm text-cyan-200/70">{subtitle}</div>
        </div>
      </ShineCard>
    </button>
  );
}

function CopyButton({ text }: { text: string }) {
  const [ok, setOk] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setOk(true);
      setTimeout(() => setOk(false), 1200);
    } catch {
      // ignore
    }
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        copy();
      }}
      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
      title="Copiar enlace"
    >
      {ok ? <Check className="h-4 w-4 text-cyan-200" /> : <Copy className="h-4 w-4" />}
      {ok ? "Copiado" : "Copiar"}
    </button>
  );
}
