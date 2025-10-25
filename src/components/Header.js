import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Sistema Bancário</h1>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/transacoes">Transações</Link>
          </li>
          <li>        
            <Link to="/extrato">Extrato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
