import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <section className="project-detail" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Project not found</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </section>
    );
  }

  return (
    <section className="project-detail" style={{ paddingTop: '150px', minHeight: '100vh' }}>
      <div className="container">
        <Link to="/" className="btn btn-outline" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <div className="project-detail-header">
          <h1 className="hero-title">{project.title}</h1>
          <div className="tech-stack" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            {project.tech.map((tech, index) => (
              <span className="tech-tag" key={index}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="project-detail-image" style={{ marginBottom: '3rem' }}>
          <img 
            src={project.image} 
            alt={project.title} 
            style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', maxHeight: '600px', objectFit: 'cover' }} 
          />
        </div>

        <div className="project-detail-content glass" style={{ padding: '3rem', borderRadius: '24px' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>About the Project</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', whiteSpace: 'pre-line' }}>
            {project.fullDesc || project.desc}
          </p>
          
          <div className="project-detail-links" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
              <ExternalLink size={20} /> Live Demo
            </a>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>
              <Github size={20} /> Source Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
