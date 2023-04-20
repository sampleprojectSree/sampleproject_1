import React, { useState, useEffect } from "react";

const RajuDetailes = () => {
  const [data, setData] = useState([]);
  const getUserDetailes = async () => {
    const res = await fetch("https://gorest.co.in/public/v2/users/");
    const json = await res.json();
    setData(json);
  };

  return (
    <div>
      <button onClick={getUserDetailes}>Getdata</button>
      <p>{data.name}</p>
    </div>
  );
};

export default RajuDetailes;
