import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetailes() {
  const { id } = useParams();
  console.log(useParams);
  const [data, setData] = useState([]);
  const getFullDetailes = async () => {
    const res = await fetch(`https://gorest.co.in/public/v2/users/${id}`);
    const json = await res.json();
    setData(json);
  };
  useEffect(() => {
    getFullDetailes();
  }, []);

  return (
    <div className="container">
      <Link to={"/"}>Get Back</Link>
      <h1>UserDetailes</h1>
      <h2>
        {" "}
        Hello
        <strong>{data.name}</strong>
      </h2>
    </div>
  );
}

export default UserDetailes;
