"use client";

import { useEffect, useRef } from "react";

export function FluidCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    let time = 0;

    const render = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Subtle ambient wave grid
      ctx.strokeStyle = "rgba(245, 242, 237, 0.03)";
      ctx.lineWidth = 1;

      const spacing = 80;
      for (let x = 0; x < width; x += spacing) {
        ctx.beginPath();
        for (let y = 0; y < height; y += 20) {
          const wave = Math.sin(x * 0.005 + y * 0.005 + time) * 8;
          if (y === 0) ctx.moveTo(x + wave, y);
          else ctx.lineTo(x + wave, y);
        }
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
}
