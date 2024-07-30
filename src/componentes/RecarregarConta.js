import React, { useState } from 'react';
import './Styles/RecargaConta.css';

function RecargaConta() {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [message, setMessage] = useState('');

  const handleRecarga = (e) => {
    e.preventDefault();
    setMessage(`Recarga de R$ ${amount} realizada com sucesso utilizando ${paymentMethod}!`);
  };

  return (
    <div className="recarga-container">
      <h1 className='titulo'>Recarga de Conta</h1>
      <form onSubmit={handleRecarga} className="recarga-form">
        <label htmlFor="amount">Valor da Recarga:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          placeholder="Digite o valor"
        />
        
        <label htmlFor="payment-method">Método de Pagamento:</label>
        <select
          id="payment-method"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="">Selecione um método</option>
          <option value="Cartão de Crédito">Cartão de Crédito</option>
          <option value="Boleto Bancário">Boleto Bancário</option>
          <option value="Pix">Pix</option>
        </select>
        
        <button type="submit" className="recarga-button">Recarregar</button>
      </form>
      {message && <p className="recarga-message">{message}</p>}
    </div>
  );
}

export default RecargaConta;
