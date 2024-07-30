import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Login.css'

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de autenticação (substituir pela sua lógica de autenticação)
    if (username === '1' && password === '1') {
      setIsAuthenticated(true);
      navigate('/dashboard');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2 style={{ color: 'white' }}>Login</h2>
        <div>
          <input
            placeholder='Usuário'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder='Senha'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
        <br />
        <a style={{ color: 'white', fontSize: '18px' }}>Cadastre-se</a>
      </form>
    </div>
  );
}

export default Login;
