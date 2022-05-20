import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});

  const createUser = async () => {
    const response = await fetch(
      "https://3001-thelgaris-jwtathentific-xarmb4m2g0h.ws-eu45.gitpod.io/api/signup",
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
    <div className="container">
      <div className="row mx-auto">
        <div className="">
          <input
            id="email"
            type="text"
            className="form-control"
            placeholder="Email"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
          <input
            id="password"
            type="text"
            className="form-control"
            placeholder="Password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </div>
        <div className="d-grid gap-2  mx-auto">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              createUser();
            }}
          >
            Registrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
