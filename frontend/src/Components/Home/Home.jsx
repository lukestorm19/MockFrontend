import React, {useEffect, Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

  const logout = (e) => {
    dispatch(logout());
  };

  return (
      <div>
          <Header/>
          <Navbar/>
          <h1>
        Welcome <span style={{marginLeft:200}}>{user.businessLine}</span>!
      </h1>
      <button className="logout__button" onClick={(e) => logout(e)}>
        Log out
      </button>
      </div>
    
     
    
  );
};


export default Home;
