"use client";
import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadFull } from "@tsparticles/engine";

export default function BackgroundAnimation() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#0a0a0a" },
        particles: {
          number: { value: 30, density: { enable: true, value_area: 800 } },
          color: { value: "#00bfff" },
          shape: { type: "circle" },
          opacity: { value: 0.2, random: true },
          size: { value: 20, random: { enable: true, minimumValue: 8 } },
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