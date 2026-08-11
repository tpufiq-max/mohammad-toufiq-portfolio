import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/Navbar.css";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActive(id);
          }
        });
      },
      { rootMargin: "-10% 0px -60% 0px", threshold: 0.1 }
    );
    NAV_ITEMS.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <div className="nav-left">
          <a className="nav-logo" href="#landing" onClick={() => handleNav("about")}>
            MTM
          </a>
          <div className="nav-sub">
            Mohammad Toufiq Maniyar — Full Stack & AI Developer
          </div>
        </div>
        <nav className="nav-center" aria-label="Primary navigation">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className={active === item.id ? "active" : ""}>
                <button onClick={() => handleNav(item.id)}>{item.label}</button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-right">
          <a
            className="resume-btn"
            href="/resume.pdf"
            download="resume.pdf"
            aria-label="Download resume"
          >
            Resume
          </a>
          <button
            className="hamburger"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button className="mobile-close" onClick={() => setMobileOpen(false)}>
              ×
            </button>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button onClick={() => handleNav(item.id)}>{item.label}</button>
                </li>
              ))}
            </ul>
            <a
              className="mobile-resume"
              href="/resume.pdf"
              download="resume.pdf"
              aria-label="Download resume"
            >
              Download Resume
            </a>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
