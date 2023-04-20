import React, { useState } from "react";
import LockOpen from "@mui/icons-material/LockOpen";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Signin.css";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    document.cookie = "username=" + Base64.btoa(username);
    document.cookie = "password=" + Base64.btoa(password);
    window.location.reload();
  };

  return (
    <div className="Signin">
      <LockOpen fontSize="large" className="LockIcon" />
      <Typography
        sx={{ marginTop: "10px", fontWeight: 600 }}
        className="Title"
        variant="h6"
      >
        Signin
      </Typography>
      <TextField
        className="Username"
        label="Username"
        variant="outlined"
        required
        sx={{ marginTop: "8vh" }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <TextField
        className="Password"
        label="Password"
        variant="outlined"
        type="password"
        required
        sx={{ marginTop: "2vh" }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        className="Login"
        variant="contained"
        sx={{ marginTop: "4vh", fontWeight: 600 }}
        onClick={handleSubmit}
      >
        Login
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
export default Signin;
