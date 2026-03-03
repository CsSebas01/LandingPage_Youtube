"use client";

import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

const NS = "kliptt0";
const KEY = "landing_views";

export default function VisitorBadge() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;
    const sessionKey = "view-tracked-v1";

    const run = async () => {
      try {
        const shouldHit = !sessionStorage.getItem(sessionKey);
        const url = shouldHit
          ? `https://api.countapi.xyz/hit/${NS}/${KEY}`
          : `https://api.countapi.xyz/get/${NS}/${KEY}`;

        const res = await fetch(url);
        const data = (await res.json()) as { value?: number };
        if (shouldHit) sessionStorage.setItem(sessionKey, "1");
        if (alive && typeof data.value === "number") setViews(data.value);
      } catch {
        if (alive) setViews(null);
      }
    };

    void run();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className="fixed left-1/2 top-3 z-[70] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#07101d]/80 px-3 py-2 text-xs text-white/70 backdrop-blur-xl sm:left-3 sm:top-1/2 sm:-translate-x-0 sm:-translate-y-1/2">
      <div className="flex items-center gap-2">
        <Eye className="h-4 w-4 text-cyan-200/80" />
        <span>{views !== null ? `${views} visitas` : "Visitas"}</span>
      </div>
    </div>
  );
}
