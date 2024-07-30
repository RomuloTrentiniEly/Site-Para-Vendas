import React from 'react';
import styles from './Styles/Aprenda.module.css';

function Aprenda() {
  return (
    <div className={styles.containerPrincipal}>
      <h1 className={styles.tituloPrincipal}>Aqui exibirá seus vídeos, técnicas e etc.</h1>
      <h3 className={styles.subtitulo}>Vídeos em baixo</h3>
      <div className={styles.videoContainer}>
        <video controls className={styles.videoPlayer}>
          <source src="seu-video.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>
    </div>
  );
}

export default Aprenda;
