import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signin from "./Signin";
import Home from "./Home";
import Raju from "./Route/Raju";

function App() {
  const [component, setComponent] = useState(<Signin />);

  useEffect(() => {
    let cookies = document.cookie;
    if (cookies) {
      let cookies_array = cookies.split(";");
      let username = cookies_array[1].split("=");
      if (username[1] !== "") {
        setComponent(<Home />);
      }
    }
  }, []);
  return (
    <div>
      {/* {component} */}
      <Raju />{" "}
    </div>
  );
}

export default App;
