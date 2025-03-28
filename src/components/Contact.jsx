import React from 'react'
import styles from "../components/Contact.module.css"
import mail from "../../assets/contact/email.png"
import linkedin from "../../assets/contact/linkedin.png"
import github from "../../assets/contact/github.png"
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src={mail} alt="Email icon" />
        <a href="mailto:venkatasrinivasan04@gmail.com">E-mail</a>
      </li>
      <li className={styles.link}>
        <img
          src={linkedin}
          alt="LinkedIn icon"
        />
        <a href="https://www.linkedin.com/myname">linkedin</a>
      </li>
      <li className={styles.link}>
        <img src={github} alt="Github icon" />
        <a href="https://github.com/venkatasrinivasan" target='_blank'>github</a>
      </li>
    </ul>
  </footer>
  )
}

export default Contact
