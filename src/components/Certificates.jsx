import React from 'react';
import { Award, Star } from 'lucide-react';

const certificates = [
  {
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding Indonesia',
    year: '2024',
    description: 'Sertifikasi keahlian dasar HTML, CSS, dan Flexbox.',
  },
  {
    title: 'Belajar dasar dasar AI',
    issuer: 'Elevate Indonesia',
    year: '2025',
    description: 'Sertifikasi kompetensi pembuatan aplikasi AI sederhana.',
  },
  {
    title: 'Sefest - Lomba Desain Web',
    issuer: 'Telkom University Surabaya',
    year: '2025',
    description: 'Masuk dalam jajaran 10 besar finalis lomba desain web se-Indonesia.',
  },
  {
    title: 'UI UX Design Competition',
    issuer: 'ITENAS',
    year: '2025',
    description: 'Peserta lomba desain UI/UX se-Indonesia.',
  }
];

const Certificates = () => {
  return (
    <section id="certificates" style={{ padding: '6rem 0' }}>
      <div className="container">
        <h2 className="section-title">Sertifikat & Prestasi</h2>
        <div className="certificates-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {certificates.map((cert, index) => (
            <div className="cert-card glass" key={index} style={{ padding: '2rem', borderRadius: '20px', transition: 'transform 0.3s ease' }}>
              <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>
                <Award size={32} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{cert.title}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                <span style={{ fontWeight: '600' }}>{cert.issuer}</span>
                <span>{cert.year}</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
