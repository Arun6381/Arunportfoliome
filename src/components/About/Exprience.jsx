import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUniversity } from "react-icons/fa";
import { MdOutlineSelfImprovement } from "react-icons/md";

import "./Expri.css";
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#faa507">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2021"
          iconStyle={{ background: "#faa507", color: "#fff" }}
          icon={<FaUniversity />}
        >
          <h3 className="vertical-timeline-element-title">
            RGM High School, Pethappampatti, Coimbatore, TamilNadu
          </h3>
          <p className="para"> High School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2024"
          iconStyle={{ background: "#faa507", color: "#fff" }}
          icon={<FaUniversity />}
        >
          <h3 className="vertical-timeline-element-title">
            NGM College, Coimbatore, TamilNadu
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p className="para"> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="3 Months"
          iconStyle={{ background: "#faa507", color: "#fff" }}
          icon={<MdOutlineSelfImprovement />}
        >
          <h3 className="vertical-timeline-element-title">
            Learning Full Stack Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Self Lerning,</h4>
          <p className="para">
            Open Source Materials, Developed many projects that are related to
            frontend and backend development.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
