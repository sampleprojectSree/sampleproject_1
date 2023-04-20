import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Basic() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <hr />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}
function About() {
  return <h2>About</h2>;
}
function Dashboard() {
  return <h2>Dashboard</h2>;
}
function Contact() {
  return <h2>Contact</h2>;
}
