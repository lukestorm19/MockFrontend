import React, {useEffect, Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";

const Home = () => {
  

  return (
      <div>
          <Header/>
          <Navbar/>
          
      </div>
    
     
    
  );
};


export default Home;
