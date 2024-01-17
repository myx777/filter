import React from 'react';
import styles from './ProjectList.module.css'
// debugger;
const ProjectList = ({ projects }) => {
  return (
    <div className={styles.img_container}>
    {projects.map((project, index) => (
        <img 
            key={index} 
            src={project.img} 
            alt={project.category} 
            className={styles.projectImage}
        />
    ))}
  </div>
  );

};

export default ProjectList;
