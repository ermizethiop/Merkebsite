import { useEffect, useRef } from "react";

export default function MagneticCursor() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -200, y: -200 });
  const prevMouse = useRef({ x: -200, y: -200 });
  const smoothVel = useRef({ x: 0, y: 0 });
  const currentScale = useRef({ x: 1, y: 1, angle: 0 });
  const targetStretch = useRef(0);
  const currentStretch = useRef(0);
  const rafId = useRef(null);
  const trails = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e) => {
      prevMouse.current = { ...mouse.current };
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onTouch = (e) => {
      const t = e.touches[0];
      if (!t) return;
      prevMouse.current = { ...mouse.current };
      mouse.current = { x: t.clientX, y: t.clientY };
    };
    const onLeave = () => {
      mouse.current = { x: -200, y: -200 };
      prevMouse.current = { x: -200, y: -200 };
    };

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("touchmove", onTouch);
    document.addEventListener("mouseleave", onLeave);

    const animate = () => {
      const mx = mouse.current.x;
      const my = mouse.current.y;

      let rawVx = mx - prevMouse.current.x;
      let rawVy = my - prevMouse.current.y;

      smoothVel.current.x += (rawVx - smoothVel.current.x) * 0.12;
      smoothVel.current.y += (rawVy - smoothVel.current.y) * 0.12;

      const vx = smoothVel.current.x;
      const vy = smoothVel.current.y;
      const speed = Math.sqrt(vx * vx + vy * vy);

      targetStretch.current = Math.min(speed * 0.07, 2.0);
      currentStretch.current += (targetStretch.current - currentStretch.current) * 0.12;
      if (speed < 0.5 && currentStretch.current < 0.05) {
        currentStretch.current *= 0.92;
      }

      const stretch = currentStretch.current;
      const angle = speed > 0.1 ? Math.atan2(vy, vx) : currentScale.current.angle;

      const baseRadius = 11;
      const sx = 1 + stretch;
      const sy = 1 - stretch * 0.35;
      if (sy < 0.15) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trails.current = trails.current.filter((t) => {
        t.life -= 0.025;
        return t.life > 0;
      });
      if (speed > 2) {
        trails.current.push({ x: mx, y: my, life: 1, size: Math.min(speed * 0.5, 8) });
        if (trails.current.length > 15) trails.current.shift();
      }

      for (const t of trails.current) {
        const r = t.size * t.life * 0.5;
        const grad = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, r);
        grad.addColorStop(0, `rgba(245,166,35,${t.life * 0.2})`);
        grad.addColorStop(1, "rgba(245,166,35,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(t.x, t.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (mx > -100 && my > -100) {
        const glowGrad = ctx.createRadialGradient(mx, my, 0, mx, my, baseRadius * 5);
        glowGrad.addColorStop(0, `rgba(245,166,35,${0.08 + stretch * 0.04})`);
        glowGrad.addColorStop(1, "rgba(245,166,35,0)");
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(mx, my, baseRadius * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.save();
        ctx.translate(mx, my);
        ctx.rotate(angle);
        ctx.scale(sx, sy);

        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, baseRadius);
        grad.addColorStop(0, "rgba(255,225,200,0.95)");
        grad.addColorStop(0.15, "rgba(255,200,150,0.95)");
        grad.addColorStop(0.4, "rgba(249,115,22,0.85)");
        grad.addColorStop(0.75, "rgba(245,158,11,0.5)");
        grad.addColorStop(1, "rgba(245,130,10,0.1)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, baseRadius, 0, Math.PI * 2);
        ctx.fill();

        const innerGrad = ctx.createRadialGradient(0, -baseRadius * 0.15, 0, 0, 0, baseRadius * 0.45);
        innerGrad.addColorStop(0, "rgba(255,255,255,0.7)");
        innerGrad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = innerGrad;
        ctx.beginPath();
        ctx.arc(0, 0, baseRadius * 0.45, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        if (stretch > 0.3) {
          for (let i = 0; i < 2; i++) {
            const t = (Date.now() * 0.0008 + i * 0.8) % 1;
            const dist = baseRadius * 1.5 + t * 25;
            const a = angle + (i - 0.5) * 0.5 + (Math.random() - 0.5) * 0.3;
            const px = mx + Math.cos(a) * dist;
            const py = my + Math.sin(a) * dist;
            ctx.fillStyle = `rgba(245,166,35,${0.08 * (1 - t)})`;
            ctx.beginPath();
            ctx.arc(px, py, 1.5 * (1 - t), 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      rafId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
}
