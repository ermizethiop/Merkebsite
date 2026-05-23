export default function GradientBlobs() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <div
        className="absolute -top-32 -left-32 w-[800px] h-[800px] rounded-full animate-blob-1"
        style={{ background: "#F5A623", filter: "blur(150px)", opacity: 0.25 }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full animate-blob-2"
        style={{ background: "#FF6B00", filter: "blur(150px)", opacity: 0.18 }}
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full animate-blob-3"
        style={{ background: "#00E5C3", filter: "blur(150px)", opacity: 0.12 }}
      />
    </div>
  );
}
