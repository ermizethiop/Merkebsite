export default function GridPulse() {
  const gridStyle = {
    backgroundImage: [
      "linear-gradient(rgba(245,166,35,0.07) 1px, transparent 1px)",
      "linear-gradient(90deg, rgba(245,166,35,0.07) 1px, transparent 1px)",
    ].join(","),
    backgroundSize: "40px 40px",
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0, perspective: "800px" }}>
      <div
        className="absolute inset-0"
        style={{ transform: "rotateX(60deg)", transformOrigin: "bottom center", ...gridStyle }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#F5A623] animate-grid-pulse"
        style={{ filter: "blur(80px)" }}
      />
    </div>
  );
}
