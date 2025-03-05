// App.js - Main Navigation for Web App
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import "./styles/App.css";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Dashboard</Link>
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/register">Register</Link>}
      </nav>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/" element={<Dashboard user={user} />} />
      </Routes>
    </Router>
  );
};

export default App;
