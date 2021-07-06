import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap';
import "./Counter.css"

const Counter = () => (
 
  <div className = "Main">
  <Container>
    <Row>
      <Col className="Filtered">Filtered <div className="filter">140</div></Col>
      <Col className="HighException">High Exception <div className="highexception">100</div></Col>
      <Col className="LowException">Low Exception <div className="lowexception">120</div></Col>
      <Col className="Processed">Processed<div className="processed">170</div></Col>
    </Row>
  </Container>
  </div>
)

export default Counter;