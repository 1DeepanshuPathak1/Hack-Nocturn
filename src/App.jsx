import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { useCallback } from "react";

function App() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
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
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
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
      <nav className="navbar glass">
        <div className="nav-logo">Hack-Nocturn</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
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

function HomeSection() {
  return (
    <section id="home" className="hero-section glass-card">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="glitch" data-text="Hack-O-Nauts">Hack-Nocturn</h1>
        <p className="date">21-22nd February</p>
        <button className="register-btn">Register Now</button>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="about-section glass-card">
      <div data-aos="fade-up">
        <h2>About</h2>
        <div className="about-content">
          <motion.div 
            className="about-card glass"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>24 Hours</h3>
            <p>Non-stop innovation and coding</p>
          </motion.div>
          <motion.div 
            className="about-card glass"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Inter-College</h3>
            <p>Connect with peers from different institutions</p>
          </motion.div>
          <motion.div 
            className="about-card glass"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Innovation</h3>
            <p>Transform your ideas into reality</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      question: "Who can participate?",
      answer: "Any college student with a valid ID can participate."
    },
    {
      question: "What's the team size?",
      answer: "Teams can have 2-4 members."
    },
    {
      question: "Is it free?",
      answer: "Yes, participation is completely free!"
    },
  ];

  return (
    <section id="faq" className="faq-section glass-card">
      <h2 data-aos="fade-up">Frequently Asked Questions</h2>
      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <motion.div 
            className="faq-card glass"
            data-aos="fade-up" 
            data-aos-delay={index * 100} 
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SponsorsSection() {
  return (
    <section id="sponsors" className="sponsors-section glass-card">
      <h2 data-aos="fade-up">Our Sponsors</h2>
      <div className="sponsors-carousel">
        {[1, 2, 3, 4, 5].map((num) => (
          <motion.div 
            className="sponsor-card glass"
            key={num}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={`https://via.placeholder.com/150/2a2a2a/ffffff?text=Sponsor${num}`} alt={`Sponsor ${num}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SocialMediaSection() {
  return (
    <section id="social-media" className="social-section glass-card">
      <h2 data-aos="fade-up">Connect With Us</h2>
      <div className="social-links" data-aos="fade-up">
        <motion.a 
          href="#" 
          className="social-icon glass"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Instagram
        </motion.a>
        <motion.a 
          href="#" 
          className="social-icon glass"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Twitter
        </motion.a>
        <motion.a 
          href="#" 
          className="social-icon glass"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          LinkedIn
        </motion.a>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section glass-card">
      <h2 data-aos="fade-up">Get in Touch</h2>
      <div className="contact-content glass" data-aos="fade-up">
        <div className="contact-info">
          <p>📧 hackonauts@example.com</p>
          <p>📱 +1234567890</p>
          <p>📍 Sir M Visvesvaraya Institute of Technology, Bangalore</p>
        </div>
      </div>
    </section>
  );
}

export default App;