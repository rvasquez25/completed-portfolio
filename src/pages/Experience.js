import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faHeadset,
  faBook,
  faRocket,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Experience.css";
import resume from "../assets/Resume1.pdf";
import resumePic from "../assets/resume.png";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#131313">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">
            Pebble Hills High School, El Paso, TX
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2020"
          iconStyle={{ background: "#131313", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBolt} />}
        >
          <h3 className="vertical-timeline-element-title">All-Star Electric</h3>
          <p>
            Manage inventory and keep track of supplies to prepare for the next
            job site. Prepare job sites by digging trenches, installing wiring,
            drilling holes, installing electrical boxes, and unloading tools.
            Worked together with a team to accomplish tasks given to us in a
            deadline and helped provide a clean and safe workplace.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#131313", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faHeadset} />}
        >
          <h3 className="vertical-timeline-element-title">
            Technology Suppport at The University of Texas at El Paso
          </h3>
          <p>
            Addressing issues daily via phone, email, or chat regarding password
            resets, account activations, software installations, remote
            sessions, and creating requests for documentation purposes. As well
            as providing customer service with patience and kindness and
            maintaining a clean workspace when working on campus
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBook} />}
        >
          <h3 className="vertical-timeline-element-title">
            The University of Texas at El Paso, El Paso, TX
          </h3>
          <p>Undergraduate, Computer Science, SENIOR</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - Present"
          iconStyle={{ background: "#131313", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faRocket} />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer at SPS ARS Aerial Remote Sensing
          </h3>
          <p>
          Currently assigned as Team Lead in efforts to get the company self-compliant through NIST MEP Cybersecurity Handbook
          . Planning and attending weekly meetings to provide and receive work-related updates. Assigning tasks to the team in effor
          ts to become self-compliant through NIST. Accomplished tasks assigned by a Senior Developer by using problem-solving skills t
          o resolve issues or add web features.

          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className="line"></div>
      <div className="resumeTitle">
        <h1>
          Resume
        </h1>
      </div>
      <div className="downloadCV">
        <a href={resume} target="_blank" rel="noreferrer">
          <span>Download</span>
          <img src={resumePic} alt={""}></img>
        </a>
      </div>
    </div>
  );
}

export default Experience;
