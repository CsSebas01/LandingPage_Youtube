"use client";

import { useEffect, useRef } from "react";

type Drop = {
  x: number;
  y: number;
  len: number;
  speed: number;
  alpha: number;
};

export default function Rain({ intensity = 90 }: { intensity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    const drops: Drop[] = [];
    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      drops.length = 0;
      for (let i = 0; i < intensity; i++) {
        drops.push({
          x: rand(0, canvas.clientWidth),
          y: rand(-canvas.clientHeight, canvas.clientHeight),
          len: rand(10, 28),
          speed: rand(1.2, 2.6),
          alpha: rand(0.14, 0.3),
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      for (const d of drops) {
        d.y += d.speed;
        if (d.y > canvas.clientHeight + 30) {
          d.y = rand(-80, -10);
          d.x = rand(0, canvas.clientWidth);
        }

        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.len);
        ctx.strokeStyle = `rgba(120, 220, 255, ${d.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [intensity]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />;
}
