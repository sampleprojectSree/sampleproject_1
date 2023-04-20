import React from "react";
import "../Navbar/Navbar.css";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homes from "../UseParams/Homes";
import Users from "../UseParams/Users";
import About from "../UseParams/About";
import UserDetailes from "../UseParams/UserDetailes";

function Navbar() {
  return (
    <>
      <div className="Nav-bar">
        <Router>
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/Users"}>
              <li>Users</li>
            </Link>

            <Link to={"/About"}>
              <li>About</li>
            </Link>
          </ul>
          <hr />
          <Switch>
            <Route path="/" exact component={Homes} />
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
