import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaPhp, 
  FaLaravel, 
  FaFigma, 
  FaGitAlt, 
  FaGithub, 
  FaNodeJs, 
  FaAndroid 
} from 'react-icons/fa';
import { 
  SiFlutter, 
  SiDart, 
  SiTailwindcss, 
  SiMysql, 
  SiFirebase, 
  SiPostman, 
  SiTypescript 
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import { Smartphone, Layout, Server, Wrench, Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: <Smartphone size={24} />,
    description: 'Cross-platform & native mobile application development',
    skills: [
      { name: 'Flutter', icon: <SiFlutter size={20} /> },
      { name: 'React Native', icon: <TbBrandReactNative size={20} /> },
      { name: 'Dart', icon: <SiDart size={20} /> },
      { name: 'Android', icon: <FaAndroid size={20} /> },
    ]
  },
  {
    title: 'Frontend Development',
    icon: <Layout size={24} />,
    description: 'Modern, responsive, and interactive user interfaces',
    skills: [
      { name: 'React', icon: <FaReact size={20} /> },
      { name: 'JavaScript (ES6+)', icon: <FaJs size={20} /> },
      { name: 'TypeScript', icon: <SiTypescript size={20} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={20} /> },
      { name: 'HTML5 & CSS3', icon: <FaHtml5 size={20} /> },
    ]
  },
  {
    title: 'Backend & Database',
    icon: <Server size={24} />,
    description: 'Server logic, APIs, and scalable database management',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs size={20} /> },
      { name: 'Laravel / PHP', icon: <FaLaravel size={20} /> },
      { name: 'RESTful API', icon: <Code2 size={20} /> },
      { name: 'MySQL', icon: <SiMysql size={20} /> },
      { name: 'Firebase', icon: <SiFirebase size={20} /> },
    ]
  },
  {
    title: 'Tools & Workflow',
    icon: <Wrench size={24} />,
    description: 'Version control, API testing, and UI design tools',
    skills: [
      { name: 'Git & GitHub', icon: <FaGitAlt size={20} /> },
      { name: 'Postman', icon: <SiPostman size={20} /> },
      { name: 'VS Code', icon: <VscVscode size={20} /> },
      { name: 'Figma', icon: <FaFigma size={20} /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Tech Stack & Skills</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '-1.5rem', marginBottom: '2.5rem' }}>
          Teknologi dan tools yang saya kuasai dan gunakan dalam software development
        </p>
        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, idx) => (
            <div className="skill-card glass" key={idx} style={{ padding: '2rem', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <span style={{ color: 'var(--accent-color)' }}>{category.icon}</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '600' }}>{category.title}</h3>
              </div>
              {category.description && (
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: '1.4' }}>
                  {category.description}
                </p>
              )}
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
