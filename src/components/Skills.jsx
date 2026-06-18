import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPhp, FaLaravel, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';
import { Layout, Server, PenTool } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout size={24} />,
    skills: [
      { name: 'HTML', icon: <FaHtml5 size={20} /> },
      { name: 'CSS', icon: <FaCss3Alt size={20} /> },
      { name: 'JavaScript', icon: <FaJs size={20} /> },
      { name: 'React', icon: <FaReact size={20} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={20} /> },
      { name: 'Bootstrap', icon: <FaBootstrap size={20} /> },
    ]
  },
  {
    title: 'Backend',
    icon: <Server size={24} />,
    skills: [
      { name: 'PHP', icon: <FaPhp size={20} /> },
      { name: 'Laravel', icon: <FaLaravel size={20} /> },
      { name: 'MySQL', icon: <SiMysql size={20} /> },
    ]
  },
  {
    title: 'Design',
    icon: <PenTool size={24} />,
    skills: [
      { name: 'Figma', icon: <FaFigma size={20} /> },
      { name: 'UI/UX Design', icon: <PenTool size={20} /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Tech Stack & Skills</h2>
        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, idx) => (
            <div className="skill-card glass" key={idx} style={{ padding: '2rem', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--accent-color)' }}>{category.icon}</span>
                <h3 style={{ fontSize: '1.5rem' }}>{category.title}</h3>
              </div>
              <div className="skills-container" style={{ justifyContent: 'flex-start' }}>
                {category.skills.map((skill, index) => (
                  <div className="skill-item" key={index} style={{ padding: '0.5rem 1rem' }}>
                    <span style={{ color: 'var(--accent-color)' }}>{skill.icon}</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
