import React, { useState,Component } from 'react'
import "./Login.css";

import { login, logout } from "../../features/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {

    const[email,setEmail] = useState();
    const[region,setRegion] = useState();
    const[businessLine,setBusinessLine] = useState();
    const[password,setPassword] = useState();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
  
      dispatch(
        login({
          email: email,
          password: password,
          region:region,
          businessLine:businessLine,
          loggedIn: true,
        })
      );
  
      setEmail("");
      setPassword("");
      setRegion("");
      setBusinessLine("");
    };
    return(
        <div className="Login">
            <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Login Here</h1>
                <input 
                type = "email" 
                placeholder="email" 
                value={email}
                onChange = {(e) => setEmail(e.target.value)}/>
                <input 
                type = "password" 
                placeholder="password" 
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}/>
                <input 
                type = "name" 
                placeholder="region" 
                value = {region}
                onChange = {(e) => setRegion(e.target.value)}/>
                <input
                type = "name" 
                placeholder="business line" 
                value = {businessLine}
                onChange = {(e) => setBusinessLine(e.target.value)}/>
                <button type="submit" className="submit__btn">
                  Submit
                </button>


            </form>
        </div>
    )
    
}

export default Login;