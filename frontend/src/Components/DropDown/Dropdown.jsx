import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select';
import styled, { createGlobalStyle, css } from 'styled-components';
import { logout, selectUser } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Dropdown = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const businessLine = [
    { label: user.businessLine, value: 1 }
  ];

  const region = [
    { label: user.region, value: 1 }
  ];

  return(
   <div className="container">
    <div className="row">
    
      <div className="col" style={{marginLeft:500}}>
    
        <Select options={businessLine} placeholder = "Business Line" />
      </div>
      <div className="col">
    
        <Select options={region} placeholder = "Region" />
      </div>
      <div className="col"></div>
      
    </div>
  </div>
  );
};
 
export default Dropdown;