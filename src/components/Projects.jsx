import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

import { projects } from '../data/projects';

import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Works</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id} style={{ display: 'flex', flexDirection: 'column' }}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc" style={{ flexGrow: 1 }}>{project.desc}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links" style={{ marginTop: 'auto' }}>
                  <Link to={`/project/${project.id}`} className="btn btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    Explore Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
