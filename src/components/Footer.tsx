import { motion } from "framer-motion";
import "./styles/Footer.css";

const Footer = () => {
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#career" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer-section">
      <div className="footer-grid section-container">
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="footer-title">Mohammad Toufiq Maniyar</p>
          <p className="footer-role">Full Stack Developer</p>
          <p className="footer-description">Java & Spring Boot Developer · AI Application Developer</p>
        </motion.div>

        <motion.div
          className="footer-block"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="footer-block footer-branding"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          <h4>About</h4>
          <p className="footer-description">
            This portfolio is the primary contact destination. Find all social and contact methods in the contact section above.
          </p>
        </motion.div>
      </div>

      <div className="footer-bottom section-container">
        <p>© 2026 Mohammad Toufiq Maniyar. All Rights Reserved.</p>
        <p>Designed & Developed by Mohammad Toufiq Maniyar.</p>
      </div>
    </footer>
  );
};

export default Footer;
