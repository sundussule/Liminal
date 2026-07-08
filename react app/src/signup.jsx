import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Signing up with:', email, password);
  };

  return (
    <div id="signup-wrapper" className="login-wrapper">
      <div id="signup-card" className="login-card">
        <h1 className="brand-name">Liminal</h1>
        
        <form id="signup-form" onSubmit={handleSignUp}>
          <input 
            type="email" 
            className="login-input" 
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            className="login-input" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input 
            type="password" 
            className="login-input" 
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>

        <p className="footer-text">
          Already have an account? <Link to="/login" className="login-link">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;