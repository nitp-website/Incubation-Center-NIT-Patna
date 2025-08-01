import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: ""
  });


const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post('http://localhost:5000/api/login', input);
    
    localStorage.setItem('loggedin', 'true');
    localStorage.setItem('role', res.data.role);
    localStorage.setItem('username', res.data.name);

    if (res.data.role === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/Notice');
    }

  } catch (err) {
    alert(err.response?.data?.message || 'Login failed');
  }
};


  const auth = [
    { email: "ankurverma6670@gmail.com", password: "Ankur@6770" },
    { email: "ankurverma7707@gmail.com", password: "Ankur@6670" },
    { email: "pankaj5656@gmail.com", password: "121212" }
  ];

  

  return (
    <div className="background">
      <Navbar />
      <form onSubmit={handleLogin}>
        <h3>Login Here</h3>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          placeholder="Email or Phone"
          id="email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          placeholder="Password"
          id="password"
          required
        />

        <button className="login" type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
