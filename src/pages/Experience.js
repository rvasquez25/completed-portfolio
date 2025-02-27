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
  faComputer
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Experience.css";
import resume from "../assets/RosendoVasquezNewResume.pdf";
import resumePic from "../assets/ResumePic.png";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#131313">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2015 - May 2019"
          iconStyle={{ background: "#131313", color: "#fff" }}
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
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBolt} />}
        >
          <h3 className="vertical-timeline-element-title">All-Star Electric - Apprentice Electrician</h3>
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
          iconStyle={{ background: "#131313", color: "#fff" }}
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
            maintaining a clean workspace when working on campus
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="October 2021 - May 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faRocket} />}
        >
          <h3 className="vertical-timeline-element-title">
            SPS ARS - Web Developer/Network Operations
          </h3>
          <p>
          Assigned as Team Lead to successfully get the company self-compliant using NIST MEP Cybersecurity Handbook.
          Created heartbeat service for 50+ devices using custom python scripts, API Integrations (Python) and NoSQL MongoDB to reduce daily checks from hours to seconds.
          Troubleshooted bugs across distributed systems and successfully fixed issues to better overall performance.
          Resolved issue of company devices organization by creating a hierarchy service to instantly store and track new devices. 

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2023 - August 2023"
          iconStyle={{ background: "#131313", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faLaptopCode} />}
        >
          <h3 className="vertical-timeline-element-title">
            Dell - Software Development Intern
          </h3>
          <p>
          Reduced validation process for various files provided by tax vendors from 30 days to 10 minutes.
          Successfully handled validation using Spring boot and Spring MVC API integrations.
          Reduced used storage in AWS s3 buckets by approximately 50% converting files to parquet.
          Applied multi-threading techniques to increase scalability from a few users to large scale clients.
          Provided clean and concise database design for Singlestore DB using mySQL.

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="December 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
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
          iconStyle={{ background: "#131313", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faCarBurst} />}
        >
          <h3 className="vertical-timeline-element-title">
            Fred Loya - ATR Clerk
          </h3>
          <p>
          Assisted in day-to-day duties with a focus on claims needing attorney representation. Underwent training 
          to understand insurance laws and how Fred Loya deals with claims and appointing the proper attorney to
          represent clients in court.

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="February 2024 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faComputer} />}
        >
          <h3 className="vertical-timeline-element-title">
            Dell - Software Engineer I
          </h3>
          <p>
          Assigned as a Software Engineer I through Dell's IT Development Program which consists of three 
          rotations through teams to gain a variety of experience and possibly shift career focus. Currently 
          on the Tax IT team to apply full-stack development experience in automating various tax procedures 
          such as cutting 100+ hours of manual file storages to an automated process that can take minutes
          to complete.

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
