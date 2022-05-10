import React, { useState } from "react";
import "../../styles/home.css";

export const Signup = () => {
  const [user, setUser] = useState({});

  const createUser = async () => {
    const response = await fetch(
      "https://3001-4geeksacade-reactflaskh-vwqwkly1h2c.ws-eu44.gitpod.io/api/signup",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    console.log("@@@@@@@@@@@", data);
  };

  return (
    <div className="text-center mt-5">
      <input
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      ></input>
      <input
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      ></input>
      <button
        onClick={() => {
          createUser();
        }}
      >
        Create User
      </button>
    </div>
  );
};

export default Signup;
