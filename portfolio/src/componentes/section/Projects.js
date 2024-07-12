import React from 'react';
import styles from './Projects.module.css';
import ipdnc from '../section/images/Projects/lpdnc.svg';
import Portfolio from '../section/images/Projects/Portfolio.svg';

function Projects() {
  const projects = [
    { img: ipdnc, title: 'Projeto 1', description: 'Landing Page para divulgação de cursos na área da tecnólogia.' },
    { img: ipdnc, title: 'Projeto 2', description: 'Landing Page para divulgação de cursos na área da tecnólogia.' },
    { img: ipdnc, title: 'Projeto 3', description: 'Landing Page para divulgação de cursos na área da tecnólogia.' },
    { img: ipdnc, title: 'Projeto 4', description: 'Landing Page para divulgação de cursos na área da tecnólogia.' },
  ];

  return (
    <div className={styles.Projects} id="Projects">
      <h1>Projetos</h1>
      <br /><br /><br />
      <div className={styles.projectsGrid}>
        <div className={styles.column}>
          {projects.slice(0, 2).map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <img src={project.img} alt={project.title} className={styles.projectImage} />
                <div className={styles.projectOverlay}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button className={styles.projectButton}>Clique aqui</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.column}>
          {projects.slice(2, 4).map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <img src={project.img} alt={project.title} className={styles.projectImage} />
                <div className={styles.projectOverlay}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button link='https://github.com/' className={styles.projectButton}>Clique aqui</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default Projects;
