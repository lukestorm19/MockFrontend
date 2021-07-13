import React, {useEffect,useState,Component } from 'react'

import dashboard from "./dashboard.svg";
import { login, logout } from "../../features/userSlice";
import { useDispatch} from "react-redux";
import styled, { createGlobalStyle, css } from 'styled-components';
import axios from "axios";
const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: "Roboto", sans-serif;
    background-color:#F3F2F2; 
    height: 80%;
    margin: 0;
  }
`;

const sharedStyles = css`
  background-color: #224957;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  background-color: #224957;
  border-radius: 10px;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #ffffff;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
const StyledButton = styled.button`
  display: block;
  background-color: #069697;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
   border-radius: 10px;
  color: #fff;
  border: 0;
  font-size:18px;
  height: 40px;
  
  padding: 0 50px;
  cursor: pointer;
  box-sizing: border-box;
  align-items:center;
`;

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;


const Login = () => {
    
    const[email,setEmail] = useState();
    const[region,setRegion] = useState();
    const[businessLine,setBusinessLine] = useState();
    const[password,setPassword] = useState();
    const dispatch = useDispatch();
     
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.get('http://localhost:8000/getUserRecords')
      .then(res => {
        const user = res.data[0].user_name;
        const password = res.data[0].password;
        const businessLine = res.data[0].user_business_line;
        const region = res.data[0].user_region;
        const username = email;
        const passwordEntered = password;
        if(username === '' && passwordEntered === ''){
          console.log("username password")
        }else if(user === username && passwordEntered === password){
          
          console.log(user, password)
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
    
        }else{
            console.log("error")
        }
      })
      .catch(error => {
        console.log(error);
      });
  
    };

    
    return(
      <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={(e) => handleSubmit(e)}>
          <h2 style={{color:"#000000"},{fontFamily:"Lexend Deca"},{fontSize:30}}>Login</h2>
          <label htmlFor="email" style={{color:"#000000"},{fontFamily:"Lexend Deca"},{fontSize:18}}>Email</label>
          <StyledInput 
                type = "email" 
                 style={{color:"#ffffff"}}
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}/>
          <label htmlFor="password" style={{color:"#000000"},{fontFamily:"Lexend Deca"},{fontSize:18}}>Password</label>
          <StyledInput 
                type = "password" 
                style={{color:"#ffffff"}}
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}/>
          
          <StyledButton type="submit" style={{fontFamily:"Lexend Deca"}}>Login</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
      
        
        
    )
    
}

export default Login;

