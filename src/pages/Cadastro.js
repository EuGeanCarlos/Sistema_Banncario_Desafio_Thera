
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Global.css';

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação simples de senha
    if (formData.password !== formData.confirmPassword) {
      alert('Senhas não coincidem!');
      return;
    }
    
    console.log('Dados do cadastro:', formData);
    navigate('/login');
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-form">
        <h2>Criar Conta</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome Completo:</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>CPF:</label>
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Senha:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Confirmar Senha:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>
        </form>
        
        <p>
          Já tem conta? 
          <span 
            onClick={() => navigate('/login')} 
            style={{color: 'blue', cursor: 'pointer', marginLeft: '5px'}}
          >
            Faça login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;