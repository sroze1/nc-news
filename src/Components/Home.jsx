import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Login";

const Home = () => {
  // let navigate = useNavigate;

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const defaultPwd = "password";
  const defaultEmail = "email@gmail.com";

  let navigate = useNavigate;

  const Login = (details) => {
    console.log(details);
  };
  const Logout = () => {
    console.log("Logout");
  };

  return (
    <div>
      {user.email !=
        "" >
        (
          <div>
            {" "}
            <h2>Welcome {user.email}</h2>
            <button> Logout</button>
          </div>
        )}{" "}
      <Login />
    </div>
  );
};

export default Home;
