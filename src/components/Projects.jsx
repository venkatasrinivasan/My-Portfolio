import React from "react";
import styles from "../components/Projects.module.css";
import projects from "../components/data/projects.json"
import { ProjectCard } from "./ProjectCard";
const Projects = () => {
  
  
  return (
    <section className={styles.container} id="projects">
    <h2 className={styles.title}>Projects</h2>
    <div className={styles.projects}>
      {projects.map((project, id) => {
        return <ProjectCard key={id} project={project} />;
      })}
    </div>
  </section>
  );
};

export default Projects;
