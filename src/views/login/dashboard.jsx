import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="menu">
        <img src="caminho-para-sua-imagem.jpg" alt="Imagem do menu" />
        <button>Botao 1</button>
        <button>Botao 2</button>
        <button>Botao 3</button>
        <button>Botao 4</button>
        <button>Botao 5</button>
      </div>
      <div className="infos">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="full-width-container">
          <img src="caminho-para-sua-imagem-pet.jpg" alt="Imagem do pet" />
          <div className="info-container">
            <div className="text-blocks">
              <p>Nome do Pet: Nome Aqui</p>
              <p>Tutor: Nome do Tutor</p>
              <p>Contato: Telefone ou Email</p>
            </div>
            <div className="additional-info">
              <p>Descrição de Serviço: Descrição aqui</p>
              <p>Histórico: Histórico aqui</p>
              <p>Tipo de Animal: Tipo aqui</p>
              <p>Raça: Raça aqui</p>
              <p>Cor: Cor aqui</p>
              <p>Tamanho: Tamanho aqui</p>
              <p>Peso: Peso aqui</p>
              <p>Valor: Valor aqui</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
