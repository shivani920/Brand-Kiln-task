import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <div className="container">
      <Link to="/tasks">Task Management Dashboard</Link>
    </div>
  </header>
);

export default Header;
