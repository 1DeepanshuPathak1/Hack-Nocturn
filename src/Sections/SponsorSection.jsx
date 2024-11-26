import { motion } from "framer-motion";
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
              <img
                src={`https://via.placeholder.com/150/2a2a2a/ffffff?text=Sponsor${num}`}
                alt={`Sponsor ${num}`}
              />
            </motion.div>
          ))}
        </div>
      </section>
    );
  }
  export {SponsorsSection};