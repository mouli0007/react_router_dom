import React from "react";
import { Link } from "react-router-dom";
function Dashboard({ user }) {
  const { name, email } = user;
  return (
    <div>
      <h1> Welcome to ur Dashboard {name}</h1>
      <h2>{name}</h2>
      <h2>{email}</h2>

      <Link to="/" className="btn">
        Log-Out
      </Link>
    </div>
  );
}

export default Dashboard;
