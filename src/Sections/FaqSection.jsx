import { motion } from "framer-motion";
function FaqSection() {
    const faqs = [
      {
        question: "Who can participate?",
        answer: "Any college student with a valid ID can participate.",
      },
      {
        question: "What's the team size?",
        answer: "Teams can have 2-4 members.",
      },
      {
        question: "Is it free?",
        answer: "Yes, participation is completely free!",
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

  export {FaqSection};