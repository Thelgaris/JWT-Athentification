import React, { useState } from "react";
import "../../styles/home.css";

export const Login = () => {
  const [user, setUser] = useState("");

  const login = async () => {
    try {
      const response = await fetch(
        "https://3001-thelgaris-jwtathentific-zpl9m4yaiwv.ws-eu45.gitpod.io/api/login",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      localStorage.setItem("token", data.token);
      console.log("@@@@@@@@@@@", data);
    } catch (e) {
      alert("Error");
    }
  };

  return (
    <div className="text-center mt-5">
      <div className="row">
        <h3>Email</h3>
        <input
          id="email"
          className="col-4 offset-4"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        ></input>
      </div>
      <div className="row">
        <h3>Password</h3>
        <input
          id="password"
          className="col-4 offset-4"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        ></input>
      </div>
      <button
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
