import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

import "../../ComponentsCss/Login.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const postData = () => {
    fetch("http://localhost:8000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error });
        } else {
          M.toast({ html: data.message });
          history.push("/login");
        }
        console.log(data);
      });
  };

  return (
    <div className="my-card">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn waves-effect waves-light "
          type="submit"
          name="action"
          onClick={() => postData()}
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
