import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="mobile-card">
      <h2 className="title">Sign Up</h2>
      <input type="text" placeholder="Full Name" className="input-field" />
      <input type="text" placeholder="Last Name" className="input-field" />
      <input type="email" placeholder="Email" className="input-field" />
      <input type="password" placeholder="Password" className="input-field" />
      <button className="primary-btn">Sign Up</button>
      
      <p className="sub-text" style={{ marginTop: '20px' }}>
        Already have an account? <Link to="/" className="login-link">Log in</Link>
      </p>
    </div>
  );
};
export default SignUp;