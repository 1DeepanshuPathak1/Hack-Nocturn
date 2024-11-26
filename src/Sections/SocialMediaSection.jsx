import { motion } from "framer-motion";
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
  export{SocialMediaSection};