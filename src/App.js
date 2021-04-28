import React, { createContext, useEffect, useReducer } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

import Home from "./Components/screens/Home";
import Signup from "./Components/screens/Signup";
import Signin from "./Components/screens/Login";
import Profile from "./Components/screens/Profile";
import CreatePost from "./Components/screens/createPost";
import Navbar from "./Components/Navbar";
import { initialState, reducer } from "./Components/reducers/userReducer";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(typeof user, user);
    if (user) {
      history.push("/");
    } else {
      history.push("/signin");
    }
  }, []);

  return (
    <Switch>
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
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
