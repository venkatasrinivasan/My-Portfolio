import React from "react";
import styles from "../components/Skill.module.css";
import { skills } from "./data/constant";

const Skill = () => {
  return (
    <section className={styles.container} id="skills">
      <div className={styles.content}>
        <h1 className={styles.title}>Skills</h1>
        <p className={styles.description}> Here are some of my skills</p>
        <div className={styles.skillscontainer}>
          {skills.map((item) => (
            <div className={styles.skill}>
              <div className={styles.skilltitle}>{item.title}</div>
              <div className={styles.skilllist}>
                {item.skills.map((item) => (
                  <div className={styles.skillitem}>
                    <img
                      src={item.image}
                      alt="skill"
                      className={styles.skillimage}
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
