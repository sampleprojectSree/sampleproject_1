import React from "react";
import "../UseParams/Success.css";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
export default function Project() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Projects</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        back to home
      </button>
      <div>
        <nav className="Project-nav">
          <NavLink to="/Project/FeaturedProject">Featured Project</NavLink>
          <NavLink to="/Project/NewProject">New Project</NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
