import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((u) => u.email === email);

    if (!user) {
      setError("Email not found");
      return;
    }

    if (user.password !== password) {
      setError("Incorrect password");
      return;
    }

   localStorage.setItem("loggedUser", JSON.stringify(user));

    navigate("/dashboard");
  };

    useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");
    if(loggedUser){
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="form-container">

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

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

        <button type="submit">
          Login
        </button>

      </form>

      <p onClick={() => navigate("/signup")}>
        Don't have an account? <span className="highlight">Sign up</span>
      </p>

    </div>
  );
}

export default Login;