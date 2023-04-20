import { Button } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material";
import "../UseParams/Users.css";
import UserDetailes from "./UserDetailes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function Users() {
  const [userdata, setUserdata] = useState([]);
  const getUserData = async () => {
    const res = await fetch("https://gorest.co.in/public/v2/users/");
    const json = await res.json();
    setUserdata(json);
    console.log(userdata);
  };
  return (
    <>
      <div className="Main">
        <h1>Users</h1>

        <button onClick={getUserData}>Get List</button>
        <div className="card-container">
          {userdata.map((item) => {
            return (
              <Link key={item.id} to={`/UserDetailes/${item.id}`}>
                <article className="card">
                  <h3>{item.name}</h3>
                  <h3>{item.email}</h3>
                </article>
              </Link>
            );
          })}
        </div>
        <hr />
      </div>
      {/* <Router>
        <Switch>
          <Route path={`/UserDetailes/:id`}></Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default Users;
