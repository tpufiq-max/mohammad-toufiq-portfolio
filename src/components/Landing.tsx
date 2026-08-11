import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./styles/Landing.css";

const Typewriter = ({ words = [] }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (!words.length) return;
    const timeout = window.setTimeout(() => {
      if (forward) {
        if (subIndex < words[index].length) {
          setSubIndex((s) => s + 1);
        } else {
          setForward(false);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex((s) => s - 1);
        } else {
          setForward(true);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, forward ? 80 : 40);
    return () => window.clearTimeout(timeout);
  }, [subIndex, index, forward, words]);

  return <span className="typewriter">{words[index].slice(0, subIndex)}</span>;
};


const Landing = ({ children }: PropsWithChildren) => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="landing-section" id="landing">
      <div className="landing-content">
        <div className="hero-text">
          <p className="greeting">Hi, I'm</p>
          <h1 className="hero-name">Mohammad Toufiq Maniyar</h1>
          <h3 className="hero-sub">
            <Typewriter
              words={[
                "Full Stack Developer",
                "Java & Spring Boot Developer",
                "AI Application Developer",
              ]}
            />
          </h3>
          <div className="role-pill">Java Developer</div>
          <p className="summary">
            Final-year Computer Science (Cloud Computing) student passionate about building scalable web applications, AI-powered systems, cloud-based solutions, and modern user experiences.
          </p>

          <div className="hero-ctas">
            <a className="btn primary" href="#projects">
              View Projects
            </a>
            <a className="btn outline" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="hero-stats" ref={statsRef}>
            <motion.div
              className="stat-card"
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 20, opacity: 0 }}
              viewport={{ once: true }}
            >
              <h4>70+</h4>
              <p>LeetCode Problems</p>
            </motion.div>
            <motion.div
              className="stat-card"
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 20, opacity: 0 }}
              viewport={{ once: true }}
            >
              <h4>5+</h4>
              <p>Projects Built</p>
            </motion.div>
            <motion.div
              className="stat-card"
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 20, opacity: 0 }}
              viewport={{ once: true }}
            >
              <h4>1</h4>
              <p>Internship</p>
            </motion.div>
            <motion.div
              className="stat-card"
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 20, opacity: 0 }}
              viewport={{ once: true }}
            >
              <h4>2025</h4>
              <p>SIH Participant</p>
            </motion.div>
          </div>
        </div>

        <div className="hero-model">{children}</div>
      </div>
    </section>
  );
};

export default Landing;
