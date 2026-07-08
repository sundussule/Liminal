import React, { useState } from 'react';
import { Link } from 'react-router-dom';  

 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
  };

  const handleClearFields = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div id="login-container" className="login-wrapper">
      <div id="login-card" className="login-card">
        <h1 id="brand-name" className="brand-name">Liminal</h1>
        
        <form id="login-form" onSubmit={handleLogin}>
          <input 
            type="email" 
            id="email-input" 
            className="login-input" 
            placeholder="sundus.sule@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            id="password-input" 
            className="login-input" 
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" id="login-button" className="login-button">
            Log In
          </button>
        </form>

        <div className="divider">OR</div>

        <button id="google-login-button" className="social-login-button">
          Log in with Google
        </button>
 

        <a href="/forgot-password" id="forgot-password-link" className="forgot-password">
          Forgot password?
        </a>
      </div>

      <div id="signup-container" className="signup-container">
        <p className="footer-text">
          Don’t have an account? <Link to="/signup" className="login-link">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;