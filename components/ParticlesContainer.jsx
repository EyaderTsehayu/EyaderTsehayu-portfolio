"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async () => {}, []);
  const options = {
    /* custom options */
    fullScreen: { enable: false },
    background: {
      color: {
        value: "",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: { quantity: 90 },
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
    particles: {
      color: {
        //value: "#e68e2e",
        value: "#4942E4",
      },
      links: {
        //  color: "#f5d393",
        color: "#1D24CA",
        distance: 150,
        enable: true,
        opacity: "0.5",
        width: 1,
      },
      collision: { enable: true },
      move: {
        direction: "none",
        enable: "true",
        outModes: { default: "bounce" },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80,
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
      detectionRetina: true,
    },
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="w-full h-full absolute translate-z-0 "
    />
  );
};

export default ParticlesContainer;
