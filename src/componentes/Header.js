import React from 'react';
function Header() {
  return (
    <div className='header'>
      <div className='Logo'>
      <h3>Adicione sua logo aqui</h3>
      </div>
      <div className='Infos'>
        <h3 className='um'>Olá, <strong>Rômulo Ely</strong></h3>
        <h3>Saldo: <strong>R$0,00</strong></h3>
        <button className='Proxy'>Criar proxy</button>
        <div className="ticker-wrapper">
          <div className="ticker">
            <div className="ticker-item">CONFIRA NOSSOS PACOTES EXCLUSIVOS</div>
            <div className="ticker-item">PERFIS FACEBOOK 50% OFF  </div>
            <div className="ticker-item">SUPORTE 24 HORAS </div>
            <div className="ticker-item">PARTICIPE DE NOSSAS PROMOÇÕES PELO WHATSAPP </div>
            <div className="ticker-item">CONFIRA NOSSOS PACOTES EXCLUSIVOS</div>
            <div className="ticker-item">PERFIS FACEBOOK 50% OFF  </div>
            <div className="ticker-item">SUPORTE 24 HORAS </div>
            <div className="ticker-item">PARTICIPE DE NOSSAS PROMOÇÕES PELO WHATSAPP </div>
           

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
