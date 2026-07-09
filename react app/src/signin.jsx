import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  return (
    <div className="mobile-card">
      <h2 className="title">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <p className="forgot-pass">Forgot password?</p>
        <button type="submit" className="primary-btn">Continue</button>
      </form>
      
      <p className="sub-text">Don't have an account yet?</p>
      <Link to="/signup" className="secondary-btn">Create an account</Link>
      
      <button className="social-btn">Sign in with Apple</button>
      <button className="social-btn">Sign in with Google</button>
      
      <p className="terms">By clicking "Continue" you have read and agree with the <u>Term Sheet, Privacy Policy</u></p>
    </div>
  );
};
export default SignIn;