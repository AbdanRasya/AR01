import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/profile.png" 
              alt="My Profile Picture" 
            />
          </div>
          <div className="about-text glass" style={{ padding: '2rem', borderRadius: '20px' }}>
            <p>
              Saya adalah siswa <strong>SMK Telkom Sidoarjo</strong> jurusan <strong>Sistem Informasi Jaringan dan Aplikasi (SIJA)</strong> yang memiliki minat besar dalam pengembangan website dan desain antarmuka pengguna (UI/UX).
            </p>
            <p>
              Selama belajar di sekolah, saya telah mengerjakan berbagai project aplikasi dan website yang mengajarkan saya bagaimana merancang solusi digital yang tidak hanya fungsional, tapi juga memberikan pengalaman yang menyenangkan bagi pengguna.
            </p>
            <p>
              Saya selalu bersemangat untuk terus mengeksplorasi teknologi baru, mulai dari mengutak-atik desain di Figma, menyusun tata letak  frontend, hingga merancang alur data di backend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
