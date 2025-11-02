
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ userName, balance }) {
  const navigate = useNavigate();

  const handleLogout = () => { 
    
    
    navigate('/login');
  };

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1>Banco Digital</h1>
      </div>
      
      <div className="header-right">
        <div className="user-info">
          <span className="welcome">Olá, {userName}</span>
          <span className="balance">Saldo: R$ {balance}</span>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </header>
  );
}

export default Header;