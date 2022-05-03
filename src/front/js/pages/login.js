import React, { useState } from "react";
import "../../styles/home.css";

export const Login = () => {
  const [User, setUser] = useState("");
  const [Pass, setPass] = useState("");
  return (
    <div className="text-center mt-5">
      <div className="row">
        <h3>Email</h3>
        <input
          className="col-4 offset-4"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        ></input>
      </div>
      <div className="row">
        <h3>Password</h3>
        <input
          className="col-4 offset-4"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        ></input>
      </div>
      <button>Login</button>
      <p>{User}</p>
    </div>
  );
};

export default Login;
