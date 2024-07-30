import React, { useEffect, useState } from 'react';
import styles from './Styles/ComprarPacote.module.css';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import BeenhereOutlinedIcon from '@material-ui/icons/BeenhereOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import imagemPerfil from './imagemperfil.png';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Link } from 'react-router-dom';


function MinhaConta() {
  const [anuncios, setAnuncios] = useState([]);
  const [avisos, setAvisos] = useState([]);
  const [infoContent, setInfoContent] = useState([]);

  useEffect(() => {
    const fetchedAnuncios = [
      { id: 1, titulo: 'Anuncio 1', descricao: 'Descrição do anúncio 1', estoque: 10, preco: 100 },
      { id: 2, titulo: 'Anuncio 2', descricao: 'Descrição do anúncio 2', estoque: 15, preco: 150 },
      { id: 3, titulo: 'Anuncio 3', descricao: 'Descrição do anúncio 3', estoque: 20, preco: 200 },
      { id: 4, titulo: 'Anuncio 4', descricao: 'Descrição do anúncio 4', estoque: 25, preco: 250 },
    ];
    setAnuncios(fetchedAnuncios);
    setInfoContent(Array(fetchedAnuncios.length).fill(null));
  }, []);

  useEffect(() => {
    const fetchedAvisos = [
      { id: 1, titulo: 'Experiência incrível', descricao: 'Adquira suas BMs sem precisar esperar pela entrega. Em nosso site, seu pedido é liberado instantaneamente no momento da compra.' },
      { id: 2, titulo: 'Qualidade', descricao: 'Nossas BMs são criadas com IPs brasileiros e perfis reestabelecidos.' },
    ];
    setAvisos(fetchedAvisos);
  }, []);

  const toggleInfoContent = (index) => {
    setInfoContent((prev) => {
      const newInfoContent = [...prev];
      newInfoContent[index] = prev[index] ? null : getInfoContentForIndex(index);
      return newInfoContent;
    });
  };

  const getInfoContentForIndex = (index) => {
    switch (index) {
      case 0:
        return {
          info1: 'Use sua Bm com mais segurança',
          info2: 'Trabalhe mais para conquistar',
          info3: 'Bm usada por 5 anos'
        };
      case 1:
        return {
          info1: 'Romulo quem manda aqui',
          info2: 'Você jamais será fraco',
          info3: 'Sabe que saudades não combina com bebida'
        };
      case 2:
        return {
          info1: 'Aprenda o que sabe',
          info2: 'Você nunca será fraco',
          info3: 'A exemplo dos cofre If Net me the trabalho'
        };
      case 3:
        return {
          info1: 'Informação única para o anúncio 4',
          info2: 'Outra informação exclusiva',
          info3: 'Detalhe específico'
        };
      default:
        return {};
    }
  };

  const openModal = (anuncio) => {
    console.log("Anúncio selecionado:", anuncio);
  };

  return (
    <div className={styles.Principal}>
      <div className={styles.BussinesManager}>
        <DashboardOutlinedIcon style={{ fontSize: 40 }} className={styles.iconBackground} />
        <h1>Pacotes</h1>
      </div>
      <div className={styles.ContainersAviso}>
        <div className={styles.Duvidas}>
          <h4>Precisando de ajuda?</h4>
          <p>Está com dúvidas sobre nossos preços e serviços? Entre em contato via <a href="https://web.whatsapp.com/" target='blank'>Whatsapp</a></p>
        </div>
        <div className={styles.Recarregue}>
          <MonetizationOnOutlinedIcon style={{ fontSize: 60 }} className={styles.MonetizationOnOutlinedIcon} />
          <div className={styles.Saldo}>
            <p>Seu Saldo é de:</p>
            <h3>R$0,00</h3>
          </div>
          <Link to="/dashboard/recarga">
          <button className={styles.BotaoRecarregar}>
            <AddCircleOutlineOutlinedIcon style={{ fontSize: 30 }} />
            Carregar Conta
          </button>
          </Link>

        </div>
      </div>
      <div className={styles.BmsDisponiveis}>
        <ul className={styles.listaAnuncios}>
          {anuncios.map((anuncio, index) => (
            <li key={anuncio.id} className={`${styles.anuncio} ${infoContent[index] ? styles.rotated : ''}`}>
              <div className={styles.profileImageContainer}>
                <img className={styles.profileImage} width="42" height="42" src={imagemPerfil} alt="" />
              </div>
              <button className={styles.Info} onClick={() => toggleInfoContent(index)}>
                <InfoOutlinedIcon style={{ fontSize: 35, marginTop: 4}} />
              </button>
              {infoContent[index] ? (
                <div className={styles.profileInfo}>
                  <h3>INFORMAÇÕES:</h3>
                  <p>{infoContent[index].info1}</p>
                  <p>{infoContent[index].info2}</p>
                  <p style={{marginBottom: 7}}>{infoContent[index].info3}</p>
                  <br/>
                </div>
              ) : (


                <div className={styles.profileInfo}>
                  <div className={styles.profileTitle}>
                    <span>{anuncio.titulo}</span>
                    <br />
                    <span className={styles.heatingDays}>• Aquecimento recomendado: <span>3</span> dias</span>
                    <br />
                    <span className={styles.profileDescription}>{anuncio.descricao}</span>
                  </div>
                  <div className={styles.profileStats}>
                    <div className={styles.stock}>
                      <span className={styles.label}>ESTOQUE:</span>
                      <span className={styles.value}><b>{anuncio.estoque}</b> pcs.</span>
                    </div>
                    <div className={styles.price}>
                      <span className={styles.label}>PREÇO/UNID.</span>
                      <span className={styles.value}>R$ <b>{anuncio.preco},00</b></span>
                    </div>
                  </div>
                </div>
              )}

              
              <button type="button" className={styles.adquirir} onClick={() => openModal(anuncio)}>COMPRAR</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.Avisos}>
        <ul className={styles.listaAnuncios}>
          {avisos.map((aviso) => (
            <li key={aviso.id} className={styles.Aviso}>
              <div className={styles.AvisoHeader}>
                <BeenhereOutlinedIcon style={{ fontSize: 40, color:'0a043c' }} className={styles.icone} />
                <h2 style={{ color: '#0a043c' }}>{aviso.titulo}</h2>
              </div>
              <p>{aviso.descricao}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.Dieritosdereserva}>
        <p>© Todos os direitos reservados.</p>
        <a href='src\componentes\termosdeuso.js'>Termos de uso</a>
        <a href='src\componentes\PoliticadePrivacidade.js'>Política de privacidade</a>
      </div>
    </div>
  );
}

export default MinhaConta;
