import { motion } from "framer-motion";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    title: "AI-Powered Drug Understanding System",
    category: "Healthcare · AI · OCR",
    description:
      "Healthcare platform that scans medicine labels using OCR, provides multilingual drug information, detects drug interactions, and delivers AI-powered health insights.",
    badges: ["Java", "Django", "React.js", "OCR", "REST APIs", "MySQL"],
    features: [
      "OCR Medicine Scanner",
      "Drug Interaction Detection",
      "Multilingual Support",
      "AI Health Assistant",
      "Medicine Information Lookup",
    ],
    image: "/images/project1.svg",
    github: "https://github.com/tpufiq-max/ai-drug-system",
    demo: "https://github.com/tpufiq-max/ai-drug-system",
  },
  {
    title: "Hostel Management System",
    category: "ERP · Full Stack",
    description:
      "Complete hostel ERP system for managing students, rooms, attendance, fees, complaints, and analytics from one dashboard.",
    badges: ["Spring Boot", "React.js", "MySQL", "REST APIs"],
    features: [
      "Student Management",
      "Attendance Tracking",
      "Fee Management",
      "Complaint Management",
      "Room Allocation",
      "Analytics Dashboard",
    ],
    image: "/images/project2.svg",
    github: "https://github.com/tpufiq-max/hostel-management",
    demo: "https://github.com/tpufiq-max/hostel-management",
  },
  {
    title: "Blood Donation & Emergency Request System",
    category: "Health · Emergency",
    description:
      "Platform connecting blood donors with patients during emergencies through real-time requests, notifications, and request tracking.",
    badges: ["Java", "Spring Boot", "React.js", "MySQL"],
    features: [
      "Donor Registration",
      "Emergency Requests",
      "Blood Group Search",
      "Real-time Notifications",
      "Request Tracking",
    ],
    image: "/images/project3.svg",
    github: "https://github.com/tpufiq-max/blood-donation",
    demo: "https://github.com/tpufiq-max/blood-donation",
  },
  {
    title: "Music Recommendation System",
    category: "ML · Personalization",
    description:
      "Machine learning recommendation system that suggests personalized songs based on user preferences and listening history.",
    badges: ["Python", "Machine Learning", "React.js", "MongoDB"],
    features: [
      "Personalized Recommendations",
      "Playlist Generation",
      "Genre Prediction",
      "User Preference Analysis",
      "Smart Search",
    ],
    image: "/images/project4.svg",
    github: "https://github.com/tpufiq-max/music-recommender",
    demo: "https://github.com/tpufiq-max/music-recommender",
  },
  {
    title: "Simon Game",
    category: "Interactive · Game",
    description:
      "Interactive memory game that challenges players to repeat increasingly complex color sequences with responsive gameplay and sound feedback.",
    badges: ["HTML", "CSS", "JavaScript"],
    features: [
      "Memory Training",
      "Level Progression",
      "Sound Effects",
      "High Score Tracking",
      "Responsive Design",
    ],
    image: "/images/project5.svg",
    github: "https://github.com/tpufiq-max/simon-game",
    demo: "https://github.com/tpufiq-max/simon-game",
  },
];

const Work = () => {
  return (
    <section className="work-section" id="projects">
      <div className="work-container section-container">
        <div className="work-headline">
          <h2>
            Featured <span>Projects</span>
          </h2>
          <p>
            Recent full-stack and AI applications built with Java, Spring Boot,
            React, Python, and modern cloud-enabled architectures.
          </p>
        </div>

        <div className="work-grid">
          {projects.map((project) => (
            <motion.article
              className="project-card"
              key={project.title}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <div className="project-hero">
                <WorkImage
                  image={project.image}
                  alt={project.title}
                  link={project.demo}
                />
              </div>
              <div className="project-details">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-badges">
                  {project.badges.map((badge) => (
                    <span key={badge}>{badge}</span>
                  ))}
                </div>
                <ul className="project-features">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-btn">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-btn ghost">
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
