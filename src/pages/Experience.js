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
  faLaptopCode,
  faCarBurst,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#2d3a52">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2015 - May 2019"
          iconStyle={{ background: "#1a2235", color: "#60a5fa" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">
            Pebble Hills High School, El Paso, TX
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2016 - August 2020"
          iconStyle={{ background: "#3b82f6", color: "#f8fafc" }}
          icon={<FontAwesomeIcon icon={faBolt} />}
        >
          <h3 className="vertical-timeline-element-title">
            All-Star Electric - Apprentice Electrician
          </h3>
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
          date="July 2019 - October 2021"
          iconStyle={{ background: "#1a2235", color: "#60a5fa" }}
          icon={<FontAwesomeIcon icon={faHeadset} />}
        >
          <h3 className="vertical-timeline-element-title">
            UTEP - Technology Support
          </h3>
          <p>
            Addressing issues daily via phone, email, or chat regarding password
            resets, account activations, software installations, remote
            sessions, and creating requests for documentation purposes. As well
            as providing customer service with patience and kindness and
            maintaining a clean workspace when working on campus.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="October 2021 - May 2023"
          iconStyle={{ background: "#3b82f6", color: "#f8fafc" }}
          icon={<FontAwesomeIcon icon={faRocket} />}
        >
          <h3 className="vertical-timeline-element-title">
            SPS ARS - Web Developer/Network Operations
          </h3>
          <p>
            Enhanced unmanned aircraft tracking system capabilities by developing full-stack features, including backend API services and frontend debugging using Quasar, Python, and RESTful APIs. Led a company-wide audit to achieve NIST MEP cybersecurity self-compliance by aligning certifications and software architecture with security framework requirements. Reduced system downtime by automating health monitoring across 50+ devices through custom Python scripts and REST APIs built with Flask and Webargs.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2023 - August 2023"
          iconStyle={{ background: "#1a2235", color: "#60a5fa" }}
          icon={<FontAwesomeIcon icon={faLaptopCode} />}
        >
          <h3 className="vertical-timeline-element-title">
            Dell - Software Development Intern
          </h3>
          <p>
            Achieved a 99% reduction in tax invoice validation time (from 100+ hours to under 3 minutes) by developing automated invoicing services using Spring Boot and Spring MVC RESTful APIs. Improved vendor file validation productivity by 40% through optimized data storage architecture and enhanced query performance using S3 and MySQL indexing.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="December 2023"
          iconStyle={{ background: "#3b82f6", color: "#f8fafc" }}
          icon={<FontAwesomeIcon icon={faBook} />}
        >
          <h3 className="vertical-timeline-element-title">
            The University of Texas at El Paso, El Paso, TX
          </h3>
          <p>Bachelor's of Science in Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2023 - January 2024"
          iconStyle={{ background: "#1a2235", color: "#60a5fa" }}
          icon={<FontAwesomeIcon icon={faCarBurst} />}
        >
          <h3 className="vertical-timeline-element-title">
            Fred Loya - ATR Clerk
          </h3>
          <p>
            Assisted in day-to-day duties with a focus on claims needing
            attorney representation. Underwent training to understand insurance
            laws and how Fred Loya deals with claims and appointing the proper
            attorney to represent clients in court.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="February 2024 - Present"
          iconStyle={{ background: "#3b82f6", color: "#f8fafc" }}
          icon={<FontAwesomeIcon icon={faComputer} />}
        >
          <h3 className="vertical-timeline-element-title">
            Dell - Software Engineer 2
          </h3>
          <p>
            Built and deployed a beta AI conversational agent using RAG to securely access restricted tax documentation through semantic search, supported by a scalable knowledge library built with SingleStore, FastAPI, and Python. Enabled dynamic knowledge expansion through automated HTML crawling, document embedding, and vector storage, allowing users to continuously extend the agent’s capabilities. Automated document validation and file-handling workflows, eliminating over 100 hours of manual processing each month.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;