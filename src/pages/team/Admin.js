import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';
import Navbar from '../Navbar';
import './Admin.css';
import api from '../../api/axios';
import { useAuth } from '../../context/authcontext'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { login: setAuth } = useAuth(); 

  const login = async () => {
    if (!username.trim() || !password.trim()) {
      setError('All fields are required.');
      return;
    }

    try {
      const res = await api.post('/auth/login', {
        email: username,
        password
      });
      console.log(res);
      const { accessToken, role } = res.data;

      setAuth({ accessToken, role });

      if (role === 'ADMIN' || role === 'SUPER_ADMIN') {
        navigate('/admin/dashboard', { replace: true });
      } else {
        navigate('/', { replace: true });
      }


    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>

          <form onSubmit={(e) => { e.preventDefault(); login(); }}>

            <input
              type="text"
              placeholder="Email"
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

            <button type="submit">Login</button>

          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;