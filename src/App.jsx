import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { HomeSection } from "./Sections/HomeSection"
import { AboutSection } from "./Sections/AboutSection";
import { FaqSection } from "./Sections/FaqSection";
import { SponsorsSection } from "./Sections/SponsorSection";
import { SocialMediaSection } from "./Sections/SocialMediaSection";
import { ContactSection } from "./Sections/ContactSection";
import { NavBar } from "./Navbar";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 80,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />
      <NavBar />
      <main>
        <HomeSection />
        <AboutSection />
        <FaqSection />
        <SponsorsSection />
        <SocialMediaSection />
        <ContactSection />
      </main>
    </div>
  );
}

NavBar;

HomeSection;

AboutSection;

FaqSection;

SponsorsSection;

SocialMediaSection;

ContactSection;

export default App;
