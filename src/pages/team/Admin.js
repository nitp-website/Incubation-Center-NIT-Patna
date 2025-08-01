import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';
import Navbar from '../Navbar';
import './Admin.css'; // Import the CSS

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    // Validate input fields before sending request
    if (!username.trim() || !password.trim()) {
      setError('All fields are required.');
      return;
    }

    try {
      const res = await axios.post('https://incubation-8kdm.onrender.com/api/login', {
      email: username,  // change key to "email"
      password,
      });

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);

      if (res.data.role === 'admin') {
        navigate('/#Home');
      } 
      else{
        navigate('/#Home');
      }
      window.location.reload();
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
   <>
  <Navbar />
  <div className="login-container">
    <div className="login-box">
      <h2>Login to Your Account</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <input
          type="text"
          placeholder="Email or Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit" disabled={!username.trim() || !password.trim()}>
          Login
        </button>
      </form>
    </div>
  </div>
  <Footer />
</>

  );
}

export default Login;
