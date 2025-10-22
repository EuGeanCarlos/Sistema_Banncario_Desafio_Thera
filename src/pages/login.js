import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/dashboard"); // assim será redirecionado para o painel após o login
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Bem-vindo ao Banco Elementar</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Usuário" required />
        <br />
        <input type="password" placeholder="Senha" required />
        <br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
