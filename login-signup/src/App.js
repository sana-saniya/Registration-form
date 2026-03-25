// import React, { useState } from "react";
// import "./App.css";

// import Login from "./components/Login";
// import Signup from "./components/Signup";

// function App() {

//   const [showLogin, setShowLogin] = useState(true);

//   return (

//     <div className="container">

//       {showLogin ? (
//         <Login switchToSignup={() => setShowLogin(false)} />
//       ) : (
//         <Signup switchToLogin={() => setShowLogin(true)} />
//       )}

//     </div>

//   );
// }

// export default App;


import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <Router>

      <div className="container">

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>

      </div>

    </Router>
  );
}

export default App;