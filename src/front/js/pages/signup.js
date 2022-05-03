import React, { useState } from "react";
import "../../styles/home.css";

export const Signup = () => {
  const [newUser, setNewUser] = useState("");
  const [newPass, setNewPass] = useState("");

  const createUser = async () => {
    const response = await fetch(
      "https://3000-thelgaris-flaskresthell-mn6bjxci1db.ws-eu43.gitpod.io/user",
      {
        method: "POST",
        body: JSON.stringify({ email: newUser }),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    console.log("@@@@@@@@@@@", data);
  };

  return (
    <div className="text-center mt-5">
      <input
        onChange={(e) => {
          setNewUser(e.target.value);
        }}
      ></input>
      <input
        onChange={(e) => {
          setNewPass(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          createUser();
        }}
      >
        Create User
      </button>
      <p>{newUser}</p>
    </div>
  );
};

export default Signup;
