import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleNetwork() {
  return (
    <ParticlesProvider
      init={async (engine) => {
        await loadSlim(engine);
      }}
    >
      <Particles
        id="tsparticles"
        className="absolute inset-0 pointer-events-none"
        options={{
          particles: {
            number: { value: 80, density: { enable: true } },
            color: { value: "#F5A623" },
            shape: { type: "circle" },
            opacity: { value: { min: 0.3, max: 0.7 } },
            size: { value: { min: 2, max: 5 }, random: true },
            links: {
              enable: true,
              distance: 180,
              color: "#F5A623",
              opacity: 0.2,
              width: 1.5,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "bounce" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "attract" },
              resize: true,
            },
            modes: {
              attract: {
                distance: 200,
                duration: 0.4,
                speed: 0.3,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
  );
}
