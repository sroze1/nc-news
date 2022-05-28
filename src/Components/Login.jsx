import React, { useState, useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

function Login({ Login, error }) {
  const { setUsername, setShowProfile } = useContext(LoginContext);

  const submitHandler = (e) => {
    e.prevent.Default();

    Login.details();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username.."
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        name="username"
        id="username"
      />
      <input type="text" placeholder="Password..." name="password" />
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        LOGIN
      </button>
    </div>
  );
}

export default Login;
