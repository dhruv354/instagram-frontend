import React from "react";

function Login() {
  return (
    <div className="my-card">
      <div className="card authcard">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
