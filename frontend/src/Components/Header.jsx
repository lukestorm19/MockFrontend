import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import {Row,Col} from 'react-bootstrap';

import React from "react";
import logo from "../assets/logo.png";
const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#FFFFFF",
      position:"relative", 
      marginTop:10,
    },
    text: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#000000",
    },
    
  }));
  
  export default function Header() {
    const { header, text } = useStyles();
  
    const displayText = () => {
      return <Toolbar>{heading}</Toolbar>;
    };
  
    const heading = (
      <Typography variant="h6" component="h1" className={text}>
        Data Flow Dashboard
      </Typography>
    );
  
    return (
      <header>
          <AppBar className={header}>{displayText()}</AppBar>
      </header>
    );
  }
