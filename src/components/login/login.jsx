import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import loginVideo from './loginbgvideo.mp4'; // Import your video file
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can implement your login logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <div className="container">
      <video autoPlay loop muted className="video-bg">
        <source src={loginVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="login-container">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <Link to="/home"> {/* Link to the home route (usually "/") */}
          <button>Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;