import React, { Component } from 'react';
import download from './download.png';
import {Container, Col, Row} from 'reactstrap';
import logo from './download.png'

const styles = {

    Header:{
        background:'#ffffff',
        height: "50px",
        top: "10px",
        marginLeft:600,
        width:"50%",   
        position: "relative",
        marginBottom:"50px",

    },
    Logo:{
        width: 50,
        height: 50,
        float:"left",
        marginRight:20,
    },

    heading:{
        fontFamily: "Quicksand",
        fontStyle: "Medium",
        fontWeight: "bold",
        fontSize: 200,
        float:"right",
        width:"100%",
        
    }
}


export default function Header(){
    return(
        <Container className = "Header" style={styles.Header}>
         <Row>
         <Col xs="auto"><img className = "Logo" style = {styles.Logo} src={logo} /></Col>
         <Col><h1 className = "Heading" style = {styles.Heading}>Data Flow Dashboard </h1> </Col>
         </Row>
       </Container>
    );
}