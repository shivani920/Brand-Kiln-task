import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="container">
    <h1>Welcome to the Task Management Dashboard</h1>
    <p>Click below to manage your tasks:</p>
    <Link to="/tasks">
      <button>Go to Tasks</button>
    </Link>
  </div>
);

export default Home;
