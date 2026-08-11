import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "./styles/SocialIcons.css";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/tpufiq-max",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mohammed-toufiq-maniyar-685877295",
    icon: <FaLinkedin />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/txufiqqq_18/?hl=en",
    icon: <FaInstagram />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@mohammedtoufiqmaniyar7768",
    icon: <FaYoutube />,
  },
  {
    label: "Email",
    href: "mailto:toufiqmaniyar484@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "Phone",
    href: "tel:+916362980550",
    icon: <FaPhoneAlt />,
  },
];

const SocialIcons = () => {
  return (
    <nav className="social-sidebar" aria-label="Social links">
      <div className="social-sidebar-inner">
        {links.map((link) => (
          <motion.a
            key={link.label}
            className="social-sidebar-link"
            href={link.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <span className="sidebar-icon">{link.icon}</span>
            <span className="sidebar-label">{link.label}</span>
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default SocialIcons;
