import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Components/screens/Home";
import Signup from "./Components/screens/Signup";
import Signin from "./Components/screens/Login";
import Profile from "./Components/screens/Profile";
import CreatePost from "./Components/screens/createPost";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/Signin">
        <Signin />
      </Route>
      <Route path="/Signup">
        <Signup />
      </Route>
      <Route path="/Profile">
        <Profile />
      </Route>
      <Route path="/create">
        <CreatePost />
      </Route>
    </BrowserRouter>
  );
}

export default App;
