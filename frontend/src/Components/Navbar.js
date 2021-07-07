import React from "react";
const headStyle={
  "position": "absolute",
  "width": "105px",
  "height": "24px",
  "left": "76px",
  "top": "41px",
  "fontFamily": "Mulish",
  "fontStyle": "normal",
  "fontWeight": "bold",
  "fontSize": "19px",
  "lineHeight": "24px",
  "letterSpacing": "0.4px",
  "color": "#A4A6B3",
  "opacity": "0.7"


}
const navStyle={
  position: "absolute",
  width: "245px",
  height: "1000px",
  left: "-8px",
  top: "0px",
  background: "#363740",
}
const itemStyle={ 
  top:"50px",
  fontFamily: "Mulish",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "20px",
  lineWeight: "20px",
  letterSpacing: "0.2px",
  color: "#DDE2FF",
  textDecoration: "none",
  
}
const listStyle={
  listStyleType: "none",
  position:"absolute",
  textAlign: "left",
  top:"100px"
}
function Navbar() {
  return (
    <nav style={navStyle}>
      <h3 style={headStyle} >Dashboard</h3>
      <ul style={listStyle}>
        <li  ><a href="#" style={itemStyle}>Overview</a></li>
        <li ><a href="#" style={itemStyle}>Filter</a></li>
        <li ><a href="#" style={itemStyle}>Exception</a></li>
    </ul>
    </nav>
  );
}

export default Navbar;
