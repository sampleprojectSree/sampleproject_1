import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Ramu = () => {
  const { id } = useParams();
  console.log(useParams);
  const [data, setData] = useState([]);
  const getDetailes = async () => {
    const res = await fetch(`https://gorest.co.in/public/v2/users/${id}`);
    const json = await res.json();
    setData(json);
  };
  useEffect(() => {
    getDetailes();
  }, []);

  return (
    <div className="container">
      <Link to={`/`}>Get Back</Link>
      {/* <button>get data</button> */}
      {/* {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))} */}
      <h1>
        Hello
        <strong>{data.name}</strong>
      </h1>
    </div>
  );
};

export default Ramu;
