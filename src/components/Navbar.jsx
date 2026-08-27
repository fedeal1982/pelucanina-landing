import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
      transition: 'all 0.3s ease',
      padding: '15px 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '28px' }}>🐾</span>
          <span style={{
            fontWeight: 800, fontSize: '18px',
            background: scrolled ? 'linear-gradient(135deg, #ff6b35, #e55a2b)' : 'none',
            WebkitBackgroundClip: scrolled ? 'text' : 'unset',
            WebkitTextFillColor: scrolled ? 'transparent' : 'white',
            color: scrolled ? 'transparent' : 'white'
          }}>
            Servicio Integral para Mascotas
          </span>
        </a>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              color: scrolled ? '#555' : 'white',
              textDecoration: 'none', fontWeight: 600, padding: '8px 16px',
              borderRadius: '8px', transition: 'all 0.2s',
              fontSize: '15px'
            }}
            onMouseEnter={e => e.target.style.background = scrolled ? '#fff5f0' : 'rgba(255,255,255,0.15)'}
            onMouseLeave={e => e.target.style.background = 'transparent'}
            >
              {item}
            </a>
          ))}
          <a href="/solicitar-turno" style={{
            background: 'linear-gradient(135deg, #ff6b35, #e55a2b)',
            color: 'white', textDecoration: 'none', padding: '10px 22px',
            borderRadius: '25px', fontWeight: 700, fontSize: '15px',
            transition: 'all 0.2s', boxShadow: '0 4px 15px rgba(255,107,53,0.3)'
          }}
          onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 25px rgba(255,107,53,0.4)'; }}
          onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 15px rgba(255,107,53,0.3)'; }}
          >
            📅 Pedir Turno
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;