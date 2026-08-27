import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import SolicitarTurno from './pages/SolicitarTurno';
import TurnoEnviado from './pages/TurnoEnviado';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/solicitar-turno" element={<SolicitarTurno />} />
        <Route path="/turno-enviado" element={<TurnoEnviado />} />
      </Routes>
    </Router>
  );
}

export default App;