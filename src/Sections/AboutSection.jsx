import { motion } from "framer-motion";

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
  export {AboutSection};