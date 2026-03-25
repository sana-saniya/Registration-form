import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  const username = loggedUser ? loggedUser.username : "User";

   useEffect(() => {
    if(!loggedUser){
      navigate("/login");
    }
  }, [loggedUser, navigate]);

  const logout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };

  return (
    <div className="form-container">

      <h2>Welcome {username} 👋</h2>

      <p>You are logged in successfully.</p>

      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default Dashboard;