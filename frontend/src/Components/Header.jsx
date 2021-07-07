
import React from "react";
import logo from "../assets/logo.png";

const customStyle={
position: "relative",
width: "419px",
height: "43px",
left: "615px",
top: "10px",
fontFamily: "Roboto Mono",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "30px",
lineHeight: "28px",
/* or 78% */
display: "flex",
alignItems: "center",
textAlign: "center",
letterSpacing: "0.15px",
color: "#000000",  
}

function Header() {
  return (
    <header> 
      <h1 style={customStyle}>Dataflow Dashboard</h1>
    </header>
  );
}

export default Header;


