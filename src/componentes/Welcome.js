import React from 'react';
import './Styles/Welcome.css';

function WelcomeComponent() {
  return (
    <div className='UI'>
    <div className="welcome-container">
      <h1>Bem-vindo ao seu Dashboard!</h1>
      <p>Aqui você pode gerenciar suas compras de BMs e perfis de Facebook.</p>
      <p>Explore as seções abaixo para ver suas compras, carregar saldo, ou entrar em contato conosco para suporte.</p>
      <div className="features">
        <div className="feature-item">
          <h3>Compras Recentes</h3>
          <p>Veja as compras mais recentes e detalhes dos pedidos.</p>
        </div>
        <div className="feature-item">
          <h3>Carregar Saldo</h3>
          <p>Adicione crédito à sua conta para futuras compras.</p>
        </div>
        <div className="feature-item">
          <h3>Suporte</h3>
          <p>Precisa de ajuda? Entre em contato conosco via chat ou e-mail.</p>
        </div>
      </div>
      </div>
      <div className='Dieritosdereserva'>
        <p>© Todos os direitos reservados.</p>
        <a href='src\componentes\termosdeuso.js'>Termos de uso</a>
        <a href='src\componentes\PoliticadePrivacidade.js'>Política de privacidade</a>
      </div>
    </div>
  );
}

export default WelcomeComponent;
