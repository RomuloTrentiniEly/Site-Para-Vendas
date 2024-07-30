import React, { useState } from 'react';
import styles from './Styles/FalarAtendente.module.css'; // Importando o CSS Module

function FalarAtendente() {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [prioridade, setPrioridade] = useState('');
    const [problema, setProblema] = useState('');
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para enviar as informações para o backend ou API
        console.log({ nome, numero, email, assunto, departamento, prioridade, problema });
        setEnviado(true);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Falar com Atendente</h1>
            {enviado ? (
                <p className={styles.confirmation}>
                    Sua mensagem foi enviada com sucesso! Em breve um atendente entrará em contato.
                </p>
            ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formColumns}>
                        <div className={styles.formColumn}>
                            <div className={styles.formGroup}>
                                <label htmlFor="nome">Nome:</label>
                                <input
                                    type="text"
                                    id="nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="departamento">Departamento:</label>
                                <select
                                    id="departamento"
                                    value={departamento}
                                    onChange={(e) => setDepartamento(e.target.value)}
                                    required
                                >
                                    <option value="">Selecione...</option>
                                    <option value="perfis-facebook">Perfis Facebook</option>
                                    <option value="proxy">Proxy</option>
                                    <option value="business-manager">Business Manager</option>
                                    <option value="outros">Outros</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.formColumn}>
                            <div className={styles.formGroup}>
                                <label htmlFor="numero">Número:</label>
                                <input
                                    type="tel"
                                    id="numero"
                                    value={numero}
                                    onChange={(e) => setNumero(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="assunto">Assunto:</label>
                                <input
                                    type="text"
                                    id="assunto"
                                    value={assunto}
                                    onChange={(e) => setAssunto(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="prioridade">Prioridade:</label>
                                <select
                                    id="prioridade"
                                    value={prioridade}
                                    onChange={(e) => setPrioridade(e.target.value)}
                                    required
                                >
                                    <option value="">Selecione...</option>
                                    <option value="baixa">Baixa</option>
                                    <option value="media">Média</option>
                                    <option value="alta">Alta</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="problema">Problema:</label>
                        <textarea
                            id="problema"
                            value={problema}
                            onChange={(e) => setProblema(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>Enviar</button>
                </form>
            )}
        </div>
    );
}

export default FalarAtendente;
