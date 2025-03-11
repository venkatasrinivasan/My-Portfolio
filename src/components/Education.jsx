import React from "react";

import styles from "../components/Education.module.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { education } from "../components/data/constant";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <section id="education" className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Education</h1>
        <p className={styles.description}>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
        <div className={styles.timelineSection}>
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== education.length - 1 && (
                    <TimelineConnector style={{ background: "#854CE6" }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default Education;
