import React, { useState } from "react";
import "../../src/Route/Raju.css";
import Ramu from "./Ramu";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Raju = () => {
  const [data, setData] = useState([]);
  const getUserList = async () => {
    const res = await fetch("https://gorest.co.in/public/v2/users/");
    const json = await res.json();
    setData(json);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <button onClick={getUserList}>Get Detailes</button>
            <table>
              <caption>Detailes of customers</caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Dist</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Link to={`/Ramu/${item.id}`}>{item.name}</Link>
                    </td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Route>
        <Route path={`/Ramu/:id`}>
          <Ramu />
        </Route>
      </Switch>
    </Router>
  );
};

export default Raju;
