import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../components/data/constant";
import styles from "../components/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterWrapper}>
        <h1 className={styles.Logo}>Venkatasrinivasan</h1>
        <div className={styles.Nav}>
          <a className={styles.NavLink} href="#about">
            About
          </a>
          <a className={styles.NavLink} href="#skills">
            Skills
          </a>
          <a className={styles.NavLink} href="#projects">
            Projects
          </a>
          <a className={styles.NavLink} href="#education">
            Education
          </a>
          <a className={styles.NavLink} href="#contact">
            Contact
          </a>
        </div>
        <div className={styles.SocialMediaIcons}>
          <a
            className={styles.SocialMediaIcon}
            href={Bio.linkedin}
            target="display"
          >
            <LinkedInIcon />
          </a>
          <a
            className={styles.SocialMediaIcon}
            href={Bio.insta}
            target="display"
          >
            <InstagramIcon />
          </a>
        </div>

        <div className={styles.Copyright}>
          &copy; 2025 Venkatasrinivasan. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
