import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import logo from "../assets/logo.png";
const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#FFFFFF",
    },
    text: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#000000",
      textAlign: "right",
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
