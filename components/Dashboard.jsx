// components/Dashboard.jsx - Dashboard Page
import React from "react";
import "../styles/Dashboard.css";

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard-container">
      <h2>Welcome {user ? user.name : "Guest"}</h2>
      <p>This is your healthcare dashboard.</p>
    </div>
  );
};

export default Dashboard;
