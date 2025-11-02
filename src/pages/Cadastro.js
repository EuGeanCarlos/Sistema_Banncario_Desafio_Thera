// src/pages/Cadastro.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

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

  // Função para verificar se as senhas coincdem
  const passwordsMatch = formData.password === formData.confirmPassword;
  const isPasswordLongEnough = formData.password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!passwordsMatch) {
      alert('As senhas não coincidem!');
      return;
    }
    
    if (!isPasswordLongEnough) {
      alert('A senha deve ter pelo menos 6 caracteres!');
      return;
    }
    
    console.log('Dados do cadastro:', formData);
    alert('Cadastro realizado com sucesso!');
    navigate('/login');
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-form">
        <h2>Criar Conta</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome Completo</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Seu nome completo"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label>CPF</label>
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              placeholder="000.000.000-00"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Mínimo 6 caracteres"
              required
              className={formData.password ? (isPasswordLongEnough ? 'password-match' : 'password-mismatch') : ''}
            />
            {formData.password && (
              <span className={`password-feedback ${isPasswordLongEnough ? 'password-match-feedback' : 'password-mismatch-feedback'}`}>
                {isPasswordLongEnough ? '✓ Senha válida' : '⚠ Senha deve ter pelo menos 6 caracteres'}
              </span>
            )}
          </div>
          
          <div className="form-group">
            <label>Confirmar Senha</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirme sua senha"
              required
              className={formData.confirmPassword ? (passwordsMatch ? 'password-match' : 'password-mismatch') : ''}
            />
            {formData.confirmPassword && (
              <span className={`password-feedback ${passwordsMatch ? 'password-match-feedback' : 'password-mismatch-feedback'}`}>
                {passwordsMatch ? '✓ Senhas coincidem' : '✗ Senhas não coincidem'}
              </span>
            )}
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={!passwordsMatch || !isPasswordLongEnough}
          >
            CADASTRAR
          </button>
        </form>
        
        <p className="login-link">
          Já tem uma conta? 
          <span onClick={() => navigate('/login')} className="link-text">
            Fazer Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;