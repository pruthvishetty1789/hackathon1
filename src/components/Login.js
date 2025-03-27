import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import Prediction from "./Prediction"; // Import Prediction component

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      alert("Login Successful!");
      setIsLoggedIn(true); // Update state to show Prediction page
    } else {
      alert("User not found! Please register first.");
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <Prediction /> // Show Prediction page if logged in
      ) : (
        <div className="auth-container">
          <h2>User Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
