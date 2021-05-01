import React, { useContext } from "react";
import PeopleIcon from "@material-ui/icons/People";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

import { UserContext } from "../App";
import "../ComponentsCss/Navbar.css";

function Navbar() {
  const { state, dispatch } = useContext(UserContext);

  const renderList = () => {
    if (state) {
      return [
        <>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/create">create</Link>
          </li>
        </>,
      ];
    } else {
      return [
        <>
          <li>
            <Link to="/Signin">Signin</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
        </>,
      ];
    }
  };

  return (
    <div>
      <nav>
        <div className="nav-wrapper white">
          <Link to={state ? "/" : "/signin"} className="brand-logo">
            Instagram
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {renderList()}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
