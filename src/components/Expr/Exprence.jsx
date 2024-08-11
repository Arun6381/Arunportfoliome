import "./Exp.css";

function Experience() {
  return (
    <div className="experience">
      <div className="vertical-timeline">
        <div className="vertical-timeline-element">
          <div className="vertical-timeline-element-icon education-icon">
            <div className="icon">🎓</div>
          </div>
          <div className="vertical-timeline-element-content">
            <span className="vertical-timeline-element-date">2020 - 2021</span>
            <h3 className="vertical-timeline-element-title">
              RGM High School, Pethappampatti, Coimbatore, TamilNadu
            </h3>
            <p className="para">High School</p>
          </div>
        </div>

        <div className="vertical-timeline-element">
          <div className="vertical-timeline-element-icon education-icon">
            <div className="icon">🎓</div>
          </div>
          <div className="vertical-timeline-element-content">
            <span className="vertical-timeline-element-date">2021 - 2024</span>
            <h3 className="vertical-timeline-element-title">
              NGM College, Coimbatore, TamilNadu
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor's Degree
            </h4>
            <p className="para">Computer Science</p>
          </div>
        </div>

        <div className="vertical-timeline-element">
          <div className="vertical-timeline-element-icon work-icon">
            <div className="icon">📄</div>
          </div>
          <div className="vertical-timeline-element-content">
            <span className="vertical-timeline-element-date">3 Months</span>
            <h3 className="vertical-timeline-element-title">
              Learning Full Stack Development
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Self Learning
            </h4>
            <p className="para">
              Open Source Materials, Developed many projects related to frontend
              and backend development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
