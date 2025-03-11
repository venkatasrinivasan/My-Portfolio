import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Projects from "./components/Projects"
import Education from "./components/Education";
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Skill />
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
