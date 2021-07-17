import React from "react";
import logo from "../../assets/logo.png";
/*header styles*/
function headerStyle() {
  return {
    position: "relative",
    marginLeft: 550,
    height: "50px",
    top: "5px",
    fontFamily: "Playfair Display Black",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "40px",
    borderRadius: 0,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "0.5px",
    color: "#000000",
  };
}
const customStyle=headerStyle()

function Header() {
  return (
    <header> 
      <div style={customStyle}>
        <img src={logo} style={{height:60},{width:60}}/>
        <h1 style={{marginLeft:"40px"}}>Data Flow Dashboard</h1>
      </div>     
    </header>
  );
}

export default Header;


