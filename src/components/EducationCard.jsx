import React from "react";
import styles from "../components/EducationCard.module.css";
const EducationCard = ({ education }) => {
  return (
    <section className={styles.card}>
      <div className={styles.top}>
        <img src={education.img} className={styles.image} />
        <div className={styles.body}>
          <p className={styles.name}>{education.school}</p>
          <p className={styles.degree}>{education.degree}</p>
          <p className={styles.date}>{education.date}</p>
        </div>
      </div>
      {education.grade && <div className={styles.grade}>Grade: {education?.grade}</div>}
      <div className={styles.description}>
        <span className={styles.span}>{education.desc}</span>
      </div>
    </section>
  );
};

export default EducationCard;
