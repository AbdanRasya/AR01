import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaWhatsapp as Whatsapp, FaInstagram as Instagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="glass" style={{ margin: '4rem 2rem', borderRadius: '24px' }}>
      <div className="container">
        <div className="contact-content">
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Hubungi Saya</h2>
          <p className="contact-text">
            Tertarik untuk berkolaborasi atau punya project menarik? 
            Jangan ragu untuk menghubungi saya melalui kontak di bawah ini.
          </p>
          <a href="mailto:rasyaira25@gmail.com" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            <Mail size={20} /> Email Saya
          </a>
          
          <div className="social-links">
            <a href="#" className="social-icon"><Github size={24} /></a>
            <a href="#" className="social-icon"><Linkedin size={24} /></a>
            <a href="#" className="social-icon"><Whatsapp size={24} /></a>
            <a href="#" className="social-icon"><Instagram size={24} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
