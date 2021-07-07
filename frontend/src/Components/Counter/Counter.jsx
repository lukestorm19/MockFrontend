import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap';
import "./Counter.css"
export default class Counter extends Component {
  state = {
    loading: true,
    record: null
  };

  async componentDidMount() {
    try{
     const url = "https://mocki.io/v1/371fb4a1-2acd-43d0-85c8-8a3f057435db";
     const response = await fetch(url);
     const data = await response.json();
     this.setState({record:data, loading:false});
   }
    catch(err){
     console.log(err)
   }
   
   }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.record) {
      return <div>didn't get records</div>;
    }
    
    return (
      <div className = "Main">
        
        <Row>
          <div className="totalNo">
          <div className="total">{this.state.record.number_of_records.total_records} <div className="totalText">Total Number <br/>of Records</div></div>
          </div></Row>
      <Container>
        <Row>
          <Col className="Filtered">Filtered <div className="filter">{this.state.record.number_of_records.filtered_records}</div></Col>
          <Col className="HighException">High Exception <div className="highexception">{this.state.record.number_of_records.high_exception_records}</div></Col>
          <Col className="LowException">Low Exception <div className="lowexception">{this.state.record.number_of_records.low_exception_records}</div></Col>
          <Col className="Processed">Processed<div className="processed">{this.state.record.number_of_records.processed_records}</div></Col>
        </Row>
      </Container>
      </div>
    );
  }
}
/*
const Counter = () => (
 
 
)

export default Counter;*/