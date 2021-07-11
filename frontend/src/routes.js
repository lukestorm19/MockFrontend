  
import React from "react";
import Login from "./Components/Login/Login";
import "./App.css";

import { selectUser } from "./features/userSlice"
import { useSelector } from "react-redux";
import Logout from "./Components/Logout/Logout";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Overview/Dashboard";
const Routes = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return <div>{user ? <Home /> : <Login />}</div>;
};

export default Routes;