import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss,
  SiSpringboot,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiTensorflow,
  SiOpenai,
} from "react-icons/si";
import {
  FaServer,
  FaDatabase,
  FaCloud,
  FaBrain,
  FaCodeBranch,
  FaJava,
  FaLaptopCode,
} from "react-icons/fa";
import "./styles/TechStack.css";

const stacks = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", icon: FaJava, caption: "Object oriented backend" },
      { name: "Python", icon: SiPython, caption: "Machine learning & scripting" },
      { name: "JavaScript", icon: SiJavascript, caption: "Interactive web experiences" },
      { name: "SQL", icon: FaDatabase, caption: "Relational data modeling" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: SiReact, caption: "Component-driven UIs" },
      { name: "HTML5", icon: SiHtml5, caption: "Semantic markup" },
      { name: "CSS3", icon: SiCss, caption: "Responsive styling" },
      { name: "Responsive Design", icon: FaCloud, caption: "Mobile-first layouts" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", icon: SiSpringboot, caption: "Java API development" },
      { name: "Django", icon: SiDjango, caption: "Python backend services" },
      { name: "REST APIs", icon: FaServer, caption: "Modern web services" },
      { name: "API Integration", icon: FaCodeBranch, caption: "Third-party connectivity" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql, caption: "Relational database design" },
      { name: "PostgreSQL", icon: SiPostgresql, caption: "Reliable transactional storage" },
      { name: "MongoDB", icon: SiMongodb, caption: "Flexible document data" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit, caption: "Version control" },
      { name: "GitHub", icon: SiGithub, caption: "Source code collaboration" },
      { name: "VS Code", icon: FaLaptopCode, caption: "Developer workflow" },
    ],
  },
  {
    category: "Core CS",
    items: [
      { name: "Data Structures & Algorithms", icon: FaBrain, caption: "Problem solving" },
      { name: "OOP", icon: FaCodeBranch, caption: "Clean architecture" },
      { name: "DBMS", icon: FaDatabase, caption: "Data design" },
      { name: "Operating Systems", icon: FaCloud, caption: "System fundamentals" },
      { name: "Computer Networks", icon: FaCloud, caption: "Distributed systems" },
    ],
  },
  {
    category: "Cloud & AI",
    items: [
      { name: "Cloud Computing", icon: FaCloud, caption: "Scalable deployments" },
      { name: "OCR", icon: SiOpenai, caption: "Text recognition solutions" },
      { name: "Machine Learning", icon: SiTensorflow, caption: "Predictive intelligence" },
      { name: "Edge Computing", icon: FaCloud, caption: "Low-latency inference" },
      { name: "Fog Computing", icon: FaCloud, caption: "Distributed compute" },
    ],
  },
];

const categoryOptions = ["All", ...stacks.map((stack) => stack.category)];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const items = useMemo(
    () =>
      stacks
        .filter((stack) => activeCategory === "All" || stack.category === activeCategory)
        .flatMap((stack) => stack.items.map((item) => ({ ...item, category: stack.category }))),
    [activeCategory]
  );

  return (
    <section className="techstack-section" id="techstack">
      <div className="techstack-container">
        <div className="techstack-header">
          <h2>Tech Stack</h2>
          <div className="techstack-filter">
            {categoryOptions.map((category) => (
              <button
                key={category}
                className={`tech-filter-btn ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="techstack-grid">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                className="tech-card"
                key={`${item.category}-${item.name}`}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <div className="tech-card-icon">
                  <Icon />
                </div>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.caption}</p>
                </div>
                <span className="tech-card-badge">{item.category}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
