"use client";

import React from "react";

export default function ShineCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5",
        "transition will-change-transform hover:-translate-y-0.5 hover:bg-white/10",
        "hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]",
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition before:duration-300",
        "before:bg-[radial-gradient(800px_circle_at_var(--mx)_var(--my),rgba(34,211,238,0.16),transparent_40%)]",
        "hover:before:opacity-100",
        "after:pointer-events-none after:absolute after:-inset-x-24 after:-inset-y-12 after:translate-x-[-120%]",
        "after:rotate-12 after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent",
        "after:transition after:duration-700 hover:after:translate-x-[120%]",
        className,
      ].join(" ")}
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        el.style.setProperty("--mx", `${mx}px`);
        el.style.setProperty("--my", `${my}px`);
      }}
    >
      {children}
    </div>
  );
}
