
import React from "react";
import logo from "../../assets/logo.png";
import { Container,Row,Col } from "reactstrap";

const customStyle={
position: "relative",
marginLeft:550,
height: "50px",

top: "5px",
fontFamily: "Playfair Display Black",
fontStyle: "normal",
fontWeight: "bold",
fontSize: 35,
borderRadius:0,

/* or 78% */
display: "flex",
alignItems: "center",
textAlign: "center",
letterSpacing: "0.5px",
color: "#000000",  
}

function Header() {
  return (
    <header> 
      
      <div style={customStyle}><img src={logo} style={{height:50},{width:50}}/>Dataflow Dashboard</div>
        
      
      
    </header>
  );
}

export default Header;


