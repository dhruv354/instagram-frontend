import React from "react";
import PeopleIcon from "@material-ui/icons/People";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

import "../ComponentsCss/Navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper white">
          <Link to="/" className="brand-logo">
            Instagram
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/Signin">Signin</Link>
            </li>
            <li>
              <Link to="/Signup">Signup</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
