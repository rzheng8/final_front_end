
// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const checkLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      navigate('/dashboard'); // Redirect to the dashboard
    } else {
      alert('Invalid Username or Password!');
    }
  };

  return (
    <div className="container p-3">
      <h2>Login to Dashboard</h2>
      <form onSubmit={checkLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" className="form-control" id="username" required
            value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" className="form-control" id="password" required
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;

