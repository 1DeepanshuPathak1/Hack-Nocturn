import { motion } from "framer-motion";
import GlitchText from "./Glitch";

function HomeSection() {
  return (
    <section
      id="home"
      className="hero-section glass-card"
      style={{ scrollBehavior: "smooth" }}
    >
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <GlitchText size="3.8rem" heading="</Hack-NocTurne>" />
        <p className="date">21-22nd February</p>
        <button className="register-btn">Register Now</button>
      </motion.div>
    </section>
  );
}

export { HomeSection };
