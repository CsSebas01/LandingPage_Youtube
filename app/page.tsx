"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, BadgeCheck, Check, Copy, Instagram, Mail, MessageCircle, Music2, Radio, Youtube } from "lucide-react";
import IntroGate from "./components/IntroGate";
import MusicPlayer from "./components/MusicPlayer";
import Modal from "./components/Modal";
import Rain from "./components/Rain";
import ShineCard from "./components/ShineCard";

const ROBLOX_PROFILE_URL = "https://www.roblox.com/es/users/505776198/profile";

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [ytOpen, setYtOpen] = useState(false);
  const [ttOpen, setTtOpen] = useState(false);
  const [dcOpen, setDcOpen] = useState(false);
  const [mailOpen, setMailOpen] = useState(false);
  const [sponsorOpen, setSponsorOpen] = useState(false);
  const [activeSponsor, setActiveSponsor] = useState<SponsorData | null>(null);
  const [desktopEffects, setDesktopEffects] = useState(false);

  const customuseLink = "https://go.customuse.com/kliptt0-ezvj";
  const customuseCode = "KLIPT";
  const customuseLocalImage = "/customuse_foto.jpg";
  const customuseRemoteImage = "https://logo.clearbit.com/customuse.com";
  const temuLink = "https://temu.to/k/euxtfm72oia";
  const temuCode = "ale128679";
  const temuLocalImage = "/temu-logo.png";
  const temuRemoteImage = "https://logo.clearbit.com/temu.com";
  const bloxbeamLink = "https://www.bloxbeam.com/";

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1025px)");
    const update = (event?: MediaQueryListEvent) => {
      setDesktopEffects(event ? event.matches : query.matches);
    };

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const youtubeChannels = [
    {
      name: "Kliptt0",
      subs: "2.36 Mill + Suscriptores",
      tags: ["Gaming", "Entretenimiento", "Shorts"],
      url: "https://www.youtube.com/@kliptt0",
      avatar: "/fotonacho.jpeg",
    },
    {
      name: "Ceredy",
      subs: "255k + Suscriptores",
      tags: ["Gaming", "Shorts"],
      url: "https://www.youtube.com/@Ceredy1",
      avatar: "/fotosebas.jpg",
    },
    {
      name: "Bulldog Reacciona",
      subs: "280k + Suscriptores",
      tags: ["Gaming", "Shorts"],
      url: "https://www.youtube.com/@eltocinito890",
      avatar: "/bulldog-reacciona.jpeg",
    },
  ];

  const socialAccounts = [
    {
      platform: "TikTok",
      name: "klipt0",
      followers: "168K+",
      url: "https://www.tiktok.com/@klipt0?_r=1&_t=ZS-945T5su5DMr",
      avatar: "/fotonacho.jpeg",
    },
    {
      platform: "TikTok",
      name: "kliptt0_0",
      followers: "38k+",
      url: "https://www.tiktok.com/@kliptt0_0?_r=1&_t=ZS-945T8Kiboyj",
      avatar: "/fotonacho.jpeg",
    },
    {
      platform: "Instagram",
      name: "kliptt0",
      followers: "9500+",
      url: "https://www.instagram.com/kliptt0?igsh=b2p1Y3IwYzdndWtk",
      avatar: "/instagram.png",
    },
    {
      platform: "Kick",
      name: "kliptt",
      followers: "",
      url: "https://kick.com/kliptt",
      avatar: "/fotonacho.jpeg",
    },
  ];

  const emails = [
    { label: "Ceredy", email: "cuentaytceredy@gmail.com" },
    { label: "Kliptt0", email: "kliptt0@gmail.com" },
    { label: "El Tocinito", email: "kliptt0@gmail.com" },
  ];

  const sponsors: SponsorData[] = [
    {
      name: "Customuse",
      title: "Patrocinado por Customuse",
      description: "Crea tu propio UGC para Roblox",
      modalDescription: "Crea ropa y objetos UGC para Roblox con plantillas faciles de usar.",
      highlight: "100 créditos gratis para crear objetos",
      code: customuseCode,
      href: customuseLink,
      localImage: customuseLocalImage,
      remoteImage: customuseRemoteImage,
    },
    {
      name: "Temu",
      title: "Patrocinado por Temu",
      description: `30% de descuento con el código ${temuCode}`,
      modalDescription: "Aprovecha el descuento para compras en la app o web de Temu.",
      highlight: "Solo para nuevos usuarios",
      code: temuCode,
      href: temuLink,
      localImage: temuLocalImage,
      remoteImage: temuRemoteImage,
    },
    {
      name: "Bloxbeam",
      title: "Patrocinado por Bloxbeam",
      description: "10% de descuento con el código KLIPT",
      modalDescription: "Encuentra objetos y artículos para tus juegos favoritos con entrega automatizada.",
      highlight: "Usa el código KLIPT al finalizar tu compra",
      code: "KLIPT",
      href: bloxbeamLink,
      localImage: "/bloxbeam-logo.png",
      logoFit: "contain",
    },
  ];

  return (
    <main className="neon-cycle relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <picture>
          <source media="(max-width: 1024px)" srcSet="/ciudad-mobile.webp" />
          <img
            src="/ciudad.jpg"
            alt="Fondo ciudad"
            className="h-full w-full object-cover blur-[4px] scale-110 opacity-60"
          />
        </picture>

        <div className="absolute inset-0 bg-[#01030a]/78" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgb(var(--neon-a)_/_0.18),transparent_55%),radial-gradient(circle_at_bottom_left,rgb(var(--neon-b)_/_0.14),transparent_55%),radial-gradient(circle_at_right,rgb(var(--neon-c)_/_0.12),transparent_55%)]" />

        {desktopEffects && <Rain intensity={150} />}
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
            <section className="relative rounded-3xl bg-[#07101d]/78 p-6 backdrop-blur-2xl md:p-10">
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/8" />

            <div className="flex items-start gap-6 md:flex-row md:gap-10">
              <div className="shrink-0">
                <a
                  href={ROBLOX_PROFILE_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir perfil de Roblox de Kliptt0"
                  className="block h-28 w-28 overflow-hidden rounded-full ring-4 ring-cyan-300/40 transition hover:ring-cyan-200 md:h-32 md:w-32"
                >
                  <img src="/fotonacho.jpeg" alt="Kliptt0" className="h-full w-full object-cover" />
                </a>
              </div>

              <div className="flex-1">
                <a
                  href={ROBLOX_PROFILE_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir perfil de Roblox de Kliptt0"
                  className="group inline-flex items-center gap-2 text-3xl font-extrabold text-cyan-100/90 transition hover:text-cyan-200"
                >
                  Kliptt0
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-200/35 bg-cyan-300/10 text-cyan-100 transition group-hover:bg-cyan-300/20">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
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

            <section className="mt-6 rounded-2xl border border-cyan-300/20 bg-white/5 p-4">
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-cyan-100/90">
                Patrocinios disponibles
              </h3>

              <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
                {sponsors.map((sponsor) => (
                  <SponsorCard
                    key={sponsor.name}
                    name={sponsor.name}
                    title={sponsor.title}
                    description={sponsor.description}
                    highlight={sponsor.highlight}
                    code={sponsor.code}
                    localImage={sponsor.localImage}
                    remoteImage={sponsor.remoteImage}
                    logoFit={sponsor.logoFit}
                    onClick={() => {
                      setActiveSponsor(sponsor);
                      setSponsorOpen(true);
                    }}
                  />
                ))}
              </div>
            </section>

            <section className="mt-6 rounded-2xl border border-cyan-300/20 bg-white/5 p-4">
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-cyan-100/90">
                Objetos UGC disponibles en el catálogo de Roblox
              </h3>
              <RobloxCatalogCard />
            </section>

            <a
              href="https://www.youtube.com/@kliptt0?sub_confirmation=1"
              target="_blank"
              rel="noreferrer"
              className="group mt-8 block"
            >
              <div className="relative overflow-hidden rounded-2xl transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_16px_36px_rgba(34,211,238,0.18)]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400" />
                <div className="absolute -inset-x-24 -inset-y-12 -translate-x-[-120%] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-[120%]" />
                <div className="relative py-4 text-center text-lg font-bold text-white">¡SUSCRÍBETE AHORA!</div>
              </div>
            </a>
            </section>
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
                      <div className="flex items-center gap-1.5 truncate font-bold text-white">
                        <span className="truncate">{c.name}</span>
                        <BadgeCheck className="h-4 w-4 shrink-0 text-cyan-200" aria-label="Canal verificado" />
                      </div>
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

          <Modal open={ttOpen} onClose={() => setTtOpen(false)} title="TikTok, Instagram y Kick">
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
                    ) : a.platform === "Kick" ? (
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <Radio className="h-6 w-6 text-cyan-200/90" />
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
                      {a.followers && <div className="text-sm text-white/60">{a.followers} seguidores</div>}
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

          <Modal
            open={sponsorOpen && activeSponsor !== null}
            onClose={() => {
              setSponsorOpen(false);
              setActiveSponsor(null);
            }}
            title={activeSponsor?.name ?? "Patrocinio"}
          >
            {activeSponsor && <SponsorModalContent sponsor={activeSponsor} />}
          </Modal>

          <footer className="mt-10 text-center text-xs text-white/50">
            © {new Date().getFullYear()} SMEC - Ceredy01. Todos los derechos reservados.
            <p className="mt-2 text-white/65 lg:hidden">Abre la página en ordenador para disfrutar de la máxima experiencia.</p>
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

function CopyButton({
  text,
  label = "Copiar",
  title = "Copiar contenido",
}: {
  text: string;
  label?: string;
  title?: string;
}) {
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
      title={title}
    >
      {ok ? <Check className="h-4 w-4 text-cyan-200" /> : <Copy className="h-4 w-4" />}
      {ok ? "Copiado" : label}
    </button>
  );
}

type SponsorData = {
  name: string;
  title: string;
  description: string;
  modalDescription: string;
  highlight: string;
  code: string;
  href: string;
  localImage?: string;
  remoteImage?: string;
  logoFit?: "cover" | "contain";
};

function SponsorCard({
  name,
  title,
  description,
  highlight,
  code,
  onClick,
  localImage,
  remoteImage,
  logoFit = "cover",
}: {
  name: string;
  title: string;
  description: string;
  highlight: string;
  code: string;
  onClick: () => void;
  localImage?: string;
  remoteImage?: string;
  logoFit?: "cover" | "contain";
}) {
  const fallbackImage = remoteImage ?? localImage ?? "";
  const [imgSrc, setImgSrc] = useState(localImage ?? fallbackImage);

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-between gap-3 rounded-2xl border border-cyan-300/20 bg-white/5 px-4 py-3 transition hover:bg-white/10"
    >
      <div className="flex min-w-0 items-center gap-3">
        <img
          src={imgSrc}
          alt={name}
          className={`h-10 w-10 rounded-xl border border-white/10 bg-white/5 ${logoFit === "contain" ? "object-contain p-1" : "object-cover"}`}
          onError={() => {
            if (imgSrc !== fallbackImage) setImgSrc(fallbackImage);
          }}
        />
        <div className="min-w-0">
          <div className="truncate text-sm font-bold text-white">{title}</div>
          <div className="truncate text-xs text-white/60">{description}</div>
          <div className="text-xs font-semibold text-cyan-200">{highlight}</div>
        </div>
      </div>
      <div className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
        {code}
      </div>
    </button>
  );
}

