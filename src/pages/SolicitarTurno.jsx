import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SolicitarTurno = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '', email: '', telefono: '', mascota: '',
    servicio: '', fecha: '', mensaje: ''
  });
  const [loading, setLoading] = useState(false);

  const servicios = [
    { id: 'Consulta médica', icon: '🏥', label: 'Consulta Médica' },
    { id: 'Vacunación', icon: '💉', label: 'Vacunación' },
    { id: 'Desparasitación', icon: '💊', label: 'Desparasitación' },
    { id: 'Baño', icon: '🛁', label: 'Baño' },
    { id: 'Corte', icon: '✂️', label: 'Corte' },
    { id: 'Baño y corte', icon: '🐕', label: 'Baño y Corte' },
    { id: 'Corte de uñas', icon: '🦷', label: 'Corte de Uñas' },
    { id: 'Otro', icon: '➕', label: 'Otro' },
  ];

  const hoy = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://pelucanina-v2.onrender.com/api/solicitudes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        navigate('/turno-enviado', { state: { nombre: formData.nombre, servicio: formData.servicio } });
      } else {
        alert('Error al enviar la solicitud. Intentá de nuevo.');
      }
    } catch (error) {
      alert('Error de conexión. Intentá de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #e55a2b 100%)', minHeight: '100vh', padding: '40px 20px', fontFamily: "'Segoe UI', sans-serif" }}>

      <div style={{ maxWidth: '700px', margin: '0 auto 20px', display: 'flex', justifyContent: 'space-between' }}>
        <a href="/" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>← Volver al inicio</a>
        <a href="https://pelucanina-v2.onrender.com/login" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>Acceso Staff</a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ background: 'white', borderRadius: '24px', padding: '40px', maxWidth: '700px', margin: '0 auto', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}
      >
        <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#333', marginBottom: '8px' }}>📅 Solicitar Turno</h1>
        <p style={{ color: '#888', marginBottom: '30px', fontSize: '15px' }}>Completá el formulario y nos pondremos en contacto para confirmar tu turno.</p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '25px' }}>
            <label style={{ fontWeight: 700, color: '#444', fontSize: '14px', display: 'block', marginBottom: '12px' }}>Tipo de servicio *</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '10px' }}>
              {servicios.map(s => (
                <motion.label
                  key={s.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    border: `2px solid ${formData.servicio === s.id ? '#ff6b35' : '#eee'}`,
                    background: formData.servicio === s.id ? '#fff5f0' : 'white',
                    borderRadius: '10px', padding: '12px', textAlign: 'center',
                    cursor: 'pointer', transition: 'all 0.2s',
                    color: formData.servicio === s.id ? '#e55a2b' : '#555',
                    fontWeight: 600, fontSize: '13px'
                  }}
                >
                  <input type="radio" name="servicio" value={s.id} style={{ display: 'none' }}
                    onChange={() => setFormData({ ...formData, servicio: s.id })} required />
                  <div style={{ fontSize: '24px', marginBottom: '5px' }}>{s.icon}</div>
                  {s.label}
                </motion.label>
              ))}
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '2px solid #f0f0f0', margin: '25px 0' }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
            <div>
              <label style={{ fontWeight: 600, color: '#444', fontSize: '14px', display: 'block', marginBottom: '6px' }}>Tu nombre *</label>
              <input type="text" placeholder="Ej: Juan Pérez" required
                value={formData.nombre} onChange={e => setFormData({ ...formData, nombre: e.target.value })}
                style={{ width: '100%', border: '2px solid #eee', borderRadius: '10px', padding: '12px', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = '#ff6b35'}
                onBlur={e => e.target.style.borderColor = '#eee'}
              />
            </div>
            <div>
              <label style={{ fontWeight: 600, color: '#444', fontSize: '14px', display: 'block', marginBottom: '6px' }}>Nombre de tu mascota</label>
              <input type="text" placeholder="Ej: Max"
                value={formData.mascota} onChange={e => setFormData({ ...formData, mascota: e.target.value })}
                style={{ width: '100%', border: '2px solid #eee', borderRadius: '10px', padding: '12px', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = '#ff6b35'}
                onBlur={e => e.target.style.borderColor = '#eee'}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
            <div>
              <label style={{ fontWeight: 600, color: '#444', fontSize: '14px', display: 'block', marginBottom: '6px' }}>Email *</label>
              <input type="email" placeholder="tu@email.com" required
                value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', border: '2px solid #eee', borderRadius: '10px', padding: '12px', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = '#ff6b35'}
                onBlur={e => e.target.style.borderColor = '#eee'}
              />
            </div>
            <div>
              <label style={{ fontWeight: 600, color: '#444', fontSize: '14px', display: 'block', marginBottom: '6px' }}>Teléfono *</label>
              <input type="tel" placeholder="Ej: 3512345678" required
                value={formData.telefono} onChange={e => setFormData({ ...formData, telefono: e.target.value })}
                style={{ width: '100%', border: '2px solid #eee', borderRadius: '10px', padding: '12px', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = '#ff6b35'}
                onBlur={e => e.target.style.borderColor = '#eee'}
              />
            </div>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 600, color: '#444', fontSize: '14px', display: 'block', marginBottom: '6px' }}>Fecha preferida *</label>
            <input type="date" required min={hoy}
              value={formData.fecha} onChange={e => setFormData({ ...formData, fecha: e.target.value })}
              style={{ width: '100%', border: '2px solid #eee', borderRadius: '10px', padding: '12px', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
              onFocus={e => e.target.style.borderColor = '#ff6b35'}
              onBlur={e => e.target.style.borderColor = '#eee'}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ fontWeight: 600, color: '#444', fontSize: '14px', display: 'block', marginBottom: '6px' }}>Mensaje adicional</label>
            <textarea placeholder="Contanos algo más sobre tu mascota..." rows={3}
              value={formData.mensaje} onChange={e => setFormData({ ...formData, mensaje: e.target.value })}
              style={{ width: '100%', border: '2px solid #eee', borderRadius: '10px', padding: '12px', fontSize: '15px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
              onFocus={e => e.target.style.borderColor = '#ff6b35'}
              onBlur={e => e.target.style.borderColor = '#eee'}
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: '100%', background: 'linear-gradient(135deg, #ff6b35, #e55a2b)',
              color: 'white', border: 'none', padding: '16px', borderRadius: '12px',
              fontSize: '16px', fontWeight: 700, cursor: loading ? 'wait' : 'pointer',
              boxShadow: '0 8px 25px rgba(255,107,53,0.3)'
            }}
          >
            {loading ? '⏳ Enviando...' : '✅ Enviar Solicitud de Turno'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default SolicitarTurno;