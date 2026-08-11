import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaLaptopCode,
  FaRocket,
  FaBriefcase,
} from "react-icons/fa";
import "./styles/Achievements.css";

const cards = [
  {
    title: "Smart India Hackathon 2025",
    icon: <FaTrophy />,
    description:
      "Participated in SIH and worked on Smart Automated Dustbin solution for smart city innovation.",
  },
  {
    title: "70+ LeetCode Problems Solved",
    icon: <FaLaptopCode />,
    description:
      "Solved problems covering arrays, recursion, linked lists, sorting, searching, and DSA concepts.",
  },
  {
    title: "Full Stack Projects",
    icon: <FaRocket />,
    description:
      "Built multiple real-world applications using Spring Boot, React.js, Django, and databases.",
  },
  {
    title: "Web Development Internship",
    icon: <FaBriefcase />,
    description:
      "Completed internship at Cognifyz Technologies and worked on frontend development and responsive UI.",
  },
];

const timeline = [
  { year: "2023", label: "Started B.E Computer Science" },
  { year: "2025", label: "Built Multiple Projects" },
  { year: "2025", label: "SIH Participation" },
  { year: "2026", label: "Web Development Internship" },
  { year: "2026", label: "Full Stack Development Portfolio" },
];

const Achievements = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ problems: 0, projects: 0, internship: 0, year: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = performance.now();
    const duration = 1200;
    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCounts({
        problems: Math.floor(70 * progress),
        projects: Math.floor(5 * progress),
        internship: Math.floor(1 * progress),
        year: Math.floor(2025 * progress),
      });
      if (progress < 1) window.requestAnimationFrame(animate);
    };

    window.requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <section className="achievements-section" id="achievements" ref={sectionRef}>
      <div className="achievements-header">
        <p className="section-eyebrow">Achievements & Milestones</p>
        <h2>Highlights of my journey in software development, problem solving, and innovation.</h2>
      </div>

      <div className="achievement-stats">
        <motion.div whileHover={{ y: -6 }} className="achievement-stat-card">
          <span className="stat-icon">🏆</span>
          <div>
            <h3>{isVisible ? counts.year : 2025}</h3>
            <p>SIH Participant</p>
          </div>
        </motion.div>
        <motion.div whileHover={{ y: -6 }} className="achievement-stat-card">
          <span className="stat-icon">💻</span>
          <div>
            <h3>{isVisible ? `${counts.problems}+` : "70+"}</h3>
            <p>LeetCode Problems</p>
          </div>
        </motion.div>
        <motion.div whileHover={{ y: -6 }} className="achievement-stat-card">
          <span className="stat-icon">🚀</span>
          <div>
            <h3>{isVisible ? `${counts.projects}+` : "5+"}</h3>
            <p>Projects Built</p>
          </div>
        </motion.div>
        <motion.div whileHover={{ y: -6 }} className="achievement-stat-card">
          <span className="stat-icon">🌐</span>
          <div>
            <h3>{isVisible ? counts.internship : 1}</h3>
            <p>Internship</p>
          </div>
        </motion.div>
      </div>

      <div className="achievement-grid">
        {cards.map((card, index) => (
          <motion.article
            className="achievement-card"
            key={card.title}
            whileHover={{ y: -10, scale: 1.02 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
          >
            <div className="achievement-card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.article>
        ))}
      </div>

      <div className="achievement-timeline">
        <div className="timeline-heading">
          <p className="section-eyebrow">Journey Timeline</p>
          <h3>Progress as a developer and innovator.</h3>
        </div>
        <div className="timeline-list">
          {timeline.map((item) => (
            <div className="timeline-item" key={item.year + item.label}>
              <span className="timeline-year">{item.year}</span>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
