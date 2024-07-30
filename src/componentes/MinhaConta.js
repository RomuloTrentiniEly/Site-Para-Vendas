import React from 'react';
import './Styles/Minhaconta.css';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';
import PortraitOutlinedIcon from '@material-ui/icons/PortraitOutlined';

function MinhaConta() {
  return (
    <div className='meuComponente'>
      <div className='DivPadrao'>
        <PortraitOutlinedIcon style={{ fontSize: 50 }} />
        <h1>Meus dados</h1>
      </div>
      <div className='gridContainer'>
        <div className='gridItem'>
          <div className='DivPadrao'>
            <EmailOutlinedIcon className='Email' />
            <p>Meu Email:</p>
          </div>
          <input className='Inputum' readOnly placeholder='Exemplo@gmail.com'></input>
        </div>

        <div className='gridItem'>
          <div className='DivPadrao'>
            <PersonOutlinedIcon className='Name' />
            <p>Nome:</p>
          </div>
          <input className='Inputum' readOnly placeholder='Gabriel Da Costa Armadeira'></input>
        </div>

        <div className='gridItem'>
          <div className='DivPadrao'>
            <LockOutlinedIcon className='Name' />
            <p>Senha:</p>
          </div>
          <input type='password' className='Inputum' placeholder='Altere sua senha'></input>
        </div>

        <div className='gridItem'>
          <div className='DivPadrao'>
            <AnnouncementOutlinedIcon className='Name' />
            <p>Whatsapp:</p>
          </div>
          <input className='Inputum' readOnly placeholder='(79) 987654-0987654321'></input>
        </div>
      </div>
      <button className='Confirmar'>Confirmar Alterações</button>
      
      <div className="indicacoesContainer">
        <div className="indicacoesItem">
          <h2 className="indicacoesTitle">
            <i className="bx bx-link-external px-1"></i>Minhas indicações
          </h2>
          <div className="indicacoesValue">0</div>
        </div>
        <div className="indicacoesItem">
          <h2 className="indicacoesTitle">
            <i className="bx bx-money-withdraw px-1"></i>Saldo de indicações
          </h2>
          <div className="indicacoesValue">R$&nbsp;0,00</div>
        </div>
        <div className="indicacoesItemFull">
          <h2 className="indicacoesTitle">
            <i className="bx bx-link-alt px-1"></i>Link para indicação
          </h2>
          <div className="linkContainer">
            <input type="text" value="https://contingenciasocial.com/ref/56LN85O2" readOnly className="form-input" />
            <button className="copyButton" data-clipboard-text="https://contingenciasocial.com/ref/56LN85O2">
              COPIAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MinhaConta;
