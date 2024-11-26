
import { motion } from "framer-motion";
function HomeSection() {
    return (
      <section id="home" className="hero-section glass-card">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="glitch" data-text="Hack-O-Nauts">
            Hack-Nocturn
          </h1>
          <p className="date">21-22nd February</p>
          <button className="register-btn">Register Now</button>
        </motion.div>
      </section>
    );
  }

  export {HomeSection};