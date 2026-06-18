import React from 'react';
import { Briefcase, Award, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Praktek Kerja Lapangan (PKL)',
    organization: 'PT Telekomunikasi Indonesia',
    period: 'Jul 2025 - Des 2025',
    description: 'Membantu pengembangan sistem internal perusahaan menggunakan Laravel dan MySQL. Berkolaborasi dengan tim untuk memperbaiki bug dan menambahkan fitur pelaporan.',
    icon: <Briefcase size={24} />
  },
  {
    title: 'Ketua Divisi IT',
    organization: 'OSIS SMK Telkom Sidoarjo',
    period: '2024 - 2025',
    description: 'Bertanggung jawab atas pengelolaan website sekolah dan memimpin tim dokumentasi untuk setiap acara sekolah.',
    icon: <Award size={24} />
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '6rem 0' }}>
      <div className="container">
        <h2 className="section-title">Pengalaman & Organisasi</h2>
        <div className="experience-timeline" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {experiences.map((exp, index) => (
            <div className="experience-card glass" key={index} style={{ padding: '2rem', borderRadius: '20px', marginBottom: '2rem', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'var(--accent-glow)', color: 'var(--accent-color)', padding: '1rem', borderRadius: '50%' }}>
                  {exp.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem' }}>{exp.title}</h3>
                  <p style={{ color: 'var(--accent-color)', fontWeight: '600' }}>{exp.organization}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                <Calendar size={16} /> {exp.period}
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
