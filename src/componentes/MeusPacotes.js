import React from 'react';
import { Link } from 'react-router-dom';

import './Styles/Meuspacotes.css'
function MinhasBMs() {
  return (
    <div className='ContainerPrincipal'>
      <h1>Meus Pacotes</h1>
      <h3>Exibirá seus Pacotes quando adquirir</h3>
      <p>Detalhes dos pacotes</p>
      <Link to="/dashboard/comprar-pacote">
        <button className='Botão'>Conheça nossos pacotes</button>
      </Link>
    </div>
  );
}

export default MinhasBMs;
