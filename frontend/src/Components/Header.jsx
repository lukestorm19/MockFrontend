import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import {Row,Col,Container} from 'react-bootstrap';

import React, {Component} from "react";
import logo from "../assets/logo.png";

class Header extends Component {
    state = {  }
    render() { 
        const style = {
            height:50,
            width:50,
            
          };
        return ( 
            <Container>
                <Row>
                 <Col><img src = {logo} style={style} alt="logo"/></Col>
                 <Col><div className="Title">Data Flow Dashboard</div></Col>
                </Row>
            </Container>
            
         );
    }
}
 
export default Header;