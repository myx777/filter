import React from 'react';

const ProjectList = ({ projects }) => (
  <div>
    {projects.map((project, index) => (
      <img key={index} src={project.img} alt={project.category} />
    ))}
  </div>
);

export default ProjectList;
