import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Inicio = () => {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", overflowX: 'hidden' }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #ff6b35 0%, #e55a2b 50%, #ff8c42 100%)',
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        paddingTop: '80px', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}></div>
        <div style={{ position: 'absolute', bottom: '-150px', left: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}></div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1, minWidth: '300px' }}
          >
            <div style={{ background: 'rgba(255,255,255,0.2)', display: 'inline-block', padding: '8px 20px', borderRadius: '20px', marginBottom: '20px' }}>
              <span style={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>🐾 Cuidado profesional para tu mascota</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '20px' }}>
              Tu mascota merece<br />
              <span style={{ color: '#ffe5d9' }}>la mejor atención</span>
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '35px', lineHeight: 1.7 }}>
              Ofrecemos servicios integrales de veterinaria y peluquería canina con profesionales comprometidos con el bienestar de tu compañero.
            </p>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <motion.a
                href="/solicitar-turno"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'white', color: '#e55a2b', fontWeight: 700,
                  padding: '16px 35px', borderRadius: '30px', textDecoration: 'none',
                  fontSize: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  display: 'inline-block'
                }}
              >
                📅 Pedir Turno Ahora
              </motion.a>
              <motion.a
                href="#servicios"
                whileHover={{ scale: 1.05 }}
                style={{
                  background: 'transparent', color: 'white', fontWeight: 700,
                  padding: '16px 35px', borderRadius: '30px', textDecoration: 'none',
                  fontSize: '16px', border: '2px solid rgba(255,255,255,0.6)',
                  display: 'inline-block'
                }}
              >
                Ver Servicios
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ flex: 1, minWidth: '280px', textAlign: 'center' }}
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{ fontSize: '180px', lineHeight: 1 }}
            >
              🐕
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'white', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { icon: '🏥', label: 'Atención Veterinaria', desc: 'Consultas y tratamientos' },
              { icon: '✂️', label: 'Peluquería Canina', desc: 'Baño, corte y más' },
              { icon: '💉', label: 'Vacunación', desc: 'Control preventivo' },
              { icon: '📋', label: 'Historial Clínico', desc: 'Registro completo' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 15px 35px rgba(255,107,53,0.15)' }}
                style={{
                  background: '#fff8f5', border: '2px solid #ffe8e0',
                  borderRadius: '16px', padding: '30px', textAlign: 'center',
                  cursor: 'default', transition: 'all 0.3s'
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '12px' }}>{item.icon}</div>
                <div style={{ fontWeight: 700, color: '#e55a2b', fontSize: '16px', marginBottom: '5px' }}>{item.label}</div>
                <div style={{ color: '#888', fontSize: '13px' }}>{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" style={{ background: '#fff8f5', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, background: 'linear-gradient(135deg, #ff6b35, #e55a2b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '10px' }}>
              Nuestros Servicios
            </h2>
            <p style={{ color: '#888', fontSize: '16px' }}>Cuidamos a tu mascota con profesionalismo y amor</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              {
                icon: '🏥', title: 'Veterinaria',
                desc: 'Atención médica completa para el cuidado de la salud de tu mascota.',
                items: ['Consulta médica general', 'Vacunación y desparasitación', 'Cirugías y procedimientos', 'Control y seguimiento', 'Diagnóstico y tratamiento']
              },
              {
                icon: '✂️', title: 'Peluquería Canina',
                desc: 'Servicio profesional de estética para que tu perro luzca increíble.',
                items: ['Baño y secado profesional', 'Corte de pelo', 'Corte de uñas', 'Deslanado', 'Tratamiento antipulgas']
              }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(255,107,53,0.15)' }}
                style={{
                  background: 'white', borderRadius: '20px', padding: '40px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  border: '2px solid transparent', transition: 'all 0.3s'
                }}
              >
                <div style={{ fontSize: '60px', marginBottom: '20px' }}>{s.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#333', marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ color: '#888', lineHeight: 1.7, marginBottom: '20px' }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {s.items.map((item, j) => (
                    <li key={j} style={{ padding: '6px 0', color: '#555', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#ff6b35', fontWeight: 700 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section id="nosotros" style={{ background: 'white', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, background: 'linear-gradient(135deg, #ff6b35, #e55a2b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '10px' }}>
              ¿Por qué elegirnos?
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {[
              { icon: '👨‍⚕️', title: 'Profesionales capacitados', desc: 'Veterinarios y peluqueros con amplia experiencia en el cuidado animal.' },
              { icon: '📋', title: 'Historial completo', desc: 'Llevamos registro detallado de cada visita, vacuna y tratamiento.' },
              { icon: '❤️', title: 'Trato personalizado', desc: 'Adaptamos nuestros servicios a las necesidades de tu mascota.' },
              { icon: '📅', title: 'Turnos online', desc: 'Pedí tu turno fácilmente desde nuestra web sin llamar por teléfono.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ background: '#fff8f5' }}
                style={{ padding: '25px', borderRadius: '16px', display: 'flex', gap: '15px', transition: 'all 0.3s' }}
              >
                <div style={{ fontSize: '36px', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#333', marginBottom: '8px', fontSize: '17px' }}>{item.title}</div>
                  <p style={{ color: '#888', lineHeight: 1.6, fontSize: '14px', margin: 0 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #ff6b35, #e55a2b)', padding: '80px 20px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: 'white', marginBottom: '15px' }}>
            ¿Listo para dar el primer paso?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '18px', marginBottom: '35px' }}>
            Pedí tu turno hoy y dale a tu mascota la atención que merece
          </p>
          <motion.a
            href="/solicitar-turno"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'white', color: '#e55a2b', fontWeight: 700,
              padding: '18px 45px', borderRadius: '30px', textDecoration: 'none',
              fontSize: '18px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              display: 'inline-block'
            }}
          >
            📅 Solicitar Turno Ahora
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contacto" style={{ background: '#1a1a2e', color: '#aaa', padding: '50px 20px 30px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: 'white', marginBottom: '10px' }}>🐾 Servicio Integral para Mascotas</div>
              <p style={{ color: '#888', lineHeight: 1.7, fontSize: '14px' }}>Cuidamos a tu mascota con profesionalismo, dedicación y amor.</p>
            </div>
            <div>
              <div style={{ color: 'white', fontWeight: 700, marginBottom: '15px' }}>Servicios</div>
              {['Veterinaria', 'Peluquería Canina', 'Vacunación', 'Pedir Turno'].map(s => (
                <a key={s} href="#servicios" style={{ color: '#888', textDecoration: 'none', display: 'block', padding: '4px 0', fontSize: '14px', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#ff6b35'}
                  onMouseLeave={e => e.target.style.color = '#888'}
                >{s}</a>
              ))}
            </div>
            <div>
              <div style={{ color: 'white', fontWeight: 700, marginBottom: '15px' }}>Contacto</div>
              <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.8 }}>
                📍 Dirección: Próximamente<br />
                📞 Teléfono: Próximamente<br />
                📧 Email: Próximamente
              </p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #333', paddingTop: '20px', textAlign: 'center', color: '#666', fontSize: '13px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
            <span>© 2025 Servicio Integral para Mascotas</span>
            <a href="https://pelucanina-v2.onrender.com/login" style={{ color: '#ff6b35', textDecoration: 'none', fontWeight: 600 }}>Acceso Staff →</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Inicio;