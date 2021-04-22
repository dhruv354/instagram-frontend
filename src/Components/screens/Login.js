import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../ComponentsCss/Login.css";

function Login() {
  return (
    <div className="my-card">
      <div className=" auth-card input-field">
        <h2>Instagram</h2>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button
          className="btn waves-effect waves-light "
          type="submit"
          name="action"
        >
          Login
        </button>
        <h5>
          <Link to="/signup">Don't have an account?</Link>
        </h5>
      </div>
    </div>
  );
}

export default Login;
