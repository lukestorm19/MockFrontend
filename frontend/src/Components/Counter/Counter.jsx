import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap';
import "./Counter.scss"
//import Chart from '../charts/Chart';
/*Class to display count of records*/
export default class Counter extends Component {
  state = {
    loading: true,
    record: null
  };
  /* fetch count from api */

  async componentDidMount() {
    try{
     const url = "https://mocki.io/v1/371fb4a1-2acd-43d0-85c8-8a3f057435db"; //mockapi
     const response = await fetch(url);
     const data = await response.json();
     this.setState({record:data, loading:false});
   }
    catch(err){
     console.log(err) //console error
   }
   
   }

  renderRecords(){  //rendering the no. of records
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.record) {
      return <div>didn't get records</div>;
    }
    return (
      <div className = "Main">
        {/*<Container >
        <Row>
          <div className="totalNo">
          <Col className="total">{this.state.record.number_of_records.total_records}</Col> <Col className="totalText">Total Number <br/>of Records</Col>
          </div>
        </Row>
        </Container>*/}
   
          <div className="Filtered">Filtered <div className="filter">{this.state.record.number_of_records.filtered_records}</div></div>
          <div className="HighException">High Exception <div className="highexception">{this.state.record.number_of_records.high_exception_records}</div></div>
          <div className="LowException">Low Exception <div className="lowexception">{this.state.record.number_of_records.low_exception_records}</div></div>
          <div className="Processed">Processed<div className="processed">{this.state.record.number_of_records.processed_records}</div></div>
     

        
      </div>
    );
    
  }
  render() {
    return (
      <div>
        {this.renderRecords()};
      </div>
    );
  }
}
