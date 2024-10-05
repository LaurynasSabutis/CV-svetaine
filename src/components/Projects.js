import React from 'react';

function Projects({ projects }) {
  return (
    <div className="projects">
      <h2>Darbai</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.name}</h3>
          <div className="project-images">
            {project.images.map((image, idx) => (
              <img key={idx} src={image} alt={`Project ${project.name}`} />
            ))}
          </div>
          <p>{project.description}</p>
          <ul>
            {project.links.map((link, idx) => (
              <li key={idx}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Projects;
