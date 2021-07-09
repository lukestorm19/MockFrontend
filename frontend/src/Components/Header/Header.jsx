
import React from "react";
import logo from "../../assets/logo.png";
import { Container,Row,Col } from "reactstrap";
const customStyle={
position: "relative",

height: "43px",
left:600,
top: "10px",
fontFamily: "Roboto Mono",
fontStyle: "normal",
fontWeight: "bold",
fontSize: 28,
borderRadius:0,

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
      
      <div style={customStyle}><img src={logo} style={{height:40},{width:40}}/>Dataflow Dashboard</div>
        
      
      
    </header>
  );
}

export default Header;


