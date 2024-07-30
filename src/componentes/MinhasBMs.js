import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/MinhaBMS.css';

function MinhasBMs() {
  return (
    <div className='ContainerPrincipal'>
      <h1>Minhas BM's</h1>
      <h3>Exibirá suas Bms quando adquirir</h3>
      <p>Detalhes das Minhas BM's</p>
      <Link to="/dashboard/comprar-bm">
        <button className='Botão'>Conheça nossas Bms</button>
      </Link>
    </div>
  );
}

export default MinhasBMs;
