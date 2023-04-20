import React, { useEffect, useState } from "react";
// import Login from "./Login";
// import Signin from "./Signin";
// import Home from "./Home";
// import Raju from "./Route/Raju";
// import Basic from "./Route/Basic/Basic";
// import Users from "./Route/UseParams/Users";
import Navbar from "./Route/Navbar/Navbar";
import Nav from "./Route/Navbar/Nav";

function App() {
  // const [component, setComponent] = useState(<Signin />);

  // useEffect(() => {
  //   let cookies = document.cookie;
  //   if (cookies) {
  //     let cookies_array = cookies.split(";");
  //     let username = cookies_array[1].split("=");
  //     if (username[1] !== "") {
  //       setComponent(<Home />);
  //     }
  //   }
  // }, []);
  return (
    <div>
      {/* {component} */}
      {/* <Raju />{" "} */}
      {/* <Basic /> */}
      <Navbar />
      {/* <Users/> */}
    </div>
  );
}

export default App;
