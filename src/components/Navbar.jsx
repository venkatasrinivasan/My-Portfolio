import React, { useState } from "react";
import styles from "../components/Navbar.module.css";
import image1 from "../../assets/nav/menuIcon.png";
import image2 from  "../../assets/nav/closeIcon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.Navbar}>
      <a href="/" className={styles.title}>
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? image2 : image1}
          alt="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
         
          <li>
        <a href="https://github.com/venkatasrinivasan" target="_blank" className={styles.gitbutton}>
          Github Profile
        </a>
      </li>
        </ul>
      </div>
     
    </nav>
  );
};

export default Navbar;
