import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Components/screens/Home";
import Signup from "./Components/screens/Signup";
import Signin from "./Components/screens/Login";
import Profile from "./Components/screens/Profile";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </BrowserRouter>
  );
}

export default App;
