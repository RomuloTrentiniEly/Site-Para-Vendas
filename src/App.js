import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './componentes/Header';
import Sidebar from './componentes/Sidebar';
import Dashboard from './componentes/Dashboard';
import MinhaConta from './componentes/MinhaConta';
import MinhasBMs from './componentes/MinhasBMs';
import ComprarBM from './componentes/ComprarBM';
import MeusPerfis from './componentes/MeusPerfis';
import ComprarPerfil from './componentes/ComprarPerfil';
import MeusPacotes from './componentes/MeusPacotes';
import ComprarPacote from './componentes/ComprarPacote';
import Aprenda from './componentes/Aprenda';
import Login from './componentes/Login';
import RecarregarConta from "./componentes/RecarregarConta";
import './App.css';
import Welcome from './componentes/Welcome';
import FalarAtendente from './componentes/FalarComAtendente';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {isAuthenticated && <Header />}
      <div className="container">
        {isAuthenticated && <Sidebar />}
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route
            path="/dashboard/*"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          >
            <Route path="" element={<Welcome />} />
            <Route path="minha-conta" element={<MinhaConta />} />
            <Route path="minhas-bms" element={<MinhasBMs />} />
            <Route path="comprar-bm" element={<ComprarBM />} />
            <Route path="meus-perfis" element={<MeusPerfis />} />
            <Route path="comprar-perfil" element={<ComprarPerfil />} />
            <Route path="meus-pacotes" element={<MeusPacotes />} />
            <Route path="comprar-pacote" element={<ComprarPacote />} />
            <Route path="configuracoes1" element={<FalarAtendente />} />
            <Route path="aprenda" element={<Aprenda />} />
            <Route path="recarga" element={<RecarregarConta />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
