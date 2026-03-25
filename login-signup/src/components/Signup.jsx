import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((u) => u.email === email);


    if (userExists) {
      setError("User already exists");
      setSuccess("");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    const newUser = { username, email, password };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    setError("");
    setSuccess("Account created successfully! Please login.");

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

   useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");
    if(loggedUser){
      navigate("/dashboard"); 
    }
  }, [navigate]);

  return (
    <div className="form-container">

      <h2>Sign Up</h2>

      <form onSubmit={handleSignup}>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

    <div className="password-box">

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <i
        className={showPassword ? "fa-solid fa-eye eye-icon" : "fa-solid fa-eye-slash eye-icon"}
        onClick={() => setShowPassword(!showPassword)}
      ></i>

    </div>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button type="submit">
          Register
        </button>

      </form>

      <p onClick={() => navigate("/login")}>
        Already have an account? <span className="highlight">Login</span>
      </p>

    </div>
  );
}

export default Signup;