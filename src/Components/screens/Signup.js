import React from "react";
import { Link } from "react-router-dom";

import "../../ComponentsCss/Login.css";

function Signup() {
  return (
    <div className="my-card">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button
          className="btn waves-effect waves-light "
          type="submit"
          name="action"
        >
          Signup
        </button>
        <h5>
          <Link to="/signin">Already have account?</Link>
        </h5>
      </div>
    </div>
  );
}

export default Signup;
