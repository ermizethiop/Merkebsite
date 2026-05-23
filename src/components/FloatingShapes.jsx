const shapes = [
  { type: "triangle", size: 90, class: "animate-shape-1", style: { top: "12%", left: "5%", width: 90, height: 90 } },
  { type: "hexagon", size: 120, class: "animate-shape-2", style: { top: "8%", right: "8%", width: 120, height: 120 } },
  { type: "square", size: 70, class: "animate-shape-3", style: { bottom: "18%", right: "10%", width: 70, height: 70 } },
  { type: "triangle", size: 140, class: "animate-shape-4", style: { bottom: "12%", left: "6%", width: 140, height: 140 } },
  { type: "hexagon", size: 65, class: "animate-shape-5", style: { top: "45%", left: "3%", width: 65, height: 65 } },
  { type: "square", size: 100, class: "animate-shape-6", style: { top: "38%", right: "5%", width: 100, height: 100 } },
];

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
      {shapes.map((s, i) => {
        if (s.type === "triangle") {
          const h = s.size * 0.866;
          return (
            <svg
              key={i}
              className={`absolute opacity-[0.12] ${s.class}`}
              style={{ ...s.style, width: s.size, height: h, top: s.style.top, left: s.style.left, right: s.style.right, bottom: s.style.bottom }}
              viewBox={`0 0 ${s.size} ${h}`}
            >
              <polygon points={`${s.size / 2},0 ${s.size},${h} 0,${h}`} fill="none" stroke="#F5A623" strokeWidth="2" />
            </svg>
          );
        }
        if (s.type === "hexagon") {
          const r = s.size / 2;
          const pts = [];
          for (let j = 0; j < 6; j++) {
            const a = (Math.PI / 3) * j - Math.PI / 2;
            pts.push(`${r + r * Math.cos(a)},${r + r * Math.sin(a)}`);
          }
          return (
            <svg
              key={i}
              className={`absolute opacity-[0.12] ${s.class}`}
              style={{ ...s.style, width: s.size, height: s.size, top: s.style.top, left: s.style.left, right: s.style.right, bottom: s.style.bottom }}
              viewBox={`0 0 ${s.size} ${s.size}`}
            >
              <polygon points={pts.join(" ")} fill="none" stroke="#F5A623" strokeWidth="2" />
            </svg>
          );
        }
        return (
          <div
            key={i}
            className={`absolute opacity-[0.12] border-2 border-[#F5A623] rounded-sm ${s.class}`}
            style={{ ...s.style, top: s.style.top, left: s.style.left, right: s.style.right, bottom: s.style.bottom }}
          />
        );
      })}
    </div>
  );
}
