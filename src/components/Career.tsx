import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Cognifyz Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked on frontend development, responsive interfaces, UI debugging,
              and Git/GitHub collaboration while contributing to production-ready
              web solutions and internal engineering workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
