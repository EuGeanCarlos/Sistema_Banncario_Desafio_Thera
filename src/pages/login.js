
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Global.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [rememberMe, setRememberMe] = useState(false);

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
    console.log('Dados do login:', formData);
    console.log('Lembrar-me:', rememberMe);
    
    //  > login bem-sucedido
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Seu email"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Sua senha"
              required
            />
          </div>
          
          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            
            <a href="#" className="forgot-password">
              Forget Password?
            </a>
          </div>
          
          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
        
        <p className="signup-link">
          Don't have an account? 
          <span onClick={() => navigate('/cadastro')}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;