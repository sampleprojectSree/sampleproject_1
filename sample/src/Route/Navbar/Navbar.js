import React from "react";
import "../Navbar/Navbar.css";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Homes from "../UseParams/Homes";
import Users from "../UseParams/Users";
import About from "../UseParams/About";
import UserDetailes from "../UseParams/UserDetailes";

function Navbar() {
  return (
    <>
      <div className="Nav-bar">
        <Router>
          <nav className="nav-link">
            <NavLink className="nav-link-nav" to={"/Homes"}>
              Home
            </NavLink>
            <NavLink className="nav-link-nav" to={"/Users"}>
              Users
            </NavLink>
            <NavLink className="nav-link-nav" to={"/About"}>
              About
            </NavLink>
          </nav>
          <Switch>
            <Route path="/Homes" exact component={Homes} />
            <Route path="/Users" exact component={Users} />
            <Route path="/About" exact component={About} />
            <Route path="/UserDetailes/:id" exact component={UserDetailes} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default Navbar;
