import "./styles/Skills.css";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  const skills = [
    { title: "Programming", desc: "Java · Python · JavaScript · SQL" },
    { title: "Frontend", desc: "React.js · HTML5 · CSS3 · Responsive" },
    { title: "Backend", desc: "Spring Boot · Django · REST APIs" },
    { title: "Databases", desc: "MySQL · PostgreSQL · MongoDB" },
    { title: "Cloud & AI", desc: "Cloud Computing · Machine Learning · OCR" },
    { title: "Core CS", desc: "DSA · OOP · DBMS · OS · Networking" },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <motion.div
              className="skill-card"
              key={s.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
