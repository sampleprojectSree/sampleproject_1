import { Button } from "@mui/material";
import React, { useEffect } from "react";

const Home = () => {
  const handleLogout = () => {
    let cookies = document.cookie;
    if (cookies) {
      let cookies_array = cookies.split(":");
      console.log(cookies_array[1]);
      // alert(cookies_array);

      document.cookie = "username=";
      document.cookie = "password=";
      window.location.reload();
    }
  };

  return (
    <div className="Home">
      <Button
        sx={{
          marginTop: "4vh",
          fontWeight: 600,
          width: "100px",
          height: "40px",
        }}
        variant="contained"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const Base64 = {
  btoa: (input = "") => {
    let str = input;
    let output = "";

    for (
      let block = 0, charCode, i = 0, map = chars;
      str.charAt(i | 0) || ((map = "="), i % 1);
      output += map.charAt(63 & (block >> (8 - (i % 1) * 8)))
    ) {
      charCode = str.charCodeAt((i += 3 / 4));

      if (charCode > 0xff) {
        throw new Error(
          "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
        );
      }

      block = (block << 8) | charCode;
    }

    return output;
  },

  atob: (input = "") => {
    let str = input.replace(/=+$/, "");
    let output = "";

    if (str.length % 4 == 1) {
      throw new Error(
        "'atob' failed: The string to be decoded is not correctly encoded."
      );
    }
    for (
      let bc = 0, bs = 0, buffer, i = 0;
      (buffer = str.charAt(i++));
      ~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4)
        ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
        : 0
    ) {
      buffer = chars.indexOf(buffer);
    }

    return output;
  },
};
export default Home;
