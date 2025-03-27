import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";
import DoctorProfile from "./DoctorProfile"; // Doctor Profile page

const DoctorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve stored users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Normalize email to avoid case-sensitivity issues
    const normalizedEmail = email.toLowerCase();

    // Find user with matching email and password
    const validUser = users.find(
      (user) => user.email === normalizedEmail && user.password === password
    );

    if (!users.length) {
      // If no users exist in localStorage, registration has not happened
      alert("No registered doctors found. Please register first.");
      return;
    }

    if (validUser) {
      alert("Login Successful!");
      setIsLoggedIn(true);
      setTimeout(() => navigate("/doctorprofile"), 1000); // Redirect after 1 sec
    } else {
      alert("Invalid credentials! Please check your email or register first.");
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <DoctorProfile />
      ) : (
        <div className="auth-container">
          <h2>Doctor Login</h2>
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
            Don't have an account?{" "}
            <Link to="/doctorregister">Register here</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default DoctorLogin;
