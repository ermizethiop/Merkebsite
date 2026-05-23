import { useEffect, useRef } from "react";

export default function ScanlineOverlay({ targetSelector }) {
  const glitchRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const el = document.querySelector(targetSelector);
      if (!el) return;
      const sliceHeight = Math.random() * 6 + 3;
      const slicePos = Math.random() * 80 + 10;
      el.style.clipPath = `inset(${slicePos}% 0 ${100 - slicePos - sliceHeight}% 0)`;
      el.style.transform = `translateX(${(Math.random() - 0.5) * 4}px)`;
      setTimeout(() => {
        el.style.clipPath = "";
        el.style.transform = "";
      }, 200);
    }, 6000);
    return () => clearInterval(interval);
  }, [targetSelector]);

  return (
    <div
      ref={glitchRef}
      className="absolute inset-0 pointer-events-none"
      style={{
        zIndex: 1,
        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
      }}
    />
  );
}
