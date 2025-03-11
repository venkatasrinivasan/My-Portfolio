import React from "react";
import styles from "../components/Hero.module.css";
import hero from "../../assets/hero/Hero.jpg";
const Hero = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi,Im <br />
          Venkatasrinivasan
        </h1>

        <p className={styles.subtitle}>
          Im a <span className={styles.fullstack}>Fullstack-Developer</span>
        </p>
        <p className={styles.description}>
          Passionate about crafting exceptional web experiences and leveraging
          innovative technologies to build cutting-edge solutions. Adapt in
          working both front-end and back-end development process. Highly
          skilled in programming design, development and implementation of
          functional specification.
        </p>
        <a href="" className={styles.resumeBtn}>
          Check my Resume
        </a>

        {/* <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div> */}
      </div>
      <img src={hero} alt="Hero image of me" className={styles.heroImg} />
    </section>
  );
};

export default Hero;
