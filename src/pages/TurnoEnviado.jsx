import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const TurnoEnviado = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { nombre, servicio } = location.state || { nombre: 'cliente', servicio: 'el servicio' };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: '20px', fontFamily: "'Segoe UI', sans-serif"
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'white', borderRadius: '24px', padding: '50px 40px',
          maxWidth: '500px', width: '100%', textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          style={{ fontSize: '80px', marginBottom: '20px' }}
        >
          ✅
        </motion.div>

        <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#333', marginBottom: '10px' }}>
          ¡Solicitud enviada!
        </h1>
        <p style={{ color: '#666', fontSize: '16px', lineHeight: 1.6, marginBottom: '30px' }}>
          Gracias <strong>{nombre}</strong>, recibimos tu solicitud de turno para <strong>{servicio}</strong>.
          Nos pondremos en contacto pronto para confirmar.
        </p>

        <div style={{ background: '#f0fff4', borderRadius: '12px', padding: '20px', marginBottom: '30px', textAlign: 'left' }}>
          {[
            '📞 Te contactaremos por teléfono o email',
            '⏰ Respondemos en menos de 24 horas',
            '📅 Confirmaremos fecha y hora exacta'
          ].map((item, i) => (
            <div key={i} style={{ padding: '8px 0', color: '#555', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {item}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            style={{
              background: 'linear-gradient(135deg, #2ecc71, #27ae60)',
              color: 'white', border: 'none', padding: '14px 30px',
              borderRadius: '12px', fontSize: '15px', fontWeight: 700,
              cursor: 'pointer', boxShadow: '0 8px 25px rgba(46,204,113,0.3)'
            }}
          >
            🏠 Volver al inicio
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/solicitar-turno')}
            style={{
              background: 'transparent', color: '#27ae60',
              border: '2px solid #2ecc71', padding: '14px 30px',
              borderRadius: '12px', fontSize: '15px', fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            📅 Otro turno
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default TurnoEnviado;