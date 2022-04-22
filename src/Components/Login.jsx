import React, { useState } from "react";

function Login({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.prevent.Default();

    Login.details();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <div className="form-group">
            <label htmlFor="name">name:</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="text" name="email" id="email" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
