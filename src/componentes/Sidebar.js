import React, { useState } from 'react';
import './Styles/Sidebar.css';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import AccountBalance from '@material-ui/icons/AccountBalance';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AllInboxOutlined from '@material-ui/icons/AllInboxOutlined';
import Person from '@material-ui/icons/Person';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CircleIcon from '@material-ui/icons/Brightness1';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import CastForEducationOutlinedIcon from '@material-ui/icons/CastForEducationOutlined';
function Sidebar() {
  const [mostrarConfiguracoes1, setMostrarConfiguracoes1] = useState(false);
  const [mostrarConfiguracoes2, setMostrarConfiguracoes2] = useState(false);
  const [mostrarConfiguracoes3, setMostrarConfiguracoes3] = useState(false);

  const toggleConfiguracoes1 = () => {
    setMostrarConfiguracoes1(!mostrarConfiguracoes1);
  };

  const toggleConfiguracoes2 = () => {
    setMostrarConfiguracoes2(!mostrarConfiguracoes2);
  };

  const toggleConfiguracoes3 = () => {
    setMostrarConfiguracoes3(!mostrarConfiguracoes3);
  };

  return (
    <div className="Sidebar">
      <IconButton aria-label="HOUSE">
        < HomeOutlinedIcon/>
      </IconButton>
      <Link to="/dashboard"><button>Home</button></Link>
      <br/>
      <IconButton aria-label="Person">
        <Person />
      </IconButton>
      <Link to="/dashboard/minha-conta"><button>Minha Conta</button></Link>
      <br/>
      <IconButton aria-label="AccountBalance">
        <AccountBalance />
      </IconButton>
      <button onClick={toggleConfiguracoes1} class='botões'>Bussines Manager</button>
      {mostrarConfiguracoes1 && (
        <div className="sub-buttons">
          <IconButton aria-label="bolinha" style={{fontSize: 10}}>
        < CircleIcon style={{ fontSize: 8, marginLeft:40 }}/>
      </IconButton>
          <Link to="/dashboard/minhas-bms"><button> Minhas BM's</button></Link>
          <br/>
          <IconButton aria-label="bolinha" style={{fontSize: 10}}>
        < CircleIcon style={{ fontSize: 8, marginLeft:40 }}/>
      </IconButton>
          <Link to="/dashboard/comprar-bm"><button>Comprar</button></Link>
        </div>
      )}
      <br/>
      <IconButton aria-label="AccountBalanceWalletIcon">
        <AccountBalanceWalletIcon />
      </IconButton>
      <button onClick={toggleConfiguracoes2} class='botões'>Perfis Do Facebook</button>
      {mostrarConfiguracoes2 && (
        <div className="sub-buttons">
           <IconButton aria-label="bolinha" style={{fontSize: 10}}>
        < CircleIcon style={{ fontSize: 8, marginLeft:40 }}/>
      </IconButton>
         <Link to="/dashboard/meus-perfis"><button>Meus Perfis</button></Link>
          <br/>
          <IconButton aria-label="bolinha" style={{fontSize: 10}}>
        < CircleIcon style={{ fontSize: 8, marginLeft:40 }}/>
      </IconButton>
         <Link to="/dashboard/comprar-perfil"><button>Comprar</button></Link>
        </div>
      )}
      <br/>
      <IconButton aria-label="AllInboxOutlined">
        <AllInboxOutlined />
      </IconButton>
      <button onClick={toggleConfiguracoes3} class='botões'>Pacotes</button>
      {mostrarConfiguracoes3 && (
        <div className="sub-buttons">
           <IconButton aria-label="bolinha" style={{fontSize: 10}}>
        < CircleIcon style={{ fontSize: 8, marginLeft:40 }}/>
      </IconButton>
          <Link to="/dashboard/meus-pacotes"><button>Meus pacotes</button></Link>
          <br/>
          <IconButton aria-label="bolinha" style={{fontSize: 10}}>
        < CircleIcon style={{ fontSize: 8, marginLeft:40 }}/>
      </IconButton>
          <Link to="/dashboard/comprar-pacote"><button>Comprar</button></Link>
        </div>
      )}
      <br/>
      <IconButton aria-label="HOUSE">
        < ContactSupportOutlinedIcon/>
      </IconButton>
      <Link to="/dashboard/configuracoes1"><button>Falar com Suporte</button></Link>
      <br/>
      <IconButton aria-label="bolinha" style={{fontSize: 10}}>

      < CastForEducationOutlinedIcon style={{ fontSize: 20, marginLeft: 10 }}/>
      </IconButton>

      <Link to="/dashboard/aprenda"><button>Aprenda</button></Link>
    </div>
  );
}

export default Sidebar;
