"use client";
import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function BackgroundAnimation() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#0a0a0a" },
        particles: {
          number: { value: 30, density: { enable: true, } },
          color: { value: "#00bfff" },
          shape: { type: "circle" },
          opacity: { value: 0.2, },
          size: { value: 20, },
          move: { enable: true, speed: 1, direction: "none", outModes: "out" },
        },
        interactivity: {
          events: { onHover: { enable: false }, onClick: { enable: false } },
        },
        detectRetina: true,
      }}
    />
  );
} 