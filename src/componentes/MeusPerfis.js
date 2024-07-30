import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/MinhaBMS.css'
function MeusPerfis() {
  return (
    <div className='ContainerPrincipal'>
      <h1>Que pena</h1>
      <h3>Aparentemente você ainda não possui perfis que tal comprar um agora?</h3>
      <Link to="/dashboard/comprar-perfil">
        <button className='Botão'>Conheça nossas Bms</button>
      </Link>
    </div>
  );
}

export default MeusPerfis;
