import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

import "../../ComponentsCss/Login.css";

// const regex_email =
//   "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const postData = () => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      ) === false
    ) {
      return M.toast({
        html: "invalid email",
        classes: "#e57373 red lighten-2",
      });
    } //else {
    //   return console.log("valid");
    // }

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
          M.toast({ html: data.error, classes: "#e57373 red lighten-2" });
        } else {
          M.toast({ html: data.message, classes: "#43a047 green darken-1 " });
          history.push("/signin");
        }
      })
      .catch((err) => console.log(err));
    // console.log(data);
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
          type="text"
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
