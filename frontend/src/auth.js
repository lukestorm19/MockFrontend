  
import React from "react";
import Login from "./Components/Login/Login";


import { selectUser } from "./features/userSlice"
import { useSelector } from "react-redux";
import Logout from "./Components/Logout/Logout";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Overview/Dashboard";
import Routes from "./routes";
const Auth = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return <div>{user ? <Routes /> : <Login />}</div>;
};

export default Auth;