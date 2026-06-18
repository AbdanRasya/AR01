import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <span className="greeting">Hi, I'm Abdan Rasya</span>
          <h1 className="hero-title">
            <span className="gradient-text">Web Developer</span> & UI/UX Enthusiast
          </h1>
          <p className="hero-subtitle">
            Saya membangun website modern, responsif, dan mudah digunakan.
          </p>
          <div className="hero-cta">
            <a href="/#projects" className="btn btn-primary">
              Lihat Proyek <ArrowRight size={20} />
            </a>
            <a href="/#contact" className="btn btn-outline">
              Hubungi Saya
            </a>
          </div>
          <div className="hero-stats" style={{ display: 'flex', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap' }}>
            <div className="stat-item">
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '0.2rem' }}>10+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Project Selesai</p>
            </div>
            <div className="stat-item">
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '0.2rem' }}>3+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Tahun Belajar Coding</p>
            </div>
            <div className="stat-item">
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '0.2rem' }}>5+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Sertifikat IT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