function RobloxCatalogCard() {
  const catalogUrl = "https://www.roblox.com/es/catalog/78160258117526/Pibble-Abejita";
  const imageUrl = "https://tr.rbxcdn.com/180DAY-530208472ae0686c8680c1323b32a45b/420/420/ShoulderAccessory/Webp/noFilter";

  return (
    <a
      href={catalogUrl}
      target="_blank"
      rel="noreferrer"
      className="group mt-3 flex items-center justify-between gap-4 rounded-2xl border border-cyan-300/20 bg-white/5 p-3 transition hover:bg-white/10"
    >
      <div className="flex min-w-0 items-center gap-4">
        <img
          src={imageUrl}
          alt="Pibble Abejita"
          className="h-16 w-16 rounded-2xl border border-white/10 bg-yellow-300/10 object-contain"
        />
        <div className="min-w-0">
          <div className="font-bold text-white">Pibble Abejita</div>
          <div className="mt-1 text-sm text-white/65">Objeto UGC para tu avatar de Roblox.</div>
        </div>
      </div>
      <span className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-bold text-cyan-100 transition group-hover:bg-cyan-300/20">
        Ver objeto <ArrowUpRight className="h-4 w-4" />
      </span>
    </a>
  );
}

function SponsorModalContent({ sponsor }: { sponsor: SponsorData }) {
  const fallbackImage = sponsor.remoteImage ?? sponsor.localImage ?? "";

  return (
    <div className="grid gap-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center gap-4">
          <img
            src={sponsor.localImage ?? fallbackImage}
            alt={sponsor.name}
            className={`h-14 w-14 rounded-2xl border border-white/10 bg-white/5 ${sponsor.logoFit === "contain" ? "object-contain p-1" : "object-cover"}`}
            onError={(e) => {
              if (e.currentTarget.src !== fallbackImage) {
                e.currentTarget.src = fallbackImage;
              }
            }}
          />
          <div>
            <div className="text-lg font-bold text-white">{sponsor.title}</div>
            <div className="text-sm text-white/70">{sponsor.modalDescription}</div>
            <div className="mt-1 text-xs font-semibold text-cyan-200">{sponsor.highlight}</div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-center">
        <div className="text-xs uppercase tracking-widest text-cyan-100/70">Código</div>
        <div className="mt-2 text-4xl font-extrabold text-cyan-100">{sponsor.code}</div>
        <div className="mt-3 flex justify-center">
          <CopyButton text={sponsor.code} label="Copiar código" title="Copiar código promocional" />
        </div>
      </div>

      <a
        href={sponsor.href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 py-3 text-sm font-bold text-white transition hover:opacity-95"
      >
        Ir a {sponsor.name} <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}
